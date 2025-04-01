import { CiLinkedin } from "react-icons/ci";
import { FaArrowUp, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-amber-900 pt-4 pb-12 relative md:items-start"
      id="contact_us"
    >
      <a
        href={"#home"}
        className="absolute bottom-5 right-5 p-3 rounded-full bg-amber-50 hover:shadow-lg hover:shadow-amber-600 hover:transition hover:duration-300 hover:ease-in-out hover:cursor-pointer"
      >
        <FaArrowUp className="text-amber-800 text-3xl" />
      </a>
      <div className="flex flex-col items-center justify-center max-w-6xl p-4 mx-auto md:p-8">
        <div className="flex flex-col gap-6 items-center justify-center md:flex-row">
          <div className="flex-col items-center justify-center gap-7 text-center text-amber-50 text-lg md:w-1/2 md:text-start">
            <h1 className="uppercase text-4xl font-bold">
              <q>Connect With Us</q>
            </h1>
            <p className="text-center my-10 md:text-start">
              64 Thirdes RD GT-197-1816 Tema- Community 12.
            </p>
            <div className="mt-5 flex flex-col items-center gap-4 md:items-start">
              <div className="flex flex-row items-center justify-center gap-3">
                <FaPhoneAlt />
                <p>(233) 53 050 2774</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-3">
                <IoIosMail className="text-2xl" />
                <p>clmnnative17@gmail.com</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-6">
                <Link to="https://www.linkedin.com/company/cross-love-movement/">
                  <CiLinkedin className="text-4xl" />
                </Link>
                <Link to="https://www.instagram.com/clm_native/">
                  <FaInstagram className="text-3xl" />
                </Link>
                <Link to="https://x.com/clm_native">
                  <FaXTwitter className="text-3xl" />
                </Link>
                <Link to="https://www.youtube.com/channel/UCbAS2leNz-vWamXQgxmPr0A">
                  <FiYoutube className="text-3xl" />
                </Link>
              </div>
            </div>
          </div>
          <img
            src="https://cross-lovemovement.my.canva.site/_assets/media/dd97a1e29a05a1bfa4ea7ff9d95c3115.jpg"
            alt="todayisus"
            className="object-cover w-full md:w-1/2"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
