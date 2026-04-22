import Prism from './Prism'
import LogoLoop from './LogoLoop'
import {
  SiReact, SiTypescript, SiJavascript, SiTailwindcss,
  SiHtml5, SiCss3, SiUnity, SiBlender,
  SiNodedotjs, SiMysql, SiMongodb,
  SiDocker, SiGit, SiJenkins, SiApachetomcat, SiGithubactions, SiSpringboot
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { HiCode, HiServer, HiDatabase, HiLink, HiCloudUpload } from 'react-icons/hi'

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiCss3 />, title: "CSS3" },
  { node: <SiUnity />, title: "Unity" },
  { node: <TbBrandCSharp />, title: "C#" },
  { node: <SiBlender />, title: "Blender" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <HiLink />, title: "REST APIs" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiMongodb />, title: "MongoDB" },
  { node: <SiGithubactions />, title: "CI/CD" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiGit />, title: "Git" },
  { node: <SiJenkins />, title: "Jenkins" },
  { node: <SiApachetomcat />, title: "Tomcat" },
]

const TechStack = () => {
  return (
    <div className="container techstack-wrapper">
      <div className="techstack-bg">
        <Prism
          animationType="rotate"
          glow={0.6}
          noise={0.05}
          transparent={true}
          scale={3.6}
          hueShift={0}
          bloom={0.8}
          timeScale={0.3}
          hoverStrength={1.5}
          suspendWhenOffscreen={true}
        />
      </div>
      <div className="techstack">
        <h2 className="section-title techstack__title">Tech Stack</h2>
        <p className="techstack__subtitle">Technologies I work with daily</p>

        <div className="techstack__logoloop">
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={36}
            gap={48}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="transparent"
            ariaLabel="Tech stack logos"
          />
        </div>

        <div className="techstack__grid">
          <div className="techstack__card">
            <div className="techstack__card-header">
              <div className="techstack__card-icon"><HiCode /></div>
              <span className="techstack__card-label">Core Skills</span>
            </div>
            <div className="techstack__items">
              <span className="techstack__item"><span className="techstack__item-icon"><SiReact /></span> React</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiJavascript /></span> JavaScript</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiHtml5 /></span> HTML5</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiCss3 /></span> CSS3</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiTailwindcss /></span> Tailwind</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiUnity /></span> Unity</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiGithubactions /></span> CI/CD</span>
            </div>
          </div>

          <div className="techstack__card">
            <div className="techstack__card-header">
              <div className="techstack__card-icon"><HiLink /></div>
              <span className="techstack__card-label">Familiar With</span>
            </div>
            <div className="techstack__items">
              <span className="techstack__item"><span className="techstack__item-icon"><HiServer /></span> REST APIs</span>
              <span className="techstack__item"><span className="techstack__item-icon"><HiDatabase /></span> MySQL</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiNodedotjs /></span> Node.js</span>
              <span className="techstack__item"><span className="techstack__item-icon"><HiCode /></span> C#</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiBlender /></span> Blender</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiGit /></span> Git</span>
            </div>
          </div>

          <div className="techstack__card">
            <div className="techstack__card-header">
              <div className="techstack__card-icon"><HiCloudUpload /></div>
              <span className="techstack__card-label">Learning</span>
            </div>
            <div className="techstack__items">
              <span className="techstack__item"><span className="techstack__item-icon"><HiDatabase /></span> DSA</span>
              <span className="techstack__item"><span className="techstack__item-icon"><HiServer /></span> System Design</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiSpringboot /></span> Spring Boot</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiDocker /></span> Docker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
