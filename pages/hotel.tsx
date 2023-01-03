import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import AgendaTable from '../components/Agenda'
import type { NextPage } from 'next'
import MainBoard from '../components/MainBoard'
import Social from '../components/Social'
import BoardCard from '../components/BoardCard'
import Guadalajara from '../components/Guadalajara'

// ********************************************************************************
const Hotel: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <MainBoard>
        <BoardCard barSide="none" sx={{ padding: '30px' }}>
          <Guadalajara />
        </BoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Hotel
