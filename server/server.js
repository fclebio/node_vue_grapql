const { ApolloServer } = require("apollo-server");

const typeDefs = `

	type Item{
		id: Int
		type: String
		description : String
	}

	type Query{
		prefixes: [Item]
		sulfixes: [Item]
	}

`;

const items = [
	{ id: 1, type: "prefix", description: "Air" },
	{ id: 2, type: "prefix", description: "Jet" },
	{ id: 3, type: "prefix", description: "Flight" },
	{ id: 4, type: "sulfix", description: "Hub" },
	{ id: 5, type: "sulfix", description: "Station" },
	{ id: 6, type: "sulfix", description: "Mart" },
]



const resolvers = {
	Query: {
		prefixes() {
			return items.filter(item => item.type === "prefix");
		},
		sulfixes() {
			return items.filter(item => item.type === "sulfix");
		}
	}
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen();