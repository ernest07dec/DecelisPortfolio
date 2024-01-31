import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookMessenger } from "react-icons/fa";

const EmailForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_gta7k5n";
    const templateId = "template_d17xrs7";
    const publicKey = "FeA5gmI-OUcTsags3";

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      from_phone: phone,
      from_company: company,
      to_name: "Ernest",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setMessage("");
        alert(
          "Your message has been sent. Thank you for reaching out! I will reply to you soon."
        );
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log("Error sending email:", error);
      });
  };
  return (
    <>
      <div
        className="w-full flex justify-center items-center"
        data-aos="fade-right"
        data-aos-duration="900"
      >
        <a
          href="http://m.me/ernest07dec"
          className="text-5xl flex justify-end items-end animate-bounce"
          target="_blank"
        >
          Connect with <FaFacebookMessenger className="ml-5" />
        </a>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-md mt-10 mx-auto flex flex-col justify-center bg-gray-900 p-10 rounded-2xl"
      >
        <h2 className="text-5xl mb-10">Let's Connect!</h2>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-indigo-500 peer"
              placeholder=" "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-500 peer"
              placeholder=" "
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-500 peer"
              placeholder=" "
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_phone"
              id="floating_phone"
              className=" block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-500 peer"
              placeholder=" "
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
          <div className="relative z-0 w-full md:col-span-2 mb-6 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              className=" block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-500 peer"
              placeholder=" "
              onChange={(e) => setCompany(e.target.value)}
            />
            <label
              htmlFor="floating_company"
              className="peer-focus:font-medium absolute text-sm text-gray-200 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company
            </label>
          </div>
        </div>
        <div className="my-5">
          <label
            htmlFor="message"
            className="block mb-2 text-sm text-left font-medium dark:text-white"
          >
            Message:
          </label>
          <textarea
            id="message"
            rows="5"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className=" ring-2 ring-blue-200 text-lg hover:ring-4 hover:ring-blue-300 font-medium text-sm px-6 py-2 text-center mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default EmailForm;
