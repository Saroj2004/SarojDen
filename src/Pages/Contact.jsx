import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import './Contact.css';
import { MessageCircle, Mail, CoffeeIcon, Handshake, Telescope, SendHorizonal } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    toast.success("Message sent!");
    form.reset();
  };

  return (
    <div className="connect-sec">
      <Navbar />

      <div data-aos="fade-down" className="connect_head">
        <h1>Let's connect</h1>
        <p>
          Have a project idea? Want to chat about tech?<br />
          Interested in project collaborations? Or just say hi? I'd love to hear from you!
        </p>

        <div className="connect_leftside">

          {/* Left Section - Contact Links */}
          <div className="connect_gettouch_context">
            <h3 className="gettouch-title">
              <MessageCircle className="chat-icon" /> Get in Touch
            </h3>

            <p className="connect_para">
              I'm always excited to connect with fellow creators, developers,<br />
              brands, and curious minds. Choose your preferred way to reach out!
            </p>

            {/* Email */}
            <div className="connect_links">
              <div className="connect-email">
                <div className="connect-content">
                  <div className="connect-bg1">
                    <a href="mailto:medipakalabrahmasaroj29@gmail.com?subject=Lets%20Talk">
                      <Mail size={28} className="connect-icon" />
                    </a>
                  </div>

                  <div className="connect-text">
                    <h3>Email</h3>
                    <p>Drop me a line anytime</p>
                    <p style={{ color: "#df6f6f" }}>medipakalabrahmasaroj29@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coffee Chat */}
            <div className="connect_links">
              <div className="connect-email">
                <div className="connect-content">
                  <div className="connect-bg1">
                    <a href="mailto:medipakalabrahmasaroj29@gmail.com?subject=Coffee%20Chat">
                      <CoffeeIcon size={28} className="connect-icon" />
                    </a>
                  </div>

                  <div className="connect-text">
                    <h3>Coffee Chat</h3>
                    <p>Drop me a line anytime</p>
                    <p style={{ color: "#df6161" }}>Schedule a call</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Collaborations */}
            <div className="connect_links">
              <div className="connect-email">
                <div className="connect-content">
                  <div className="connect-bg1">
                    <a href="mailto:medipakalabrahmasaroj29@gmail.com?subject=Let's%20Collaborate">
                      <Handshake size={28} className="connect-icon" />
                    </a>
                  </div>

                  <div className="connect-text">
                    <h3>Tech Collaborations</h3>
                    <p>Excited to work together anytime</p>
                    <p style={{ color: "#EA7676" }}>Let's collaborate</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Section - Form */}
          <div data-aos="fade" className="connect_form">
            <h3><Telescope style={{ color: "#EA7676" }} size={24} /> Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" placeholder="Your name" />

              <label>Email</label>
              <input type="email" name="email" placeholder="your.email@gmail.com" />

              <label>Message</label>
              <textarea name="message" placeholder="Tell me about your project, question, collaboration idea, or just say hello!" />

              <button type="submit">
                Send Message <SendHorizonal style={{ color: "#fff" }} size={12} />
              </button>
            </form>

            <ToastContainer
              className="Toastify-box"
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              pauseOnHover
              draggable
              theme="colored"
              toastStyle={{ width: '100%', maxWidth: '350px' }} // responsive width
            />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
