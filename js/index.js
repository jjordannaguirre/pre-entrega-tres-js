const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'login.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', () => {
    Swal.fire({
        icon: 'info',
        title: 'Hasta pronto!',
        showConfirmButton: false,
        timer: 1500
    }).then(() => {
        localStorage.removeItem('login_success')
        window.location.href = 'login.html'
    })
})

