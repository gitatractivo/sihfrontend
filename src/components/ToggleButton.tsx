'use client'

import { Button } from "@mui/material";
import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ToggleButton = () => {
  const [checked, setChecked] = useState<boolean>(true);
  const { systemTheme, theme, setTheme } = useTheme();
  useEffect(() => {
    if (systemTheme && theme === "system") {
      setChecked(systemTheme === "dark" ?? true);
      return;
    }
    setChecked(theme === "dark" ?? true);
  }, [theme, systemTheme]);
  // toast.error("hit")
  
 
  return (
    <button
      onClick={() => {
        setTheme(checked ? "light" : "dark");
      }}
    >
      {checked ? <Brightness7Icon /> : <Brightness4Icon />}
    </button>
  );
};

export default ToggleButton;
