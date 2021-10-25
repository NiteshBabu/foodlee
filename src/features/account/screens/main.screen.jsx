import React from 'react'
import { Button } from 'react-native-paper'
import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'
import { Backdrop, MainContainer } from './main.styles'


function MainScreen() {
  return (
    <MainContainer>
      <Backdrop>
        <Spacer type="top" pixels="300" />
        <Button mode="contained" icon="lock-open-outline" compact disabled color="tomato">cool</Button>
        <Spacer type="top" pixels="20" />
        <Button>dude</Button>
      </Backdrop>
    </MainContainer>
  )
}

export default MainScreen
