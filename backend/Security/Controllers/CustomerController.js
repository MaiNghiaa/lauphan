module.exports = {
  // Login ---------
  Login: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email và mật khẩu là bắt buộc.");
    }
    
  },

  // Register endpoint
  register: (req, res) => {
    const { email, password, ten, role } = req.body;

    if (!email || !password || !ten) {
      return res.status(400).send("Email, password, and name are required.");
    }
  },
};
