import Icon from "./Icon";
import SideNav from "./SideNav";

const Bottom = () => {
    return (
        <div className="bg-gray-100 pt-10 pb-20 px-52 grid grid-cols-12">
            <div className="col-span-2">
                <SideNav />
            </div>
            <div className="col-span-10">
                <Icon />
            </div>
        </div>
    );
};

export default Bottom;
