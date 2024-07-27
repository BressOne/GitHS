import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axiosThrottle from "axios-request-throttle";
import axios from "axios";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import { MyContext } from "./types";

const throttlerAspect = Number.parseInt(process.env.GH_THROTTLER_ASPECT || "2");
const port = Number.parseInt(process.env.PORT || "4000");

axiosThrottle.use(axios, { requestsPerSecond: throttlerAspect });

const ax = (token: string) =>
  axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

const server = new ApolloServer<MyContext>({ typeDefs, resolvers });
startStandaloneServer(server, {
  context: async () => {
    return { ax };
  },
  listen: { port },
}).then(({ url }) => console.log(`🚀  Server ready at ${url}`));
