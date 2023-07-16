import Box from '@mui/material/Box'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import TopBanner from '../../components/TopBanner'
import type { NextPage } from 'next'
import BoardCard from '../../components/BoardCard'
import TextCascadeBoard from '../../components/TextCascadeBoard'
import HotelCard from '../../components/HotelCard'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

const Hotel: NextPage = () => {
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <TextCascadeBoard
        title="HOTELES"
        menu={[
          'Holiday Inn Express ITESO',
          'Hampton by Hilton Guadalajara Expo',
          'livUp',
          'WYNDHAM GARDEN GUADALAJARA EXPO'
        ]}
        intro="El grupo esta en formato de SEGMENTO ABIERTO. Esto quiere decir que
        no existen habitaciones prereservadas para el evento. Les
        recomendamos que inicien la reservación a la brevedad"
      >
        <BoardCard barSide="right">
          <HotelCard
            name={'Holiday Inn Express ITESO'}
            image={'/assets/holiday_inn_express_guadalajara_iteso.jpg'}
            benefits={[
              'Desayuno americano tipo buffet.',
              'Gimnasio',
              'Estacionamiento',
              'Llamadas locales y 01 800 nacionales',
              'Internet inalámbrico y de alta velocidad en la habitación y áreas del hotel.',
              'Estacionamiento en cortesía para huéspedes',
              'Kit de café y té en cortesía en la habitación por noche.',
              '1 Botella con agua en cortesía en la habitación por noche',
              'Propina',
              'Impuestos'
            ]}
            hotelLink="https://www.ihg.com/holidayinnexpress/hotels/us/es/guadalajara/gdlit/hoteldetail"
            dprice="1,517,50 MXN"
            tprice="1,993.50 MXN"
            cprice="2,469.50 MXN"
            time={[
              'ITESO: Caminando, 5 minutos.',
              'LIVUP: Residencia estudiantil: Caminando, 8 - 10 minutos',
              'Aeropuerto Guadalajara: Coche, 15 – 30 minutos.'
            ]}
            reservationNumber="+52 1 333 884 1233, +52 1 333 884 1233"
            contactInfo={[
              'Edith De la Torre',
              'gruposgdlit@inverhoteles.com',
              '+52 1 333 884 1233'
            ]}
            optionalTitle="Datos de contacto"
            reservationLink="https://www.ihg.com/holidayinnexpress/hotels/us/es/find-hotels/select-roomrate?fromRedirect=true&qSrt=sBR&qSlH=gdlit&qRms=1&qAdlt=1&qChld=0&qCiD=17&qCiMy=022023&qCoD=18&qCoMy=022023&qGrpCd=ito&setPMCookies=true&qSHBrC=EX&qDest=Av%20Camino%20Al%20Iiteso%20:8650,%20Guadalajara,%20JAL,%20MX&qpMn=0&srb_u=1"
            wid={false}
            evento={'ITO'}
            cuadrup={[
              'Habitación sencilla (1 cama King para 1 o 2 personas)',
              'Habitación doble (2 camas matrimoniales para 1 hasta 4 personas)'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="left">
          <HotelCard
            name={'Hampton by Hilton Guadalajara Expo'}
            image={'/assets/hampton_inn_by_hilton_gdlexpo.jpg'}
            benefits={[
              'Desayuno americano tipo buffet.',
              'Gimnasio',
              'Estacionamiento techado',
              'Llamadas locales y 01 800 nacionales',
              'Internet inalámbrico y de alta velocidad en la habitación y áreas del hotel.',
              'Estacionamiento en cortesía para huéspedes',
              'Kit de café y té en cortesía en la habitación por noche.',
              '1 Botella con agua en cortesía en la habitación por noche',
              'Propina',
              'Impuestos'
            ]}
            hotelLink={
              'https://www.hiltonhotels.com/es_XM/mexico/hampton-inn-by-hilton-guadalajara-expo/'
            }
            dprice="1,517,50 MXN"
            tprice="1,993.50 MXN"
            cprice="2,469.50 MXN"
            time={[
              'ITESO: Coche, 15 – 20 minutos.',
              'Aeropuerto Guadalajara: Coche, 30 – 35 minutos.'
            ]}
            reservationNumber="33 15 98 0000 ext. 807"
            contactInfo={[
              'Bibiana Pérez',
              'perez@inverhoteles.com',
              '+52 1 33 1598 9000'
            ]}
            optionalTitle="Datos de contacto"
            reservationLink={
              'https://www.hilton.com/es/book/reservation/deeplink/?ctyhocn=GDLEXHX&groupCode=CHHITO&arrivaldate=2023-03-16&departuredate=2023-03-18&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT'
            }
            evento="ITO"
            wid={false}
            cuadrup={[
              'Habitación sencilla (1 cama King para 1 o 2 personas)',
              'Habitación doble (2 camas matrimoniales para 1 hasta 4 personas)'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="right">
          <HotelCard
            name={'livUp'}
            image={'/assets/iivup.jpg'}
            benefits={[
              'Desayuno americano tipo buffet, en el Holiday Inn Express ITESO.',
              'Cocina completa y equipada',
              'Gimnasio',
              'Estacionamiento techado',
              'Área de juegos',
              'Roof garden',
              'Cancha de usos múltiples',
              'Área de estudio',
              'Recepción y resguardo de paquetes',
              'Propina',
              'Impuestos'
            ]}
            hotelLink={'https://tuespaciodevida.livup.mx/'}
            dprice="1,517,50 MXN"
            tprice="1,993.50 MXN"
            cprice="2,469.50 MXN"
            time={[
              'ITESO: Caminando, 15 minutos.',
              'Holiday Inn Express Guadalajara ITESO: Caminando, 8 - 10 minutos.',
              'Aeropuerto Guadalajara: Coche, 15 – 30 minutos.'
            ]}
            reservationNumber="+52 1 33 2353 5578"
            contactInfo={['+52 1 33 3577 7244']}
            optionalTitle="Recepción"
            evento="ITO"
            wid={false}
            cuadrup={[
              'Habitación sencilla (cama matrimonial para 1 o 2 personas)',
              'Habitación doble (4 camas individuales para 1 hasta 4 personas)'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="right">
          <HotelCard
            name={'WYNDHAM GARDEN GUADALAJARA EXPO'}
            image={'/assets/wid.jpg'}
            benefits={[
              'Desayuno americano tipo buffet',
              'Impuestos',
              'Internet inalambrico',
              'Estacionamiento de cortesia',
              'Propina',
              'Impuestos'
            ]}
            hotelLink={
              'https://www.wyndhamhotels.com/wyndham-garden/guadalajara-mexico/wyndham-garden-guadalajara-expo/rooms-rates?hotel_id=48891 '
            }
            dprice="1,136,70 MXN"
            tprice="1,362.80 MXN"
            cprice="1,588.90 MXN"
            time={[
              'ITESO: Coche, 15 – 20 minutos',
              'Aeropuerto Guadalajara: Coche, 30 – 40 minutos'
            ]}
            contactInfo={[
              '3331222020 EXT. 236 Y 237',
              'reservaciones@wgardengdlexpo.mx'
            ]}
            optionalTitle="Reservaciones para SEGMENTO ABIERTO ACM // ITESO MARZO 2023:"
            wid={true}
            evento="ACM CONCURSO / ITESO"
            cuadrup={[
              'Habitación sencilla (Habitación Estándar 1 camas)',
              'Habitación doble, triple, cuádruple (Habitación Estándar 2 camas)'
            ]}
          />
        </BoardCard>
      </TextCascadeBoard>
      <Footer />
    </Box>
  )
}

export default Hotel
