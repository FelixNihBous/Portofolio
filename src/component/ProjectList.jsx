import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/swiper.css';
import { Pagination } from 'swiper/modules';
import adviceGenImage from '../assets/advice-gen.png';
import movieCollection from '../assets/movie-collection.png';
import onlineDessertShop from '../assets/online-dessertshop.png';
import gsap from 'gsap'; // Import GSAP

function ProjectList() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    let ctx;

    if (swiperInstance) {
      ctx = gsap.context(() => {
        gsap.fromTo(
          swiperInstance.slides,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
          }
        );
      });

      // Cleanup function
      return () => {
        ctx && ctx.revert();
      };
    }
  }, []);

  return (
    <>
    <h2>This is some of my project that i had finished.</h2>
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://github.com/FelixNihBous/felix_movie_collection_gsap_part_2">
            <img src={movieCollection} alt="Movie Collection Project" />
          </a>
          <p>Movie Collection</p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/FelixNihBous/ADVICE-GEN">
            <img src={adviceGenImage} alt="Advice Generator Project" />
          </a>
          <p>Advice Gen</p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/FelixNihBous/dessertshop-assignment">
            <img src={onlineDessertShop} alt="Dessert Shop" />
          </a>
          <p>Online Order Dessert Shop</p>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://github.com/FelixNihBous/">
            <p>To be continue...</p>
          </a>
          <p>Blank</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProjectList;