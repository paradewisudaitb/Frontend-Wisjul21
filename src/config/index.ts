import dotenv from 'dotenv';
const envFound = dotenv.config();

console.log(envFound);

export default {
  /**
   * URL ke backend. Jangan diakhiri dengan '/'
   * @default http://localhost:8080
   * @type { string }
   */
  BACKEND_URL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080',
};