import Box from '@mui/material/Box'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import TopBanner from '../../components/TopBanner'
import type { NextPage } from 'next'
import BoardCard from '../../components/BoardCard'
import TextCascadeBoard from '../../components/TextCascadeBoard'
import HotelCard from '../../components/HotelCard'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { useTranslation } from 'react-i18next'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

const Hotel: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <TextCascadeBoard
        title={t('statistics.hotel')}
        menu={[
          'Holiday Inn Express ITESO',
          'livUp',
          'Hampton by Hilton Guadalajara Expo'
        ]}
        intro={t('hotels.intro')}
      >
        <BoardCard barSide="right">
          <HotelCard
            name={'Holiday Inn Express ITESO'}
            image={'/assets/holiday_inn_express_guadalajara_iteso.jpg'}
            benefits={[
              'hotels.benefits.b1',
              'hotels.benefits.b2',
              'hotels.benefits.b4',
              'hotels.benefits.b5',
              'hotels.benefits.b6',
              'hotels.benefits.b7',
              'hotels.benefits.b8',
              'hotels.benefits.b18',
              'hotels.benefits.b19',
              'hotels.benefits.b9',
              'hotels.benefits.b10'
            ]}
            hotelLink="https://www.ihg.com/holidayinnexpress/hotels/us/es/guadalajara/gdlit/hoteldetail"
            time={[
              'hotels.time.iteso1',
              'hotels.time.aero1',
              'hotels.time.livup'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="right">
          <HotelCard
            name={'livUp'}
            image={'/assets/iivup.jpg'}
            benefits={[
              'hotels.benefits.b11',
              'hotels.benefits.b12',
              'hotels.benefits.b2',
              'hotels.benefits.b3',
              'hotels.benefits.b14',
              'hotels.benefits.b13',
              'hotels.benefits.b15',
              'hotels.benefits.b16',
              'hotels.benefits.b17',
              'hotels.benefits.b9',
              'hotels.benefits.b10'
            ]}
            hotelLink={'https://tuespaciodevida.livup.mx/'}
            time={[
              'hotels.time.iteso3',
              'hotels.time.holiday',
              'hotels.time.aero1'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="left">
          <HotelCard
            name={'Hampton by Hilton Guadalajara Expo'}
            image={'/assets/hampton_inn_by_hilton_gdlexpo.jpg'}
            benefits={[
              'hotels.benefits.b1',
              'hotels.benefits.b2',
              'hotels.benefits.b4',
              'hotels.benefits.b5',
              'hotels.benefits.b6',
              'hotels.benefits.b7',
              'hotels.benefits.b8',
              'hotels.benefits.b9',
              'hotels.benefits.b10'
            ]}
            hotelLink={
              'https://www.hiltonhotels.com/es_XM/mexico/hampton-inn-by-hilton-guadalajara-expo/'
            }
            time={['hotels.time.iteso2', 'hotels.time.aero2']}
          />
        </BoardCard>
      </TextCascadeBoard>
      <Footer />
    </Box>
  )
}

export default Hotel
