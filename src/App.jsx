import { Routes, Route } from 'react-router-dom';
import SubmitPage from './SubmitPage';
import LogIn from './login';
import { useState } from 'react';
import Signup from './Signup';
export default function App() {
      const [data, setData] = useState({
          firstName: "",
          lastName: "",
          email: "",
          password:""
      })
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn data={data} setData={setData} />} />
        <Route path="/SubmitPage" element={<SubmitPage />} />
        <Route path="/Signup" element={<Signup data={data} setData={setData} />} />
      </Routes>

    </div>
  );
}


