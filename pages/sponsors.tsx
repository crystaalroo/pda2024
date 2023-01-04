import Box from '@mui/material/Box'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import type { NextPage } from 'next'
import MainBoard from '../components/MainBoard'
import Social from '../components/Social'
import BoardCard from '../components/BoardCard'
import Guadalajara from '../components/Guadalajara'
import Sponsors from '../components/Sponsors'

// ********************************************************************************
const Hotel: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <MainBoard
        sx={{ padding: { md: '100px 50px 0 50px', xs: '80px 0 0 0' } }}
      >
        <BoardCard barSide="none">
          <Sponsors />
        </BoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Hotel