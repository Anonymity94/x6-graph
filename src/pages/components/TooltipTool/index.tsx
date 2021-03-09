import { EdgeView, ToolsView } from '@antv/x6';
import { Tooltip } from 'antd';
import React from 'react';
import ReactDom from 'react-dom';

export interface TooltipToolOptions extends ToolsView.ToolItem.Options {
  tooltip?: string;
}

class TooltipTool extends ToolsView.ToolItem<EdgeView, TooltipToolOptions> {
  private delay = 100;
  private timer: number;
  private knob: HTMLDivElement;
  private tooltipVisible: boolean;

  render() {
    super.render();
    this.knob = ToolsView.createElement('div', false) as HTMLDivElement;
    this.knob.style.position = 'absolute';
    this.container.appendChild(this.knob);
    this.updatePosition();
    document.addEventListener('mousemove', this.onMouseMove);

    return this;
  }

  private toggleTooltip(visible: boolean) {
    ReactDom.unmountComponentAtNode(this.knob);

    if (visible) {
      ReactDom.render(
        <Tooltip title={this.options.tooltip} visible={true}>
          <div />
        </Tooltip>,
        this.knob,
      );
    }
    this.tooltipVisible = visible;
  }

  private updatePosition(e?: MouseEvent) {
    const style = this.knob.style;
    if (e) {
      const p = this.graph.clientToGraph(e.clientX, e.clientY);
      style.display = 'block';
      style.left = `${p.x}px`;
      style.top = `${p.y}px`;
    } else {
      style.display = 'none';
      style.left = '-1000px';
      style.top = '-1000px';
    }
  }

  private onMouseLeave() {
    this.updatePosition();
    window.clearTimeout(this.timer);
    window.setTimeout(() => this.toggleTooltip(false), this.delay);
    document.removeEventListener('mousemove', this.onMouseMove);
  }

  private onMouseMove = (e: MouseEvent) => {
    window.clearTimeout(this.timer);
    this.updatePosition(e);
    this.timer = window.setTimeout(() => {
      if (this.tooltipVisible) {
        this.toggleTooltip(false);
      }
      this.toggleTooltip(true);
    }, this.delay);
  };

  delegateEvents() {
    this.cellView.on('cell:mouseleave', this.onMouseLeave, this);
    return super.delegateEvents();
  }

  protected onRemove() {
    this.cellView.off('cell:mouseleave', this.onMouseLeave, this);
  }
}

TooltipTool.config({
  tagName: 'div',
  isSVGElement: false,
});

export default TooltipTool;
