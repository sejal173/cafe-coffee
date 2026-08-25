import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import { Import } from "lucide-react";

function Contact(){
    return(
        <>
        <Navbar active="contact"/>
            <BodyContainer>
                <h1>This is contact page</h1>
            </BodyContainer>
             <Footer/>
        </>
    )
}
export default Contact;