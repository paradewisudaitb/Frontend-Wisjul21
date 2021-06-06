import dotenv from 'dotenv';
dotenv.config();

const config = {
  /**
   * URL ke backend. Jangan diakhiri dengan '/'
   * @default http://localhost:8080
   * @type { string }
   */
  BACKEND_URL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080',
};

export default config;
