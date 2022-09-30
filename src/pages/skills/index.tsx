import SkillCard from '../../components/skillcard'
import PageTitle from '../../components/pagetitle'

const Skills: React.FC = () => {
  const skillTypeList: SkillTypes[] = ['Frontend', 'Backend', 'Others']
  return (
    <div className="min-h-screen bg-[#6056CE] pb-10 xl:pb-0">
      <PageTitle pageName="Skills" />
      <div className="animate-text-focus-in mt-6 flex flex-col gap-[3rem] xl:ml-16 xl:gap-7">
        {skillTypeList.map((skillType) => (
          <div
            key={skillType}
            className="flex flex-col items-center gap-5 xl:items-start"
          >
            <h2 className="relative z-50 text-4xl ">{skillType}</h2>
            <SkillCard
              skillType={skillType}
              className="flex flex-col items-center xl:ml-20 xl:flex-row"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
