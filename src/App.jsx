// import logo
import Logo from "./assets/Logo.png";

// import components
import Header from "./components/Header/index";
import Main from "./components/Main/index";

// import useContext
import { InsightsContextProvider } from "./context/InsightsContext";

function App() {
  return (
    <>
      <InsightsContextProvider>
        <Header logo={Logo} textAlt={"Logo insights"} />
        <Main />
      </InsightsContextProvider>
    </>
  );
}

export default App;
