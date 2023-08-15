import { Button as MuiButton, Tooltip } from "@mui/material";

type ButtonProps = {
  label: string;
  type?: "primary" | "secondary";
  style?: any;
};

const Button = ({ label, type, style }: ButtonProps) => {
  //temporarly disable launch app buttons
  const disabled = type != "secondary";

  return (
    <Tooltip arrow title={disabled ? "Coming soon!" : ""}>
      <MuiButton
        sx={{
          color: "#FFF",
          padding: "16px 38px",
          fontFamily: "Ubuntu",
          textTransform: "none",
          cursor: disabled ? "default" : "pointer",
          opacity: disabled ? "0.6": "1",
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
    </Tooltip>
  );
};

export default Button;
