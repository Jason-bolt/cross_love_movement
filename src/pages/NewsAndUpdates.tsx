import NewsCard from "../components/NewsCard";
import TodayIsUsImage from "../assets/today_is_us.png";

const NewsAndUpdates = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-amber-800 pt-4 pb-12 md:items-start"
      id="news_and_updates"
    >
      <div className="flex flex-col items-center justify-center space-y-4 p-4 w-full max-w-6xl mx-auto md:p-8 md:items-start">
        <h1 className="text-amber-50 text-4xl py-2 font-bold">
          News And Updates
        </h1>
        <div className="flex flex-row flex-wrap items-center justify-center mx-auto gap-7">
          <NewsCard
            imageUrl={
              "https://cross-lovemovement.my.canva.site/_assets/media/b86cfbbd1e3536e2b75863218c3c86a4.png"
            }
            title={`‘Today Is Us’ Endorsed by NPC`}
            shortBody={`On the 18th October, 2024, the National Peace Council of Ghana endorsed project “Today Is Us”...`}
            link={"today_is_us_story"}
          />
          <NewsCard
            imageUrl={TodayIsUsImage}
            title={`Launching of ‘Today Is Us’ Theme Song`}
            shortBody={`In collaboration with Académie De Musique Classique, and a vibrant community of advocates, we launched the video of our theme...`}
            link={"today_is_us_story"}
          />
          <NewsCard
            imageUrl={
              "https://cross-lovemovement.my.canva.site/_assets/media/19cd95e9d80fddc04d97f9d5f3a7eea3.jpg"
            }
            title={`‘Today is Us’ Peace Campaign Apparel`}
            shortBody={`Do you know your body language speaks a lot? What if you rock peace on! Visit our mech shop for stunning apparels that...`}
            link={"today_is_us_story"}
          />
          <NewsCard
            imageUrl={
              "https://cross-lovemovement.my.canva.site/_assets/media/49c0b54139ef97cfcd4b966374f60ff0.jpg"
            }
            title={`Our Maiden Album launch - ‘Salvation Anthem’`}
            shortBody={`On the 31st March, 2024, the Cross-Love Movement launched her maiden album dubbed ‘Salvation Anthem’...`}
            link={"today_is_us_story"}
          />
        </div>
      </div>
    </section>
  );
};

export default NewsAndUpdates;
