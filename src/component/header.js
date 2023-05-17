import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  return (
    <><Head>
      <link rel="shortcut icon" href="../images/herody.png" />
    </Head>
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
                <Typography className="headerButton cp" onClick={()=>router.push("/")}> Home</Typography>
              </Grid>
              <Grid item>
                <Typography className="headerButton cp"  onClick={()=>router.push("businesses")}> Businesses</Typography>
              </Grid>
              <Grid item>
                <Typography className="headerButton cp" onClick={()=>router.push("gigworkers")}>Gigworkres</Typography>
              </Grid>
              <Grid item>
                <Typography className="headerButton cp"  onClick={()=>router.push("/#about")}> About</Typography>
              </Grid>
              <Grid item>
                <Typography className="headerButton cp"  > Contact us</Typography>
              </Grid>
              <Grid item>
                <Typography className="headerButton cp" onClick={()=>router.push("findjob")} > Find job</Typography>
              </Grid>
              <Grid item>
                <Typography className="headerButton cp" onClick={()=>router.push("signup")}> SignUp</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* for login grid */}
          <Grid item xs={2}>
            
              <Box >
                <Button color="secondary" variant="contained"  onClick={()=>router.push("login")}  sx={{backgroundColor:"white",color:"#0b1460"}} 
                  >  Login</Button>
                
              </Box>
           
          </Grid>
        </Grid>
      </Box>


    </>
  );
};

export default Header;
