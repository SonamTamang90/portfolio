// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

function SlidePrevButton() {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="bg-zinc-800/40 flex items-center justify-center h-11 w-11 rounded-full border border-zinc-700/50 text-2xl text-white"
    >
      <HiArrowLongLeft />
    </button>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="bg-zinc-800/40 flex items-center justify-center h-11 w-11 rounded-full border border-zinc-700/50 text-2xl text-white"
    >
      <HiArrowLongRight />
    </button>
  );
}

function Slider() {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={3}
      navigation={false}
      loop={true}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <div className="relative bg-transparent transition-all duration-700 ease-in-out group cursor-pointer">
          <img
            src="./portfolio-1.png"
            alt=""
            className="group-hover:opacity-[0.1] group-hover:scale-[0.95] transform transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-2/4 left-2/4 text-center w-full transform -translate-x-[55%] -translate-y-2/4 opacity-0 transition-all duration-700 ease-in-out z-10 group-hover:-translate-x-2/4 group-hover:-translate-y-2/4 group-hover:opacity-100">
            <h3 className=" text-white text-xl font-semibold tracking-wider mb-2">
              Trendix Store
            </h3>
            <p className="text-white/80 text-sm px-11">
              Ecommerce store promoting made in Bhutan clothing brands
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-transparent transition-all duration-700 ease-in-out group cursor-pointer">
          <img
            src="./portfolio-2.jpg"
            alt=""
            className="group-hover:opacity-[0.1] group-hover:scale-[0.95] transform transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-2/4 left-2/4 text-center w-full transform -translate-x-[55%] -translate-y-2/4 opacity-0 transition-all duration-700 ease-in-out z-10 text-white group-hover:-translate-x-2/4 group-hover:-translate-y-2/4 group-hover:opacity-100">
            <h3 className=" text-white text-xl font-semibold tracking-wider mb-2">
              Zhimdrok
            </h3>
            <p className="text-white/80 text-sm px-11">
              Hotel Management platform where they manage their guest. All in
              one solutions.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-transparent transition-all duration-700 ease-in-out group cursor-pointer">
          <img
            src="./portfolio-3.jpg"
            alt=""
            className="group-hover:opacity-[0.1] group-hover:scale-[0.95] transform transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-2/4 left-2/4 text-center w-full transform -translate-x-[55%] -translate-y-2/4 opacity-0 transition-all duration-700 ease-in-out z-10 text-white group-hover:-translate-x-2/4 group-hover:-translate-y-2/4 group-hover:opacity-100">
            <h3 className=" text-white text-xl font-semibold tracking-wider mb-2">
              Traveller
            </h3>
            <p className="text-white/80 text-sm px-11">
              Multipage travel website
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-transparent transition-all duration-700 ease-in-out group cursor-pointer">
          <img
            src="./portfolio-4.jpg"
            alt=""
            className="group-hover:opacity-[0.1] group-hover:scale-[0.95] transform transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-2/4 left-2/4 text-center w-full transform -translate-x-[55%] -translate-y-2/4 opacity-0 transition-all duration-700 ease-in-out z-10 text-white group-hover:-translate-x-2/4 group-hover:-translate-y-2/4 group-hover:opacity-100">
            <h3>Lab. 001</h3>
            <p>HTML, CSS & JS</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-transparent transition-all duration-700 ease-in-out group cursor-pointer">
          <img
            src="./portfolio-5.jpg"
            alt=""
            className="group-hover:opacity-[0.1] group-hover:scale-[0.95] transform transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-2/4 left-2/4 text-center w-full transform -translate-x-[55%] -translate-y-2/4 opacity-0 transition-all duration-700 ease-in-out z-10 text-white group-hover:-translate-x-2/4 group-hover:-translate-y-2/4 group-hover:opacity-100">
            <h3>Lab. 001</h3>
            <p>HTML, CSS & JS</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-transparent transition-all duration-700 ease-in-out group cursor-pointer">
          <img
            src="./portfolio-6.jpg"
            alt=""
            className="group-hover:opacity-[0.1] group-hover:scale-[0.95] transform transition-all duration-700 ease-in-out"
          />
          <div className="absolute top-2/4 left-2/4 text-center w-full transform -translate-x-[55%] -translate-y-2/4 opacity-0 transition-all duration-700 ease-in-out z-10 text-white group-hover:-translate-x-2/4 group-hover:-translate-y-2/4 group-hover:opacity-100">
            <h3>Lab. 001</h3>
            <p>HTML, CSS & JS</p>
          </div>
        </div>
      </SwiperSlide>
      <div className="flex justify-center items-center gap-6 mt-8 pl-10">
        <SlidePrevButton />
        <SlideNextButton />
      </div>
    </Swiper>
  );
}

export default Slider;
