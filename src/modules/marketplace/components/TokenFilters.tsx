import Button from "@components/ui/Button";
import RangeInput from "@components/ui/RangeInput";
import {
  Box,
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useToken } from "../contexts/TokenContext";
import CrossIcon from "./icons/CrossIcon";
import SearchIcon from "./icons/SearchIcon";

interface FormValue {
  priceRange: [number, number];
  tier: string;
  theme: string;
  time: string;
  price: string;
  query: string;
}

interface TokenFiltersProps {
  onFiltersChange?: (filters: FormValue) => void;
}

export default function TokenFilters(props: TokenFiltersProps) {
  const { onFiltersChange } = props;

  const { handleFiltersChange, resetFilters } = useToken();

  const { handleSubmit: hookFormHandleSubmit, control } = useForm<FormValue>({
    defaultValues: {
      priceRange: [0, 200],
      tier: "all",
      theme: "all",
      time: "dsc",
      price: "asc",
      query: "",
    },
  });

  const handleSubmit = hookFormHandleSubmit((data) => {
    handleFiltersChange({
      range: data.priceRange,
      tier: data.tier,
      theme: data.theme,
      time: data.time,
      price: data.price,
      query: data.query,
    });

    if (onFiltersChange) {
      onFiltersChange(data);
    }
  });

  return (
    <Stack
      component="form"
      sx={{ px: 4, mt: 3 }}
      spacing={3}
      onSubmit={handleSubmit}
    >
      <Controller
        control={control}
        name="query"
        render={({ field: { onChange, value } }) => (
          <InputBase
            value={value}
            onChange={onChange}
            fullWidth
            sx={{
              border: "1px solid #89888B",
              color: "#89888B",
              borderRadius: 1,
              px: 2,
              py: 1,
              marginRight: 2,
            }}
            placeholder="Quick search"
            startAdornment={<SearchIcon viewBox="0 0 24 20" />}
            inputProps={{
              sx: {
                "::placeholder": {
                  color: "#d6d6d6",
                },
              },
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="priceRange"
        render={({ field: { onChange, value } }) => (
          <>
            <Typography color="white">PRICE</Typography>
            <RangeInput
              getAriaLabel={() => "Price range"}
              value={value}
              min={0}
              max={200}
              step={0.01}
              onChange={onChange}
              valueLabelDisplay="auto"
              valueLabelFormat={(val) => `${val} ETH`}
              getAriaValueText={(val) => `${val} ETH`}
            />
            <Box>
              <Typography
                sx={{
                  color: "#d6d6d6",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>0 ETH</span>
                <span>200 ETH</span>
              </Typography>
            </Box>
          </>
        )}
      ></Controller>

      <Controller
        control={control}
        name="tier"
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth>
            <Typography
              sx={{
                color: "#89888B",
                mb: 1.5,
              }}
            >
              TIER
            </Typography>
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
              <MenuItem value="mythic">Mythic</MenuItem>
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
            <Typography
              sx={{
                color: "#89888B",
                mb: 1.5,
              }}
            >
              THEME
            </Typography>
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
            <Typography
              sx={{
                color: "#89888B",
                mb: 1.5,
              }}
            >
              TIME
            </Typography>
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
            <Typography
              sx={{
                color: "#89888B",
                mb: 1.5,
              }}
            >
              PRICE
            </Typography>
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

      <Box
        sx={{
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button variant="text" startIcon={<CrossIcon />} onClick={resetFilters}>
          Reset filter
        </Button>
        <Button type="submit" sx={{ width: "50%" }}>
          Search
        </Button>
      </Box>
    </Stack>
  );
}
