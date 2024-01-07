const paginate = (followers) => {
    const itemPerPage = 10
    const numberOfPages = Math.ceil(followers.length / itemPerPage) 
    const newFollowers = Array.from({length:numberOfPages}, (_, index) => {
        
    })
}

export default paginate
