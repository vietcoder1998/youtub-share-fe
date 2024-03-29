
export declare namespace Model {
    type UserModel = {
        id: string
        fullName: string
        firstName: string
        lastName: string
        birthDate: string
        avatarUrl: string
        coverUrl: string

    }

    type YoutubeShare = {
        name: string
        url: string
        like: string
        dislike: string
        videoURL: string
        videoEncodeURL: string
        lastShare: string
    }

    type Authenticate = {
        userId: string
        token: string
        accessToken: string
        refreshToken: string
        expiresIn: number
        isValidate: string
    }
}