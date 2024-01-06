

const clearSearchHistory = () => {
    const historyClear = []
    localStorage.setItem('cities', historyClear)
}

export default clearSearchHistory