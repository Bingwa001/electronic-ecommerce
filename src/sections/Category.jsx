import React, { useEffect } from 'react';
import cat1 from '../assets/cat1.jpg';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.jpg';
import cat5 from '../assets/cat5.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
    });
    
    AOS.refresh();
  }, []);
  
  return (
    <div id='category' className='w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20'>
      <div data-aos="zoom-in" data-aos-delay="50" className='lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]'>
        <h1 className='text-themepurple text-xl font-semibold text-center'>
          Favorite item
        </h1>
        <h1 className='text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center'>
          Popular Category
        </h1>
        <button className='bg-themepurple hover:bg-themeyellow text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px]'>
          VIEW ALL
        </button>
      </div>
      
      <div className='lg:w-[85%] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center'>
        <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-4'>
          <img src={cat1} alt="" className='w-32 h-32 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform duration-300'/>
          <h1 className='text-black text-lg font-semibold hover:text-themepurple cursor-pointer text-center'>
            Portable Speakers
          </h1>
        </div>
        
        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-4'>
          <img src={cat2} alt="" className='w-32 h-32 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform duration-300'/>
          <h1 className='text-black text-lg font-semibold hover:text-themepurple cursor-pointer text-center'>
            Headphones
          </h1>
        </div>
        
        <div data-aos="zoom-in" data-aos-delay="300" className='flex flex-col justify-center items-center gap-4'>
          <img src={cat3} alt="" className='w-32 h-32 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform duration-300'/>
          <h1 className='text-black text-lg font-semibold hover:text-themepurple cursor-pointer text-center'>
            Smart Watches
          </h1>
        </div>
        
        <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-center gap-4'>
          <img src={cat4} alt="" className='w-32 h-32 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform duration-300'/>
          <h1 className='text-black text-lg font-semibold hover:text-themepurple cursor-pointer text-center'>
            Gaming Gear
          </h1>
        </div>
        
        <div data-aos="zoom-in" data-aos-delay="500" className='flex flex-col justify-center items-center gap-4'>
          <img src={cat5} alt="" className='w-32 h-32 object-cover rounded-full cursor-pointer hover:scale-105 transition-transform duration-300'/>
          <h1 className='text-black text-lg font-semibold hover:text-themepurple cursor-pointer text-center'>
            Accessories
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Category;