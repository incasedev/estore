import ProductList from "@/components/shared/product/product-list";
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  const productsWithNumericRating = latestProducts.map(product => ({
    ...product,
    rating: Number(product.rating)
  }));
  return <>
    <ProductList data={productsWithNumericRating} title="Newest Arrivals" limit={4} />
  </>
}

export default HomePage;