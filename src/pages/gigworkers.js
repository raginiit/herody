import Layout from "@/component/layout";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

import SendIcon from "@mui/icons-material/Send";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";

const Gigworkers = () => {
  return (
    <>
      <Layout>
        <Box className="mainBg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="start-end "
            marginTop={10}
            sx={{ padding: 15 }}
          >
            <Grid item xs={12} sx={{ color: " #0b1460" }}>
              <h1 style={{ fontSize: 60 }}>Gigworkers</h1>
            </Grid>
          </Grid>
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="start-end "
          marginTop={4}
          sx={{ padding: 15 }}
        >
          <Grid item xs={6} sx={{ color: " #0b1460" }}>
            <h1 style={{ fontSize: 50 }}>Download the Herody App Now!</h1>
            <h2 style={{ display: "inline", color: "blue" }}>
              Start your Journey of Earning Money
            </h2>

            <div >
              <div> <span className="bullet"></span>Work From Home</div>

              <div> <span className="bullet"></span> Earn Money</div>

              <div> <span className="bullet"></span> Get Certified</div>

              <div> <span className="bullet"></span> Develop Skills</div>

              <div> <span className="bullet"></span> Become a Part of the Revolution</div>
            </div>
          </Grid>

          <Grid
            item
            xs={3}
            sx={{
              color: "blue",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src="/images/03.jpg" height={280} width={280} alt="logo" />
          </Grid>
          <Grid item xs={3} sx={{ color: "blue" }}>
            <Image src="/25.jpg" height={280} width={280} alt="logo" />
          </Grid>
        </Grid>

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
                Become a Part of this Exciting Journey!
              </h1>
              <p>
                <AlbumOutlinedIcon style={{ color: "green" }} />
                Download the Herody App
              </p>
              <p>
                <AlbumOutlinedIcon style={{ color: "green" }} />
                Apply for Gigs and Projects on the App
              </p>
              <p>
                <AlbumOutlinedIcon style={{ color: "green" }} />
                Complete the Tasks & Earn Money
              </p>
              <br />
              <Button variant="contained" endIcon={<SendIcon />}>
                Download app now
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

export default Gigworkers;