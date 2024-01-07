const paginate = (followers) => {
    const itemPerPage = 9
    const numberOfPages = Math.ceil(followers.length / itemPerPage) 
    const newFollowers = Array.from({length:numberOfPages}, (_, index) => {
        const start = index * itemPerPage
    })
}

export default paginate
