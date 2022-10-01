import SideBarContent from 'components/sidebarcontent'

const index: React.FC = () => {
  return (
    <div className="bg-top-img min-h-screen bg-cover bg-center -z-50 h-[calc(1vh*100)]">
      <div className="ml-4 text-6xl sm:ml-10 pt-4 sm:pt-6 sm:text-8xl">
        Hayapo Portfolio
      </div>
      <SideBarContent />
    </div>
  )
}

export default index
