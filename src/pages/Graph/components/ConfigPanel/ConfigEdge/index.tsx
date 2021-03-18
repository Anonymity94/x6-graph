import React, { useEffect, useState, useRef } from 'react';
import { Tabs, Row, Col, Input, Slider, Select } from 'antd';
import FlowGraph from '@/pages/Graph';
import { Cell, Edge } from '@antv/x6';

const { TabPane } = Tabs;

type TMarker =
  | 'block'
  | 'classic'
  | 'diamond'
  | 'circle'
  | 'circlePlus'
  | 'ellipse'
  | 'cross'
  | 'async';

const lineMarkerList = [
  {
    value: '',
    label: '无',
    icon: '',
  },
  {
    value: 'block',
    label: 'block',
    icon: '',
  },
  {
    value: 'classic',
    label: 'classic',
    icon: '',
  },
  {
    value: 'diamond',
    label: 'diamond',
    icon: '',
  },
  {
    value: 'circle',
    label: 'circle',
    icon: '',
  },
  {
    value: 'circlePlus',
    label: 'circlePlus',
    icon: '',
  },
  {
    value: 'ellipse',
    label: 'ellipse',
    icon: '',
  },
  {
    value: 'cross',
    label: 'cross',
    icon: '',
  },
  {
    value: 'async',
    label: 'async',
    icon: '',
  },
];

interface IProps {
  id: string;
}
interface EdgeAttrs {
  stroke: string;
  strokeWidth: number;
  connector: string;
  networkId?: string;
  /**
   * 起点箭头
   */
  sourceMarker?: TMarker;
  /**
   * 终点箭头
   */
  targetMarker?: TMarker;
}

export default function (props: IProps) {
  const { id } = props;
  const [attrs, setAttrs] = useState<EdgeAttrs>({
    stroke: '#5F95FF',
    strokeWidth: 1,
    connector: 'normal',
    networkId: undefined,
    sourceMarker: undefined,
    targetMarker: 'classic',
  });
  const cellRef = useRef<Cell>();

  useEffect(() => {
    if (id) {
      const { graph } = FlowGraph;
      const cell = graph.getCellById(id) as Edge;
      if (!cell || !cell.isEdge()) {
        return;
      }
      cellRef.current = cell;

      const connector = cell.getConnector() || {
        name: 'normal',
      };

      const marker: any = cell.attr('line/sourceMarker') || {
        name: '',
      };

      console.log(cell);
      console.log(cell.attr('line/sourceMarker'));
      console.log(cell.attr('line/targetMarker'));

      setAttr('stroke', cell.attr('line/stroke'));
      setAttr('strokeWidth', cell.attr('line/strokeWidth'));
      setAttr('connector', connector.name);
      // 网络ID
      setAttr('networkId', cell.prop('networkId') || undefined);
      // 设置箭头样式
      setAttr(
        'sourceMarker',
        (cell.attr('line/sourceMarker') as any)?.name || marker.name,
      );
      setAttr(
        'targetMarker',
        (cell.attr('line/targetMarker') as any)?.name || marker.name,
      );
    }
  }, [id]);

  const setAttr = (key: string, val: any) => {
    setAttrs((prev) => ({
      ...prev,
      [key]: val,
    }));
  };

  const onStrokeChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAttr('stroke', val);
    cellRef.current!.attr('line/stroke', val);
  };

  const onStrokeWidthChange = (val: number) => {
    setAttr('strokeWidth', val);
    cellRef.current!.attr('line/strokeWidth', val);
  };

  const onConnectorChange = (val: string) => {
    setAttr('connector', val);
    const cell = cellRef.current as Edge;
    cell.setConnector(val);
  };

  const onNetworkChange = (val: string) => {
    setAttr('networkId', val);
    cellRef.current!.prop('networkId', val);
  };

  const onSourceMarkerChange = (val?: TMarker) => {
    setAttr('sourceMarker', val);
    cellRef.current!.attr('line/sourceMarker', val);
  };

  const onTargetMarkerChange = (val?: TMarker) => {
    setAttr('targetMarker', val);
    cellRef.current!.attr('line/targetMarker', val);
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="连线" key="1">
        <Row align="middle">
          <Col span={8}>线宽</Col>
          <Col span={12}>
            <Slider
              min={1}
              max={5}
              step={1}
              value={attrs.strokeWidth}
              onChange={onStrokeWidthChange}
            />
          </Col>
          <Col span={2}>
            <div className="result">{attrs.strokeWidth}</div>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={8}>颜色</Col>
          <Col span={14}>
            <Input
              type="color"
              value={attrs.stroke}
              style={{ width: '100%' }}
              onChange={onStrokeChange}
            />
          </Col>
        </Row>
        <Row align="middle">
          <Col span={8}>连线样式</Col>
          <Col span={14}>
            <Select
              style={{ width: '100%' }}
              value={attrs.connector}
              onChange={onConnectorChange}
            >
              <Select.Option value="normal">Normal</Select.Option>
              {/* <Select.Option value="smooth">Smooth</Select.Option> */}
              <Select.Option value="rounded">Rounded</Select.Option>
              {/* <Select.Option value="jumpover">Jumpover</Select.Option> */}
            </Select>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={8}>起点</Col>
          <Col span={14}>
            <Select
              style={{ width: '100%' }}
              value={attrs.sourceMarker}
              onChange={onSourceMarkerChange}
            >
              {lineMarkerList.map((el) => (
                <Select.Option key={el.label} value={el.value}>
                  {el.label}
                </Select.Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={8}>终点</Col>
          <Col span={14}>
            <Select
              style={{ width: '100%' }}
              value={attrs.targetMarker}
              onChange={onTargetMarkerChange}
            >
              {lineMarkerList.map((el) => (
                <Select.Option key={el.label} value={el.value}>
                  {el.label}
                </Select.Option>
              ))}
            </Select>
          </Col>
        </Row>
      </TabPane>
      <TabPane tab="属性" key="2">
        <Row align="middle">
          <Col span={8}>网络</Col>
          <Col span={14}>
            <Select
              style={{ width: '100%' }}
              value={attrs.networkId}
              onChange={onNetworkChange}
            >
              <Select.Option value="networkId-1">网络1</Select.Option>
              <Select.Option value="networkId-2">网络2</Select.Option>
            </Select>
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  );
}
