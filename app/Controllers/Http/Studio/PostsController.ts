import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public async index({ view }: HttpContextContract) {
    return view.render('studio/posts/index', {})
  }

  public async create({ view }: HttpContextContract) {
    return view.render('studio/posts/create', {})
  }

  public async store({ request }: HttpContextContract) {}
}
