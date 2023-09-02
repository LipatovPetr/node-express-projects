const login = async (req, res) => {
  res.send("Fake login/Registe/Signup Route");
};

const dashboard = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: "Hello, Peter",
    secret: `Here is your secrete number ${randomNumber}`,
  });
};

module.exports = { login, dashboard };
