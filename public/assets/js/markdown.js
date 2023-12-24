function renderMarkdown() {
    fetch(window.location.origin + "/api/markdown").then(res => res.json()).then(data => {
        if (data) {
            const markdown = data.markdown;
            if (typeof markdown == "string") {
                const md = new markdownit();
                if (md) {
                    const html = md.render(data.markdown);
                    const makdownBody = document.querySelector(".render-markdown");
                    if (makdownBody) {
                        makdownBody.innerHTML = html;
                        setTimeout(() => {
                            hljs.highlightAll();
                        }, 10);
                    }
                }
            }
        }
    }).catch(console.error())
};

window.addEventListener("DOMContentLoaded", renderMarkdown);