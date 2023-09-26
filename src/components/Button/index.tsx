import { Button as MuiButton } from "@mui/material";

type ButtonProps = {
  label: string;
  type?: "primary" | "secondary";
  style?: any;
};

const openLink = () => {
  const appLink = "https://app.phoenix-hub.io/";

  window.open(appLink, "_blank");
};

const Button = ({ label, type, style }: ButtonProps) => {
  const isLaunchButton = label == "Launch App";

  return (
    <MuiButton
      onClick={isLaunchButton ? openLink : undefined}
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
        background: type != "secondary" ? 
          "linear-gradient(135deg, #E2491A 0%, #E21B1B 17.08%, #E2491A 42.71%, #E2AA1B 100%)" 
          : "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.03) 100%)",
        ...style,
      }}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
