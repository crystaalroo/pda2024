import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link as ExternalLink } from '@mui/material'
import Link from './Link'
import { useTranslation } from 'next-i18next'

const Host: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Typography
        variant="h4"
        component="div"
        align="center"
        color={'primary.contrastText'}
        sx={{
          margin: 'auto 20px 20px 20px',
          display: 'block',
          width: '100%'
        }}
      >
        {t('host.title')}
      </Typography>
      <Link key="site" href="/" skipLocaleHandling={false}>
        <Box
          component="img"
          sx={{
            width: { sm: '50%', xs: '100%' },
            height: '150px',
            padding: { sm: '0 12%', xs: '0 20%' },
            objectFit: 'contain',
            display: 'flex'
          }}
          src="/assets/icpcmx.png"
          alt="icpcmx"
        />
      </Link>
      <ExternalLink
        key="Sede"
        href="https://iteso.mx/"
        target={'blank'}
        sx={{ width: { sm: '50%', xs: '100%' } }}
      >
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '150px',
            padding: '0 12.5%',
            objectFit: 'contain',
            display: 'flex'
          }}
          src="/assets/iteso-vertical.png"
          alt="icpcmx"
        />
      </ExternalLink>
    </Box>
  )
}
export default Host
