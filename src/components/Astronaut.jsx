import "../css/Astronaut.css"

const Astronaut = function(){

    return <svg className="astro" viewBox="0 0 460 430" role="img"
        aria-label="An astronaut dancing in orbit"
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
                <stop offset="0%" stopColor="#040409"/>
                <stop offset="100%" stopColor="#14143a"/>
            </linearGradient>
            <path id="astroSpark" d="M0 -14 C1.5 -5 5 -1.5 14 0 C5 1.5 1.5 5 0 14 C-1.5 5 -5 1.5 -14 0 C-5 -1.5 -1.5 -5 0 -14Z"/>
            <g id="astroNote">
                <ellipse cx="0" cy="0" rx="6" ry="4.5" transform="rotate(-20)"/>
                <path d="M5 -1 V-24 Q12 -20 14 -12" fill="none" strokeWidth="2.4" strokeLinecap="round"/>
            </g>
        </defs>

        <ellipse cx="230" cy="215" rx="215" ry="205" fill="url(#astroGlow)"/>

        <g transform="rotate(-16 230 300)">
            <path d="M25 300 A205 48 0 0 1 435 300" fill="none" stroke="url(#astroRing)"
                strokeWidth="3" opacity="0.5"/>
        </g>

        <g transform="translate(402 78)"><use href="#astroSpark" className="spark" fill="#c9cbff" style={{ "--d": "0.6s" }}/></g>
        <g transform="translate(62 118) scale(0.6)"><use href="#astroSpark" className="spark" fill="#9a9dff" style={{ "--d": "1.4s" }}/></g>
        <g transform="translate(420 214) scale(0.5)"><use href="#astroSpark" className="spark" fill="#c9cbff" style={{ "--d": "2s" }}/></g>
        <g transform="translate(70 300) scale(0.45)"><use href="#astroSpark" className="spark" fill="#9a9dff" style={{ "--d": "0.9s" }}/></g>
        <g transform="translate(340 28) scale(0.4)"><use href="#astroSpark" className="spark" fill="#ffffff" style={{ "--d": "1.8s" }}/></g>

        <ellipse className="astro-shadow" cx="230" cy="410" rx="90" ry="10" fill="#6366f1" opacity="0.28"/>

        <g className="astro-float">
            <g className="astro-body">

                <g className="leg leg-l">
                    <rect x="192" y="288" width="32" height="72" rx="16" fill="url(#astroSuit)"/>
                    <rect x="186" y="344" width="46" height="28" rx="13" fill="#e9ebf7"/>
                    <rect x="186" y="358" width="46" height="8" rx="4" fill="#6366f1"/>
                </g>
                <g className="leg leg-r">
                    <rect x="236" y="288" width="32" height="72" rx="16" fill="url(#astroSuit)"/>
                    <rect x="228" y="344" width="46" height="28" rx="13" fill="#e9ebf7"/>
                    <rect x="228" y="358" width="46" height="8" rx="4" fill="#6366f1"/>
                </g>

                <g className="astro-torso">
                    <rect x="170" y="180" width="120" height="96" rx="24" fill="#a3a8c6"/>
                    <rect x="178" y="184" width="104" height="116" rx="36" fill="url(#astroSuit)"/>
                    <rect x="180" y="284" width="100" height="14" rx="7" fill="#b9bdd6"/>
                    <rect x="204" y="222" width="52" height="38" rx="10" fill="#17182c" stroke="#6366f1" strokeWidth="2"/>
                    <circle cx="218" cy="236" r="4" fill="#6366f1"/>
                    <circle cx="232" cy="236" r="4" fill="#3ddc97"/>
                    <rect x="214" y="248" width="32" height="5" rx="2.5" fill="#6366f1" opacity="0.6"/>

                    <g className="arm arm-l">
                        <rect x="174" y="200" width="28" height="88" rx="14" fill="url(#astroSuit)"/>
                        <rect x="174" y="262" width="28" height="12" rx="3" fill="#6366f1"/>
                        <circle cx="188" cy="292" r="17" fill="#f4f5fb"/>
                    </g>
                    <g className="arm arm-r">
                        <rect x="258" y="200" width="28" height="88" rx="14" fill="url(#astroSuit)"/>
                        <rect x="258" y="262" width="28" height="12" rx="3" fill="#6366f1"/>
                        <circle cx="272" cy="292" r="17" fill="#f4f5fb"/>
                    </g>

                    <ellipse cx="230" cy="186" rx="44" ry="11" fill="#c3c7de"/>

                    <g className="astro-head">
                        <circle cx="230" cy="118" r="82" fill="url(#astroShell)"/>
                        <circle cx="230" cy="118" r="82" fill="none" stroke="#8d92b3" strokeOpacity="0.5" strokeWidth="2"/>
                        <circle cx="186" cy="58" r="4.5" fill="#2a2b45"/>
                        <ellipse cx="240" cy="124" rx="61" ry="53" fill="url(#astroVisor)" stroke="#d9dcee" strokeWidth="5"/>
                        <path d="M190 150 Q204 176 244 178" stroke="#7b7eff" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.95"/>
                        <path d="M198 96 Q216 78 246 76" stroke="#ffffff" strokeWidth="4" opacity="0.35" fill="none" strokeLinecap="round"/>
                        <g transform="translate(266 104) scale(0.45)">
                            <use href="#astroSpark" className="spark" fill="#ffffff" style={{ "--d": "0.3s" }}/>
                        </g>
                        <g transform="translate(160 136)">
                            <circle r="23" fill="#191a38" stroke="#6366f1" strokeWidth="5"/>
                            <path d="M-9 -7 L-16 0 L-9 7 M9 -7 L16 0 L9 7 M3 -10 L-3 10" stroke="#ffffff" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </g>
                </g>
            </g>
        </g>

        <g transform="rotate(-16 230 300)">
            <path d="M25 300 A205 48 0 0 0 435 300" fill="none" stroke="url(#astroRing)"
                strokeWidth="7" strokeLinecap="round"/>
        </g>

        <g transform="translate(398 150)"><use href="#astroNote" className="note" style={{ "--dx": "22px", "--d": "0.2s" }}/></g>
        <g transform="translate(76 190)"><use href="#astroNote" className="note" style={{ "--dx": "-20px", "--d": "1.3s" }}/></g>
        <g transform="translate(360 250)"><use href="#astroNote" className="note" style={{ "--dx": "16px", "--d": "2.3s" }}/></g>
    </svg>
}

export default Astronaut;
