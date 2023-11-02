import Image from 'next/image';
import logoIcon from '../../../../public/logoIcon.svg';
import styles from './logo.module.css';

export default function Logo() {
    return (
        <div className={styles['logo-container']}>
            <Image
                priority
                src={logoIcon}
                width={120}
                height={120}
                alt="Logo icon"
            />
            <p>Johnathon Bowers</p>
        </div>
    );
}
