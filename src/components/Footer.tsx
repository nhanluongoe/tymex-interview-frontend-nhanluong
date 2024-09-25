import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import FooterNavigation from "./FooterNavigation";
import FooterContactUs from "./FooterContactUs";
import FooterSubscription from "./FooterSubscription";

interface Section {
  title: string;
  content: React.ReactNode;
  width?: number; // percent
}

const SECTION: Section[] = [
  {
    title: "navigation",
    content: <FooterNavigation />,
  },
  {
    title: "contact us",
    content: <FooterContactUs />,
  },
  {
    title: "subscribe to receive our latest update",
    content: <FooterSubscription />,
    width: 45,
  },
];

export default function Footer() {
  return (
    <Container
      component="footer"
      maxWidth={false}
      sx={{
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {SECTION.map((section) => (
          <Box
            key={section.title}
            sx={{ width: section.width ? `${section.width}%` : undefined }}
          >
            <Typography sx={{ textTransform: "uppercase" }}>
              {section.title}
            </Typography>
            {section.content}
          </Box>
        ))}
      </Box>

      <Divider sx={{ borderColor: "white" }} />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>&copy; 2021 TymeX - Edit. All rights reserved.</Typography>
        <Typography>Privacy Policy</Typography>
      </Box>
    </Container>
  );
}
