const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const fetchFollowers = async () => {
    const response = await fetch(url)
}

export default fetchFollowers
