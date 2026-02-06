import Button from "@/app/components/button/page";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
}

async function ProductList() {
  const res = await fetch(
    "https://dummyjson.com/products/category/smartphones",
  );
  const data = await res.json();
  console.log(data.products);
  return data.products;
}

async function Page() {
  const products = await ProductList();
  console.log(products);
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

export default Page;


export function generateMetadata() {
  return {
    title: "Products - NextPractice",
    description: "Explore our latest products.",
  };
} 