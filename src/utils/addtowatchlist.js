
function handleWatchlistAdd(movie_id){
    fetch(`/api/watchlist?movie_id=${movie_id}`, {
        method: 'PATCH',
    })
    .then(res=> res.json())
    .then(res=> console.log(res))
}

export default handleWatchlistAdd;