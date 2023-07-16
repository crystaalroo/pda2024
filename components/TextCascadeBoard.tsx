import * as React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import BoardCard from './BoardCard'
import Link from './Link'

interface Props {
  children: React.ReactNode
  title: string
  menu: string[]
  turnOffStickyMenu?: boolean
  intro?: string
}

const TextCascadeBoard: React.FC<Props> = (props: Props) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1380px',
        height: 'auto',
        padding: { md: '0 50px', xs: '0 10px' },
        margin: '0 auto',
        position: 'relative',
        display: 'flex',
        flexDirection: { sm: 'row', xs: 'column' },
        justifyContent: { sm: 'normal', xs: 'center' },
        alignItems: { sm: 'normal', xs: 'center' }
      }}
    >
      <Box // container for sticky
        sx={{
          paddingTop: { md: '300px', sm: '100px', xs: '50px' },
          width: { sm: '350px', xs: '200' },
          minHeight: '300px',
          height: 'auto',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            position: {
              sm:
                props.turnOffStickyMenu === null ||
                props.turnOffStickyMenu === false ||
                props.turnOffStickyMenu === undefined
                  ? 'sticky'
                  : 'static',
              xs: 'static'
            },
            width: '100%',
            top: '50px',
            left: 0,
            display: 'inline-block',
            padding: { sm: '0 0 100px 20px', xs: '0 0 0 20px' },
            borderColor: 'divider',
            borderStyle: 'solid',
            borderWidth: { sm: '0 0 0 2px', xs: '2px' }
          }}
        >
          <Typography variant="h5" color="primary.contrastText">
            {props.title}
          </Typography>
          <List>
            {props.menu.map(section => (
              <ListItem key={section} sx={{ paddingLeft: 0 }}>
                <Link href={`#${section}`} skipLocaleHandling={false}>
                  <ListItemButton sx={{ padding: 0 }}>
                    <ListItemIcon>
                      {/* <CircleIcon /> */}
                      <KeyboardArrowRightIcon
                        sx={{
                          color: 'primary.contrastText'
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography color="primary.contrastText" variant="button">
                        {section}
                      </Typography>
                    </ListItemText>
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box
        sx={{
          paddingTop: { md: '100px', sm: '50px', xs: '0px' },
          width: '100%',
          maxWidth: '1280px',
          height: 'auto',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box // right bar
          sx={{
            width: '1%',
            position: 'absolute',
            top: '100px',
            bottom: 0,
            right: 0,
            borderColor: 'divider',
            borderLeft: '1px solid'
          }}
        />
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {props.intro !== undefined && (
            <BoardCard barSide="none">
              <Typography variant="body1" color={'text.secondary'}>
                {props.intro}
              </Typography>
            </BoardCard>
          )}
          {React.Children.map(
            React.Children.toArray(props.children),
            (child, index) => {
              if (typeof child === 'object' && 'props' in child) {
                return <BoardCard {...child.props} id={props.menu[index]} />
              }
              return child
            }
          )}
        </Box>
      </Box>
    </Box>
  )
}
export default TextCascadeBoard
