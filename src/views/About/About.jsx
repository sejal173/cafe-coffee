import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import img from './../../assets/coffe-shop-img.jpg'


function About(){
    return(
       <div>
        <Navbar active="about"/>
            <BodyContainer>
                <PageTitle title="More Than Just Food, It’s an Experience!"/>
                <PageTitle subtitle="We believe great food brings people together. From fresh ingredients to delicious flavors, every dish is prepared with care to give you a memorable dining experience."/>
                

                <div className="main-container">

                    <div>
            <img src={img} alt="" />
                    </div>

                    <div className="story-content">
                        <h1>Our Story</h1>
                        <b>Our journey started with a simple love for great coffee, delicious food, and good conversations. We wanted to create a cozy place where people could relax, enjoy their favorite flavors, and spend quality time with friends and family.

From freshly brewed coffee to tasty meals, every item on our menu is prepared with fresh ingredients and lots of care. We believe that good food is not just about taste — it is about creating happy moments and memorable experiences.

Today, we continue to serve our customers with the same passion, quality, and warm hospitality that inspired us from the beginning. ☕❤️</b>
                    </div>

                </div>

                   
            </BodyContainer>
            <Footer/>
       </div>
           

       
    )
}

export default About;