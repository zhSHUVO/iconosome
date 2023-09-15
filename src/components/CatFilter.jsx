/* eslint-disable react/prop-types */
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
import {
    faBolt,
    faGrip,
    faIcons,
    faList,
    faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CatFilter = ({ selectedCategories, setSelectedCategories }) => {
    // Toggle the selection state of a category
    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter((c) => c !== category)
            );
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    // Function to determine if a category is selected
    const isCategorySelected = (category) => {
        return selectedCategories.includes(category);
    };

    return (
        <div className="flex items-center justify-between px-[204px]">
            {/* left */}
            <div className="flex justify-center items-center">
                <button
                    className={` ${
                        isCategorySelected("classic")
                            ? "text-blue-600"
                            : "text-black"
                    } py-6 px-10 flex flex-col items-center hover:text-blue-500`}
                    onClick={() => toggleCategory("classic")}
                >
                    <FontAwesomeIcon icon={faIcons} className="text-3xl" />
                    <p className="mt-3 text-sm">Classic</p>
                </button>
                <button
                    className={` ${
                        isCategorySelected("sharp")
                            ? "text-blue-600"
                            : "text-black"
                    } py-6 px-10 flex flex-col items-center hover:text-blue-500`}
                    onClick={() => toggleCategory("sharp")}
                >
                    <FontAwesomeIcon icon={faIcons} className="text-3xl" />
                    <p className="mt-3 text-sm">Sharp</p>
                </button>
                <button
                    className={` ${
                        isCategorySelected("brand")
                            ? "text-blue-600"
                            : "text-black"
                    } py-6 px-10 flex flex-col items-center hover:text-blue-500`}
                    onClick={() => toggleCategory("brand")}
                >
                    <FontAwesomeIcon
                        icon={faFontAwesome}
                        className="text-3xl"
                    />
                    <p className="mt-3 text-sm">Brand</p>
                </button>
                <button
                    className={` ${
                        isCategorySelected("free")
                            ? "text-blue-600"
                            : "text-black"
                    } py-6 px-10 flex flex-col items-center hover:text-blue-500`}
                    onClick={() => toggleCategory("free")}
                >
                    <FontAwesomeIcon icon={faBolt} className="text-3xl" />
                    <p className="mt-3 text-sm">Free</p>
                </button>
            </div>
            {/* right */}
            <div className="flex justify-center items-center">
                <div className="pr-5">
                    <FontAwesomeIcon
                        icon={faTableCellsLarge}
                        className="text-2xl px-4 py-2"
                    />
                    <FontAwesomeIcon
                        icon={faGrip}
                        className="text-2xl px-4 py-2"
                    />
                    <FontAwesomeIcon
                        icon={faList}
                        className="text-2xl px-4 py-2"
                    />
                </div>

                <select className="select select-bordered border-primary rounded-xl mr-5">
                    <option>Featured</option>
                    <option>Alphabetical</option>
                </select>

                <select className="select select-bordered border-primary rounded-xl">
                    <option>6.4.2</option>
                    <option>5.15.4</option>
                    <option>All Versions</option>
                </select>
            </div>
        </div>
    );
};

export default CatFilter;
