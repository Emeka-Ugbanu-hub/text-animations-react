import React, { FC } from 'react';
import "./textanim.css"

export interface TextAnimProps {
  name: string;
  color: string;
  size: number;
  type: string;
  delay: number;
  duration: number;
  count: string;
  grad1: string;
  grad2: string;
  grad3: string;
  grad4: string;
  layer1: string;
  layer2: string;
  layer3: string;
  layer4: string;
  styles:object;
  top:number;
  right:number;
  bottom:number;
  left:number;
}

const TextAnim: FC<TextAnimProps> = ({
  color,
  size,
  type,
  name,
  delay,
  duration,
  count,
  grad1,
  grad2,
  grad3,
  grad4, 
  left,
  right,
  bottom,
  top,
 
}) => {
  return (
    <div>
      <div className="parentbox">
        <div
      
          style={{
            
            color: color,
            animationDuration: `${duration}s`,
            animationIterationCount: count,
            fontSize: `${size}rem`,
            animationDelay: `${delay}s`,
            backgroundImage:
              type === 'gradientone'
                ? `linear-gradient(
            -225deg,
            ${grad1} 0%,
            ${grad2} 29%,
            ${grad3} 67%,
            ${grad4} 100%
          )`
                : 'none',
            marginTop: `${top}rem`,
            marginLeft:`${left}rem`,
            marginBottom:`${bottom}rem`,
            marginRight:`${right}rem`,
            
          }}
          className={`${type} animated`}
        >
          {' '}
          {name}
        </div>
      </div>
    </div>
  );
};

export default TextAnim;
