import React from 'react'

function Destination() {
  return (
    <div>


      {/* Destination Start */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h4 className="section-title bg-white text-center text-primary px-3">
              Destinations
            </h4>
            <h4 className="mb-5">Our Popular Destination</h4>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                {/* Mount Kenya */}
                <div className="col-12 wow zoomIn" data-wow-delay="0.1s">
                  <a className="position-relative d-block overflow-hidden" href="#">
                    <img
                      className="img-fluid rounded shadow-sm w-100"
                      src="assets/img/mtk7.jpg"
                      alt="Mount Kenya"
                      loading="lazy"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2 rounded">
                      Mount Kenya
                    </div>
                  </a>
                </div>

                {/* Ol Pejeta */}
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                  <a className="position-relative d-block overflow-hidden" href="#">
                    <img
                      className="img-fluid rounded shadow-sm w-100"
                      src="assets/img/olpejeta.jpg"
                      alt="Ol Pejeta"
                      loading="lazy"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2 rounded">
                      Ol Pejeta
                    </div>
                  </a>
                </div>

                {/* Aberdares */}
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                  <a className="position-relative d-block overflow-hidden" href="#">
                    <img
                      className="img-fluid rounded shadow-sm w-100"
                      src="assets/img/arbadares.jpg"
                      alt="Aberdares"
                      loading="lazy"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2 rounded">
                      Aberdares
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Maasai Mara */}
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: 350 }}
            >
              <a className="position-relative d-block h-100 overflow-hidden" href="#">
                <img
                  className="img-fluid position-absolute w-100 h-100 rounded shadow-sm"
                  src="assets/img/maasaimara.jpg"
                  alt="Maasai Mara"
                  loading="lazy"
                  style={{ objectFit: 'cover' }}
                />
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2 rounded">
                  Maasai Mara
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
      {/* Destination Start */}
    </div>
  )
}

export default Destination
