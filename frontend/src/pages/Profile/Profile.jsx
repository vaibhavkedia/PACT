import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import "./Profile.css";

const Profile = ({
  imageLink = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  name = "Neha Singh",
  email = "nehas115@gmail.com",
  points = "6",
}) => {
  return (
    <>
      <TopBar />
      <div className="profile-card">
        <div className="profile-card__img">
          <img className="profile__img" src={imageLink} alt="profile card" />
        </div>
        <div className="profile-card__cnt">
          <div className="profile-card__name">{name}</div>
          <div className="profile-card__email">{email}</div>
          <div className="profile-card__points">
            <strong>Points:{points}</strong>
          </div>
        </div>
        <div className="profile-card__ctr">
          <button className="profile-card__btn">Logout</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
