document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('sidebarCollapse').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('content').classList.toggle('active');
    });
    document.getElementById('darkModeToggle').addEventListener('click', function () {
        document.documentElement.setAttribute("data-bs-theme", (document.documentElement.getAttribute("data-bs-theme") == "light" ? "dark" : "light"));
    });
});

let activePage = "page0";
function showpage(pageid) {
    document.getElementById(activePage).style.display = 'none';
    document.getElementById(pageid).style.display = 'block';
    activePage = pageid;
}

async function sendMessage() {
    const prompt = "abc";
    const responseElement = document.getElementById('response');

    const response = await fetch('https://main--interessenwochebackend.netlify.app/.netlify/functions/generate-text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: prompt }),
    });

    const data = await response.json();
    responseElement.innerText = data.response;
}