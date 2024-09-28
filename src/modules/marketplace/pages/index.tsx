import Button from "@components/ui/Button";
import { Box, Drawer, Grid2 } from "@mui/material";
import Banner from "../assets/images/banner.png";
import LightLines from "../assets/images/light-lines.png";
import TokenCard from "../components/TokenCard";
import TokenFilters from "../components/TokenFilters";
import { useToken } from "../contexts/TokenContext";
import useBreakpoints from "@hooks/useBreakpoints";
import { FilterAlt } from "@mui/icons-material";

export default function MarketPlacePage() {
  const { tokens, fetchNextPage } = useToken();

  const { isTablet } = useBreakpoints();

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
          <Button>
            <FilterAlt />
          </Button>
        )}

        <Box
          sx={{
            px: isTablet ? 1 : 7,
            display: "flex",
            maxWidth: "100%",
          }}
        >
          {isTablet ? (
            <>
              <Drawer>
                <TokenFilters />
              </Drawer>
            </>
          ) : (
            <Box sx={{ minWidth: "25%" }}>
              <TokenFilters />
            </Box>
          )}
          <Box sx={{ mb: 8, width: isTablet ? "100%" : "75%" }}>
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
