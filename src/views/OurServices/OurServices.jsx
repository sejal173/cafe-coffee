import "./OurServices.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

function OurServices(){
    return(
        <>
        <Navbar active="ourservices"/>
            <BodyContainer>
                <h1>This is OurService code</h1>
            </BodyContainer>
             <Footer/>
        </>
    );
}
export default OurServices;