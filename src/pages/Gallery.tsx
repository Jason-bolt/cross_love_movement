import GalleryCard from "../components/GalleryCard";

const Gallery = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-amber-50 pt-4 pb-12 md:items-start"
      id="our_team"
    >
      <div className="flex flex-col items-center justify-center space-y-4 p-4 w-full max-w-6xl mx-auto md:p-8 md:items-start">
        <h1 className="text-amber-800 text-4xl py-2 font-bold">Gallery</h1>
        <div className="flex flex-row flex-wrap items-center justify-center w-full mx-auto gap-7">
          {/* card */}
          <GalleryCard
            imageUrl={
              "https://cross-lovemovement.my.canva.site/_assets/media/ee905fa66c0a6dc830e6320b3c968fbb.png"
            }
            title={`‘Today Is Us’ Peace Campaign`}
            link={`https://drive.google.com/drive/folders/17ZNGrZFjvoMLD-oziV7G2Dn2A2i8-Uc9`}
          />
          <GalleryCard
            imageUrl={
              "https://cross-lovemovement.my.canva.site/_assets/media/1fd7d3302ff1a1584fa60d6173d7568d.jpg"
            }
            title={`Cross Sessions`}
            link={`https://drive.google.com/drive/folders/1iZfH3ZvYMInka7hT10R7HccLHhMx91o-`}
          />
          <GalleryCard
            imageUrl={
              "https://cross-lovemovement.my.canva.site/_assets/media/d13c442882b5c478ee854e6770575b50.jpg"
            }
            title={`Mission Project`}
            link={`https://drive.google.com/drive/folders/1Xw_ozHpfQ3v1bsuz005dROkn05UfzR28`}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
