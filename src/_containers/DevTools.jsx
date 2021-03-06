import React from 'react';

// Exported from redux-devtools
/* eslint-disable import/no-extraneous-dependencies */
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import SliderMonitor from 'redux-slider-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

/* eslint-enable import/no-extraneous-dependencies */

const dockMonitor = (
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  // Note: DockMonitor is visible by default.
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m"
    defaultIsVisible
  >
    <LogMonitor theme="tomorrow" />
    <SliderMonitor />
  </DockMonitor>
);
// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(dockMonitor);

export default DevTools;
