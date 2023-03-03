import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Paper,
  Stack,
  styled,
  Link as ExternalLink
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface Props {
  name: string
  per: string
  image: string
  link: string
  benefits?: string[]
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'inherit',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))
const Diamond: React.FC<Props> = ({ name, per, image, link, benefits }) => {
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
          display: 'block',
          width: '50%'
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: { sm: '50%', xs: '100%' },
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ExternalLink
          key="cignuz"
          href={link}
          target={'blank'}
          sx={{ width: '100%' }}
        >
          <Box
            component="img"
            sx={{
              width: per,
              height: '450px',
              padding: { sm: '0 10%', xs: '0 15%' },
              objectFit: 'contain',
              display: 'flex'
            }}
            src={image}
            alt="icpcmx"
          />
        </ExternalLink>
      </Box>
      <Accordion sx={{ backgroundColor: 'secondary.main', width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fill: 'white' }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Beneficios</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              backgroundColor: 'inherit'
            }}
          >
            <Item>
              <List sx={{ listStyleType: 'disc' }}>
                {benefits?.map(ben => {
                  return (
                    <ListItem sx={{ display: 'list-item' }} key="ite">
                      {ben}
                    </ListItem>
                  )
                })}
              </List>
            </Item>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default Diamond