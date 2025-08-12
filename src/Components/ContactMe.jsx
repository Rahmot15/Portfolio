import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import Aos from "aos";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const contactInfo = {
  email: "mdrahmatulla666@gmail.com",
  phone: "+8801616658465",
  whatsapp: "+8801616658465",
  location: "Rajshahi, Dhaka, Bangladesh",
  availability: "Open to full‑time roles",
};

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos/dist/aos.css");
      Aos.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
      });
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_t8opkhn", "template_sij0bsh", form, "nXrPcDVxfi5DF4WjJ")
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your message has been sent successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Failed to send",
          text: "Something went wrong. Please try again later.",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`,
      "_blank"
    );
  };

  return (
    <section id="contact">
      <div className="relative z-10 container mx-auto px-4 mb-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
        </motion.div>

        {/* Main Contact Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <motion.div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="text-center lg:text-left mb-8"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-300">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours.
                </p>
              </motion.div>

              {/* Email Card */}
              <motion.div
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmailClick}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-xl group-hover:bg-blue-600/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      Email Address
                    </h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {contactInfo.email}
                    </p>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePhoneClick}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-600/20 rounded-xl group-hover:bg-green-600/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">
                      Phone Number
                    </h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {contactInfo.phone}
                    </p>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="w-5 h-5 text-green-400" />
                  </motion.div>
                </div>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 cursor-pointer"
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsAppClick}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-600/20 rounded-xl group-hover:bg-emerald-600/30 transition-colors duration-300">
                    <MessageCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors duration-300">
                      WhatsApp
                    </h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {contactInfo.whatsapp}
                    </p>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="w-5 h-5 text-emerald-400" />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Additional Info & Quick Contact */}
            <div className="space-y-6">
              {/* Quick Contact Form */}
              <motion.div
                data-aos="fade-left"
                data-aos-duration="1000"
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Send className="w-6 h-6 text-purple-400" />
                  </div>
                  Send Quick Message
                </h3>

                <form onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none resize-none transition-colors duration-300"
                    ></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="group w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </form>
              </motion.div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  data-aos="fade-left"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-orange-600/20 rounded-lg">
                      <MapPin className="w-5 h-5 text-orange-400" />
                    </div>
                    <h4 className="text-white font-semibold">Location</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {contactInfo.location}
                  </p>
                </motion.div>

                <motion.div
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-cyan-600/20 rounded-lg">
                      <Clock className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h4 className="text-white font-semibold">Availability</h4>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {contactInfo.availability}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hiring or Starting a Project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I’m actively seeking a full‑time role and also available for
                select freelance work. Share your idea and I’ll respond within
                24 hours—let’s build something great together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  onClick={handleEmailClick}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </motion.button>
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Chat
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
