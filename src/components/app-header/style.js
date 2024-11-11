import styled from "styled-components";

export const HeaderWrapper = styled.div`
/* position: fixed; */

/* border-bottom: 1px solid ${ (props) => props.theme.isAlpha ? "rgba(255, 255, 255, 0)" : "#eee" }; */

.content{
  position: relative;
  z-index: 19;
  transition: all 250ms ease;
  background-color: ${ (props) => props.theme.isAlpha ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)" };
  border-bottom: 1px solid #eee;
  border-bottom-color: ${ (props) => props.theme.isAlpha ? "rgba(233, 233, 233, 0)" : "rgba(233, 233, 233, 1)" };

  .top{
    height: 80px;
    display: flex;
    align-items: center;
  }
  /* .search-area{
    height: 100px;
  } */
}

&.fixed{
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 99;
}
.cover{
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.3);
}
`

export const SearchWrapper = styled.div`
height: ${ props => props.$isSearch ? '100px' : '0px' };
transition: height 250ms ease;

`