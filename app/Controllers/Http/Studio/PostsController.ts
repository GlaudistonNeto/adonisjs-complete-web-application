import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import State from 'App/Enums/States'
import Post from 'App/Models/Post'
import PostStoreValidator from 'App/Validators/PostStoreValidator'

export default class PostsController {
  public async index({ view }: HttpContextContract) {
    return view.render('studio/posts/index', {})
  }

  public async create({ view }: HttpContextContract) {
    return view.render('studio/posts/create', {})
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(PostStoreValidator)

    await Post.create({ stateId: State.PUBLIC, ...data })

    return response.redirect().toRoute('studio.posts.index')
  }
}
