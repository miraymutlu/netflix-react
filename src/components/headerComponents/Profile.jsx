import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsIcon from '@mui/icons-material/Notifications';

function Profile() {
  return (
    <div className="p-4">
      <span className="text-white cursor-pointer object-contain pr-5">
        <NotificationsIcon />
      </span>
      <span className="text-white cursor-pointer object-contain">
        <AccountBoxIcon />
      </span>
    </div>
  );
}

export default Profile;
