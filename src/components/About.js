import React from "react";

const About = ({ imageSrc, about }) => {
    const image = "https://via.placeholder.com/215";
    const defaultAbout = "Default about text"; // Define your default about text here

    return (
        <aside>
            <img src={imageSrc || image} alt="blog logo" />
            <p>{about || defaultAbout}</p>
        </aside>
    );
};

export default About;
