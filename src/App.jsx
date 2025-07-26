
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from "./components/Home";
// import About from './components/About';
// import Contacts from './components/Contacts';
import Sidebar from "./components/Sidebar";
import ThemeContextProvider from './context/ThemeContextProvider';
import Notifications from './components/Notifications';

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <Sidebar />
        <Notifications />
        <Routes>
          <Route path="/" element={<Home />} />
          {/**  
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          */}
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </ThemeContextProvider>
    </Router>
  )
}

export default App
