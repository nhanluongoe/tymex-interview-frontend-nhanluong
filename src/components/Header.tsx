import useBreakpoints from "@hooks/useBreakpoints";
import useToggleShowOnScroll from "@modules/marketplace/hooks/useToggleShowOnScroll";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container, Drawer, styled } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
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

export default function Header() {
  const show = useToggleShowOnScroll();

  const { isTablet } = useBreakpoints();

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  if (!show) {
    return null;
  }

  if (isTablet) {
    return (
      <Box sx={{ position: "fixed", right: 0, zIndex: 1000, p: 0.5 }}>
        <Button onClick={toggleDrawer(true)} size="small">
          <MenuIcon />
        </Button>
        <Drawer
          data-testid="drawer"
          open={open}
          onClose={toggleDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "rgba(23, 22, 26, 0.7)",
              backdropFilter: "blur(10px)",
              p: 2,
            },
          }}
        >
          <Box sx={{ mb: 2 }}>
            {NAVIGATION.map((navigation) => (
              <Box
                key={navigation.name}
                sx={{ p: 1 }}
                onClick={toggleDrawer(false)}
              >
                <StyledNavLink to={navigation.path}>
                  {navigation.label}
                </StyledNavLink>
              </Box>
            ))}
          </Box>
          <LanguageSelector />
        </Drawer>
      </Box>
    );
  }

  return (
    <Container
      component="header"
      maxWidth={false}
      sx={{
        position: "fixed",
        top: 0,
        backgroundColor: "rgba(23, 22, 26, 0.7)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        py: 1,
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

        <LanguageSelector />
      </Box>
    </Container>
  );
}
