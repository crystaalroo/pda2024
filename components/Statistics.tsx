import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'
import { Link as ExternalLink } from '@mui/material'
import Link from './Link'
import { useTranslation } from 'react-i18next'

const imagesE = [
  {
    url: '/assets/mapaiteso.jpg',
    i18n: 'statistics.map',
    link: 'https://www.iteso.mx/documents/2624322/0/Mapa+del+campus'
  }
  // {
  //   url: '/assets/event2.JPG',
  //   title: 'Fotos del evento',
  //   link: 'https://www.flickr.com/photos/tcmxicpc/albums'
  // }
]

const imagesI = [
  {
    url: '/assets/agendaicpc.jpg',
    i18n: 'statistics.schedule',
    link: '/agenda'
  },
  // {
  //   url: '/assets/holiday_inn_express_guadalajara_iteso.jpg',
  //   title: 'Hospedaje',
  //   link: '/hotel'
  // },
  {
    url: '/assets/prizes.jpg',
    i18n: 'statistics.sponsors',
    link: '/sponsors'
  }
  // {
  //   url: '/assets/winners.jpg',
  //   title: 'Reglas de promoción',
  //   link: '/payment'
  // },
  // {
  //   url: '/assets/participants.jpg',
  //   title: 'Participantes',
  //   link: '/participants'
  // }
]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: '300px',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.8,
      transition: 'all 0.5s'
    },
    '& .MuiImageMarked-root': {
      opacity: 0
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
      fontSize: '3rem',
      transition: 'all 0.5s'
    }
  },
  [theme.breakpoints.down('md')]: {
    '&:hover, &.Mui-focusVisible': {
      '& .MuiTypography-root': {
        fontSize: '2.5rem'
      }
    }
  },
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: '150px',
    '&:hover, &.Mui-focusVisible': {
      '& .MuiTypography-root': {
        fontSize: '2rem'
      }
    }
  }
}))

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%'
})

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white
}))

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity')
}))

const ImageMarked = styled('span')(({ theme }) => ({
  height: '3px',
  width: '18px',
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity')
}))

const Statistics: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
      }}
    >
      {imagesI.map(image => (
        <Link key={image.i18n} href={image.link} skipLocaleHandling={false}>
          <ImageButton
            focusRipple
            key={image.i18n}
            style={{
              width: '48%',
              margin: '1%'
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image>
              <Typography
                component="span"
                variant="h4"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: '4px',
                  pt: '2px',
                  pb: theme => `calc(${theme.spacing(1)} + 6px)`
                }}
              >
                {t(image.i18n)}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </Link>
      ))}
      {imagesE.map(image => (
        <ExternalLink
          key="Sede"
          href={image.link}
          sx={{
            width: { sm: '48%', xs: '100%' },
            margin: { sm: '1%', xs: 'none' }
          }}
          target={'blank'}
        >
          <ImageButton
            focusRipple
            key={image.i18n}
            style={{
              width: '100%'
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image>
              <Typography
                component="span"
                variant="h4"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: '4px',
                  pt: '2px',
                  pb: theme => `calc(${theme.spacing(1)} + 6px)`
                }}
              >
                {t(image.i18n)}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        </ExternalLink>
      ))}
    </Box>
  )
}
export default Statistics
