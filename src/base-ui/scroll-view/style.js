import styled from "styled-components";

// export const ViewWrapper = styled.div`
//   /* 超出部分隐藏起来 */
//   overflow: hidden;
// .scroll-content{

//   display: flex;
//   /* 获取到正确的offsetLeft */
//   position: relative;

//   /* 元素移动更加平滑不突兀 */
//   transition: transform 250ms ease;
// }
// `


export const ViewWrapper = styled.div`
  /* 获取到正确的offsetLeft */
  position: relative;
  padding: 8px 0;

  .scroll {
      /* 超出部分隐藏起来 */
    overflow: hidden;
    .scroll-content {
      display: flex;
        /* 元素移动更加平滑不突兀 */
      transition: transform 250ms ease;
    }
  }

  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`