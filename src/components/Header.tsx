import { Box, styled } from "@mui/material";
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
    name: "marketplace",
    label: "Marketplace",
    path: "marketplace",
  },
  {
    name: "about",
    label: "About",
    path: "about",
  },
  {
    name: "contact",
    label: "Contact",
    path: "contact",
  },
];

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: "white",
  textDecoration: "none",
  "&.active": {
    color: theme.palette.primary.main,
  },
}));

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
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

        <Box>
          <Button>Connect Wallet</Button>
        </Box>
      </Box>
    </Box>
  );
}
