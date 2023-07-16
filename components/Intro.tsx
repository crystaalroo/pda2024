import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'next-i18next'

const Intro: React.FC = () => {
  const { t } = useTranslation('common')
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
        {t('intro.title')}
      </Typography>
      <Box
        sx={{
          textAlign: 'justify',
          flexDirection: { sm: 'row', xs: 'column' },
          lineHeight: '30px'
        }}
      >
        <Box
          component="img"
          src="https://i.imgur.com/juxhIKm.png"
          alt="icpcmx"
          sx={{
            width: { sm: '60%', xs: '100%' },
            // height: '250px',
            shapeMargin: '1rem',
            shapeOutside: `url('https://i.imgur.com/juxhIKm.png')`,
            clipPath: `url('https://i.imgur.com/juxhIKm.png')`,
            float: { sm: 'right', xs: 'none' }
          }}
        />
        <Typography variant="body1" component="div" color={'text.secondary'}>
          {t('intro.description')}
        </Typography>
      </Box>
    </Box>
  )
}
export default Intro
