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

const CatFilter = ({
    selectedCategories,
    setSelectedCategories,
    setSortingCriteria,
}) => {
    const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(
                selectedCategories.filter((c) => c !== category)
            );
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const isCategorySelected = (category) => {
        return selectedCategories.includes(category);
    };

    return (
        <div className="flex xs:flex-col-reverse lg:flex-row lg:items-center lg:justify-between lg:px-[204px] xs:pb-8 lg:pb-0">
            {/* left */}
            <div className="flex lg:justify-center xs:justify-around items-center xs:pt-10">
                <button
                    className={` ${
                        isCategorySelected("classic")
                            ? "text-blue-600"
                            : "text-black"
                    } lg:py-6 lg:px-10 flex flex-col items-center hover:text-blue-500`}
                    onClick={() => toggleCategory("classic")}
                >
                    <FontAwesomeIcon
                        icon={faIcons}
                        className="lg:text-3xl xs:text-2xl"
                    />
                    <p className="mt-3 text-sm">Classic</p>
                </button>
                <button
                    className={` ${
                        isCategorySelected("sharp")
                            ? "text-blue-600"
                            : "text-black"
                    } lg:py-6 lg:px-10 flex flex-col items-center hover:text-blue-500`}
                    onClick={() => toggleCategory("sharp")}
                >
                    <FontAwesomeIcon
                        icon={faIcons}
                        className="lg:text-3xl xs:text-2xl"
                    />
                    <p className="mt-3 text-sm">Sharp</p>
                </button>
                <button
                    className={` ${
                        isCategorySelected("brand")
                            ? "text-blue-600"
                            : "text-black"
                    } lg:py-6 lg:px-10 flex flex-col items-center hover:text-blue-500`}
                    onClick={() => toggleCategory("brand")}
                >
                    <FontAwesomeIcon
                        icon={faFontAwesome}
                        className="lg:text-3xl xs:text-2xl"
                    />
                    <p className="mt-3 text-sm">Brand</p>
                </button>
                <button
                    className={` ${
                        isCategorySelected("free")
                            ? "text-blue-600"
                            : "text-black"
                    } lg:py-6 lg:px-10 flex flex-col items-center hover:text-blue-500`}
                    onClick={() => toggleCategory("free")}
                >
                    <FontAwesomeIcon
                        icon={faBolt}
                        className="lg:text-3xl xs:text-2xl"
                    />
                    <p className="mt-3 text-sm">Free</p>
                </button>
            </div>
            {/* right */}
            <div className="flex lg:justify-center xs:justify-around items-center">
                <div className="lg:pr-5 w-full flex justify-around">
                    <div>
                        <button>
                            <FontAwesomeIcon
                                icon={faTableCellsLarge}
                                className="text-2xl lg:px-4 lg:py-2"
                            />
                        </button>
                    </div>
                    <div>
                        <button>
                            <FontAwesomeIcon
                                icon={faGrip}
                                className="text-2xl lg:px-4 lg:py-2"
                            />
                        </button>
                    </div>
                    <div>
                        {" "}
                        <button>
                            <FontAwesomeIcon
                                icon={faList}
                                className="text-2xl lg:px-4 lg:py-2"
                            />
                        </button>
                    </div>
                </div>

                <div className="w-full flex justify-around xs:mx-3 lg:mx-0">
                    <select
                        className="select select-bordered xs:px-2 lg:px-8 border-primary rounded-xl lg:mr-5 xs:mr-2"
                        onChange={(e) => setSortingCriteria(e.target.value)}
                    >
                        <option>Featured</option>
                        <option>Alphabetical</option>
                    </select>

                    <select className="select select-bordered xs:px-2 lg:px-8 border-primary rounded-xl">
                        <option>6.4.2</option>
                        <option>5.15.4</option>
                        <option>All Versions</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CatFilter;
