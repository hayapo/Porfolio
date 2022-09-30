import React from 'react'
import Stars from './stars'
import { skillList } from '../data/skillList'

type SkillProps = {
  skill: Skills
}

type SkillCardsProps = {
  className?: string
  skillType: SkillTypes
}

const Skill: React.FC<SkillProps> = ({ skill }) => (
  <div className="drop-shadow-neumo-flat hover:bg-neumo-concave group h-[200px] w-[250px] sm:w-[300px] rounded-[50px] bg-[#6056CE] pointer-events-auto">
    <div className="mt-5 flex flex-col items-center gap-5">
      {skill.skillIcon}
      <div className="relative inline-block text-center text-4xl no-underline after:absolute after:left-0 after:-bottom-[8px] after:h-[2px] after:w-full after:origin-top-left after:scale-x-[0] after:scale-y-[1]  after:bg-white after:duration-[0.7s] group-hover:after:scale-[1]">
        {skill.skillName}
      </div>
      <Stars level={skill.skillLevel} />
    </div>
  </div>
)

const SkillCards: React.FC<SkillCardsProps> = ({ className, skillType }) => (
  <div className={className}>
    <div className="flex flex-col items-center gap-[4rem] md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 md:gap-x-[6rem] 2xl:gap-x-[12rem] xl:gap-y-[4rem]">
      {skillList
        .filter((x) => x.skillType === skillType)
        .map((skill) => (
          <Skill key={skill.skillName} skill={skill} />
        ))}
    </div>
  </div>
)

export default SkillCards
