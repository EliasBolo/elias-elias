import React from 'react';

function Blogs() {
  return (
    <section className="blog-main blog section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="item mb-50">
              <div className="img fit-img">
                <img src="/assets/imgs/blog/1.jpg" alt="" />
              </div>
              <div className="cont pt-40">
                <div className="info sub-title p-color d-flex align-items-center mb-15">
                  <div>
                    <a href="/blog-grid-marketing">ΚΑΤΗΓΟΡΙΑ :</a>
                  </div>
                  <div className="ml-30">
                    <a href="/blog-grid-marketing">MARKETING</a>
                  </div>
                </div>
                <h4 className="fz-30">
                  Ενημερωθείτε, σε ότι αφορά τον χώρο του marketing
                </h4>
                <a
                  href="/blog-grid-marketing"
                  className="butn-crev d-flex align-items-center mt-40"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">Όλα τα άρθρα</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
