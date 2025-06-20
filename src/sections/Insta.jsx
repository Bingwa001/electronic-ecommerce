import React, { useEffect } from 'react';
import insta1 from '../assets/insta1.jpg';
import insta2 from '../assets/insta2.jpg';
import insta3 from '../assets/insta3.jpg';
import insta4 from '../assets/insta4.jpg';
import insta5 from '../assets/insta5.jpg';
import insta6 from '../assets/insta6.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const Insta = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);
      
  return (
    <div className='w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoom-in" data-aos-delay="100" className='text-themepurple text-xl font-semibold capitalize'>
        Our Instagram
      </h1>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black font-semibold text-[40px] leading-[50px] text-center capitalize'>
        Follow on Instagram
      </h1>
      <div data-aos="zoom-in" data-aos-delay="300" className='w-full grid lg:grid-cols-6 grid-cols-1 justify-center items-center gap-6 mt-8'>
        <img src={insta1} alt="Instagram post 1" className='rounded-lg' />
        <img src={insta2} alt="Instagram post 2" className='rounded-lg' />
        <img src={insta3} alt="Instagram post 3" className='rounded-lg' />
        <img src={insta4} alt="Instagram post 4" className='rounded-lg' />
        <img src={insta5} alt="Instagram post 5" className='rounded-lg' />
        <img src={insta6} alt="Instagram post 6" className='rounded-lg' />
      </div>
      <button 
  data-aos="zoom-in" 
  data-aos-delay="400" 
  className='bg-themepurple hover:bg-themeyellow text-white hover:text-black 
  font-semibold px-8 py-3 rounded-lg mt-12 uppercase'> #ElectraShop
</button>
    </div>
  );
}

export default Insta;