import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import React, { useState } from "react"
import FileTab from "./FileTab"
import ContextMenu from "./ui/ContextMenu"

const FilesTabs = () => {
    const { opendFiles } = useSelector( (state: RootState) => state.fileTree )
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [positionMenu, setPositionMenu] = useState<{x:number; y:number}>({x:0, y:0})
    
    return (
        <div 
            className="flex items-center bg-gray-800 space-x-0.5"
            onContextMenu={ e => {
                e.preventDefault();
                setPositionMenu({x: e.clientX, y:e.clientY});
                setShowMenu(true)
            }}
        >
            {
                opendFiles.map( (file) => 
                    <FileTab file={file} key={file.id} />
                )
            }

            { showMenu && <ContextMenu positions={positionMenu} setShowMenu={setShowMenu} />}
        </div>
    )
}

export default FilesTabs