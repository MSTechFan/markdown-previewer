import {React, useState} from 'react'
import TextArea from './TextArea.jsx'
import Preview from './Preview.jsx'

const App = () => {
    const textExample = "Texto de ejemplo"
    const [text, setText] = useState(textExample)
    const prueba = "React"
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <TextArea text={text}/>
            <Preview text={text} setText={setText}/>
        </div>
    )
}

export default App