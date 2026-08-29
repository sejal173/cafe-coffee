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
               <PageTitle title="“What We Offer” "/>
               <PageTitle subtitle="From freshly brewed coffee to delicious food, we’re here to make every visit special."/>

               
            </BodyContainer>
             <Footer/>
        </>
    );
}
export default OurServices;