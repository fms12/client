import NavBar from "../../components/features/navbar/NavBar";
import ProductList from "../features/product-list/components/ProductList";

export default function Home() {
  return (
    <div>
      <NavBar>
        <ProductList></ProductList>
      </NavBar>
    </div>
  );
}
