const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: 'config.env' });

const app = require('./app');

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`App started on PORT: ${PORT}`));

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('DB connected');
  });
