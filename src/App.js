import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/home/Home";
import NotFound from "./components/NotFound";
import MainLayout from "./components/MainLayout";
import Task from "./components/home/task/Task";

import { CardProvider } from "./components/home/CardContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CardProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {" "}
              <Route index element={<Home />} />
              <Route path="task/:text" element={<Task />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CardProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
