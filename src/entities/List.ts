import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class List {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false })
  name!: string

  @Column({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
  created_at!: string
}
