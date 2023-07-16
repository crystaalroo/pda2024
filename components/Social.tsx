import * as React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { keyframes, styled } from '@mui/material/styles'
import ButtonBase from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

const ani = keyframes`from {
    mask-position: 0 0;
}
to {
    mask-position: 100% 0;
}`

const ani2 = keyframes`	 from {
    mask-position: 100% 0;
}
to {
    mask-position: 0 0;
}`

const ButtonContainer = styled(Link)(({ theme }) => ({
  position: 'relative',
  width: '20%',
  paddingBottom: '5%',
  paddingTop: '3%',
  overflow: 'hidden',
  transition: '0.5s',
  [theme.breakpoints.down('md')]: {
    width: '30% !important' // Overrides inline-style
  },
  [theme.breakpoints.down('sm')]: {
    width: '45% !important' // Overrides inline-style
  }
}))

const ButtonContainerButton = styled(ButtonBase)(({ theme }) => ({
  component: 'span',
  width: '101%',
  height: '100%',
  mask: `url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png")`,
  maskSize: '2300% 100%',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  animation: `${ani2} 0.7s steps(22) forwards`,
  '&:hover': {
    animation: `${ani} 0.7s steps(22) forwards`
  }
}))

const Social: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          borderColor: 'divider',
          borderRight: '1px solid'
        }}
      >
        <Typography
          variant="body1"
          color={'text.secondary'}
          sx={{ display: { md: 'flex', xs: 'none' } }}
        >
          {t('contact.discord')}
        </Typography>
        <ButtonContainer
          href="https://discord.gg/icpcmx"
          key={'discord'}
          target={'blank'}
        >
          <Box component="span">
            <Box
              component="img"
              src="/assets/discordcir.png"
              alt="icpcmx"
              sx={{
                position: 'absolute',
                width: '100%'
              }}
            />
          </Box>
          <ButtonContainerButton>
            <Box
              component="img"
              src="/assets/discordcirblack.png"
              alt="icpcmx"
              sx={{
                width: '100%'
              }}
            />
          </ButtonContainerButton>
        </ButtonContainer>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '50%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography
          variant="body1"
          component="div"
          color={'text.secondary'}
          sx={{ display: { md: 'flex', xs: 'none' } }}
        >
          {t('contact.facebook')}
        </Typography>
        <ButtonContainer
          href="https://es-la.facebook.com/acmitesochapter/"
          key={'fb'}
          target={'blank'}
        >
          <Box component="span">
            <Box
              component="img"
              src="/assets/flogo.png"
              alt="icpcmx"
              sx={{
                position: 'absolute',
                width: '100%',
                marginTop: '2%',
                marginBottom: '2%'
              }}
            />
          </Box>
          <ButtonContainerButton>
            <Box
              component="img"
              src="/assets/flogoblack.png"
              alt="icpcmx"
              sx={{
                width: '100%',
                marginTop: '2%',
                marginBottom: '2%'
              }}
            />
          </ButtonContainerButton>
        </ButtonContainer>
      </Box>
    </Box>
  )
}
export default Social
