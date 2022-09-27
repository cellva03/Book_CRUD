const addAdmin = ( )=>{
    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    fetch('http://localhost:8000/register',{
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

const loginAdmin = ( )=>{
    let user = {
        email: document.getElementById('login_email').value,
        password: document.getElementById('login_password').value
    }

    fetch('http://localhost:8000/login',{
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
            // alert('Your logged In')
        }})
    
}

// start of User

const deleteUser = ( id )=>{
    fetch(`http://localhost:8000/dashboard/users/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {console.log(data)
        if (data.user){
            alert(`${data.user}`)
            window.location.reload()
        }
        })
}

const renderUpdatePage = ( id )=>{
    fetch(`http://localhost:8000/dashboard/update-user/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
}

// start for Books

const deleteBook = ( id )=>{
    fetch(`http://localhost:8000/dashboard/books/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {console.log(data)
        if (data.user){
            alert(`${data.user}`)
            window.location.reload()
        }
        })
}

const renderUpdateBookPage = ( id )=>{
    fetch(`http://localhost:8000/dashboard/update-book/${id}`)
    .then(response => response.json())
    .then(data => console.log(data))
}