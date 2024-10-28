import React from "react"
import FilesTabs from "./FilesTabs"
import FileSyntaxHighligter from "./FileSyntaxHighligter"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

const Preview = () => {
    const { clickedFile } = useSelector( (state: RootState) => state.fileTree )

    return (
        <div className="">
            <FilesTabs />
            <FileSyntaxHighligter content={clickedFile.fileContent || "No Content"} />
        </div>
    )
}

export default Preview