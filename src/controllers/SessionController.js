const SessionService = require('../services/Session.service')

class SessionController {
  async auth(request, response, next) {
    try {
      const { codigo } = request.body

      const session = new SessionService()

      const user = await session.execute(codigo)

      return response.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = SessionController
