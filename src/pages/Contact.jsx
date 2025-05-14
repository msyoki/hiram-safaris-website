import React from 'react'

function Contact() {
  return (
    <div>
      {/* Hero Header Start */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Header End */}

      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>Get In Touch</h5>
             

              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Office</h5>
                  <p className="mb-0">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Mobile</h5>
                  <p className="mb-0">+254733800185/723-830684/240524</p>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: 50, height: 50 }}
                >
                  <i className="fa fa-envelope-open text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Email</h5>
                  <p className="mb-0">munuhe@mail.com / janewaihura@yahoo.com</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8046484371034!2d37.31409177349444!3d-0.14999463543668484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827e15555555555%3A0xc947a256df18ed98!2sMount%20Kenya%20National%20Park!5e0!3m2!1sen!2ske!4v1747216354050!5m2!1sen!2ske"
                frameBorder={0}
                style={{ minHeight: 300, border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>

            {/* WhatsApp Contact */}
            <div
              className="col-lg-4 col-md-12 wow fadeInUp d-flex flex-column align-items-center justify-content-center text-center"
              data-wow-delay="0.5s"
            >
              <h5 className="mb-3">Need Quick Help?</h5>
              <p className="mb-4">Reach out to our support team directly on WhatsApp.</p>
              <a
                href="https://wa.me/254723830684"
                className="btn btn-lg d-flex align-items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#25D366",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "40px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#1ebe5d")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#25D366")}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: "1.5rem" }} />
                Chat with us on WhatsApp
              </a>
            </div>

          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>

  )
}

export default Contact
