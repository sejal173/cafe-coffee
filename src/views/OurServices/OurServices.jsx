import "./OurServices.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
function OurServices(){
    return(
        <>
        <Navbar active="ourservices"/>
            <BodyContainer>
               <PageTitle subtitle="This is OurService "/>

               
            </BodyContainer>
             <Footer/>
        </>
    );
}
export default OurServices;