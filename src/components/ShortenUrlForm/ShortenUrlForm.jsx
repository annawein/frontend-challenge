/* eslint no-unused-vars: 1 */

import React, { useCallback, useState } from 'react';
import { convertToShort } from '../../service/urlService';
import copiedDataAnimation from '../../assets/lottie/copied.json';
import './styles.css';

const ShortenUrlForm = () => {
    const [value, setValue] = useState('');
    const [urlShorted, setUrlShorted] = useState('');
    const [copyMessage, setCopyMessage] = useState(null);

    const handleOnChange = useCallback(({ target: { value: text } }) => {
        // TODO: Set the component's new state based on the user's input
        setUrlShorted('');
        setValue(text);
    }, [/* TODO: Add necessary deps */]);

    const handleOnSubmit = useCallback(async (e) => {
        e.preventDefault();
        // TODO: shorten url and copy to clipboard
        const result = await convertToShort(value);

        setUrlShorted(result);
        setValue('');
        setCopyMessage(null);
    }, [value, convertToShort]);

    async function copyToClipboard() {
        try {
            // if we need support for IE we can use document.execCommand('copy') or a package
            await navigator.clipboard.writeText(urlShorted);
            setCopyMessage('Copied!');
        } catch (err) {
            setCopyMessage('Failed to copy!');
        }

    }

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="shorten">
                    Url:
                    <input placeholder="Url to shorten" id="shorten" type="text" value={value} onChange={handleOnChange} />
                </label>
                <input type="submit" value="Shorten and copy URL" />
                {/* TODO: show below only when the url has been shortened and copied */}

            </form>
            {urlShorted && (
                <div className="short-result" data-testid="result">
                    {/* Show shortened url --- copied! */}
                    <p className="short-url">{urlShorted}</p>
                    <button className="reset-btn-style btn-copy" type="button" onClick={copyToClipboard}>
                        <span className="copy-message">
                            {copyMessage ?? 'Copy'}
                        </span>
                    </button>
                </div>
            )}
        </>
    );
};

export default ShortenUrlForm;