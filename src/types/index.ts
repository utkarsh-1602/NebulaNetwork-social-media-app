export type INewUser = {
    name: string;
    email: string;
    username: string;
    password: string;
}

export type IUser = {
    id: string;
    name: string;
    username: string;
    email: string;
    imageUrl: string;
    bio: string;
};

export type INavLink = {
    imgURL: string;
    route: string;
    label: string;
};

export type INewPost = {
    userId: string;
    caption: string;
    file: File[];
    location?: string;
    tags?: string;
};

export type IUpdatePost = {
    postId: string;
    caption: string;
    imageId: string;
    imageUrl: URL;
    file: File[];
    location?: string;
    tags?: string;
};
