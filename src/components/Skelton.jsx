import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Skelton(props) {
  let skelton = [];
  for (let i = 0; i < props.skeltnum; i++) {
    skelton.push(
      <Skeleton key={`${i}${Math.floor(Math.random() * 5)}`} {...props} />
    );
  }
  return <Stack spacing={1}>{skelton}</Stack>;
}
