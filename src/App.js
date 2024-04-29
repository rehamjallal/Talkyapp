import './App.css';
import { Routes, Route, } from "react-router-dom";
import Login from './components/Login';
import Tosign from './components/Tosign';
import Start from './components/Start';
import Call from './components/Call';
import ChatDashboard from './components/ChatDashboard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='sign up' element={<Tosign />} />
        <Route path='start' element={<Start />} />
        <Route path='/call' element={<Call />} />
        <Route path='/ChatDashboard' element={<ChatDashboard />} />

      </Routes>
    </div>
  );
}

export default App;
