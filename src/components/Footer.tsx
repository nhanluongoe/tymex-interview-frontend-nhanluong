import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import FooterNavigation from "./FooterNavigation";
import FooterContactUs from "./FooterContactUs";
import FooterSubscription from "./FooterSubscription";
import { Link } from "react-router-dom";

interface Section {
  title: string;
  content: React.ReactNode;
  width?: number; // percent
}

const SECTION: Section[] = [
  {
    title: "navigation",
    content: <FooterNavigation />,
    width: 35,
  },
  {
    title: "contact us",
    content: <FooterContactUs />,
  },
  {
    title: "subscribe to receive our latest update",
    content: <FooterSubscription />,
    width: 40,
  },
];

export default function Footer() {
  return (
    <Container
      component="footer"
      maxWidth={false}
      sx={{
        mt: 3,
        mb: 6,
        backgroundColor: "#17161A",
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
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                mb: 2,
                fontSize: 20,
              }}
            >
              {section.title}
            </Typography>
            {section.content}
          </Box>
        ))}
      </Box>

      <Divider sx={{ borderColor: "gray", my: 5 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>&copy; 2023 Tyme - Edit. All rights reserved.</Typography>
        <Stack direction="row" spacing={2}>
          <Link to="#">Security</Link>
          <Link to="#">Legal</Link>
          <Link to="#">Privacy</Link>
        </Stack>
      </Box>
    </Container>
  );
}
