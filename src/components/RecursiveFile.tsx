import React, { useState } from 'react'
import { IFile } from '../interfaces';
import FileComponent from './FileComponent';

interface IProps {
    fileTree: IFile
}

const RecursiveFile = ({fileTree}: IProps) => {
    /* __________________ States __________________ */
    const { name, isFolder, children } = fileTree;
    const [isOpen, setIsOpen] = useState<boolean>(false)

    /* __________________ Handlers __________________ */
    const toggleOpen = () => {
        setIsOpen(prev => !prev)        
    }
    
    /* __________________ Renders __________________ */
    return (
        <div className="ml-3">
            <FileComponent 
                fileTree={fileTree} 
                isOpen={isFolder? isOpen : undefined} 
                toggleOpen={isFolder? toggleOpen : undefined} 
            />

            {
                isOpen && children?.length && 
                children.map( (file, idx) => <RecursiveFile fileTree={file} key={idx} />)
            }
        </div>
    )
}

export default RecursiveFile;