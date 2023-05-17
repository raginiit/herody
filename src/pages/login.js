import Layout from "@/component/layout";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import Divider from '@mui/material/Divider';
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [listdata, setListData] = useState([]);
  const router = useRouter()

  function addEmail() {
    setListData([...listdata, email, password]);
    console.log(listdata);
  }
  return (
    <>
      <Layout>
        <Box>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginTop={15}
          >
            <Grid   >
              <h2>Login</h2>
            </Grid>
           
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              borderRadius={10}
            >
              <Grid item xs={12} sx={{ color: "black" }}>
                <p></p> Dont have an account? <Button onClick={()=>router.push("/signup")}>sign Up</Button>
                <p />
              </Grid>
            </Grid>

            <Stack spacing={1} direction="row">
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon style={{ fontSize: "30" }} />}
                sx={{
                  width: "20rem",
                  height:"3.5rem",
                  padding: 1,
                  margin: 2,
                  backgroundColor: "#0B84BD",
                  color: "white",
                }}
              >
                Sign with in linkedIn
              </Button>
            </Stack>

            <Stack spacing={1} direction="row"justifyContent="flex-start">
              <Button
                variant="outlined"
              
                sx={{
                  width: "20rem",
                  height:"3.5rem",
                  padding: 1,
                  margin: 2,
                  backgroundColor: "#dd4b39",
                  color: "white",
                }}
              >
                       <Image src="/gogg.png" height="30" width='30' alt="logo"/>
                Sign with in google
              </Button>
            </Stack>
            
            <hr class="solid" style={{ width: 330, marginTop: 25 }} />

          

            <TextField
              sx={{
                width: "20rem",
                padding: 1,
                margin: 2,
              }}
              onChange={(e) => setEmail(e.target.value)}
              id="demo-helper-text-misaligned-no-helper"
              label="Email"
            ></TextField>


              <TextField
              sx={{
                width: "20rem",
                padding: 1,
                margin: 2,
              }}
              onChange={(e) => setPassword(e.target.value)}
              id="demo-helper-text-misaligned-no-helper"
              label="Password"
            ></TextField>     

           

            <Button
              variant="outlined"
              sx={{
                width: "20rem",
                height:"3.5rem",
                padding: 1,
                margin: 3,
                backgroundColor: "#02BFA0",
                color: "white",
              }}
              onClick={addEmail}
            >
              Login
            </Button>
           
          
            <p style={{ color: "blue" }}>Forget password ?</p>
            <p style={{ color: "grey" }}> Sign in with SSO</p>

            {listdata.map((data, i) => {
              return (
                <>
                  <p key={i}>
                    <div>{data}</div>
                  </p>
                  
                </>
              );
            })}
           
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default Login;
