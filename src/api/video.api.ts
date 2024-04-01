import { ModelName } from '../config/constants';
import BaseApi from './base.api';

export class VideoApi extends BaseApi {
    name = ModelName.video
    static apiInstance = new VideoApi();
    constructor(name?: ModelName) {
        super(name);
        if (name) {
            this.name = name;
        }
    }

    public shareVideo = async (link: string) => {
        return this.create({link} )
    }
}