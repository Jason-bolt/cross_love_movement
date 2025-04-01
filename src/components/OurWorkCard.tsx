interface IOurWorkCard {
  imageUrl: string;
  name: string;
  link: string;
}

const OurWorkCard = ({ imageUrl, name, link }: IOurWorkCard) => {
  return (
    <div className="flex flex-col items-center justify-start w-72 h-86 bg-amber-50 rounded-lg shadow-lg hover:shadow-xl">
      {/* <div className={`bg-[url(${imageUrl})] bg-center bg-no-repeat bg-cover w-full h-70`}></div> */}
      <div className="w-full h-70 overflow-hidden">
        <img src={imageUrl} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-amber-900 text-2xl font-bold">{name}</p>
        <a
          href={`#${link}`}
          className="text-sm text-gray-500 font-semibold hover:underline"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default OurWorkCard;
