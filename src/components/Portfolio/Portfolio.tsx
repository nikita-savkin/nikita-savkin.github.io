import { useState } from 'react'
import { ProjectExampleInfo } from '../../data'
import ProjectExample from '../ProjectExample/ProjectExample'
import './Portfolio.scss'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Portfolio = ({ portfolioUpdated }: { portfolioUpdated: CallableFunction }) => {
  const [buttonActive, setButtonActive] = useState<string>('All')
  const [projects, setProjects] = useState(ProjectExampleInfo)
  const filterBtns = ['All', 'Commercial', 'My Lab']

  const selectFilter = (btn: string) => {
    if (buttonActive !== btn) {
      const filteredProjects = ProjectExampleInfo.filter((project) => {
        switch (btn) {
          case 'My Lab':
            return project.type === 'personal'
          case 'Commercial':
            return project.type === 'commercial'
          default:
            return project
        }
      })

      setButtonActive(btn)
      setProjects([])
      setTimeout(() => {
        setProjects(filteredProjects)
      }, 400)
      portfolioUpdated()
    }
  }

  return (
    <div className='portfolio'>
      <div className='portfolio__filter'>
        {filterBtns.map((btn: string, idx: number) => {
          return (
            <button
              key={idx}
              onClick={() => selectFilter(btn)}
              className={`filter-btn ${buttonActive === btn ? 'active-filter-btn' : ''} `}
            >
              <div className='translate-btn'></div>
              <span>{btn}</span>
            </button>
          )
        })}
      </div>
      <TransitionGroup>
        {projects.map((example, idx) => {
          return (
            <CSSTransition timeout={500} classNames='fade' key={example.title}>
              <ProjectExample projectExample={example} index={idx} />
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  )
}

export default Portfolio
