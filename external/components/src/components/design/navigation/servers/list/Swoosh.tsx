import React from "react";

export function Swoosh() {
    /*const sidebarOpen = useApplicationState().layout.getSectionState(
        SIDEBAR_CHANNELS,
        true,
    );*/
    const sidebarOpen = true;

    const fill = sidebarOpen
        ? "var(--sidebar-active)"
        : "var(--primary-background)";

    return (
        <svg
            width="56"
            height="106"
            viewBox="0 0 56 106"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M54 53C54 67.9117 41.9117 80 27 80C12.0883 80 0 67.9117 0 53C0 38.0883 12.0883 26 27 26C41.9117 26 54 38.0883 54 53Z"
                fill={fill}
            />
            <path
                d="M27.0002 80C4.50023 80 56.0002 53 56.0002 53V106C56.0002 106 49.5002 80 27.0002 80Z"
                fill={fill}
            />
            <path
                d="M27.0003 26C4.50025 26 56 53 56 53L56.0003 0C56.0003 0 49.5003 26 27.0003 26Z"
                fill={fill}
            />
            <rect x="51" y="50" width="5" height="7" fill={fill} />
        </svg>
    );
}
