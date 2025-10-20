import { Routes, Route } from 'react-router-dom';
import SubmitPage from './SubmitPage';
import Login from './login';
import { useState } from 'react';
import Signup from './Signup';
import HomePage from './HomePage';
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
        <Route path="/" element={<Login data={data} setData={setData} />} />
        <Route path="/SubmitPage" element={<SubmitPage data={data} />} />
        <Route path="/Signup" element={<Signup data={data} setData={setData} />} />
        <Route path='/HomePage' element={<HomePage/>}/>
      </Routes>

    </div>
  );
}


