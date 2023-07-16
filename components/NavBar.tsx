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
  CardActionArea
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from './Link'
import LanguageSwitchLink from './LanguageSwitchLink'
import i18nextConfig from '../next-i18next.config'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const pages = [
  {
    i18n: 'navbar.host',
    link: 'https://iteso.mx/',
    isExternal: true
  },
  {
    i18n: 'navbar.contact',
    link: '/contact',
    isExternal: false
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
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/prefer-nullish-coalescing
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale
  const { t } = useTranslation('common')
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
              <Link key={'card'} href={'/'} skipLocaleHandling={false}>
                <Card
                  sx={{
                    width: '200px',
                    height: '240px',
                    border: '5px',
                    borderColor: 'divider',
                    borderLeftStyle: 'solid',
                    borderRightStyle: 'solid',
                    borderBottomStyle: 'solid',
                    bgcolor: 'primary.contrastText'
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
                        color={'primary.main'}
                      >
                        {t('pda2024')}
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
                          backgroundColor: 'primary.contrastText',
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
                          image="/assets/logopda.png"
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
            >
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexDirection: 'column',
                  textAlign: 'left',
                  flexWrap: 'nowrap'
                }}
              >
                {i18nextConfig.i18n.locales.map(locale => {
                  if (locale === currentLocale) return null
                  return <LanguageSwitchLink locale={locale} key={locale} />
                })}
              </Box>
            </Box>
            <Link key={'card'} href={'/'} skipLocaleHandling={false}>
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  flexBasis: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'primary.contrastText',
                  border: '3px',
                  borderColor: 'divider',
                  borderLeftStyle: 'solid',
                  borderRightStyle: 'solid',
                  borderBottomStyle: 'solid'
                }}
              >
                <CardMedia
                  component="img"
                  image="/assets/logopda.png"
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
                {revPages.map(page =>
                  page.isExternal ? (
                    <a href={page.link} target="blank" key={page.i18n}>
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                          {t(page.i18n)}
                        </Typography>
                      </MenuItem>
                    </a>
                  ) : (
                    <Link
                      key={page.i18n}
                      href={page.link}
                      skipLocaleHandling={false}
                    >
                      <MenuItem key={page.i18n} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                          {t(page.i18n)}
                        </Typography>
                      </MenuItem>
                    </Link>
                  )
                )}
              </Menu>
            </Box>
            <Box
              sx={{
                justifyContent: 'flex-end',
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' }
                // background: 'yellow'
              }}
            >
              {pages.map(page =>
                page.isExternal ? (
                  <a
                    key={page.i18n}
                    href={page.link}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: 'primary.contrastText',
                        display: 'block'
                      }}
                    >
                      {t(page.i18n)}
                    </Button>
                  </a>
                ) : (
                  <Link
                    key={page.i18n}
                    href={page.link}
                    skipLocaleHandling={false}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: 'primary.contrastText',
                        display: 'block'
                      }}
                    >
                      {t(page.i18n)}
                    </Button>
                  </Link>
                )
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: { md: 'flex', xs: 'none' },
              flexDirection: 'column',
              textAlign: 'left',
              flexWrap: 'nowrap'
            }}
          >
            {i18nextConfig.i18n.locales.map(locale => {
              if (locale === currentLocale) return null
              return <LanguageSwitchLink locale={locale} key={locale} />
            })}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default NavBar
