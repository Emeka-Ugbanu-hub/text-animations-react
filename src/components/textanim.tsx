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
  layer1,
  layer2,
  layer3,
  layer4,
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
            textShadow:
              type === 'shadows'
                ? `${3}px ${3}px 0 ${layer1}, 6px 6px 0 ${layer2},
    9px 9px ${layer3}, 12px 12px 0 ${layer4}`
                : 'none',
            marginTop: `${5}rem`,
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
