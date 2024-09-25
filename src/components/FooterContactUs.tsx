import { Box, Typography } from "@mui/material";
import React from "react";

interface Item {
  name: string;
  content: React.ReactNode;
}

const ITEMS: Item[] = [
  {
    name: "phone",
    content: (
      <Typography>
        <a href="tel:01234568910">01234568910</a>
      </Typography>
    ),
  },
  {
    name: "email",
    content: (
      <Typography>
        <a href="mailto:tymex-talent@tyme.com">tymex-talent@tyme.com</a>
      </Typography>
    ),
  },
];

export default function FooterContactUs() {
  return <Box>{ITEMS.map((item) => item.content)}</Box>;
}
