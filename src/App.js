import SignUpPage from "./pages/SignUpPage";
import LanguageSelector from "./components/LanguageSelector";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container pt-3">
        <Route path="/signup" component={SignUpPage} />
        <LanguageSelector />
      </div>
    </>
  );
}

export default App;
