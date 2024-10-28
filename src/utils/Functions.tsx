import { IFile } from "../interfaces";

export const isFileExist = ( opendFiles:IFile[] , id:string ) => {
    // if id find in opendFiles return true
    return opendFiles.some(obj => obj.id === id)
}