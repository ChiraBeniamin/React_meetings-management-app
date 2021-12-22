import React from "react";
import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

export default function CustomSnackbar(props) {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={props.showSnackbar}
          autoHideDuration={5000}
          onClose={props.closeSnackbar}
        >
          <Alert
            onClose={props.closeSnackbar}
            severity={props.severity}
            sx={{ width: "100%" }}
          >
            {props.message}
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}
