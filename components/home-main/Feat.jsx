'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';

function Feat() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <section className="feat section-padding">
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont md-mb50">
              <h6 className="sub-title main-color mb-15">ΑΠΑΡΑΙΤΗΤΑ ΒΗΜΑΤΑ</h6>
              <h3 className="mb-30">
              Η Διαδικασία που ακολουθούμε πρίν απο κάθε συνεργασία...
              </h3>
              <p>
              Η εταιρία σχηματίζει μια ομάδα ειδικών, συμπεριλαμβανομένων γραφιστών, προγραμματιστών, οικονομολόγων και digital marketers, που θα συνεργαστούν μαζί σας.
              </p>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="item mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/1.jpg"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">1. Αρχική συνάντηση </h5>
                    <p>
                    Σκοπός μας είναι να κατανοήσουμε τις ανάγκες σου, τους στόχους σου και το κοινό σου.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item mb-30">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/2.jpg"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">2. Αποδοχή ή απόριψη</h5>
                    <p>
                    Στην περίπτωση της αποδοχής, τα βήματα συνεχίζονται.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="row">
                <div
                  className="col-md-4 bg-img"
                  data-background="/assets/imgs/serv-img/3.jpg"
                ></div>
                <div className="col-md-8">
                  <div className="info">
                    <h5 className="mb-15">3. Ανάλυση αναγκών</h5>
                    <p>
                    Εκτελούμε λεπτομερή ανάλυση των αναγκών σου
                     για να προτείνουμε κατάλληλες λύσεις.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </section>
  );
}

export default Feat;
