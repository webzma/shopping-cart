import { ChevronRightIcon } from "@heroicons/react/24/solid";

function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="flex items-center rounded-lg border p-4 border-black w-80 mb-4  ">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01/02/23</span>
          <span>{totalProducts} articles</span>
        </p>
        <p className="flex items-center">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="w-6 h-6 mr-1 " />
        </p>
      </div>
    </div>
  );
}

export default OrdersCard;
