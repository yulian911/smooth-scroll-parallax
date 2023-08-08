import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/page.module.scss';
import Text3d from './Text3d';

const Text3dContainer = () => {
  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = e => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };

  return (
    <div
      onMouseMove={e => {
        manageMouseMove(e);
      }}
      className="w-[100%] h-screen overflow-hidden bg-[lightgrey] ">
      <div ref={plane} className={styles.content}>
        <Text3d primary={'Turning'} secondary={'Turning'} />
        <Text3d primary={'Space'} secondary={'Space'} />
        <Text3d primary={'Into'} secondary={'Into'} />
        <Text3d primary={'Shapes'} secondary={'Shapes'} />
      </div>
    </div>
  );
};

export default Text3dContainer;
