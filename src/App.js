import './App.css';
import {Route, Routes} from "react-router-dom";
import Homepage from "./components/pages/Homepage/Homepage";
import Header from "./components/Header/Header";
import LoginForm from "./components/forms/LoginForn/LoginForm";
import RegisterForm from "./components/forms/RegisterForm/RegisterForm";

function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
