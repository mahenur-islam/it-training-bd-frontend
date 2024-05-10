import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";


export default function NavSearchInput() {
  return (
    <TextField
      placeholder="Search here..."
      size="small"
      sx={{
        width: 300,
        backgroundColor: "transparent",
        outline: 'none',
        "& .MuiInputBase-root.Mui-focused": {
          width: 500
        },
      }}
      InputProps={{
        startAdornment: (
          <SearchIcon
            style={{ color: "black", marginLeft: 1, marginRight: 4 }}
          />
        ),
      }}
    />
  );
}
