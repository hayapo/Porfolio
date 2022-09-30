import { Link } from 'react-router-dom'
const Works = () => {
  return (
    <div className="from-bg-from to-bg-to min-h-screen bg-gradient-to-b pb-10 xl:pb-0">
      <div className="font-sen mx-6 flex flex-row pt-3 text-6xl sm:ml-10 sm:text-7xl">
        <Link to="/" className="hover:opacity-50">
          Top
        </Link>
        <div>::Works</div>
      </div>
    </div>
  )
}

export default Works
