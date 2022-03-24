import HeaderTab from "./components/HeaderTab";
import HeaderUtil from "./components/HeaderUtil";
import MainContent from "./components/MainContent";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KartUser from "./components/User/KartUser";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <HeaderUtil />
      <HeaderTab />
      <Routes>
        <Route exact path="/" component={MainContent} />
        <Route exact path="/kart/user" element={<KartUser />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
