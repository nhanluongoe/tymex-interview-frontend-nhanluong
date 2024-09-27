import Button from "@components/ui/Button";
import { Box, InputBase } from "@mui/material";

export default function FooterSubscription() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <InputBase
        sx={{
          border: "1px solid white",
          color: "white",
          borderRadius: 1,
          px: 2,
          py: 1,
          minWidth: "75%",
          marginRight: 2,
        }}
        placeholder="Your email address"
      />
      <Button sx={{ flexGrow: 1 }}>Subscribe</Button>
    </Box>
  );
}
