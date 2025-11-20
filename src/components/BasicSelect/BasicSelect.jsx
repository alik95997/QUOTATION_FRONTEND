import React from "react";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { CiFilter } from "react-icons/ci";

export default function BasicSelect({
  label,
  value,
  options,
  onChange,
  error,
}) {
  return (
    <Box sx={{}}>
      <FormControl fullWidth>
        <Select
          value={value}
          displayEmpty
          onChange={(e) => onChange(e.target.value)}
          IconComponent={CiFilter}
          sx={{
            border: `1px solid ${error ? "#ef4444" : "#C7C7C7"}`,
            padding: "8px 8px",
            fontSize: "14px",
            borderRadius: "4px",
            // color: "#C6D3CC",
            display: "flex",
            alignItems: "center",
            "& .MuiSelect-select": {
              padding: "2px 0px !important", // ↓ INNER PADDING
              display: "flex",
              alignItems: "center",
            },
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
