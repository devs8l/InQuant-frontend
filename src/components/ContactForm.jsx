import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://in-quant-backend.vercel.app/api/contact", form);
      alert("Message sent successfully!");
      setForm({ name: "", organization: "", email: "", phone: "", message: "" });
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <section className="bg-black text-white px-6 py-20 md:px-16 lg:px-24" id="contact">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm uppercase text-gray-400 mb-6">Contact Us</p>
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 leading-tight">
          Let’s Build the Future <br /> of Banking Together
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Row: Name, Org, Email, Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Name", name: "name", placeholder: "Enter your name" },
              { label: "Organization", name: "organization", placeholder: "Enter organization name" },
              { label: "Email", name: "email", placeholder: "name@example.com" },
              { label: "Phone", name: "phone", placeholder: "Enter phone number" },
            ].map(({ label, name, placeholder }) => (
              <div key={name}>
                <label className="block text-sm uppercase mb-1">{label}</label>
                <input
                  type="text"
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-b border-gray-600 focus:outline-none text-sm placeholder-gray-500 py-2"
                  required
                />
              </div>
            ))}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm uppercase mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Type your message"
              className="w-full bg-transparent border-b border-gray-600 focus:outline-none text-sm placeholder-gray-500 py-2 h-28 resize-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-white text-black px-8 py-3 text-sm font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
