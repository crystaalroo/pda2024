import * as React from 'react'
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Link as ExternalLink,
  CardActionArea
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'

const pages = [
  {
    name: 'Contacto',
    link: '/contact'
  }
]
const revPages = pages.map(x => x).reverse()

const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null)
  }

  return (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center'
      }}
    >
      <AppBar
        position="static"
        sx={{
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: '2px',
          borderColor: 'divider',
          borderBottomStyle: 'solid'
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: '100%',
            padding: { md: '0 50px', xs: '0 10px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '1280px',
              display: 'flex'
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                top: 0,
                zIndex: 2,
                position: 'absolute',
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <Link key={'card'} href={'/'}>
                <Card
                  sx={{
                    width: '200px',
                    height: '240px',
                    border: '5px',
                    borderColor: 'text.secondary',
                    borderLeftStyle: 'solid',
                    borderRightStyle: 'solid',
                    borderBottomStyle: 'solid',
                    bgcolor: 'white'
                  }}
                >
                  <CardActionArea>
                    <CardContent
                      sx={{
                        paddingTop: '12px',
                        paddingBottom: '8px'
                      }}
                    >
                      <Typography
                        fontSize={'18px'}
                        gutterBottom
                        variant="body2"
                        component="div"
                        align="left"
                        color={'primary.contrastText'}
                      >
                        PROGRAMADORES DE AMERICA 2024
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        padding: 0,
                        height: '167px',
                        width: '180px'
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: 'white',
                          height: '140px',
                          width: '140px',
                          margin: 'auto',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                      >
                        <CardMedia
                          component="img"
                          image="/assets/logopda.jpg"
                          alt="icpcmx"
                          sx={{
                            width: '100%'
                          }}
                        />
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              </Link>
            </Box>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                flexBasis: 0
              }}
            />
            <Link key={'card'} href={'/'}>
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  flexBasis: 0,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <CardMedia
                  component="img"
                  image="/assets/logopda.jpg"
                  alt="icpcmx"
                  sx={{
                    width: '140px'
                  }}
                />
              </Box>
            </Link>
            <Box
              sx={{
                flexDirection: 'row-reverse',
                flexGrow: 1,
                flexBasis: 0,
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                {revPages.map(page => (
                  <Link key={page.name} href={page.link}>
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
                <ExternalLink
                  key="Sede"
                  href="https://iteso.mx/"
                  target={'blank'}
                >
                  <MenuItem key="Sede" onClick={handleCloseNavMenu}>
                    <Typography
                      textAlign="center"
                      sx={{ color: 'primary.contrastText' }}
                    >
                      Sede
                    </Typography>
                  </MenuItem>
                </ExternalLink>
              </Menu>
            </Box>
            <Box
              sx={{
                flexDirection: 'row-reverse',
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' }
              }}
            >
              {pages.map(page => (
                <Link key={page.name} href={page.link}>
                  <Button
                    key={page.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: 'primary.contrastText',
                      display: 'block'
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
              <ExternalLink
                key="Sede"
                href="https://iteso.mx/"
                target={'blank'}
              >
                <Button
                  key="Sede"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: 'primary.contrastText',
                    display: 'block'
                  }}
                >
                  {'Sede'}
                </Button>
              </ExternalLink>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default NavBar
