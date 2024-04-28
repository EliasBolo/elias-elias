import React from 'react';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/imgs/intro/i1.jpg" alt="" />
                  <div className="img-icon">
                    <img src="/assets/imgs/arw0.png" alt="" />
                  </div>
                </div>
                <div className="col-6 mt-40">
                  <img src="/assets/imgs/intro/i2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
              Χωρίς ψεύτικες υποσχέσεις,{' '}
                <span className="fw-100">δεν αναλαμβάνουμε όλα τα project που μας προτιμούν, αν εκτιμήσουμε πως κάποιες από τις μεταβλητές του
                το καταστούν αδύνατο να προχωρήσει.</span> 
              </h3>
              <p>
              Ανεξάρτητα απο τον κλάδο που ανήκετε, το κοινό-πελάτες, είναι πλέον διαδυκτιακοί και αποφασίζουν σε ποιόν θα δώσουν την προτίμησή τους.
              Ξενοδοχεία, ξενώνες, restaurant, φυσικά μαγαζιά, e-Shop, εταιρίες παροχής υπηρεσιών, start up ή υφιστάμενες, αναζητούν πελάτες... Εμείς, σας τους φέρνουμε!!
              Εμείς, μαζί σας, θα φτιάξουμε το customer journey, το "ταξίδι" που μετατρέπει το ενδιαφέρον, σε πελατειακή σχέση πολλών ετών(customer loyalty).
              </p>
              <a href="/page-services" className="underline main-color mt-40">
                <span className="text">
                  Our Services <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
