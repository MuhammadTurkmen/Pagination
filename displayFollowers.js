const container = document.querySelector('.container')


const display = (followers) => {
    const newFollowers = followers.map((person) => {
        const {avatar_url, login, html_url} = person
        return `<article class="card"></article>`
    })
}

export default display
 