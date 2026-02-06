"use client";

import Image from "next/image";
import Button from "@/app/components/button/page";
import { useEffect, useState } from "react";


interface Product{
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    images: string[];
}

function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://dummyjson.com/products/search?q=phone",
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold animate-pulse text-gray-600">
          Loading products...
        </div>
      </div>
    );
  }

  return (
    <div className="px-6">
      <h1 className="text-center text-3xl font-bold mt-20 mb-10">
        Products ({products.length})
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="rounded-xl border bg-white p-4 shadow hover:shadow-lg transition"
          >
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={300}
              height={160}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h2 className="mt-3 text-lg font-semibold">{product.title}</h2>

            <p className="text-sm text-gray-500 mt-1">₹ {product.price}</p>

            <Button label="Add to Cart" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;



