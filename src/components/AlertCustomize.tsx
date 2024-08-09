import React from "react";
import { Alert, Typography } from "@material-tailwind/react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const AlertCustomize: React.FC<{
  open: boolean;
  handleClose: (state: boolean) => void;
}> = ({ open, handleClose }) => {
  return (
    <>
      <Alert
        open={open}
        className="max-w-screen-md absolute right-0"
        icon={<Icon />}
        onClose={() => handleClose(false)}
      >
        <Typography color="white" className="text-[0.8rem]">
          Success
        </Typography>
      </Alert>
    </>
  );
};

export default AlertCustomize;