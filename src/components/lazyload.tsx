import * as React from 'react'
type Props = {
  imgUrl: string
  alt: string
  className?: string
}

const LazyPreloadImage: React.FC<Props> = ({
  imgUrl,
  alt,
  className,
}: Props) => {
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    const img = new Image()
    img.src = imgUrl

    img.onload = () => {
      setLoaded(true)
    }
  }, [imgUrl])

  if (loaded) {
    return <img className={className} src={imgUrl} alt={alt} />
  }

  return <div className="h-[200px] w-[200px] bg-white rounded-full"></div>
}

export default LazyPreloadImage
