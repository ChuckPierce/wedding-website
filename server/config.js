const config = {
  mongoURL: process.env.MONGO_URI || 'mongodb://localhost:27017/wedding-website',
  port: process.env.PORT || 8000,
};

export default config;
