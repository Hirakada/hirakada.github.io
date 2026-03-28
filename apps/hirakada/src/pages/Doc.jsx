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
                    <h1>Welcome to</h1>
                    <h1 className='domain-name'>{domain}</h1>
                </div>

                <p className='section-description text-description'>
                    Nothing here.
                </p>
            </section>

            <section className='web-section'>

            </section>
        </>
    );
}

export default DocPage;