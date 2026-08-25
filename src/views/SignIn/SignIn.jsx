import "./SignIn.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

function SignIn(){
    return(

        <>
        <Navbar active="signin"/>
                <BodyContainer>
                  
                     <div className="signup-container">
          <h1>Sign Up</h1>

          <form>
            <input
              type="text"
              placeholder="Enter Name"
            />

            <input
              type="email"
              placeholder="Enter Email"
            />

            <input
              type="password"
              placeholder="Enter Password"
            />

            <input
              type="password"
              placeholder="Confirm Password"
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
                </BodyContainer>
                 <Footer/>
        </>
    )
}
export default SignIn;