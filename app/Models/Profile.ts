import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Asset from './Asset'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public avatarAssetId: number

  @column()
  public biography: string

  @column()
  public location: string

  @column()
  public website: string

  @column()
  public company: string

  @column()
  public twitterUrl: string

  @column()
  public facebookUrl: string

  @column()
  public instagramUrl: string

  @column()
  public linkedinUrl: string

  @column()
  public youtubeUrl: string

  @column()
  public githubUrl: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Asset)
  public asset: BelongsTo<typeof Asset>
}
