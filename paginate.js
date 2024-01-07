const paginate = (followers) => {
    const itemPerPage = 9
    const numberOfPages = Math.ceil(followers.length / itemPerPage) 
    const newFollowers = Array.from({length:numberOfPages}, (_, index) => {
        const start = index * itemPerPage
        return followers.slice(start, start + itemPerPage)
    })
    return newFollowers
}

export default paginate
