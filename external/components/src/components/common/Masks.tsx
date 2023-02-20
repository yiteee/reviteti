// This file must be imported and used at least once for SVG masks.
import React from "react";

export function Masks() {
    return (
        <svg width={0} height={0} style={{ position: "fixed" }}>
            <defs>
                <mask id="holepunch-top-right">
                    <rect x="0" y="0" width="32" height="32" fill="white" />
                    <circle cx="27" cy="5" r="7" fill={"black"} />
                </mask>
                <mask id="holepunch-bottom-right">
                    <rect x="0" y="0" width="32" height="32" fill="white" />
                    <circle cx="27" cy="27" r="7" fill={"black"} />
                </mask>
                <mask id="holepunch-right">
                    <rect x="0" y="0" width="32" height="32" fill="white" />
                    <circle cx="27" cy="5" r="7" fill={"black"} />
                    <circle cx="27" cy="27" r="7" fill={"black"} />
                </mask>

                {/**
                 * Legacy masks from old code
                 */}
                <mask id="server">
                    <rect x="0" y="0" width="32" height="32" fill="white" />
                    <circle cx="27" cy="5" r="7" fill={"black"} />
                </mask>
                <mask id="user">
                    <rect x="0" y="0" width="32" height="32" fill="white" />
                    <circle cx="27" cy="27" r="7" fill={"black"} />
                </mask>
                <mask id="session">
                    <rect x="0" y="0" width="32" height="32" fill="white" />
                    <circle cx="26" cy="28" r="10" fill={"black"} />
                </mask>
                <mask id="overlap">
                    <rect x="0" y="0" width="32" height="32" fill="white" />
                    <circle cx="32" cy="16" r="18" fill={"black"} />
                </mask>
                {/*CUSTOM AVATAR FRAMES*/}
                <mask id="circle">
                    <circle cx="75" cy="75" r="75" fill="white" />
                </mask>
                <mask id="squircle">
                    <path
                        d="M0 75C0 18.75 18.75 0 75 0C131.25 0 150 18.75 150 75C150 131.25 131.25 150 75 150C18.75 150 0 131.25 0 75Z"
                        fill="white"
                    />
                </mask>
                <mask id="hexagon">
                    <path
                        d="M144.939 55.466C139.465 43.2201 133.083 31.4582 125.851 20.2921L123.518 16.7252C120.647 12.2924 116.883 8.59591 112.501 5.9044C108.118 3.21286 103.227 1.59386 98.183 1.16505L94.0879 0.813947C81.3826 -0.271316 68.6168 -0.271316 55.912 0.813947L51.817 1.16505C46.7728 1.59386 41.8818 3.21286 37.4993 5.9044C33.1169 8.59591 29.3531 12.2924 26.4815 16.7252L24.1489 20.324C16.9174 31.4901 10.5346 43.252 5.06102 55.4979L3.29848 59.4398C1.12677 64.3017 0 69.6171 0 75C0 80.383 1.12677 85.6982 3.29848 90.5602L5.06102 94.5021C10.5346 106.748 16.9174 118.51 24.1489 129.676L26.4815 133.275C29.3531 137.707 33.1169 141.404 37.4993 144.096C41.8818 146.787 46.7728 148.406 51.817 148.835L55.912 149.186C68.6168 150.271 81.3826 150.271 94.0879 149.186L98.183 148.835C103.231 148.401 108.124 146.775 112.507 144.074C116.89 141.374 120.651 137.668 123.518 133.227L125.851 129.628C133.083 118.462 139.465 106.7 144.939 94.4542L146.701 90.5123C148.873 85.6503 150 80.3351 150 74.9521C150 69.5692 148.873 64.2538 146.701 59.392L144.939 55.466Z"
                        fill="white"
                    />
                </mask>
            </defs>
        </svg>
    );
}
