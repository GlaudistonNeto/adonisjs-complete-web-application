import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public rouleId: number

  @column()
  public username: string

  @column()
  public rememberMeToken: string

  @column()
  public avatarUrl: string

  @column()
  public githubAccessToken: string

  @column()
  public googleAccessToken: string

  @column()
  public twitterAccessToken: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
