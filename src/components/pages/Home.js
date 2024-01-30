import NavBar from "../../components/features/navbar/NavBar";
import ProductList from "../../components/features/product-list/ProductList";

export default function Home() {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </div>
  );
}
