let response = fetch('url', {
    method: "POST", //sending Post request
    headers: {"Content-type": "application/json"}, //request headers
    body: JSON.stringify({ // sending body in the form of the string
        title: 'foo',
        body: 'bar',
        userid: 1
    })
})
.then((response) => {
    return response.json();
})
.then((value) => {
    console.log(value);
});