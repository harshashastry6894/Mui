import { Stack, Button, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material'
import React from 'react'

const MuiButton = () => {
  return (
    <Stack spacing={4}>
    <Stack spacing={2} direction='row'>
      <Button variant="text" href='https://mui.com/material-ui/customization/default-theme/'>text</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="contained">contained</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
      <Button variant="contained" color='primary'>primary</Button>
      <Button variant="contained" color='secondary'>secondary</Button>
      <Button variant="contained" color='error'>error</Button>
      <Button variant="contained" color='warning'>warning</Button>
      <Button variant="contained" color='success'>success</Button>
    </Stack>
    <Stack display='block' spacing={2} direction='row'>
      <Button variant="contained" size='small'>small</Button>
      <Button variant="contained" size='medium'>medium</Button>
      <Button variant="contained" size='large'>large</Button>
    </Stack>
    <Stack spacing={2} direction='row'>
      <Button variant="contained" startIcon={<SendIcon />} disableRipple>send</Button>
      <Button variant="contained" endIcon={<SendIcon />} disableElevation>send</Button>
      <IconButton aria-label='send' color='success' size='small'><SendIcon /></IconButton>
    </Stack>
    <Stack direction='row' orientation='vertical' size='small' color='secondary'>
      <ButtonGroup variant="outlined">
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
      </ButtonGroup>
    </Stack>
    </Stack>
  )
}

export default MuiButton
