// Add your code here
function submitData (name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
        .then(function(response) {
            return response.json()
        })
        .then(function(object) {
            appendToDom(object)
        })
        .catch(function(error) {
            document.body.textContent = "Unauthorized Access"
        })
}

function appendToDom(object) {
    let body = document.querySelector('body')
    let p = document.createElement('p')
    p.textContent = object.id 
    body.appendChild(p)
}