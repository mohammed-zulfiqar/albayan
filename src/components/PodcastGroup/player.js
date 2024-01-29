import Image from "next/image";
import authorImage from "@/images/author-image-2.png";
import podcastIcon from "@/images/podcast-icon.png";
import radioIcon from "@/images/radio-icon.png";
import { BsPlus } from "react-icons/bs";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export function PodcastPlayer() {
    return (
        <>
            <section className="section-podcast-player">
                <div className="container">
                    <div className="right-column">
                        <div className="description">
                            وقت الرياضة<span>عهد أفندي</span>
                        </div>
                        <div className="podcast-icon">
                            <Image
                                src={podcastIcon}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="center-column">
                        <AudioPlayer
                            src="https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_MP3.mp3"
                            onPlay={e => console.log("onPlay")}
                        />
                        <Image
                            src={authorImage}
                            alt=""
                            className="podcast-author"
                        />
                    </div>
                    <div className="left-column">
                        <Image
                            src={radioIcon}
                            className="radio-image"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
