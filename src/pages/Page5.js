import Page from "./Page"
import { css } from 'styled-components'
import image from './images/page5.png'

const stylesBlock = css`
  text-align: start;
  &  > * {
    display: inline-block;
  }
  div:first-child {
    margin-right: 5px;
    width: 18% !important
  }
  div:last-child {
    margin-left: 5px;
    width: 18% !important
  }
  div:not(:first-child):not(:last-child) {
      margin: 0 5px;
      width: 18% !important
  }
`

const stylesFlex = css`
  display: flex;
  flex-direction: row;
  div:first-child {
    margin-right: 5px
  }
  div:last-child {
    margin-left: 5px
  }
  div:not(:first-child):not(:last-child) {
      margin: 0 5px
  }
`

const stylesGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px; 
`

const Page5 = ({pageSelector}) => {
 return <Page pageSelector={pageSelector} stylesBlock={stylesBlock} stylesFlex={stylesFlex} stylesGrid={stylesGrid} image={image}>
        <div style={{backgroundColor: 'blue', width: '100%', height: '100%'}}></div>
        <div style={{backgroundColor: 'green', width: '100%', height: '100%'}}></div>
        <div style={{backgroundColor: 'salmon', width: '100%', height: '100%'}}></div>
        <div style={{backgroundColor: 'yellow', width: '100%', height: '100%'}}></div>
        <div style={{backgroundColor: 'cyan', width: '100%', height: '100%'}}></div>
 </Page>   
}

export default Page5