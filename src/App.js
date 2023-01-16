import NavbarComponent from "./components/shared/NavbarComponent";
import Search from "./components/shared/search/Search";
import MapBtn from "./components/shared/MapBtn";


import "./App.css";
import GymList from "./components/Gym/GymList";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <header className="row justify-content-between mb-5">
          <div className="col-lg-5 col-12 mb-2 mb-lg-0">
            <Search />
          </div>
          <div className="col-lg-3 ms-auto ">
            <MapBtn />
          </div>
        </header>
        <GymList/>
       
      </div>
      <Footer />
    </>
  );
}

export default App;
