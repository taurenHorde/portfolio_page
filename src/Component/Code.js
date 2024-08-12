import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';






function CodeBlock({ code }) {

    return (
        <SyntaxHighlighter
            language='javascript'
            style={docco}
            customStyle={{ fontSize: '0.8rem', lineHeight: '1.2', backgroundColor: '#f5f5f5' }}
        >
            {code}
        </SyntaxHighlighter>
    )
}



export default CodeBlock