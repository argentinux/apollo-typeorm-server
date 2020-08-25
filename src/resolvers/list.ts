import { Resolver, Query, Ctx, Arg, Mutation } from 'type-graphql'
import { AppContext } from 'src/types'
import { List } from '../entities/List'

@Resolver()
export default class ListResolver {
  @Mutation(() => List)
  async createList(@Arg('name') name: string, @Ctx() { em }: AppContext) {
    const list = em.create(List, { name })
    await em.save(list)
    return list
  }

  @Query(() => [List])
  async lists(@Ctx() { em }: AppContext) {
    const lists = await em.find(List)
    return lists
  }

  @Query(() => List, { nullable: true })
  async list(@Arg('id') id: number, @Ctx() { em }: AppContext) {
    const list = await em.findOne(List, id)
    return list
  }

  @Mutation(() => List, { nullable: true })
  async updateList(
    @Arg('name') name: string,
    @Arg('id') id: number,
    @Ctx() { em }: AppContext,
  ) {
    const list = await em.findOne(List, id)
    if (!list) return null
    list.name = name
    em.save(list)
    return list
  }

  @Mutation(() => Boolean)
  async deleteList(@Arg('id') id: number, @Ctx() { em }: AppContext) {
    const list = await em.findOne(List, id)
    if (!list) return false
    em.remove(list)
    return true
  }
}
