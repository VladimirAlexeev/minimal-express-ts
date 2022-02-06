import { IResolvers } from "@graphql-tools/utils";
import { usersList } from "../usersList";

export const resolvers: IResolvers = {
    Query: {
        usersList: () => {
            return usersList;
        }
    },
    Mutation: {
        deleteUser: (_root: undefined, { id }: { id: string }) => {
            for(let i = 0; i < usersList.length; i++) {
                if(usersList[i].id === id) {
                    return usersList.splice(i, 1)[0];
                }
            }

            throw new Error(`failed to delete listing`);
        }
    }
};