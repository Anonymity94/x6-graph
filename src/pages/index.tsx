import React, { useEffect, useState } from 'react';
import FlowGraph from './Graph';
import ConfigPanel from './Graph/components/ConfigPanel';
import ToolBar from './Graph/components/ToolBar';

import '../global.css';
import '../reset.less';
import styles from './index.less';

export default function () {
  const [isReady, setIsReady] = useState(false);

  const getContainerSize = () => {
    return {
      width: document.body.offsetWidth - 581,
      height: document.body.offsetHeight - 38,
    };
  };

  useEffect(() => {
    const graph = FlowGraph.init();
    setIsReady(true);

    const resizeFn = () => {
      const { width, height } = getContainerSize();
      graph.resize(width, height);
    };
    resizeFn();

    window.addEventListener('resize', resizeFn);
    return () => {
      window.removeEventListener('resize', resizeFn);
    };
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div id="stencil" className={styles.sider} />
        <div className={styles.panel}>
          <div className={styles.toolbar}>{isReady && <ToolBar />}</div>
          <div id="container" className="x6-graph" />
        </div>
        <div className={styles.config}>{isReady && <ConfigPanel />}</div>
      </div>
    </div>
  );
}
