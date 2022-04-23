import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import "./SingleEventPage.css";

//
import { fetchEventById } from "../../api/eventData";

const SingleEventPage = () => {
  try {
    const data = fetchEventById("6262f1519606c760384f9e6b");
    console.log(data);
    return (
      <>
        <TopBar />
        <div className="singleEventContainer">
          <div className="title element">Magnus Carlsen</div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg/640px-FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg"
            className="image"
          />
          <div className="description element">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            corporis facilis suscipit harum quaerat autem minima, temporibus
            iusto vero voluptas. Cumque, dignissimos veniam. Illum cum, deserunt
            voluptatum recusandae excepturi nihil?
          </div>
          <div className="funds element">
            <div className="currentFund">100$</div>
            <div className="targetFund">1000$</div>
          </div>
          <div className="contactDetails element">
            For more information contact us at
            <div className="phoneNumber">9926377907</div>
            <div className="email">lakshya0809bang@gmail.com</div>
          </div>
          <div className="document element">
            For authenticity proof you can go through
          </div>
          <button className="paymentButton element">Pay Now</button>
          <button className="delteEvent element">Delete Event</button>
        </div>
      </>
    );
  } catch (err) {
    console.error(err);
  }
};

export default SingleEventPage;
