import styled from "styled-components/native";

const defaultTextStyles = (theme) =>`
  font-family : ${theme.fonts.body};
  font-weight : ${theme.fontWeights.regular};
  color : ${theme.colors.text.primary};
  flex-wrap : wrap;
  margin-bottom : 0;
  margin-top : 0;
`

const body = (theme) =>`
  font-size : ${theme.fontSizes.body};
  color  : tomato;
`

const caption = (theme) =>`
  font-size : ${theme.fontSizes.caption};
  font-family : ${theme.fonts.monospace};
  `
  
const title = (theme) =>`
  font-size : ${theme.fontSizes.title};
  font-family : ${theme.fonts.heading};
`
const danger = (theme) =>`
  font-size : ${theme.fontSizes.caption};
  font-family : ${theme.fonts.monospace};
  color : crimson;
`
const success = (theme) =>`
  font-size : ${theme.fontSizes.caption};
  font-family : ${theme.fonts.monospace};
  color : limegreen;
`
const textType = {
  body,
  caption,
  title,
  danger,
  success
}

export const Text = styled.Text`
  ${({theme}) => defaultTextStyles(theme)}
  ${({type, theme}) => textType[type] && textType[type](theme)}
  ${({styles}) => styles}
  ${({ center }) => center && "text-align : center;"}
`

Text.defaultProps = {
  type : "body"
}