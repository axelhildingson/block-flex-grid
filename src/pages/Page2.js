import Page from "./Page"
import { css } from 'styled-components'
import image from './images/page2.png'

const stylesBlock = css`
  &  > * {
    display: inline-block;
  }
`

const stylesFlex = css`
  display: flex;
  flex-direction: row;
`

const stylesGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Page2 = ({pageSelector}) => {
 return <Page pageSelector={pageSelector} stylesBlock={stylesBlock} stylesFlex={stylesFlex} stylesGrid={stylesGrid} image={image}>
        <span style={{backgroundColor: 'lightblue', width: '100%', height: '100px'}}></span>
        <span style={{backgroundColor: 'lightgreen', width: '100%', height: '100px'}}></span>
 </Page>   
}

export default Page2