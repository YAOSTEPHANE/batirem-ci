"use client";

import { useEffect } from "react";

function animateCounter(el: HTMLElement, target: number, suffix = "+") {
  const duration = 2000;
  const start = performance.now();
  const update = (time: number) => {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(ease * target);
    el.innerHTML = `${current}<sup>${suffix}</sup>`;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

export function SiteEffects() {
  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 60);
      const grid = document.querySelector<HTMLElement>(".hero-grid");
      if (grid) {
        grid.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = parseInt(
              (e.target as HTMLElement).dataset.target ?? "0",
              10
            );
            animateCounter(e.target as HTMLElement, target, "+");
            statsObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("[data-target]").forEach((el) =>
      statsObserver.observe(el)
    );

    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", scrollToHash);
      observer.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  return null;
}

export function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const btn = e.currentTarget.querySelector<HTMLButtonElement>(".form-submit");
  if (!btn) return;
  const original = btn.innerHTML;
  btn.textContent = "✓ Message envoyé !";
  btn.style.background = "#666666";
  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = "";
  }, 3500);
}
