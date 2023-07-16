import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Box } from '@mui/material'
import CarouselCard from './CarouselCard'
import { useTranslation } from 'next-i18next'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    i18n: 'pda2024',
    imgPath: '/assets/itesoi.jpg'
  },
  {
    i18n: 'carousel.equipos',
    imgPath: '/assets/teams.jpg'
  },
  {
    i18n: 'carousel.sede',
    imgPath: '/assets/scoreboard.png'
  },
  {
    i18n: 'carousel.gdl',
    imgPath: '/assets/gdl.webp'
  }
]

const Carousel: React.FC = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const { t } = useTranslation('common')

  const handleStepChange = (step: number): void => {
    setActiveStep(step)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => {
          const item = {
            ...step,
            label: t(step.i18n)
          }
          return (
            <div key={step.i18n}>
              {Math.abs(activeStep - index) <= 2 ? (
                <CarouselCard {...item} />
              ) : null}
            </div>
          )
        })}
      </AutoPlaySwipeableViews>
    </Box>
  )
}
export default Carousel
