const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });

const app = require('./app');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database Connected'));

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () =>
  console.log(`App started on port: ${PORT}`)
);

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
  console.log('Unhandled Rejection! Shutting Down');
});
