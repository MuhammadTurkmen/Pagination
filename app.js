import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'


const title = document.querySelector('.section-title')

const init = async () => {
    const followers = await fetchFollowers()
}

window.addEventListener('load', init)