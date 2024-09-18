import AppContent from "./AppContent";
import "./App.css";
import AppHeader from "./AppHeader";
import AppSideMenu from "./AppSideMenu";

function App() {
  return (
    <>
      <AppHeader />
      <AppSideMenu />
      <div className="ml-[270px] mt-20">
        <div className="container mx-auto px-12">
          <AppContent />
        </div>
      </div>
    </>
  );
}

export default App;
