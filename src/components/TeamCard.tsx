import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

interface ITeam {
  imageUrl: string;
  name: string;
  role: string;
  linkedin: string;
}

const TeamCard = ({ imageUrl, name, role, linkedin }: ITeam) => {
  return (
    <Link to={linkedin}>
      <div className="flex flex-col items-center justify-start w-72 h-96 bg-white rounded-lg shadow-lg hover:shadow-xl">
        {/* <div
          className={`bg-[url(${imageUrl})] bg-center bg-no-repeat bg-cover w-full h-70`}
        ></div> */}
        <div className="w-full h-70 overflow-hidden">
          <img src={imageUrl} alt={name} className="object-fill" />
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <p className="text-amber-900 text-lg font-semibold">{name}</p>
          <p className="text-xs text-gray-500 font-bold capitalize">
            {role}
          </p>
          <CiLinkedin className="text-2xl" />
        </div>
        {/* <img
              src="https://cross-lovemovement.my.canva.site/_assets/media/9f2f6405837cd19e5c5e588293ca704c.jpg"
              alt="person_image"
              className="object-cover w-50 h-70"
            /> */}
      </div>
    </Link>
  );
};

export default TeamCard;
