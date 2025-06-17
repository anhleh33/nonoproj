import Header from "./component/Header";
import Main from "./component/Main";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Header />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    // <Router>
    //   <AnimatedRoutes />
    // </Router>
    <Main/>
  );
}

export default App;
