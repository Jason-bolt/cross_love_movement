import OurWorkCard from "../components/OurWorkCard";

const OurWork = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-amber-800 pt-4 pb-12 md:items-start"
      id="our_work"
    >
      <div className="flex flex-col items-center justify-center space-y-4 p-4 w-full max-w-6xl mx-auto md:p-8 md:items-start">
        <h1 className="text-amber-50 text-4xl py-2 font-bold">
          Our Work In The Community
        </h1>
        <p className="text-amber-50 text-lg text-center mx-auto mt-5">
          <q>
            Faith has meaning and relevance when it has a positive influence on
            society.
          </q>
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center mx-auto gap-7">
          {/* card */}
          <OurWorkCard
            imageUrl="https://cross-lovemovement.my.canva.site/_assets/media/f151ce610576f10f07c8d01ff7d45586.jpg"
            name="Patriotism"
            link="today_is_us_story"
          />
          <OurWorkCard
            imageUrl="https://cross-lovemovement.my.canva.site/_assets/media/b8e1c0eebe4d3a3ff5321e0a4a0e2180.jpg"
            name="Bakanga Outreach"
            link=""
          />
          <OurWorkCard
            imageUrl="https://cross-lovemovement.my.canva.site/_assets/media/dda7a1ce98d0c8fc57a3934e2f92684d.jpg"
            name="Cross Sessions"
            link="cross_session"
          />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
