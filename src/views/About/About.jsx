import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

function About(){
    return(
       <div>
        <Navbar active="about"/>
            <BodyContainer>
                <h1>This is about page</h1>
                
            </BodyContainer>
            <Footer/>
       </div>
           

       
    )
}

export default About;