// import { Image } from "@mui/icons-material";
import Image from 'next/image';
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import SendIcon from "@mui/icons-material/Send";

const DownloadMedia = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#0b1460", height: 350, padding: 5 }}
      >
        <Grid item xs={8} sx={{ color: "white", height: 250 }}>
          <h1 style={{ fontSize: "45px" }}>
            Download the Herody App now Start your journey of earning money
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
        <h1 style={{ textAlign: "center" }}>Featured in Media</h1>
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
            <Image src="/IANS-logo-6.png" height={50} width={190} alt="logo" />
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
      </Box>
    </>
  );
};

export default DownloadMedia;
