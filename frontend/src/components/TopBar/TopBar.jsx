import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import "./TopBar.css";

const TopBar = () => {
  return (
    <Box className="container">
      <Box className="profileContainer">
        {/*Profile photo and name*/}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg/640px-FIDE_World_FR_Chess_Championship_2019_-_Magnus_Carlsen_%28cropped%29.jpg"
          alt="no image"
          className="profilePhoto"
        />
        <Box className="username">Magnus Carlsen</Box>
      </Box>
      <Box className="logo">KALYAN</Box>
      <Box className="add">
        <AddIcon />
      </Box>
    </Box>
  );
};

export default TopBar;
