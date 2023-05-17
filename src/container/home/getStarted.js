
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import { Button, Grid } from "@mui/material";
import { flexbox } from "@mui/system";
import Image from "next/image";


const GetStarted = () =>{
    return(<>
    <Grid
          container
          direction="column"
          justifyContent="centre"
          alignItems="center"
           
        >
          <Grid item xs={12} sx={{ color: "#0b1460", height: 80,backgroundColor: "#e5ecfa",marginTop:20}}>
            <Button  style={{fontSize:18}}>
              For Businesses
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ color: "#0b1460",}}>
            
             <h1 style={{fontSize:80}}> Get Your Work Done With</h1>
             
             
          </Grid>
          <Grid item xs={12} sx={{ color: "#0b1460",  }}>
            
             <h1 style={{fontSize:40}}> us</h1> 

             
          </Grid>
          
          
          <Grid item xs ={12} sx={{color:"#8f92ab"}}>
          <h3> Fullfillyour requirement with end-to-end Project Execution from us.</h3>

              
              </Grid>
              </Grid>

         

        

        <Grid
          container
          direction="column"
          justifyContent="centre"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Button style={{fontSize:18}}
              sx={{
                backgroundColor: "blue",
                color: "white",
                zIndex: "-50",
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
    </>)
}


export default GetStarted