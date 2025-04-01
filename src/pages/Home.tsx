const Home = () => {
  return (
    <section
      className="flex flex-col items-center justify-center md:flex-row bg-amber-50"
      id="home"
    >
      <div className="h-screen w-full bg-[url(https://cross-lovemovement.my.canva.site/_assets/media/5ffee28edea6ee243929065b1c4cfae6.jpg)] bg-cover bg-center">
        <div className="bg-black/60 h-full w-full flex flex-col justify-center items-center space-y-4 p-4 md:p-8">
          <div>
            <h1 className="text-white font-semibold text-5xl text-center text-header-text pt-3 md:text-6xl md:leading-16">
              Transforming Society
            </h1>
            <h1 className="font-bold text-amber-500 text-5xl text-center pt-3 md:text-6xl md:leading-16">
              Through Faith And Creativity
            </h1>
          </div>
          {/* <Link to="#about_us">
            <button className="bg-orange-800 text-white px-6 py-3 my-2">
              Learn More
            </button>
          </Link> */}
        </div>
      </div>
      {/* <img
        src="https://cross-lovemovement.my.canva.site/_assets/media/5ffee28edea6ee243929065b1c4cfae6.jpg"
        alt="heading"
        className="w-full h-96 object-cover"
        loading="lazy"
      />
      <div
        className="flex flex-col justify-center items-center 
      space-y-4 p-4 md:p-8 md:items-start"
      >
        <img
          src="https://cross-lovemovement.my.canva.site/_assets/media/64e32a6ad47338405ae6e564fb4a0c96.png"
          alt="name"
        />
        <h1 className="text-heading-darker font-semibold text-4xl text-center text-header-text pt-3 md:text-start">
          Transforming Society{" "}
          <span className="font-bold">through faith and creativity</span>.
        </h1>
        <Link to="#about_us">
          <button className="bg-header-text text-white px-6 py-3 my-2">
            Learn More
          </button>
        </Link>
      </div> */}
    </section>
  );
};

export default Home;
