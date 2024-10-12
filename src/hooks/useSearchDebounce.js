export const useSearchDebounce = (fn, delay) => {
    let timerID

    return (...params) => {
        clearTimeout(timerID)
        timerID = setTimeout(() => fn(...params), delay)
    }
}
