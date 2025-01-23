const Header = () => {
  return (
    <div>
      <div className="w-100% h-[68px] bg-[#18181B] flex items-center pl-10">
        <img src="Logo.png" alt="" className="w-[px] h-[44px]" />
        <div className="">
          <div className="font-bold text-[20px] flex">
            Nom
            <h1 className="font-bold text-[20px] text-[#EF4444]">Nom</h1>
          </div>
          <h1 className="text-[12px] flex">Swift delivery</h1>
        </div>
      </div>
    </div>
  );
};
export default Header;
