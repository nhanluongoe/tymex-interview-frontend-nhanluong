import { Slider, SliderProps, styled } from "@mui/material";
import { pink } from "@mui/material/colors";

const CustomizedSlider = styled(Slider)({
  color: pink[500],
  "& .MuiSlider-thumb": {
    color: pink[500],
  },
  "& .MuiSlider-track": {
    color: pink[500],
    height: "20%",
  },
  "& .MuiSlider-rail": {
    color: "#3A3841",
    height: "25%",
  },
  "& .MuiSlider-markLabel": {
    color: "#D6D6D6",
  },
  "& .MuiSlider-valueLabel": {
    backgroundColor: pink[500],
  },
});

export default function RangeInput(props: SliderProps) {
  return <CustomizedSlider {...props} />;
}
