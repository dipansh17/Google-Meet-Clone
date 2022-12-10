import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import RoomPage from "./Pages/Room";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Room/:RoomId" element={<RoomPage />} />
    </Routes>
  );
}

export default App;
