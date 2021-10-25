import React from 'react'
import styled from "styled-components/native"
import { ActivityIndicator } from "react-native";

const IconContainer = styled.View`
  position : absolute;
  top : 50%;
  left : 50%;
  margin-left : -25px;
`

function LoadingIcon() {
  return (
    <IconContainer>
      <ActivityIndicator size="large" color="tomato" />
    </IconContainer>
  )
}

export default LoadingIcon
