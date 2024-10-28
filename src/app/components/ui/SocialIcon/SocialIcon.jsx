import React from 'react';
import styles from './SocialIcon.module.css'
import Link from 'next/link';

const SocialIcon = ({ link, icon, className }) => {
    return (
        <Link href={link} className={styles.button + ' ' + className}>
            <span className='text-primary'>{icon}</span>
        </Link>
    );
};

export default SocialIcon;