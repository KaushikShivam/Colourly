const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App started on port: ${PORT}`));
