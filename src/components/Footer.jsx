import { faBolt, faFlag, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="bg-[#183153] text-white px-[370px] py-11">
            <div className="footer grid-cols-12 ">
                <aside className="col-span-6 mr-52">
                    <FontAwesomeIcon icon={faFlag} className="text-2xl" />
                    <div>
                        <h1 className="pb-4 pt-6">Go Make Something Awesome</h1>
                        <p className="pb-4">
                            Font Awesome is the internet&apos;s icon library and
                            toolkit used by millions of designers, developers,
                            and content creators.
                        </p>
                        <p className="pb-5">
                            Made with <FontAwesomeIcon icon={faHeart} /> and{" "}
                            <FontAwesomeIcon icon={faBolt} /> in Bentonville,
                            Boston, Chicago, Grand Rapids, Joplin, Kansas City,
                            Seattle, Tampa, and Vergennes.
                        </p>
                    </div>
                </aside>
                <nav className="col-span-2">
                    <header className="footer-title">Project</header>
                    <a className="link link-hover">Download</a>
                    <a className="link link-hover">Changelog</a>
                    <a className="link link-hover">Commission Icons</a>
                    <a className="link link-hover">All Versions</a>
                </nav>
                <nav className="col-span-2">
                    <header className="footer-title">Community</header>
                    <a className="link link-hover">GitHub</a>
                    <a className="link link-hover">Icon Requests</a>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Blog Awesome</a>
                </nav>
                <nav className="col-span-2">
                    <header className="footer-title">Help</header>
                    <a className="link link-hover">Support</a>
                    <a className="link link-hover">Troubleshooting</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Status</a>
                </nav>
            </div>
            <div className="flex justify-between">
                <div>
                    <a href="" className="mr-3">
                        License
                    </a>
                    <a href="" className="mr-3">
                        Terms of Service
                    </a>
                    <a href="" className="mr-3">
                        Privacy
                    </a>
                    <a href="" className="mr-3">
                        Policy
                    </a>
                    <a href="" className="mr-3">
                        Refunds
                    </a>
                </div>
                <div>
                    <p>© Fonticons, Inc.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
