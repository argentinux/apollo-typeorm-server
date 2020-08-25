import { Resolver, Query, Arg } from 'type-graphql'

@Resolver()
export default class HelloResolver {
  @Query(() => String)
  greet(@Arg('name') name: string) {
    return `Hello, ${name}!`
  }
}
