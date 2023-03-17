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

export const typer = async ({ text, id, loadingAnim = false, fast = false }) => {
    const ele = document.getElementById('line' + id),
        loadingBar = loadingAnim ? document.getElementById('loading-bar' + id) : null


    if (!ele) {
        loadingBar && loading(loadingBar)
        return
    }

    ele.textContent = ''
    loadingBar && (loadingBar.textContent = '')

    let i = 0
    const typerInt = setInterval(() => {
        ele.append(text[i], fast ? text[i + 1] : '')

        i += fast ? 2 : 1
        if (i === text.length) {
            clearInterval(typerInt)
            loadingBar && loading(loadingBar)
        }
    }, fast ? 1 : 5);
}