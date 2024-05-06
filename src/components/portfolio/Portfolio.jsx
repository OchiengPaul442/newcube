import { useState } from 'react';
import P1 from '../../assets/images/portfolio/portfolio1 (1).jpeg';
import P2 from '../../assets/images/portfolio/portfolio1 (2).jpeg';
import P3 from '../../assets/images/portfolio/portfolio1 (3).jpeg';
import P4 from '../../assets/images/portfolio/portfolio1 (4).jpeg';
import P5 from '../../assets/images/portfolio/portfolio1 (5).jpeg';
import P6 from '../../assets/images/portfolio/portfolio1 (6).jpeg';
import P7 from '../../assets/images/portfolio/portfolio1 (7).jpeg';
import P8 from '../../assets/images/portfolio/portfolio1 (8).jpeg';
import P9 from '../../assets/images/portfolio/portfolio1 (9).jpeg';
import P10 from '../../assets/images/portfolio/portfolio1 (10).jpeg';
import P11 from '../../assets/images/portfolio/portfolio1 (11).jpeg';
import P12 from '../../assets/images/portfolio/portfolio1 (12).jpeg';
import P13 from '../../assets/images/portfolio/portfolio1 (13).jpeg';
import P14 from '../../assets/images/portfolio/portfolio1 (14).jpeg';
import P15 from '../../assets/images/portfolio/portfolio1 (15).jpeg';
import P16 from '../../assets/images/portfolio/portfolio1 (16).jpeg';
import P17 from '../../assets/images/portfolio/portfolio1 (17).jpeg';
import P18 from '../../assets/images/portfolio/portfolio1 (18).jpeg';
import P19 from '../../assets/images/portfolio/portfolio1 (19).jpeg';
import P20 from '../../assets/images/portfolio/portfolio1 (20).jpeg';
import P21 from '../../assets/images/portfolio/portfolio1 (21).jpeg';
import P22 from '../../assets/images/portfolio/portfolio1 (22).jpeg';
import P23 from '../../assets/images/portfolio/portfolio1 (23).jpeg';
import P24 from '../../assets/images/portfolio/portfolio1 (24).jpeg';
import P25 from '../../assets/images/portfolio/portfolio1 (25).jpeg';
import P26 from '../../assets/images/portfolio/portfolio1 (26).jpeg';
import P27 from '../../assets/images/portfolio/portfolio1 (27).jpeg';
import P28 from '../../assets/images/portfolio/portfolio1 (28).jpeg';
import P29 from '../../assets/images/portfolio/portfolio1 (29).jpeg';
import P30 from '../../assets/images/portfolio/portfolio1 (30).jpeg';
import P31 from '../../assets/images/portfolio/portfolio1 (31).jpeg';
import P32 from '../../assets/images/portfolio/portfolio1 (32).jpeg';
import P33 from '../../assets/images/portfolio/portfolio1 (33).jpeg';

const Portfolio = () => {
  const portfolios = [
    { image: P1 },
    { image: P2 },
    { image: P3 },
    { image: P4 },
    { image: P5 },
    { image: P6 },
    { image: P7 },
    { image: P8 },
    { image: P9 },
    { image: P10 },
    { image: P11 },
    { image: P12 },
    { image: P13 },
    { image: P14 },
    { image: P15 },
    { image: P16 },
    { image: P17 },
    { image: P18 },
    { image: P19 },
    { image: P20 },
    { image: P21 },
    { image: P22 },
    { image: P23 },
    { image: P24 },
    { image: P25 },
    { image: P26 },
    { image: P27 },
    { image: P28 },
    { image: P29 },
    { image: P30 },
    { image: P31 },
    { image: P32 },
    { image: P33 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleClick = (number) => {
    setCurrentPage(number);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(portfolios.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = portfolios.slice(indexOfFirstItem, indexOfLastItem);

  const renderItems = currentItems.map((portfolio) => {
    return (
      <div key={portfolio.image} className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className="card m-0 h-100">
          <img src={portfolio.image} className="card-img-top" alt="" />
        </div>
      </div>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(portfolios.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li
        key={number}
        id={number}
        className={`page-item ${currentPage === number ? 'active' : ''}`}
      >
        <a
          className="page-link"
          href="#portfolio"
          onClick={(e) => {
            e.preventDefault();
            handleClick(number);
          }}
          onKeyDown={(e) => {
            e.preventDefault();
            if (e.key === 'Enter') {
              handleClick(number);
            }
          }}
        >
          {number}
        </a>
      </li>
    );
  });

  return (
    <section id="portfolio" className="wow fadeIn">
      <section id="contact">
        <div className="contact wow fadeInUp">
          <div className="container">
            <div className="section-header text-center">
              <p>Portfolio</p>
              <h2>Our Portfolio</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="container py-5">
        <div className="row">{renderItems}</div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <a className="page-link" href="#portfolio" onClick={handlePrev}>
                Previous
              </a>
            </li>
            {renderPageNumbers}
            <li className={`page-item ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
              <a className="page-link" href="#portfolio" onClick={handleNext}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Portfolio;
