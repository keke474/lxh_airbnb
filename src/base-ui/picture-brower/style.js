import styled from "styled-components";

export const BrowerWrapper = styled.div`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: #333;
z-index: 999;  // -1 1 9 99 999
display: flex;
flex-direction: column;

.top {
    display: flex;
    height: 86px;
    justify-content: flex-end;
    align-items: center;
    .close-btn {
      margin-right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 1;
    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh; 

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      } 
      /* 动画的样式 */
      .pic-enter {
        transform: translateX(${ (props) => (props.$isnext ? "100%" : "-100%") });
        opacity: 0;
      }
      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
   }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      /* 这里得是距离bottom，这样动画效果才是往下落 */
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        /* 高度在变化时，加一个过渡动画 */
        transition: height 300ms ease;
        height: ${ (props) => (props.$showList ? "67px" : "0") };

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`