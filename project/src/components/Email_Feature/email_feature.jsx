/** @format */

import emailjs from "@emailjs/browser";
import React, { useState } from "react";

export default function Contactus() {
  const [Name, setFirstName] = useState("");
  const [uemail, setemail] = useState("");
  const [usubject, setsubject] = useState("");
  const [umessage, setmessage] = useState("");
  const [numbers, setnumber] = useState("");

  const [error, setError] = useState(false);
  function sendemail(e) {
    let numbers = /^[0-9]+$/;
    e.preventDefault();
    if (
      Name.length === 0 ||
      Name.match(numbers) ||
      uemail.length === 0 ||
      usubject.length === 0 ||
      umessage.lenght === 0
    ) {
      setError(true);
    } else {
      emailjs
        .sendForm(
          "service_5vd57oh",
          "template_4yufzmb",
          e.target,
          "VkuCkmttyUkqofqH_"
        )
        .then(() => {
          alert("Thank you, our team will contact you shortly!");
        })
        .catch((err) => {
          console.log(err);
        });
      e.target.reset();
    }
  }
  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={sendemail}>
        <div>
          <label htmlFor="exampleFormControlInput1">Your Name:</label>
          <input
            type="text"
            id="exampleFormControlInput1"
            placeholder="Enter your name"
            name="user_name"
            onChange={(e) =>
              setFirstName(e.target.value) && setnumber(e.target.value)
            }
          />

          {error && Name.length <= 0 && Name.match(numbers) ? (
            <label>Name is Required /</label>
          ) : (
            ""
          )}
          {error && Name.match(numbers) ? (
            <label>Name cannot be a number</label>
          ) : (
            ""
          )}
        </div>
        <div>
          <label htmlFor="exampleFormControlInput2">Your Email address: </label>
          <input
            type="email"
            id="exampleFormControlInput2"
            placeholder="Enter your Email"
            name="user_emailaddress"
            onChange={(e) => setemail(e.target.value)}
          />
          {error && uemail.length <= 0 ? <label>Email is Required</label> : ""}
        </div>

        <div>
          <label htmlFor="exampleFormControlTextarea1">Subject: </label>
          <input
            type="text"
            id="exampleFormControlTextarea1"
            placeholder="Enter Subject"
            name="user_subject"
            onChange={(e) => setsubject(e.target.value)}
          />
          {error && usubject.length <= 0 ? (
            <label>Subject is Required</label>
          ) : (
            ""
          )}
        </div>
        <div>
          <label htmlFor="exampleFormControlTextarea2">Your Message: </label>
          <textarea
            id="exampleFormControlTextarea2"
            rows="3"
            placeholder="Enter your Message"
            name="user_message"
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>
          {error && umessage.length <= 0 ? (
            <label>Message is Required</label>
          ) : (
            ""
          )}
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
