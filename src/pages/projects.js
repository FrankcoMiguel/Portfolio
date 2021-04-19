import React from 'react'
import {CgMouse} from 'react-icons/cg'

import Layout from '../components/Layout'
import projects from '../data/projects.json'
import ProjectCard from '../components/ProjectCard'

import proBackPack from '../images/projects/probackpack-project.svg'
import chick4all from '../images/projects/chick4all-project.svg'
import cinemaPremium from '../images/projects/cinemapremium-project.svg'
import dayToDay from '../images/projects/daytoday-project.svg'


import "./projects.scss"

export default function Projects() {

  const logotypes = [proBackPack, chick4all, cinemaPremium, dayToDay]

  return (
    <Layout title="Projects" page={3}>

      <div className="TopMessage">
        <h1>Personal Projects</h1>
        <h4>Here are a few personal projects
          I have worked since started.
        </h4>
        <CgMouse />
        <p>Scroll down to explore more</p>
      </div>

      <div className="Projects">
      {projects[0].items.map(p => (
        <ProjectCard 
              key={p.id}
              logo={logotypes[p.id - 1]}
              title={p.name}
              description={p.description}
              tags={p.tags}
              icons={p.toolsUsed}/>
      ))}
      </div>
    </Layout>
  )
}
