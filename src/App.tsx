import Navbar from "@/scene/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scene/home";
import Benefits from "./scene/benefits";
import OurClasses from "./scene/ourClasses";
import ContactUs from "./scene/contactUs";
import Footer from "./scene/footer";

function App() {
  // const [selectedPage,setSelectedPage]=useState<string>("Home");
  const [selectedPage,setSelectedPage]=useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage,setIsTopOfPage]=useState<boolean>(true);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !==0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll",handleScroll);

    return ()=>window.removeEventListener("scroll",handleScroll)
  },[])

  return (
    <div className='app bg-gray-20'>
      <Navbar selectedPage={selectedPage} 
        isTopOfPage={isTopOfPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
