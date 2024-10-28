import React, { MouseEventHandler } from "react"
import { IFile } from "../interfaces"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile, faX } from "@fortawesome/free-solid-svg-icons"
import { iconMappingFile } from "./SVG"
import { useDispatch, useSelector } from "react-redux"
import { setClickedFileAction, setOpendFilesAction } from "../app/features/fileTreeSlice"
import { RootState } from "../app/store"

interface IProps {
    file: IFile
}

const FileTab = ({file}: IProps) => {
    const { opendFiles, clickedFile } = useSelector( (state: RootState) => state.fileTree )
    const dispatch = useDispatch()
    
    const { id, name, content} = file
    const extension = name.split(".").pop() || "" 

    const openClickedFile = () => {
        dispatch(setClickedFileAction({fileName:name, fileContent: content, id}))
    }

    const handleRemove = (event) => {
        event.stopPropagation();

        const UpdateOpendFiles = opendFiles.filter(item => item.id !== id)        
        dispatch(setOpendFilesAction(UpdateOpendFiles))

        const lastFile = UpdateOpendFiles[UpdateOpendFiles.length - 1]
        if(lastFile == undefined) {
            dispatch(setOpendFilesAction([]))
            return
        }
        dispatch(setClickedFileAction({
            fileContent: lastFile.content,
            fileName: lastFile.name,
            id:lastFile.id
        }))
    }

    return (
        <div 
            className={`flex items-center px-6 py-3 cursor-pointer gap-2 ${id === clickedFile.id ? "bg-gray-950" : "bg-transparent"} `}
            onClick={openClickedFile}
        >
            {iconMappingFile[extension] || <FontAwesomeIcon icon={faFile} size="lg" />}
            <span className="">{name}</span>
            <span 
                className="px-1 rounded-sm text-sm text-gray-400 hover:bg-gray-600 transition-all duration-200"
                onClick={(event) => handleRemove(event)}
            >
                <FontAwesomeIcon icon={faX} size="xs" />
            </span>
        </div>
    )
}

export default FileTab