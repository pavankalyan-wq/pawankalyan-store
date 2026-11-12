export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold">
            Pawan Kalyan Shop
          </h1>
          <nav className="flex gap-6">
            <button>Home</button>
            <button>All</button>
            <button>Login</button>
            <button>🛒 Cart</button>
          </nav>
        </div>
      </header>

      {/* Search */}
      <div className="bg-gray-900 px-6 py-4">
        <div className="mx-auto max-w-3xl">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-lg px-4 py-3 text-black outline-none"
          />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white px-6 py-20 text-center">
        <h2 className="text-5xl font-bold">
          Welcome to Pawan Kalyan Shop
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Shop your favourite products online
        </p>

        <button className="mt-8 rounded-lg bg-black px-8 py-3 font-semibold text-white">
          Shop Now
        </button>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-8 text-3xl font-bold">
          Popular Products
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Pawan Kalyan T-Shirt",
            "Official Cap",
            "Photo Frame",
            "Fan Merchandise",
          ].map((product) => (
            <div
              key={product}
              className="rounded-xl bg-white p-5 shadow"
            >
              <div className="flex h-48 items-center justify-center rounded-lg bg-gray-200">
                Product Image
              </div>

              <h3 className="mt-4 text-xl font-semibold">
                {product}
              </h3>

              <p className="mt-2 text-lg font-bold">
                ₹999
              </p>

              <button className="mt-4 w-full rounded-lg bg-black py-3 text-white">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-8 text-center text-white">
        <p>© 2026 Pawan Kalyan Shop</p>
      </footer>
    </main>
  );
}