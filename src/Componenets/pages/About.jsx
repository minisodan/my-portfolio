import React from "react";
import "./Styles/About.css";

function Card({ title, content }) {
  return (
    <div
      className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md mt-6"
      style={{
        backgroundColor: "#33292f",
        marginRight: "1.5rem",
        color: "white",
      }}
    >
      <h1 className="text-3xl font-semibold text-center mb-4">{title}</h1>
      <div className="text-base text-zinc-200 leading-relaxed">
        {content.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: "1rem" }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="m-4 text-center">About Me</h3>
      <div className="flex flex-wrap justify-center px-4">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2">
          <Card
            title="Start of Software Engineering"
            content={[
              "Hi! I'm Mason Myles, a passionate software engineer with expertise in both frontend and backend development. With a keen eye for detail and a love for problem-solving, I enjoy crafting elegant solutions to complex technical challenges.",
              "My journey in software development began several years ago when I discovered my passion for coding. Since then, I've dedicated myself to honing my skills and staying updated with the latest technologies and best practices.",
              "I have experience working with a variety of programming languages and frameworks, including JavaScript, Python, React, Node.js, and Django, among others. I thrive in collaborative environments and am always eager to learn from my peers.",
              "Outside of coding, I enjoy spending time with my friends, learning German, and immersing myself in different cultures.",
            ]}
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2">
          <Card
            title="NDSU Student"
            content={[
              "As a Computer Science student at NDSU, I've delved into the intricate world of algorithms, data structures, and software development methodologies.",
              "My passion for technology has been the driving force behind my academic pursuits, pushing me to explore new concepts and solve challenging problems, from designing efficient algorithms to building scalable applications.",
              "I've honed my skills through hands-on projects and collaborative learning environments. Beyond the realm of academia, I enjoy delving into cybersecurity challenges, attending hackathons, and participating in tech meetups to expand my knowledge and network with like-minded individuals.",
            ]}
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2">
          <Card
            title="Internship"
            content={[
              "As an intern, I've had the invaluable opportunity to immerse myself in the dynamic world of cloud computing, particularly AWS (Amazon Web Services). From provisioning scalable infrastructure to deploying applications, I've been actively learning and honing my skills in AWS services such as Kinesis Stream, S3, Lambda, and Cloud Search.",
              "This hands-on experience has not only deepened my understanding of cloud technologies but has also equipped me with practical knowledge essential for modern-day software development.",
              "Additionally, I've been diligently learning industry-specific coding practices and standards, understanding the importance of writing clean, efficient, and maintainable code. Through mentorship and real-world projects, I've gained insights into best practices and conventions specific to the industry, preparing me for a successful career as a professional software engineer.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
