"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, X, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart()

  if (items.length === 0) {
    return (
      <main>
        <Header />
        <section className="min-h-[70vh] flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-serif text-3xl md:text-4xl mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Discover our collection of curated tech essentials.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-widest hover:bg-foreground/90 transition-colors"
            >
              Continue Shopping
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />

      <section className="px-6 lg:px-8 pt-32 pb-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-3xl md:text-4xl mb-12">Shopping Cart</h1>

          <div className="border-t border-border">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 py-6 border-b border-border"
              >
                {/* Image */}
                <Link
                  href={`/product/${item.id}`}
                  className="relative w-24 h-32 flex-shrink-0 overflow-hidden bg-secondary"
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <Link
                        href={`/product/${item.id}`}
                        className="font-sans hover:text-muted-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        ${item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-border">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="px-3 min-w-[2.5rem] text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Line Total */}
                    <p className="text-sm">${item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-8 flex flex-col items-end">
            <div className="w-full max-w-sm">
              <div className="flex justify-between py-4 border-b border-border">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-sm text-muted-foreground">Calculated at checkout</span>
              </div>
              <Link
                href="/checkout"
                className="block w-full mt-6 bg-foreground text-background py-4 text-xs uppercase tracking-widest hover:bg-foreground/90 transition-colors text-center"
              >
                Proceed to Checkout — ${total}
              </Link>
              <Link
                href="/shop"
                className="block text-center mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
