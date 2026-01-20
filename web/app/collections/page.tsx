"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    id: "audio",
    name: "Audio",
    description: "Premium sound. Zero distractions.",
    image: "/collections/audio.jpg",
    productCount: 2,
  },
  {
    id: "peripherals",
    name: "Peripherals",
    description: "Tools that feel invisible.",
    image: "/collections/peripherals.jpg",
    productCount: 2,
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "The finishing touches.",
    image: "/collections/accessories.jpg",
    productCount: 3,
  },
  {
    id: "storage",
    name: "Storage",
    description: "Fast. Reliable. Compact.",
    image: "/collections/storage.jpg",
    productCount: 1,
  },
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="px-6 lg:px-8 mb-16">
          <div className="mx-auto max-w-7xl">
            <h1 className="font-serif text-4xl md:text-5xl mb-4 text-balance">
              Collections
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Browse our curated collections of tech essentials, organized by how you use them.
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/shop?category=${collection.name}`}
                  className="group relative aspect-[4/3] overflow-hidden bg-secondary"
                >
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="text-xs uppercase tracking-widest text-background/70 mb-2">
                      {collection.productCount} {collection.productCount === 1 ? "Product" : "Products"}
                    </span>
                    <h2 className="font-serif text-3xl text-background mb-2">
                      {collection.name}
                    </h2>
                    <p className="text-background/80 text-sm mb-4">
                      {collection.description}
                    </p>
                    <div className="flex items-center gap-2 text-background text-sm">
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Banner */}
        <section className="px-6 lg:px-8 mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="bg-foreground text-background p-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl mb-3 text-balance">
                  New Arrivals
                </h2>
                <p className="text-background/70 max-w-md">
                  Be the first to discover our latest additions. Premium tech, minimal design.
                </p>
              </div>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 border border-background px-8 py-3 text-sm uppercase tracking-wider hover:bg-background hover:text-foreground transition-colors"
              >
                Shop All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
