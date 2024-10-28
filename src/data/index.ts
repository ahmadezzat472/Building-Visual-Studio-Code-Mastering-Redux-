import { IFile } from "../interfaces";
import { v4 as uuidv4 } from 'uuid';

export const fileTree: IFile = {
    id: uuidv4(),
    name: "project folder",
    isFolder: true,
    children: [
        {
            id: uuidv4(),
            name: "node_module",
            isFolder: true,
        },
        {  
            id: uuidv4(),
            name: "src",
            isFolder: true,
            children: [
                {
                    id: uuidv4(),
                    name: "components",
                    isFolder: true,
                    children: [
                        {
                            id: uuidv4(),
                            name: "ui",
                            isFolder: true,
                            children: [
                                {
                                    id: uuidv4(),
                                    name: "ContextMenu.jsx",
                                    isFolder: false,
                                    content: `import React, { useEffect, useRef } from "react"

const ContextMenu = ({positions: {x, y}, setShowMenu}: IProps) => {
    const menuRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()

    const handleCloseAll = () => {
        dispatch(setOpendFilesAction([]))
    }

    const handleClickOutside = (event) => {
        if(menuRef.current && !menuRef.current.contains(event.target)){
            setShowMenu(false)
        }
    }

    window.addEventListener("click", handleClickOutside)

    return (
        <div 
            ref={menuRef}            
            className="w-fit px-6 py-2 bg-white rounded-md text-black font-semibold text-xs cursor-pointer hover:bg-gray-400 transition-all duration-200"
            style={{
                position: "absolute",
                top: y,
                left: x,
            }}
            onClick={handleCloseAll}
        >
                Close All
            </div>
    )
}

export default ContextMenu` 
                                }
                            ]
                        },
                        {
                            id: uuidv4(),
                            name: "interfaces",
                            isFolder: true,
                            children: [
                                {
                                    id: uuidv4(),
                                    name: "index.js",
                                    isFolder: false,
                                    content: `export interface IFile {
    id: string;
    name: string;
    isFolder: boolean;
    children?: IFile[];
    content?: string;
}`
                                }
                            ]
                        },
                        {
                            id: uuidv4(),
                            name: "WelcomePage.tsx",
                            isFolder: false,
                            content: `import React from 'react'
import { VSCIcon } from './SVG'

const WelcomePage = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <VSCIcon />
        </div>
    )
}

export default WelcomePage;`
                        },
                        {
                            id: uuidv4(),
                            name: "RecursiveFile.tsx",
                            isFolder: false,
                            content: `import React, { useState } from 'react'
interface IProps {
    fileTree: IFile
}

const RecursiveFile = ({fileTree}: IProps) => {
    /* __________________ States __________________ */
    const { name, isFolder, children } = fileTree;
    const [isOpen, setIsOpen] = useState<boolean>(false)

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

export default RecursiveFile;`
                        }

                    ]
                },
                {
                    id: uuidv4(),
                    name: "App.tsx",
                    isFolder: false,
                    content: `import { useSelector } from "react-redux"
import FilesTabs from "./components/FilesTabs"
import RecursiveFile from "./components/recursiveFile"
import ResizablePanels from "./components/ResizablePanels"
import { fileTree } from "./data"
import WelcomePage from "./components/WelcomePage"

function App() {
    const { opendFiles } = useSelector( (state: RootState) => state.fileTree )

    return (
        <div className="h-screen bg-gray-950 text-gray-200">
            <ResizablePanels 
                defaultSize={[40, 60]} 
                leftPanel={ 
                    <div className="bg-gray-800 py-2 h-screen">
                        <RecursiveFile fileTree={fileTree} />
                    </div>
                } 
                rightPanel={
                    opendFiles.length ? <Preview /> : <WelcomePage /> 
                }
            />
        </div>
    )
}

export default App
`
                },
                {
                    id: uuidv4(),
                    name: "index.css",
                    isFolder: false,
                    content: `@tailwind base;
@tailwind components;
@tailwind utilities;
t`
                },
            ]
        },
        {
            id: uuidv4(),
            name: "index.html",
            isFolder: false,
            content: "index.html"
        },
    ]

}