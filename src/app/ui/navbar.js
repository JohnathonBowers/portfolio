import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

// Next.js looks for a file path relative to the 'public' directory
const logo = '/logo.svg';

export default function NavBar() {
    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-white opacity-95 h-[64px] px-[16px] flex flex-col justify-center ">
            <div className="mx-auto max-w-[1120px] w-full min-w-max flex flex-row justify-between">
                <Link href="/">
                    <Image
                        priority
                        className="mr-[32px]"
                        src={logo}
                        width={161}
                        height={36}
                        alt="Johnathon Bowers Logo"
                    />
                </Link>
                <div className="flex flex-row justify-between items-center w-[64px] ml-[32px]">
                    <a
                        href="https://www.linkedin.com/in/johnathonbowers/"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="h-[24px] w-[24px] text-slate-600"
                        />
                    </a>
                    <a
                        href="https://github.com/JohnathonBowers"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="h-[24px] w-[24px] text-slate-600"
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
}
