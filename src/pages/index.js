import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/component/layout";
import { Box } from "@mui/system";
import { Button, Grid } from "@mui/material";
import { brandImages } from "@/static";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import DomainAddRoundedIcon from "@mui/icons-material/DomainAddRounded";
import SendIcon from "@mui/icons-material/Send";
import BannerMain from "@/container/home/bannerMain";
import GetStarted from "@/container/home/getStarted";

import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import BusinessWork from "@/container/home/businessWork";
import CompanyExperienced from "@/container/home/companyExperienced";
import GigworkersBrands from "@/container/home/gigworkersBrands";
import BrandTrust from "@/container/home/brandTrust";
import DownloadMedia from "../container/home/downloadMedia"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Herody</title>
      </Head>
      <Layout>
        <BannerMain />
        <GetStarted />

        <BusinessWork />
        <CompanyExperienced />
        <GigworkersBrands />
        <BrandTrust/>
        <DownloadMedia />

 

 
        {/* <Box
          sx={{
            height: 800,
            color: "#0b1460",
            backgroundColor: "#f0f4ff",
            paddingTop: 5,
            marginTop: 15,
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            <h2>Brands that trust us</h2>
          </h1>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 5, padding: 5 }}
          >
            <Grid xs={2} sx={{ justifyContent: "space-between" }}>
              <Image
                src="/images/tata_1mg_logo (1).svg"
                height={50}
                width={170}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/guvi-logo-svg-2x-1-300-1.png"
                height={50}
                width={170}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/images/stocktwits-LOGO-20200115.png"
                height={50}
                width={190}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <Image src="/gYylUtm.png" height={110} width={170} alt="logo" />
            </Grid>
            <Grid xs={2}>
              <Image src="/waazirx.jpg" height={120} width={170} alt="logo" />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/images/grow.83f43714 (1).svg"
                height={140}
                width={180}
                alt="logo"
              />
            </Grid>

            <Grid xs={2} sx={{ justifyContent: "space-between" }}>
              <Image
                src="/images/appolo.png"
                height={160}
                width={170}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/images/Altbalaji_Logo.svg.png"
                height={160}
                width={170}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/images/circld.png"
                height={160}
                width={170}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <Image src="/unnamed.jpg" height={160} width={170} alt="logo" />
            </Grid>
            <Grid xs={2}>
              <Image src="/_upGrad.jpg" height={120} width={170} alt="logo" />
            </Grid>
            <Grid xs={2}>
              <Image src="/ET(1).jpg" height={140} width={180} alt="logo" />
            </Grid>

            <Grid xs={2} sx={{ justifyContent: "space-between" }}>
              <Image
                src="/images/woveely.jpeg"
                height={160}
                width={170}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <Image src="/cash kro.png" height={50} width={200} alt="logo" />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/images/myscoot_l.jpg"
                height={60}
                width={190}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/images/HERE_logo.svg.png"
                height={160}
                width={170}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/TechGig.com_Logo.png"
                height={50}
                width={200}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <h1 height={30} width={50}>
                 200+ Brands More!
              </h1>
            </Grid>
          </Grid>
        </Box> */}

        {/* <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: "#0b1460", height: 350, padding: 5 }}
        >
          <Grid item xs={8} sx={{ color: "white", height: 250 }}>
            <h1 style={{ fontSize: "45px" }}>
              Download the Herody App now  Start your journey of earning money
            </h1>
          </Grid>
          <Grid item xs={4} sx={{ color: "white", paddingLeft: 5 }}>
            <p>
             
              <AlbumOutlinedIcon style={{ color: "green" }} />
              App is live on Google Play Store
            </p>
            <Button variant="contained" endIcon={<SendIcon />}>
              Download app now
            </Button>
          </Grid>
        </Grid>

        <Box
          sx={{
            height: 350,
            color: "#0b1460",
            backgroundColor: "#f0f4ff",
            paddingTop: 5,
          }}
        >
          <h1 style={{ textAlign: "center" }}>
            Featured in Media
          </h1>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            // spacing={3}
            sx={{ marginTop: 5, padding: 5 }}
          >
            <Grid xs={2} sx={{ justifyContent: "space-between" }}>
              <Image src="/print.webp" height={50} width={170} alt="logo" />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/tobo-white (1).png"
                // /tobo-white (1).png"
                height={50}
                width={170}
                alt="logo"
                style={{ backgroundColor: "black" }}
              />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/IANS-logo-6.png"
                height={50}
                width={190}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <Image src="/lpg.png" height={50} width={200} alt="logo" />
            </Grid>
            <Grid xs={2}>
              <Image src="/mix.png" height={60} width={150} alt="logo" />
            </Grid>
            <Grid xs={2}>
              <Image src="/unnamed.jpg" height={160} width={160} alt="logo" />
            </Grid>
          </Grid>
        </Box> */}
      </Layout>
    </>
  );
}

{
} 
