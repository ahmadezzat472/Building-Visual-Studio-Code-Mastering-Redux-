import { useSelector } from "react-redux"
import FilesTabs from "./components/FilesTabs"
import RecursiveFile from "./components/recursiveFile"
import ResizablePanels from "./components/ResizablePanels"
import { fileTree } from "./data"
import { RootState } from "./app/store"
import React from "react"
import Preview from "./components/Preview"
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
