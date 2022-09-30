type LayoutProps = {
  children?: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div className="pointer-events-none min-h-screen flex flex-col font-sen">
      <main className="mx-auto w-screen overflow-hidden">{children}</main>
    </div>
  )
}

export default Layout
