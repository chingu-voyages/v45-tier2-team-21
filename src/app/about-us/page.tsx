import UserCard from "@/components/userCard"
import { Orbitron } from "next/font/google";

const orbit = Orbitron({
  adjustFontFallback: true,
  weight: '600',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron'
})

const AboutPage = () => {
  return (
    <section className="user-section">
      <h1 className={orbit.className}>Our Team</h1>
      <div className="user-tile">
        <UserCard
          name="Josh"
          description="I'm Joshua, a full-stack web developer with a passion for creating stunning and user-friendly front-end interfaces. I have experience working with HTML, CSS, JavaScript, React, Bootstrap, NodeJS, and MongoDB. I'm also proficient in a variety of other technologies, including Git, GitHub, and Agile development methodologies."
          username="Haru-hue"
        />
        <UserCard
          name="Tokiniaina"
          description="I am Toki, with a passion for technologies, I began my journey with HTML, CSS, and JavaScript. Expanding my skills with React, Next.js, Tailwind CSS, and TypeScript, I am now a fullstack JavaScript developer, capable of crafting complete web applications. I enjoy working on innovative projects within a dynamic and creative team. I have experience with Agile methodologies, collaborating with teams on Chingu."
          username="Toukoms"
        />
      </div>
    </section>
  )
}

export default AboutPage