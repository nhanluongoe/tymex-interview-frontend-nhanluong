import Button, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const FilledButton = styled(Button)<Omit<MuiButtonProps, "variant">>(
  ({ theme }) => ({
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[400],
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: pink[700],
    },
  })
);

const TextButton = styled(Button)<Omit<MuiButtonProps, "variant">>(() => ({
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    color: pink[400],
  },
}));

const OutlinedButton = styled(Button)<Omit<MuiButtonProps, "variant">>(() => ({
  color: pink[400],
  fontWeight: "bold",
  borderColor: pink[400],
  "&:hover": {
    borderColor: pink[700],
  },
}));

const BUTTON_VARIANTS = {
  contained: FilledButton,
  text: TextButton,
  outlined: OutlinedButton,
};

function CustomizedButton(props: MuiButtonProps) {
  const { variant = "contained", ...restProps } = props;

  const ButtonComponent = BUTTON_VARIANTS[variant];

  return <ButtonComponent variant={variant} {...restProps} />;
}

export default CustomizedButton;
