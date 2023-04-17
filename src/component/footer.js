import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
        sx={{margin:4}}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={6}
          xl={6}
          sx={{ height: 390, color: " #0b1460" }}
        >
          <Grid>
            <h2>About Us</h2>
            Herody helps brands to scale their business by breaking down their
            complex<br></br>
            <br></br>
            business requirement into task and by taking end to end execution.
            <br></br>
            <br></br>
            4th Floor,Classic converge,17th cross main Road,Sector 6,HSR Layout,
            <br></br>
            <br></br>
          
            Bengaluru,Karnatka 560102.
            </Grid>
          <Image src="/images/logo.png" height={80} width={80} alt="logo" />
         
          {/* 1 */}

        </Grid>
       
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          xl={3}
          sx={{ height: 390, color: "#0b1460" }}
        >
          <Grid >
            <h2>Contact Us</h2>
            <h3>Phone Number </h3>
           
            <PhoneIcon  />
            <h3 style={{display:"inline", color:"blue" }}>02269124061</h3>

            <h3 > Email Address</h3>
            <MailRoundedIcon  />
            <h3 style={{display:"inline",color:"blue"}}> help@herody.in</h3>
           
          </Grid>

          {/* 2 */}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          xl={3}
          sx={{ height: 390, color: "#0b1460" }}
        >
          <Grid >
            <h2>Businesses</h2>
            For any business related queries<br></br>
            reach us out at sales@herody.in
            <h2>
              Follow us:
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </h2>
          </Grid>
          {/* 3 */}
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justifyContent="centre"
        alignItems="center"
      >
        <Grid item xs={12} sx={{ color: "#0b1460", height: 80 }}>
          <Grid item>
            <h4>Copyright @2022 sHerody. All Right Reserved.</h4>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
