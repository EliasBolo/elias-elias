import React from 'react';

function Services() {
  return (
    <section className="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd">
      <div className="container ontop">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Η ΕΞΕΙΔΙΚΕΥΣΗ ΜΑΣ</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  PREMIUM <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>ΠΡΟΒΟΛΗ ΟΛΩΝ</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">01</span>
                <div>
                  <span className="sub-title main-color mb-10">MARKETING / DIGITAL MARKETING</span>
                  <h2>
                    Re/ <span className="fw-200">Branding</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  Εξυπηρετούμε απο την εταιρική ταυτότητα, το Βusiness Plan, την προώθηση ( Digital Marketing ) μέχρι και την διάθεση του προϊόντος.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/1_1.jpg" alt="" />
                <a> {/*href="/page-services-details"*/}
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">02</span>
                <div>
                  <span className="sub-title main-color mb-10">INFORMATION TECHNOLOGY</span>
                  <h2>
                    IT <span className="fw-200">Consulting</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                 Προσφέρουμε συμβουλευτικές υπηρεσίες στον τομέα της τεχνολογίας, δημιουργώντας υπεραξίες & οικονομίες κλίμακος.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/2_2.jpg" alt="" />
                <a> {/*href="/page-services-details"*/}
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item pb-0">
          <div className="row md-marg align-items-end">
            <div className="col-lg-4">
              <div>
                <span className="num">03</span>
                <div>
                  <span className="sub-title main-color mb-10">Web Development</span>
                  <h2>
                    Websites / <span className="fw-200">Apps</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text md-mb80">
                <p>
                  Κατασκευάζουμε εφαρμογές διαδικτύου ( ιστοσελίδες, συστημάτα κρατήσεων, e-shop ) & mobile apps, κατά τις ανάγκες της επιχείρησης.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img fit-img">
                <img src="/assets/imgs/serv-img/3_3.jpg" alt="" />
                <a> {/*href="/page-services-details"*/}
                  <span className="ti-arrow-top-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
