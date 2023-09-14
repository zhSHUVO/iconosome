import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
    return (
        <div className="flex justify-center items-center">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="relative bottom-0 left-0 "
            />
            <input
                type="text"
                placeholder=" Search 26,233 icons..."
                className="input input-bordered input-primary w-full max-w-xs rounded-full"
            />
        </div>
    );
};

export default SearchBar;
