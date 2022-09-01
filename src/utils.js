import { v4 as uuidv4 } from "uuid";

function groove() {
    return [
        {
            name: "Thinking Out Loud",
            cover: "./res/ProfileMusicPic.jpg",
            artist: "Kevin Mooney",
            audio: "./res/I-am-not-the-only-one.wav",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "I am Not the Only One",
            cover: "./res/ProfileMusicPic.jpg",
            artist: "Kevin Mooney",
            audio: "./res/Thinking-out-loud.wav",
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        }

    ]
}

export default groove;