import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFile } from '../../interfaces'

interface IClickedFile {
    fileName: string;
    fileContent: string | undefined;
    id: string
}

interface IInitialState {
    opendFiles: IFile[]
    clickedFile: IClickedFile
}

const initialState: IInitialState = {
    opendFiles: [],
    clickedFile: {
        fileName: "",
        fileContent: "",
        id: "",
    },
}

const fileTreeSlice = createSlice({
    name: 'fileTree', 
    initialState,   
    reducers: {
        setOpendFilesAction: (state, actionPayload: PayloadAction<IFile[]>) => {
            state.opendFiles = actionPayload.payload;
        },

        setClickedFileAction: (state, actionPayload: PayloadAction<IClickedFile>) => {
            state.clickedFile = actionPayload.payload
        }
    }
})

export const {setOpendFilesAction, setClickedFileAction} = fileTreeSlice.actions;

export default fileTreeSlice.reducer;