import { styled, Theme } from "@mui/material";

const StyledFooter = styled('footer')(({ theme }: { theme: Themee }) => ({
    backgroundColor: theme.palette.info.main,
  }));
  
export default StyledFooter