import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import posts from '../../data/posts.json';

export const Navigation = () => {
    const glassesRef = useRef(null);

    useEffect(() => {
        const glasses = glassesRef.current

        if (!glasses) {
            return;
        }
        // Met behulp van AI deze berekening https://claude.ai/share/7148c9c3-8018-41d7-9359-f225d6223186
        const irises = glasses.querySelectorAll('.iris');

        const handleMouseMove = (e) => {
            const rect = glasses.getBoundingClientRect();

            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;

            const max = 2;
            const angle = Math.atan2(dy, dx);
            const x = Math.cos(angle) * max;
            const y = Math.sin(angle) * max;

            irises.forEach(iris => {
                iris.setAttribute('cx', parseFloat(iris.dataset.baseCx) + x);
                iris.setAttribute('cy', parseFloat(iris.dataset.baseCy) + y);
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [glassesRef])

    const weeklyNerds = posts.filter(p => p.category === 'weekly-nerds');

    return (
        <nav>
            <Link to="/" aria-label="Homepagina" className="nav-logo">
                R
                <svg ref={glassesRef} className="glasses" viewBox="-1 -1 37 18" width="38" height="16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="27" cy="8" r="7.75" fill="white" stroke="#7E7935" stroke-width="0.5"/>
                    <circle cx="8" cy="8" r="7.75" fill="white" stroke="#7E7935" stroke-width="0.5"/>
                    <path d="M15.5 7.5H19.5" stroke="#7E7935"/>

                    <circle className="iris" data-base-cx="8" data-base-cy="8" cx="8" cy="8" r="3" fill="#718AF6"/>
                    <circle className="iris" data-base-cx="8" data-base-cy="8" cx="8" cy="8" r="1.5" fill="black"/>

                    <circle className="iris" data-base-cx="27" data-base-cy="8" cx="27" cy="8" r="3" fill="#718AF6"/>
                    <circle className="iris" data-base-cx="27" data-base-cy="8" cx="27" cy="8" r="1.5" fill="black"/>
                </svg>
                m's Blog
            </Link>
            <ul>
                <li className="subject">
                    <button lang="en" popoverTarget="weekly-nerds-popover">Weekly Nerds</button>
                    <ul popover="" id="weekly-nerds-popover">
                        <li>
                            <Link className="nav-item" to="/weekly-nerds">Alle Weekly Nerds</Link>
                        </li>
                        {weeklyNerds.map(post => (
                            <li key={post.slug}>
                                <Link className="nav-item" to={`/weekly-nerds/${post.slug}`}>
                                    {post.title.replace('Weekly Nerd: ', '').replace('Weekly Nerds: ', '')}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="subject">
                    <button popoverTarget="subjects-popover">Vakken</button>
                    <ul popover="" id="subjects-popover">
                        <li><a className="nav-item" href="vakken/index.html">Alle Vakken</a></li>
                        <li><a className="nav-item" href="vakken/bt.html">Browser Tech</a></li>
                        <li><a className="nav-item" href="vakken/css.html">CSS To The Rescue</a></li>
                        <li><a className="nav-item" href="vakken/hcd.html">Human Centered Design</a></li>
                        <li><a className="nav-item" href="vakken/api.html">API</a></li>
                    </ul>
                </li>
                <li className="subject">
                    <button popoverTarget="meesterschap-popover">Meesterschap</button>
                    <ul popover="" id="meesterschap-popover">
                        <li><a className="nav-item" href="meesterschap/index.html">Meesterschap</a></li>
                        <li><a className="nav-item" href="meesterschap/sprint-0.html">Sprint 0</a></li>
                        <li><a className="nav-item" href="meesterschap/hackathon.html">Hackathon</a></li>
                        <li><a className="nav-item" href="meesterschap/meesterproef.html">Meesterproef</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}