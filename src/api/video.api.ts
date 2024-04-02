import { AxiosResponse } from 'axios';
import { ModelName } from '../config/constants';
import { DetailResponse } from '../types/common';
import { Video } from '../types/home-page';
import BaseApi from './base.api';

export class VideoApi extends BaseApi {
    name = ModelName.video
    static readonly apiInstance = new VideoApi();
    constructor(name?: ModelName) {
        super(name);
        if (name) {
            this.name = name;
        }
    }

    public shareVideo = async (link: string) => {
        return this.create({link} )
    }

    public postLike = async (videoId: string) =>  {
        return await this.instance.post<undefined, AxiosResponse<DetailResponse<Video>>>(`/${this.name}/${videoId}/like`)
    }

    
    public postDislike = async (videoId: string) =>  {
        return await this.instance.post<undefined, AxiosResponse<DetailResponse<Video>>>(`/${this.name}/${videoId}/dislike`)
    }
}