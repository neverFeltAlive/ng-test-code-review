document.querySelector('form').addEventListener('submit', (event) => {
    const formData = new FormData(event.target);
    const postData = {};
    formData.forEach((value, key) => {
        postData[key] = value;
    })
    
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        if (response.status === 200) {
            window.location.replace('/home');
        } else {
            console.log(response);
        }
    })
})
