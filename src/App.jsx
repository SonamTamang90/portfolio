import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./layout/BaseLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
