// FileIcons.tsx
import { faCss3Alt, faHtml5, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactNode } from "react";

export const TypeScriptIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
            <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
        </svg>
    );
};

export const VSCIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="400px" height="300px" viewBox="0 0 48 48">
            <path fill="#29b6f6" d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"></path><path fill="#0277bd" d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
        </svg>
    );
};

export const iconMappingFile: { [key: string]: ReactNode } = {
    js: <FontAwesomeIcon icon={faSquareJs} size="lg" style={{color: "#FFD43B",}} />,
    ts: <TypeScriptIcon />,
    css: <FontAwesomeIcon icon={faCss3Alt} size="lg" />,
    html: <FontAwesomeIcon icon={faHtml5} size="lg" />,
    jsx: <FontAwesomeIcon icon={faReact} size="lg" style={{color: "#74C0FC",}} />,
    tsx: <FontAwesomeIcon icon={faReact} size="lg" style={{color: "#B197FC",}} />
};

/* const iconMappingFolder: { [key: string]: ReactNode } = {
    js: <FontAwesomeIcon icon={faSquareJs} size="lg" style={{color: "#FFD43B",}} />,
}; */

