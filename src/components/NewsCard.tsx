interface INews {
  imageUrl: string;
  title: string;
  shortBody: string;
  link: string;
}

const NewsCard = ({ imageUrl, title, shortBody, link }: INews) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-start w-80 h-[500px] bg-amber-50 rounded-lg shadow-lg hover:shadow-xl">
        {/* <div
          className={`bg-[url(${imageUrl})] bg-center bg-no-repeat bg-cover w-full h-70`}
        ></div> */}
        <div className="w-full h-96 overflow-hidden">
          <img src={imageUrl} alt={title} className="object-fill" />
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <p className="text-amber-900 text-xl font-bold">{title}</p>
          <p className="text-center py-2 font-semibold text-gray-800">
            {shortBody}
          </p>
          <a
            href={`#${link}`}
            className="text-amber-800 font-semibold hover:underline"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
