import React from "react"
import { IFile } from "../interfaces"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faFile, faFolder, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { iconMappingFile } from "./SVG";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setOpendFilesAction, setClickedFileAction } from "../app/features/fileTreeSlice";
import { isFileExist } from "../utils/Functions";

interface IProps {
    fileTree: IFile
    isOpen?: boolean;
    toggleOpen?: () => void
}

const FileComponent = ({fileTree, isOpen, toggleOpen}: IProps) => {
    /* __________________ States __________________ */
    const { opendFiles, clickedFile } = useSelector( (state: RootState) => state.fileTree )
    const dispatch = useDispatch()

    /* __________________ Variables __________________ */
    const { id, name, isFolder, content } = fileTree;
    const extension = name.split(".").pop() || "" 

    /* __________________ Handlers __________________ */
    const handleClickedFile = () => {
        openClickedFile()
        const isExist = isFileExist(opendFiles, fileTree.id)
        if(isExist) return;
        dispatch(setOpendFilesAction([...opendFiles, fileTree]))
    }

    const openClickedFile = () => {
        dispatch(setClickedFileAction({fileName:name, fileContent: content, id}))
    }

    /* __________________ Renders __________________ */
    return (
        <div
            className={`cursor-pointer px-2 py-1 mb-1 hover:bg-gray-600 transition-all duration-200 ${ id === clickedFile.id ? "bg-gray-600" : "" }`}             
        >
            {
                isFolder ? (
                    isOpen ? (
                        <div className="flex items-center gap-1.5 text-gray-400 font-semibold" onClick={toggleOpen}>
                            <FontAwesomeIcon icon={faChevronDown}  />
                            <FontAwesomeIcon icon={faFolderOpen} size="lg" style={{color: "#FFD43B",}} />
                            <span className="">{name}</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1.5 text-gray-400 font-semibold" onClick={toggleOpen}>
                            <FontAwesomeIcon icon={faChevronRight}  />
                            <FontAwesomeIcon icon={faFolder} size="lg" style={{color: "#FFD43B"}} />
                            <span className="ml-1">{name}</span>
                        </div>
                    )
                ) : (
                    <div 
                        className="flex items-center gap-1.5"
                        onClick={handleClickedFile}
                    >
                        {iconMappingFile[extension] || <FontAwesomeIcon icon={faFile} size="lg" />}
                        <span className="">{name}</span>
                    </div>
                )
            }
        </div>
    )
}

export default FileComponent;