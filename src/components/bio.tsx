import { isMobile } from 'react-device-detect'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import githubLogo from '@/assets/logos/github.svg'
import twitterLogo from '@/assets/logos/twitter.svg'
import linkedinLogo from '@/assets/logos/linkedin.svg'
import wantedlyLogo from '@/assets/logos/wantedly.svg'
import bioImgUrl from '@/assets/bio_icon.png?url'

type Props = {
  className?: string
}

const Bio: React.FC<Props> = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center gap-6 sm:gap-10 xl:flex-row xl:items-start">
        <LazyLoadImage
          className="h-[200px] w-[200px] rounded-full border-4 border-white md:h-[300px] md:w-[300px]"
          effect="blur"
          delayTime={300}
          src={bioImgUrl}
          alt="Profile Image"
        />
        <div className="my-auto flex flex-col items-center gap-6 sm:gap-12 xl:items-start">
          {isMobile ? (
            <div className="flex flex-col items-center gap-4">
              <div className="text-center text-3xl md:text-5xl">
                hayapo
                <br />
                (Saito Hayato)
              </div>
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1ocVEPTiE-aYb_ZNTAtye-mIMZAs0BHDiybPsxD_0SmE/edit?usp=sharing"
                className="pointer-events-auto text-xl font-extrabold relative inline-block no-underline after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-full after:origin-top-left after:scale-x-[0] after:scale-y-[1] after:bg-white after:duration-[0.5s] hover:after:scale-[1] hover:opacity-70"
                rel="noreferrer"
              >
                resume
              </a>
            </div>
          ) : (
            <div className="flex items-end gap-5">
              <div className="text-3xl md:text-5xl">hayapo(Saito Hayato)</div>
              <a
                target="_blank"
                href="https://docs.google.com/document/d/1ocVEPTiE-aYb_ZNTAtye-mIMZAs0BHDiybPsxD_0SmE/edit?usp=sharing"
                className="pointer-events-auto text-xl font-extrabold relative inline-block no-underline after:absolute after:left-0 after:bottom-[-8px] after:h-[2px] after:w-full after:origin-top-left after:scale-x-[0] after:scale-y-[1] after:bg-white after:duration-[0.5s] hover:after:scale-[1] hover:opacity-70"
                rel="noreferrer"
              >
                resume
              </a>
            </div>
          )}
          <div className="text-2xl sm:text-4xl">@Nagoya City, Japan</div>
          <div className="pointer-events-auto flex pl-6 md:px-0 w-full flex-row items-center justify-center gap-10 xl:ml-0 xl:w-max xl:items-start">
            <a
              href="https://github.com/hayapo"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={githubLogo}
                width="50px"
                height="50px"
                className="hover:opacity-50"
              />
            </a>
            <a
              href="https://twitter.com/hayapo_hip"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={twitterLogo}
                width="50px"
                height="30px"
                className="mt-1 hover:opacity-50"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/hayapo/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedinLogo}
                width="50px"
                height="50px"
                className="hover:opacity-50"
              />
            </a>
            <a
              href="https://www.wantedly.com/id/haya_to"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={wantedlyLogo}
                width="80px"
                height="80px"
                className="-ml-4 hover:opacity-50"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bio
