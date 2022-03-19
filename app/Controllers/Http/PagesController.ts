import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagesController {
  public home ({ view }:HttpContextContract) {
    return view.render('welcome')
  }

  public about ({ params }:HttpContextContract) {
    return params.name ? `About ${params.name}'s page`
          : 'About page'
  }

  public contact () {
    return 'Contact page!'
  }
}
