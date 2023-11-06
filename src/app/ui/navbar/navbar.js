import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Next.js looks for a file path relative to the 'public' directory
const logo = '/logo.svg';

export default function NavBar() {
    return (
        <header>
            <nav className="sticky top-0 left-0 right-0 z-50 bg-white opacity-95 h-[100px] px-[16px] drop-shadow-md flex flex-col justify-center">
                <div className="mx-auto max-w-[1120px] w-full min-w-max flex flex-row justify-between">
                    <Link
                        href="/"
                        aria-label="Link to Johnathon Bowers home page"
                    >
                        <Image
                            priority
                            src={logo}
                            width={161}
                            height={36}
                            alt="Johnathon Bowers logo"
                        />
                    </Link>
                    <section
                        aria-label="Social Links"
                        className="flex items-center"
                    >
                        <ul className="flex flex-row justify-between items-center w-[88px]">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/johnathonbowers/"
                                    target="_blank"
                                    // Important for security and privacy reasons
                                    // "noopener" keeps the new page that opens from having a reference back to the original page through the `window.opener` property
                                    // "noreferrer" tells the browser not to send the HTTP Referrer header
                                    rel="noopener noreferrer"
                                    aria-label="Johnathon Bowers on LinkedIn (opens in a new tab)"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="h-[36px] w-[36px] text-slate-400"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/JohnathonBowers"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Johnathon Bowers on GitHub (opens in a new tab)"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="h-[36px] w-[36px] text-slate-400"
                                        aria-hidden="true"
                                    />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </nav>
        </header>
    );
}
