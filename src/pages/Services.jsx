import React from 'react'
import Destination from './Destination'

function Services() {
  return (
    <div>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            Services
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
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



      {/* Package End */}
    </div>
  )
}

export default Services