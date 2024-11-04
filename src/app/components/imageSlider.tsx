"use client";
import Image from "next/image";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation]);

// Interface para os dados das imagens
interface ImageData {
  src: string;
  title: string;
  subtitle: string;
}

interface ImageSliderProps {
  images: ImageData[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <div className="w-full h-full m-0 p-5">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation
        loop={true}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col w-full h-full bg-white px-3 py-4 rounded-md justify-center items-center">
              <div className="bg-white w-full h-[200px] p-2 relative rounded-md">
                <Image
                  src={image.src}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="text-black mt-2">
                <h3>{image.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
