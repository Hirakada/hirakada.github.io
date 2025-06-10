function createHeaderHTML() {
    return `
        <header>
            <div class="header-content">
                <img src="./src/assets/img/logo-white.svg" alt="Portfolio Logo">
                <nav>
                    <ul>
                        <li><a href="./index.html">My</a></li>
                        <li><a href="./projects/index.html">Projects</a></li>
                        <li><a href="./docs/index.html">Documentation</a></li>
                    </ul>
                </nav>
                <a class="contact" href="/contact/index.html">Contact</a>
            </div>
        </header>
    `;
}

export function initializeHeader(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = createHeaderHTML();

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    } else {
        console.error(`Header container with ID "${containerId}" not found.`);
    }
}