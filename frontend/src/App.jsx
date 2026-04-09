import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";
import Homepages from "./pages/HomePages";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Toaster richColors/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepages></Homepages>} />

          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
