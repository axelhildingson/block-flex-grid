import Page from "./Page"
import { css } from 'styled-components'
import image from './images/page8.png'

const stylesBlock = css`
  text-align: start;
  margin: auto;
  div:nth-child(1) {
    height: 100% !important;
    width: 33% !important;
    display: inline-block;
  }
  div:nth-child(2) {
    height: 50% !important;
    width: 66% !important;
    display: inline-block;
  }
  div:nth-child(3) {
    height: 50% !important;
    width: 66% !important;
    display: inline-block;
    float: right;
  }
`

const stylesFlex = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div:nth-child(1) {
    height: 100% !important;
    width: 33% !important;
  }
  div:nth-child(2) {
    height: 50% !important;
    width: 66% !important;
  }
  div:nth-child(3) {
    height: 50% !important;
    width: 66% !important;
    align-self: flex-end;
  }
`

const stylesGrid = css`
  display: grid;
  grid-template-areas: 'filter header header'
                       'filter body body';
  div:nth-child(1) {
    grid-area: filter;
  }
  div:nth-child(2) {
    grid-area: header;
  }
  div:nth-child(3) {
    grid-area: body;
  }

`

const Page8 = ({pageSelector}) => {
 return <Page pageSelector={pageSelector} stylesBlock={stylesBlock} stylesFlex={stylesFlex} stylesGrid={stylesGrid} image={image}>
        <div style={{backgroundColor: 'blue', width: '100%', height: '100%'}}></div>
        <div style={{backgroundColor: 'green', width: '100%', height: '100%'}}></div>
        <div style={{backgroundColor: 'red', width: '100%', height: '100%'}}></div>
 </Page>   
}

export default Page8