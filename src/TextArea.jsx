import {React} from 'react'

const TextArea = ( text, setText ) => {
    console.log(text)

    const onChange = (e) => {
        text.setText(e.currentTarget.value)
    }

    return (
        <textArea id='editor' style={{flex: 1}} onChange={onChange}>{text.text}</textArea>
    )
}

export default TextArea