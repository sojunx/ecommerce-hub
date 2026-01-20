"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Loading from "@/components/loading";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";
import { Product, categories } from "@/lib/products";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const params = searchParams.get("category");

  const url = params
    ? `/api/products?category=${params.toUpperCase()}`
    : "/api/products";
  const { data, loading } = useFetch<Product[]>(url, [params]);

  const getLink = (category: string) =>
    category === "ALL" ? "/shop" : `/shop?category=${category.toLowerCase()}`;

  if (loading) return <Loading />;

  return (
    <main>
      <Header />

      <section className="px-6 lg:px-8 pt-32 pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl">
              Shop
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Browse our complete collection of curated tech essentials.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button key={category} variant={"outline"} asChild>
                <Link href={getLink(category)}>{category}</Link>
              </Button>
            ))}
          </div>

          {/* Products list */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {data?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {data?.length === 0 ||
            (!data && (
              <p className="text-center text-muted-foreground py-12">
                No products found
              </p>
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Page;
