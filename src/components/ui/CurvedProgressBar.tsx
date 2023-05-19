import { FC } from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import CurvedProgressBarCenter from '@/ui/CurvedProgressBarCenter';

interface CurverProgressBarProps {
  progress: Number
}

const CurvedProgressBar: FC<CurverProgressBarProps> = ({progress}) => {
  const circleRatio = 0.75
  const rotation = (0.624)

  return (
    <div style={{width: '200px', height: '200px'}}>
      <CircularProgressbarWithChildren 
        circleRatio={circleRatio}
        value={progress.valueOf()} 
        strokeWidth={10}
        styles={buildStyles({
          pathColor: `rgb(58, 134, ${progress.valueOf() * 2 + 100})`,
          trailColor: '#d6d6d6',
          textColor: '#3a86ff',
          textSize: '20px',
          pathTransition: 'none',
          pathTransitionDuration: 1.2,
          rotation
        })}>
          <CurvedProgressBarCenter progress={progress} />
        </CircularProgressbarWithChildren>
    </div>
  )
}

export default CurvedProgressBar