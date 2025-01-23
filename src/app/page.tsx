import Footer from "./(web)/Footer";
import Header from "./(web)/Header";
import Menu from "./(web)/Menu";
import FrontCategories from "./(web)/frontCategory";

export default function Home() {
  return (
    <div className="">
      <Header />
      <img src="BG.png" alt="" className="w-100%" />
      <FrontCategories />
      <Menu />
      <Footer />
    </div>
  );
}
