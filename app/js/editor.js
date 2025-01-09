// Save this as json-formatter.js
document.addEventListener('DOMContentLoaded', function() {
    // Add the highlighting pre/code elements
    const editArea = document.querySelector('.edit-area');
    const highlighting = document.createElement('pre');
    highlighting.className = 'highlighting';
    highlighting.setAttribute('aria-hidden', 'true');
    const code = document.createElement('code');
    code.className = 'language-json';
    code.id = 'highlighting-content';
    highlighting.appendChild(code);
    editArea.insertBefore(highlighting, editArea.firstChild);

    const editor = document.getElementById('code-editor');
    const highlightingContent = document.getElementById('highlighting-content');

    function update(text) {
        if (!text) {
            highlightingContent.innerHTML = '';
            return;
        }
        
        try {
            // Try to parse and format JSON
            const obj = JSON.parse(text);
            const formatted = JSON.stringify(obj, null, 2);
            
            // Update textarea with formatted text
            if (text !== formatted) {
                editor.value = formatted;
            }
            
            // Highlight the formatted code
            highlightingContent.innerHTML = Prism.highlight(
                formatted,
                Prism.languages.json,
                'json'
            );
        } catch (e) {
            // If invalid JSON, just highlight the raw text
            highlightingContent.innerHTML = text;
        }
    }

    // Sync scrolling
    editor.addEventListener('scroll', () => {
        highlighting.scrollTop = editor.scrollTop;
        highlighting.scrollLeft = editor.scrollLeft;
    });

    // Update on input
    editor.addEventListener('input', () => {
        update(editor.value);
    });

    // Handle tab key
    editor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            
            editor.value = editor.value.substring(0, start) + '  ' + 
                          editor.value.substring(end);
            editor.selectionStart = editor.selectionEnd = start + 2;
            update(editor.value);
        }
    });
});