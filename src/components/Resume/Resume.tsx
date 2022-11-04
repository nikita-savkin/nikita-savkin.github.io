import { resume } from '../../data'
import './Resume.scss'

const Resume = () => {
  const SubTitle = (subtitle: string) => {
    return <h3 className='resume__subtitle'>{subtitle}</h3>
  }

  const MiniBlock = (title: string, info: string, key: number) => {
    return (
      <div key={key} className='mini-block'>
        <h4>{title}</h4>
        <span>{info}</span>
      </div>
    )
  }

  const ExperienceSingle = (experienceSingle: any, key: number) => {
    return (
      <div key={key} className='exp-single'>
        <h4>{experienceSingle.title}</h4>
        <div className='gap'>{experienceSingle.gap}</div>
        <h5>Duties:</h5>
        <div className='duties'>
          {experienceSingle.duties.map((duty: string, idx: number) => (
            <div className='duty' key={idx}>
              - {duty}
            </div>
          ))}
        </div>
        <div className='achievements'>
          <h5>Achievements:</h5>
          {experienceSingle.achievements.map((achievement: string, idx: number) => (
            <div className='achievement' key={idx}>
              - {achievement}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className='resume'>
      <div className='resume__skills'>
        {SubTitle('Hard Skills')}
        <div className='skills'>
          {resume.hardSkills.map((hardSkill, idx) => MiniBlock(hardSkill.title, hardSkill.info, idx))}
        </div>
        <div className='skills'>
          {SubTitle('Soft Skills')}
          <div className='soft'>
            {resume.softSkills.map((softSkill, idx) => (
              <span key={idx}>{softSkill}</span>
            ))}
          </div>
        </div>
      </div>
      <div className='resume__exp'>
        {SubTitle('Experience')}
        <div className='exp-content'>{resume.experience.map((exp, idx) => ExperienceSingle(exp, idx))}</div>
      </div>
    </div>
  )
}

export default Resume
