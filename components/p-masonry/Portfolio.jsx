'use client';
import React, { useEffect } from 'react';
import initIsotope2 from '@/common/initIsotope2';
function Portfolio() {
  useEffect(() => {
    initIsotope2();
  }, []);
  return (
    <section className="work-minimal section-padding pb-40">
      <div className="container">
        <div className="row mb-80">
          <div className="col-lg-4">
            <div className="sec-head">
              <h6 className="sub-title main-color mb-10"> ΤΑ ΕΡΓΟ ΜΑΣ</h6>
              <h3>Μερικά Projects</h3>
            </div>
          </div>
          <div className="filtering col-lg-8 d-flex justify-content-end align-items-end">
            <div>
              <div className="filter">
                <span data-filter="*" className="active" data-count="08">
                  ΟΛΑ
                </span>
                <span data-filter=".marketing" data-count="01">
                  Marketing
                </span>
                <span data-filter=".design" data-count="02">
                  Design
                </span>
                <span data-filter=".development" data-count="03">
                  Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="gallery2  row sm-marg">
          <div className="col-lg-6 items marketing">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/h1.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="https://vasilopoulosfarms.com" target="_blank">Vasilopoulos Farms</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/project-details">Branding - Digital marketing</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 marketing development">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/1.jpg" alt="" />
                <div className="cont">
                  <h5>
                    <a href="/project-details">Vasilikos</a>
                  </h5>
                  <p>
                    <a href="https://vasilikos-farsala.gr" target="_blank">Digital marketing - web development</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 design">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/2.jpg" alt="" />
                <div className="cont">
                  <h5>
                    <a>Gia ta Sidera</a>
                  </h5>
                  <p>
                    <a href="/project-details">Logo design</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 design">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/3.jpg" alt="" />
                <div className="cont">
                  <h5>
                    <a href="/project-details">A Nice guy</a>
                  </h5>
                  <p>
                    <a href="/project-details">Graphic Design</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 items width2 marketing">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/4.jpg" alt="" />
                <div className="cont">
                  <h5>
                    <a href="https://oliveleaf-tea.com" target="_blank">Olive Leaf tea</a>
                  </h5>
                  <p>
                    <a href="/project-details">Marketing</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items marketing">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/h2.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="https://amaryllishouse.gr" target="_blank">Amaryllis Guest House</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/project-details">marketing</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items development">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/h3.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="https://ktimaesperides.gr" target="_blank">Ktima Esperides</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/project-details">Web Development</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 items development">
            <div className="item mt-10">
              <div className="img">
                <img src="/assets/imgs/works/4/h4.jpg" alt="" />
                <div className="cont inline d-flex align-items-center">
                  <div>
                    <h5>
                      <a href="https://winprofil.gr" target="_blank">Winprofil</a>
                    </h5>
                  </div>
                  <div className="ml-auto">
                    <p>
                      <a href="/project-details">Web Development</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
