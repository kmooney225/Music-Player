import { v4 as uuidv4 } from "uuid";
import cover1 from "../res/ProfileMusicPic.jpg";
import audio1 from "../res/I-am-not-the-only-one.wav";
import audio2 from "../res/Thinking-out-loud.wav";

function groove() {
    return [
        {
            name: "Thinking Out Loud",
            cover: cover1,
            artist: "Kevin Mooney",
            audio: audio1,
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "I am Not the Only One",
            cover: cover1,
            artist: "Kevin Mooney",
            audio: audio2,
            color: ["#205950", "#2ab3bf"],
            id: uuidv4(),
            active: false,
        }

    ]
}

export default groove;