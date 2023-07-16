import Box from '@mui/material/Box'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import TopBanner from '../../components/TopBanner'
import type { NextPage } from 'next'
import TextCascadeBoard from '../../components/TextCascadeBoard'
import BoardCard from '../../components/BoardCard'
import UniversityTeamsGrid, {
  Props as UniversityTeamsGridProps
} from '../../components/UniversityTeamsGrid'
import csvToJson from 'csvtojson'
import { getStaticPaths, getI18nProps } from '../../lib/getStatic'

export { getStaticPaths }

interface Props {
  dataByUniversity: Record<string, UniversityTeamsGridProps['cards']>
}

const Participants: NextPage<Props> = ({ dataByUniversity }) => {
  const universities = Object.keys(dataByUniversity).sort()
  universities.push(
    universities.splice(universities.indexOf('Invitados'), 1)[0]
  )
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <TextCascadeBoard
        title="PARTICIPANTES"
        menu={universities}
        turnOffStickyMenu={true}
      >
        {universities.map(uni => {
          return (
            <BoardCard barSide="right" key={uni}>
              <UniversityTeamsGrid
                university={uni}
                cards={dataByUniversity[uni]}
              ></UniversityTeamsGrid>
            </BoardCard>
          )
        })}
      </TextCascadeBoard>
      <Footer />
    </Box>
  )
}

export async function getStaticProps(ctx: any): Promise<{ props: Props }> {
  const data = await csvToJson().fromFile('public/teams/teams.csv')
  const dataByUniversity = data.reduce((acc, cur) => {
    if (!(cur.university in acc)) acc[cur.university] = []
    acc[cur.university].push({
      title: cur.name,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      image: `teams/${cur.img}`
    })
    return acc
  }, {})
  Object.keys(dataByUniversity).forEach(uni => {
    dataByUniversity[uni].sort((a: { title: string }, b: { title: string }) => {
      return a.title < b.title ? -1 : 1
    })
  })
  const i18nProps = await getI18nProps(ctx, ['common'])
  return { props: { ...i18nProps, dataByUniversity } }
}

export default Participants
