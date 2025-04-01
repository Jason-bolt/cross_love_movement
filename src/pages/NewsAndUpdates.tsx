import NewsCard from "../components/NewsCard";

const NewsAndUpdates = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-amber-800 pt-4 pb-12 md:items-start"
      id="about_us"
    >
      <div className="flex flex-col items-center justify-center space-y-4 p-4 w-full max-w-6xl mx-auto md:p-8 md:items-start">
        <h1 className="text-amber-50 text-4xl py-2 font-bold">
          News And Updates
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center mx-auto gap-7">
          <NewsCard
            imageUrl={
              "https://cross-lovemovement.my.canva.site/_assets/media/9f2f6405837cd19e5c5e588293ca704c.jpg"
            }
            title={`‘Today Is Us’
Endorsed by NPC`}
            shortBody={`On the 18th October,
2024, the National Peace
Council of Ghana
endorsed project “Today
Is Us”`}
            link={"today-is-us-story"}
          />
          <NewsCard
            imageUrl={
              "https://cross-lovemovement.my.canva.site/_assets/media/9f2f6405837cd19e5c5e588293ca704c.jpg"
            }
            title={`‘Today Is Us’
Endorsed by NPC`}
            shortBody={`On the 18th October,
2024, the National Peace
Council of Ghana
endorsed project “Today
Is Us”`}
            link={"today-is-us-story"}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdates;
