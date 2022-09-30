import timelinedata from 'data/timelineData'

type ItemProps = {
  item: TimeLineItemType
}
const TimeLineItem: React.FC<ItemProps> = ({ item }: ItemProps) => {
  return (
    <li className="mb-10 ml-[5rem] lg:h-[10rem]">
      <div className="absolute w-5 h-5 bg-white rounded-full mt-1 md:mt-2 -left-[12px]"></div>
      <div className="absolute border-b border-white w-[4rem] -ml-[4.5rem] mt-[14px] md:mt-[17px]"></div>
      <h4 className="text-2xl md:text-3xl">{item.date}</h4>
      <h3 className="text-2xl md:text-3xl mt-4">{item.title}</h3>
    </li>
  )
}

type Props = {
  className?: string
}

const TimeLine: React.FC<Props> = ({ className }: Props) => {
  const items = timelinedata
  return (
    <div className={className}>
      <div className="relative border-l-2 h-10 md:border-l-4 border-white border-dotted -mt-10 ml-10 md:ml-0"></div>
      <ol className="relative border-l-2 md:border-l-4 border-white ml-10 md:ml-0">
        {items.map((x) => (
          <TimeLineItem key={x.title} item={x} />
        ))}
      </ol>
      <div className="relative border-l-2 h-10 md:border-l-4 border-white border-dotted -mt-10 ml-10 md:ml-0"></div>
    </div>
  )
}

export default TimeLine
