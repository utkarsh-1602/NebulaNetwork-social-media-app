import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { createUserAccount, signInAccount } from "../appwrite/api";
import { INewUser } from "@/types";
// useQuery is for fetching the data
// useMutation is for modifying the data
// useQueryClient is responsible for managing the cache and coordinating data fetching and updating
// useInfiniteQuery hook is used for paginated or infinite queries, where you have a large set of data that needs to be fetched incrementally. It's useful when working with APIs that support pagination, allowing you to fetch and display data in chunks

export const useCreateUserAccountMutation = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user)
    })
}

export const useSignInAccountMutation = () => {
    return useMutation({
        mutationFn: (user: {
            email: string;
            password: string;
        }) => signInAccount(user)
    })
}

export const useSignOutAccount = () => {
    return useMutation({
        mutationFn: signOutAccount,
    });
};
