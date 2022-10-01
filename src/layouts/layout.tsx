type LayoutProps = {
  children?: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="pointer-events-none min-h-full flex flex-col font-sen">
      <main className="w-screen overflow-y-auto">{children}</main>
    </div>
  )
}

export default Layout
