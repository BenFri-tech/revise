// Initialize Lucide icons
lucide.createIcons();

// Constellation background
function initConstellation() {
    const canvas = document.getElementById('constellation');
    const ctx = canvas.getContext('2d');
    let points = [];
    let animationFrameId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createPoints() {
        points = [];
        const numberOfPoints = Math.floor((canvas.width * canvas.height) / 20000);
        
        for (let i = 0; i < numberOfPoints; i++) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
            });
        }
    }

    function drawPoints() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#8b5cf644';
        ctx.strokeStyle = '#8b5cf622';

        points.forEach((point, i) => {
            point.x += point.vx;
            point.y += point.vy;

            if (point.x < 0) point.x = canvas.width;
            if (point.x > canvas.width) point.x = 0;
            if (point.y < 0) point.y = canvas.height;
            if (point.y > canvas.height) point.y = 0;

            ctx.beginPath();
            ctx.arc(point.x, point.y, 1, 0, Math.PI * 2);
            ctx.fill();

            // Draw connections
            for (let j = i + 1; j < points.length; j++) {
                const dx = points[j].x - point.x;
                const dy = points[j].y - point.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(point.x, point.y);
                    ctx.lineTo(points[j].x, points[j].y);
                    ctx.stroke();
                }
            }
        });

        animationFrameId = requestAnimationFrame(drawPoints);
    }

    // Initialize
    resizeCanvas();
    createPoints();
    drawPoints();

    // Handle resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        createPoints();
    });

    // Cleanup function
    return () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    };
}

// Initialize constellation background
initConstellation();

