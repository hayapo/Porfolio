import * as Icons from 'react-icons/si'

export const skillList: ReadonlyArray<Skills> = [
  {
    skillName: 'Typescript',
    description:
      'インターンやポートフォリオサイト、個人ブログなどで使用しました',
    skillLevel: 2,
    skillIcon: <Icons.SiTypescript size="50px" />,
    skillType: 'Frontend',
  },
  {
    skillName: 'React',
    description:
      'インターンやポートフォリオサイト、個人ブログなどで使用しました',
    skillLevel: 2,
    skillIcon: <Icons.SiReact size="50px" />,
    skillType: 'Frontend',
  },
  {
    skillName: 'Next.js',
    description:
      'インターンやポートフォリオサイト、個人ブログなどで使用しました',
    skillLevel: 2,
    skillIcon: <Icons.SiNextdotjs size="50px" />,
    skillType: 'Frontend',
  },
  {
    skillName: 'Python',
    description: '一番長く使っている言語です。インターンでも使用していました',
    skillLevel: 3,
    skillIcon: <Icons.SiPython size="50px" />,
    skillType: 'Backend',
  },
  {
    skillName: 'Go',
    description: '最近勉強し始めました。楽しい',
    skillLevel: 1,
    skillIcon: <Icons.SiGo size="50px" />,
    skillType: 'Backend',
  },
  {
    skillName: 'Elasticsearch',
    description: 'インターンで使用しました。個人開発でもちょくちょく使ってます',
    skillLevel: 2,
    skillIcon: <Icons.SiElasticsearch size="50px" />,
    skillType: 'Others',
  },
  {
    skillName: 'Docker',
    description: '個人開発やインターンで使用しました。あまり詳しくは無いです',
    skillLevel: 2,
    skillIcon: <Icons.SiDocker size="50px" />,
    skillType: 'Others',
  },
  {
    skillName: 'PostgreSQL',
    description:
      'インターンのために勉強しました。実務等で使ったことはありません',
    skillLevel: 1,
    skillIcon: <Icons.SiPostgresql size="50px" />,
    skillType: 'Others',
  },
]
