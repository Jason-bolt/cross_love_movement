import AboutImage from "../assets/about_image.jpg";
import DigitalCampaigns from "../assets/digital_campaigns.png";

const About = () => {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center bg-amber-50 py-4 md:items-start"
        id="about_us"
      >
        <div className="flex flex-col items-center justify-center space-y-4 p-4 max-w-6xl mx-auto md:p-8 md:items-start">
          <h1 className="text-amber-800 text-4xl py-2 font-bold">About</h1>
          {/* Image and text */}
          <div className="flex flex-col gap-6 md:flex-row">
            <img
              src={AboutImage}
              className="object-cover w-full md:w-1/2"
              alt="about-image"
              loading="lazy"
            />
            <div className="flex flex-col items-center justify-center gap-5 text-heading-dark text-justify text-lg md:w-1/2">
              <p>
                We are a Christian non-denominational nonprofit, comprised of
                creatives and advocates dedicated to engaging communities
                through faith and creativity to promote the well-being of our
                society.
              </p>
              <p>
                <span className="text-amber-500 font-bold">Our Mission:</span>{" "}
                Our mission is to inspire, uplift, and transform society by
                harnessing the power of faith, creativity, and unity.
              </p>
              <p>
                <span className="text-amber-500 font-bold">Our Vision:</span>{" "}
                Our Vision is to be a hub for creativity that inspires faith,
                fosters harmony, and promotes the well-being of society and our
                planet.
              </p>
              <p>
                <span className="text-amber-500 font-bold">Our Values:</span>{" "}
                Faith, love, creativity, and service are the heartbeat of all we
                do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center bg-amber-800 py-4 md:items-start"
        id="about_us"
      >
        <div className="flex flex-col items-center justify-center space-y-4 p-4 max-w-6xl mx-auto md:p-8 md:items-start">
          <img src={DigitalCampaigns} alt="video" className="object-cover" />
        </div>
      </section>
    </>
  );
};

export default About;
