import React from 'react'
import { Link } from 'react-router-dom'
import { RiExternalLinkLine } from 'react-icons/ri'

/*
TODO:
  - Galaxy Fold用のメディアクエリを作る
  - モバイルはハンバーガーメニューを作るでもいいかも
*/

const SideBarContent: React.FC = () => (
  <>
    <div className="flex flex-row w-full h-full justify-center mt-10 xl:mt-[5rem]">
      <div className="flex flex-row gap-5 lg:gap-14 text-xl xsm:text-3xl xl:text-5xl pointer-events-auto xl:-ml-12">
        <Link
          to="/about"
          className="relative inline-block no-underline after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-full after:origin-top-left after:scale-x-[0] after:scale-y-[1] after:bg-white after:duration-[0.5s] hover:after:scale-[1]"
        >
          About
        </Link>
        <Link
          to="/skills"
          className="relative inline-block no-underline after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-full after:origin-top-left after:scale-x-[0] after:scale-y-[1] after:bg-white after:duration-[0.5s] hover:after:scale-[1]"
        >
          Skills
        </Link>
        <a
          target="_blank"
          href="https://blog.hayapo.dev/"
          className="group relative flex gap-1 no-underline after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-full  after:origin-top-left after:scale-x-[0] after:scale-y-[1] after:bg-white after:duration-[0.5s] hover:after:scale-[1]"
          rel="noreferrer"
        >
          Blog{' '}
          <RiExternalLinkLine className="invisible absolute -right-8 sm:-right-10 mt-1 group-hover:visible group-hover:delay-150 w-[30px] sm:w-[35px]" />
        </a>
      </div>
    </div>
    <div className="fixed flex flex-col gap-10 bottom-[3rem] w-full items-center justify-center ml-2 ">
      <div className="whitespace-nowrap text-center">Built with Vite</div>
      <div>
        Image by{' '}
        <a
          target="_blank"
          href="https://unsplash.com/@fakurian"
          className="pointer-events-auto underline hover:opacity-50"
          rel="noreferrer"
        >
          Milad Fakurian
        </a>
      </div>
    </div>
  </>
)

export default SideBarContent
