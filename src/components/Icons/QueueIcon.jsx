import React from "react";
import { SvgIcon } from "../../styles/SvgIcon";

export const QueueIcon = ({ color, size }) => {
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            color={color}
            size={size}
        >
            <path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z"></path>
            <path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8zm11-2h-2v3h-3v2h3v3h2v-3h3V9h-3z"></path>
        </SvgIcon>
    );
};
