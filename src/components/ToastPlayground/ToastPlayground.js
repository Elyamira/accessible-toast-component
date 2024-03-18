import React, { useState } from 'react';
import Toast from '../Toast';
import ToastShelf from '../ToastShelf';
import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [message, setMessage] = useState('');
    const [toasts, setToasts] = useState([]);
    const [currentVariant, setCurrntVariant] = useState(VARIANT_OPTIONS[0]);

    const closeToastHandler = (id) => {
        const nextToasts = toasts.filter((variant) => variant.id !== id);
        setToasts(nextToasts);
    };

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt='Cute toast mascot' src='/toast.png' />
                <h1>Toast Playground</h1>
            </header>
            <div>
                <ToastShelf toasts={toasts} closeHandler={closeToastHandler} />
            </div>
            <form
                className={styles.controlsWrapper}
                onSubmit={(e) => {
                    e.preventDefault();
                    setToasts([
                        ...toasts,
                        {
                            name: currentVariant,
                            id: crypto.randomUUID(),
                            message: message,
                        },
                    ]);
                    setMessage('');
                    setCurrntVariant(VARIANT_OPTIONS[0]);
                }}>
                <div className={styles.row}>
                    <label
                        htmlFor='message'
                        className={styles.label}
                        style={{ alignSelf: 'baseline' }}>
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea
                            id='message'
                            value={message}
                            className={styles.messageInput}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                        {VARIANT_OPTIONS.map((option) => (
                            <label
                                htmlFor={`variant-${option}`}
                                key={`variant-${option}`}>
                                <input
                                    id={`variant-${option}`}
                                    type='radio'
                                    name='variant'
                                    value={option}
                                    checked={option === currentVariant}
                                    onChange={(e) => {
                                        setCurrntVariant(e.target.value);
                                    }}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                        <Button type='submit'>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
