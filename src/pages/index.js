import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/component/layout";
import { Box, height } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { Subtitles } from "@mui/icons-material";
import { pink } from "@mui/material/colors";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Herody</title>
      </Head>
      <Layout>
        <Box className="mainBg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            sx={{ marginTop: 10 }}
          >
            <Grid item xs={6} sx={{ color: "#0b1460" }}>
              <h1>
                <h1>
                  We Are The
                  <br /> Future Of Work
                </h1>
              </h1>
              <h3>
                Work with us! <br />
                Complete Internships, Gigs, and projects on the Go.
              </h3>
              <h3>For Gigworkers/ Students</h3>
              <Box>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ backgroundColor: "blue", color: "white" }}
                >
                  Join Now <ArrowForwardSharpIcon />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: 10 }}>
              <Image
                src="/images/img-hero.png"
                height={600}
                width={600}
                alt="logo"
              />
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          direction="column"
          justifyContent="centre"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ color: "#0b1460", height: 80 }}>
            <Button>
              <h3>For Businesses</h3>
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ color: "#0b1460", height: 100 }}>
            <h1>
              <h1>
                {" "}
                Get Your Work Done With
                <br /> Us
              </h1>
            </h1>
            Fullfill your requirement with end-to-end Project Execution from us.
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="centre"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Button
              sx={{
                backgroundColor: "blue",
                color: "white",
                zIndex: "-100",
              }}
            >
              <h3>Get Statrted with us </h3>
              <ArrowForwardSharpIcon />
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="centre"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Image
              src="/hero-illustration-two.png"
              height={900}
              width={900}
              alt="logo"
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="centre"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ color: "#0b1460", height: "100" }}>
            <h1>
              <h2>Why do businesses work with us?</h2>
            </h1>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="centre"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ color: "blue", height: "100" }}>
            <h3>
              {" "}
              Herody helps brands to get the work done with the distributed
              workforce and does complete end-to-end execution
            </h3>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
          sx={{ marginTop: 20 }}
        >
          <Grid
            item
            xs={3.5}
            sx={{
              backgroundColor: "#f0f4ff",
              borderRadius: 2,
              color: "grey",
              height: 180,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/business-report.png"
              height={60}
              width={60}
              alt="logo"
            />
            <p>
              A company that Helps you to <br />
              eliminate your complex
              <br /> business requirements
            </p>
          </Grid>
          <Grid
            item
            xs={3.5}
            sx={{
              backgroundColor: "#f0f4ff",
              borderRadius: 2,
              color: "grey",
              height: 180,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src="/leader.png" height={60} width={60} alt="logo" />
            <p>
              An experienced team that
              <br />
              worked with over 300+
              <br /> brands over a span of 2 years
            </p>
          </Grid>
          <Grid
            item
            xs={3.5}
            sx={{
              backgroundColor: "#f0f4ff",
              borderRadius: 2,
              color: "grey",
              height: 180,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src="/images/map.png" height={60} width={60} alt="logo" />
            <p>
              We help you take your brand
              <br /> PAN India without hiring
              <br /> costs.
            </p>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
          sx={{ marginTop: 5 }}
        >
          <Grid
            item
            xs={3.5}
            sx={{
              backgroundColor: "#f0f4ff",
              borderRadius: 2,
              color: "grey",
              height: 180,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src="/network.png" height={60} width={60} alt="logo" />
            <p>
              Strong ambassador network <br />
              of 2,00,000+ Gigworkers
            </p>
          </Grid>
          <Grid
            item
            xs={3.5}
            sx={{
              backgroundColor: "#f0f4ff",
              borderRadius: 2,
              color: "grey",
              height: 180,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/images/pay-per-click.png"
              height={60}
              width={60}
              alt="logo"
            />
            <p>
              We follow the pay-per-
              <br />
              output model
            </p>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
          sx={{ marginTop: 25 }}
        >
          <Grid item xs={12} sx={{ color: "#0b1460", height: 50 }}>
            <h1>
              {" "}
              <h2>Why do Gigworkers work with us?</h2>
            </h1>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ color: "blue", height: 20 }}>
            <h3>
              Herody helps gigworkers to start the journey of regular earnings
              by working remotely. We also help them to get growth opportunities
              by
            </h3>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ color: "blue", height: 20 }}>
            <h3>enhancing their skillset.</h3>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
          sx={{ marginTop: 10 }}
        >
          <Grid
            item
            xs={2.5}
            sx={{
              backgroundColor: "#fff1f9",
              borderRadius: 2,
              color: "#0b1460",
              height: 250,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>
              <h1>100 k+</h1>
            </h1>
            <Typography>Workforce</Typography>
          </Grid>
          <Grid
            item
            xs={2.5}
            sx={{
              backgroundColor: "#fff1f9",
              borderRadius: 2,
              color: "#0b1460",
              height: 250,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>
              <h2>PAN India</h2>
            </h1>
            Presence
          </Grid>
          <Grid
            item
            xs={2.5}
            sx={{
              backgroundColor: "#fff1f9",
              borderRadius: 2,
              color: "#0b1460",
              height: 250,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>
              <h1>2+</h1>
            </h1>
            Years of Operations
          </Grid>
          <Grid
            item
            xs={2.5}
            sx={{
              backgroundColor: "#fff1f9",
              borderRadius: 2,
              color: "#0b1460",
              height: 250,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>
              <h1>200+</h1>
            </h1>
            Brands
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ marginTop: 10 }}
        >
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: "#f0f4ff",
              color: "#0b1460",
              height: "700px",

              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <h1>
              <h2> Brands that Trust us </h2>
            </h1>

            <Image
              src="/tata_1mg_logo.svg"
              height="150"
              width="150"
              alt="logo"
            />
          </Grid>
        </Grid>
            <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
              <Grid item xs={12} sx={{backgroundColor:"#0b1460",color:"white" ,
              height:350,
             
              }}>
                
                <h1><h2>Download the Herody App now <br/>& Start your journey of earning<br/> money
                 </h2>
                 </h1>


              </Grid>
            </Grid>

            <Grid
              container
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              spacing={3}
              sx={{ marginTop: 20 }}
              >
              <Grid xs={12}  sx={{  color: "#0b1460", height: 70 }}>
              <h1><h2>Featured in Media</h2>
               </h1>
              </Grid>
            </Grid>

      </Layout>
    </>
  )
}

{
}
