const fs = require('fs');
const path = require('path');

const files = [
    'src/pages/app/appsdetails.astro',
    'src/pages/app/nutritiondetails.astro',
    'src/pages/app/musicdetails.astro',
    'src/pages/app/financedetails.astro'
];

files.forEach(relativePath => {
    const fullPath = path.resolve(process.cwd(), relativePath);
    try {
        if (fs.existsSync(fullPath)) {
            const content = fs.readFileSync(fullPath, 'utf8');
            // Replace href="/chat" with href="/app" globally
            // Also checking for potential whitespace variations just in case
            const newContent = content.replace(/href=["']\/chat["']/g, 'href="/app"');

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated ${relativePath}`);
            } else {
                console.log(`No occurrences found in ${relativePath}`);
            }
        } else {
            console.log(`File not found: ${relativePath}`);
        }
    } catch (err) {
        console.error(`Error processing ${relativePath}:`, err);
    }
});
