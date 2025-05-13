import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Img1 from "../../assets/images/img1.jpeg";
import Img2 from "../../assets/images/img2.jpeg";
import Img3 from "../../assets/images/img3.jpeg";
import Img4 from "../../assets/images/logo.jpeg";
import { FaCheckCircle } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8 py-10 px-5 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      {/* Text Section */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="md:text-6xl text-4xl font-extrabold text-gray-800 mb-4 tracking-wide leading-tight">
  <span className="text-blue-500 font-serif">Application</span>
  <span className="text-gray-800 text-2xl md:text-3xl "> to </span>
  <span className="text-blue-500 font-serif">Admission</span>,
  <span className="text-gray-800 text-2xl md:text-3xl"> We’ve Got You Covered</span>
</h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Applying to U.S. universities can feel overwhelming, but we make it simple. 
          From choosing the right schools to preparing your documents and acing your visa interview, 
          we guide you every step of the way.
        </p>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center">
            <FaCheckCircle className="text-blue-500 mr-2 animate-pulse" />
            <span className="text-gray-800 text-lg font-medium">Know everything about your dream university</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-blue-500 mr-2 animate-pulse" />
            <span className="text-gray-800 text-lg font-medium">Be ready for your visa interview, no stress</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-blue-500 mr-2 animate-pulse" />
            <span className="text-gray-800 text-lg font-medium">Get help from students who’ve done it before</span>
          </div>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="md:w-1/2 w-full mx-auto">
        <Swiper
          slidesPerView={1} 
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1, spaceBetween: 40 },
            1024: { slidesPerView: 1, spaceBetween: 50 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {[Img1, Img2, Img3, Img4].map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="overflow-hidden rounded-xl border-2 border-blue-100 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(59,130,246,0.4)]">
                <img
                  src={img}
                  alt={`Image ${idx + 1}`}
                  className="w-full lg:h-[420px] sm:h-96 h-80 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
