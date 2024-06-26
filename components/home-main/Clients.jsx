'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Clients() {
  const swiperOptions = {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 40,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <section className="clients-carso section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                Στόχος μας να αξιοποιούμε <br />{' '}
                <span className="opacity-7">τεχνολογίες που μας εξελίσσουν.</span>
              </h3>
            </div>
          </div>
        </div>
        <div
          className="swiper5"
          data-carousel="swiper"
          data-items="5"
          data-loop="true"
          data-space="40"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-clients"
            className="swiper-container"
            data-swiper="container"
          >
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c7.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c6.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c8.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c4.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c5.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c1.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c2.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="img icon-img-100">
                  <img src="/assets/imgs/brands/c8.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="sec-bottom mt-100">
          <div className="main-bg d-flex align-items-center">
            <h6 className="fz-14 fw-400">
              Μας εμπιστεύονται &nbsp;<span className="fw-600"> 100+ &nbsp; </span>
               επιχειρήσεις
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
