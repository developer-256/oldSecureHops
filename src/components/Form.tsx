"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import FormImage from "../../public/Images/FormImage.svg";

const Form = () => {
  const form: any = useRef();
  const sendmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o3k1g3s",
        "template_7dn5udk",
        form.current,
        "vZlhHjckEqvj0Mj3U"
      )
      .then(
        () => {
          toast.success(" Message Sent 😉");
        },
        () => {
          toast.error("Something is wrong");
        }
      );
    e.target.reset();
  };

  return (
    <div id="form" className="my-8 md:my-16">
      <div className="text-center">
        <h1 className="text-3xl  font-bold  text-[#16B198]">Get in Touch</h1>
        <p className="text-sm mt-4 text-[#333333]">
          Building Relationships through Exceptional Service.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-10 gap-5 shadow-md">
        <div className="md:flex hidden py-3 px-2">
          <Image
            src={FormImage}
            alt="pic"
            className="rounded-xl w-full object-cover"
          />
        </div>
        <div className="py-3 px-2">
          <form
            className="p-4 shadow-md rounded-xl"
            ref={form}
            onSubmit={sendmail}
          >
            <div className="flex flex-col md:flex-row gap-5">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-gray-600 font-semibold block mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_firstname"
                  className="w-full md:w-[18vw] py-2 px-5 mt-2 border rounded-md"
                  placeholder="Your Name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-gray-600 font-semibold block mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_lastname"
                  className="w-full md:w-[18vw] py-2 px-5 mt-2 border rounded-md"
                  placeholder="Last Name"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-gray-600 font-semibold block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  id="name"
                  name="user_email"
                  className="w-full md:w-[18vw] py-2 px-5 mt-2 border rounded-md"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="text-gray-600 font-semibold block mb-2"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="number"
                  name="user_phone"
                  className="w-full md:w-[18vw] py-2 px-5 mt-2 border rounded-md"
                  placeholder="Phone"
                  autoComplete="off"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-600 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="user_message"
                className="w-full p-2 px-5 border rounded-md"
                placeholder="Your Message"
                autoComplete="off"
                required
                rows={5}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#16B198] text-white p-2 rounded-md hover:bg-teal-600"
              >
                Submit
              </button>
            </div>
          </form>
          <ToastContainer
            position="top-center"
            hideProgressBar={true}
            theme="light"
            autoClose={200}
          />
          {/* <div className="md:hidden mt-4 md:py-4 md:px-2">
            <Image src={FormImage} alt="pic" className="rounded-xl w-full " />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Form;
