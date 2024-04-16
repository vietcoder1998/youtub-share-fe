export type BotScript = { 
    content: string;
    name: string;
}


export type Bot = {
    _id: string;
    name: string;
    type: string;
    description: string;
    token: string;
    script: BotScript;
    type: string;
}

export type AddBotFormInput = {
    name: string;
    description: string;
    avatarUrl: string;
}