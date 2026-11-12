"use client";
import Link from "next/link"
const products = [
  {
    id: 1,
    name: "Pawan Kalyan T-Shirt",
    price: 999,
  },
  {
    id: 2,
    name: "Pawan Kalyan Cap",
    price: 499,
  },
  {
    id: 3,
    name: "Pawan Kalyan Photo Frame",
    price: 799,
  },
  {
    id: 4,
    name: "Fan Merchandise",
    price: 599,
  },
];

export default function Products() {
  return (
    <main className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 p-5 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Pawan Kalyan Shop
          </Link>

          <Link href="/" className="hover:underline">
            Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold">
          All Products
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl bg-white p-5 shadow"
            >
              <div className="flex h-52 items-center justify-center rounded-lg bg-gray-200">
                Product Image
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                {product.name}
              </h2>

              <p className="mt-2 text-lg font-bold">
                ₹{product.price}
              </p>

              <Link
                href={`/products/${product.id}`}
                className="mt-4 block rounded-lg bg-yellow-400 py-3 text-center font-bold"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}