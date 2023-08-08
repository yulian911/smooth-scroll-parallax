import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/page.module.scss';

import Text3dContainer from '@/components/text3d/Text3dContainer';
import Scroll from '@/components/scroll/Scroll';
import ProjectContainer from '@/components/project-container';

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Text3dContainer />
      <Scroll />
      <ProjectContainer />
    </main>
  );
}
