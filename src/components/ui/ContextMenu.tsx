import React, { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { setOpendFilesAction } from "../../app/features/fileTreeSlice"

interface IProps {
    positions: {
        x: number
        y:number
    },
    setShowMenu: (val: boolean) => void
}

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

export default ContextMenu