import { Addon, FunctionExt, Graph, Node, Shape } from '@antv/x6';
import graphData from './data';
import fireWallIcon from './icons/fireWall.png';
import networkCloudIcon from './icons/network_cloud.png';
import pcIcon from './icons/pc.png';
import routerIcon from './icons/router.png';
import serverIcon from './icons/server.png';
import switchIcon from './icons/switch.png';
import TooltipTool from '../components/TooltipTool';
import './shape';

import styles from './style.less';

enum EMode {
  'netword' = 'netword',
  'service' = 'service',
}

Graph.registerEdgeTool('tooltip', TooltipTool, true);

export default class FlowGraph {
  public static graph: Graph;
  private static stencil: Addon.Stencil;

  /**
   * 是否在编辑中
   */
  public static isEditting: boolean = false;
  public static mode: EMode = EMode.netword;

  public static init() {
    this.graph = new Graph({
      container: document.getElementById('container')!,
      width: 1000,
      height: 800,
      grid: {
        size: 10,
        visible: true,
        // 背景颜色
        type: 'dot',
        args: [
          {
            color: '#cccccc',
            thickness: 1,
          },
          {
            color: '#5F95FF',
            thickness: 1,
            factor: 4,
          },
        ],
      },
      // 点选/框选
      selecting: {
        enabled: true,
        multiple: true,
        // 关闭框选
        rubberband: false,
        movable: true,
        showNodeSelectionBox: true,
        filter: ['groupNode'],
      },
      scroller: {
        enabled: true,
        // 开启画布平移能力
        pannable: true,
      },
      interacting: () => ({
        magnetConnectable: true,
        edgeMovable: true,
        nodeLabelMovable: true,
        edgeLabelMovable: true,
        arrowheadMovable: true,
        vertexMovable: true,
        vertexAddable: true,
        vertexDeletable: true,
      }),
      connecting: {
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: false,
        highlight: true,
        snap: true,
        createEdge() {
          return new Shape.Edge({
            attrs: {
              line: {
                stroke: '#5F95FF',
                strokeWidth: 1,
                targetMarker: {
                  name: 'classic',
                  // size: 8,
                },
              },
            },
            // @see: https://x6.antv.vision/zh/docs/api/registry/router
            router: {
              name: 'manhattan',
            },
            zIndex: 0,
          });
        },
        validateConnection({
          sourceView,
          targetView,
          sourceMagnet,
          targetMagnet,
        }) {
          if (sourceView === targetView) {
            return false;
          }
          if (!sourceMagnet) {
            return false;
          }
          if (!targetMagnet) {
            return false;
          }
          return true;
        },
      },
      highlighting: {
        magnetAvailable: {
          name: 'stroke',
          args: {
            padding: 4,
            attrs: {
              strokeWidth: 4,
              stroke: 'rgba(223,234,255)',
            },
          },
        },
      },
      // 对齐线
      snapline: true,
      history: true,
      // 剪切板
      clipboard: {
        enabled: true,
      },
      keyboard: {
        enabled: true,
      },
      // 滚轮缩放
      mousewheel: {
        enabled: true,
        modifiers: ['ctrl', 'meta'],
      },
      embedding: {
        enabled: true,
        findParent({ node }) {
          const bbox = node.getBBox();
          return this.getNodes().filter((node) => {
            // 只有 data.parent 为 true 的节点才是父节点
            const data = node.getData<any>();
            if (data && data.parent) {
              const targetBBox = node.getBBox();
              return bbox.isIntersectWithRect(targetBBox);
            }
            return false;
          });
        },
      },
    });
    this.initStencil();
    this.initShape();
    this.initGraphShape();
    this.initEvent();
    return this.graph;
  }

  private static initStencil() {
    this.stencil = new Addon.Stencil({
      target: this.graph,
      stencilGraphWidth: 280,
      search: false,
      collapsable: false,
      groups: [
        {
          name: 'basic',
          title: '网络',
          graphHeight: 300,
          collapsable: false,
        },
        // {
        //   name: 'combination',
        //   title: '',
        //   layoutOptions: {
        //     columns: 1,
        //     marginX: 60,
        //   },
        //   graphHeight: 260,
        // },
      ],
    });
    const stencilContainer = document.querySelector('#stencil');
    stencilContainer?.appendChild(this.stencil.container);
  }

  /**
   * 注册形状节点
   */
  private static initShape() {
    const { graph } = this;

    const nodes: Node[] = [];

    [
      {
        name: '服务器',
        img: serverIcon,
      },

      {
        name: '终端用户',
        img: pcIcon,
      },
      {
        name: '交换机',
        img: switchIcon,
      },
      {
        name: '路由器',
        img: routerIcon,
      },
      {
        name: '防火墙',
        img: fireWallIcon,
      },
      {
        name: '广域网',
        img: networkCloudIcon,
      },
    ].forEach((el) => {
      nodes.push(
        graph.createNode({
          shape: 'flow-chart-image-rect',
          // label: el.name,
          attrs: {
            image: {
              'xlink:href': el.img,
            },
            text: {
              textWrap: {
                text: el.name,
              },
            },
          },
        }),
      );
    });

    this.stencil.load(nodes, 'basic');
  }

