import "./App.css";
import Bottom from "./components/Bottom";
import CatFilter from "./components/CatFilter";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div>
            <Nav />
            <SearchBar />
            <CatFilter />
            <Bottom />
            <Footer />
        </div>
    );
}

export default App;
