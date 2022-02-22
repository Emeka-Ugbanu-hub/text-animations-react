import React, { FC } from 'react';
import "./special.css"

export interface SpecialProps {
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

const Special: FC<SpecialProps> = ({
  name,
  type,
  count,
  color,
  size,
  delay,
  duration,
}) => {
  const input = Array.from(name);
  const myspan = input.map((inputs) => (
    <span
      className={`${type}`}
      style={{
        animationIterationCount: count,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        color: color,
        fontSize: `${size}rem`,
      }}
    >
      {inputs}
    </span>
  ));
  return (
    <>
      <div className="container">{myspan}</div>
    </>
  );
};
export default Special;
