
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import ThemeContextProvider from './context/ThemeContextProvider';
import Notifications from './components/Notifications';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <Navbar /> 
        <Sidebar />
        <Notifications />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </ThemeContextProvider>
    </Router>
  )
}

export default App
