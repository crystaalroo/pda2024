import Box from '@mui/material/Box'

const TopBanner: React.FC = () => {
  return (
    <Box
      sx={{
        maxHeight: { md: '180px', xs: 'auto' },
        width: '100%',
        textAlign: 'center',
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box
        component="img"
        alt="Top Banner"
        src="/assets/header.png"
        sx={{
          height: '100%',
          maxHeight: '180px',
          maxWidth: '100%'
        }}
      />
    </Box>
  )
}

export default TopBanner
