import React from "react";
import { Link } from "react-router-dom";
import "./video.css";

const Video = ({ subheading, title, heading, text, button, myVideo }) => {
    return (
        <div className="eco__video">
            <video
                autoPlay
                muted
                loop
                playsInline
                id="backgroundVideo"
                className="eco__video-object"
            >
                <source src={myVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {subheading === "" ? null : (
                <h3 className="eco__video-subheader">{subheading}</h3>
            )}
            {title === "" ? null : (
                <h1 className="eco__video-topic">{title}</h1>
            )}
            {heading === "" ? null : (
                <h1 className="eco__video-header">{heading}</h1>
            )}
            {text === "" ? null : <p className="eco__video-text">{text}</p>}
            {button === "" ? null : (
                <Link to="../shop" className="button eco__video-button">
                    {button}
                </Link>
            )}
        </div>
    );
};

export default Video;
