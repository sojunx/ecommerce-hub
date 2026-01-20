"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { default as Loading } from "@/components/loading";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/products";
import { ArrowLeft, Minus, Plus, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { use, useState } from "react";

interface Review {
  id: string;
  title: string;
  comment: string;
  rating: number;
  customer_name: string;
  customer_email: string;
  created_at: string;
}

interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingCounts: { star: number; count: number }[];
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { data: product, loading } = useFetch<Product>(`/api/products/${id}`, [
    id,
  ]);
  const { data: reviews } = useFetch<Review[]>(`/api/reviews/${id}`, [id]);
  const { data: reviewStats } = useFetch<ReviewStats>(
    `/api/reviews/${id}/stats`,
    [id],
  );

  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const reviewList = reviews || [];
  const totalReviews = reviewStats?.totalReviews ?? reviewList.length;
  const averageRating =
    reviewStats?.averageRating ??
    (reviewList.length > 0
      ? (
          reviewList.reduce((sum, r) => sum + r.rating, 0) / reviewList.length
        ).toFixed(1)
      : "0.0");
  const ratingCounts =
    reviewStats?.ratingCounts ??
    [5, 4, 3, 2, 1].map((star) => ({
      star,
      count: reviewList.filter((r) => r.rating === star).length,
    }));

  if (loading) return <Loading />;

  if (!product) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl mb-4">Product not found</h1>
            <Link href="/shop" className="text-sm underline">
              Return to shop
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
    setQuantity(1);
  };

  return (
    <main>
      <Header />

      <section className="px-6 lg:px-8 pt-28 pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          {/* Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-3/4 overflow-hidden bg-secondary">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
                {product.name}
              </h1>
              <p className="text-2xl mb-8">${product.price}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Specs */}
              {product.specs && product.specs.length > 0 && (
                <ul className="flex flex-wrap gap-2 mb-8">
                  {product.specs.map((spec) => (
                    <li
                      key={spec}
                      className="text-xs px-3 py-1 bg-secondary text-muted-foreground"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
              )}

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs uppercase tracking-widest">
                  Quantity
                </span>
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 min-w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-foreground text-background py-4 text-xs uppercase tracking-widest hover:bg-foreground/90 transition-colors"
              >
                Add to Cart — ${product.price * quantity}
              </button>

              {/* Details Accordion */}
              <div className="mt-12 border-t border-border">
                <details className="group">
                  <summary className="flex justify-between items-center py-4 cursor-pointer text-sm">
                    Specifications
                    <Plus className="h-4 w-4 group-open:rotate-45 transition-transform" />
                  </summary>
                  <p className="pb-4 text-sm text-muted-foreground leading-relaxed">
                    Precision engineered with premium materials. Built to last
                    with rigorous quality testing. See product packaging for
                    complete technical specifications.
                  </p>
                </details>
                <details className="group border-t border-border">
                  <summary className="flex justify-between items-center py-4 cursor-pointer text-sm">
                    Shipping & Returns
                    <Plus className="h-4 w-4 group-open:rotate-45 transition-transform" />
                  </summary>
                  <p className="pb-4 text-sm text-muted-foreground leading-relaxed">
                    Free shipping on orders over $150. Returns accepted within
                    30 days of delivery. Items must be in original condition.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="w-full space-y-8">
            <div className="mt-12 border-t border-border pt-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Reviews
                  </p>
                  <h2 className="font-serif text-2xl">What customers say</h2>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex items-center gap-2 text-lg">
                      <Star className="h-5 w-5 fill-foreground text-foreground" />
                      <span className="font-semibold">{averageRating}</span>
                      <span className="text-muted-foreground">/ 5</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {totalReviews} review{totalReviews === 1 ? "" : "s"}
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-64 space-y-2">
                  {ratingCounts.map(({ star, count }) => (
                    <div key={star} className="flex items-center gap-3 text-sm">
                      <span className="w-6 text-right">{star}★</span>
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-foreground/80"
                          style={{
                            width: `${(count / Math.max(totalReviews, 1)) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="w-10 text-muted-foreground text-right">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="space-y-4">
                {reviewList.map((review) => (
                  <li
                    key={review.id}
                    className="border border-border p-6 bg-background"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-medium">
                          {review.customer_name}
                        </div>
                        <div className="text-xs uppercase tracking-widest text-muted-foreground">
                          {new Date(review.created_at).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star
                            key={idx}
                            className={
                              idx < review.rating
                                ? "h-4 w-4 fill-foreground text-foreground"
                                : "h-4 w-4 text-muted-foreground"
                            }
                          />
                        ))}
                      </div>
                    </div>
                    <div className="font-semibold mb-2">{review.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {review.comment}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full flex justify-center items-center">
              <Button
                className="rounded-full cursor-pointer"
                variant={"outline"}
                size={"lg"}
              >
                Load more
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
