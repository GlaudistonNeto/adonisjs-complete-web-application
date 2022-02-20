import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  BaseModel,
  beforeSave,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  HasOne,
  hasOne,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Role from './Role'
import Topic from './Topic'
import Profile from './Profile'
import Post from './Post'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public rouleId: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

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

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @belongsTo(() => Role)
  public role: BelongsTo<typeof Role>

  @hasMany(() => Topic)
  public topics: HasMany<typeof Topic>

  @hasOne(() => Profile)
  public profiler: HasOne<typeof Profile>

  @manyToMany(() => Post)
  public posts: ManyToMany<typeof Post>
}
