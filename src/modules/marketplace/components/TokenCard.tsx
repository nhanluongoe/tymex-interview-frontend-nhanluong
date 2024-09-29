import { Box, Typography } from "@mui/material";
import Author from "./Author";
import EthIcon from "./icons/EthIcon";

interface TokenCardProps {
  name: string;
  avatar: string;
  tier: string;
  price: number;
  author: string;
  authorAvatar: string;
}

export default function TokenCard(props: TokenCardProps) {
  const { name, tier, avatar, price, author, authorAvatar } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 2.5,
        backgroundColor: "rgba(49, 59, 69, 0.5)",
        padding: 2,
      }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src={avatar}
          alt="avatar"
          sx={{
            pt: 5,
            width: "100%",
            borderRadius: 1,
            background: renderBackground(tier),
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "8px",
            left: "8px",
            padding: "4px 16px",
            borderRadius: 1.5,
            backgroundColor: "#313B4580",
            textTransform: "capitalize",
          }}
        >
          {tier}
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EthIcon
            sx={{ mr: 1, width: "8px" }}
            viewBox="0 0 8 13"
            data-testid="eth-icon"
          />
          <Typography>{price} ETH</Typography>
        </Box>
      </Box>

      <Author name={author} avatar={authorAvatar} isVerified />
    </Box>
  );
}

function renderBackground(tier: string) {
  switch (tier) {
    case "common":
      return "linear-gradient(90deg, rgba(73,220,130,1) 0%, rgba(35,181,196,1) 100%)";
    case "rare":
      return "linear-gradient(90deg, rgba(67,168,246,1) 0%, rgba(87,124,242,1) 100%)";
    case "epic":
      return "linear-gradient(90deg, rgba(220,90,254,1) 0%, rgba(113,101,242,1) 100%)";
    case "legendary":
      return "linear-gradient(90deg, rgba(254,149,90,1) 0%, rgba(241,216,99,1) 100%)";
    case "mythic":
      return "linear-gradient(90deg, rgba(253,90,91,1) 0%, rgba(241,99,207,1) 100%)";
    default:
      return "transparent";
  }
}
