import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public slug: string

  @column()
  public pageTitle: string

  @column()
  public description: string

  @column()
  public metaDescription: string

  @column()
  public canonical: string

  @column()
  public nody: string

  @column()
  public videoUrl: string

  @column()
  public isFeatured: boolean

  @column()
  public isPersonal: boolean

  @column()
  public viewContent: number

  @column()
  public viewContentUnique: number

  @column()
  public stateId: number

  @column()
  public timezone: string

  @column()
  public publishAtUser: string

  @column.dateTime()
  public publishAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
