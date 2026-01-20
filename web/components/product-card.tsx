"use client";

import type { Product } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div className="relative aspect-3/4 overflow-hidden bg-secondary mb-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          loading="eager"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-sans">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            {product.category}
          </p>
        </div>
        <p className="text-sm">${product.price}</p>
      </div>
    </Link>
  );
}
