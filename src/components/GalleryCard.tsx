import React from "react";
import { Link } from "react-router-dom";

interface IGalleryCard {
  title: string;
  link: string;
  imageUrl: string;
}

const GalleryCard = ({ title, link, imageUrl }: IGalleryCard) => {
  return (
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col items-center justify-start w-72 h-96 rounded-lg shadow-lg hover:shadow-xl">
        <h1 className="text-xl text-amber-900 font-semibold py-2">{title}</h1>
        <div className="w-full h-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </Link>
  );
};

export default GalleryCard;
