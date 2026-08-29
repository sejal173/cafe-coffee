import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import { Import } from "lucide-react";
import PageTitle from "../../components/PageTitle/PageTitle";

function Contact(){
    return(
        <>
        <Navbar active="contact"/>
            <BodyContainer>
                <PageTitle title="This is contact page"/>
                
            </BodyContainer>
             <Footer/>
        </>
    )
}
export default Contact;