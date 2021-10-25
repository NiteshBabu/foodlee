import styled from "styled-components/native"

export const Spacer = styled.View`
  ${({type}) => `margin-${type}`} : ${({pixels}) => `${pixels}px`}
`
Spacer.defaultProps ={type : "top" , pixels : "5"}