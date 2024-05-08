import React from 'react';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <img src="/assets/imgs/logo-light.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">ΕΠΙΚΟΙΝΩΝΙΑ</h6>
              <h6 className="p-color fw-400">
              Κ Καρτάλη 150,<br /> 38221, Βόλος
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="mailto:info@eliaselias.gr">info@elias-elias.gr</a>
              </h6>
              <a href="tel:00302421182282" className="underline">
                <span className="fz-22 main-color">2421 182 282</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">ΧΡΗΣΙΜΑ</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/page-about">Η Εταιρία</a>
                </li>
                <li className="mb-15">
                  <a href="/page-services">Υπηρεσίες</a>
                </li>
                <li className="mb-15">
                  <a href="/portfolio-masonry">Έργα</a>
                </li>
                <li>
                  <a href="/page-contact">Επικοινωνία</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Εισάγετε Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="https://www.facebook.com/doubleelias" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://www.instagram.com/elias_elias2022/" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2024 Elias&Elias is Proudly Powered by{' '}
              <span className="underline main-color">
                <a href="/">
                  US!
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
