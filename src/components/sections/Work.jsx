import Container from "../layout/Container";
function Work() {
  return (
    <section id="work" className="py-11">
      <Container>
        <div className="mb-16">
          <div className="inline-block bg-primary/25 text-primary rounded-full py-2 px-6 mb-6">
            <h4 className="uppercase font-medium">My Work</h4>
          </div>
          <h2 className="text-2xl text-zinc-300 font-bold">Selected Work</h2>
        </div>
      </Container>
      <div className="sm:px-8">
        <div className="w-full max-w-7xl mx-auto lg:px-8">
          <div className="slider">
            <ul className="slider-container">
              <li className="slider-item">
                <div
                  className="portfolio-card img-holder"
                  style={{ width: "366px", height: "366px" }}
                >
                  <img
                    src="./portfolio-1.jpg"
                    alt="portfolio"
                    loading="lazy"
                    className="img-cover"
                    style={{ width: "366px", height: "366px" }}
                  />

                  <div className="card-content">
                    <h3 className="card-title">Lab. 001</h3>
                    <p className="card-text">Website Design</p>
                  </div>
                </div>
              </li>
              <li className="slider-item">
                <div
                  className="portfolio-card img-holder"
                  style={{ width: "366px", height: "366px" }}
                >
                  <img
                    src="./portfolio-2.jpg"
                    alt="portfolio"
                    loading="lazy"
                    className="img-cover"
                    style={{ width: "366px", height: "366px" }}
                  />

                  <div className="card-content">
                    <h3 className="card-title">Lab. 001</h3>
                    <p className="card-text">Website Design</p>
                  </div>
                </div>
              </li>
              <li className="slider-item">
                <div
                  className="portfolio-card img-holder"
                  style={{ width: "366px", height: "366px" }}
                >
                  <img
                    src="./portfolio-3.jpg"
                    alt="portfolio"
                    loading="lazy"
                    className="img-cover"
                    style={{ width: "366px", height: "366px" }}
                  />

                  <div className="card-content">
                    <h3 className="card-title">Lab. 001</h3>
                    <p className="card-text">Website Design</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="slider-controls">
              <button
                className="slider-control prev"
                data-slider-prev
                aria-label="Slide to previous item"
              >
                <div className="line"></div>
                <div className="arrow"></div>
              </button>

              <button
                className="slider-control next"
                data-slider-next
                aria-label="Slide to next item"
              >
                <div className="line"></div>
                <div className="arrow"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
