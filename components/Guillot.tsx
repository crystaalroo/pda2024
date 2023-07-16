import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import EmailIcon from '@mui/icons-material/Email'
import { Link as ExternalLink } from '@mui/material'
import { useTranslation } from 'react-i18next'

const Guillot: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1%',
        borderColor: 'divider',
        paddingBottom: '5%',
        borderBottom: '1px solid'
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
          width: '100%',
          padding: '5% 0%'
        }}
      >
        {t('contact.title')}
      </Typography>
      <Box
        component="img"
        src="/assets/carlos.jpg"
        alt="icpcmx"
        sx={{
          width: { xs: '35%', sm: '20%', md: '15%' },
          height: 'auto',
          borderRadius: '20%'
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'left',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <ExternalLink
          key="Sede"
          href="https://icpc.global/"
          target={'blank'}
        ></ExternalLink>
        <Typography variant="body1" component="div" color={'text.secondary'}>
          {t('contact.icpcRole')}
        </Typography>
        <ExternalLink
          key="Guillot"
          href="https://www.iteso.mx/web/general/detalle?group_id=32434769"
          target={'blank'}
        >
          <Typography variant="body1" component="div" color={'text.secondary'}>
            {t('contact.name')}
          </Typography>
        </ExternalLink>
        <Typography variant="body1" component="div" color={'text.secondary'}>
          <EmailIcon />
          {t('contact.email1')}
        </Typography>
        <Typography variant="body1" component="div" color={'text.secondary'}>
          <EmailIcon />
          {t('contact.email2')}
        </Typography>
      </Box>
    </Box>
  )
}
export default Guillot
