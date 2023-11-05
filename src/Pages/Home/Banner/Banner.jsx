
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//Import Banner image
import Banner1 from '../../../assets/Banner/Banner2.png'
import Banner2 from '../../../assets/Banner/Banner3.png'
import Banner3 from '../../../assets/Banner/Banner5.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={''}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='md:flex justify-between items-center'>
            <div>
                <h1 className='text-4xl  md:text-7xl font-bold ml-14 md:mt-10'>Find <span className='text-[#E59285]'>Your</span> <br /> Favorite <span className='text-[#E59285]'>Book</span> <br /> From <span className='text-[#E59285]'>PHBoigor</span></h1>
                <button className="btn btn-outline  ml-14 mt-10 hover:bg-[#E59285] hover:border-none">Buy Now</button>
            </div>
            <div className='md:w-96 md:h-96'>
              <img  src={Banner1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex justify-between items-center'>
            <div>
            <h1 className='text-4xl  md:text-7xl font-bold ml-14 md:mt-10'><span className='text-[#E59285]'>BOIGHOR</span> <br /> The Best <span className='text-[#E59285]'>Online</span><br /> Book <span className='text-[#E59285]'>Library</span></h1>
                <button className="btn btn-outline  ml-14 mt-10 hover:bg-[#E59285] hover:border-none">Buy Now</button>
            </div>
            <div className='md:w-96 md:h-96'>
              <img  src={Banner2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='md:flex justify-between items-center'>
            <div>
            <h1 className='text-4xl  md:text-7xl font-bold ml-14 md:mt-10'><span className='text-[#E59285]'>BOIGHOR</span> <br /> The Best <span className='text-[#E59285]'>Online</span><br /> Book <span className='text-[#E59285]'>Library</span></h1>
                <button className="btn btn-outline  ml-14 mt-10 hover:bg-[#E59285] hover:border-none">Buy Now</button>
            </div>
            <div className='md:w-96 md:h-96 mr-10'>
              <img  src={Banner3} alt="" />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
