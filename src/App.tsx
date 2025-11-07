import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Hero from "./components/Hero";
import ProfitCounter from "./components/ProfitCounter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="profit" element={<ProfitCounter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
