import { AppBar, Container, Toolbar } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import Icon from "../../icons/test"

const HeaderNav = () => {
  const {t} = useTranslation()
  const navigate = useNavigate()

  const handleClick = (path: string) => {
    navigate(path)
  }

  return (
        <>
        <AppBar color='info'  position='static' className='h-28'>
          <Container className='pt-6 absolute min-w-full'>
            <Icon styles='absolute'/>
              <Toolbar className='justify-end'>
                <a className='font-bold relative right-36 text-white no-underline cursor-pointer hover:text-black'>
                  {t('about.event')}
                </a>
                <a className='font-bold relative right-28 text-white no-underline cursor-pointer hover:text-black' 
                  onClick={() => handleClick('/form')}
                >
                  {t('form')}
                </a>
                <a className='font-bold relative right-20 text-white no-underline cursor-pointer hover:text-black'> 
                  {t('about.ujap')}
                </a>
                <button className='relative bg-black text-white right-6'>
                  {t('login')}
                </button>
              </Toolbar>
          </Container>
        </AppBar>
        </>
      )
}

export default React.memo(HeaderNav);