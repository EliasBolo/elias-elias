import React from 'react';

function Blogs() {
  return (
    <section className="blog-main section-padding">
      <div className="container">
        <div className="row lg-marg justify-content-around">
          <div className="col-lg-8">
            <div className="md-mb80 blog">
              <div className="row">
                <div className="col-md-6">
                  <div className="item mb-50">
                    <div className="img fit-img">
                      <img src="/assets/imgs/blog/1.jpg" alt="" />
                    </div>
                    <div className="cont pt-40">
                      <div className="info sub-title p-color d-flex align-items-center mb-15">
                        <div>
                          <a href="/blog-grid-marketing">By : Elias G.</a>
                        </div>
                        <div className="ml-30">
                          <a href="/blog-grid-marketing">August 6, 2021</a>
                        </div>
                      </div>
                      <h4 className="fz-30">
                      Πόσο κοστίζει το digital marketing και γιατί είναι σημαντικό?
                      </h4>
                      <a
                        href="/blog-marketing-cost"
                        className="butn-crev d-flex align-items-center mt-40"
                      >
                        <span className="hover-this">
                          <span className="circle hover-anim">
                            <i className="ti-arrow-top-right"></i>
                          </span>
                        </span>
                        <span className="text">Διαβάστε το άρθρο</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-50">
                    <div className="img fit-img">
                      <img src="/assets/imgs/blog/1.jpg" alt="" />
                    </div>
                    <div className="cont pt-40">
                      <div className="info sub-title p-color d-flex align-items-center mb-15">
                        <div>
                          <a href="/blog-marketing-crisis">By : Elias G.</a>
                        </div>
                        <div className="ml-30">
                          <a href="/blog-marketing-crisis">August 06, 2021</a>
                        </div>
                      </div>
                      <h4 className="fz-30">
                      Marketing... <br /> σε περίοδο κρίσης!
                      </h4>
                      <a
                        href="/blog-marketing-crisis"
                        className="butn-crev d-flex align-items-center mt-40"
                      >
                        <span className="hover-this">
                          <span className="circle hover-anim">
                            <i className="ti-arrow-top-right"></i>
                          </span>
                        </span>
                        <span className="text">Διαβάστε το άρθρο</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item mb-50">
                    <div className="img fit-img">
                      <img src="/assets/imgs/blog/1.jpg" alt="" />
                    </div>
                    <div className="cont pt-40">
                      <div className="info sub-title p-color d-flex align-items-center mb-15">
                        <div>
                          <a href="/blog-marketing-start">By : Elias G.</a>
                        </div>
                        <div className="ml-30">
                          <a href="/blog-marketing-start">August 14, 2023</a>
                        </div>
                      </div>
                      <h4 className="fz-30">
                      Πότε και πως ξεκίνησε το Marketing?
                      </h4>
                      <a
                        href="/blog-marketing-start"
                        className="butn-crev d-flex align-items-center mt-40"
                      >
                        <span className="hover-this">
                          <span className="circle hover-anim">
                            <i className="ti-arrow-top-right"></i>
                          </span>
                        </span>
                        <span className="text">Διαβάστε το άρθρο</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              {/*
              <div className="widget">
                <h6 className="title-widget">Search Here</h6>
                <div className="search-box">
                  <input type="text" name="search-post" placeholder="Search" />
                  <span className="icon pe-7s-search"></span>
                </div>
              </div>
              */}
              <div className="widget catogry">
                <h6 className="title-widget">Categories</h6>
                <ul className="rest">
                  <li>
                    <span>
                      <a>Business</a>
                    </span>
                    <span className="ml-auto">00</span>
                  </li>
                  <li>
                    <span>
                      <a href="/blog-grid-marketing">Marketing</a>
                    </span>
                    <span className="ml-auto">03</span>
                  </li>
                  <li>
                    <span>
                      <a>Web Development</a>
                    </span>
                    <span className="ml-auto">00</span>
                  </li>
                </ul>
              </div>
              <div className="widget last-post-thum">
                <h6 className="title-widget">Πρόσφατα άρθρα</h6>
                <div className="item d-flex align-items-center">
                  <div>
                    <div className="img">
                      <a href="/blog-marketing-cost">
                        <img src="/assets/imgs/blog/c1.jpg" alt="" />
                        <span className="date">
                          <span>
                            14 / <br /> sep
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="cont">
                    <span className="tag">
                      <a href="/blog-marketing-cost">Marketing</a>
                    </span>
                    <h6>
                      <a href="/blog-marketing-cost">
                      Πόσο κοστίζει το digital marketing και γιατί είναι σημαντικό?
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="item d-flex align-items-center">
                  <div>
                    <div className="img">
                      <a href="/blog-marketing-crisis">
                        <img src="/assets/imgs/blog/c2.jpg" alt="" />
                        <span className="date">
                          <span>
                            14 / <br /> sep
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="cont">
                    <span className="tag">
                      <a href="/blog-marketing-crisis">Marketing</a>
                    </span>
                    <h6>
                      <a href="/blog-marketing-crisis">
                      Marketing σε περίοδο κρίσης!
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="item d-flex align-items-center">
                  <div>
                    <div className="img">
                      <a href="/blog-marketing-start">
                        <img src="/assets/imgs/blog/c3.jpg" alt="" />
                        <span className="date">
                          <span>
                            14 / <br /> sep
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="cont">
                    <span className="tag">
                      <a href="/blog-marketing-start">Marketing</a>
                    </span>
                    <h6>
                      <a href="/blog-marketing-start">
                      Πότε και πως ξεκίνησε το Marketing?
                      </a>
                    </h6>
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

export default Blogs;
