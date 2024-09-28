import Button from "@components/ui/Button";
import { Box, NativeSelect, styled } from "@mui/material";

const StyledSelect = styled(NativeSelect)({
  color: "white",
  "& .MuiNativeSelect-icon": {
    color: "white",
  },
});

export default function LanguageSelector() {
  return (
    <Box sx={{ minWidth: "25%", display: "flex", justifyContent: "center" }}>
      <Button sx={{ mr: 2 }}>Connect Wallet</Button>
      <StyledSelect defaultValue="en">
        <option value="en">EN</option>
        <option value="vi">VI</option>
      </StyledSelect>
    </Box>
  );
}
