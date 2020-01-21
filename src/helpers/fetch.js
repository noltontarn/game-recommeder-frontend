export const fetchForJson = async (url, options) => {
    const result = await fetch(url, options)
    if (result.ok) {
        const json = await result.json()
        return json
    } else {
        console.log(`fetch ${url} error`)
        return
    }
}