/* eslint-disable react/prop-types */
const Icon = ({ filteredIcons, sortingCriteria }) => {
    const iconsToDisplay = [...filteredIcons];

    const sortIcons = (icons, criteria) => {
        if (criteria === "Featured") {
            return icons.filter((icon) => icon.criteria === "featured");
        } else if (criteria === "Alphabetical") {
            return icons.slice().sort((a, b) => a.name.localeCompare(b.name));
        }
        return icons;
    };

    const sortedIcons = sortIcons(iconsToDisplay, sortingCriteria);

    return (
        <div className="px-4">
            <div className="mb-6 flex">
                <h1 className="font-black text-lg">
                    {sortedIcons.length} Icons
                </h1>
            </div>
            <div className="grid lg:grid-cols-9 xs:grid-cols-3 gap-4 mb-12">
                {sortedIcons.map((icon) => (
                    <div
                        key={icon.id}
                        className="flex flex-col justify-center items-center lg:px-3  lg:pt-6 xs:pt-4 lg:pb-4 xs:pb-2 bg-white rounded-lg  cursor-pointer hover:bg-yellow-300"
                    >
                        <img
                            src={icon.url}
                            alt={icon.name}
                            className="lg:w-[42px] lg:h-[32px] w-[30.6px] h-[24.5px]"
                        />
                        <p className="pt-5">{icon.name}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <button className="btn bg-blue-500 hover:bg-blue-500 text-white rounded-lg px-5 py-4 border-0">
                    1
                </button>
                <button className="btn hover:border-none rounded-lg px-5 py-4 border-0">
                    2
                </button>
            </div>
        </div>
    );
};

export default Icon;
