// DRY code to set unival URL and API const
const BASE_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'j42aHvMnebEBy4GuDh324XlLuEKHd8N9fg5YDM5a'

// set up special label  ▼ and ▲ - ref : guided module 2.1.3
const open = '\u25bc'
const close = '\u25b2'

export default {
    BASE_URL: BASE_URL,
    API_KEY: API_KEY,
    open: open,
    close: close
}

