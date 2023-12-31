import React, { Component } from 'react'
import { Box } from '@mui/material'

class NoRowsOverlay extends Component {
  render() {
    return (
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', width: '100%', height: '100%', alignItems: 'center' }}>
        <Box component="img" sx={{ maxWidth: '180px', opacity: '35%' }} src="assets/images/nodata.png" alt="nodata" />
      </Box>
    )
  }
}
export default NoRowsOverlay
