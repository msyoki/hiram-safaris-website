import React, { useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import Destination from './Destination';
import Gallery from './Gallery';

export default function Home() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true); // To track if the video is playing or paused
  const videoRef = useRef(null); // To reference the video element

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    }
  };

  const handleExploreClick = () => {
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  const handleReadMoreClick = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {/* <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h4 className="display-3 text-white mb-3 animated slideInDown">
                Enjoy Your Vacation With Us
              </h4>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Tempor erat elitr rebum at clita diam amet diam et eos erat
                ipsum lorem sit
              </p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Eg: Thailand"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-fluid" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video w-100 h-100"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1, // Keep the video behind the text content
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source
            src="https://videos.pexels.com/video-files/20271232/20271232-uhd_2560_1440_60fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with Linear Gradient for Gradient Effect */}
        <div
          className="overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(20, 20, 31, .7), rgba(20, 20, 31, .7))', // Gradient background
            zIndex: 0,
          }}
        ></div>

        {/* Content */}
        <div className="container py-5" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              {/* Main Heading with Responsive Font */}
              <h4
                className="text-white mb-3 animated slideInDown"
                style={{
                  fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
                  fontWeight: 'bold',
                  lineHeight: '1.2',
                }}
              >
                Expertly Guided. Wildly Authentic
              </h4>

              {/* Subheading */}
              <p className="text-white mb-4 animated slideInDown" style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}>
                Every Step, a Story — From the Heights to the Heart of the Wild
              </p>

              {/* Buttons Section */}
              <div className="position-relative w-75 mx-auto animated slideInDown text-center">
                {/* Play/Pause Button with Icons */}
                {/* <button
  type="button"
  className="btn btn-primary rounded-circle py-3 px-4 me-3 animated slideInDown"
  onClick={togglePlayPause}
>
  <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`}></i>
</button> */}


                {/* Explore Button */}
                <button
                  type="button"
                  className="btn btn-outline-primary rounded py-3 px-5 animated slideInDown explore-btn"
                  onClick={handleExploreClick}
                  style={{
                    fontSize: '1.1rem', // Slightly larger font size
                    letterSpacing: '1px',
                    borderRadius: '50px', // Add rounded corners to this button as well
                  }}
                >
                  Explore Now
                </button>
              </div>
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

              <a className="btn btn-primary py-3 px-5 mt-2" onClick={handleReadMoreClick}>
                Read More
              </a>
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
      {/* Service Start */}
      <div className="container-xxl py-5" id="services">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h4 className="section-title bg-white text-center text-primary px-3">
              Services
            </h4>
            <h4 className="mb-5">What We Offer</h4>
          </div>
          <div className="row g-4">
            {/* Service Item */}
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3 h-100 d-flex flex-column">
                <div className="p-4 d-flex flex-column align-items-center text-center flex-grow-1">
                  <i className="fas fa-mountain fa-3x text-primary mb-4"></i>
                  <h5>Mountain Trekking</h5>
                  <p className="mt-3">Guided climbs on Mt. Kenya and other peaks, with full support from experienced teams.</p>
                </div>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3 h-100 d-flex flex-column">
                <div className="p-4 d-flex flex-column align-items-center text-center flex-grow-1">
                  <i className="fas fa-car-side fa-3x text-primary mb-4"></i>
                  <h5>Inclusive Safaris</h5>
                  <p className="mt-3">All-inclusive trips covering meals, transport, guides, porters, accommodation, park fees, and camping equipment.</p>
                </div>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3 h-100 d-flex flex-column">
                <div className="p-4 d-flex flex-column align-items-center text-center flex-grow-1">
                  <i className="fas fa-campground fa-3x text-primary mb-4"></i>
                  <h5>DIY Safaris</h5>
                  <p className="mt-3">Flexible safaris where you can hire guides, cooks, and camping gear as needed for a personalized adventure.</p>
                </div>
              </div>
            </div>

            {/* Service Item */}
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3 h-100 d-flex flex-column">
                <div className="p-4 d-flex flex-column align-items-center text-center flex-grow-1">
                  <i className="fas fa-binoculars fa-3x text-primary mb-4"></i>
                  <h5>National Park Safaris</h5>
                  <p className="mt-3">Trips to Samburu, Lake Bogoria, Nakuru, Naivasha, Maasai Mara, and more — with optional camping gear and guides.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Service End */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h6 className="display-3 text-white animated slideInDown mt-lg-5 " style={{ fontSize: '30px' }}>
                Introduction to Mount Kenya
              </h6>
              <p className="text-white">
                Mount Kenya, Africa's second-highest peak, offers dramatic, glacier-capped landscapes and lush forests.
                More challenging than Kilimanjaro, it's prized for its rich scenery and biodiversity.
                An extinct volcano last active 3.1 million years ago, it became a national park in 1949, now managed by Kenya Wildlife Service.
                Home to over 800 plant species (81 endemic) and wildlife like elephants, buffaloes, zebras, and the rare Mt. Kenya rock hyrax.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Destination Start */}
      <Destination />
      {/* Destination end */}

      {/* Package Start */}

      <div className="container-xxl py-5" id="packages">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h4 className="section-title bg-white text-center text-primary px-3">
              Packages
            </h4>
            <h4 className="mb-5">Our Adventure Trips</h4>
          </div>

          {/* Easy Exploration */}
          <div className="mb-5">
            <h5 className="text-primary">Easy Exploration</h5>
            <div className="row g-4 mt-2">
              {/* One Day Trips */}
              <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="package-item rounded p-4 h-100">
                  <h5>One Day Trips</h5>
                  <p>Perfect for quick explorers! Enjoy scenic hikes through Mount Kenya’s lush lower forests and open moorlands, spotting rare birds, wildlife, and endemic plant species. Great for beginners and nature lovers alike.</p>
                </div>
              </div>

              {/* Two Day Trips */}
              <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="package-item rounded p-4 h-100">
                  <h5>Two Day Trips</h5>
                  <p>Challenge yourself with a two-day adventure starting from Met Station to Mackinders Camp (4200m). Trek through dense forest, heath, and moorland zones, witnessing breathtaking views of glaciers and mountain peaks along the way.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summit Treks */}
          <div className="mb-5">
            <h5 className="text-primary">Summit Treks</h5>
            <div className="row g-4 mt-2">
              {/* Point Lenana Treks */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="package-item rounded p-4 h-100">
                  <h5>Point Lenana Treks</h5>
                  <p>Embark on a 3 to 6-day trek to Point Lenana (4985m), the third-highest peak of Mount Kenya. Perfect for trekkers seeking altitude experience without technical climbing. Marvel at sunrise over Africa from a breathtaking summit.</p>
                </div>
              </div>

              {/* Sirimon Route Adventures */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="package-item rounded p-4 h-100">
                  <h5>Sirimon Route Adventures</h5>
                  <p>Ascend Mount Kenya’s Sirimon Route — the driest and most accessible path. Trek through ancient forests, giant lobelia fields, and rocky landscapes. Ideal for moderate trekkers aiming for Point Lenana with gradual acclimatization.</p>
                </div>
              </div>

              {/* Chogoria Route */}
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
                <div className="package-item rounded p-4 h-100">
                  <h5>Chogoria Route</h5>
                  <p>Known as Mount Kenya’s most scenic trail, the Chogoria Route passes waterfalls, deep gorges, crystal-clear lakes, and dramatic cliffs. Camp at Mintos or Austrian Hut for a sunrise summit push to Point Lenana.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remote Wilderness Treks */}
          <div className="mb-5">
            <h5 className="text-primary">Remote Wilderness Treks</h5>
            <div className="row g-4 mt-2">
              {/* Burguret & Timau Routes */}
              <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="1.1s">
                <div className="package-item rounded p-4 h-100">
                  <h5>Burguret & Timau Routes</h5>
                  <p>Discover off-the-beaten-track routes perfect for adventurers seeking solitude. These wild trails pass through dense rainforest and remote moorlands, offering chances to spot wildlife and experience true wilderness trekking.</p>
                </div>
              </div>

              {/* Traversing Mt. Kenya */}
              <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="1.3s">
                <div className="package-item rounded p-4 h-100">
                  <h5>Traversing Mt. Kenya</h5>
                  <p>Experience the ultimate adventure by combining multiple routes (Naromoru, Sirimon, Chogoria, Timau, or Burguret) for a full traverse of Mount Kenya. Witness diverse landscapes and ecosystems as you cross the mountain from side to side.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Rock Climbing Expeditions */}
          <div className="mb-5">
            <h5 className="text-primary">Technical Climbing</h5>
            <div className="row g-4 mt-2">
              {/* Rock Climbing Expeditions */}
              <div className="col-lg-12 wow fadeInUp" data-wow-delay="1.5s">
                <div className="package-item rounded p-4 h-100">
                  <h5>Rock Climbing Expeditions</h5>
                  <p>For skilled climbers, tackle Mount Kenya’s highest peaks — Batian (5199m) and Nelion (5188m) — via world-class technical rock climbing routes. Fully guided expeditions with safety equipment and expert leadership included.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-3 text-center">
              <h6 className="display-3 text-white animated slideInDown" style={{ fontSize: '30px' }}>
                Introduction to Mount Kenya
              </h6>
              <p className="text-white">
                Mount Kenya, Africa's second-highest peak, offers dramatic, glacier-capped landscapes and lush forests.
                More challenging than Kilimanjaro, it's prized for its rich scenery and biodiversity.
                An extinct volcano last active 3.1 million years ago, it became a national park in 1949, now managed by Kenya Wildlife Service.
                Home to over 800 plant species (81 endemic) and wildlife like elephants, buffaloes, zebras, and the rare Mt. Kenya rock hyrax.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container-fluid" style={{ backgroundColor: '#86B817' }}>
        <div className="container">

          {/* Header Section */}
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <h6 className="display-3" style={{ fontSize: '30px', fontWeight: 700, margin: '3rem 0 1rem', color: '#fff', animation: 'slideInDown 1s ease-out' }}>
                General Information
              </h6>
              <p style={{ color: '#fff' }}>
                Mount Kenya offers breathtaking views and a unique ecosystem. Below, we provide key details for planning your adventure.
              </p>
            </div>
          </div>

          {/* Information Sections */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#ffcc00' }}>
                What is offered?
              </h5>
              <ul style={{ listStyleType: 'none', padding: 0, color: '#fff' }}>
                <li><strong>Inclusive Safaris:</strong> Includes food, transportation, guides/cooks, porters, accommodation, National park fees, and camping equipment.</li>
                <li><strong>Do-It-Yourself Safaris:</strong> Customize your safari with optional guides/cooks and other services.</li>
                <li><strong>National Park and Game Reserve Safaris:</strong> Hire camping equipment and arrange for guides and cooks.</li>
                <li><strong>Other Safaris:</strong> Safaris can be arranged for other parks such as Samburu, Lake Bogoria, Nakuru, Naivasha, and Maasai Mara.</li>
              </ul>
            </div>

            <div className="col-md-6 mb-4">
              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#ffcc00' }}>
                Environmental Considerations
              </h5>
              <p style={{ color: '#fff' }}>
                Mount Kenya hosts a delicate and irreplaceable ecosystem, including diverse flora and fauna. It is crucial that we all respect and protect this fragile environment.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#ffcc00' }}>
                Climbing Considerations
              </h5>
              <p style={{ color: '#fff' }}>
                Climbing Mt. Kenya requires respect for its challenges. Injuries can occur if you don't prepare properly, including lacking gear, improper acclimatization, or health issues. Always seek proper guidance and assistance.
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#ffcc00' }}>
                Season Consideration
              </h5>
              <p style={{ color: '#fff' }}>
                Safaris on Mount Kenya are available year-round, with the exception of rock climbing.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#ffcc00' }}>
                Clothing Requirements
              </h5>
              <p style={{ color: '#fff' }}>
                Layered clothing is strongly recommended. The materials should be wool or silk to avoid chills. Cotton absorbs moisture and causes discomfort. Essential items include sweaters, wool jackets, raincoats, wind shirts, mountain boots, and wool socks.
              </p>
              <p style={{ color: '#fff' }}>
                Note: All necessary clothing items are available for hire.
              </p>
            </div>

            <div className="col-md-6 mb-4">
              <h5 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', color: '#ffcc00' }}>
                Rucksack Requirements
              </h5>
              <p style={{ color: '#fff' }}>
                Clients are responsible for providing their own rucksack for the porter. All other equipment can be arranged for hire.
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* Package End */}




      {/* Gallery Start */}
      <Gallery />
      {/* Gallery Start */}

      {/* Booking Start */}
      {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="booking p-5">
            <div className="row g-5 align-items-center">
          
              <div className="col-md-6 text-white">
                <h4 className="text-white text-uppercase">Booking</h4>
                <h4 className="text-white mb-4">Chat With Us</h4>
                <p className="mb-4">
                  We’re just a message away. Let us know when and where you want to go,
                  and we’ll take care of the details for you.
                </p>
                <p className="mb-4">
                  Reach us via WhatsApp or phone, and get personalized recommendations, answers to all your
                  questions, and real-time availability updates.
                </p>

              </div>


             
              <div className="col-md-6 text-center text-white">
                <h4 className="text-white mb-4">Book via WhatsApp</h4>
              

                <a
                  className="btn btn-outline-light py-3 px-5 mt-2"
                  href="https://wa.me/254712345678"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp me-2"></i> Message Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Booking Start */}
      {/* Process Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
            <h4 className="section-title bg-white text-center text-primary px-3">
              Booking Process
            </h4>
            <h4 className="mb-5">3 Easy Steps</h4>
          </div>
          <div className="row gy-5 gx-4 justify-content-center">
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-comments fa-3x text-white" />
                </div>
                <h5 className="mt-4">Reach Out</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Contact our team via phone or email to discuss your travel preferences.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-clipboard-list fa-3x text-white" />
                </div>
                <h5 className="mt-4">Get a Custom Package</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  Based on your preferences, we will create a custom travel package tailored just for you.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="position-relative border border-primary pt-5 pb-4 px-4">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow"
                  style={{ width: 100, height: 100 }}
                >
                  <i className="fa fa-credit-card fa-3x text-white" />
                </div>
                <h5 className="mt-4">Make Payment</h5>
                <hr className="w-25 mx-auto bg-primary mb-1" />
                <hr className="w-50 mx-auto bg-primary mt-0" />
                <p className="mb-0">
                  After finalizing your package, proceed to payment via one of our advised methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Start */}
      {/* Team Start */}
      {/* <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h4 className="section-title bg-white text-center text-primary px-3">
              Travel Guide
            </h4>
            <h4 className="mb-5">Meet Our Guide</h4>
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
      {/* Testimonial Start */}
      {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h4 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h4>
            <h4 className="mb-5">Our Clients Say!!!</h4>
          </div>
          <div className="owl-carousel testimonial-carousel position-relative">
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-1.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-2.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-3.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/testimonial-4.jpg"
                style={{ width: 80, height: 80 }}
              />
              <h5 className="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* Testimonial End */}
    </div>
  )
}
