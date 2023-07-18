import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
  label: string;
  type?: "primary" | "secondary";
  style?: any;
};

const Button = ({ label, type, style }: ButtonProps) => {
  return (
    <MuiButton
      sx={{
        color: "#FFF",
        padding: "16px 38px",
        fontFamily: "Ubuntu",
        textTransform: "none",
        fontSize: {
          xs: "16px",
          md: "14px",
        },
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "20px",
        borderRadius: "16px",
        background:
          "linear-gradient(135deg, #E2491A 0%, #E21B1B 17.08%, #E2491A 42.71%, #E2AA1B 100%)",
        ...style,
      }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
