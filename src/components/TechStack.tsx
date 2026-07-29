import Prism from './Prism'
import LogoLoop from './LogoLoop'
import {
  SiReact, SiTypescript, SiJavascript, SiTailwindcss,
  SiHtml5, SiCss3, SiUnity, SiBlender,
  SiNodedotjs, SiMysql, SiMongodb, SiFirebase, SiFlutter, SiDart,
  SiDocker, SiGit, SiJenkins, SiApachetomcat, SiGithubactions, SiSpringboot
} from 'react-icons/si'
import { TbBrandCSharp } from 'react-icons/tb'
import { HiCode, HiServer, HiLink, HiDeviceMobile } from 'react-icons/hi'

const techLogos = [
  { node: <SiReact />, title: "React" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiFlutter />, title: "Flutter" },
  { node: <SiDart />, title: "Dart" },
  { node: <SiFirebase />, title: "Firebase" },
  { node: <SiTailwindcss />, title: "Tailwind CSS" },
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <SiCss3 />, title: "CSS3" },
  { node: <SiUnity />, title: "Unity" },
  { node: <TbBrandCSharp />, title: "C#" },
  { node: <SiBlender />, title: "Blender" },
  { node: <SiSpringboot />, title: "Spring Boot" },
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
        <h2 className="section-title techstack__title">Technical Stack</h2>
        <p className="techstack__subtitle">Technologies and tools powering my development workflow</p>

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
              <span className="techstack__card-label">Primary</span>
            </div>
            <div className="techstack__items">
              <span className="techstack__item"><span className="techstack__item-icon"><SiReact /></span> React</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiTypescript /></span> TypeScript</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiJavascript /></span> JavaScript</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiHtml5 /></span> HTML5</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiCss3 /></span> CSS3</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiTailwindcss /></span> Tailwind</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiFirebase /></span> Firebase</span>
            </div>
          </div>

          <div className="techstack__card">
            <div className="techstack__card-header">
              <div className="techstack__card-icon"><HiDeviceMobile /></div>
              <span className="techstack__card-label">Mobile & 3D</span>
            </div>
            <div className="techstack__items">
              <span className="techstack__item"><span className="techstack__item-icon"><SiFlutter /></span> Flutter</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiDart /></span> Dart</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiUnity /></span> Unity</span>
              <span className="techstack__item"><span className="techstack__item-icon"><TbBrandCSharp /></span> C#</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiBlender /></span> Blender</span>
            </div>
          </div>

          <div className="techstack__card">
            <div className="techstack__card-header">
              <div className="techstack__card-icon"><HiServer /></div>
              <span className="techstack__card-label">Backend & DevOps</span>
            </div>
            <div className="techstack__items">
              <span className="techstack__item"><span className="techstack__item-icon"><SiSpringboot /></span> Spring Boot</span>
              <span className="techstack__item"><span className="techstack__item-icon"><HiLink /></span> REST APIs</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiMysql /></span> MySQL</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiNodedotjs /></span> Node.js</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiGit /></span> Git</span>
              <span className="techstack__item"><span className="techstack__item-icon"><SiDocker /></span> Docker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
