import Layout from "@/component/layout";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import JobCard from "@/component/jobCard";
import jobList from "@/static/joblist";

const findjob = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{ backgroundColor: "#0b1460", color: "white", height: "380 " }}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginTop={10}
          >
            <Grid item xs={12}>
              <h2 style={{ fontSize: 30, marginTop: 15 }}>Search for job</h2>
            </Grid>
            <Grid item xs={12}>
              <h4>
                {" "}
                Want to level up your career? View the best jobs and apply to
                <br />
                top companies in one click, only on Instahyre!
              </h4>
              <h3 style={{ marginLeft: 30 }}>
                Showing 1 - 10 out of 24363 active jobs
              </h3>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ height: 2900 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4} sx={{ backgroundColor: "#f6f7f9", height: 2800 }}>
              <Paper
                elevation={3}
                style={{
                  height: 750,
                  width: 320,
                  marginTop: 40,
                  marginLeft: 90,
                }}
              >
                {" "}
                <h4 style={{ marginLeft: 80, marginTop: 50, paddingTop: 2 }}>
                  {" "}
                  Search other job
                </h4>
                <hr class="solid" style={{ width: 280, marginTop: 20 }} />
                <TextField
                  sx={{ marginTop: 3, marginLeft: 3, width: 270 }}
                  id="outlined-textarea"
                  label="
          Skills or Title"
                  placeholder="Enter skills or title, e.g Java ,c++"
                  multiline
                />
                <TextField
                  sx={{ marginTop: 3, marginLeft: 3, width: 270 }}
                  id="outlined-textarea"
                  label="
          Job Functions"
                  placeholder="Select the job"
                  multiline
                />
                <TextField
                  sx={{ marginTop: 3, marginLeft: 3, width: 270 }}
                  id="outlined-textarea"
                  label="
                     Industries "
                  placeholder="Select the Industries"
                  multiline
                />
                <TextField
                  sx={{ marginTop: 3, marginLeft: 3, width: 270 }}
                  id="outlined-textarea"
                  label="
                       Location"
                  placeholder="Select the cities e.g Bangalore,Delhi"
                  multiline
                />
                <TextField
                  sx={{ marginTop: 3, marginLeft: 3, width: 270 }}
                  id="outlined-textarea"
                  label="
                   Companies"
                  placeholder="Enter the Companies e.g AI"
                  multiline
                />
                <TextField
                  sx={{ marginTop: 3, marginLeft: 3, width: 270 }}
                  id="outlined-textarea"
                  label="
                    Company Size"
                  placeholder="All"
                  multiline
                />
                <TextField
                  sx={{ marginTop: 3, marginLeft: 3, width: 270 }}
                  id="outlined-textarea"
                  label="
                    Experience( in years)"
                  placeholder="e.g "
                  multiline
                />
                <Button
                  variant="outlined"
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    marginLeft: 80,
                    marginTop: 40,
                  }}
                >
                  {" "}
                  show result
                </Button>
              </Paper>

              <Paper
                elevation={3}
                style={{
                  height: 400,
                  width: 320,
                  marginTop: 40,
                  marginLeft: 90,
                }}
              >
                {" "}
                <h4 style={{ marginLeft: 40, marginTop: 50, paddingTop: 2 }}>
                  {" "}
                  Top companies hire on Instahyre
                </h4>
                <Image
                  src="/images/ggggg.webp"
                  height={330}
                  width={290}
                  alt="logo"
                  style={{ marginLeft: 15 }}
                />
              </Paper>

              <Paper
                elevation={3}
                style={{
                  height: 850,
                  width: 320,
                  marginTop: 40,
                  marginLeft: 90,
                }}
              >
                {" "}
                <h4 style={{ marginLeft: 50, marginTop: 30, paddingTop: 2 }}>
                  {" "}
                  What candidates say{" "}
                </h4>
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  marginTop={1}
                  padding={2}
                >
                  <Grid
                    item
                    xs={12}
                    sx={{ backgroundColor: "#f0fafe", height: 350, width: 10 }}
                  >
                    <Image
                      src="/images/walmart.svg"
                      height={80}
                      width={80}
                      alt="logo"
                      style={{ marginLeft: 200 }}
                    />
                    <p style={{ marginLeft: 20 }}>
                      It has been an amazing journey with
                      <br /> Instahyre. I have got many opportunities
                      <br /> to explore and I really appreciate the
                      <br /> platform that helped me achieve this job.
                      <br /> Thank you Instahyre!
                    </p>
                    <Image
                      src="/images/ranjitha_an.jpeg"
                      height={80}
                      width={80}
                      alt="logo"
                      style={{ borderRadius: "50%" }}
                    />
                    Ranjitha, Hired by Walmart
                    <p style={{ color: "green", marginLeft: 50 }}>
                      as Senior Software Engineer
                    </p>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sx={{
                      backgroundColor: "pink",
                      height: 350,
                      width: 10,
                      marginTop: 5,
                    }}
                  >
                    <Image
                      src="/images/paypal.svg"
                      height={80}
                      width={80}
                      alt="logo"
                      style={{ marginLeft: 200 }}
                    />
                    <p style={{ marginLeft: 20 }}>
                      Instahyre is a great place for job seekers <br />
                      like me which helped in getting a job
                      <br /> with one of the best product-based
                      <br />
                      companies like Paypal. Cheers <br />
                      to Instahyre!
                    </p>
                    <Image
                      src="/images/varun.jpeg"
                      height={80}
                      width={80}
                      alt="logo"
                      style={{ borderRadius: "50%" }}
                    />
                    Varun, Hired by Paypal
                    <p style={{ color: "green", marginLeft: 50 }}>
                      as Senior Software Engineer
                    </p>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={8} sx={{ backgroundColor: "#f6f7f9", height: 2800 }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {jobList.map((el,i)=>{
                  return (<JobCard item={el} key={i}/>)
                })}
              
              

                
                {/* <Grid item xs={12} style={{ padding: 2 }}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      backgroundColor: "white",
                      width: 750,
                      height: 260,
                    }}
                  >
                    

                    

                    <Box sx={{ fontSize: 90, marginLeft: 20 }}>
                      <button
                        style={{
                          fontSize: 20,
                          width: 35,
                          backgroundColor: "red",
                          borderRadius: 3,
                        }}
                      >
                        1
                      </button>
                      <button
                        style={{
                          fontSize: 20,
                          marginLeft: 10,
                          width: 35,
                          backgroundColor: "red",
                          borderRadius: 3,
                        }}
                      >
                        2
                      </button>
                      <button
                        variant="contained"
                        style={{
                          fontSize: 20,
                          marginLeft: 10,
                          width: 35,
                          backgroundColor: "red",
                          borderRadius: 3,
                        }}
                      >
                        3
                      </button>
                      <button
                        style={{
                          fontSize: 20,
                          marginLeft: 10,
                          width: 35,
                          backgroundColor: "red",
                          borderRadius: 3,
                        }}
                      >
                        4
                      </button>
                      <button
                        style={{
                          fontSize: 20,
                          marginLeft: 10,
                          width: 35,
                          backgroundColor: "red",
                          borderRadius: 3,
                        }}
                      >
                        5
                      </button>
                      <button
                        style={{
                          fontSize: 20,
                          marginLeft: 10,
                          width: 35,
                          backgroundColor: "red",
                          borderRadius: 3,
                        }}
                      >
                        6
                      </button>
                      <button
                        style={{
                          fontSize: 20,
                          marginLeft: 10,
                          width: 35,
                          backgroundColor: "red",
                          borderRadius: 3,
                        }}
                      >
                        7
                      </button>
                      <button
                        style={{
                          fontSize: 20,
                          marginLeft: 10,
                          width: 35,
                          backgroundColor: "red",
                          borderRadius: 3,
                        }}
                      >
                        9
                      </button>
                      <button
                        style={{
                          fontSize: 20,
                          marginLeft: 10,
                          width: 35,
                          backgroundColor: "red",
                          borderRadius: 3,
                        }}
                      >
                        10
                      </button>
                      <button
                        style={{
                          fontSize: 20,
                          marginLeft: 20,
                          width: 90,
                          backgroundColor: "darkgreen",
                          borderRadius: 3,
                        }}
                      >
                        Next{" "}
                        <KeyboardDoubleArrowRightIcon
                          style={{ fontSize: 15 }}
                        />
                      </button>
                    </Box>
                    <p
                      style={{ marginLeft: 290, marginTop: 90, color: "blue" }}
                    >
                      Home{" "}
                      <KeyboardArrowRightOutlinedIcon
                        style={{ marginTop: 10, marginLeft: 2 }}
                      />
                      Search Jobs
                    </p>
                  </Grid>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default findjob;
