/** @format */
import "./email_feature.css";
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
    <div className="body">
      <h2>Contact Us</h2>

      <form onSubmit={sendemail}>
        <div>
          <label htmlFor="exampleFormControlInput1" className="labletext">
            Your Name:
          </label>
          <input
            type="text"
            id="exampleFormControlInput1"
            placeholder="Enter your name"
            className="input"
            name="user_name"
            onChange={(e) =>
              setFirstName(e.target.value) && setnumber(e.target.value)
            }
          />

          {error && Name.length <= 0 && Name.match(numbers) ? (
            <label>
              <b>*Name is Required /</b>
            </label>
          ) : (
            ""
          )}
          {error && Name.match(numbers) ? (
            <label>
              <b>Name cannot be a number</b>
            </label>
          ) : (
            ""
          )}
        </div>
        <div>
          <label htmlFor="exampleFormControlInput2" className="labletext">
            Your Email address:{" "}
          </label>
          <input
            type="email"
            id="exampleFormControlInput2"
            className="input"
            placeholder="Enter your Email"
            name="user_emailaddress"
            onChange={(e) => setemail(e.target.value)}
          />
          {error && uemail.length <= 0 ? (
            <label>
              <b>*Email is Required</b>
            </label>
          ) : (
            ""
          )}
        </div>

        <div>
          <label htmlFor="exampleFormControlTextarea1" className="labletext">
            Subject:{" "}
          </label>
          <input
            type="text"
            id="exampleFormControlTextarea1"
            placeholder="Enter Subject"
            className="input"
            name="user_subject"
            onChange={(e) => setsubject(e.target.value)}
          />
          {error && usubject.length <= 0 ? (
            <label>
              <b>*Subject is Required</b>
            </label>
          ) : (
            ""
          )}
        </div>
        <div>
          <label htmlFor="exampleFormControlTextarea2" className="labletext">
            Your Message:{" "}
          </label>
          <textarea
            id="exampleFormControlTextarea2"
            rows="4"
            cols="40"
            placeholder="Enter your Message"
            name="user_message"
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>
          {error && umessage.length <= 0 ? (
            <label>
              <b>*Message is Required</b>
            </label>
          ) : (
            ""
          )}
        </div>
        <input type="submit" value="Submit" className="btn" />
        <input type="Reset" value="Reset" className="btn" />
      </form>
    </div>
  );
}
