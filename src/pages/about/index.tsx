import React, { Suspense } from 'react'
import { isMobile } from 'react-device-detect'
import TimeLine from '../../components/timeline'
import PageTitle from '../../components/pagetitle'

const Bio = React.lazy(() => import('components/bio'))

const Fallback = () => <div className="text-3xl font-sen">Loading...</div>

const About: React.FC = () => (
  <div className="from-bg-from to-bg-to min-h-screen bg-gradient-to-b pb-20 xl:pb-10">
    <PageTitle pageName="About" />
    <div className="mx-0 mt-16 md:mx-12 lg:ml-20">
      <div className="flex flex-col gap-[4rem]">
        <Suspense fallback={<Fallback />}>
          <Bio />
        </Suspense>
        <div className="animate-text-focus-in ml-0 w-full lg:ml-20 xl:w-max">
          <div className="flex flex-col gap-6 sm:mx-0">
            <div className="text-center text-4xl md:text-6xl xl:text-start">
              About me
            </div>
            {isMobile ? (
              <div className="mx-[4rem] flex flex-col items-center gap-6 text-xl md:text-3xl">
                <div>名古屋大学情報学研究科</div>
                <div>心理認知科学専攻 修士1年</div>
                <div>運動に関する脳波やBCIについて研究中</div>
              </div>
            ) : (
              <div className="mx-[4rem] flex flex-col items-start gap-6 text-xl sm:text-3xl">
                <div>名古屋大学情報学研究科 心理認知科学専攻 修士1年</div>
                <div>運動に関する脳波やBCIを研究しています</div>
              </div>
            )}
          </div>
        </div>
        <div className="animate-text-focus-in ml-0 w-full lg:ml-20 xl:w-max">
          <div className="flex flex-col gap-6 sm:mx-0">
            <div className="text-center text-4xl md:text-6xl xl:text-start">
              Interest
            </div>
            <div className="mx-[4rem] flex flex-col items-center gap-6 text-xl md:text-3xl xl:items-start">
              <div>脳に関連したこと</div>
              <div>技術のこと全般(最近はフロントエンド)</div>
            </div>
          </div>
        </div>
        <div className="ml-0 w-full lg:ml-20 xl:w-max animate-text-focus-in">
          <div className="text-center text-4xl md:text-6xl xl:text-start">
            Timeline
          </div>
          <TimeLine className="mt-14" />
        </div>
      </div>
    </div>
  </div>
)

export default About
