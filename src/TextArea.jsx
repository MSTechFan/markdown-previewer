import {React, useState} from 'react'

const TextArea = ( text ) => {
    return (
        <textArea id='editor' style={{flex: 1}}>
            {text}
        </textArea>
    )
}

export default TextArea