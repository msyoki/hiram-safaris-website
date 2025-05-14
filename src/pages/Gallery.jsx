import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Modal, Box } from "@mui/material"; // Import Modal and Box from MUI
import "swiper/css";
import "swiper/css/navigation";

// Import all images from assets/images dynamically (WebPack-specific approach)
const importAll = (r) =>
  r.keys().map((key) => ({
    src: r(key),
    name: key.replace("./", "").split(".")[0],
  }));

const galleryImages = importAll(
  require.context("../assets/img", false, /\.(png|jpe?g|svg)$/)
);

function Gallery() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="container-xxl py-5 destination">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h4 className="section-title bg-white text-center px-3" style={{ color: "#86B817" }}>
            Gallery
          </h4>
          <h4 className="mb-5">Every Picture Tells a Story</h4>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          navigation
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <style>
            {`
              .swiper-button-prev,
              .swiper-button-next {
                color: #86B817; /* Set the color to green */
              }
            `}
          </style>

          {galleryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <a
                className="position-relative d-block overflow-hidden rounded"
                onClick={() => openModal(img.src)} // Open modal on image click
              >
                <img
                  className="img-fluid w-100"
                  src={img.src}
                  alt={`Gallery Image ${img.name}`}
                  style={{
                    height: "300px",
                    objectFit: "cover",
                  }}
                />

              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Modal to display the clicked image */}
        <Modal
          open={Boolean(modalImage)} // Show modal if modalImage is not null
          onClose={closeModal} // Close the modal on background click
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0, // No padding for the modal
          }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: "100%",
              maxHeight: "100%",
              width: "100vw",
              height: "100vh",
              overflow: "hidden",
            }}
            onClick={closeModal} // Close modal when clicking anywhere on the background
          >
            <img
              src={modalImage}
              alt="Selected Gallery"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain", // Ensure the image scales correctly
              }}
            />
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Gallery;
