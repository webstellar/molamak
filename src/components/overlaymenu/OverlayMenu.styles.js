import styled from "styled-components"

export const MoImg = styled.img`
  width: 220px;
  height: 75px;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? "1" : "0")};
  transform: ${props =>
    props.menuOpen ? "translateX(0%)" : "translateX(-100%)"};
  z-index: 100000;
  background: #fff;
  left: 0px;
  padding: 20px;
  transition: all 0.3s ease;

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #000;
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 40px;

    .overlayMenu {
      text-align: center;
      list-style-type: none;
      margin: 0;
    }
  }

  .closeButton {
    position: absolute;
    top: 50px;
    right: 50px;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all 1s ease;
    outline: none;

    :hover {
      transform: rotate(180deg);
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`
