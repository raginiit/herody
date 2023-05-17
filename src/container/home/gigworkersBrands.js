import { Grid } from '@mui/material';
import React from 'react';
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import  WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import  DomainAddRoundedIcon from "@mui/icons-material/DomainAddRounded";


const GigworkersBrands=()=> {
    return (<>
    
    <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
          sx={{ marginTop: 15 }}
        >
          <Grid item xs={12} sx={{ color: "#0b1460", height: 30 }}>
            <h1>
              {" "}
              <h2>Why do Gigworkers work with us?</h2>
            </h1>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ color: "blue", height: 20 }}>
            <h3>
              Herody helps gigworkers to start the journey of regular earnings
              by working remotely. We also help them to get growth opportunities
              by
            </h3>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ color: "blue", height: 20 }}>
            <h3>enhancing their skillset.</h3>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={3}
          sx={{ marginTop: 10 }}
        >
          <Grid
            item
            xs={2.5}
            sx={{
              backgroundColor: "#fff1f9",
              borderRadius: 2,

              height: 250,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <PeopleAltRoundedIcon sx={{ fontSize: 70, color: "blue" }} />
              </Grid>
              <Grid item>
                <h1 style={{ color: "#0b1460",fontSize:50  }}>100 k+</h1>
              </Grid>
              <Grid item>
                <p style={{ color: "#5c6185", fontSize: "18px" }}>Workforce</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={2.5}
            sx={{
              backgroundColor: "#fff1f9",
              borderRadius: 2,
              color: "#0b1460",
              height: 250,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <AddLocationAltRoundedIcon
                  sx={{ fontSize: 70, color: "blue" }}
                />
              </Grid>
              <Grid item>
                <h1 style={{ color: "#0b1460",fontSize:50 }}>PAN India</h1>
              </Grid>
              <Grid item>
                <p style={{ color: "#5c6185", fontSize: "18px" }}>Presence</p>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={2.5}
            sx={{
              backgroundColor: "#fff1f9",
              borderRadius: 2,
              color: "#0b1460",
              height: 250,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <WorkHistoryRoundedIcon sx={{ fontSize: 70, color: "blue" }} />
              </Grid>
              <Grid item>
                <h1 style={{ color: "#0b1460",fontSize:50  }}>2+</h1>
              </Grid>
              <Grid item>
                <p style={{ color: "#5c6185", fontSize: "18px" }}>
                  {" "}
                  Years of Operations
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={2.5}
            sx={{
              backgroundColor: "#fff1f9",
              borderRadius: 2,
              color: "#0b1460",
              height: 250,
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <DomainAddRoundedIcon sx={{ fontSize: 70, color: "blue" }} />
              </Grid>
              <Grid item>
                <h1 style={{ color: "#0b1460" ,fontSize:50  }}> 200+</h1>
              </Grid>
              <Grid item>
                <p style={{ color: "#5c6185", fontSize: "18px" }}> Brands</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    
    </>
        
    );
}

export default GigworkersBrands;