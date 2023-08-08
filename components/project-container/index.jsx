import React, { useState } from 'react';
import Modal from '../modal';
import Project from '../project';
import { projects } from '@/lib/utils';

const ProjectContainer = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center ">
        {projects.map((project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index} />;
        })}
      </div>
      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default ProjectContainer;
