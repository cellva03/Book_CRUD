const addUser = ( )=>{
    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    fetch('http://localhost:5000/user/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error){
            alert(`${data.error}`)
        }
        if (data.user){
            alert(`${data.user}`)
        }
})
}

const loginUser = ( )=>{
    let user = {
        email: document.getElementById('login_email').value,
        password: document.getElementById('login_password').value
    }

    fetch('http://localhost:5000/user/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error){
            alert(`${data.error}`)
        }
        if (data.user){
            localStorage.setItem("name", data.user);
            window.location.href = '/dashboard'
        }})
    
}

const readLaterBook = (id)=>{
    const endpoint = `/dashboard/read/${id}`;
    fetch(endpoint,{
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })  
}

const likedBook = (id)=>{
    const endpoint = `/dashboard/liked/${id}`;
    console.log(id)
    fetch(endpoint,{
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }) 
    
}