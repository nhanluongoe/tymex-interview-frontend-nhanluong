import { Box, Typography } from "@mui/material";

interface TokenCardProps {
  name: string;
  avatar: string;
  tier: string;
  price: number;
  author: string;
}

export default function TokenCard(props: TokenCardProps) {
  const { name, tier, price, author } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "rgba(49, 59, 69, 0.5)",
        padding: 2,
      }}
    >
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src="/the-dj.png"
          alt=""
          sx={{
            width: "100%",
            borderRadius: "8px",
            background:
              "linear-gradient(90deg, rgba(220,90,254,1) 0%, rgba(113,101,242,1) 100%)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "8px",
            left: "8px",
            padding: "4px 16px",
            borderRadius: "8px",
            backgroundColor: "#313B4580",
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
        <Typography>{price} ETH</Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography>{author}</Typography>
      </Box>
    </Box>
  );
}
