"use client"
import UserCard from "@/components/userCard"

const AboutPage = () => {
  return (
    <section className="user-section">
      <h1 className="title-font">Our Team</h1>
      <div className="user-tile">
        <UserCard
          name="Josh"
          description="I'm Joshua, a full-stack web developer with a passion for creating stunning and user-friendly front-end interfaces. I have experience working with HTML, CSS, JavaScript, React, Bootstrap, NodeJS, and MongoDB. I'm also proficient in a variety of other technologies, including Git, GitHub, and Agile development methodologies."
          username="Haru-hue"
        />
        {/* Enter your details and your Github username there, Toki  */}
        <UserCard
          name="Toki"
          description="I'm Joshua, a full-stack web developer with a passion for creating stunning and user-friendly front-end interfaces. I have experience working with HTML, CSS, JavaScript, React, Bootstrap, NodeJS, and MongoDB. I'm also proficient in a variety of other technologies, including Git, GitHub, and Agile development methodologies."
          username="Haru-hue"
        />
      </div>
    </section>
  )
}

export default AboutPage