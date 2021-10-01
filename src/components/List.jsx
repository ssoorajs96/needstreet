import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Skelton from "./Skelton";
import Box from "@mui/material/Box";
const style = {
  marginBottom: 2,
};
const useStyles = makeStyles(() => ({
  evtHeading: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const List = (props) => {
  const classes = useStyles();
  let evtDate = props.data.evtDate;

  const Dateformatter = (() => {
    let date = new Date(evtDate);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let d = date.getDate();
    let m = monthNames[date.getMonth()];
    let y = date.getFullYear();

    return `${d} ${m} ${y}`;
  })();

  return (
    <Card sx={style}>
      <CardContent>
        <div className={classes.evtHeading}>
          {!!props.data.evtTitle ? (
            <Typography gutterBottom variant="h5" component="div">
              {props.data.evtTitle ?? ""}
            </Typography>
          ) : (
            <Skelton
              variant="rectangular"
              skeltnum={1}
              width={150}
              height={20}
            />
          )}
          {!!Dateformatter ? (
            <Typography variant="body2" color="text.secondary">
              {Dateformatter ?? ""}
            </Typography>
          ) : (
            <Skelton
              variant="rectangular"
              skeltnum={1}
              width={100}
              height={20}
            />
          )}
        </div>
        {!!props.data.evtDescription ? (
          <Typography variant="body2" color="text.secondary">
            {props.data.evtDescription ?? ""}
          </Typography>
        ) : (
          <Box sx={{ marginTop: 2 }}>
            <Skelton
              variant="rectangular"
              skeltnum={5}
              width="100%"
              height={20}
            />
          </Box>
        )}
      </CardContent>
      <CardActions>
        {!!props.children ? (
          props.children
        ) : (
          <Box sx={{ marginTop: 2 }}>
            <Skelton
              variant="rectangular"
              skeltnum={1}
              width={50}
              height={20}
            />
          </Box>
        )}
      </CardActions>
    </Card>
  );
};

export default memo(List);
