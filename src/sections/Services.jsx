import React, { useEffect } from 'react'; // Added useEffect import
import payment from '../assets/payment.png'
import shipping from '../assets/shipping.png' // Fixed typo: was 'sipping.png'
import refund from '../assets/return.png'
import gift from '../assets/gift.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

   useEffect(() => {
          AOS.init({
              offset: 100,
              duration: 1000,
              easing: "ease-in-out",
          });
  
          AOS.refresh();
      }, []);

  return (
    <div className='w-full lg:px-20 px-5 pt-[0px] pb-[80px] grid lg:grid-cols-4
    grid-cols-1 justify-center items-center gap-10'> {/* Fixed typo: was 'grrid-cols-1' */}
      <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col
      justify-center items-center gap-2'>
        <img src={shipping} alt="" className='mb-[20px] w-[60px]' /> {/* Fixed CSS: removed extra bracket */}
        <h1 className='text-xl text-black font-semibold'>Worldwide Shipping</h1>
        <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p> {/* Fixed: 'grey-500' to 'gray-500' */}
      </div>
      
      {/* Added the other service cards since you imported all assets */}
      <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col
      justify-center items-center gap-2'>
        <img src={payment} alt="" className='mb-[20px] w-[60px]' />
        <h1 className='text-xl text-black font-semibold'>Secure Payment</h1>
        <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
      </div>
      
      <div data-aos="zoom-in" data-aos-delay="300" className='flex flex-col
      justify-center items-center gap-2'>
        <img src={refund} alt="" className='mb-[20px] w-[60px]' />
        <h1 className='text-xl text-black font-semibold'>Easy Returns</h1>
        <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
      </div>
      
      <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col
      justify-center items-center gap-2'>
        <img src={gift} alt="" className='mb-[20px] w-[60px]' />
        <h1 className='text-xl text-black font-semibold'>Gift Cards</h1>
        <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}

export default Services;