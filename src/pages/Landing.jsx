import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="p-4  sm:px-[6%]">
      <div className="flex items-center px-4  " style={{ minHeight: "100vh" }}>
      {/* Home section */}
      <div className="homeSection  w-full text-center mt-6" id="home">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[Poppins] leading-tight text-gray-400">
          Boost your kitchen{" "}
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-[Poppins] leading-tight">
          Creativity with{" "}
          <span className="text-transparent bg-gradient-to-r from-amber-300 via-green-500 to-yellow-500 bg-[length:200%_200%] animate-[gradient_4s_ease-in-out_infinite] bg-clip-text">
            ChefNote
          </span>
        </h1>
        <p className="mt-4 text-[12px] sm:text-lg font-normal text-gray-600 ">
          {" "}
          Built for chefs, food lovers, and kitchen lovers.
        </p>
        <p className="text-[12px] sm:text-lg font-normal text-gray-600">
          ChefNote brings simplicity and structure to your recipe journey.
        </p>

        <div className="happyCustomer flex justify-center gap-3">
          <div className="logos flex  items-end">
            <div className="rounded-full w-6 sm:w-8 h-6 sm:h-8  overflow-hidden z-10 shadow-xl">
              <img src="./menAvtar.jpg" alt="" width={"100%"} />
            </div>
            <div className="rounded-full w-6 sm:w-8 h-6 sm:h-8 bg-red-500 overflow-hidden -ml-3 z-9 shadow-xl ">
              <img src="./girlAvtar.jpg" alt="" width={"100%"} />
            </div>
            <div className="rounded-full w-6 sm:w-8 h-6 sm:h-8 bg-red-500 overflow-hidden -ml-3 shadow-xl ">
              <img src="./boyAvtar.jpg" alt="" width={"100%"} />
            </div>
          </div>
          <div className="text mt-[4%] ">
            <p className="font-semibold text-gray-700 text-[10px] sm:text-sm">
              170+ Happy Customers
            </p>
          </div>
        </div>


        {/* buttons */}

        <div className="buttons mt-8 flex gap-3 justify-center">
          <a
            href="#footer"
            className="p-2 sm:p-3 bg-black text-white px-5 sm:px-8 text-sm sm:text-md font-semibold rounded hover:bg-black/80 transition-all duration-[400ms] "
          >
            Contact
          </a>
          <Link
            to={"/home"}
            className="p-2 sm:p-3 px-5 text-sm sm:text-md font-semibold sm:px-8 border-1 border-black rounded hover:outline  transition-all  hover:bg-gray-200 "
          >
            Lets Start
          </Link>
        </div>

        <div className="media mt-[6%]">
          <p className="text-gray-400 text-sm">Follow Our Journey</p>
          <div className="logos flex justify-center mt-7 gap-5">
            <a href="https://github.com/muhammedrazin-k" className="hover:animate-[rotate_1s_ease-in-out_infinite_alternate] hover:scale-105 transition-all duration-[500ms]"><img src="./github.png" alt="" className="w-8 "/></a>
            <a href="https://www.linkedin.com/in/muhammedrazin-k/" className="hover:animate-[rotate_1s_ease-in-out_infinite_alternate] hover:scale-105 transition-all duration-[500ms]"><img src="./linkedin.png" alt="" className="w-8"/></a>
            <a href="" className="hover:animate-[rotate_1s_ease-in-out_infinite_alternate] hover:scale-105 transition-all duration-[500ms]"><img src="./instagram.png"  alt="" className="w-8"/></a>
            
          </div>
        </div>
      </div>

      
    </div>

    {/* whats inside Chefnote */}
  <div className="secondSection flex bg-gradient-to-r from-gray-50 to-gray-100 ">
    <div className="whatsChefNote w-full  p-3 px-4 ">
      <div className="text-head  my-6 py-2">
    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight ">What's in <span className="text-transparent bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text"> ChefNote ? </span></h2>
    </div>
    <div className="subhead flex items-center gap-8 my-10">
      <div className="logo w-12">
        <img src="./youtube.png" alt="" className=""/>
      </div>
      <div className="text">
        <h4 className="font-bold text-[12px] sm:text-lg  mb-2"> Add YouTube Videos</h4>
        <p className="max-w-md text-gray-600 text-[12px] sm:text-lg tracking-tight">Paste links from YouTube and turn them into recipe cards.</p>
      </div>
    </div>

    
    <div className="subhead flex items-center gap-8 my-10">
      <div className="logo w-12">
        <img src="./picture.png" alt="" className=""/>
      </div>
      <div className="text">
        <h4 className="font-bold text-[12px] sm:text-lg   mb-2"> Custom Titles & Images</h4>
        <p className="max-w-md text-gray-600 text-[12px] sm:text-lg tracking-tight ">Rename videos and add your own thumbnails to make them yours..</p>
      </div>
    </div>

    
    <div className="subhead flex items-center gap-8 my-10 ">
      <div className="logo w-12">
        <img src="./folder.png" alt="" className=""/>
      </div>
      <div className="text">
        <h4 className="font-bold text-[12px] sm:text-lg  mb-2"> Organized by Category</h4>
        <p className="max-w-md text-gray-600 text-[12px] sm:text-lg tracking-tight ">Group videos into playlists like Veg, Non-Veg, Rice, etc..</p>
      </div>
    </div>

    
  </div>

  {/*graph image */}
    <div className="imagediv w-full hidden lg:flex">
    <img src="./home-chart.webp" alt="" className="bg-white my-auto rounded shadow-2xl"  />
    </div>

  </div>

    {/* chefNote in Action */}

    <div className="ChefNoteAction my-18">
    <div className="textsection flex ">
      <div className="textHead  w-full p-2 px-4  flex items-center">
        <h1 className="text-3xl sm:text-4xl font-bold ">Explore the Taste of <span className="text-transparent bg-gradient-to-r from-gray-500 to-gray-300 bg-clip-text">ChefNote</span></h1>
      </div>
      <div className="textsubHead w-full p-1 sm:p-5">
        <p className="max-w-lg text-gray-500 text-[15px] sm:text-lg leading-tight sm:leading-relaxed font-medium"><span className="text-black">These aren’t just dishes they’re stories plated with passion</span> .Feast your eyes on the flavors that define ChefNote.</p>
      </div>
    </div>

    <div className="carousaldiv mt-10">
    <div className="carousel rounded-box  flex gap-4 ">
  <div className="carousel-item flex flex-col ">
    <img
      src="./biriyani.jpg" className="w-80 sm:w-100 h-80 sm:h-100 mb-2 "
      alt="Burger" />
      <p className="font-bold text-2xl tracking-wide text-gray-800">Chicken Mandi</p>
      <p className="max-w-80 sm:max-w-sm tracking-tight leading-tight font-light">Flavored with rich spices, saffron, and served with fragrant basmati rice, Chicken Mandi is a must-try dish for every food lover.</p>
  </div>
  <div className="carousel-item flex flex-col">
    <img
      src="./chickenCurry.jpg"  className="w-80 sm:w-100 h-80 sm:h-120 mb-2"
      alt="Burger" />
  <p className="font-bold text-2xl tracking-wide text-gray-800">Spicy Tandoori Chicken</p>
  <p className="max-w-80 sm:max-w-sm tracking-tight leading-tight font-light">Juicy chicken marinated in Indian spices, grilled to perfection with smoky charred edges.</p>
  </div>

  <div className="carousel-item flex flex-col">
    <img
      src="./prawns.jpg" className="w-80 sm:w-100 h-80 sm:h-70 mb-2"
      alt="Burger" />
      <p className="font-bold text-2xl tracking-wide text-gray-800">Prawn Curry</p>
      <p className="max-w-80 sm:max-w-sm tracking-tight leading-tight font-light">A rich and spicy prawn curry cooked in coconut milk and aromatic coastal spices, served best with steamed rice or naan.</p>
  </div>

  <div className="carousel-item flex flex-col">
    <img
      src="./mutton.jpg" className="w-80 sm:w-100 h-80 sm:h-100 mb-2 "
      alt="Burger" />
  <p className="font-bold text-2xl tracking-wide text-gray-800">Mutton Veg Curry</p>
  <p className="max-w-80 sm:max-w-sm tracking-tight leading-tight font-light">Tender pieces of mutton slow-cooked with fresh vegetables and flavorful spices, delivering a hearty and wholesome taste of tradition.</p>
  </div>

  <div className="carousel-item flex flex-col">
    <img
      src="./fish.jpg" className="w-80 sm:w-100 h-80 sm:h-100 mb-2"
      alt="Burger" />
      <p className="font-bold text-2xl tracking-wide text-gray-800">Fish Curry</p>
      <p className="max-w-80 sm:max-w-sm tracking-tight leading-tight font-light"> A rich and spicy curry made with fresh fish, cooked in a flavorful blend of coastal spices and coconut milk.</p>
  </div>

  <div className="carousel-item flex flex-col">
    <img
      src="./bread.jpg" className="w-80 sm:w-100 h-80 sm:h-100 mb-2"
      alt="Burger" />
  <p className="font-bold text-2xl tracking-wide text-gray-800">Fresh Bread chease</p>
  <p className="max-w-80 sm:max-w-sm tracking-tight leading-tight font-light"> Soft, oven-baked bread with a crispy crust and fluffy inside—perfect as a side or to pair with curry dishes.</p>
  </div>

  <div className="carousel-item flex flex-col">
    <img
      src="./oreo.jpg" className="w-80 sm:w-100 h-80 sm:h-100 mb-2"
      alt="Burger" />
      <p className="font-bold text-2xl tracking-wide text-gray-800">Classic Cake</p>
      <p className="max-w-80 sm:max-w-sm tracking-tight leading-tight font-light">A moist and creamy layered cake made with love—available in chocolate, vanilla, and seasonal fruit flavors..</p>
  </div>

</div>
    </div>

    </div>

  </div>
  
  );
};
