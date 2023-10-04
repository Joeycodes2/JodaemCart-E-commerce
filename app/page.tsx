import Product from "@/components/Product";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 mt-48 xl:px-0">
      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="md:text-5xl lg:text-5xl xl:text-5xl text-3xl font-bold text-center my-6">
          Shop products
        </h1>

        <div
          className="grid grid-cols-2 gap-y-10 gap-x-6  lg:grid-cols-3 
        xl:grid-cols-4 xl:gap-x-8"
        >
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
