import OurWorkCard from "../components/OurWorkCard";

const OurWork = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-amber-800 pt-4 pb-12 md:items-start"
      id="about_us"
    >
      <div className="flex flex-col items-center justify-center space-y-4 p-4 w-full max-w-6xl mx-auto md:p-8 md:items-start">
        <h1 className="text-amber-50 text-4xl py-2 font-bold">
          Our Work In The Community
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center mx-auto gap-7">
          {/* card */}
          <OurWorkCard
            imageUrl="https://cross-lovemovement.my.canva.site/_assets/media/9f2f6405837cd19e5c5e588293ca704c.jpg"
            name="Patriotism"
            link=""
          />
          <OurWorkCard
            imageUrl="https://cross-lovemovement.my.canva.site/_assets/media/9f2f6405837cd19e5c5e588293ca704c.jpg"
            name="Bakanga Outreach"
            link=""
          />
          <OurWorkCard
            imageUrl="https://cross-lovemovement.my.canva.site/_assets/media/9f2f6405837cd19e5c5e588293ca704c.jpg"
            name="Patriotism"
            link=""
          />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
