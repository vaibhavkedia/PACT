import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import "./TopBar.css";

const TopBar = ({
  imageLink = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg/640px-FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg",
}) => {
  const navigate = useNavigate();

  return (
    <Box className="container">
      <Box className="profileContainer" onClick={() => navigate("/user/id")}>
        {/*Profile photo and name*/}
        <img src={imageLink} alt="no image" className="profilePhoto" />
        <Box className="username">Magnus Carlsen</Box>
      </Box>
      <Box className="logo" onClick={() => navigate("/home")}>
        KALYAN
      </Box>
      <Box className="add" onClick={() => navigate("/createevent")}>
        <AddIcon />
        Create Event
      </Box>
    </Box>
  );
};

export default TopBar;
