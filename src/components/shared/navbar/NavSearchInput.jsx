import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

export default function NavSearchInput() {
  return (
    <TextField
      placeholder="Search here..."
      size="small"
      sx={{
        ml: 3,
        width: 400,
        backgroundColor: "transparent",
        "& .MuiInputBase-root.Mui-focused": {
          width: 500,
          backgroundColor: "#f0f0f0",
          borderColor: "black",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
          padding: "2px",
          transition: "all 0.3s ease",
        },
      }}
      InputProps={{
        startAdornment: (
          <SearchIcon
            style={{ color: "gray", marginLeft: 1, marginRight: 4 }}
          />
        ),
      }}
    />
  );
}
