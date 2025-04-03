import { Link } from "react-router-dom";

const TodayIsUsStory = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-amber-50 pt-4 pb-12 md:items-start"
      id="today_is_us_story"
    >
      <div className="flex flex-col items-center justify-center space-y-4 p-4 max-w-6xl mx-auto md:p-8 md:items-start">
        <h1 className="text-amber-800 text-4xl py-2 font-bold">Today Is Us</h1>
        <div className="flex flex-col flex-wrap items-center justify-center gap-7">
          <img
            src="https://cross-lovemovement.my.canva.site/_assets/media/7c2dbc118b1d73b451c1e37c6c1dee2d.jpg"
            alt="today-is-us"
            className="object-cover w-full h-96"
          />
          <div className="flex flex-col items-center justify-center text-justify text-lg gap-4">
            <p>
              <q>Today Is Us</q> is an extraordinary peace advocacy initiative
              by the Cross-Love Movement, aimed at uniting Ghanaians through the
              transformative power of music and community engagement. As Ghana
              prepares for its upcoming elections, the project calls on all
              citizens to embrace their shared responsibility in maintaining
              peace and promoting unity across ethnic, cultural, and religious
              divides. This initiative is grounded in the belief that peace is a
              legacy we inherit and must preserve for future generations.
            </p>

            <p>
              The project reached a significant milestone on 18th October 2024
              when the{" "}
              <strong className="text-amber-800">
                National Peace Council of Ghana
              </strong>{" "}
              officially endorsed it. This endorsement highlights the campaign’s
              importance during this pivotal period in the country’s history. By
              partnering with the National Peace Council, <q>Today Is Us</q> has
              gained credibility and recognition, encouraging individuals and
              organizations nationwide to join in advocating for peace and
              unity.
            </p>

            <p>
              Earlier, on 13th September 2024, we launched the official theme
              song for <q>Today Is Us</q> in collaboration with{" "}
              <strong className="text-amber-800">
                Académie De Musique Classique
              </strong>{" "}
              and a vibrant community of advocates.{" "}
              <strong className="text-amber-800">
                This unique musical piece features contributions in native
                languages from artists across Ghana, showcasing the country’s
                rich cultural diversity, celebrating Ghana’s unity in diversity
              </strong>
              , and delivering an inspiring message of peace that resonates
              across our ethnic landscape.
            </p>
            <p>
              As part of the campaign’s outreach, we introduced the{" "}
              <q>Today Is Us</q> peace campaign apparel a range of stunning
              T-shirts and accessories designed to make a bold statement.
              Wearing the campaign’s merchandise is not just a fashion choice;
              it’s an act of advocacy. Each purchase helps support the
              campaign’s outreach efforts, spreading the message of peace to
              more communities and encouraging conversations about unity and
              collaboration. Explore our collection in our{" "}
              <Link
                to={"https://paystack.shop/bloodline-apparels"}
                target="_blank"
                className="text-amber-800 font-bold"
              >
                merch shop
              </Link>{" "}
              today to rock on peace proudly!
            </p>

            <p>
              <q>Today Is Us</q> represents more than just a campaign; it’s a
              movement that calls for collective action. It invites every
              Ghanaian to play a part in safeguarding the peace our forefathers
              fought for and to create a legacy of unity for generations to
              come. By uniting diverse communities under a shared purpose, the
              project continues to inspire meaningful change and promote harmony
              across the nation. Join the conversation, share your support, and
              help spread the message of unity and peace across Ghana. Together,
              we can make a difference —
              <strong className="text-amber-800">@Cross-Love Movement</strong>{" "}
              on all social media handles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayIsUsStory;
