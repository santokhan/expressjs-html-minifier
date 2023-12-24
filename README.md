# HTML Minifier by Santo

POST HTML to the API URL and get minified HTML.

**API URL: `http://<domain>/api/minify`**

### Request

```javascript
const url = "";
const data = { html: '"<html>\n   </html>"' };

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
```

### Response

```json
{
  "html": "\"<html></html>\""
}
```
