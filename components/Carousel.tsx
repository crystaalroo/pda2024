import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { Box } from '@mui/material'
import CarouselCard from './CarouselCard'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const images = [
  {
    label: 'PROGRAMADORES DE AMERICA 2024',
    imgPath: '/assets/itesoi.jpg'
  },
  {
    label: '60 EQUIPOS',
    imgPath: '/assets/teams.jpg'
  },
  {
    label: 'REUNIDOS EN UNA SEDE',
    imgPath: '/assets/scoreboard.png'
  },
  {
    label: 'CONOCE GUADALAJARA',
    imgPath: '/assets/gdl.webp'
  }
]

const Carousel: React.FC = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)

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
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <CarouselCard {...step} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  )
}
export default Carousel
