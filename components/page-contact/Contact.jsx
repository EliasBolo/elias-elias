import React from 'react';
import Link from 'next/link';

function Contact() {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="tel:00302421182282">2421 182 282</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Διεύθυνση</h6>
                <p>Κ Καρτάλη 150, ΤΚ:38221, Βόλος</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p><a href="mailto:info@elias-elias.gr">info@elias-elias.gr</a></p>
              </div>

              <div className="social-icon mt-50">
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="https://www.facebook.com/doubleelias" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="https://www.instagram.com/elias_elias2022/" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">ΑΣ ΜΙΛΗΣΟΥΜΕ</h6>
                <h3 className="text-u ls1">
                  ΦΟΡΜΑ <span className="fw-200">ΕΠΙΚΟΙΝΩΝΙΑΣ</span>
                </h3>
              </div>
              <form
                id="contact-form"
                className="form2"
                method="post"
                action="contact.php"
              >
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_name"
                        type="text"
                        name="name"
                        placeholder="Όνομα"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="form_email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        id="form_subject"
                        type="text"
                        name="subject"
                        placeholder="Θέμα"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="website"
                        type="website"
                        name="website"
                        placeholder="Η Ιστοσελίδα σας"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        placeholder="Γράψτε λίγα λόγια για εσάς και τι χρειάζεστε απο εμάς"
                        rows="4"
                        required="required"
                      ></textarea>
                    </div>
                    
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-full butn-bord radius-30"
                      >
                        <span className="text">ΑΠΟΣΤΟΛΗ</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
