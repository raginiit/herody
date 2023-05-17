

import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import React from 'react';
import Guiv from "../../../public/guvi.png"

 const BrandTrust =()=> {
    return (<>
    
    
    <Box
          sx={{
            height: 800,
            color: "#0b1460",
            backgroundColor: "#f0f4ff",
            paddingTop: 5,
            marginTop:15
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

            <Grid xs={2} sx={{justifyContent:"space-between"}}>sdsfs
              <Image src="./images/tata_1mg_logo (1).svg" height={50} width={170}  alt="logo" />
            </Grid>
            <Grid xs={2} >
              <Image
                src={Guiv}
                height={50}
                width={170}
                alt="logo"
               
               
              />

            </Grid>
            <Grid xs={2}>
              <Image src="/images/stocktwits-LOGO-20200115.png" height={50} width={190} alt="logo" />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/gYylUtm.png"
                height={110}
                width={170}
                alt="logo"
              />
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
             
            <Grid xs={2} sx={{justifyContent:"space-between"}}>
              <Image src="/images/appolo.png" height={160} width={170}  alt="logo" />
            </Grid>
            <Grid xs={2} >
              <Image
                src="/images/Altbalaji_Logo.svg.png"
                height={160}
                width={170}
                alt="logo"
               
               
              />
            </Grid>
            <Grid xs={2}>
              <Image src="/images/circld.png" height={160} width={170} alt="logo" />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/unnamed.jpg"
                height={160}
                width={170}
                alt="logo"
              />
            </Grid>
            <Grid xs={2}>
              <Image src="/_upGrad.jpg" height={120} width={170} alt="logo" />
            </Grid>
            <Grid xs={2}>
              <Image
                src="/ET(1).jpg"
                height={140}
                width={180}
                alt="logo"
              />
            </Grid>
              

            <Grid xs={2} sx={{justifyContent:"space-between"}}>
              <Image src="/images/woveely.jpeg" height={160} width={170}  alt="logo" />
            </Grid>
            <Grid xs={2} >
              <Image
                src="/cash kro.png"
                height={50}
                width={200}
                alt="logo"
               
               
              />
            </Grid>
            <Grid xs={2}>
              <Image src="/images/myscoot_l.jpg" height={60} width={190} alt="logo" />
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
              <Image src="/TechGig.com_Logo.png" height={50} width={200} alt="logo" />
            </Grid>
            <Grid xs={2}>
             
                <h1 height={30} width={50}>& 200+ Brands More!
                 </h1>
                
              
            </Grid>



          </Grid>
        </Box>
    
    
    </>
       
    );
}

export default BrandTrust;