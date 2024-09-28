import { Box, Container, NativeSelect, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from "./ui/Button";

interface Navigation {
  name: string;
  label: string;
  path: string;
}

const NAVIGATION: Navigation[] = [
  {
    name: "home",
    label: "Home",
    path: "",
  },
  {
    name: "about-us",
    label: "About us",
    path: "about",
  },
  {
    name: "marketplace",
    label: "Marketplace",
    path: "marketplace",
  },
  {
    name: "white-paper",
    label: "White paper",
    path: "white-paper",
  },
];

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: "white",
  textTransform: "uppercase",
  fontWeight: "bold",
  textDecoration: "none",
  position: "relative",
  "&.active": {
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
    color: "transparent",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",

    ":before": {
      content: "''",
      position: "absolute",
      color: "red",
      top: 0,
      left: 1,
      width: "20%",
      height: "100%",
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));

const StyledSelect = styled(NativeSelect)({
  color: "white",
  "& .MuiNativeSelect-icon": {
    color: "white",
  },
});

export default function Header() {
  return (
    <Container
      component="header"
      maxWidth={false}
      sx={{
        position: "fixed",
        top: 0,
        backgroundColor: "rgba(23, 22, 26, 0.7)",
      }}
    >
      <Box
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="ul"
          sx={{
            mr: "auto",
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-around",
            listStyle: "none",
            padding: 0,
          }}
        >
          {NAVIGATION.map((navigation) => (
            <Box component="li" key={navigation.name}>
              <StyledNavLink to={navigation.path}>
                {navigation.label}
              </StyledNavLink>
            </Box>
          ))}
        </Box>

        <Box
          sx={{ minWidth: "25%", display: "flex", justifyContent: "center" }}
        >
          <Button sx={{ mr: 2 }}>Connect Wallet</Button>
          <StyledSelect defaultValue="en">
            <option value="en">EN</option>
            <option value="vi">VI</option>
          </StyledSelect>
        </Box>
      </Box>
    </Container>
  );
}
