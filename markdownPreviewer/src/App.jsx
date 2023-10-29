import React, { useState } from "react";
import { marked } from "marked";

function App() {
  const [markdown, setMarkdown] = useState(`
# Header 1 (H1 Size)

## Subheader (H2 Size)

[Link to OpenAI](https://www.openai.com/)

Inline code: \`const variable = "Hello, World";\`

Code block:

\`\`\`javascript
function sayHello() {
  console.log("Hello, World!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> Blockquote: This is a blockquote.

![Image](https://example.com/image.jpg)

**Bolded text**

End of Markdown.
`);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="editor">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleMarkdownChange}
        />
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <div
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          id="preview"
        />
      </div>
    </div>
  );
}

export default App;
