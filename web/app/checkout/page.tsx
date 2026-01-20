"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/lib/cart-context"
import { ArrowLeft, Check, Lock } from "lucide-react"

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const router = useRouter()
  const [step, setStep] = useState<"info" | "shipping" | "payment" | "complete">("info")
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
    cardNumber: "",
    expiry: "",
    cvc: "",
  })

  const shipping = 0 // Free shipping
  const tax = total * 0.08
  const grandTotal = total + shipping + tax

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === "info") setStep("shipping")
    else if (step === "shipping") setStep("payment")
    else if (step === "payment") {
      setStep("complete")
      clearCart()
    }
  }

  if (items.length === 0 && step !== "complete") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-3xl mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Add some items to checkout.</p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 text-sm uppercase tracking-wider hover:bg-foreground/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (step === "complete") {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8" />
            </div>
            <h1 className="font-serif text-3xl mb-4">Order Confirmed</h1>
            <p className="text-muted-foreground mb-2">
              Thank you for your order. We&apos;ve sent a confirmation to {formData.email}.
            </p>
            <p className="text-muted-foreground mb-8">
              Order #NRD-{Math.random().toString(36).substring(2, 8).toUpperCase()}
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-3 text-sm uppercase tracking-wider hover:bg-foreground/90 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Section */}
            <div className="lg:col-span-7">
              {/* Progress Steps */}
              <div className="flex items-center gap-4 mb-10">
                <div className={`flex items-center gap-2 ${step === "info" ? "text-foreground" : "text-muted-foreground"}`}>
                  <div className={`w-6 h-6 flex items-center justify-center text-xs ${step !== "info" ? "bg-foreground text-background" : "border border-foreground"}`}>
                    {step !== "info" ? <Check className="h-3 w-3" /> : "1"}
                  </div>
                  <span className="text-sm">Information</span>
                </div>
                <div className="flex-1 h-px bg-border" />
                <div className={`flex items-center gap-2 ${step === "shipping" ? "text-foreground" : "text-muted-foreground"}`}>
                  <div className={`w-6 h-6 flex items-center justify-center text-xs ${step === "payment" ? "bg-foreground text-background" : step === "shipping" ? "border border-foreground" : "border border-border"}`}>
                    {step === "payment" ? <Check className="h-3 w-3" /> : "2"}
                  </div>
                  <span className="text-sm">Shipping</span>
                </div>
                <div className="flex-1 h-px bg-border" />
                <div className={`flex items-center gap-2 ${step === "payment" ? "text-foreground" : "text-muted-foreground"}`}>
                  <div className={`w-6 h-6 flex items-center justify-center text-xs ${step === "payment" ? "border border-foreground" : "border border-border"}`}>
                    3
                  </div>
                  <span className="text-sm">Payment</span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Information Step */}
                {step === "info" && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl mb-6">Contact Information</h2>
                    <div>
                      <label htmlFor="email" className="block text-sm mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm mb-2">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm mb-2">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-foreground text-background py-4 text-sm uppercase tracking-wider hover:bg-foreground/90 transition-colors"
                    >
                      Continue to Shipping
                    </button>
                  </div>
                )}

                {/* Shipping Step */}
                {step === "shipping" && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl mb-6">Shipping Address</h2>
                    <div>
                      <label htmlFor="address" className="block text-sm mb-2">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm mb-2">City</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm mb-2">State</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="zip" className="block text-sm mb-2">ZIP Code</label>
                        <input
                          type="text"
                          id="zip"
                          name="zip"
                          value={formData.zip}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm mb-2">Country</label>
                        <select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep("info")}
                        className="flex-1 border border-border py-4 text-sm uppercase tracking-wider hover:bg-secondary transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-foreground text-background py-4 text-sm uppercase tracking-wider hover:bg-foreground/90 transition-colors"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </div>
                )}

                {/* Payment Step */}
                {step === "payment" && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl mb-6">Payment</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Lock className="h-4 w-4" />
                      <span>Secure, encrypted payment</span>
                    </div>
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm mb-2">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiry" className="block text-sm mb-2">Expiry Date</label>
                        <input
                          type="text"
                          id="expiry"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm mb-2">CVC</label>
                        <input
                          type="text"
                          id="cvc"
                          name="cvc"
                          value={formData.cvc}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border focus:border-foreground focus:outline-none transition-colors"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setStep("shipping")}
                        className="flex-1 border border-border py-4 text-sm uppercase tracking-wider hover:bg-secondary transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-foreground text-background py-4 text-sm uppercase tracking-wider hover:bg-foreground/90 transition-colors"
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-5">
              <div className="bg-secondary p-6 lg:p-8 sticky top-28">
                <h2 className="font-serif text-xl mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 bg-background flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-foreground text-background text-xs flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate">{item.name}</p>
                        <p className="text-sm text-muted-foreground">${item.price}</p>
                      </div>
                      <p className="text-sm">${item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-medium pt-2 border-t border-border">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
