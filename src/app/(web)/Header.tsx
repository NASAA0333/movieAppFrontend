import { ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <div className="w-100% h-[68px] bg-[#18181B] flex items-center pl-10 justify-between">
      <div className="flex items-center gap-4">
        <img src="Logo.png" alt="" className="w-[px] h-[44px]" />
        <div className="flex flex-col">
          <div className="font-bold text-[20px] flex text-white">
            Nom
            <h1 className="font-bold text-[20px] text-[#EF4444] ">Nom</h1>
          </div>
          <h1 className="text-[12px] flex text-white">Swift delivery</h1>
        </div>
      </div>
      <div className="text-white flex  mr-16 gap-4  ">
        <ShoppingCart />
        <User />
      </div>
    </div>
  );
};
export default Header;
