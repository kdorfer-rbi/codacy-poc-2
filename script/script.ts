import { greet } from '../util'; // Import the duplicated function

function submitForm(): void {
    const name: string = (document.getElementById('name') as HTMLInputElement).value;
    alert(greet(name)); // Use the greet function
}

// Duplicate function with slight modification
function submitFormAgain(): void {
    const name: string = (document.getElementById('name') as HTMLInputElement).value;
    alert('Hi, ' + name);
}

// Note: You'll need to compile this TypeScript to JavaScript for the browser to use it.
// Use a command like `tsc scripts/script.ts --outDir scripts --removeComments` to compile.