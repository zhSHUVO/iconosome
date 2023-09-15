import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
    return (
        <div className="mx-[30%] py-6">
            <div className="flex justify-center items-center relative">
                <input
                    type="text"
                    placeholder="Search 26,233 icons..."
                    className="input input-bordered input-primary w-[855px] h-16 rounded-full px-14"
                />
                <div className="absolute left-5 xs:hidden lg:block">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
