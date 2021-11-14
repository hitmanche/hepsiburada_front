module.exports = {
  baseUrl:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://hepsiburada-backend.herokuapp.com/",
    
};
