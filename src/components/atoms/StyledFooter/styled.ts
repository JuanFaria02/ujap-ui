import { styled, Theme } from "@mui/material";

const StyledFooter = styled('footer')(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.info.main,
  }));
  
export default StyledFooter