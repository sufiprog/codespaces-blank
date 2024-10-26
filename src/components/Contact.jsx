import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData(event.target);

    formDataToSend.append("access_key", "8f7853f7-9b64-4159-a815-adf9683e4553");

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setFormData({ name: "", email: "", message: "" }); // Clear form fields
      setSuccessMessage("Message Sent!"); // Show success message
      setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('../footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center"
    >
      <h4 className="text-center mb-2 text-lg">Connect with me</h4>
      <h2 className="text-center text-5xl">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        If you have any questions, comments, or feedback, please leave your query below!
      </p>
      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            required
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          rows="6"
          required
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Send now
          <img className="w-3" src="../right-arrow-white.png" alt="" />
        </button>
        {successMessage && (
          <p className="text-center text-green-500 mt-4">{successMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
