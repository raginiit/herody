import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <Box className="sticky" sx={{ backgroundColor: "#0b1460", color: "white", zIndex:1000 }}>
        <Grid container justifyContent="center" alignItems="center">
          {/* logo grid */}
          <Grid item xs={3} sx={{ padding:1, paddingLeft:5}}>
            <Image src="/images/herody.png" height={60} width={60} alt="logo" style={{backgroundColor:"white", borderRadius:4}}/>
          </Grid>
          <Grid item xs={7}>
            {/* link grid */}
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <Typography className="headerButton"> Home</Typography>
              </Grid>
              <Grid item>
                <Typography className="headerButton"> Activity</Typography>
              </Grid>
              <Grid item>
                <Typography className="headerButton">Gigworkres</Typography>
              </Grid>
              <Grid item>
                <Typography className="headerButton"> About</Typography>
              </Grid>
              <Grid item>
                <Typography className="headerButton"> Contact</Typography>
              </Grid>
              <Grid item>
                <Typography className="headerButton"> Register</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* for login grid */}
          <Grid item xs={2}>
            
              <Box >
                <Button color="secondary" variant="contained" sx={{backgroundColor:"white",color:"#0b1460"}}>Login</Button>
                
              </Box>
           
          </Grid>
        </Grid>
      </Box>


    </>
  );
};

export default Header;
