import Button, { ButtonProps } from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const CustomizedButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: pink[400],
  "&:hover": {
    backgroundColor: pink[700],
  },
}));

export default CustomizedButton;
