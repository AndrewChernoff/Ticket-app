import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  priority: string;
};

export const PriorityDisplay = ({ priority }: Props) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > "1" ? "text-red-400" : "text-stale-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > "2" ? "text-red-400" : "text-stale-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > "3" ? "text-red-400" : "text-stale-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > "4" ? "text-red-400" : "text-stale-400"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > "5" ? "text-red-400" : "text-stale-400"}`}
      />
    </div>
  );
};
