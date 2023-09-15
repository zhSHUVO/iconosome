import {
    faCircle,
    faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNav = () => {
    return (
        <div className="px-4">
            <h3>Style</h3>
            <ul>
                <li className="px-[10px] py-[7px]">
                    <label className="flex justify-between">
                        <div>
                            <FontAwesomeIcon icon={faCircle} className="mr-3" />
                            <span>Solid</span>
                        </div>
                        <span>458</span>
                    </label>
                </li>
                <li className="px-[10px] py-[7px]">
                    <label className="flex justify-between">
                        <div>
                            <FontAwesomeIcon
                                icon={faCircleHalfStroke}
                                className="mr-3"
                            />
                            <span>Regular</span>
                        </div>
                        <span>458</span>
                    </label>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
