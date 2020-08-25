import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'

@ObjectType()
@Entity()
export class List {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({ nullable: false })
  name!: string

  @Field(() => String)
  @Column({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
  created_at!: string
}
