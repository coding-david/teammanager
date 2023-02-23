import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Teammanager
          </Typography>
          <Button variant="outlined" color="inherit">New Teammate</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
