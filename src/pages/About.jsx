import React from 'react'

function About() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                About Us
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  {/* <li className="breadcrumb-item">
                    <a href="/Pages">Pages</a>
                  </li> */}
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* About Start */}
     <div className="container-xxl py-5" id='about'>
        <div className="container">
          {/* <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h4 className="section-title bg-white text-center text-primary px-3">
            About Us
            </h4>
            <h4 className="mb-5"> Welcome to <span className="text-primary">Hiram's <span>Mountain Trek & Safaris</span></span></h4>
          </div> */}

          <div className="row g-5">
            {/* Text Content – First on small screens, second on large */}
            <div className="col-lg-6 order-0 order-lg-1 wow fadeInUp" data-wow-delay="0.3s">
              <h4 className="section-title bg-white text-start text-primary pe-3">
                About Us
              </h4>
              <h4 className="mb-4">
                Welcome to <span className="text-primary">Hiram's <span>Mountain Trek & Safaris</span></span>
              </h4>

              <p className="mb-4">
                At <strong>Hiram's Mountain Trek & Safaris</strong>, adventure is more than a journey — it’s a way of life.
                We specialize in creating unforgettable experiences, whether you're standing atop Mount Kenya’s highest peaks,
                hiking through untouched forests, or spotting wildlife across Kenya’s most breathtaking landscapes.
              </p>
              <p className="mb-4">
                With years of experience and a passion for the outdoors, our team crafts safaris and treks that are safe,
                personalized, and truly immersive. Whether you're an experienced mountaineer, a first-time adventurer,
                or a nature enthusiast, we are here to guide your steps every part of the way.
              </p>

              <div className="row gy-2 gx-4 mb-4">
                {/* Feature list... */}
              </div>

              {/* <a className="btn btn-primary py-3 px-5 mt-2" onClick={handleReadMoreClick}>
                Read More
              </a> */}
            </div>


            {/* Image – Second on small screens, first on large */}
            <div
              className="col-lg-6 order-1 order-lg-0  wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/about2.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* About End */}
      {/* Team Start */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Travel Guide
            </h6>
            <h1 className="mb-5">Meet Our Guide</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/team-1.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/team-2.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/team-3.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/team-4.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Team End */}
    </div>
  )
}

export default About