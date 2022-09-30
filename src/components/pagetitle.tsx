import { Link } from 'react-router-dom'

type PageTitleProps = {
  pageName: string
}

const PageTitle: React.FC<PageTitleProps> = ({ pageName }: PageTitleProps) => {
  const title = pageName
  return (
    <div className="z-50 pointer-events-auto mx-6 pt-3 flex flex-row text-4xl sm:text-7xl sm:ml-10">
      <Link to="/" className="hover:opacity-50">
        Top
      </Link>
      <div>::{title}</div>
    </div>
  )
}

export default PageTitle
