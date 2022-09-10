import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import MainMenu from "./MainMenu";

function Header() {
  return (
    <header className="font-Roboto ">
      <div className="bg-black  hidden xl:block">
        <div className="flex items-center justify-between m-auto p-3 ">
          <div>
            <FontAwesomeIcon icon={faClock} className="text-orange px-1" />
            <a className="text-orange">
              <span> OPENING HOURS : </span>
            </a>
            <span className="text-white">08:00 AM - 09:00 PM </span>
          </div>
          <div className="text-white flex  gap-8">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="text-orange px-1"
            />
            <a>
              <span className="text-orange">LOCATION : </span>
            </a>
            <span className="text-white"> 55 MAIN STREET, NEW YORK </span>
          </div>
        </div>
      </div>
      <MainMenu />
    </header>
  );
}
export default Header;
