import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import React from "react";

interface ElevationScrollProps {
  children: React.ReactElement;
}

export function ElevationScroll({ children }: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
