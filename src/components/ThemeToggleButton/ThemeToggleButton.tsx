import { Box,  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

interface ThemeToggleButtonProps {
    mode: "light" | "dark";
    setMode: (mode: "light" | "dark") => void;
  }

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ mode, setMode }) => {
  return (
    <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "end",
            // bgcolor: "background.default",
            // color: "text.",
            borderRadius: 1,
            p: 1,
            minHeight: "56px",
          }}
        >
          <FormControl>
            <FormLabel id="demo-theme-toggle">Theme</FormLabel>
            <RadioGroup
              aria-labelledby="demo-theme-toggle"
              name="theme-toggle"
              row
              value={mode}
              onChange={(event) =>
                setMode(event.target.value as "light" | "dark")
              }
            >
              <FormControlLabel value="light" control={<Radio />} label="Light" />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
            </RadioGroup>
          </FormControl>
        </Box>
  )
}

export default ThemeToggleButton