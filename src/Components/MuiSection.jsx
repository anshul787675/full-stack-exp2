import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function MuiSection() {
  const [page, setPage] = useState("home");

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Material UI Site
          </Typography>
          <Button color="inherit" onClick={() => setPage("home")}>Home</Button>
          <Button color="inherit" onClick={() => setPage("about")}>About Me</Button>
          <Button color="inherit" onClick={() => setPage("degree")}>My Degree</Button>
          <Button color="inherit" onClick={() => setPage("contact")}>Contact</Button>
        </Toolbar>
      </AppBar>

      <Box p={4}>
        {page === "home" && (
          <>
            <Typography variant="h4">Home</Typography>
            <Typography>This Home page that uses Material UI.</Typography>
          </>
        )}

        {page === "about" && (
          <>
            <Typography variant="h4">About Me</Typography>
            <Typography>
              I am a student learning Full Stack Development.
            </Typography>
          </>
        )}

        {page === "degree" && (
          <>
            <Typography variant="h4">My Degree</Typography>
            <Typography>
              Pursuing B.Tech in CSE specialising in AI&ML.
            </Typography>
          </>
        )}

        {page === "contact" && (
          <>
            <Typography variant="h4">Contact</Typography>
            <Typography>Email: student@cuchd.in</Typography>
            <Typography>Phone: +91 XXXXXXXXXX</Typography>
          </>
        )}
      </Box>
    </>
  );
}

export default MuiSection;