  private static initGraphShape() {
    this.graph.fromJSON(graphData as any);
    this.initEdgeLabel();
  }

  /**
   * 遍历edge边，修改标题
   */
  private static initEdgeLabel() {
    const edges = this.graph.getEdges();
    edges.forEach((edge, index) => {
      const networkId: string = edge.prop('networkId');
      // TODO: 根据网络ID拉取网络的统计信息
      // @see: https://x6.antv.vision/zh/docs/tutorial/intermediate/edge-labels/#%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%87%E7%AD%BE
      if (networkId) {
        edge.setLabels([]);
        // TODO: 调整标签的位置和样式
        edge.insertLabel(`${networkId}
        峰值带宽：948Mbps
        峰值并发会话：23948`);
      }
    });
  }

  private static showPorts(ports: NodeListOf<SVGAElement>, show: boolean) {
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility = show ? 'visible' : 'hidden';
    }
  }

  private static initEvent() {
    const { graph } = this;
    const container = document.getElementById('container')!;

    // 节点的右键单击
    // graph.on('node:contextmenu', ({ cell, view }) => {
    //   const oldText = cell.attr('text/textWrap/text') as string;
    //   const elem = view.container.querySelector('.x6-edit-text') as HTMLElement;
    //   if (elem == null) {
    //     return;
    //   }
    //   cell.attr('text/style/display', 'none');
    //   if (elem) {
    //     elem.style.display = '';
    //     elem.contentEditable = 'true';
    //     elem.innerText = oldText;
    //     elem.focus();
    //   }
    //   const onBlur = () => {
    //     cell.attr('text/textWrap/text', elem.innerText);
    //     cell.attr('text/style/display', '');
    //     elem.style.display = 'none';
    //     elem.contentEditable = 'false';
    //   };
    //   elem.addEventListener('blur', () => {
    //     onBlur();
    //     elem.removeEventListener('blur', onBlur);
    //   });
    // });
    // graph.on('edge:mouseenter', ({ e, edge, view }) => {
    //   edge.attr('line/strokeDasharray', 5);
    //   edge.attr('line/style', {
    //     animation: 'ant-line 30s infinite linear',
    //   });
    // });
    graph.on('edge:selected', ({ edge }) => {
      edge.attr('line/strokeDasharray', 5);
      edge.attr('line/style', {
        animation: 'ant-line 30s infinite linear',
      });
    });
    graph.on('edge:unselected', ({ edge }) => {
      edge.attr('line/strokeDasharray', null);
      edge.attr('line/style', null);
    });
    // 鼠标划过边时，显示可拖动的箭头
    // @see: https://x6.antv.vision/zh/docs/api/registry/edge-tool/
    graph.on('edge:mouseenter', ({ cell }) => {
      cell.addTools([
        {
          name: 'source-arrowhead',
          args: {
            attrs: {
              fill: 'red',
            },
          },
        },
        {
          name: 'target-arrowhead',
          args: {
            attrs: {
              fill: 'red',
            },
          },
        },
        // TODO: 屏蔽Tootip提示，把网络名字放在线条上
        //   name: 'tooltip',
        //   args: {
        //     tooltip: cell.attr('data/networkId')
        //       ? 'edge 1 tooltip'
        //       : 'edge 2 tooltip ',
        //   },
        // },
      ]);
    });

    graph.on('edge:mouseleave', ({ cell }) => {
      cell.removeTools();
    });

    /**
     * 边发生变化时，重新渲染
     */
    graph.on('edge:added', ({ cell }) => {
      console.log('edge:added');
      // this.initEdgeLabel();
    });
    graph.on('edge:removed', ({ cell }) => {
      console.log('edge:removed');
      // this.initEdgeLabel();
    });
    graph.on('edge:change:networkId', (props: any) => {
      console.log('edge:change:attrs');
      this.initEdgeLabel();
    });

    // 显示节点的point
    graph.on(
      'node:mouseenter',
      FunctionExt.debounce(() => {
        const ports = container.querySelectorAll(
          '.x6-port-body',
        ) as NodeListOf<SVGAElement>;
        this.showPorts(ports, true);
      }),
      500,
    );
    graph.on('node:mouseleave', () => {
      const ports = container.querySelectorAll(
        '.x6-port-body',
      ) as NodeListOf<SVGAElement>;
      this.showPorts(ports, false);
    });

    graph.on('node:collapse', ({ node, e }) => {
      e.stopPropagation();
      node.toggleCollapse();
      const collapsed = node.isCollapsed();
      const cells = node.getDescendants();
      cells.forEach((n) => {
        if (collapsed) {
          n.hide();
        } else {
          n.show();
        }
      });
    });

    graph.on('node:embedded', ({ cell }) => {
      if (cell.shape !== 'groupNode') {
        cell.toFront();
      }
    });

    // 删除
    graph.bindKey('backspace', () => {
      const cells = graph.getSelectedCells();
      if (cells.length) {
        graph.removeCells(cells);
      }
    });
  }
}
