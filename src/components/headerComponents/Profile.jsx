import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsIcon from '@mui/icons-material/Notifications';

function Profile() {
  return (
    <div>
      <span className="text-white cursor-pointer mr-5">
        <NotificationsIcon />
      </span>
      <span className="text-white cursor-pointer">
        <AccountBoxIcon />
      </span>
    </div>
  );
}

export default Profile;
