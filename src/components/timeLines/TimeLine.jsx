// import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Picture1 from '../../assets/images/augst 003.jpg';
import Picture2 from '../../assets/images/sept03.jpg';
import Picture3 from '../../assets/images/sept.jpg';
import Picture4 from '../../assets/images/new1.jpeg';
import Picture5 from '../../assets/images/new2.jpeg';
import Picture6 from '../../assets/images/new3.jpeg';

const TimeLine = () => {
  const timelines = [
    {
      id: 1,
      title: '2019',
      image: Picture1,
    },
    {
      id: 2,
      title: '2019',
      image: Picture2,
    },
    {
      id: 3,
      title: '2020',
      image: Picture3,
    },
    {
      id: 4,
      title: '2021',
      image: Picture4,
    },
    {
      id: 4,
      title: '2021',
      image: Picture5,
    },
    {
      id: 4,
      title: '2021',
      image: Picture6,
    },
  ];

  return (
    <section id="timeline">
      <div className="container-fluid py-5 wow fadeIn">
        <div className="container py-5">
          <div className="row align-items-end mb-4 timeline-head">
            <div className="col-lg-6">
              <h1 className="section-title mb-3">Always Deliver more than expected.</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="timeline-carousel position-relative">
                {timelines.map((timeline) => {
                  return (
                    <div className="timeline">
                      <div className="position-relative">
                        <div className="timeline-img">
                          <img className="img-fluid" src={timeline.image} alt="" />
                        </div>
                        <div className="timeline-social d-flex flex-column align-items-center justify-content-center">
                          <a
                            target="_blank"
                            className="btn btn-secondary btn-social mb-2"
                            href="https://twitter.com/CubeEngineers?s=20&t=YOPh578w5sA3VX3KHRhieg"
                            rel="noreferrer"
                          >
                            <TwitterIcon />
                          </a>
                          <a
                            target="_blank"
                            className="btn btn-secondary btn-social mb-2"
                            href="https://www.linkedin.com/company/cube-engineering-and-general-supplies-limited/"
                            rel="noreferrer"
                          >
                            <LinkedInIcon />
                          </a>
                        </div>
                      </div>
                      <div className="d-flex flex-column timeline-text text-center py-4">
                        <h5 className="font-weight-bold">{timeline.title}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
