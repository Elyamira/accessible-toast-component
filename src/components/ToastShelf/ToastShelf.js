import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts }) {
    return (
        <ol className={styles.wrapper}>
            {toasts.map((toast) => (
                <li className={styles.toastWrapper} key={toast.key}>
                    {toast.component}
                    <Toast variant={toast.name}>{toast.message}</Toast>
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
