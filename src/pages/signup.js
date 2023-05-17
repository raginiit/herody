import Layout from "@/component/layout";
import { Button, Grid, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Image from "next/image";

const signup = () => {
  return (
    <>
      <Layout>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          marginTop={15}
        >
          <Grid item xs={12} sx={{ color: "black" }}>
            <h2>Top companies. Full privacy. No spam.</h2>
          
          </Grid>
          <Grid item xs={12} sx={{ color: "blue" }}>
                     <p>If youre looking to hire,<span style={{color:"red"}}>click here</span> </p> 

          </Grid>

        </Grid>

        <Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginTop={5}
          >
            <Grid item xs={6} sx={{ backgroundColor: "white", height: 1000, borderRight:"1px solid black" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                marginTop={2}
                width={950}
              >
                <Grid
                  item
                  xs={4}
                  sx={{
                    backgroundColor: "#f4f3ec",
                    height: 140,
                    marginRight: 10,
                    borderRadius: 2,
                  }}
                >
                  <p style={{ marginLeft: 30, marginTop: 30 }}>
                    Instahyre really stands out from
                    <br />
                    a typical job site by showing relevant
                    <br /> positions at top companies!
                  </p>
                  <Image
                    src="/images/deepak.jpg"
                    height="100"
                    width="100"
                    alt="logo"
                    style={{ marginTop: 70 ,borderRadius:"50%"}}
                  />
                 <span style={{color:"green"}}>  Deepak kumar</span>
                </Grid>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                marginTop={2}
                width={950}
              >
                <Grid
                  item
                  xs={4}
                  sx={{
                    backgroundColor: "#f4f3ec",
                    height: 140,
                    marginRight: 10,
                    borderRadius: 2,
                    marginTop: 15,
                  }}
                >
                  <p style={{ marginLeft: 30, marginTop: 25 }}>
                    It was a really cool experience with
                    <br /> Instahyre. Very simple without the
                    <br /> bugging from irrelevant jobs.
                  </p>
                  <Image
                    src="/images/tushar.jpg"
                    height="100"
                    width="100"
                    alt="logo"
                    style={{ marginTop: 70 ,borderRadius:"50%"}}
                  />
                 <span style={{color:"green"}}>  Tushar Garg  </span>
                </Grid>
              </Grid>

              <h3 style={{ marginLeft: 280, marginTop: 370 }}>
              Who is Instahyre for?
              </h3>
              <p style={{ marginLeft: 280, color: "Grey" }}>
                Instahyre is for folks who are looking to get hired at the best<br/>
                tech companies in India, without being spammed for <br/>irrelevant
                jobs on traditional job boards.
              </p>
            </Grid>

            <Grid item xs={6} sx={{ height: 1000 }}>
              <Stack spacing={1} direction="row">
                <Button
                  variant="outlined"
                  startIcon={<LinkedInIcon style={{ fontSize: "30" }} />}
                  sx={{
                    width: "18rem",
                    height: "3rem",
                    padding: 1,
                    margin: 2,
                    marginLeft: 18,
                    backgroundColor: "#0B84BD",
                    color: "white",
                  }}
                >
                  Sign with in linkedIn
                </Button>
              </Stack>

              <Stack spacing={1} direction="row">
                <Button
                  variant="outlined"
                  startIcon={<GoogleIcon style={{ fontSize: "30" }} />}
                  sx={{
                    width: "18rem",
                    height: "3rem",
                    padding: 1,
                    margin: 2,
                    marginLeft: 18,
                    backgroundColor: "#dd4b39",
                    color: "white",
                  }}
                >
                  Sign with in google
                </Button>
              </Stack>

              <hr class="solid" style={{ width: 400, marginTop: 25 }} />

              <TextField
                sx={{
                  width: "26rem",
                  padding: 1,
                  margin: 1,
                  marginLeft: 10,
                  marginTop: 5,
                }}
                //   onChange={(e) => setEmail(e.target.value)}
                id="demo-helper-text-misaligned-no-helper"
                label="Your Name"
              ></TextField>

              <TextField
                sx={{
                  width: "26rem",
                  padding: 1,
                  margin: 1,
                  marginLeft: 10,
                }}
                id="demo-helper-text-misaligned-no-helper"
                label="Email"
              ></TextField>

              <TextField
                sx={{
                  width: "26rem",
                  padding: 1,
                  margin: 1,
                  marginLeft: 10,
                }}
                id="demo-helper-text-misaligned-no-helper"
                label="Password"
              ></TextField>

              <p style={{ marginLeft: 80, color: "black" }}>
                <CheckBoxIcon style={{ color: "blue" }} /> I agree to the <span style={{color:"blue"}}>Terms of service</span>
                 and <span  style={{color:"blue"}}>  Privacy Policy.</span>  I<br /> agree to receive the
                default email notifications, which <br />I can unsubscribe from
                at any time.
              </p>
              <Button
                variant="outlined"
                sx={{
                  width: "13rem",
                  padding: 1,
                  margin: 3,
                  backgroundColor: "#02BFA0",
                  color: "white",
                }}
                style={{ marginLeft: 200 }}
              >
                get Started <KeyboardDoubleArrowRightIcon />
              </Button>
              <p style={{ marginLeft: 200 ,color:"royalblue"}}>
                .Already have an account?<span style={{color:"red"}}> Log in here</span> 
              </p>

              <h3 style={{ marginLeft: 100, marginTop: 90 }}>
                What kind of jobs can I find on Instahyre?
              </h3>
              <p style={{ marginLeft: 80, color: "Grey" }}>
                You can currently use Instahyre to find jobs in Software <br />
                Engineering, Data Science, Product Management, Design,
                <br />
                Marketing, Sales, Operations and HR.
              </p>
            
            </Grid>
          </Grid>
        </Box>
        <hr class="solid" style={{ width: 1400, marginTop: 30 }} />
      </Layout>
    </>
  );
};

export default signup;
