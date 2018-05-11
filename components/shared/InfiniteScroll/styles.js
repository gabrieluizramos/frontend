import styled from 'styled-components'
import {mobileMedia} from 'constants/media'
import * as colors from 'constants/colors'
import {desktopHeaderAndFilterHeight} from 'constants/dimensions'

export default styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  ${({mapOpenedOnMobile}) =>
    mapOpenedOnMobile &&
    `
      @media ${mobileMedia} {
        flex-direction: row;
        overflow-y: hidden;
        height: 100%;
        max-height: 100%;
      }
    `};
`

export const Footer = styled.footer`
  width: 100%;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  background-color: ${colors.offWhite};
  a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 25px 0;
    color: inherit;
    text-decoration: none;
  }
`

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;

  @media ${mobileMedia} {
    height: calc(100vh - ${desktopHeaderAndFilterHeight}px);
  }

  ${({mapOpenedOnMobile}) =>
    mapOpenedOnMobile &&
    `
    @media ${mobileMedia} {
      height: 100%;
    }
  `};
`

export const Title = styled.h1`
  box-sizing: border-box;
  margin: 0;
  font-weight: 400;
  font-size: 24px;
  width: 100%;
  z-index: 1;
  padding: 15px 10px 15px;
  @media ${mobileMedia} {
    font-size: 20px;
  }
  ${({mapOpenedOnMobile}) =>
    mapOpenedOnMobile &&
    `
    @media ${mobileMedia} {
      display: none;
    }
  `};
`
