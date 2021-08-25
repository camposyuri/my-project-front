import React from "react";
import useStyles from "./dashboard-page.pstl";

const Page = () => {
  const classes = useStyles();

  return (
    <div className={classes.dale}>
      <h1>Hello Dashboard</h1>
    </div>
  );
};

export default Page;
