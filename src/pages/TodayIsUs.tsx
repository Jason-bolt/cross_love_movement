const TodayIsUs = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-amber-50 pt-4 pb-12 md:items-start"
      id="today_is_us"
    >
      <div className="flex flex-col items-center justify-center max-w-6xl p-4 mx-auto md:p-8">
        <div className="flex flex-col gap-6 items-center justify-center md:flex-row">
          <div className="flex-col flex-wrap items-center justify-center gap-7 text-center text-heading-dark text-lg md:w-1/2 md:text-start">
            <h1 className="uppercase text-4xl font-bold text-amber-800">
              <q>Today is us</q>
            </h1>
            <h1 className="font-semibold py-2 text-xl">
              Contributing to a National Agenda
            </h1>
            <p className="text-justify pt-2">
              <q>Today Is Us</q> is a peace advocacy initiative designed to
              inspire unity and peaceful coexistence across Ghana’s diverse
              communities. As Ghana prepares for upcoming elections, this
              campaign seeks to address the importance of peace by uniting
              voices from different cultural backgrounds.
            </p>
            <div className="mt-5 hidden md:block">
              <a
                href="#today_is_us_story"
                className="py-2 px-4 rounded bg-amber-800 text-white"
              >
                Learn more
              </a>
            </div>
          </div>
          <img
            src="https://cross-lovemovement.my.canva.site/_assets/media/dd97a1e29a05a1bfa4ea7ff9d95c3115.jpg"
            alt="todayisus"
            className="object-cover w-full md:w-1/2"
            loading="lazy"
          />
        </div>
        <a
          href="#today-is-us-story"
          className="py-2 px-4 rounded bg-amber-800 text-white mt-10 block md:hidden"
        >
          Learn more
        </a>
      </div>
    </section>
  );
};

export default TodayIsUs;
