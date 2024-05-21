'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div className="header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="caption">
              <div className="sub-title fz-12">
                <a href="#0">
                  <span>Marketing , </span>
                </a>
                <a href="#0">
                  <span>Digital</span>
                </a>
              </div>
              <h1 className="fz-55 mt-30">
              Πότε και πως ξεκίνησε το Marketing?
              </h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex align-items-center">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="#0" className="circle-60">
                        <img
                          src="/assets/imgs/blog/author.png"
                          alt=""
                          className="circle-img"
                        />
                      </a>
                      <a href="#0" className="ml-20">
                        <span className="opacity-7">Author</span>
                        <h6 className="fz-16">Elias</h6>
                      </a>
                    </div>
                  </div>
                  <div className="date ml-50">
                    <a href="#0">
                      <span className="opacity-7">Published</span>
                      <h6 className="fz-16">August 6, 2021</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="background bg-img mt-80"
        data-background="/assets/imgs/blog/b1 copy2.jpg"
      ></div>
    </div>
  );
}

export default Header;
