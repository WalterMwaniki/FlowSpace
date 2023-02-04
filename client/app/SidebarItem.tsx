import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarItem = ({
  title,
  icon,
}: {
  title: string;
  icon: IconDefinition;
}) => {
  return (
    <div className="sidebarItem">
      <FontAwesomeIcon icon={icon} />
      <h2>{title}</h2>
    </div>
  );
};

export default SidebarItem;
