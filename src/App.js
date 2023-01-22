import RegisterPage from "./pages/RegisterPage";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/" element={<LoginPage/>} />
        <Route path="/dashboard" element={<DashboardPage />}/>
        {/* <Route path="/" element={<h1>Home</h1>}/> */}
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
