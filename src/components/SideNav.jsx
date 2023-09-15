/* eslint-disable react/prop-types */
import {
    faCircle,
    faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideNav = ({ selectedStyles, setSelectedStyles }) => {
    // Toggle the selection state of a style
    const toggleStyle = (style) => {
        if (selectedStyles.includes(style)) {
            setSelectedStyles(selectedStyles.filter((s) => s !== style));
        } else {
            setSelectedStyles([...selectedStyles, style]);
        }
    };

    // Function to determine if a style is selected
    const isStyleSelected = (style) => {
        return selectedStyles.includes(style);
    };

    return (
        <div className="px-4">
            <h3>Style</h3>
            <ul>
                <li
                    className={`${
                        isStyleSelected("solid")
                            ? "bg-blue-600 text-white"
                            : "text-black"
                    } px-[10px] py-[7px] rounded-xl mb-1`}
                >
                    <label
                        className="flex justify-between cursor-pointer"
                        onClick={() => toggleStyle("solid")}
                    >
                        <div>
                            <FontAwesomeIcon icon={faCircle} className="mr-3" />
                            <span>Solid</span>
                        </div>
                        <span>458</span>
                    </label>
                </li>
                <li
                    className={`${
                        isStyleSelected("regular")
                            ? "bg-blue-600 text-white"
                            : "text-black"
                    } px-[10px] py-[7px] rounded-xl mb-1`}
                >
                    <label
                        className="flex justify-between cursor-pointer"
                        onClick={() => toggleStyle("regular")}
                    >
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
