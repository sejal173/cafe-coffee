import "./Home.css";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import Navbar from "../../components/Navbar/Navbar";
import About from "../About/About";
import  PRODUCTS  from "../../config";

import PageTitle from "../../components/PageTitle/PageTitle";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home() {
  return (
    <>
      <Navbar active="home" />
      <BodyContainer>
        <PageTitle title="Welcome to Coffee House" />
        <PageTitle subtitle="Welcome to our coffee shop, where great coffee and good moments come together. We are passionate about serving freshly brewed coffee, delicious snacks, and sweet treats in a warm and comfortable environment." />

            <h1 className="selection-menu-heading">😋 Our Delicious Selection</h1>
          <div className="product-main-container">
            {
            PRODUCTS.map((product) => {
              return(
                <ProductCard product={product} key={product.id}/>
              )
            })
          }
          </div>

       
       
      </BodyContainer>
      <Footer />
    </>
  );
}

export default Home;
