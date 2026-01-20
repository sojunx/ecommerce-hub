import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-balance">
            Tech essentials, simplified
          </h1>
          <p className="mt-8 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Curated selection of premium tech products. Minimal design meets
            exceptional performance.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 text-xs uppercase tracking-widest hover:bg-foreground/90 transition-colors"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-foreground px-8 py-4 text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-video overflow-hidden bg-secondary">
            <Image
              src="/hero-image.jpg"
              alt="Minimal tech setup"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Featured
              </p>
              <h2 className="font-serif text-3xl md:text-4xl">New Arrivals</h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link
            href="/shop"
            className="sm:hidden inline-flex items-center gap-2 text-sm mt-8 hover:text-muted-foreground transition-colors"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Split Content */}
      <section className="px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <Image
                src="/about-image.jpg"
                alt="Tech workspace"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Our Philosophy
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
                Less clutter, more clarity
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We carefully select each product for its design, build quality,
                and performance. No gimmicks, no unnecessary features. Just
                thoughtfully engineered tech that enhances your daily workflow.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors"
              >
                Our Standards
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 lg:px-8 py-24 bg-secondary">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Browse
            </p>
            <h2 className="font-serif text-3xl md:text-4xl">
              Shop by Category
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Audio", image: "/category-audio.jpg" },
              { name: "Peripherals", image: "/category-peripherals.jpg" },
              { name: "Accessories", image: "/category-accessories.jpg" },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/shop?category=${category.name}`}
                className="group relative aspect-4/5 overflow-hidden bg-card"
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 transition-opacity group-hover:bg-foreground/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl text-card">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
