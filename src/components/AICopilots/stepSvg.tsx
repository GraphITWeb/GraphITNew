export default function stepSvg(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <g id="Step" filter="url(#filter0_dd_1723_10069)">
                <rect x="4" y="4" width="24" height="24" rx="12" fill="#F23704"/>
                <circle id="Dot" cx="16" cy="16" r="4" fill="#09091A"/>
            </g>
            <defs>
                <filter id="filter0_dd_1723_10069" x="0" y="0" width="32" height="32"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix"
                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="4" operator="dilate" in="SourceAlpha"
                                  result="effect1_dropShadow_1723_10069"/>
                    <feOffset/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix"
                                   values="0 0 0 0 0.94902 0 0 0 0 0.215686 0 0 0 0 0.0156863 0 0 0 0.7 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1723_10069"/>
                    <feColorMatrix in="SourceAlpha" type="matrix"
                                   values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feMorphology radius="2" operator="dilate" in="SourceAlpha"
                                  result="effect2_dropShadow_1723_10069"/>
                    <feOffset/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix"
                                   values="0 0 0 0 0.0352941 0 0 0 0 0.0352941 0 0 0 0 0.101961 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="effect1_dropShadow_1723_10069"
                             result="effect2_dropShadow_1723_10069"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1723_10069"
                             result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}