type StarProp = {
  className?: string
}

const Star: React.FC<StarProp> = ({ className }: StarProp) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,5 20,99 95,39 5,39 80,99" />
      </svg>
    </div>
  )
}

type StarsProp = {
  level: 1 | 2 | 3
}

const Stars: React.FC<StarsProp> = ({ level }: StarsProp) => {
  return (
    <div className="flex flex-row">
      {(() => {
        const skillStars = []
        for (let i = 0; i < level; i++) {
          skillStars.push(<Star className="h-8 w-8 fill-[#CC0]" />)
        }
        for (let i = 0; i < 3 - level; i++) {
          skillStars.push(<Star className="h-8 w-8 fill-gray-300" />)
        }
        return skillStars
      })()}
    </div>
  )
}

export default Stars
