import { motion, useInView } from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const whenInView = useInView(ref, { margin: "-100px" });
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sgz2ofi', 'template_9a1tq0g', formRef.current, 'SOGcNJtqwr2oYO5mb')
      .then(() => {
          setSuccess(true)
      }, () => {
          setError(true)
      });
  };

  return (
    <div ref={ref} className="contact">
      <motion.div
        className="text-container"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.h1 variants={variants}>Lets Work Together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>dwivediomacc2@gmail.com</span>
        </motion.div>

        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>Bhopal, Madhya Pradesh.</span>
        </motion.div>

        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+91 72229*****</span>
        </motion.div>
      </motion.div>
      <div className="form-container">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853"
              strokeWidth="1.5"
              strokeLinecap="round"
              stroke="orange"
              initial={{ pathLength: 0 }}
              animate={whenInView && { pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.path
              d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
              stroke="orange"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={whenInView && { pathLength: 1 }}
              transition={{ duration: 2 }}
            />
            <motion.path
              d="M 14.5 6.5 M 20.9995 16.4767 V 19.1864 C 21.0037 20.2223 20.0723 21.0873 19.0265 20.9929 C 10.0001 21 3.0001 13.935 3.0071 4.9692 C 2.9129 3.9289 3.7736 3.0011 4.8082 3.0001 H 7.5233 C 7.9625 2.9958 8.3884 3.151 8.7214 3.4368 C 9.6682 4.2495 10.2772 7.0078 10.0429 8.1043 C 9.8599 8.9604 8.997 9.5593 8.4103 10.1448 C 9.6986 12.4062 11.5747 14.2785 13.8405 15.5644 C 14.4272 14.9788 15.0274 14.1176 15.8851 13.935 C 16.9855 13.7008 19.7615 14.3106 20.5709 15.264 C 20.858 15.6021 21.0105 16.0337 20.9995 16.4767 Z"
              stroke="orange"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={whenInView && { pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </motion.div>
        <motion.form
          onSubmit={sendEmail}
          ref={formRef}
          action="#"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea
            name="message"
            placeholder="Message..."
            id=""
            cols="30"
            rows="8"
          />
          <button>Submit</button>
          {error && <div className="error-message" >Error <span> ❌ </span></div>}
          {success && <div className="success-message" >Message Sent <span> ✅ </span></div>}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
