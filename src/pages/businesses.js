import Layout from "@/component/layout";

import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";
import AlbumIcon from "@mui/icons-material/Album";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import MediationSharpIcon from "@mui/icons-material/MediationSharp";

const Businesses = () => {
  return (
    <>
      <Layout>
        <Box className="mainBg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="start-end"
            marginTop={10}
            sx={{ padding: 15 }}
          >
            <Grid item xs={12} sx={{ color: " #0b1460" }}>
              <h1 style={{ fontSize: 60 }}>Businesses</h1>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ height: 600 }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            // marginTop={5}
            sx={{ padding: 10 }}
          >
            <Grid item xs={6} sx={{}}>
              <Image src="/busi.png" height={650} width={550} alt="logo" />
            </Grid>
            <Grid item xs={6} sx={{ color: " #0b1460" }}>
              <h2 style={{ display: "inline", color: "blue" }}>
                We help businesses to scale by breaking down complex
                requirements as tasks and do end-to-end execution
              </h2>
              <h1>
                {" "}
                <CheckBoxIcon
                  style={{ display: "inline", color: "blue", fontSize: "50" }}
                />{" "}
                PAN India Coverage
              </h1>
              <h1>
                <CheckBoxIcon
                  style={{ display: "inline", color: "blue", fontSize: "50" }}
                />
                Pay Per Outcome Model
              </h1>
              <h1>
              <CheckBoxIcon
                style={{ display: "inline", color: "blue", fontSize: "50" }}
              />
                Execute On-Demand Projects</h1>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ height: 700 }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginTop={15}
            sx={{ padding: 15, backgroundColor: "#d0ecec" }}
          >
            <Grid item xs={12} sx={{ color: " #0b1460" }}>
              <h1 style={{ fontSize: 60 }}>Working Process</h1>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              marginTop={5}
              // sx={{ padding: 5 }}
              sx={{ color: "black" }}
            >
              <Grid item xs={3} sx={{}}>
                <div class="my" >
                  <div class="in">
                    <h1>01</h1>{" "}
                  </div>
                  <div style={{ textAlign:"center"}}>
                  <BusinessCenterIcon
                    sx={{ fontSize: 60, color: " #0b1460" }}
                  />

                  <h4>Propose Plan </h4>
                  </div>
                  
                </div>
              </Grid>
              <Grid item xs={3} sx={{ marginTop: 14 }}>
                <div class="my">
                  <div class="in">
                    {" "}
                    <h1>02</h1>
                    </div>
                    <div style={{textAlign:"center"}}>
                    <MediationSharpIcon
                      sx={{ fontSize: 60, color: " #0b1460" }}
                    />
                    <h4>Publish Tasks</h4>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} sx={{}}>
                <div class="my">
                  <div class="in">
                    <h1>03</h1>
                    </div>
                    <div style={{textAlign:"center"}}>
                    <ImageSearchOutlinedIcon
                      sx={{ fontSize: 60, color: " #0b1460" }}
                    />
                    <h4>Gigworkers Selection</h4>
                  </div>
                </div>
              </Grid>
              <Grid item xs={3} sx={{ marginTop: 14 }}>
                <div class="my">
                  <div class="in">
                    <h1>04</h1>
                    </div>
                    <div style={{textAlign:"center"}}>
                    <WorkspacePremiumOutlinedIcon
                      sx={{ fontSize: 60, color: " #0b1460", }}
                    />{" "}
                    <h4>Completely Managed</h4>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{  }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginTop={10}
            sx={{ padding: 10 }}
          >
            <Grid item xs={12} sx={{ color: "#0b1460" }}>
              <h1 style={{ fontSize: 50 }}> Our Offerings</h1>
            </Grid>
            
          </Grid>

          <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="space-around"
              alignItems="start"
              // marginTop={5}
              sx={{  padding:5}}
              
            >
              <Grid
                item
                xs={3}
                sx={{
                  color: "#0b1460",
                  backgroundColor: "white",
                  height: 750,
                }}
              >
                <Image src="/mark.jpg" height={280} width={240} alt="logo" />
                <h1>Brand Marketing</h1>
                <p>
                  Reach out to the audience to increase <br />
                  brand awareness via various activities
                </p>
                <p>
                  <AlbumIcon /> Campus Activation
                </p>
                <p>
                  <AlbumIcon /> Social Media Engagement
                </p>
                <p>
                  <AlbumIcon /> Product Sampling
                </p>
                <p>
                  <AlbumIcon /> User Acquisition
                </p>
                <p>
                  <AlbumIcon /> Influencer Marketing
                </p>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  color: "#0b1460",
                  backgroundColor: "white",
                  height: 980,
                }}
              >
                <Image
                  src="/operation.jpg"
                  height={280}
                  width={240}
                  alt="logo"
                />
                <h1>Business Development & Operations</h1>
                <p>
                  Optimize the cost of your Business
                  <br /> Development with pay per outcome
                  <br /> model
                </p>
                <p>
                  <AlbumIcon /> Telecalling
                </p>
                <p>
                  <AlbumIcon /> Vendor Acquisition
                </p>
                <p>
                  <AlbumIcon /> Merchant Onboarding
                </p>
                <p>
                  <AlbumIcon /> Data Entry
                </p>
                <p>
                  <AlbumIcon /> Field Sales
                </p>
                <p>
                  <AlbumIcon /> Content & Data Operations
                </p>
                <p>
                  <AlbumIcon /> Transcription
                </p>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{ color: "#0b1460", backgroundColor: "white", height: 600 }}
              >
                <Image
                  src="/reaserch.jpg"
                  height={280}
                  width={240}
                  alt="logo"
                />

                <h1>Auditing & Market Research</h1>
                <p>
                  {" "}
                  <AlbumIcon /> Mystery Audit
                </p>
                <p>
                  <AlbumIcon /> Online Survey
                </p>
                <p>
                  {" "}
                  <AlbumIcon /> Market Research
                </p>
              </Grid>
            </Grid>
        </Box>

        <Box sx={{ backgroundColor: "#0b1460", height: 600, color: "white" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="start-end "
            marginTop={10}
            sx={{ padding: 10 }}
          >
            <Grid item xs={8} sx={{}}>
              <h1 style={{ fontSize: 50 }}>
                Do you have any other business requirement ?
              </h1>
              <h3 style={{ color: "green" }}>Let us know</h3>
              <h4>
                <AlbumOutlinedIcon style={{ color: "green" }} />
                Scale your business with us
              </h4>

              <br />
              <Button variant="contained" endIcon={<SendIcon />}>
                Fill the form
              </Button>
            </Grid>
            <Grid item xs={4} sx={{}}>
              <Image
                src="/images/cartton.png"
                height="350"
                width="350"
                alt="logo"
              />
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </>
  );
};

export default Businesses;
