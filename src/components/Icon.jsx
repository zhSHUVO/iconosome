/* eslint-disable react/prop-types */
const Icon = ({ filteredIcons }) => {
    return (
        <div className="px-4">
            <div className="mb-6 flex">
                <h1 className="font-extrabold">{filteredIcons.length} Icons</h1>
            </div>
            <div className="grid grid-cols-9 gap-4 mb-12">
                {filteredIcons.map((icon) => (
                    <div
                        key={icon.id}
                        className="flex flex-col justify-center items-center px-3 pt-6 pb-4 bg-white rounded-lg  cursor-pointer hover:bg-yellow-300"
                    >
                        <img
                            src={icon.url}
                            alt={icon.name}
                            className="w-[42px] h-[32px]"
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
