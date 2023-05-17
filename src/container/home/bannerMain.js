import { Button, Grid } from "@mui/material"
import { Box } from "@mui/system"
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import Image from "next/image";


const BannerMain = () =>{
    return(<>
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
                <h1 style={{fontSize:70}}>
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
    </>)
}


export default BannerMain