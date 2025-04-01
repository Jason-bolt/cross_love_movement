import TeamCard from "../components/TeamCard";

const Team = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-amber-50 pt-4 pb-12 md:items-start"
      id="our_team"
    >
      <div className="flex flex-col items-center justify-center space-y-4 p-4 w-full max-w-6xl mx-auto md:p-8 md:items-start">
        <h1 className="text-amber-800 text-4xl py-2 font-bold">Our Team</h1>
        <div className="flex flex-row flex-wrap items-center justify-center mx-auto gap-7">
          {/* card */}
          <TeamCard
            name="Isaac Nkrumah-Dadzie"
            role="founder/project coordinator"
            linkedin=""
            imageUrl="https://cross-lovemovement.my.canva.site/_assets/media/9f2f6405837cd19e5c5e588293ca704c.jpg"
          />
          <TeamCard
            name="Isaac Nkrumah-Dadzie"
            role="founder/project coordinator"
            linkedin=""
            imageUrl="https://cross-lovemovement.my.canva.site/_assets/media/9f2f6405837cd19e5c5e588293ca704c.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
