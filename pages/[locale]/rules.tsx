import Box from '@mui/material/Box'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import TopBanner from '../../components/TopBanner'
import type { NextPage } from 'next'
import BoardCard from '../../components/BoardCard'
import { List, ListItem, Typography, SxProps, Theme } from '@mui/material'
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
const Payment: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <Box position={'relative'} sx={{ bgcolor: 'background.default' }}>
      <TopBanner />
      <NavBar />
      <TextCascadeBoard
        title={t('rules.sub')}
        menu={[
          t('rules.sec1'),
          t('rules.sec2'),
          t('rules.sec3'),
          t('rules.sec4'),
          t('rules.sec5'),
          t('rules.sec6'),
          t('rules.sec7'),
          t('rules.sec8')
        ]}
        intro={t('rules.intro')}
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
              {t('rules.sec1')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('rules.text1')}
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
                {t('rules.sec1list1')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec1list2')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec1list3')}
              </Item>
            </List>
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
              {t('rules.sec2')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('rules.text2')}
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
                {t('rules.sec2list1')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec2list2')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec2list3')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec2list4')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec2list5')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec2list6')}
              </Item>
            </List>
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
              {t('rules.sec3')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('rules.text3')}
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
                {t('rules.sec3list1')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec3list2')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec3list3')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec3list4')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec3list5')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec3list6')}
              </Item>
            </List>
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
              {t('rules.sec4')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('rules.text4')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('rules.text5')}
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
                {t('rules.sec4list1')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec4list2')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec4list3')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec4list4')}
              </Item>
            </List>
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
              {t('rules.sec5')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('rules.text6')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('rules.text7')}
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
                {t('rules.sec5list1')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec5list2')}
              </Item>
            </List>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('rules.text8')}
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
              {t('rules.sec6')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('rules.text9')}
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
              {t('rules.sec7')}
            </Typography>
            <Typography variant="body1" color={'primary.contrastText'}>
              {t('rules.text10')}
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
              {t('rules.sec8')}
            </Typography>
            <List
              sx={{
                listStyleType: 'counter-style',
                color: 'text.secondary',
                padding: 0,
                width: '100%'
              }}
            >
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec8list1')}
              </Item>
              <Item>
                <List
                  sx={{
                    listStyleType: 'circle',
                    color: 'text.secondary',
                    padding: '0',
                    width: '100%'
                  }}
                >
                  <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                    {t('rules.sec8list11')}
                  </Item>
                  <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                    {t('rules.sec8list12')}
                  </Item>
                  <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                    {t('rules.sec8list13')}
                  </Item>
                  <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                    {t('rules.sec8list14')}
                  </Item>
                  <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                    {t('rules.sec8list15')}
                  </Item>
                </List>
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec8list2')}
              </Item>
              <Item>
                <List
                  sx={{
                    listStyleType: 'circle',
                    color: 'text.secondary',
                    padding: 0,
                    width: '100%'
                  }}
                >
                  <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                    {t('rules.sec8list21')}
                  </Item>
                  <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                    {t('rules.sec8list22')}
                  </Item>
                  <Item>
                    <List
                      sx={{
                        listStyleType: 'square',
                        color: 'text.secondary',
                        padding: 0,
                        width: '100%'
                      }}
                    >
                      <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                        {t('rules.sec8list221')}
                      </Item>
                      <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                        {t('rules.sec8list222')}
                      </Item>
                      <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                        {t('rules.sec8list223')}
                      </Item>
                      <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                        {t('rules.sec8list224')}
                      </Item>
                      <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                        {t('rules.sec8list225')}
                      </Item>
                    </List>
                  </Item>
                </List>
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec8list3')}
              </Item>
              <Item>
                <List
                  sx={{
                    listStyleType: 'circle',
                    color: 'text.secondary',
                    padding: 0,
                    width: '100%'
                  }}
                >
                  <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                    {t('rules.sec8list31')}
                  </Item>
                  <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                    {t('rules.sec8list32')}
                  </Item>
                  <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                    {t('rules.sec8list33')}
                  </Item>
                  <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                    {t('rules.sec8list34')}
                  </Item>
                </List>
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec8list4')}
              </Item>
              <Item sx={{ textAlign: 'justify', display: 'list-item' }}>
                {t('rules.sec8list5')}
              </Item>
            </List>
          </Box>
        </BoardCard>
      </TextCascadeBoard>
      <Footer />
    </Box>
  )
}

export default Payment
