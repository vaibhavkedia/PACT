import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landing-card">
        <div className="landing-card__head">
          <div className="landing-txt">Kalyan</div>
          <div className="landing-desc">
            This application allows the user to see all the details of the
            nearby social cause funding events and can also donate any amount
            he/she desires to the same. The user will also get goodies and perks
            when they donate over a certain amount. Moreover a user can also
            create a fundraiser for any cause for others to donate after
            providing all the necessary details such as name, donation details,
            target amount and most importantly some verification document
            stating that their fundraiser is not a fraud for other users to see.
          </div>
          <div className="landing-card__ctr">
            <button className="landing-card__btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
