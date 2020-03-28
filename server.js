const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXEPTION. SHUTTING DOWN', err);
  console.log(err.name, err.message);
  process.exit(1);
});

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

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION');
  server.close(() => {
    process.exit(1);
  });
});
