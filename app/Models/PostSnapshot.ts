import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class PostSnapshot extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public postId: number

  @column()
  public revision: number

  @column.dateTime()
  public revisionDate: DateTime

  @column()
  public revisedBy: number

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
  public body: string

  @column()
  public videoUrl: string

  @column()
  public isFeatured: boolean

  @column()
  public isPersonal: boolean

  @column()
  public viewCount: number

  @column()
  public viewCountUnique: number

  @column()
  public stateId: number

  @column()
  public timeZone: string

  @column()
  public publishAtUser: string

  @column.dateTime()
  public publishAt: DateTime

  @column.dateTime()
  public deleteAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
