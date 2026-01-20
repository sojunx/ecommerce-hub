"use client";

import { useCart } from "@/lib/cart-context";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Left Nav */}
        <div className="hidden lg:flex lg:gap-x-8">
          <Link
            href="/shop"
            className="text-xs uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/collections"
            className="text-xs uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors"
          >
            Collections
          </Link>
          <Link
            href="/about"
            className="text-xs uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors"
          >
            About
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Logo */}
        <Link href="/" className="font-serif text-xl tracking-wide">
          NØRD
        </Link>

        {/* Right Nav */}
        <div className="flex items-center gap-x-6">
          <button type="button" className="hidden lg:block">
            <span className="sr-only">Search</span>
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>
          <Link href="/cart" className="relative">
            <span className="sr-only">Shopping cart</span>
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center text-[10px] bg-foreground text-background">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/" className="font-serif text-xl tracking-wide">
              NØRD
            </Link>
            <button type="button" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-12 flex flex-col items-center gap-8">
            <Link
              href="/shop"
              className="text-sm uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/collections"
              className="text-sm uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="text-sm uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
