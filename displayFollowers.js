const container = document.querySelector('.container')


const display = (followers) => {
    const newFollowers = followers.map((person) => {
        const {avatar_url, login, html_url} = person
        return `<article class="card">
                    <img src="${avatar_url}" alt="${login}"/>
                    <h4>${login}</h4>
                </article>`
    })
}

export default display
 