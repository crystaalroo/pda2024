import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { List, ListItem, SxProps, Theme, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

export interface Props {
  name: string
  image: string
  benefits: string[]
  hotelLink: string
  time: string[]
}

interface Props1 {
  children: React.ReactNode
  sx?: SxProps<Theme> | undefined
}
const Item: React.FC<Props1> = ({ children, sx }) => {
  return (
    <ListItem sx={{ ...sx }}>
      <Typography
        variant="body1"
        component="div"
        color={'text.secondary'}
        width={'100%'}
      >
        {children}
      </Typography>
    </ListItem>
  )
}

const HotelCard: React.FC<Props> = ({
  name,
  image,
  benefits,
  hotelLink,
  time
}) => {
  const { t } = useTranslation('common')
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
      }}
    >
      <Typography
        variant="h3"
        width={'100%'}
        align="center"
        paddingBottom={'35px'}
        color={'primary.contrastText'}
      >
        {name}
      </Typography>
      <Box
        sx={{
          textAlign: 'justify',
          flexDirection: 'column',
          lineHeight: '20px',
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Box
          component="img"
          src={image}
          alt="icpcmx"
          sx={{
            display: 'flex',
            width: '80%'
          }}
        />
      </Box>
      <List
        sx={{
          width: '100%',
          color: 'text.secondary'
        }}
      >
        <Item>
          <Button variant="outlined" href={hotelLink} color="info">
            <Typography sx={{ color: 'text.secondary' }}>Hotel info</Typography>
          </Button>
        </Item>
        <Item>
          <List
            sx={{
              listStyleType: 'disc',
              padding: '3% 0 0 0',
              color: 'text.secondary',
              width: '100%'
            }}
          >
            {t('hotels.words.includes')}
            {benefits.map(ben => {
              return (
                <Item key={ben} sx={{ display: 'list-item' }}>
                  {t(ben)}
                </Item>
              )
            })}
          </List>
        </Item>
        <Item>
          <List
            sx={{
              listStyleType: 'disc',
              color: 'text.secondary',
              width: '100%',
              padding: '3% 0 0 0'
            }}
          >
            {t('hotels.words.time')}
            {time.map(ti => {
              return (
                <Item key={ti} sx={{ display: 'list-item' }}>
                  {t(ti)}
                </Item>
              )
            })}
          </List>
        </Item>
      </List>
    </Box>
  )
}

export default HotelCard
