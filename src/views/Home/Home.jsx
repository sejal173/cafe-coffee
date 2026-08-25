import "./Home.css";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import Navbar from "../../components/Navbar/Navbar";
import About from "../About/About";
import { PRODUCTS } from "../../config";
import ProductCard from "../../components/ProductCard/ProductCard";




function Home(){
    return(
        <>
            
            <Navbar active="home"/>
            <BodyContainer>
               <h1>Welcome to Coffee House</h1>
               <p>Enjoy the perfect cup of coffee made with fresh beans and lots of love. Whether you love a strong espresso, creamy cappuccino, or a refreshing cold coffee, we have something for everyone.</p>

               

               <h2>Our Specialties</h2>
               <div className="main-product-card-container">
              {
                PRODUCTS.map((product) => {
                   return  <ProductCard product={product}
            key={product.id}
            />
                })
             }
           </div>
          
            </BodyContainer>
             <Footer/>
        </>
    )
}

export default Home;