import * as colors from 'constants/colors'
import {mobileMedia, pickerMobileMedia} from 'constants/media'
import styled from 'styled-components'
import {imageUrl} from 'utils/image_url'

export default styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)),
    url(${imageUrl('home-2018-04-03_cozxd9.jpg')});
  background-position: center;
  background-size: cover;
  height: 400px;
  padding-top: 20px;

  > h1 {
    color: white;
    font-weight: 300;
    margin-top: 80px;
    text-align: center;
    text-shadow: 0px 1px rgba(0, 0, 0, 0.4), 0px -1px rgba(0, 0, 0, 0.2);
  }

  @media ${mobileMedia} {
    max-width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    height: auto;
    padding-bottom: 40px;
    width: 100vw;
    > h1 {
      font-weight: 400;
      margin-top: 20px;
      max-width: calc(100vw - 60px);
    }
  }
`

export const Search = styled.div`
  background: white;
  border: 1px solid ${colors.lightestGray};
  border-radius: 10px;
  display: flex;

  margin: 60px auto 0;
  width: 600px;
  > div {
    align-items: center;
    height: 44px;
  }

  @media ${mobileMedia} {
    width: calc(100% - 20px);
  }
`

export const Neighborhoods = styled.div`
  box-sizing: border-box;
  width: calc(100% - 60px);
  cursor: pointer;
  user-select: none;
  color: ${colors.mediumDarkGray};
  display: flex;
  padding: 10px;

  &:last-of-type {
    margin-bottom: 20px;
  }

  @media ${mobileMedia} {
    border-radius: 8px;
    width: 100%;
  }
`

export const Neighborhood = styled.div`
  border: 1px solid ${colors.offWhite};
  border-top: none;
  border-left: none;
  box-sizing: border-box;
  height: 54px;
  position: relative;
  padding: 0 15px;
  min-width: 200px;

  &:hover {
    background: ${colors.offWhite};

    svg path {
      fill: ${colors.blue.medium};
    }

    label {
      color: ${colors.blue.medium};
    }
  }

  @media ${pickerMobileMedia} {
    width: 100vw;
    background: white;
    border-bottom: 1px solid ${colors.mediumGray};
    padding: 5px 15px;
  }

  svg {
    position: absolute;
    top: 0;
    right: 15px;
    height: 100%;
    pointer-events: none;
    @media ${mobileMedia} {
      margin-right: 10px;
    }
  }

  svg path {
    ${({checked}) =>
      `fill: ${checked ? colors.blue.medium : colors.offWhite};`};
  }

  label {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
    align-items: center;
    max-width: calc(100% - 40px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  input {
    box-sizing: border-box;
    cursor: pointer;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  > label {
    text-align: left;
  }
`

export const NeighborhoodsOptions = styled.form`
  padding: 0 0 10px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 260px);

  @media ${pickerMobileMedia} {
    display: block;
    height: calc(100vh - 62px);
    max-height: 100vh;
    overflow: scroll;
    padding: 0px;
  }

  > button[type='submit'] {
    grid-column: span 3;
    width: calc(100% - 20px);
    margin: 10px 10px 0;

    @media ${pickerMobileMedia} {
      position: absolute;
      margin: 0;
      top: 0;
      right: 0;
      width: 40vw;
      height: 62px;
      background: none;
      color: ${colors.blue.medium};
      box-shadow: none;
      border: none;
      font-weight: 600;
      text-align: right;
    }
  }
`

export const Title = styled.div`
  box-sizing: border-box;
  height: 62px;
  padding: 20px 24px;
  color: ${colors.mediumDarkGray};
  border-bottom: 1px solid ${colors.mediumGray};
  font-size: 18px;
  line-height: 24px;
  text-align: left;
`

export const Magnifier = styled.div`
  align-items: center;
  background: ${colors.blue.medium};
  border-bottom-right-radius: 9px;
  border-top-right-radius: 9px;
  cursor: pointer;
  display: flex;
  height: 44px;
  justify-content: center;
  width: 60px;
  &:hover {
    background: ${colors.blue.dark};
  }
  svg {
    height: 20px;
    width: 40px;
  }
  svg path {
    fill: white;
  }
`

export const MobileMagnifier = styled.div`
  display: none;

  @media ${mobileMedia} {
    align-items: center;
    background: ${colors.blue.medium};
    border-radius: 8px;
    margin-top: 10px;
    width: 100%;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    &:hover {
      background: ${colors.blue.dark};
    }
  }
`
