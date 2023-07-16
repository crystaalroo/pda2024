import Box from '@mui/material/Box'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import TopBanner from '../../components/TopBanner'
import type { NextPage } from 'next'
import BoardCard from '../../components/BoardCard'
import MainBoard from '../../components/MainBoard'
import {
  List,
  ListItem,
  Typography,
  Link as ExternalLink,
  SxProps,
  Theme
} from '@mui/material'
import { PaymentTable } from '../../components/PaymentTable'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

interface Props {
  children: React.ReactNode
  sx?: SxProps<Theme> | undefined
}
const Item: React.FC<Props> = ({ children, sx }) => {
  return (
    <ListItem sx={{ ...sx }}>
      <Typography variant="body1" component="div" color={'text.secondary'}>
        {children}
      </Typography>
    </ListItem>
  )
}
const Payment: NextPage = () => {
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
            color={'primary.contrastText'}
            sx={{
              margin: 'auto 20px 20px 20px',
              display: 'block',
              width: '100%'
            }}
          >
            PAGOS
          </Typography>
        </BoardCard>
        <BoardCard barSide="left">
          <Typography color={'text.secondary'} sx={{ width: '100%' }}>
            La participación en el Concurso Regional 2022 del ICPC en México, a
            celebrarse el 18 de marzo de 2023, tendrá costo. El costo de
            participación se ha establecido de forma INDIVIDUAL, en dependencia
            del rol que tenga cada participante en el concurso. Los roles y
            costos asociados son los siguientes:
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="right"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal'
          }}
        >
          <PaymentTable />
        </BoardCard>
        <BoardCard barSide="right" sx={{ padding: 0 }}>
          <Typography color={'text.secondary'} sx={{ width: '100%' }}>
            Dado que el ITESO es una Donataria Autorizada, los ingresos
            registrados no generan IVA y, por tanto, la factura generada no
            tendrá este concepto.
          </Typography>
        </BoardCard>
        <BoardCard barSide="right">
          <List
            sx={{ listStyleType: 'disc', color: 'text.secondary', padding: 0 }}
          >
            <Typography color={'text.secondary'}>
              Comentarios sobre costos y pagos:
            </Typography>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              El pago INCLUYE TODOS los consumos considerados dentro de la
              agenda y TODO el material que se entrega a cada participante de
              acuerdo con su rol.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              El pago NO INCLUYE el hospedade, la transportación desde la
              institución o ciudad de origen a la institución sede, las
              transportaciones entre la sede y los hoteles donde se hospeden y,
              en general, cualquier otro gasto que esté fuera de la agenda.
              Busque mas información sobre el hospedaje en la opción
              correspondiente en este sitio.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Se recomienda el hospedaje en los hoteles sede publicados, sobre
              todo en los cercanos al campus ITESO, dado que se tendrían mejores
              tarifas y no se incurriría en muchos gastos de transportación
              local.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Los equipos participantes han sido promovidos desde el Gran Premio
              de México 2022 y están en estatus PENDIENTE. Para que el estatus
              del equipo sea cambiado a ACEPTADO, todos los integrantes
              registrados del equipo tanto la COMPOSICIÓN OFICIAL (Entrenador +
              3 Concursantes) como los INTEGRANTES ADICIONALES (Co Entrenador,
              Reservas, Asistentes), deben pagar de acuerdo con su rol en el
              concurso.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              En caso de que un equipo modificar los integrantes que lo forman,
              sobre todo eliminando INTEGRANTES ADICIONALES, debe notificarlo a{' '}
              <ExternalLink key="Sede" color="text.primary">
                guillot@icpcmexico.org
              </ExternalLink>
              , para hacer el ajuste en el sistema de registro y considerarlo
              para el pago de los integrantes asociados al equipo y para el
              cambio de estatus de este.{' '}
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Una vez que el estatus del equipo haya cambiado a ACEPTADO, NO se
              podrán agregar nuevos integrantes al mismo. En caso de que exista
              interés en agregar otro participante al evento por parte la
              institución o comunidad a la que pertenece el equipo, deberá
              hacerlo considerando el rol y la tarifa de Director de Sede,
              enviando la petición a{' '}
              <ExternalLink key="Sede" color="text.primary">
                guillot@icpcmexico.org.
              </ExternalLink>
              .
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              En caso de que un participante esté registrado en DOS o MAS
              EQUIPOS, ej.: si es ENTRENADOR de un equipo y CO ENTRENADOR DE
              otros, solo deberá pagar una vez, considerando la tarifa más
              económica. En el ejemplo debería pagar solo UNA VEZ en el rol de
              ENTRENADOR.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              De igual manera si tiene más de un rol en el evento, ej.: si es
              ENTRENADOR de un equipo y además es DIRECTOR DE SEDE solo deberá
              pagar una vez, considerando la tarifa más económica. En el ejemplo
              debería pagar solo UNA VEZ en el rol de ENTRENADOR, sin embargo,
              podría participar en la reunión de DIRECTORES DE SEDE, por lo
              tanto, debería confirmar su participación y comentar en el correo
              de confirmación que ya ha pagado como ENTRENADOR. Es importante
              que esto sería verificado y la referencia es como esté la
              información registrada en el ICPC Website.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Recomendamos que se haga un pago por TODO EL EQUIPO, sumando lo
              correspondiente a cada integrante.
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Si requiere la factura para el mismo mes que se realizó el pago,
              le recomendamos que no haga el pago en los días finales de enero o
              febrero, sino que lo haga con margen suficiente (de preferencia,
              los días iniciales del mes de febrero).
            </Item>
          </List>
        </BoardCard>
        <BoardCard barSide="left">
          <List
            sx={{
              listStyleType: 'decimal',
              padding: 0,
              color: 'text.secondary'
            }}
          >
            <Typography color={'text.secondary'}>
              Instrucciones para el Pago y Facturación.
            </Typography>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Enviar la Constancia de Situación Fiscal de la institución o
              persona física al correo{' '}
              <ExternalLink key="Sede" color="text.primary">
                zulma@iteso.mx
              </ExternalLink>
              . Con esta información se generará un número de expediente
              (referencia) para la institución o persona física a la cual se
              facturará. (Copiar en el correo a{' '}
              <ExternalLink key="Sede" color="text.primary">
                navila@iteso.mx
              </ExternalLink>{' '}
              y{' '}
              <ExternalLink key="Sede" color="text.primary">
                acm@iteso.mx
              </ExternalLink>
              )
            </Item>
            <Item
              sx={{
                textAlign: 'justify',
                display: 'list-item',
                color: 'text.secondary'
              }}
            >
              Una vez se cuente con el número de expediente se puede realizar el
              pago. Le recomendamos, en el caso de los EQUIPOS, hacer un solo
              pago sumando los correspondiente a todos los integrantes. Las
              alternativas para esto son:
              <List
                sx={{ listStyleType: 'lower-alpha', color: 'text.secondary' }}
              >
                <Item
                  sx={{
                    textAlign: 'justify',
                    display: 'list-item'
                  }}
                >
                  <strong>
                    Para instituciones o personas sin cuenta BBVA BANCOMER
                  </strong>
                  <List
                    sx={{
                      listStyleType: 'lower-roman',
                      color: 'text.secondary'
                    }}
                  >
                    <Item
                      sx={{
                        textAlign: 'justify',
                        display: 'list-item'
                      }}
                    >
                      Desde el portal del banco de cada persona que pagará, se
                      debe seleccionar PAGO INTERBANCARIO con el número CLABE:
                      <strong> 012914002000800120</strong>.
                    </Item>
                    <Item
                      sx={{
                        textAlign: 'justify',
                        display: 'list-item'
                      }}
                    >
                      En el concepto de pago, se debe poner el número de
                      referencia, incluyendo los tres números del verificador,
                      sin espacios ni guiones entre sí: &lt;referencia&gt;.
                    </Item>
                    <Item
                      sx={{
                        textAlign: 'justify',
                        display: 'list-item'
                      }}
                    >
                      Al final, el concepto de pago debe quedar con el número de
                      &lt;referencia&gt;. sin espacios ni guiones.
                    </Item>
                    <Item
                      sx={{
                        textAlign: 'justify',
                        display: 'list-item'
                      }}
                    >
                      Si el portal del banco emisor necesita forzosamente
                      teclear un número de referencia, favor de poner{' '}
                      <strong>80012 </strong>. Si el portal no lo tiene como
                      dato obligatorio, favor de dejarlo en blanco.
                    </Item>
                  </List>
                </Item>
                <Item
                  sx={{
                    textAlign: 'justify',
                    display: 'list-item'
                  }}
                >
                  <strong>
                    Para instituciones o personas cliente avanzado BBVA
                    BANCOMER.
                  </strong>
                  <List
                    sx={{
                      listStyleType: 'lower-roman',
                      color: 'text.secondary'
                    }}
                  >
                    <Item
                      sx={{
                        textAlign: 'justify',
                        display: 'list-item'
                      }}
                    >
                      Si eres cliente avanzado de BBVA BANCOMER, en donde pagas
                      tus servicios (Tel. Gas. Agua. Luz etc.) Encontrarás un
                      ICONO CIE dar doble clic, te abrirá una ventana para
                      registrar el <strong>CONVENIO CIE 80012</strong>, después
                      te solicitará la &lt;referencia&gt;, deberás digitarla sin
                      espacios ni guiones.
                    </Item>
                  </List>
                </Item>
                <Item
                  sx={{
                    textAlign: 'justify',
                    display: 'list-item'
                  }}
                >
                  <strong>
                    Pago EXPRESS, con tarjeta VISA, MASTERCARD y AMERICAN
                    EXPRESS
                  </strong>{' '}
                  en la liga{' '}
                  <ExternalLink key="Sede" color="text.primary">
                    https://pagoexpress.iteso.mx/
                  </ExternalLink>
                  . Se recomienda el navegador Mozilla Firefox. Se solicitará
                  &lt;referencia&gt;.
                </Item>
              </List>
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              INDEPENDIENTEMENTE DE LA FORMA DE PAGO ELEGIDA, ENVÍA EL
              COMPROBANTE DE PAGO AL CORREO{' '}
              <ExternalLink key="Sede" color="text.primary">
                guillot@icpcmexico.org
              </ExternalLink>{' '}
            </Item>
            <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
              Para solicitar la factura, se debe enviar la petición con la
              referencia al correo{' '}
              <ExternalLink key="Sede" color="text.primary">
                facturacion@iteso.mx
              </ExternalLink>{' '}
              (Copiar en el correo a{' '}
              <ExternalLink key="Sede" color="text.primary">
                navila@iteso.mx
              </ExternalLink>{' '}
              y{' '}
              <ExternalLink key="Sede" color="text.primary">
                acm@iteso.mx
              </ExternalLink>
              )
            </Item>
          </List>
        </BoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Payment
