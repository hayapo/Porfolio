import { GetWindowSize } from 'hooks/getWindowSize'

type LayoutProps = {
  children?: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  const windowWidth = GetWindowSize().windowWidth
  return (
    <div
      style={{ width: windowWidth }}
      className="pointer-events-none min-h-full flex flex-col font-sen"
    >
      <main className="w-screen overflow-hidden">{children}</main>
    </div>
  )
}

export default Layout
