import React from 'react';

function JourneyPage({ globalLoading }) {
    if (globalLoading) {
        return null;
    }

    return (
        <div className='bg-[#101010]'>
            <section className='journey-section first-section'>
                <h1>My Journey</h1>
                <p>This page will detail my journey, including my experiences, challenges, and milestones.</p>
            </section>
        </div>
    );
}

export default JourneyPage;