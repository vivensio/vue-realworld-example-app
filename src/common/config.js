export default {}
const PORT = window.Cypress ? '3001' : '3000'

export const API_URL = `http://localhost:${PORT}/api`
