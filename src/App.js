import NavbarSofKa from "./components/Navbar";
import ResponsiveDrawer from "./components/Sidebar"

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <NavbarSofKa/>
        </div>
        <div className="row">
          {/* <ResponsiveDrawer/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
