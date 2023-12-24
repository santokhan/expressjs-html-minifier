const { json } = require("body-parser")

const markdownData = `
# HTML Minifier by Santo
POST HTML to the API URL and get minified HTML.
`.trim();

function renderMarkdown(params) {
    const md = new markdownit();
    if (md) {
        const html = md.render(markdownData);
        const makdownBody = document.querySelector(".markdown-body");
        console.log(makdownBody);
        if (makdownBody) {
            makdownBody.innerHTML = html;
        }
    }
};

// window.addEventListener("DOMContentLoaded", renderMarkdown);