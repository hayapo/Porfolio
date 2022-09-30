type SkillTypes = 'Frontend' | 'Backend' | 'Others'
type Skills = {
  skillName: string
  description: string
  skillLevel: 1 | 2 | 3
  skillIcon: ReactElement
  skillType: SkillTypes
}
