const jwt = require("jsonwebtoken");

const sendErrorResponse = (res, statusCode, message) => {
  return res.status(statusCode).json({ error: message });
};

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return sendErrorResponse(res, 401, "Cabeçalho de autorização ausente");
  }
  const token = authHeader.replace("Bearer ", "").trim();

  if (!token || token === "") {
    return sendErrorResponse(res, 401, "Nenhum token fornecido");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    console.error("JWT Error:", error);
    return sendErrorResponse(res, 401, "Token inválido ou expirado");
  }
};
