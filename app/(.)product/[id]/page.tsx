"use client";

import ProductImage from "@/components/ProductImage";
import { Dialog } from "@headlessui/react";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Modal() {
  let [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const id = useParams().id;
  const router = useRouter();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product: Product = await res.json();

      setProduct(product);
      setLoading(false);
    }
    fetchProduct();
  }, [id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        // router.back();
      }}
      className="relative z-50"
    >
      {/* the backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* fullscreen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        {/* container to center the panel */}
        <div className="min-h-full flex items-center justify-center p-4">
          {/* the actual dialog box */}
          <Dialog.Panel className="mx-auto max-w-3xl rounded-md bg-white p-10">
            {loading ? (
              <div
                className="h-8 w-8 rounded-full border-2 border-dotted border-purple-500
              animate-spin"
              />
            ) : (
              <div className="flex gap-x-2 md:gap-x-8 lg:gap-x-8 h-96">
                {product?.image && (
                  <div className="relative w-72 h-full sm:hidden md:inline">
                    <ProductImage product={product} fill />
                  </div>
                )}

                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h4 className="font-semibold pl-4">{product?.title}</h4>
                    <p className="font-medium text-sm">{product?.price}</p>

                    <div className="flex items-center text-sm my-1 md:my-4">
                      <p>{product?.rating.rate}</p>
                      {product?.rating.rate && (
                        <div className="flex items-center ml-2 mr-1 sm:mr-2 md:mr-6">
                          {/* display five 5 stars but display the rate ones as StarIconOutline */}
                          {Array.from(
                            { length: Math.floor(product.rating.rate) },
                            (_, i) => (
                              <StarIcon
                                key={i}
                                className="w-4 h-4 text-yellow-500"
                              />
                            )
                          )}
                          {/* Displays the rest of the stars as a starIconOutline */}
                          {Array.from(
                            { length: 5 - Math.floor(product.rating.rate) },
                            (_, i) => (
                              <StarIconOutline
                                key={i}
                                className="w-4 h-4 text-yellow-500"
                              />
                            )
                          )}
                        </div>
                      )}
                      <p className="text-blue-600 hover:underline cusor-pointer text-xs">
                        see all {product?.rating.count} reviews
                      </p>
                    </div>
                    <p className="line-clamp-5 text-sm">
                      {product?.description}
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <button
                      className="button w-full bg-blue-600 text-white border-transparent 
                   hover:border-blue-600 hover:bg-transparent hover:text-black"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="button
                       w-full bg-transparent border-blue-600 hover:bg-blue-600 hover:text-white
                       hover:border-transparent"
                    >
                      View full details
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default Modal;
