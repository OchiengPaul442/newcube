// import React from 'react'
import Picture1 from '../../assets/images/Picture1.png';
import Picture2 from '../../assets/images/Picture2.png';
import Picture3 from '../../assets/images/Picture3.png';
import Picture4 from '../../assets/images/Picture4.png';
import Picture5 from '../../assets/images/Picture5.png';
import Picture6 from '../../assets/images/Picture6.png';
import Picture7 from '../../assets/images/sinopec.png';

const Partners = () => {
  return (
    <section id="partners">
      <div className="container wow fadeIn">
        <div className="section-header text-center">
          <p>Partners</p>
          <h2>Our key partners</h2>
        </div>
        <div className="text-center">
          <div className="row align-items-center">
            <div className="col">
              <img width="280px" src={Picture1} alt="partner-logos" />
            </div>
            <div className="col">
              <img width="280px" src={Picture3} alt="partner-logos" />
            </div>
            <div className="col">
              <img width="280px" src={Picture4} alt="partner-logos" />
            </div>
            <div className="col">
              <img width="280px" src={Picture5} alt="partner-logos" />
            </div>
            <div className="col">
              <img width="280px" src={Picture2} alt="partner-logos" />
            </div>
            <div className="col">
              <img width="280px" src={Picture6} alt="partner-logos" />
            </div>
            <div className="col">
              <img width="280px" src={Picture7} alt="partner-logos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
