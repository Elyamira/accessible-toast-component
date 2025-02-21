import React from 'react';
import {
    AlertOctagon,
    AlertTriangle,
    CheckCircle,
    Info,
    X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
    notice: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    error: AlertOctagon,
};

function Toast({
    variant = 'notice',
    children,
    // message = '16 photos have been uploaded',
    closeHandler,
}) {
    const SelectedIcon = ICONS_BY_VARIANT[variant];
    return (
        <div className={`${styles.toast} ${styles[variant]}`}>
            <div className={styles.iconContainer}>
                <SelectedIcon size={24} />
            </div>
            <p className={styles.content}>{children}</p>
            <button className={styles.closeButton} onClick={closeHandler}>
                <X size={24} />
                <VisuallyHidden>Dismiss message</VisuallyHidden>
            </button>
        </div>
    );
}

export default Toast;
