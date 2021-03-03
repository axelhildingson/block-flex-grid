import Page from "./Page"
import { css } from 'styled-components'
import image from './images/page1.png'

const stylesBlock = css`
`

const stylesFlex = css`
  display: flex;
  flex-direction: column;
`

const stylesGrid = css`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const Page1 = ({pageSelector}) => {
 return <Page pageSelector={pageSelector} stylesBlock={stylesBlock} stylesFlex={stylesFlex} stylesGrid={stylesGrid} image={image}>
        <div style={{backgroundColor: 'lightblue', width: '100%', height: '100px'}}></div>
        <div style={{backgroundColor: 'lightgreen', width: '100%', height: '100px'}}></div>
 </Page>   
}

export default Page1