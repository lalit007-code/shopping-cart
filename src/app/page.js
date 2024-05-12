import Image from "next/image";
import fetchAllProdccts from "./server actions";
import ProductCard from "./components/prodcuct-card";

export default async function Home() {
  const getAllProducts = await fetchAllProdccts();
  return (
    <div>
      <h1>
        shopping cart
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2 ">
          {getAllProducts &&
          getAllProducts.data &&
          getAllProducts.data.length > 0 ? (
            getAllProducts.data.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))
          ) : (
            <h1>could not fetch</h1>
          )}
        </div>
      </h1>
    </div>
  );
}
