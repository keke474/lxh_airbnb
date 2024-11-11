import styled from 'styled-components'

export const RoomsWrapper = styled.div`
padding: 30px 20px;
position: relative;
margin-top: 128px;
.roomlist{
  display: flex;
  flex-wrap: wrap;
}
.title{
  font-size: 22px;
  font-weight: 700;
  color: #222;
  margin: 0 0 10px 10px;
}
> .cover{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:rgba(255,255,255,.8);
    }
`