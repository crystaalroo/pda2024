import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import type { NextPage } from 'next'
import MainBoard from '../components/MainBoard'
import BoardCard from '../components/BoardCard'
import Diamond from '../components/Diamond'
import Bronce from '../components/Bronce'
import { Typography } from '@mui/material'

// ********************************************************************************
const Sponsor: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <MainBoard
        sx={{ padding: { md: '100px 50px 0 50px', xs: '80px 0 0 0' } }}
      >
        <BoardCard barSide="none" sx={{ padding: '70px 0 0 0' }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'text.secondary'}
            sx={{
              margin: 'auto 20px 20px 20px',
              display: 'block',
              width: '100%'
            }}
          >
            PATROCINADORES
          </Typography>
        </BoardCard>
        <BoardCard barSide="none">
          <Bronce
            name="Diamante"
            per1="100%"
            per2="100%"
            image1="assets/huaweid.png"
            link1="https://www.huawei.com/mx/"
            image2="/assets/jetbrains.png"
            link2="https://www.jetbrains.com/"
            benefits={[
              'Patrocinador principal de la competencia',
              'Presencia en el escenario para anuncios de premios y fotografía',
              'Orador en las ceremonias de apertura y clausura',
              'Video en ceremonia de inauguración',
              'Video en ceremonia de clausura',
              'Patrocinador de una de las cenas',
              'Stand de patrocinador durante momentos del evento',
              'Stand en el registro',
              'Presencia diaria en el sitio',
              'Charla de patrocinador: 30 minutos',
              '6 accesos para ejecutivos y staff'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Diamond
            name="Platino"
            per="50%"
            image="assets/logopda.jpg"
            link="https://www.huawei.com/mx/"
            benefits={[
              'Charla técnica con los participantes: 20 minutos',
              'Presencia en el escenario para anuncios de premios y fotografía',
              'Video en ceremonia de inauguración',
              'Patrocinador de una de las cenas',
              'Stand de patrocinador durante momentos del evento',
              'Stand en el registro',
              'Presencia diaria en el sitio',
              '5 accesos para ejecutivos y staff'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Diamond
            name="Oro"
            per="45%"
            image="assets/logopda.jpg"
            link="https://www.huawei.com/mx/"
            benefits={[
              'Charla técnica con los participantes: 10 minutos',
              'Video en ceremonia de inauguración',
              'Stand de patrocinador durante momentos del evento',
              'Presencia diaria en el sitio',
              '4 accesos para ejecutivos y staff'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Diamond
            name="Plata"
            per="40%"
            image="assets/logopda.jpg"
            link="https://www.huawei.com/mx/"
            benefits={[
              'Charla técnica con los participantes de la competencia: 5 minutos',
              'Reconocimiento como patrocinador del almuerzo',
              'Stand de patrocinador durante momentos del evento',
              '3 accesos para ejecutivos y staff'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Diamond
            name="Bronce"
            per="35%"
            image="assets/logopda.jpg"
            link="https://www.huawei.com/mx/"
            benefits={[
              'Reconocimiento como patrocinador del desayuno cada día',
              'Stand de patrocinador durante momentos del evento',
              '2 accesos para ejecutivos y staff'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Diamond
            name="Aliados"
            per="30%"
            image="assets/logopda.jpg"
            link="https://www.huawei.com/mx/"
            benefits={[
              'Oportunidad de interactuar con participantes',
              '1 acceso para ejecutivos y staff'
            ]}
          />
        </BoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Sponsor
