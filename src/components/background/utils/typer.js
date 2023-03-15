const loading = (loadingBar) => {
    let i = 0
    const loadingInt = setInterval(() => {
        loadingBar.textContent = ''.padStart(i + 1, '▓').padEnd(20, '░') + ` || ${i * 5 + 5}%`

        i++
        if (i === 20) {
            clearInterval(loadingInt)
        }
    }, 50);
}

export const typer = async (str, id) => {
    const ele = document.getElementById('line' + id),
        loadingBar = document.getElementById('loading-bar' + id),
        text = str

    if (!ele) {
        loading(loadingBar)
        return
    }

    ele.textContent = ''
    loadingBar.textContent = ''

    let i = 0
    const typerInt = setInterval(() => {
        ele.append(text[i])

        i++
        if (i === text.length) {
            clearInterval(typerInt)
            loading(loadingBar)
        }
    }, 5);
}