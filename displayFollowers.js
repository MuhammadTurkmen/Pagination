const container = document.querySelector('.container')


const display = (followers) => {
    const newFollowers = followers.map((person) => {
        const {avatar_url, login, html_url} = person
        return `<article class="card">
                    <img src="${avatar_url}"/>
                </article>`
    })
}

export default display
 