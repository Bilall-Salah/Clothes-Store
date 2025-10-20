import { useNavigate } from "react-router-dom";
import './Login.css';
import { Link } from "react-router-dom";
export default function LogIn({ data, setData }) {
    const { firstName, lastName, password, email } = data;
    const handleChange = (e) => {
        setData({ ...data, [e.target.name] : e.target.value })
    }
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        if (password.length < 8 ) {
            alert("The password length is to short")
            e.preventDefault();
           return;
       } 
       e.preventDefault();
        navigate("/SubmitPage");
        console.log(data)
    };
    return (
        <div className="LoginContainer">
            <h1>Login here</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder=" Enter your First name"
                    value={firstName} 
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder=" Enter your Last name"
                    value={lastName }
                    onChange={handleChange}
                />
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
                    value={password}
                    onChange={handleChange}
                />
                <p>If you didn't 've an account Click here to <Link style={{
                    color: 'blue',
                    textDecoration:'none'
                }} to="/Signup">Sign Up</Link></p>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
