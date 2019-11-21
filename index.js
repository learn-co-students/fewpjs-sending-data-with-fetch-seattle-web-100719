// Add your code here
function submitData(name, email){
  let formData = {
    name: name,
    email: email
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  let results = fetch("http://localhost:3000/users", configObj)
  .then(function(response){
    return response.json();
  })
  .then(function(object){
    console.log(object);
    let getId = object.id;
    let body = document.querySelector("body");
    let postId = document.createElement("h1");
    postId.innerText = getId;
    body.appendChild(postId);
  })
  .catch(function(error){
    alert("Bad things! Ragnarők!");
  });

  
}