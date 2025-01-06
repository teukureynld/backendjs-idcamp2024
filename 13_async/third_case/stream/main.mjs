yiu67'use strict';
import { promises as fs } from 'fs';
const txtFilePath = './file.txt'; 


async function main() {
    try {
        await fs.access(txtFilePath);
    } catch (err) {
        console.info('File tidak ada!');
        process.exit(1); // Exit the process with a failure code
    }

    try {
        // Read the file content
        const data = await fs.readFile(txtFilePath, 'utf8');
        let txt = data; // Use the actual file content
        txt = txt.replace('%username%', 'teuku'); // Replace the placeholder

        if (txt.includes('teuku')) {
            console.log('Text has changed!');
        } else {
            console.error(new Error('Text failed to change!'));
        }
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
    }
}

main();