import { useState } from "react";
import "./App.css";
import CatFilter from "./components/CatFilter";
import Footer from "./components/Footer";
import Icon from "./components/Icon";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import SideNav from "./components/SideNav";
import icon from "./data/icons.json";

const iconData = icon.icons;

function App() {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedStyles, setSelectedStyles] = useState([]);

    const filteredIcons = iconData.filter((icon) => {
        return (
            (selectedCategories.length === 0 ||
                selectedCategories.includes(icon.category)) &&
            (selectedStyles.length === 0 || selectedStyles.includes(icon.style))
        );
    });

    return (
        <div className="font-link text-sm">
            <Nav />
            <SearchBar />
            <CatFilter
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
            />
            <div className="bg-gray-100 pt-10 pb-20 px-52 grid grid-cols-12">
                <div className="col-span-2">
                    <SideNav
                        selectedStyles={selectedStyles}
                        setSelectedStyles={setSelectedStyles}
                    />
                </div>
                <div className="col-span-10">
                    <Icon
                        filteredIcons={filteredIcons}
                        selectedStyles={selectedStyles}
                        selectedCategories={selectedCategories}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
