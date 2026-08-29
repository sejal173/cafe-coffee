import "./OurServices.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import { HandPlatter ,PaperBag ,Motorbike,Box,Coffee} from "lucide-react";

const OURSERVICES = [
  {
    id: 1,
    title: "Dining",
    icon: <HandPlatter  height={"70px"} width={"70px"}/>,
    description:
      "Enjoy delicious food and freshly brewed coffee in a cozy and comfortable atmosphere",
  },
  {
    id: 2,
    title: "Orders",
    icon: <PaperBag height={"70px"} width={"70px"}/> ,
    description:
      "Enjoy tasty food and fresh coffee in a cozy and comfortable place.",
  },
  {
    id: 3,
    title: "Home Delivery",
    icon: <Motorbike height={"70px"} width={"70px"}/> ,
    description:
      "Enjoy your favorite food and coffee delivered fresh to your doorstep.",
  },
  {
    id: 4,
    title: "Coffee & Beverages",
    icon: <Coffee  height={"70px"} width={"70px"}/> ,
    description:
      "Enjoy freshly brewed coffee and refreshing drinks.",
  },
  {
    id: 5,
    title: "Online Ordering",
    icon: <Box height={"70px"} width={"70px"}/> ,
    description:
      "Order easily online and enjoy your favorites from home.",
  },
];

function OurServices() {
  return (
    <>
      <Navbar active="ourservices" />
      <BodyContainer>
        <PageTitle title="“What We Offer” " />
        <PageTitle subtitle="From freshly brewed coffee to delicious food, we’re here to make every visit special." />

        <div className="main-service-container">
        {OURSERVICES.map((serviceDetails, index) => {
          return (
            <div key={index} className="service-card">
              {serviceDetails.icon}
              <h2 className="service-title">{serviceDetails.title}</h2>
              <p className="service-desc">{serviceDetails.description}</p>
            </div>
          );
        })}
        </div>
      </BodyContainer>
      <Footer />
    </>
  );
}
export default OurServices;
