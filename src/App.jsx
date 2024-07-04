import "./App.css";
import Appoinment from "./components/appointmentBanner/Appoinment";
import Banner from "./components/banner/Banner";
import Comprehensive from "./components/comprehensive/Comprehensive";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import HelpSoulition from "./components/helpSoulition/HelpSoulition";
import Service from "./components/service/Service";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <>
      <div className=" bg-[#f3f5f7] text-[#343268] font-sans lg:px-20 md:px-8 px-5 ">
        <Navbar/>
        <Banner/>
        <Comprehensive/>
        <HelpSoulition/>
       <div className="mt-36">
       <Service/>
       </div>
       <Testimonial/>
       <Faq/>
       <Appoinment/>
       <Footer/>
      </div>
    </>
  );
}

export default App;
