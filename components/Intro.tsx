import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Intro: React.FC = () => {
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
        ACERCA DE PROGRAMADORES DE AMERICA 2024
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
          Los Concursos Regionales se agrupan en ocho Campeonatos: <br></br>“The
          ICPC Africa & Arab Championship”, “The ICPC Asia East Championship”,
          “The ICPC Asia Pacific Championship”, “The ICPC Asia West
          Championship”, “The ICPC European Championship”, “The ICPC Latin
          America Championship”, “The ICPC Northern Eurasia Championship” y “The
          ICPC North America Championship”. Campeonatos adicionales pueden ser
          definidos por el Comité Ejecutivo del ICPC. <br></br>Las reglas de
          composición y requisitos del equipo para una competencia de Campeonato
          deben ser las mismas que para las Finales Mundiales. Una competencia
          de Campeonato debe llevarse a cabo a más tardar tres meses antes de
          las Finales Mundiales. En el cronograma regional 2023/24 el campeonato
          “The ICPC Latin America Championship” se denominará Programadores de
          América y tendrán lugar en Guadalajara, México del 14 al 19 de marzo.
        </Typography>
      </Box>
    </Box>
  )
}
export default Intro
