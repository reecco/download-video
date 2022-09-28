import ytdl from "ytdl-core";

class Video {
    static async getInfoVideo(url) {
        let infos = await ytdl.getInfo(url);
        let urlEmbed = `https://www.youtube.com/embed/${ytdl.getURLVideoID(url)}`;
        let info = {
            title: infos.videoDetails.title.replace(/[^\x00-\x7F]/g, ""),
            url: url,
            urlEmbed: urlEmbed
        }

        return info;
    }
}

export default Video;