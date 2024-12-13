async function processFile() {
    const fileInput = document.getElementById('excel-file');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a file first');
        return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
        const response = await fetch('/process_excel', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        if (response.ok) {
            displayResults(data.data);
        } else {
            alert(data.error);
        }
    } catch (error) {
        alert('Error processing file: ' + error.message);
    }
}

function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    // Display your results here similar to your React component logic
} 