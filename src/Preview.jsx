import {React} from 'react'
import  { marked } from 'marked'
import  parse  from 'html-react-parser'

const Preview = ( text ) => {
    const html = (marked(text.text))
    const parsedHtml = parse(html)
    return (
        <div id='preview' style={{flex: 1}}>{parsedHtml}</div>
    )
}

export default Preview