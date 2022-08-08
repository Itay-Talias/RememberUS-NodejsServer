import { React } from "react";
import "./backgroundHomePage.css";
import HomePrivate from "./HomePrivatePage/HomePrivate";

const HomePage = (props) => {
  return (
    <div>
      <HomePrivate userInfo={props.userInfo} />
    </div>
  );
};

export default HomePage;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// function LinkTab(props) {
//   return (
//     <Tab
//       component="HomePrivate"
//       onClick={(event) => {
//         event.preventDefault();
//       }}
//       {...props}
//     />
//   );
// }

// export default function HomePage() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
//         <LinkTab label="Page One" href="/Login" />
//         <LinkTab label="Page Two" href="/trash" />
//         <LinkTab label="Page Three" href="/spam" />
//       </Tabs>
//     </Box>
//   );
// }
