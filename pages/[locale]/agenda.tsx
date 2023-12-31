import Box from '@mui/material/Box'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import TopBanner from '../../components/TopBanner'
import AgendaTable, { RowData } from '../../components/Agenda'
import AgendaTableOptional, {
  RowData as RowDataO
} from '../../components/AgendaOptional'
import MainBoard from '../../components/MainBoard'
import BoardCard from '../../components/BoardCard'
import { Typography } from '@mui/material'
import { GetStaticProps, NextPage } from 'next'
import csvParser from 'csv-parser'
import fs from 'fs'
import { getStaticPaths, getI18nProps } from '../../lib/getStatic'
import { useTranslation } from 'react-i18next'

export { getStaticPaths }

interface Props {
  agenda14: RowData[]
  agenda15: RowData[]
  agenda16: RowData[]
  agenda17: RowData[]
  agenda18: RowData[]
  agenda18a: RowDataO[]
  agenda19: RowDataO[]
}
const Agenda: NextPage<Props> = ({
  agenda14,
  agenda15,
  agenda16,
  agenda17,
  agenda18,
  agenda18a,
  agenda19
}) => {
  const { t } = useTranslation('common')
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <MainBoard
        sx={{ padding: { md: '100px 50px 0 50px', xs: '80px 0 0 0' } }}
      >
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
          >
            {t('schedule.dates.march14')}
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="none"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal'
          }}
        >
          <AgendaTable Rows={agenda14} />
        </BoardCard>
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
          >
            {t('schedule.dates.march15')}
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="none"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <Typography variant="body1" component="div" color={'text.secondary'}>
            {t('schedule.message')}
          </Typography>
          <AgendaTable Rows={agenda15} />
        </BoardCard>
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
          >
            {t('schedule.dates.march16')}
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="none"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal'
          }}
        >
          <AgendaTable Rows={agenda16} />
        </BoardCard>
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
          >
            {t('schedule.dates.march17')}
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="none"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal'
          }}
        >
          <AgendaTable Rows={agenda17} />
        </BoardCard>
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
          >
            {t('schedule.dates.march18')}
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="none"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          <Typography variant="body1" component="div" color={'text.secondary'}>
            {t('schedule.message')}
          </Typography>
          <AgendaTable Rows={agenda18} />
          <AgendaTableOptional Rows={agenda18a} />
        </BoardCard>
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="h4"
            component="div"
            align="center"
            color={'primary.contrastText'}
          >
            {t('schedule.dates.march19')}
          </Typography>
        </BoardCard>
        <BoardCard
          barSide="none"
          sx={{
            width: '100%',
            overflow: 'scroll',
            alignItems: 'normal',
            justifyContent: 'normal'
          }}
        >
          <AgendaTableOptional Rows={agenda19} />
        </BoardCard>
        <BoardCard barSide="none" sx={{ padding: 0 }}>
          <Typography
            variant="body1"
            component="div"
            align="center"
            color="#F19A3E"
          >
            <b>{t('schedule.activities.notincluded')} </b>
          </Typography>
        </BoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

async function parseCSV(fileName: string): Promise<RowData[]> {
  return await new Promise((resolve, reject) => {
    const rows: RowData[] = []

    fs.createReadStream(fileName)
      .pipe(csvParser({ headers: false }))
      .on('data', (row: any) => {
        rows.push({
          r1: row[0],
          r2: row[1],
          r3: row[2],
          r4: row[3],
          r5: row[4],
          r6: row[5],
          r7: row[6],
          r8: row[7]
        })
        // console.log(row)
      })
      .on('end', () => {
        resolve(rows)
      })
      .on('error', (error: Error) => {
        reject(error)
      })
  })
}

export const getStaticProps: GetStaticProps<Props> = async ctx => {
  let rows14: RowData[] = []
  let rows15: RowData[] = []
  let rows16: RowData[] = []
  let rows17: RowData[] = []
  let rows18: RowData[] = []
  let rows18a: RowDataO[] = []
  let rows19: RowDataO[] = []
  await parseCSV('./public/agenda14.csv')
    .then((parsedRows: RowData[]) => {
      rows14 = parsedRows
      // console.log(rows17)
    })
    .catch((error: Error) => {
      console.error(error)
    })
  await parseCSV('./public/agenda15.csv')
    .then((parsedRows: RowData[]) => {
      rows15 = parsedRows
      // console.log(rows17)
    })
    .catch((error: Error) => {
      console.error(error)
    })
  await parseCSV('./public/agenda16.csv')
    .then((parsedRows: RowData[]) => {
      rows16 = parsedRows
      // console.log(rows17)
    })
    .catch((error: Error) => {
      console.error(error)
    })
  await parseCSV('./public/agenda17.csv')
    .then((parsedRows: RowData[]) => {
      rows17 = parsedRows
      // console.log(rows17)
    })
    .catch((error: Error) => {
      console.error(error)
    })
  await parseCSV('./public/agenda18.csv')
    .then((parsedRows: RowData[]) => {
      rows18 = parsedRows
      // console.log(rows17)
    })
    .catch((error: Error) => {
      console.error(error)
    })
  await parseCSV('./public/agenda18a.csv')
    .then((parsedRows: RowDataO[]) => {
      rows18a = parsedRows
      // console.log(rows17)
    })
    .catch((error: Error) => {
      console.error(error)
    })
  await parseCSV('./public/agenda19.csv')
    .then((parsedRows: RowDataO[]) => {
      rows19 = parsedRows
      // console.log(rows17)
    })
    .catch((error: Error) => {
      console.error(error)
    })
  const i18nProps = await getI18nProps(ctx, ['common'])
  return {
    props: {
      ...i18nProps,
      agenda14: rows14,
      agenda15: rows15,
      agenda16: rows16,
      agenda17: rows17,
      agenda18: rows18,
      agenda18a: rows18a,
      agenda19: rows19
    }
  }
}

export default Agenda
