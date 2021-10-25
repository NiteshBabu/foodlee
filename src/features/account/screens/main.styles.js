import styled from "styled-components/native"

export const MainContainer = styled.View`
  flex : 1;
` 

export const Backdrop = styled.ImageBackground.attrs({ source : require("./backdrop.jpg")})`
  flex : 1;
  opacity : .6
` 