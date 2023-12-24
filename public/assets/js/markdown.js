const markdown = "# HTML Minifier by Santo\r\n\r\nPOST HTML to the API URL and get minified HTML.\r\n\r\n**API URL: `http://<domain>/api/minify`**\r\n\r\n### Request\r\n\r\n```javascript\r\nconst url = \"\";\r\nconst data = { html: '\"<html>\\n   </html>\"' };\r\n\r\nfetch(url, {\r\n  method: \"POST\",\r\n  headers: {\r\n    \"Content-Type\": \"application/json\",\r\n  },\r\n  body: JSON.stringify(data),\r\n})\r\n  .then((res) => res.json())\r\n  .then((data) => {\r\n    console.log(data);\r\n  })\r\n  .catch((err) => {\r\n    console.log(err);\r\n  });\r\n```\r\n\r\n### Response\r\n\r\n```json\r\n{\r\n  \"html\": \"\\\"<html></html>\\\"\"\r\n}\r\n```\r\n"

function renderMarkdown() {
    if (typeof markdown == "string") {
        const md = new markdownit();
        if (md) {
            const html = md.render(markdown);
            const makdownBody = document.querySelector(".render-markdown");
            if (makdownBody) {
                makdownBody.innerHTML = html;
                setTimeout(() => {
                    hljs.highlightAll();
                }, 10);
            }
        }
    }
};

window.addEventListener("DOMContentLoaded", renderMarkdown);