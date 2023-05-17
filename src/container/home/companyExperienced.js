import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

 const CompanyExperienced=()=> {
    return (<>
    
    
    
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
    
    
    </>
       
    );
}

export default CompanyExperienced;