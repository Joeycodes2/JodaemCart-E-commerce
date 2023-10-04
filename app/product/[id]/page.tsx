import ProductImage from "@/components/ProductImage";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

async function ProductPage({ params: { id } }: Props) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await res.json();

    return (
      <div
        className="max-w-5xl mx-auto flex flex-row md:flex-row items-center gap-8 px-4 
      mt-48 pb-10"
      >
        <ProductImage product={product} />

        <div className="divide-y">
          <div className="space-y-2 pb-8">
            <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
            <h2 className="text-gray-700 font-bold text-xl md:text-3xl">
              ${product.price}
            </h2>

            <div className="pt-8">
              <p className="text-xs md:text-sm">{product.description}</p>
            </div>
            <div className="space-y-3 text-sm">
              <button
                className="button bg-blue-600 text-white border-transparent 
                   hover:border-blue-600 hover:bg-transparent hover:text-black"
              >
                Add to Cart
              </button>
              <button
                className="button bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white
                       mx-2 hover:border-transparent"
              >
                View full details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export default ProductPage;
