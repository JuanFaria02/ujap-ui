import { AppBar, Container, IconButton, Toolbar, Typography } from "@mui/material"
import React from "react"

const HeaderNav = () => {
    return (
        <>
      <AppBar color='info' position='static' className='h-24'>
        <Container>
          <Toolbar>
            <IconButton>
              <Typography>Sobre</Typography>
            </IconButton>
            <IconButton>
              <Typography>Forms</Typography>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
        </>
      )
}

export default React.memo(HeaderNav);