import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="px-6 lg:px-8 mb-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                  Our Story
                </span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
                  Less noise.<br />More signal.
                </h1>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  NØRD was founded on a simple belief: the best technology is the kind you forget is there. 
                  We curate products that work seamlessly, look timeless, and get out of your way.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every product in our collection has been carefully selected for its design integrity, 
                  build quality, and ability to simplify your daily workflow.
                </p>
              </div>
              <div className="relative aspect-[4/5] bg-secondary">
                <Image
                  src="/about-hero.jpg"
                  alt="NØRD workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 lg:px-8 py-20 bg-secondary">
          <div className="mx-auto max-w-7xl">
            <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
              What We Believe
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-12">
              Our Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="text-5xl font-serif text-muted-foreground/30 mb-4">01</div>
                <h3 className="text-lg font-medium mb-3">Form Follows Function</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Beautiful design should never compromise usability. Every curve, every material choice 
                  serves a purpose beyond aesthetics.
                </p>
              </div>
              <div>
                <div className="text-5xl font-serif text-muted-foreground/30 mb-4">02</div>
                <h3 className="text-lg font-medium mb-3">Quality Over Quantity</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We stock fewer products than most. Each one has earned its place through rigorous 
                  testing and our genuine enthusiasm to use it daily.
                </p>
              </div>
              <div>
                <div className="text-5xl font-serif text-muted-foreground/30 mb-4">03</div>
                <h3 className="text-lg font-medium mb-3">Sustainable Choices</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We partner with brands committed to reducing waste, using recycled materials, 
                  and building products that last for years, not months.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-square bg-secondary order-2 lg:order-1">
                <Image
                  src="/about-mission.jpg"
                  alt="Product detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-xs uppercase tracking-widest text-muted-foreground mb-4 block">
                  Our Mission
                </span>
                <h2 className="font-serif text-3xl md:text-4xl mb-6 text-balance">
                  Technology that respects your attention
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In a world of endless notifications and feature bloat, we champion products that 
                  know when to stay quiet. Tools that enhance your focus instead of fragmenting it.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We believe your workspace should feel calm, your tools should feel effortless, 
                  and your tech should serve you—not the other way around.
                </p>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Explore Our Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Team / Contact */}
        <section className="px-6 lg:px-8 py-20 bg-foreground text-background">
          <div className="mx-auto max-w-7xl text-center">
            <span className="text-xs uppercase tracking-widest text-background/60 mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Questions? We&apos;re here.
            </h2>
            <p className="text-background/70 max-w-xl mx-auto mb-8">
              Our team is passionate about helping you find the perfect tools for your workflow. 
              Reach out anytime—we love talking tech.
            </p>
            <a
              href="mailto:hello@nord.store"
              className="inline-flex items-center gap-2 border border-background px-8 py-3 text-sm uppercase tracking-wider hover:bg-background hover:text-foreground transition-colors"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
