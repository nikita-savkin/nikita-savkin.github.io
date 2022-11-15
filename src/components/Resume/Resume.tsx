import { resume } from '../../data'
import './Resume.scss'

const Resume = () => {
  const SubTitle = (subtitle: string) => {
    return <h3 className='resume__subtitle'>{subtitle}</h3>
  }

  const ExperienceSingle = (experienceSingle: any, key: number) => {
    return (
      <div key={key} className='exp-single'>
        <h4>{experienceSingle.title}</h4>
        <div className='gap'>{experienceSingle.gap}</div>
        <p className='main-duty'>{experienceSingle.mainDuty}</p>
        <div className='duties'>
          {experienceSingle.otherDuties.map((duty: string, idx: number) => (
            <div className='duty' key={idx}>
              - {duty}
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
          {resume.hardSkills.map((hardSkill, idx) => (
            <div key={idx} className='mini-block'>
              <h4>{hardSkill.title}</h4>
              <span>{hardSkill.info}</span>
            </div>
          ))}
        </div>
        <div className='skills'>
          {SubTitle('Education')}
          <div className='education'>
            {resume.education.map((education, idx) => (
              <div key={idx} className='mini-block'>
                <span className='year'>{education.year}</span>
                <h4>{education.title}</h4>
                <span>{education.source}</span>
              </div>
            ))}
          </div>
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
