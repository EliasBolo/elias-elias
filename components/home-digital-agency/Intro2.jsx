'use client';
import React from 'react';

function Intro2() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }
  return (
    <section className="intro-accord">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/assets/imgs/arw2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">ΓΙΑΤΙ ΝΑ ΜΑΣ ΕΠΙΛΕΞΕΤΕ</h6>
                <h3>
                  H δημιουργική διαδικασία <br /> της ομάδας μας.
                </h3>
              </div>
              <div className="accordion bord">
                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    <h6>Designing Content With AI Power</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Η ποιότητα του περιεχομένου που δημιουργείται με τη χρήση της τεχνητής νοημοσύνης
                     εξαρτάται από πολλούς παράγοντες, συμπεριλαμβανομένου του αλγορίθμου που χρησιμοποιείται,
                      της ποιότητας των δεδομένων που τροφοδοτούν το μοντέλο και της επιμέλειας που ασκεί
                       ο δημιουργός του περιεχομένου.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    <h6>Ταλαντούχα, επαγγελματική ομάδα ειδικών</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Εμπειρία και Εξειδίκευση, Δυναμική Ανταπόκριση, Δημιουργικότητα και Καινοτομία, Αποτελεσματικότητα και Απόδοση 
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    <h6>Κατασκευάζουμε και ενεργοποιούμε brands</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                    Η διαδικασία κατασκευής και ενεργοποίησης ενός brand περιλαμβάνει τη δημιουργία της ταυτότητας του brand, την ανάπτυξη μιας σαφούς εικόνας και φιλοσοφίας
                      για το προϊόν ή την υπηρεσία, και τη διαμόρφωση ενός μηνύματος που να αντικατοπτρίζει αυτήν την εικόνα. Ακολουθεί η διάθεση του προιόντος ή υπηρεσίας,
                        με τις κατάλληλες προωθητικές ενέργειες.
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

export default Intro2;
