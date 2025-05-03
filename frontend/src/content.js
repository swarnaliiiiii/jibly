function ExtractDetails() {
    const jtitle = document.querySelector('h1')?.innerText || 'No title found';
    const jdescription = document.querySelector('article')?.innerText || 'No description found';
    const jobData = {
        title: jtitle,
        description: jdescription,
        userId: 'user123',
    };
    fetch('http://localhost:5173/joh', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
    })

    .then(res => res.json())
    .then(data => {
        console.log('Match result:', data);
        alert(`Match Score: ${data.score}%\nImprovements: %{data.improvements.join(',)}`);
    })
    .catch(err => console.error('Error analyzing job:', err));
}

ExtractDetails();