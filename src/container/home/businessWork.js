import { Grid } from '@mui/material';
import React from 'react';

const BusinessWork = (  ) => {
    return (<>
    
    
    
    <Grid
          container
          direction="column"
          justifyContent="centre"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ color: "#0b1460", height: "60" }}>
            <h1>
              <h2>Why do businesses work with us?</h2>
            </h1>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="centre"
          alignItems="center"
        >
          <Grid item xs={12} sx={{ color: "blue", height: "100" }}>
            <h3>
              {" "}
              Herody helps brands to get the work done with the distributed
              workforce and does complete end-to-end execution
            </h3>
          </Grid>
        </Grid>
    
    
    </>
        
    );
}

export default BusinessWork;