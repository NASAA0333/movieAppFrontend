import FrontCategories from "./frontCategory";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import { FrontDishes } from "./frontDishes";

export default function App() {
  return (
    <div>
      <Header />
      <img className="" src="BG.png" />
      <div className="bg-[#404040]">
        <FrontCategories />
        <FrontDishes />
      </div>

      <div className="bg-[#404040]">
        <h1 className="text-[30px] font-[600] text-white ml-16 ">Appetizers</h1>
      </div>
      <Footer />
    </div>
  );
}
