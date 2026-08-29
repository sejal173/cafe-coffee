import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";

function About(){
    return(
       <div>
        <Navbar active="about"/>
            <BodyContainer>
                <PageTitle title="This is about page"/>
                <PageTitle subtitle="We believe a coffee shop is more than just a place to drink coffee. It is a place to relax, meet friends, work, and enjoy your favorite flavors."/>
                

                 <div className="main-containt-container">
          Our goal is to provide high-quality coffee made from carefully
          selected beans. Whether you love a classic cappuccino, a creamy latte,
          or a strong espresso, we have something for every coffee lover. We
          believe a coffee shop is more than just a place to drink coffee. It is
          a place to relax, meet friends, work, and enjoy your favorite flavors.
          Come visit us and enjoy a fresh cup of happiness! ☕
        </div>
                
            </BodyContainer>
            <Footer/>
       </div>
           

       
    )
}

export default About;