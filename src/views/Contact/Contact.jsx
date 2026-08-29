import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import { Import } from "lucide-react";
import PageTitle from "../../components/PageTitle/PageTitle";

function Contact() {
  return (
    <>
      <Navbar active="contact" />
      <BodyContainer>
        <PageTitle title=" We'd Love to Hear From You!" />
        <PageTitle subtitle="Have a question or want to say hello? We’d love to hear from you. Get in touch with us and we’ll be happy to help! ☕❤️" />

        <div className="contact-main-container">
          <div className="Contact-Information-Cards">
            <h3 className="contact-info">📍 Visit Us</h3>
            <b>123 Coffee Street, Pune</b>

            <h3 className="contact-info">📞 Call Us</h3>
            <b>+91 98765 43210</b>

            <h3 className="contact-info">✉️ Email Us</h3>
            <b>hello@coffeeshop.com</b>

            <h3 className="contact-info">🕐 Opening Hours</h3>
            <b>Mon – Sun: 9:00 AM – 10:00 PM</b>
          </div>

          <div className="contact-form">
            <h2>Get In Touch</h2>

            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />

              <label>Email</label>
              <input type="email" placeholder="Enter your email" />

              <label>Subject</label>
              <input type="text" placeholder="Enter subject" />

              <label>Message</label>
              <textarea placeholder="Write your message here..."></textarea>

              <button type="submit">Send Message ☕</button>
            </form>
          </div>
        </div>
      </BodyContainer>
      <Footer />
    </>
  );
}
export default Contact;
