import { faFlag } from "@fortawesome/free-regular-svg-icons";
import {
    faArrowRightToBracket,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
    return (
        <div className="lg:mx-[380px]">
            <div className="navbar bg-base-100 justify-between">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li className="mr-4">
                                <a>Start</a>
                            </li>
                            <li className="mr-4">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </li>
                            <li className="mr-4">
                                <a>Icons</a>
                            </li>
                            <li className="mr-4">
                                <a>Docs</a>
                            </li>
                            <li className="mr-4">
                                <a>Plans</a>
                            </li>
                            <li className="mr-4">
                                <a>Support</a>
                            </li>
                            <li className="mr-4">
                                <a>Podcast</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <FontAwesomeIcon icon={faFlag} />
                    </a>
                    <div className="xs:hidden lg:block">
                        <ul className="menu menu-horizontal items-center ml-12">
                            <li className="mr-4">
                                <a>Start</a>
                            </li>
                            <li className="mr-4">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </li>
                            <li className="mr-4">
                                <a>Icons</a>
                            </li>
                            <li className="mr-4">
                                <a>Docs</a>
                            </li>
                            <li className="mr-4">
                                <a>Plans</a>
                            </li>
                            <li className="mr-4">
                                <a>Support</a>
                            </li>
                            <li className="mr-4">
                                <a>Podcast</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                </div>
            </div>
        </div>
    );
};

export default Nav;
