import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema as Schema, rules } from '@ioc:Adonis/Core/Validator'
// import AuthAttemptService from 'App/Services/AuthAttemptServices'

export default class AuthController {
  public async signupShow({ view }: HttpContextContract) {
    return view.render('auth/signup')
  }
  public async signup({ request, response, auth, session }: HttpContextContract) {
    const schema = Schema.create({
      username: Schema.string({ trim: true }, [
        rules.unique({ table: 'users', column: 'username', caseInsensitive: true }),
      ]),
      email: Schema.string({ trim: true }, [rules.unique({ table: 'users', column: 'email' })]),
      password: Schema.string({ trim: true }, [rules.minLength(8)]),
    })

    const data = await request.validate({ schema })

    const user = await User.create(data)

    await auth.login(user)

    session.flash('success', 'Welcome Aboard!')

    return response.redirect('/')
  }
}
