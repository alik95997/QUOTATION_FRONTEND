import React from "react";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { CiFilter } from "react-icons/ci";

export default function BasicSelect({ label, value, options, onChange }) {
  return (
    <Box sx={{}}>
      <FormControl fullWidth>
        <Select
          value={value}
          displayEmpty
          onChange={(e) => onChange(e.target.value)}
          IconComponent={CiFilter}
          sx={{
            padding: "2px 8px",
            border: "1px solid #0000003D",
            borderRadius: "10px",
            // color: "#C6D3CC",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MenuItem value="">{label}</MenuItem>

          {options.map((opt, i) => (
            <MenuItem key={i} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
