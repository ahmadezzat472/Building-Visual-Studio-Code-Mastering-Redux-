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
            children: [
                {
                    id: uuidv4(),
                    name: ".vite",
                    isFolder: true,
                    children: [
                        {
                            id: uuidv4(),
                            name: "react.js",
                            isFolder: false,
                            content: "react.js"
                        },
                        {
                            id: uuidv4(),
                            name: "Button.ts",
                            isFolder: false,
                            content: "Button.ts"
                        },
                    ]
                }
            ]
        },
        {
            id: uuidv4(),
            name: "index.html",
            isFolder: false,
            content: "index.html"
        },
        {
            id: uuidv4(),
            name: "alert.jsx",
            isFolder: false,
            content: `import React from "react";
import uniquePropHOC from "./lib/unique-prop-hoc";

// this comment is here to demonstrate an extremely long line length, well beyo

class Expire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { component: props.children }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                component: null
            });
        }, this.props.time || this.props.seconds * 1000);
    }
    render() {
        return this.state.component;
    }
}

export default uniquePropHOC(["time", "seconds"])(Expire);`
        }
    ]
}