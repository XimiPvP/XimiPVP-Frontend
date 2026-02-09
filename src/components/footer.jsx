import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swords, Copy, Check, ExternalLink } from 'lucide-react';
import '../style/footer.css';

function Footer() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('play.ximipvp.eu');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="footer-wrapper">
            {/* Decorative top accent */}
            <div className="footer-accent"></div>

            <footer className="footer-main">
                {/* Brand */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <div className="footer-logo-icon">
                            <Swords size={22} />
                        </div>
                        <span>XimiPVP</span>
                    </div>
                    <p className="footer-desc">
                        XimiPvP è un server Minecraft dedicato al PvP e al divertimento. Nato dalla passione per Java, offriamo un'esperienza unica con modalità competitive e una community attiva.
                    </p>
                    {/* Server IP - prominent on mobile */}
                    <button className="footer-ip-btn" onClick={handleCopy}>
                        <span className="footer-ip-text">play.ximipvp.eu</span>
                        <span className={`footer-ip-icon ${copied ? 'copied' : ''}`}>
                            {copied ? <Check size={15} /> : <Copy size={15} />}
                        </span>
                        {copied && <span className="footer-ip-toast">Copiato!</span>}
                    </button>
                </div>

                {/* Links */}
                <div className="footer-col">
                    <h3>Link Rapidi</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/staff">Staff</Link></li>
                        <li><Link to="/forum">Forum</Link></li>
                        <li><Link to="/stats">Statistiche</Link></li>
                        <li><Link to="/policy">Policy</Link></li>
                    </ul>
                </div>

                {/* Community */}
                <div className="footer-col">
                    <h3>Community</h3>
                    <ul>
                        <li>
                            <a href="https://dsc.gg/ximipvp" target="_blank" rel="noopener noreferrer">
                                Discord <ExternalLink size={12} className="footer-ext" />
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/XimiPvP" target="_blank" rel="noopener noreferrer">
                                Telegram <ExternalLink size={12} className="footer-ext" />
                            </a>
                        </li>
                        <li>
                            <a href="https://store.ximipvp.eu" target="_blank" rel="noopener noreferrer">
                                Store <ExternalLink size={12} className="footer-ext" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <span className="footer-copy">
                    © {new Date().getFullYear()} XimiPVP. Tutti i diritti riservati. Non affiliato con Mojang Studios.
                </span>
                <a href="https://lc.cx/poDIXR" target="_blank" rel="noopener noreferrer" className="footer-credit">
                    Designed by ZeRo
                </a>
            </div>
        </div>
    );
}

export default Footer;
