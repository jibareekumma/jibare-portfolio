
import "../css/Astronaut.css"

const Astronaut = function(){

    return <svg className="astro" viewBox="0 0 460 430" role="img"
        aria-label="An astronaut grooving in orbit"
    >
        <defs>
            <radialGradient id="astroGlow" cx="50%" cy="48%" r="50%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.38"/>
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="astroRing" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#5d60f2"/>
                <stop offset="55%" stopColor="#a5a8ff"/>
                <stop offset="100%" stopColor="#5d60f2"/>
            </linearGradient>
            <radialGradient id="astroShell" cx="34%" cy="26%" r="80%">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="55%" stopColor="#e6e8f5"/>
                <stop offset="100%" stopColor="#a9aecb"/>
            </radialGradient>
            <linearGradient id="astroSuit" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff"/>
                <stop offset="100%" stopColor="#cfd3e8"/>
            </linearGradient>
            <linearGradient id="astroVisor" x1="0.2" y1="0" x2="0.9" y2="1">
                <stop offset="0%" stopColor="#030307"/>
                <stop offset="100%" stopColor="#101036"/>
            </linearGradient>
            <linearGradient id="astroSweep" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0"/>
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.32"/>
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
            </linearGradient>
            <clipPath id="astroVisorClip">
                <ellipse cx="240" cy="124" rx="57" ry="49"/>
            </clipPath>
            <path id="astroSpark" d="M0 -14 C1.5 -5 5 -1.5 14 0 C5 1.5 1.5 5 0 14 C-1.5 5 -5 1.5 -14 0 C-5 -1.5 -1.5 -5 0 -14Z"/>
        </defs>

        <ellipse className="astro-glow" cx="230" cy="215" rx="215" ry="205" fill="url(#astroGlow)"/>

        <g className="ring">
            <path d="M25 300 A205 48 0 0 1 435 300" fill="none" stroke="url(#astroRing)"
                strokeWidth="3" opacity="0.5"/>
            <g>
                <circle r="9" fill="#6366f1" opacity="0.35"/>
                <circle r="3.5" fill="#ffffff"/>
                <animateMotion dur="9s" repeatCount="indefinite" calcMode="linear"
                    keyPoints="0;1;1" keyTimes="0;0.5;1"
                    path="M25 300 A205 48 0 0 1 435 300"/>
                <animate attributeName="opacity" dur="9s" repeatCount="indefinite"
                    values="1;1;0;0" keyTimes="0;0.499;0.5;1"/>
            </g>
        </g>

        <g transform="translate(402 78)"><use href="#astroSpark" className="spark" fill="#c9cbff" style={{ "--d": "0.6s" }}/></g>
        <g transform="translate(62 118) scale(0.6)"><use href="#astroSpark" className="spark" fill="#9a9dff" style={{ "--d": "1.4s" }}/></g>
        <g transform="translate(420 214) scale(0.5)"><use href="#astroSpark" className="spark" fill="#c9cbff" style={{ "--d": "2s" }}/></g>
        <g transform="translate(70 300) scale(0.45)"><use href="#astroSpark" className="spark" fill="#9a9dff" style={{ "--d": "0.9s" }}/></g>
        <g transform="translate(340 28) scale(0.4)"><use href="#astroSpark" className="spark" fill="#ffffff" style={{ "--d": "1.8s" }}/></g>

        <ellipse className="astro-shadow" cx="230" cy="410" rx="90" ry="10" fill="#6366f1" opacity="0.28"/>
        <ellipse className="astro-pulse" cx="230" cy="410" rx="90" ry="10" fill="none" stroke="#6366f1" strokeWidth="1.5"/>

        <g className="astro-float">
            <g className="astro-body">

                <g className="leg leg-l">
                    <rect className="ink" x="192" y="288" width="32" height="72" rx="16" fill="url(#astroSuit)"/>
                    <rect className="ink" x="186" y="344" width="46" height="28" rx="13" fill="#e9ebf7"/>
                    <rect x="188" y="358" width="42" height="8" rx="4" fill="#6366f1"/>
                </g>
                <g className="leg leg-r">
                    <rect className="ink" x="236" y="288" width="32" height="72" rx="16" fill="url(#astroSuit)"/>
                    <rect className="ink" x="228" y="344" width="46" height="28" rx="13" fill="#e9ebf7"/>
                    <rect x="230" y="358" width="42" height="8" rx="4" fill="#6366f1"/>
                </g>

                <g className="astro-torso">
                    <rect className="ink" x="170" y="180" width="120" height="96" rx="24" fill="#a3a8c6"/>
                    <rect className="ink" x="178" y="184" width="104" height="116" rx="36" fill="url(#astroSuit)"/>
                    <rect x="182" y="284" width="96" height="12" rx="6" fill="#b9bdd6"/>
                    <rect x="204" y="222" width="52" height="38" rx="10" fill="#0d0e24" stroke="#6366f1" strokeWidth="2"/>
                    <circle cx="218" cy="234" r="3.5" fill="#6366f1"/>
                    <circle className="led" cx="232" cy="234" r="3.5" fill="#3ddc97"/>
                    <rect className="eq" x="213" y="246" width="4" height="10" rx="2" fill="#818cf8" style={{ "--d": "0s" }}/>
                    <rect className="eq" x="221" y="246" width="4" height="10" rx="2" fill="#6366f1" style={{ "--d": "-0.25s" }}/>
                    <rect className="eq" x="229" y="246" width="4" height="10" rx="2" fill="#a5b4ff" style={{ "--d": "-0.4s" }}/>
                    <rect className="eq" x="237" y="246" width="4" height="10" rx="2" fill="#6366f1" style={{ "--d": "-0.1s" }}/>
                    <rect className="eq" x="245" y="246" width="4" height="10" rx="2" fill="#818cf8" style={{ "--d": "-0.33s" }}/>

                    <g className="arm arm-l">
                        <rect className="ink" x="174" y="200" width="28" height="88" rx="14" fill="url(#astroSuit)"/>
                        <rect x="176" y="262" width="24" height="12" rx="3" fill="#6366f1"/>
                        <circle className="ink" cx="188" cy="292" r="17" fill="#f4f5fb"/>
                    </g>
                    <g className="arm arm-r">
                        <rect className="ink" x="258" y="200" width="28" height="88" rx="14" fill="url(#astroSuit)"/>
                        <rect x="260" y="262" width="24" height="12" rx="3" fill="#6366f1"/>
                        <circle className="ink" cx="272" cy="292" r="17" fill="#f4f5fb"/>
                    </g>

                    <ellipse className="ink" cx="230" cy="188" rx="44" ry="11" fill="#c3c7de"/>

                    <g className="astro-head">
                        <circle className="ink" cx="230" cy="118" r="82" fill="url(#astroShell)"/>
                        <rect x="258" y="52" width="22" height="6" rx="3" fill="#15162e" transform="rotate(32 269 55)"/>
                        <circle cx="186" cy="62" r="4.5" fill="#15162e"/>
                        <ellipse className="ink" cx="240" cy="124" rx="65" ry="57" fill="#eef0fb"/>
                        <ellipse className="ink" cx="240" cy="124" rx="57" ry="49" fill="url(#astroVisor)"/>
                        <g clipPath="url(#astroVisorClip)">
                            <path className="visor-glint" d="M268 86 Q292 124 266 162" stroke="#7b7eff" strokeWidth="6" fill="none" strokeLinecap="round"/>
                            <path d="M196 146 Q214 168 254 170" stroke="#7b7eff" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.9"/>
                            <path d="M200 100 Q216 86 240 84" stroke="#ffffff" strokeWidth="4" opacity="0.3" fill="none" strokeLinecap="round"/>
                            <g className="visor-sweep">
                                <path d="M176 60 H200 L180 190 H156 Z" fill="url(#astroSweep)"/>
                            </g>
                        </g>
                        <g transform="translate(214 118) scale(0.5)">
                            <use href="#astroSpark" className="spark" fill="#c9cbff" style={{ "--d": "0.3s" }}/>
                        </g>
                        <g transform="translate(160 136)">
                            <circle className="ink" r="30" fill="url(#astroShell)"/>
                            <circle className="badge-ring" r="23" fill="none" stroke="#818cf8" strokeWidth="2"/>
                            <circle className="badge-disc" r="23" fill="#0d0e24" stroke="#6366f1" strokeWidth="5"/>
                            <path className="badge-code" d="M-9 -7 L-16 0 L-9 7 M9 -7 L16 0 L9 7 M3 -10 L-3 10" stroke="#a5b4ff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>

        <g className="ring">
            <path d="M25 300 A205 48 0 0 0 435 300" fill="none" stroke="url(#astroRing)"
                strokeWidth="7" strokeLinecap="round"/>
            <g>
                <circle r="10" fill="#6366f1" opacity="0.4"/>
                <circle r="4" fill="#ffffff"/>
                <animateMotion dur="9s" repeatCount="indefinite" calcMode="linear"
                    keyPoints="0;0;1" keyTimes="0;0.5;1"
                    path="M435 300 A205 48 0 0 1 25 300"/>
                <animate attributeName="opacity" dur="9s" repeatCount="indefinite"
                    values="0;0;1;1" keyTimes="0;0.499;0.5;1"/>
            </g>
        </g>

        <g transform="translate(398 168)"><text className="glyph" textAnchor="middle" style={{ "--dx": "18px", "--d": "0.2s" }}>{"</>"}</text></g>
        <g transform="translate(76 206)"><text className="glyph" textAnchor="middle" style={{ "--dx": "-16px", "--d": "1.5s" }}>{"{ }"}</text></g>
        <g transform="translate(362 268)"><text className="glyph" textAnchor="middle" style={{ "--dx": "14px", "--d": "2.8s" }}>01</text></g>
    </svg>
}

export default Astronaut;