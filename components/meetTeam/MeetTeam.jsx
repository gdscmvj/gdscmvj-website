import { useEffect, useState } from "react";
import Link from "next/link";

import {
  MainContainer,
  LeftContainer,
  RightContainer,
  MeetButton
} from "./MeetTeam.styled";
import Avatar from "../avatar/Avatar";
import Typography from "../display/typography/Typography";
import { devices } from "@/constants/theme";

function MeetTeam({ isMobile }) {
  return (
    <MainContainer>
      <LeftContainer>
        <Avatar
          size={isMobile ? "lg" : "xl"}
          borderColor={"#4285F4"}
          url={
            "https://res.cloudinary.com/dp9ikb8xo/image/upload/v1692547320/Members/image/shebin.jpg"
          }
          className="first"
          blur={true}
          borderWidth={"3px"}
        />
        <Avatar
          size={isMobile ? "lg" : "xl"}
          borderColor={"#0F9D58"}
          url={
            "https://res.cloudinary.com/dp9ikb8xo/image/upload/v1692546388/Members/image/Shriya.jpg"
          }
          className="second"
          blur={true}
          borderWidth={"3px"}
        />
        <Avatar
          size={isMobile ? "lg" : "xl"}
          borderColor={"#EA4335"}
          url={
            "https://res.cloudinary.com/dp9ikb8xo/image/upload/v1692546049/Members/image/aishwarya.jpg"
          }
          className="third"
          blur={true}
          borderWidth={"3px"}
        />
      </LeftContainer>
      <RightContainer>
        <Typography variant="h1">
          Discover the great minds behind GDSC.
        </Typography>
        <Link href="/team" style={{ textDecoration: "none" }}>
          <MeetButton>Meet our team</MeetButton>
        </Link>
      </RightContainer>
    </MainContainer>
  );
}

export default MeetTeam;
