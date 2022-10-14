import React, { Fragment } from 'react';
import Dock from 'react-osx-dock';
import Resume from '../Images/ResumePic.png';
import Projects from '../Images/Projects.png';
import WorkExp from '../Images/WorkExp.png';

export default function DockBar() {
  return (
    <Fragment>
      <Dock width={800} magnification={1} magnifyDirection="up">
        {[Resume, Projects, WorkExp].map((item, index) => (
          <Dock.Item
            key={index}
            onClick={() => {
              if (item === Resume) {
                console.log('its', item, ' bro');
              } else if (item === Projects) {
                console.log('its', item, ' bro');
              } else if (item === WorkExp) {
                console.log('its', item, ' bro');
              } else {
                console.log('you clicked something impossible');
              }
            }}
          >
            <img src={`${item}`} width="50" height={'50'} />
          </Dock.Item>
        ))}
      </Dock>
    </Fragment>
  );
}
