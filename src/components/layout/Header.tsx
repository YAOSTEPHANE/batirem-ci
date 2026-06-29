"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navGroups, navLinks, phoneHref, siteConfig } from "@/lib/constants";
import { routes } from "@/lib/routes";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const nav = document.getElementById("nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`nav${mobileOpen ? " nav-open" : ""}`} id="nav">
        <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={siteConfig.name}
            width={168}
            height={42}
            className="nav-logo-img"
            priority
          />
        </Link>

        <ul className="nav-links nav-links-desktop">
          {navGroups.map((item) =>
            "items" in item ? (
              <li
                key={item.label}
                className="nav-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-dropdown-trigger${dropdownOpen ? " open" : ""}`}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="nav-dropdown-panel">
                  {item.items.map((sub) => (
                    <Link key={sub.href} href={sub.href} className="nav-dropdown-item">
                      <span className="nav-dropdown-item-label">{sub.label}</span>
                      <span className="nav-dropdown-item-desc">{sub.desc}</span>
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ),
          )}
        </ul>

        <div className="nav-right">
          <a href={phoneHref(siteConfig.contact.phone)} className="nav-tel">
            {siteConfig.contact.phone}
          </a>
          <Link href={routes.contact} className="nav-btn">
            Prendre RDV
          </Link>
          <button
            type="button"
            className={`nav-ham${mobileOpen ? " open" : ""}`}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`nav-mobile${mobileOpen ? " open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <div className="nav-mobile-inner">
          <p className="nav-mobile-tag">{siteConfig.tagline}</p>
          <ul className="nav-mobile-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={phoneHref(siteConfig.contact.phone)}
            className="nav-mobile-tel"
            onClick={() => setMobileOpen(false)}
          >
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </>
  );
}
