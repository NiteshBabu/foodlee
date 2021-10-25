import React from "react"
import styled from "styled-components/native"
import { StatusBar } from "react-native"

const Container = styled.SafeAreaView`
  flex : 1;
  marginTop : ${StatusBar.currentHeight}px;
`

export const SafeContainer = ({children}) =>{
  return (
    <Container>
      {children}
    </Container>
  )
}