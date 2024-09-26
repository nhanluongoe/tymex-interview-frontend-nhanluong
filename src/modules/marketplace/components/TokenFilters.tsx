import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Button from "@components/ui/Button";
import { useToken } from "../contexts/TokenContext";

interface FormValue {
  priceRange: [number, number];
  tier: string;
  theme: string;
  time: string;
  price: string;
}

export default function TokenFilters() {
  const { handleFiltersChange } = useToken();

  const { handleSubmit: hookFormHandleSubmit, control } = useForm<FormValue>({
    defaultValues: {
      priceRange: [0, Infinity],
      tier: "all",
      theme: "halloween",
      time: "dsc",
      price: "asc",
    },
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    console.log(data);
    handleFiltersChange({
      range: data.priceRange,
      tier: data.tier,
      theme: data.theme,
      time: data.time,
      price: data.price,
    });
  });

  return (
    <Box component="form" sx={{ px: "16px" }} onSubmit={handleSubmit}>
      <Controller
        control={control}
        name="priceRange"
        render={({ field: { onChange, value } }) => (
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={onChange}
            valueLabelDisplay="auto"
            valueLabelFormat={(val) => `${val} ETH`}
            getAriaValueText={(val) => `${val} ETH`}
          />
        )}
      ></Controller>

      <Controller
        control={control}
        name="tier"
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth>
            <Typography>TIER</Typography>
            <Select
              value={value}
              onChange={onChange}
              sx={{
                color: "white",
                border: "1px solid #3A3841",
                backgroundColor: "transparent",
                ["& .MuiSelect-icon"]: {
                  color: "white",
                },
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="common">Common</MenuItem>
              <MenuItem value="rare">Rare</MenuItem>
              <MenuItem value="epic">Epic</MenuItem>
              <MenuItem value="legendary">Legendary</MenuItem>
            </Select>
          </FormControl>
        )}
      ></Controller>

      <Controller
        control={control}
        name="theme"
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth>
            <Typography>THEME</Typography>
            <Select
              value={value}
              onChange={onChange}
              sx={{
                color: "white",
                border: "1px solid #3A3841",
                backgroundColor: "transparent",
                ["& .MuiSelect-icon"]: {
                  color: "white",
                },
              }}
            >
              <MenuItem value="halloween">Halloween</MenuItem>
              <MenuItem value="rocknroll">Rock n Roll</MenuItem>
            </Select>
          </FormControl>
        )}
      ></Controller>

      <Controller
        control={control}
        name="time"
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth>
            <Typography>TIME</Typography>
            <Select
              value={value}
              onChange={onChange}
              sx={{
                color: "white",
                border: "1px solid #3A3841",
                backgroundColor: "transparent",
                ["& .MuiSelect-icon"]: {
                  color: "white",
                },
              }}
            >
              <MenuItem value="dsc">Latest</MenuItem>
              <MenuItem value="asc">Oldest</MenuItem>
            </Select>
          </FormControl>
        )}
      ></Controller>

      <Controller
        control={control}
        name="price"
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth>
            <Typography>PRICE</Typography>
            <Select
              value={value}
              onChange={onChange}
              sx={{
                color: "white",
                border: "1px solid #3A3841",
                backgroundColor: "transparent",
                ["& .MuiSelect-icon"]: {
                  color: "white",
                },
              }}
            >
              <MenuItem value="asc">Low to high</MenuItem>
              <MenuItem value="dsc">High to low</MenuItem>
            </Select>
          </FormControl>
        )}
      ></Controller>

      <Button type="submit">Search</Button>
    </Box>
  );
}
