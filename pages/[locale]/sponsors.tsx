import Box from '@mui/material/Box'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import TopBanner from '../../components/TopBanner'
import type { NextPage } from 'next'
import MainBoard from '../../components/MainBoard'
import BoardCard from '../../components/BoardCard'
import Diamond from '../../components/Diamond'
import Bronce from '../../components/Bronce'
import { Typography } from '@mui/material'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { useTranslation } from 'react-i18next'

const getStaticProps = makeStaticProps(['common'])
export { getStaticPaths, getStaticProps }

const Sponsor: NextPage = () => {
  const { t } = useTranslation('common')
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
            {t('statistics.sponsors')}
          </Typography>
        </BoardCard>
        <BoardCard barSide="none">
          <Bronce
            name={t('sponsors.levels.diamond')}
            per1="100%"
            per2="100%"
            image1="/assets/huaweid.png"
            link1="https://www.huawei.com/mx/"
            image2="/assets/jetbrains.png"
            link2="https://www.jetbrains.com/"
            benefits={[
              'sponsors.benefits.mainCompetitionSponsor',
              'sponsors.benefits.stagePresenceForAwardsAnnouncementsAndPhotography',
              'sponsors.benefits.speakerAtOpeningAndClosingCeremonies',
              'sponsors.benefits.videoAtOpeningCeremony',
              'sponsors.benefits.videoAtClosingCeremony',
              'sponsors.benefits.sponsorOfOneDinner',
              'sponsors.benefits.sponsorBoothDuringEventMoments',
              'sponsors.benefits.boothAtRegistration',
              'sponsors.benefits.dailyPresenceAtTheVenue',
              'sponsors.benefits.sponsorTalk30Minutes',
              'sponsors.benefits.6AccessesForExecutivesAndStaff'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Diamond
            name={t('sponsors.levels.platinum')}
            per="50%"
            image="/assets/logopda.jpg"
            link="https://www.huawei.com/mx/"
            benefits={[
              'sponsors.benefits.stagePresenceForAwardsAnnouncementsAndPhotography',
              'sponsors.benefits.videoAtOpeningCeremony',
              'sponsors.benefits.sponsorOfOneDinner',
              'sponsors.benefits.sponsorBoothDuringEventMoments',
              'sponsors.benefits.boothAtRegistration',
              'sponsors.benefits.dailyPresenceAtTheVenue',
              'sponsors.benefits.technicalTalkWithParticipants20Minutes',
              'sponsors.benefits.5AccessesForExecutivesAndStaff'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Diamond
            name={t('sponsors.levels.gold')}
            per="45%"
            image="/assets/logopda.jpg"
            link="https://www.huawei.com/mx/"
            benefits={[
              'sponsors.benefits.videoAtOpeningCeremony',
              'sponsors.benefits.sponsorBoothDuringEventMoments',
              'sponsors.benefits.dailyPresenceAtTheVenue',
              'sponsors.benefits.technicalTalkWithParticipants10Minutes',
              'sponsors.benefits.4AccessesForExecutivesAndStaff'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Diamond
            name={t('sponsors.levels.silver')}
            per="40%"
            image="/assets/logopda.jpg"
            link="https://www.huawei.com/mx/"
            benefits={[
              'sponsors.benefits.sponsorRecognitionAtLunch',
              'sponsors.benefits.sponsorBoothDuringEventMoments',
              'sponsors.benefits.technicalTalkWithParticipants5Minutes',
              'sponsors.benefits.3AccessesForExecutivesAndStaff'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Diamond
            name={t('sponsors.levels.bronze')}
            per="35%"
            image="/assets/logopda.jpg"
            link="https://www.huawei.com/mx/"
            benefits={[
              'sponsors.benefits.sponsorRecognitionAtBreakfastEachDay',
              'sponsors.benefits.sponsorBoothDuringEventMoments',
              'sponsors.benefits.2AccessesForExecutivesAndStaff'
            ]}
          />
        </BoardCard>
        <BoardCard barSide="none">
          <Diamond
            name={t('sponsors.levels.allies')}
            per="30%"
            image="/assets/logopda.jpg"
            link="https://www.huawei.com/mx/"
            benefits={[
              'sponsors.benefits.OpportunityToInteractWithParticipants',
              'sponsors.benefits.1AccessForExecutivesAndStaff'
            ]}
          />
        </BoardCard>
      </MainBoard>
      <Footer />
    </Box>
  )
}

export default Sponsor
