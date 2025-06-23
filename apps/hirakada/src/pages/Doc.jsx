import React from 'react';

import '../styles/docpage.css';

function DocPage({ globalLoading }) {
    if (globalLoading) {
        return null;
    }

    const domain = window.location.hostname;

    return (
        <>
            <section className='welcome-section first-section items-start'>
                <div className='flex flex-row items-center justify-center'>
                    <h1>Welcome to</h2>
                    <h1 className='domain-name'>{domain}</h2>
                </div>

                <p className='section-description text-description'>
                    This page provides a comprehensive overview of the website's purpose, its key features, the technologies that power it, and how it contributes to continuous learning and professional growth.
                </p>
            </section>

            <section className='web-section'>

            </section>
        </>
    );
}

export default DocPage;