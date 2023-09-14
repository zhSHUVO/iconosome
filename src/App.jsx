import "./App.css";
import CatFilter from "./components/CatFilter";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div>
            <Nav />
            <SearchBar />
            <CatFilter />
        </div>
    );
}

export default App;
