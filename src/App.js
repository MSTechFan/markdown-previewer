import {React, useState} from 'react'
import TextArea from './TextArea.jsx'
import Preview from './Preview.jsx'
import { getEjemplo } from './example.js'

const App = () => {
    const textExample = getEjemplo()
    const [text, setText] = useState(textExample)
    console.log(text)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <TextArea text={text} setText={setText}/>
            <Preview text={text} setText={setText}/>
        </div>
    )
}

export default App