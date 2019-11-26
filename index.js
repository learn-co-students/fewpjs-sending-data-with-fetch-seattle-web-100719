function submitData(name, email) {

    let url = 'http://localhost:3000/users'

    let configurationObject = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json' 
        },
        body: JSON.stringify({
            name,
            email
        })
    };

    return fetch(url, configurationObject)
    .then( resp => resp.json())
      .then( function ( object ) {
        document.body.innerHTML = object[ "id" ]
      } )
      .catch( function ( error ) {
        document.body.innerHTML = error.message
      } )
}