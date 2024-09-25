import Button from "@components/ui/Button";
import { Box, InputBase } from "@mui/material";

export default function FooterSubscription() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <InputBase
        sx={{
          border: "1px solid white",
          color: "white",
          borderRadius: "4px",
          padding: "8px",
          width: "75%",
          marginRight: "8px",
        }}
        placeholder="Enter your email"
      />
      <Button>Subscribe</Button>
    </Box>
  );
}
