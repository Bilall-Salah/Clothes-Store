import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Signup.css';
export default function Signup({ data, setData }) {
    const {email, password} = data;
    const navigate = useNavigate();
    const handleChange = (e) => {
        setData({...data , [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        if (password.length < 8) {
            alert("The password length is to short")
            e.preventDefault();
            return;
        }
       e.preventDefault();
        navigate("/SubmitPage");
        console.log(data)
    };
    return (
        <div className="SignupContainer">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" Enter your Email"
                    value={email }
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" Enter your Password"
                    value={password }
                    onChange={handleChange}
                />
                <p>If you didn't 've an account Click here to <Link style={{
                    color: 'blue',
                    textDecoration:'none'
                }} to="/">Log In</Link></p>
                <button type="submit">Submit</button>
            </form>
        </div>
)}