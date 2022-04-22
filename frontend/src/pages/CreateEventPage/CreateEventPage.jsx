import React, { useState } from "react";
import "./CreateEventPage.css";

const CreateEventPage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [target, setTarget] = useState("");
  const [currentFund, setCurrentFund] = useState("");
  const [document, setDocument] = useState("");

  const handleSubmit = () => {};

  return (
    <div>
      <div className="formContainer">
        <input
          type="text"
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
          className="formElement"
        />
        <textarea
          type="text"
          placeholder="Enter description"
          onChange={(e) => setDesc(e.target.value)}
          className="formElement"
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.value)}
          className="formElement"
        />
        <input
          type="email"
          placeholder="Enter email"
          onChange={(e) => setContactEmail(e.target.value)}
          className="formElement"
        />
        <input
          type="text"
          placeholder="Enter your mobile number"
          onChange={(e) => setContactPhone(e.target.value)}
          className="formElement"
        />
        <input
          type="text"
          placeholder="Enter the pincode"
          onChange={(e) => setPinCode(e.target.value)}
          className="formElement"
        />
        <input
          type="text"
          placeholder="Enter your target fund"
          onChange={(e) => setTarget(e.target.value)}
          className="formElement"
        />
        <input
          type="text"
          placeholder="Enter your current fund"
          onChange={(e) => setCurrentFund(e.target.value)}
          className="formElement"
        />
        <input
          type="file"
          placeholder="Please upload a document for proof"
          onChange={(e) => setDocument(e.target.value)}
          className="formElement"
        />
        <button type="submit" onClick={handleSubmit} className="formElement">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateEventPage;
