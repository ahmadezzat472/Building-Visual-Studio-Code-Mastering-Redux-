import React, { ReactNode } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'

interface IProps {
    defaultSize: number[];
    leftPanel: ReactNode;
    rightPanel: ReactNode;
}

const ResizablePanels = ({defaultSize = [33, 67], leftPanel, rightPanel} : IProps) => {

    const onLayout = (sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
    };

    return (
        <PanelGroup direction="horizontal" onLayout={onLayout} autoSaveId="saveLayout">
            <Panel defaultSize={defaultSize[0]}>
                {leftPanel}
            </Panel>
            <PanelResizeHandle className='border-2 border-gray-400' />
            <Panel defaultSize={defaultSize[1]} minSize={35}>
                {rightPanel} 
            </Panel>
        </PanelGroup>
    )
}

export default ResizablePanels;