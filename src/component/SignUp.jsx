import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Divider, IconButton, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/firebaseContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Or continue with
    </Typography>
  );
}

const theme = createTheme();



export default function LoginForm() {

  const Navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register, signInWithGoogle, signInWithFacebook } = useAuth();
  console.log('error', 'email' , email, password)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('error', 'email' , email, password)
    // if (!email || !password) {
    //   return alert("Please fill the requirements");
    // }
    register(email, password)
      .then((response) => {
        console.log(response);
        Navigate("/home");
      })
      .catch((error) => {
        console.log('error.message', error.message);
        alert(error.message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Box
          sx={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "450px",
          }}
        >
          <Avatar src='/assets/logo.png' />
          <Typography
            sx={{
              fontSize: "28px",
              letterSpacing: 0,
              textAlign: "center",
              fontWeight: "800",
              fontFamily: "'Ubuntu', sans-serif",
              p: { xs: 2, sm: 0 },
            }}
          >
            Create your accout
          </Typography>
          {/* <Typography
            sx={{
              mt: 1,
              mb: 1,
              fontSize: "14px",
              color: "#4648df",
              fontWeight: "600",
            }}
          >
            <span style={{ color: "gray" }}>Or</span> start your 14-day for free
            trial
          </Typography> */}
          <Box
            component="form"
            noValidate
            sx={{
              boxShadow: { xs: "none", sm: 3 },
              p: { xs: 2.5, sm: 5 },
              // m:{xs:1},
              borderRadius: 2,
              mt: 4,
              backgroundColor: "#fff",
              mb: 4,
              margin: { xs: "25px 10px", sm: "25px 0" },
            }}
          >
            <Typography
              sx={{
                mb: 0.3,
                color: "#403c3c",
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Email address
            </Typography>
            <TextField
            fullWidth
              type="Email"
              label='Email'
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              id="email"
            //   className={classes.Login__Inputs}
              variant="outlined"
            />
            <Typography
              sx={{
                mb: 0.3,
                color: "#403c3c",
                mt: 3,
                fontWeight: "600",
                fontSize: "16px",
              }}
            >
              Password
            </Typography>

            <TextField
            fullWidth
              type="password"
              label='password'
              required
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              autoComplete="current-password"
            //   className={classes.Login__Inputs}
            />

            <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  sx={{ color: "#c4c2c2" }}
                />
              }
              label="Remember me"
              sx={{
                float: "left",
                mt: { xs: 1, sm: 3, md: 3 },
                pr: 0,
                mr: 1,
              }}
            />
            <Grid
              textAlign="right"
              sx={{
                width: "160px",
                float: "right",
                mt: 4,
                display: { xs: "none", sm: "block", md: "block" },
              }}
            >
              <Link
                href="#"
                variant="body2"
                sx={{
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "#4648df",
                }}
              >
                Forgot your password?
              </Link>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              onClick={handleSubmit}
            
              type="submit"
              sx={{ mt: 3, mb: 2, background: "#4648df" }}
            >
              Register
            </Button>
            <Grid
              textAlign="right"
              sx={{
                width: "100%",
                float: "right",
                mt: 0,
                mb: 2,
                display: { xs: "block", sm: "none", md: "none" },
              }}
            >
              <Link
                href="#"
                variant="body2"
                sx={{ fontWeight: "600", textDecoration: "none" }}
              >
                Forgot your password?
              </Link>
            </Grid>
            <Divider sx={{ height: "1px", mt: 2 }} />
            <Copyright
              sx={{ m: "auto", mt: -1.4, background: "#fff", width: "115px" }}
            />
            <Grid
              item
              xs={12}
              container
              sx={{ justifyContent: "space-between", mt: 3 }}
            >
              <Grid
                item
                xs={5.5}
                sx={{
                  border: "1px solid #d1cfcf",
                  pb: "5px",
                  height: "37px",
                  textAlign: "center",
                }}
              >
                <IconButton
                  type="button"
                  onClick={() =>
                    signInWithGoogle()
                      .then((user) => console.log(user))
                      .catch((error) => console.log(error.message))
                  }
                >
                  <GoogleIcon
                    sx={{
                      color: "#4648df",
                      fontSize: "30px",
                      marginTop: "-5px",
                    }}
                  />
                  {/* <img src='./assets/googleimg.png' alt="google" height='30px' width='30px' /> */}
                </IconButton>
              </Grid>
              <Grid
                xs={5.5}
                item
                sx={{
                  border: "1px solid #d1cfcf",
                  textAlign: "center",
                  height: "37px",
                }}
              >
                <IconButton
                  type="button"
                  onClick={() =>
                    signInWithFacebook()
                      .then((user) => console.log("Facebook Sign In", user))
                      .catch((error) => console.log(error.message))
                  }
                >
                  <FacebookIcon
                    sx={{
                      fontSize: "30px",
                      color: "#4648df",
                      marginTop: "-5px",
                    }}
                  />
                  {/* <img src='./assets/googleimg.png' alt="google" height='30px' width='30px' /> */}
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
