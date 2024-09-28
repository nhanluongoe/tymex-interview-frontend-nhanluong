import Button from "@components/ui/Button";
import useBreakpoints from "@hooks/useBreakpoints";
import { FilterAlt } from "@mui/icons-material";
import { Box, Drawer, Grid2 } from "@mui/material";
import { useState } from "react";
import Banner from "../assets/images/banner.png";
import LightLines from "../assets/images/light-lines.png";
import TokenCard from "../components/TokenCard";
import TokenFilters from "../components/TokenFilters";
import { useToken } from "../contexts/TokenContext";

export default function MarketPlacePage() {
  const { tokens, fetchNextPage } = useToken();

  const { isTablet } = useBreakpoints();

  const [showFiltersOnTablet, setShowFiltersOnTablet] = useState(false);

  const handleToggleFilters = (newOpen: boolean) => () => {
    setShowFiltersOnTablet(newOpen);
  };

  return (
    <Box>
      <Box
        component="img"
        src={Banner}
        alt="new arrival banner"
        sx={{
          maxWidth: "100%",
        }}
      />

      <Box
        sx={{
          backgroundImage: "url(/background.png)",
          backgroundPosition: "auto",
          pt: 8,
        }}
      >
        {isTablet && (
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={handleToggleFilters(true)} sx={{ my: 2, mx: 1 }}>
              <FilterAlt />
            </Button>
            <Drawer
              open={showFiltersOnTablet}
              onClose={handleToggleFilters(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  backgroundColor: "rgba(23, 22, 26, 0.7)",
                  backdropFilter: "blur(10px)",
                  p: 2,
                },
              }}
            >
              <TokenFilters onFiltersChange={handleToggleFilters(false)} />
            </Drawer>
          </Box>
        )}

        <Box
          sx={{
            px: isTablet ? 1 : 7,
            display: "flex",
            maxWidth: "100%",
          }}
        >
          {!isTablet && (
            <Box sx={{ minWidth: "25%" }}>
              <TokenFilters />
            </Box>
          )}
          <Box sx={{ mb: 8, flexGrow: 1 }}>
            <Grid2 container spacing={2} columns={12}>
              {tokens.map((token) => (
                <Grid2
                  size={{
                    xs: 6,
                    md: 4,
                    lg: 3,
                  }}
                  key={token.id}
                >
                  <TokenCard {...token} />
                </Grid2>
              ))}
            </Grid2>

            <Box sx={{ textAlign: "center", my: 6 }}>
              <Button sx={{ mx: "auto", width: "20%" }} onClick={fetchNextPage}>
                View More
              </Button>
            </Box>
          </Box>
        </Box>
        <Box component="img" src={LightLines} sx={{ width: "100%" }}></Box>
      </Box>
    </Box>
  );
}
