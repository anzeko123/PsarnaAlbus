import Calendar from './pages/calendar';
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Calendar />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
