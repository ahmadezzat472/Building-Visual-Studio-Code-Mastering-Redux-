import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface IProps {
    content: string
}

const FileSyntaxHighligter = ({content}: IProps) => {
    return (
        <div className='text-sm'>
            <SyntaxHighlighter 
                language="javascript" 
                style={a11yDark}
                customStyle={{
                    backgroundColor: "transparent",
                    
                }}
                showLineNumbers
            >
                {content}
            </SyntaxHighlighter>
        </div>
    )
}

export default FileSyntaxHighligter;