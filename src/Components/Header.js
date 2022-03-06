import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import LogoutIcon from "@mui/icons-material/Logout";

function Header(props) {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper App
      </h1>
      {props.logged && (
        <button onClick={props.logout}>
          <LogoutIcon />
        </button>
      )}
    </header>
  );
}

export default Header;
