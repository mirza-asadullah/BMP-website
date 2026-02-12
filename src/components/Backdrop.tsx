import React from "react";
import "./Backdrop.css";
export type BackdropProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  blur?: string;
  background?: string;
  mixBlendMode?: React.CSSProperties["mixBlendMode"];
};
const Backdrop: React.FC<BackdropProps> = ({
  width = "1921.1107px",
  height = "1715.1042px",
  top = "-317.13px",
  left = "-1.11px",
  blur = "9.5px",
  background = "var(--Implementation-Neutral-Background-System, #FFFFFF)",
  mixBlendMode = "soft-light",
  style,
  className,
  ...rest
}) => {
  const combinedStyle: React.CSSProperties = {
    position: "absolute",
    width,
    height,
    top,
    left,
    transform: "rotate(0deg)",
    opacity: 1,
    mixBlendMode,
    background,
    backdropFilter: `blur(${blur})`,
    WebkitBackdropFilter: `blur(${blur})`,
    pointerEvents: "none",
    ...style,
  };
  return (
    <div
      className={`bmp-backdrop ${className ?? ""}`}
      style={combinedStyle}
      {...rest}
    />
  );
};
export default Backdrop;
