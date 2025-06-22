import React from 'react';

function JourneyPage({ globalLoading }) {
    if (globalLoading) {
        return null;
    }

    return (
        <>
            <section className='journey-section first-section'>
                <h1>My Journey</h1>
                <p>This page will detail my journey, including my experiences, challenges, and milestones.</p>
            </section>
        </>
    );
}

export default JourneyPage;