import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";


function Login(){
    return(
        <>
        <Navbar active="login"/>
            <BodyContainer>
               
                 <div className="login-container">
          <h1>Login</h1>

          <form>
            <input
              type="email"
              placeholder="Enter Email"
            />

            <input
              type="password"
              placeholder="Enter Password"
            />

            <button type="submit">Login</button>
          </form>
        </div>
            </BodyContainer>
             <Footer/>
        </>
    );
}

export default Login;