// Router
const routes = {
    '/': {
        title: 'Main information',
        content: `
            <div class="page-header">
                <div class="icon-container">
                    <i data-lucide="help-circle"></i>
                </div>
                <h1>Main information</h1>
            </div>
            <h2>Main information about spoofer</h2>
            <p>Working for <strong>ANY GAME</strong> based on EAC and BE anticheats! Also supported UAC, Ricochet.</p>
            <p>Including: Rust, Apex, Fortnite and many more.</p>
            <p>Check all games supported:</p>
            <ul>
                <li><a href="#">Battleyey</a></li>
                <li><a href="#">Easy Anti Cheat</a></li>
            </ul>
            <h2>Make sure you do that before start.</h2>
            <ul>
                <li>DELETE any bootkit anti-cheats: Faceit, Vanguard, ESEA and others.</li>
                <li>USE <a href="https://drive.usercontent.google.com/download?id=1wmwcEl9Yeoe5pm_on8wCuCuDJjLB7tjE&export=download&authuser=0">DCONTROL</a> and disable FULLY Win Defender!</li>
                <li>Disable:
                    <ul>
                        <li>Secure Boot</li>
                        <li>Fast Boot</li>
                        <li>TPM 2.0 in BIOS</li>
                        <li>Core Isolation in Windows</li>
                    </ul>
                </li>
            </ul>
            <h2>Current Game / Windows banned:</h2>
            <ol>
                <li>Better to reinstall Windows to clean deep tracers.</li>
                <li>If u can't / don't want to reinstall - delete game with Revo uninstaller! Make sure u check deep after each step and delete everything! Then use <a href="#">CLEANER</a></li>
                <li>If you don't want reinstall game (that possible) - use only <a href="#">CLEANER</a>.</li>
                <li>Restart PC after you clean your PC before using spoofer.</li>
                <li>SPOOF PC AND ONLY AFTER DOWNLOAD GAME</li>
            </ol>
        `
    },
    '/antivirus': {
        title: 'Disable Antivirus',
        content: `
            <div class="page-header">
                <div class="icon-container">
                    <i data-lucide="shield"></i>
                </div>
                <h1>Disable Antivirus</h1>
            </div>
            <h2>Antiviruses:</h2>
            <p>Press windows key, type "Add or remove program" and in that list of programs, delete any that are antivirus. (<a href="#" class="text-blue-400">List of all antiviruses</a>)</p>
            <h2>Windows Security:</h2>
            <p>You can use Defender Control to disable Windows Security if you are on Windows 10: <a href="https://drive.usercontent.google.com/download?id=1wmwcEl9Yeoe5pm_on8wCuCuDJjLB7tjE&export=download&authuser=0" class="text-blue-400">Download</a></p>
            <p>Password: <span class="text-gray-400">sordum</span></p>
            <h2>If you aren't on Windows 10 then do the following:</h2>
            <ul>
                <li>Disable Real-Time Protection in Windows Security</li>
                <li>You can also add exclusions on the bottom of the page to keep your loaders from getting deleted occasionally.</li>
            </ul>
        `
    },
    '/fixes': {
        title: 'Error Fixes',
        content: `
            <div class="page-header">
                <div class="icon-container">
                    <i data-lucide="x-circle"></i>
                </div>
                <h1>Error Fixes</h1>
            </div>
            <ul>
                <li>Be sure all C++ Redistributable packs are installed using this link: <a href="https://de1-dl.techpowerup.com/files/Uf-oYLNNRCXoSz522gQOOg/1735980048/Visual-C-Runtimes-All-in-One-Nov-2024.zip" class="text-blue-400">Download</a></li>
                <li>Be sure proper DirectX Runtime is installed using this link: <a href="https://download.microsoft.com/download/1/7/1/1718CCC4-6315-4D8E-9543-8E28A4E18C4C/dxwebsetup.exe" class="text-blue-400">Download</a></li>
                <li>Be sure Memory Integrity is turned off by doing the following: Windows Security → Device Security → Core Isolation → Memory Integrity, turn it off and restart PC</li>
                <li>If Riot Vanguard anti cheat is installed, it is recommended to remove it</li>
            </ul>
            <h2>ERRORS</h2>
            <p>If you experience any issues with the spoofer please follow these, If none of these worked let us know.</p>
            <ul>
                <li>Disable any antiviruses. 
                <li>Disable Valorant anti cheat. 
                <li>Enable Virtualization in bios. 
                <li>Turn off real time protection. 
            </ul>
        `
    },
    '/download': {
        title: 'DOWNLOAD',
        content: `
            <div class="page-header">
                <div class="icon-container">
                    <i data-lucide="download"></i>
                </div>
                <h1>DOWNLOAD</h1>
            </div>
            <a href="https://mega.nz/f89e34b0-3188-4f07-830d-aa1e56429a54" class="text-blue-400 text-lg">DOWNLOAD FROM HERE</a>
        `
    },
    '/instruction': {
        title: 'INSTRUCTION',
        content: `
            <div class="page-header">
                <div class="icon-container">
                    <i data-lucide="file-text"></i>
                </div>
                <h1>INSTRUCTION</h1>
            </div>
            <p>Instruction provided once you're opening loader, just follow step by step.</p>
            <h2 class="text-blue-400">Before start</h2>
            <ol>
                <li>Close any launchers: Epic games, EA, Steam, Battle.net and any other.</li>
                <li>Make sure you have installed <a href="https://bitcheats.net/downloads/VisualC++.zip?__cf_chl_tk=LaR_4cojCLyCmk6vy2Y6emjN8JrNQinnuR0CON7_oIQ-1735936511-1.0.1.1-f24TaBMMtMVhOVVpl1WocG0aM9vQElGCop7Po89pwkw" class="text-blue-400">VCRedist</a> and <a href="https://bitcheats.net/downloads/DirectX.zip" class="text-blue-400">Directx</a></li>
                <li>Disable Windows Defender, Firewall, Smartscreen, Core isolation, Vulnerable driver blocklist (for win 11)</li>
                <li>Unplug any USB stick (drive) from PC</li>
                <li>If problem, install <a href="https://download.microsoft.com/download/A/E/7/AE743F1F-632B-4809-87A9-AA1BB3458E31/DXSDK_Jun10.exe" class="text-blue-400">D3DX</a></li>
            </ol>
            <h2 class="text-red-400">FIRST USAGE SPOOFER / CLEAN WINDOWS REINSTALL / AFTER BAN</h2>
            <p>Use RUNME.exe first, then only start spoofer!</p>
            <h3>Standard simple instruction how to use:</h3>
            <ol>
                <li>Download archive with Spoofer (Cleaner button) and Checker</li>
                <li>Run Checker first and copy/screenshot your serials</li>
                <li>Start Cleaner (optional, if you're banned and have traces. You're not on clean windows reinstall)</li>
                <li>Cleaner take up to 10 minutes, based on your PC.</li>
                <li>Restart PC after Cleaner is DONE. (In next cases, you can run this before every game session)</li>
                <li>Start Spoofer and enter your key. Wait for spoofing process.</li>
                <li>Start Checker again and compare serials. Everything should change/delete</li>
                <li>Install or start game you're spoofed for.</li>
            </ol>
            <h2>Cleaner</h2>
            <p>Cleaner has been completely written to secure and remove all deep contained tracers from any launchers and anti-cheats.</p>
            <h3>For best cleaner performance:</h3>
            <ul>
                <li>ONLY 1 DISK, AND FORTNITE AND EPIC GAMES INSTALLED ON C:\\</li>
            </ul>
            <p>Before Clean, take screenshot of your desktop, since it will delete some shortcuts ONLY FROM DESKTOP!</p>
            <p>If you want to find apps faster, you can use <a href="https://download.revouninstaller.com/download/revosetup.exe" class="text-blue-400">Revo Uninstaller</a></p>
            <div class="warning">
                <p>There is a very low chance that your files/system can be deleted/corrupted. Files for games and desktop shortcuts.</p>
            </div>
        `
    },
    '/problems': {
        title: 'FIX PROBLEMS',
        content: `
            <div class="page-header">
                <div class="icon-container">
                    <i data-lucide="alert-triangle"></i>
                </div>
                <h1>FIX PROBLEMS</h1>
            </div>
            <h2>CMD close after entering key</h2>
            <p>Make sure you're entering right key, key not expired.</p>
            <h2>Fortnite can't find EAC</h2>
            <p>To fix that, just follow instruction from video:</p>
            <div class="video-container">
                <iframe src="https://youtu.be/2IdJSBv1mjk?si=Y-27zk77f_kTF3BZ" frameborder="0" allowfullscreen></iframe>
            </div>
            <h2>Shortcuts deleted from Desktop</h2>
            <p>If desktop is empty, then download <a href="https://download.revouninstaller.com/download/revosetup.exe" class="text-blue-400">Revo Uninstaller</a> and you can find anything you need on your PC.</p>
            <h2>Windows corrupted</h2>
            <p>Chance for that 0.0001%. If you're in that percent, you're very lucky, you need to go and get lottery today.</p>
            <p>Best solution to faster fix that is just reinstall Windows.</p>
        `
    }
};

