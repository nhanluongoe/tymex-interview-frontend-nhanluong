import MsgIcon from "@modules/marketplace/components/icons/MsgIcon";
import PhoneIcon from "@modules/marketplace/components/icons/PhoneIcon";
import { Stack, Typography } from "@mui/material";
import React from "react";

interface Item {
  name: string;
  content: React.ReactNode;
}

const ITEMS: Item[] = [
  {
    name: "phone",
    content: (
      <Typography key="phone" sx={{ display: "flex", alignItems: "center" }}>
        <PhoneIcon sx={{ mr: 1 }} />
        <a href="tel:01234568910">01234568910</a>
      </Typography>
    ),
  },
  {
    name: "email",
    content: (
      <Typography key="email" sx={{ display: "flex", alignItems: "center" }}>
        <MsgIcon sx={{ mr: 1 }} />
        <a href="mailto:tymex-talent@tyme.com">tymex-talent@tyme.com</a>
      </Typography>
    ),
  },
];

export default function FooterContactUs() {
  return <Stack spacing={1.5}>{ITEMS.map((item) => item.content)}</Stack>;
}
