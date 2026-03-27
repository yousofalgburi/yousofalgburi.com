import { ObjectType, Field } from 'type-graphql'

@ObjectType()
export class Me {
	@Field(() => String)
	name: string

	@Field(() => String)
	about: string
}
