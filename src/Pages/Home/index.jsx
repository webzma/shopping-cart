import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import NavBarMobile from "../../Components/NavBarMobile";

function Home() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <header className="flex items-center justify-center relative">
        <h1 className="text-center text-xl mb-4">Exclusive Products</h1>
      </header>
      <input
        onChange={(e) => context.setSearchByTitle(e.target.value)}
        type="text"
        placeholder="Search a product"
        className="w-10/12 rounded-lg border-black border-2 max-w-sm p-3 focus:border-black mb-4"
      />
      <div className="grid m-0 justify-items-center items-center sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-4 w-full max-w-screen-lg">
        {context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      {context.openNavBar && <NavBarMobile />}
      {context.isProductDetailOpen && <ProductDetail />}
      {context.isCheckoutSideMenuOpen && <CheckoutSideMenu />}
    </Layout>
  );
}

export default Home;
