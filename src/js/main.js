import Typed from 'typed.js';
import "iconify-icon";
import { initializeHeader } from "./header.js";

document.addEventListener('DOMContentLoaded', () => {
    initializeHeader('header-container');

    function autoType(elementId, textArray, options = {}) {
        const defaultOptions = {
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
            showCursor: false
        };
        const mergedOptions = { ...defaultOptions, ...options };

        const selector = `#${elementId}`;

        if (typeof Typed === 'undefined') {
            console.error("Typed.js library not found. Please ensure it's loaded before main.js.");
            return null;
        }

        return new Typed(selector, {
            strings: textArray,
            typeSpeed: mergedOptions.typeSpeed,
            backSpeed: mergedOptions.backSpeed,
            backDelay: mergedOptions.backDelay,
            loop: mergedOptions.loop,
            showCursor: mergedOptions.showCursor
        });
    }

    function observeElement(id, callback) {
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Element with ID "${id}" not found for observation.`);
            return;
        }

        const observer = new IntersectionObserver((entries, obs) => {
            if (entries[0].isIntersecting) {
                callback();
                obs.disconnect();
            }
        }, { threshold: 0.5 });

        observer.observe(element);
    }

    observeElement("role", () => autoType("role", ["UI/UX Designer", "Frontend Developer", "Digital Marketer"]));
    observeElement("dots", () => autoType("dots", ["..."], { typeSpeed: 150, backSpeed: 0, backDelay: 500, loop: false }));
});