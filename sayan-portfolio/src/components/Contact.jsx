// import { useState } from "react";
// import {
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhone,
//   FaGithub,
//   FaLinkedin,
//   FaTwitter,
//   FaDribbble,
//   FaFacebook,
//   FaInstagram,
// } from "react-icons/fa";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [success, setSuccess] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setSuccess(true);
//         setFormData({ name: "", email: "", message: "" });

//         // hide success message after 3 seconds
//         setTimeout(() => setSuccess(false), 3000);
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-28 bg-[#0f0f0f]">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADING */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             Get In <span className="text-purple-500">Touch</span>
//           </h2>
//           <p className="text-gray-400">
//             Have a project in mind or want to collaborate? Let’s talk!
//           </p>
//         </div>

//         {/* CONTENT */}
//         <div className="grid md:grid-cols-2 gap-20">

//           {/* LEFT: FORM */}
//           <form className="space-y-6" onSubmit={handleSubmit}>

//             {/* SUCCESS MESSAGE */}
//             {success && (
//               <div className="p-3 rounded-lg bg-green-500/20 text-green-400 text-center">
//                 ✅ Message sent successfully!
//               </div>
//             )}

//             <div>
//               <label className="block text-sm mb-2 text-gray-300">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg
//                            bg-[#1a1a1a] border border-white/10
//                            focus:outline-none focus:border-purple-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-2 text-gray-300">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg
//                            bg-[#1a1a1a] border border-white/10
//                            focus:outline-none focus:border-purple-500"
//               />
//             </div>

//             <div>
//               <label className="block text-sm mb-2 text-gray-300">
//                 Your Message
//               </label>
//               <textarea
//                 rows="6"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-lg
//                            bg-[#1a1a1a] border border-white/10
//                            focus:outline-none focus:border-purple-500 resize-none"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="mt-4 px-6 py-3 bg-purple-600 rounded-lg
//                          text-white font-medium
//                          hover:bg-purple-700 hover:-translate-y-1
//                          transition-all duration-300 disabled:opacity-60"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>

//           </form>

//           {/* RIGHT: INFO */}
//           <div className="space-y-10">

//             <div className="flex gap-4 items-start">
//               <FaMapMarkerAlt className="text-purple-500 text-xl mt-1" />
//               <div>
//                 <h4 className="font-semibold">Location</h4>
//                 <p className="text-gray-400 text-sm">
//                   India, West Bengal
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4 items-start">
//               <FaEnvelope className="text-purple-500 text-xl mt-1" />
//               <div>
//                 <h4 className="font-semibold">Email</h4>
//                 <p className="text-gray-400 text-sm">
//                   sd758286@gmail.com
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4 items-start">
//               <FaPhone className="text-purple-500 text-xl mt-1" />
//               <div>
//                 <h4 className="font-semibold">Phone</h4>
//                 <p className="text-gray-400 text-sm">
//                   +91 8436556545
//                 </p>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-4">Follow Me</h4>
//               <div className="flex gap-4">
//   <SocialIcon
//     icon={<FaGithub />}
//     link="https://github.com/Sayan8436"
//   />
//   <SocialIcon
//     icon={<FaLinkedin />}
//     link="https://www.linkedin.com/in/Sayan-dutta-802038344"
//   />
//   <SocialIcon
//     icon={<FaFacebook />}
//     link="https://www.facebook.com/Sayan.dutta.985752"
//   />
//   <SocialIcon
//     icon={<FaInstagram />}
//     link="https://www.instagram.com/sayandutta171"
//   />
// </div>

//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* SOCIAL ICON COMPONENT */
// function SocialIcon({ icon, link }) {
//   return (
//     <a
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-10 h-10 flex items-center justify-center rounded-full
//                  bg-[#1a1a1a] border border-white/10
//                  text-gray-300 hover:text-purple-400
//                  hover:border-purple-500 hover:-translate-y-1
//                  transition"
//     >
//       {icon}
//     </a>
//   );
// }



import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-purple-500">Touch</span>
          </h2>
          <p className="text-gray-400">
            Have a project in mind or want to collaborate? Let’s talk!
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT: FORM */}
          <form className="space-y-6" onSubmit={handleSubmit}>

            {success && (
              <div className="p-3 rounded-lg bg-green-500/20 text-green-400 text-center">
                ✅ Message sent successfully!
              </div>
            )}

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg
                           bg-[#1a1a1a] border border-white/10
                           focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg
                           bg-[#1a1a1a] border border-white/10
                           focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Your Message
              </label>
              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg
                           bg-[#1a1a1a] border border-white/10
                           focus:outline-none focus:border-purple-500 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 px-6 py-3 bg-purple-600 rounded-lg
                         text-white font-medium
                         hover:bg-purple-700 hover:-translate-y-1
                         transition-all duration-300 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* RIGHT: CONTACT INFO */}
          <div className="space-y-10">

            {/* LOCATION */}
            <div className="flex gap-4 items-start">
              <FaMapMarkerAlt className="text-purple-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-400 text-sm">
                  India, West Bengal
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 items-start">
              <FaEnvelope className="text-purple-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:sd758286@gmail.com"
                  className="text-gray-400 text-sm hover:text-purple-400 transition"
                >
                  sd758286@gmail.com
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex gap-4 items-start">
              <FaPhone className="text-purple-500 text-xl mt-1" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a
                  href="tel:+918436556545"
                  className="text-gray-400 text-sm hover:text-purple-400 transition"
                >
                  +91 8436556545
                </a>

                {/* CALL & EMAIL BUTTONS */}
                <div className="flex gap-4 mt-3">
                  <a
                    href="tel:+918436556545"
                    className="px-4 py-2 text-sm rounded-lg bg-purple-600 text-white
                               hover:bg-purple-700 transition"
                  >
                    📞 Call Me
                  </a>

                  <a
                    href="mailto:sd758286@gmail.com"
                    className="px-4 py-2 text-sm rounded-lg border border-purple-500
                               text-purple-400 hover:bg-purple-500 hover:text-white transition"
                  >
                    ✉️ Email Me
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <SocialIcon icon={<FaGithub />} link="https://github.com/Sayan8436" />
                <SocialIcon icon={<FaLinkedin />} link="https://www.linkedin.com/in/Sayan-dutta-802038344" />
                <SocialIcon icon={<FaFacebook />} link="https://www.facebook.com/Sayan.dutta.985752" />
                <SocialIcon icon={<FaInstagram />} link="https://www.instagram.com/sayandutta171" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* SOCIAL ICON COMPONENT */
function SocialIcon({ icon, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full
                 bg-[#1a1a1a] border border-white/10
                 text-gray-300 hover:text-purple-400
                 hover:border-purple-500 hover:-translate-y-1
                 transition"
    >
      {icon}
    </a>
  );
}
