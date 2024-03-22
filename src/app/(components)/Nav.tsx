import Link from "next/link";
import { faTicket, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex flex-row justify-between w-14">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" size="lg" />
        </Link>

        <Link href="/ticket/new">
          <FontAwesomeIcon icon={faTicket} className="icon" size="lg" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">1234@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
