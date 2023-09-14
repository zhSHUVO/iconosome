import { faFlag } from "@fortawesome/free-regular-svg-icons";
import {
    faArrowRightToBracket,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
    return (
        <div className="mx-[320px]">
            <div className="navbar bg-base-100 px-9">
                <div className="navbar-start">
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
                            <li>
                                <a>Item 1</a>
                            </li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li>
                                        <a>Submenu 1</a>
                                    </li>
                                    <li>
                                        <a>Submenu 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a>Item 3</a>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl ">
                        <FontAwesomeIcon icon={faFlag} />
                    </a>
                    <ul className="menu menu-horizontal items-center ml-12">
                        <li>
                            <a>Start</a>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </li>
                        <li>
                            <a>Icons</a>
                        </li>
                        <li>
                            <a>Docs</a>
                        </li>
                        <li>
                            <a>Plans</a>
                        </li>
                        <li>
                            <a>Support</a>
                        </li>
                        <li>
                            <a>Podcast</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex"></div>
                <div className="navbar-end">
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                </div>
            </div>
        </div>
    );
};

export default Nav;
