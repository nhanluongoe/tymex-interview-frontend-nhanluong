import { Box, Grid2 } from "@mui/material";
import Banner from "../assets/images/banner.png";
import LightLines from "../assets/images/light-lines.png";
import TokenCard from "../components/TokenCard";
import TokenFilters from "../components/TokenFilters";
import { useToken } from "../contexts/TokenContext";

export default function MarketPlacePage() {
  const { tokens } = useToken();

  return (
    <Box>
      <Box
        component="img"
        src={Banner}
        alt="new arrival banner"
        sx={{
          width: "100%",
        }}
      />

      <Box
        sx={{
          backgroundImage: "url(/background.png)",
          backgroundPosition: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Box sx={{ minWidth: "20%" }}>
            <TokenFilters />
          </Box>
          <Box>
            <Grid2 container spacing={2}>
              {tokens.map((token) => (
                <Grid2 size={3} key={token.id}>
                  <TokenCard {...token} />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </Box>
        <Box component="img" src={LightLines} sx={{ width: "100%" }}></Box>
      </Box>
    </Box>
  );
}
