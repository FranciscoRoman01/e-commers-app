import { useGetProductList } from "../../../services/useGetProductList";
import { Loading } from "../../../ui/components/Loading";
import { ProductCard } from "./ProductCard";

export function ProductContainer() {
  const { products, loading } = useGetProductList();

  if (loading) {
    return (
      <div className="w-full flex justify-center mx-auto">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full mx-auto md:w-3/4 p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
