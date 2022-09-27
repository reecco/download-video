import ytdl from "ytdl-core";

class Video {
    static async getInfoVideo(link) {
        let infos = await ytdl.getInfo(link);
        let info = {
            title: infos.videoDetails.title.replace(/[^\x00-\x7F]/g, "")
        }

        return info;
    }
}

export default Video;