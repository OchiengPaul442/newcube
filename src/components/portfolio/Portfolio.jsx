// import React from 'react'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: 'Electrical Engineering',
      image: 'electrical.jpg',
      about: 'We offer a wide range of electrical engineering services',
    },
    {
      id: 2,
      name: 'Mechanical Engineering',
      image: 'mechanical.jpg',
      about: 'We offer a wide range of mechanical engineering services',
    },
    {
      id: 3,
      name: 'Civil Engineering',
      image: 'civil.jpg',
      about: 'We offer a wide range of civil engineering services',
    },
    {
      id: 4,
      name: 'Electrical Engineering',
      image: 'electrical.jpg',
      about: 'We offer a wide range of electrical engineering services',
    },
    {
      id: 5,
      name: 'Mechanical Engineering',
      image: 'mechanical.jpg',
      about: 'We offer a wide range of mechanical engineering services',
    },
    {
      id: 6,
      name: 'Civil Engineering',
      image: 'civil.jpg',
      about: 'We offer a wide range of civil engineering services',
    },
  ];
  return (
    <section id="portfolio" className="wow fadeIn">
      <div className="sectionHeader textCenter">
        <p>Projects</p>
        <h2>Our Projects</h2>
      </div>
      <div className="containerFluid bgPortfolio py5">
        <div className="container py5">
          <div className="row m0 portfolioContainer">
            {portfolios.map(({ image, name, about }) => {
              return (
                <div className="colLg4 colMd6 colSm12 p0 portfolioItem">
                  <div className="positionRelative overflowHidden">
                    <div className="portfolioImg">
                      <img className="imgFluid w100" src={image} alt={name} />
                    </div>
                    <div className="portfolioText">
                      <h4 className="fontWeightBold mb4">{name}</h4>
                      <div className="dFlex flexColumn alignItemsCenter justifyContentCenter">
                        <p className="textCenter">{about}</p>
                        <a className="btn btnSm btnSecondary m1" href="$" data-lightbox="portfolio">
                          <i className="fa faEye" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
