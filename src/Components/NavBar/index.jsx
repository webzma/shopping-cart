import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex bg-white justify-between sm:justify-center lg:justify-between items-center fixed z-10 top-0 w-full  py-5 px-2 sm:px-8 text-sm font-light">
      <ul className="flex sm:flex  items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li className="hidden sm:flex ">
          <NavLink
            to="/"
            onClick={() => context.setShowByCategory("all")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li className="hidden sm:flex ">
          <NavLink
            to="/clothes"
            onClick={() => context.setShowByCategory("clothes")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li className="hidden sm:flex ">
          <NavLink
            to="/electronics"
            onClick={() => context.setShowByCategory("electronics")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li className="hidden sm:flex ">
          <NavLink
            to="/furnitures"
            onClick={() => context.setShowByCategory("furnitures")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li className="hidden sm:flex">
          <NavLink
            to="/toys"
            onClick={() => context.setShowByCategory("toys")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li className="hidden sm:flex">
          <NavLink
            to="/others"
            onClick={() => context.setShowByCategory("others")}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="hidden lg:flex items-center gap-3">
        <li className="text-black/60">pepito@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sing-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
      <Bars3Icon
        className="w-6 h-6 cursor-pointer block sm:hidden"
        onClick={() => context.toggleNavBar()}
      />
    </nav>
  );
};

export default Navbar;
