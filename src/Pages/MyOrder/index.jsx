import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;
  return (
    <Layout>
      <header className="relative w-[320px] text-center mb-4">
        <Link to="/my-orders">
          <ChevronLeftIcon className="w-6 h-6 mr-1 absolute left-0 bottom-0" />
        </Link>
        <h2>My Order</h2>
      </header>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