// Search functionality
const searchButton = document.getElementById('searchButton');
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const closeSearch = document.querySelector('.close-search');

// Search handlers
function openSearch() {
    searchModal.classList.add('active');
    searchInput.focus();
}

function closeSearchModal() {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
}

// Event listeners for search
searchButton.addEventListener('click', openSearch);
closeSearch.addEventListener('click', closeSearchModal);
searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        closeSearchModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        openSearch();
    }
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
        closeSearchModal();
    }
});

// Search input handler
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const results = Object.entries(routes)
        .filter(([_, route]) => route.title.toLowerCase().includes(query))
        .map(([path, route]) => ({
            path,
            title: route.title
        }));

    searchResults.innerHTML = results
        .map(result => `
            <div class="search-result-item" data-path="${result.path}">
                ${result.title}
            </div>
        `)
        .join('');
});

// Handle search result clicks
searchResults.addEventListener('click', (e) => {
    const resultItem = e.target.closest('.search-result-item');
    if (resultItem) {
        const path = resultItem.dataset.path;
        window.location.hash = path;
        closeSearchModal();
    }
});

// Router implementation
function handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const route = routes[hash];
    
    if (route) {
        document.getElementById('mainContent').innerHTML = route.content;
        // Update active sidebar item
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.classList.toggle('active', item.getAttribute('href') === `#${hash}`);
        });
        // Reinitialize Lucide icons for new content
        lucide.createIcons();
        
        // Generate and update table of contents
        updateTableOfContents();
    }
}

// Generate and update table of contents
function updateTableOfContents() {
    const mainContent = document.getElementById('mainContent');
    const headings = mainContent.querySelectorAll('h2, h3');
    const toc = document.getElementById('tableOfContents');
    
    let tocHtml = '<h2>Table of Contents</h2><ul>';
    
    headings.forEach((heading, index) => {
        const id = `section-${index}`;
        heading.id = id;
        const level = heading.tagName === 'H2' ? '' : 'ml-4';
        tocHtml += `<li class="${level}"><a href="#${id}">${heading.textContent}</a></li>`;
    });
    
    tocHtml += '</ul>';
    toc.innerHTML = tocHtml;
}

// Listen for route changes
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);
