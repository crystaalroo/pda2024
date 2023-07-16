import Box from '@mui/material/Box'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import TopBanner from '../../components/TopBanner'
import Guillot from '../../components/Guillot'
import type { NextPage } from 'next'
import MainBoard from '../../components/MainBoard'
import Social from '../../components/Social'
import BoardCard from '../../components/BoardCard'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

const Contact: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <MainBoard>
        <BoardCard barSide="none" sx={{ padding: '30px' }}>
          <Guillot />
        </BoardCard>
        <BoardCard barSide="none" sx={{ padding: '30px' }}>
          <Social />
        </BoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Contact
