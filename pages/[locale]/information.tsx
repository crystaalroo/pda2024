import Box from '@mui/material/Box'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import TopBanner from '../../components/TopBanner'
import type { NextPage } from 'next'
import BoardCard from '../../components/BoardCard'
import {
  List,
  ListItem,
  Typography,
  SxProps,
  Theme,
  Link as ExternalLink
} from '@mui/material'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'
import { useTranslation } from 'react-i18next'
import TextCascadeBoard from '../../components/TextCascadeBoard'

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
const Information: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <TextCascadeBoard
        title={t('informatio.sub')}
        menu={[
          t('informatio.sec1'),
          t('informatio.sec2'),
          t('informatio.sec3'),
          t('informatio.sec4')
        ]}
        intro={''}
      >
        <BoardCard barSide="right">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%'
            }}
          >
            <Typography
              variant="h4"
              width={'100%'}
              align="center"
              paddingBottom={'35px'}
              color={'primary.contrastText'}
            >
              {t('informatio.sec1')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('informatio.linea1')}
            </Typography>
            <ExternalLink
              key="icpc"
              href="https://icpc.global/worldfinals/rules"
              target={'blank'}
            >
              <Typography
                variant="body1"
                component="div"
                color={'text.secondary'}
              >
                https://icpc.global/worldfinals/rules
              </Typography>
            </ExternalLink>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('informatio.linea3')}
            </Typography>
          </Box>
        </BoardCard>
        <BoardCard barSide="right">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%'
            }}
          >
            <Typography
              variant="h4"
              width={'100%'}
              align="center"
              paddingBottom={'35px'}
              color={'primary.contrastText'}
            >
              {t('informatio.sec2')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              To be announced
            </Typography>
          </Box>
        </BoardCard>
        <BoardCard barSide="right">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%'
            }}
          >
            <Typography
              variant="h4"
              width={'100%'}
              align="center"
              paddingBottom={'35px'}
              color={'primary.contrastText'}
            >
              {t('informatio.sec3')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('informatio.linea4')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('informatio.linea5')}
            </Typography>
          </Box>
        </BoardCard>
        <BoardCard barSide="right">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              width: '100%'
            }}
          >
            <Typography
              variant="h4"
              width={'100%'}
              align="center"
              paddingBottom={'35px'}
              color={'primary.contrastText'}
            >
              {t('informatio.sec4')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('informatio.linea7')}
            </Typography>
            <List
              sx={{
                listStyleType: 'disc',
                color: 'text.secondary',
                padding: 0,
                width: '100%'
              }}
            >
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('informatio.linea8')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('informatio.linea9')}
              </Item>
            </List>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('informatio.linea10')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('informatio.linea11')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('informatio.linea12')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('informatio.linea13')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('informatio.linea14')}
            </Typography>
          </Box>
        </BoardCard>
      </TextCascadeBoard>
      <Footer />
    </Box>
  )
}

export default Information
