import BootstrapSection from "./Components/BootstrapSection";
import MuiSection from "./Components/MuiSection";

function App() {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        {/* Bootstrap Side */}
        <div className="col-md-6 border-end p-0">
          <BootstrapSection />
        </div>

        {/* Material UI Side */}
        <div className="col-md-6 p-0">
          <MuiSection />
        </div>
      </div>
    </div>
  );
}

export default App;
