const { Grid, Button, ListItemSecondaryAction } = require("@mui/material")
import GroupsIcon from "@mui/icons-material/Groups";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Image from "next/image";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const JobCard =({item})=>{

console.log("jobs details", item);



    return(<Grid item xs={12} style={{ padding: 2 }}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: "white",
            width: 750,
            height: 240,
          }}
        >
          <Grid item xs={12}>
            <h3 style={{ marginLeft: 100, marginTop: 20 }}>
              {/* 1         */}
              {item.employer.company_name} - {item.title}
            </h3>

            <img width={30} height={30} src={item.employer.profile_image_src} alt="gfdg" />
            {/* <Image src=" /item.employer.profile_image_src "      width={30} height={30}   alt="logo"/> */}

            <h4 style={{ fontsize: 25 }}>
            {item.employer.company_name}
              <span style={{ fontSize: 13, marginLeft: 80,margin:2 }}>
                {" "}
                Hiring driving in virtual(Google meat/ Zoom)for job in
                Banglore{" "}
              </span>{" "}
            </h4>
            <GroupsIcon
              style={{ color: "blue", marginLeft: 100 }}
            />{" "}
            <span style={{ color: "grey" }}>
              {" "}
              Founded in 2016. 200- 500 employes
            </span>
            <Button
              style={{ marginLeft: 280, backgroundColor: "#02bfa0" }}
              variant="contained"
            >
              view <KeyboardDoubleArrowRightIcon />
            </Button>
            <p style={{ marginLeft: 100 }}>
              {" "}
              Cogoport provides an online platform for booking
              international freight <br />
              services. Users can enter the origin and final shipment
              destination, get...{" "}
            </p>
            <button style={{ marginLeft: 100 }}>
              corporate Sales
            </button>
            <button style={{ marginLeft: 20 }} s>
              Direct sales
            </button>
            <button style={{ marginLeft: 20 }}>
              {" "}
              Inbound Logistic
            </button>
            <button style={{ marginLeft: 20 }}> +2</button>


            {/* <Stack spacing={2}>
      {/* <Pagination count={10} showFirstButton showLastButton /> */}
      {/* <Pagination count={10} hidePrevButton hideNextButton />
    </Stack> */} 


          </Grid>
        </Grid>
      </Grid>)
}


export default JobCard