import { lazy, Suspense } from 'react'
import type { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Top = lazy(async () => import('pages/index'))
const About = lazy(async () => import('pages/about'))
const Skills = lazy(async () => import('pages/skills'))

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Top />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
