import styled from "styled-components";

export const LeftWrapper = styled.div`
flex: 1;
color: ${ (props) =>
    props.theme.isAlpha ? "#fff" : props.theme.color.primaryColor };
/* display: flex;
align-items: center; */
.logo{
  cursor: pointer;
  margin-left: 24px;
}
` 