import SideBarContent from 'components/sidebarcontent'
import { GetWindowSize } from 'hooks/getWindowSize'

const index: React.FC = () => {
  const windowHeight = GetWindowSize().windowHeight
  return (
    <div
      style={{ height: windowHeight }}
      className="bg-top-img min-h-screen bg-cover bg-center -z-50"
    >
      <div className="ml-4 text-6xl sm:ml-10 pt-4 sm:pt-6 sm:text-8xl">
        Hayapo Portfolio
      </div>
      <SideBarContent />
    </div>
  )
}

export default index
