import React from 'react'
import { WebView } from "react-native-webview"
import { Text } from '../typography/text.component'
import styled from "styled-components/native"
import { Image } from 'react-native'

const MiniRestaurantInfoContainer = styled.View`
  height : 100px;
  width : 130px;
  margin-bottom : 40px;
`
function MiniRestaurantInfo({ restaurant, isMap = false }) {
  const miniInfo = isMap ? 
    <WebView source={{ uri: restaurant.photos[0] }} /> :
    <Image source={{ uri: restaurant.photos[0] }} style={{ height: "80%", width: "100%" }} />
  return (
    <MiniRestaurantInfoContainer>
      {miniInfo}
      <Text center type="caption">{restaurant.name}</Text>
    </MiniRestaurantInfoContainer>
  )
}

export default MiniRestaurantInfo