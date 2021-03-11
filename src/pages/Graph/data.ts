const graphData = {
  cells: [
    {
      shape: 'edge',
      attrs: { line: { stroke: '#5F95FF', strokeWidth: 1, targetMarker: '' } },
      id: 'a09a983a-5901-4399-a574-60e9780aaa2f',
      router: { name: 'manhattan' },
      zIndex: 0,
      networkId: 'networkId-1',
      labels: [
        {
          attrs: {
            label: {
              text:
                'networkId-1\n        峰值带宽：948Mbps\n        峰值并发会话：23948',
            },
          },
          position: { distance: 0.5263157894736842, offset: -90, angle: 0 },
        },
      ],
      source: {
        cell: '2ecd7415-0395-424c-b2b3-ba318cd0efde',
        port: '4e8cf490-f653-4d88-b384-ba7507f7a60e',
      },
      target: { cell: '22188ff5-e5da-4ae3-a531-b5a6f3cbc429', port: 't1' },
    },
    {
      shape: 'edge',
      attrs: { line: { stroke: '#5F95FF', strokeWidth: 1, targetMarker: '' } },
      id: '5becd8f3-8525-4b50-be44-4dfc3013845b',
      router: { name: 'manhattan' },
      zIndex: 0,
      source: { cell: '22188ff5-e5da-4ae3-a531-b5a6f3cbc429', port: 'b1' },
      target: { cell: '58414abb-ea29-48a6-9cc3-dfff20533ea0', port: 't1' },
    },
    {
      shape: 'edge',
      attrs: { line: { stroke: '#5F95FF', strokeWidth: 1, targetMarker: '' } },
      id: '0a31224f-29d1-4cda-bc15-510c9621968d',
      router: { name: 'manhattan' },
      zIndex: 0,
      source: { cell: '43918a83-3898-42c3-a902-7bfa8d5bfe82', port: 'b1' },
      target: { cell: '626bc080-20d3-4e77-81f8-61f39ced1bed', port: 't1' },
    },
    {
      shape: 'edge',
      attrs: { line: { stroke: '#5F95FF', strokeWidth: 1, targetMarker: '' } },
      id: '91aa264f-17ae-406d-9615-86293cd6e94b',
      router: { name: 'manhattan' },
      zIndex: 0,
      source: { cell: '43918a83-3898-42c3-a902-7bfa8d5bfe82', port: 'r1' },
      target: { cell: '00ac7239-70bb-45eb-a491-664aa5bfd9f2', port: 'l1' },
    },
    {
      shape: 'edge',
      attrs: { line: { stroke: '#5F95FF', strokeWidth: 1, targetMarker: '' } },
      id: '7cdf74a6-ffde-40fb-a5ce-2a62a99ef00e',
      router: { name: 'manhattan' },
      zIndex: 0,
      source: { cell: '00ac7239-70bb-45eb-a491-664aa5bfd9f2', port: 'r1' },
      target: { cell: '93bde8ca-3222-48ce-a74e-e68f78ed8dcc', port: 'l1' },
    },
    {
      shape: 'edge',
      attrs: { line: { stroke: '#5F95FF', strokeWidth: 1, targetMarker: '' } },
      id: '221b10c6-c8d0-458a-8cc8-20d1e6d74a95',
      router: { name: 'manhattan' },
      zIndex: 0,
      source: { cell: '626bc080-20d3-4e77-81f8-61f39ced1bed', port: 'b1' },
      target: { cell: 'efb313a3-4000-4ec4-acc3-e42d2ecfca4d', port: 't1' },
    },
    {
      shape: 'edge',
      attrs: { line: { stroke: '#5F95FF', strokeWidth: 1, targetMarker: '' } },
      id: 'b040ebc5-ad00-4a92-bbd7-6d69bdf55715',
      router: { name: 'manhattan' },
      zIndex: 0,
      source: { cell: '58414abb-ea29-48a6-9cc3-dfff20533ea0', port: 'b1' },
      target: { cell: '43918a83-3898-42c3-a902-7bfa8d5bfe82', port: 't1' },
    },
    {
      shape: 'edge',
      attrs: { line: { stroke: '#5F95FF', strokeWidth: 1, targetMarker: '' } },
      id: '6cf22457-c320-4af3-8594-6ed4af59bd0a',
      router: { name: 'manhattan' },
      zIndex: 0,
      networkId: 'networkId-2',
      labels: [
        {
          attrs: {
            label: {
              text:
                'networkId-2\n        峰值带宽：948Mbps\n        峰值并发会话：23948',
            },
          },
        },
      ],
      source: { cell: '43918a83-3898-42c3-a902-7bfa8d5bfe82', port: 'l1' },
      target: { cell: '04e006d5-1d26-484c-8c27-173e48202a8e', port: 'r1' },
    },
    {
      shape: 'edge',
      attrs: { line: { stroke: '#5F95FF', strokeWidth: 1, targetMarker: '' } },
      id: 'e8faef95-625a-4cf6-ad0b-fcbfbdc5eb52',
      router: { name: 'manhattan' },
      zIndex: 0,
      source: { cell: '04e006d5-1d26-484c-8c27-173e48202a8e', port: 'l1' },
      target: { cell: '21832e94-40b1-47b2-ae66-ef80562b2f83', port: 'r1' },
    },
    {
      shape: 'edge',
      attrs: { line: { stroke: '#5F95FF', strokeWidth: 1, targetMarker: '' } },
      id: '368f9e24-3dbf-4940-a1de-3a00d114a97b',
      router: { name: 'manhattan' },
      zIndex: 0,
      connector: { name: 'rounded' },
      source: { cell: '21832e94-40b1-47b2-ae66-ef80562b2f83', port: 't1' },
      target: { cell: '94141723-b7f7-4425-8160-8ebb917dc30c', port: 'r1' },
    },
    {
      shape: 'edge',
      attrs: { line: { stroke: '#5F95FF', strokeWidth: 1, targetMarker: '' } },
      id: '4a193239-33fc-4410-a184-30cd3591b0ac',
      router: { name: 'manhattan' },
      zIndex: 0,
      connector: { name: 'rounded' },
      source: { cell: '21832e94-40b1-47b2-ae66-ef80562b2f83', port: 'b1' },
      target: { cell: 'ea917f11-f5c7-46a0-93d9-48e4ffdff0fa', port: 'r1' },
    },
    {
      position: { x: 600, y: 30 },
      size: { width: 100, height: 50 },
      attrs: {
        text: { fontSize: 15, fill: '#f02424', textWrap: { text: '广域网' } },
        image: {
          'xlink:href':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACqElEQVRoQ+1YwW7TQBCd2SoSEpXaTyh3JOr0A0i/gEQJXEmvXGr7B4AfiM2Fa90rxKR8AeYDGheJO/AHRSoSUtQdNDapkpDYXnst7Mg5xjNv583bmZ1dhC354ZbwgIZI1ZRsFGkUKSkDzdYqKbG5YRtFsqTO+hA+QZJdABwm25MnpTh3nxpBFtx1NqUoYk7CA7ylM0ToqARGBAHt4InbM76r+LGtdiK2Hw4B6Ew1kLk9AVwjoDXqG54KhlYi1jg8RSRXJYDNtniiQkYbEdu/NAHQ0UMiRpESj7PWjTIRcxIeItEeIf50e8YVL8j/CUmhThKMxduMBD5we8Z1GnYmIuYk3BcSTgloiAAHy/uZLgiws/h/2qIq34ng3Bm0U7pehmKPFIg70KFKADptZaxKYidLVISVQEnfEGBfZ2DqWGSN+keJTSSRiD2+nABiV31hvR5EcOUM2kYS6kYi5vuwIwR90htSfrRRv52Y9I0frfHUQ4Tn+ZfW66lMhMcLIeXL9PlIb6BpaGlnypIiPF4QkPP/i3sdLfKIREA78HHduXJHpOiMlJZRXd/jWYw8KcTrRUIRkaoVdhbS3Mn+TsrRdBERsfwpnxV3J3YWoCrYLI4wWJcttSlxfIdxBu1jrFqbzaM0dzSs67ZaJMyDJdr+lPJkoUo+XPhbQSTqWrY/5fb1qEoZzhPLVhQ7AXzGOh6Gq4oR0Zv5gRggwOM8klbBh2+Q8YjCjwe3MgDEvSoEphIDq+EMjszaDY0rJL9IgR0eHpfG+KheUF7UQRkucBLYnU/A/9wQ46cfaQKBWVFCPwDw1eorZOI9+MW7r7v3AXZnrdk9lX1bhm1r1vr9C+Dm7bOHN+vwMz3QlRGYbsyGiO6MFsVrFCmaQd3+jSK6M1oUr1GkaAZ1+/8Bl9H7rg5zCPAAAAAASUVORK5CYII=',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: '036c678b-352b-48c4-9a1c-c638a52341a0', group: 'top' },
          { id: '32b79859-f8ab-4e84-94ab-cea9c211f2a9', group: 'right' },
          { id: '4e8cf490-f653-4d88-b384-ba7507f7a60e', group: 'bottom' },
          { id: 'e4c4025a-5955-41d7-89b7-1cb265a117b8', group: 'left' },
        ],
      },
      id: '2ecd7415-0395-424c-b2b3-ba318cd0efde',
      zIndex: 6,
    },
    {
      position: { x: 600, y: 175 },
      size: { width: 100, height: 50 },
      attrs: {
        text: { textWrap: { text: '出口路由器' } },
        image: {
          'xlink:href':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEN0lEQVRoQ+1YS3LbRhB9PeTezAk8LHIf+gSiT2BtUwlo+gRWThD5BJZPoA9KlaXpE1g+gZU9WRifINI6JDrVIAAOQYCYIUFVSiF2lOb3+nW//hCeyUfPBAeOQP5rTB4ZOTJyIAv8v11Lh7P3YAxArBs1MJOB4jvzW//a91wvRvRl1EE7/krAwPcin/UM3GOuXpt33QfXfX5AbmZnRPgI4JHBEwAToOV82fZHLToATgl0CuAFM343o97FYYCEs+/CBgMfTNA7d73EZ50OZ+cE/CGsmKD3ynWvFyPdcMZyMLdV1/zSNa6X+KzTf0aa5nEke6Kg5/w+54X6NhpQHH+vukCH0dAE3TuvR99GA/Nr9764ZxeDuQMJoyEh/srM38yoP7Qv1+H0Cgxd/HsdKH0zFeBXZtS/Wj9vdk/Azwz12tU4HkBS32X+YkZ9CcjkExAEesuMBxDb1v1kgr4IQv6J/wN8kv+BaUCEDjO/s8EIQCI68Ql4HyAXBLy3A13cSViqsjwr9SpzHR1ORZE+V6x95LnSmdxaAf/JBL2zOmbl/+5AcittWG9MRJcAfjCQucjp0jWWypPkn1Ycpdb/AqKEOQLGADqs1NCOFX0zTc4sc+MqUB5AZvIQXea3cjGAcRYjqfLIY18Ig2AeENEbBv4yQS9PpvpmOkGrdV4M+IxpZhgz6nUbZSRXkrn6qSzjitXtv+tV8lyFhOVqSXwV9uRxdxl1qB3/7SPBTozUSW+VxbKgTXKPZxLNDVcAv5drrajelN5ttIvriEvtAiRXLkcJdmMkKxsK0rsVRIlK2SpW5/eZEVyZdAWyIb1bQdgqtQz2YZIXPOonXwl2A1IhvaukGA3BEgbpR4szqWIzlVpTMcYFoFaJsoXHsjLFV4IdgWyX3jSPbJC0lhBLVCzbUOZyvhLsBGSb9Iq18c9irVZKH1hWQ11ITikgfsCiNS5KukizjwTXArHKkMco6Enz82SfjwQ7AFnWSD7lQlNIfSTYAUjWsfG1CfpSijzZ5yPBDkDSMt0zMzeBdiXB9UasB7LqDQyID9LeVoJm0kmhWtLMFfc4A2nCwrue0SgQ6dZAaqO/3vVxTvs4lg7yY7NAHIs3pwc6LvIpVp1dy26o5AIgPgHUNxkOJElxHr8F8w/pvfPfAEzQ+yDvXvbrYLTVtYySkmaM6GX+u3Dmck/1wGPnGFkHkg/RkkFd8UK7l89mU3lyS5kt5girSMyHf4cBYk06UkaGgLqzGBmD2ViMJDknm0imjABtdWUxovPfS0byMxNGPHr3etfKR5j1Wu7o+s7LdDj9nFbRtSPaeiDWhDEZXBMmiFuHzSdqocH5QBsuDVktEJtiZ1M2uLA4vKs62glIAuY2GiCOT6Xba/Cd1UcR3UGpSVnTVbbJGciTPH6PS45A9jDeQbYeGTmIWfc49MjIHsY7yNZnw8i/cRvnURwRtd0AAAAASUVORK5CYII=',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: 't1', group: 'top' },
          { id: 'r1', group: 'right' },
          { id: 'b1', group: 'bottom' },
          { id: 'l1', group: 'left' },
        ],
      },
      id: '22188ff5-e5da-4ae3-a531-b5a6f3cbc429',
      zIndex: 7,
    },
    {
      position: { x: 600, y: 318 },
      size: { width: 100, height: 50 },
      attrs: {
        text: { textWrap: { text: '出口防火墙' } },
        image: {
          'xlink:href':
            'data:image/png;base64,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',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: 't1', group: 'top' },
          { id: 'r1', group: 'right' },
          { id: 'b1', group: 'bottom' },
          { id: 'l1', group: 'left' },
        ],
      },
      id: '58414abb-ea29-48a6-9cc3-dfff20533ea0',
      zIndex: 8,
    },
    {
      position: { x: 600, y: 440 },
      size: { width: 100, height: 50 },
      attrs: {
        text: { textWrap: { text: '区域A交换机' } },
        image: {
          'xlink:href':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEN0lEQVRoQ+1YS3LbRhB9PeTezAk8LHIf+gSiT2BtUwlo+gRWThD5BJZPoA9KlaXpE1g+gZU9WRifINI6JDrVIAAOQYCYIUFVSiF2lOb3+nW//hCeyUfPBAeOQP5rTB4ZOTJyIAv8v11Lh7P3YAxArBs1MJOB4jvzW//a91wvRvRl1EE7/krAwPcin/UM3GOuXpt33QfXfX5AbmZnRPgI4JHBEwAToOV82fZHLToATgl0CuAFM343o97FYYCEs+/CBgMfTNA7d73EZ50OZ+cE/CGsmKD3ynWvFyPdcMZyMLdV1/zSNa6X+KzTf0aa5nEke6Kg5/w+54X6NhpQHH+vukCH0dAE3TuvR99GA/Nr9764ZxeDuQMJoyEh/srM38yoP7Qv1+H0Cgxd/HsdKH0zFeBXZtS/Wj9vdk/Azwz12tU4HkBS32X+YkZ9CcjkExAEesuMBxDb1v1kgr4IQv6J/wN8kv+BaUCEDjO/s8EIQCI68Ql4HyAXBLy3A13cSViqsjwr9SpzHR1ORZE+V6x95LnSmdxaAf/JBL2zOmbl/+5AcittWG9MRJcAfjCQucjp0jWWypPkn1Ycpdb/AqKEOQLGADqs1NCOFX0zTc4sc+MqUB5AZvIQXea3cjGAcRYjqfLIY18Ig2AeENEbBv4yQS9PpvpmOkGrdV4M+IxpZhgz6nUbZSRXkrn6qSzjitXtv+tV8lyFhOVqSXwV9uRxdxl1qB3/7SPBTozUSW+VxbKgTXKPZxLNDVcAv5drrajelN5ttIvriEvtAiRXLkcJdmMkKxsK0rsVRIlK2SpW5/eZEVyZdAWyIb1bQdgqtQz2YZIXPOonXwl2A1IhvaukGA3BEgbpR4szqWIzlVpTMcYFoFaJsoXHsjLFV4IdgWyX3jSPbJC0lhBLVCzbUOZyvhLsBGSb9Iq18c9irVZKH1hWQ11ITikgfsCiNS5KukizjwTXArHKkMco6Enz82SfjwQ7AFnWSD7lQlNIfSTYAUjWsfG1CfpSijzZ5yPBDkDSMt0zMzeBdiXB9UasB7LqDQyID9LeVoJm0kmhWtLMFfc4A2nCwrue0SgQ6dZAaqO/3vVxTvs4lg7yY7NAHIs3pwc6LvIpVp1dy26o5AIgPgHUNxkOJElxHr8F8w/pvfPfAEzQ+yDvXvbrYLTVtYySkmaM6GX+u3Dmck/1wGPnGFkHkg/RkkFd8UK7l89mU3lyS5kt5girSMyHf4cBYk06UkaGgLqzGBmD2ViMJDknm0imjABtdWUxovPfS0byMxNGPHr3etfKR5j1Wu7o+s7LdDj9nFbRtSPaeiDWhDEZXBMmiFuHzSdqocH5QBsuDVktEJtiZ1M2uLA4vKs62glIAuY2GiCOT6Xba/Cd1UcR3UGpSVnTVbbJGciTPH6PS45A9jDeQbYeGTmIWfc49MjIHsY7yNZnw8i/cRvnURwRtd0AAAAASUVORK5CYII=',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: 't1', group: 'top' },
          { id: 'r1', group: 'right' },
          { id: 'b1', group: 'bottom' },
          { id: 'l1', group: 'left' },
        ],
      },
      id: '43918a83-3898-42c3-a902-7bfa8d5bfe82',
      zIndex: 9,
    },
    {
      position: { x: 600, y: 592 },
      size: { width: 100, height: 50 },
      attrs: {
        text: { textWrap: { text: '区域A交换机' } },
        image: {
          'xlink:href':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEN0lEQVRoQ+1YS3LbRhB9PeTezAk8LHIf+gSiT2BtUwlo+gRWThD5BJZPoA9KlaXpE1g+gZU9WRifINI6JDrVIAAOQYCYIUFVSiF2lOb3+nW//hCeyUfPBAeOQP5rTB4ZOTJyIAv8v11Lh7P3YAxArBs1MJOB4jvzW//a91wvRvRl1EE7/krAwPcin/UM3GOuXpt33QfXfX5AbmZnRPgI4JHBEwAToOV82fZHLToATgl0CuAFM343o97FYYCEs+/CBgMfTNA7d73EZ50OZ+cE/CGsmKD3ynWvFyPdcMZyMLdV1/zSNa6X+KzTf0aa5nEke6Kg5/w+54X6NhpQHH+vukCH0dAE3TuvR99GA/Nr9764ZxeDuQMJoyEh/srM38yoP7Qv1+H0Cgxd/HsdKH0zFeBXZtS/Wj9vdk/Azwz12tU4HkBS32X+YkZ9CcjkExAEesuMBxDb1v1kgr4IQv6J/wN8kv+BaUCEDjO/s8EIQCI68Ql4HyAXBLy3A13cSViqsjwr9SpzHR1ORZE+V6x95LnSmdxaAf/JBL2zOmbl/+5AcittWG9MRJcAfjCQucjp0jWWypPkn1Ycpdb/AqKEOQLGADqs1NCOFX0zTc4sc+MqUB5AZvIQXea3cjGAcRYjqfLIY18Ig2AeENEbBv4yQS9PpvpmOkGrdV4M+IxpZhgz6nUbZSRXkrn6qSzjitXtv+tV8lyFhOVqSXwV9uRxdxl1qB3/7SPBTozUSW+VxbKgTXKPZxLNDVcAv5drrajelN5ttIvriEvtAiRXLkcJdmMkKxsK0rsVRIlK2SpW5/eZEVyZdAWyIb1bQdgqtQz2YZIXPOonXwl2A1IhvaukGA3BEgbpR4szqWIzlVpTMcYFoFaJsoXHsjLFV4IdgWyX3jSPbJC0lhBLVCzbUOZyvhLsBGSb9Iq18c9irVZKH1hWQ11ITikgfsCiNS5KukizjwTXArHKkMco6Enz82SfjwQ7AFnWSD7lQlNIfSTYAUjWsfG1CfpSijzZ5yPBDkDSMt0zMzeBdiXB9UasB7LqDQyID9LeVoJm0kmhWtLMFfc4A2nCwrue0SgQ6dZAaqO/3vVxTvs4lg7yY7NAHIs3pwc6LvIpVp1dy26o5AIgPgHUNxkOJElxHr8F8w/pvfPfAEzQ+yDvXvbrYLTVtYySkmaM6GX+u3Dmck/1wGPnGFkHkg/RkkFd8UK7l89mU3lyS5kt5girSMyHf4cBYk06UkaGgLqzGBmD2ViMJDknm0imjABtdWUxovPfS0byMxNGPHr3etfKR5j1Wu7o+s7LdDj9nFbRtSPaeiDWhDEZXBMmiFuHzSdqocH5QBsuDVktEJtiZ1M2uLA4vKs62glIAuY2GiCOT6Xba/Cd1UcR3UGpSVnTVbbJGciTPH6PS45A9jDeQbYeGTmIWfc49MjIHsY7yNZnw8i/cRvnURwRtd0AAAAASUVORK5CYII=',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: 't1', group: 'top' },
          { id: 'r1', group: 'right' },
          { id: 'b1', group: 'bottom' },
          { id: 'l1', group: 'left' },
        ],
      },
      id: '626bc080-20d3-4e77-81f8-61f39ced1bed',
      zIndex: 12,
    },
    {
      position: { x: 854, y: 440 },
      size: { width: 100, height: 50 },
      attrs: {
        text: { textWrap: { text: '区域B交换机' } },
        image: {
          'xlink:href':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEN0lEQVRoQ+1YS3LbRhB9PeTezAk8LHIf+gSiT2BtUwlo+gRWThD5BJZPoA9KlaXpE1g+gZU9WRifINI6JDrVIAAOQYCYIUFVSiF2lOb3+nW//hCeyUfPBAeOQP5rTB4ZOTJyIAv8v11Lh7P3YAxArBs1MJOB4jvzW//a91wvRvRl1EE7/krAwPcin/UM3GOuXpt33QfXfX5AbmZnRPgI4JHBEwAToOV82fZHLToATgl0CuAFM343o97FYYCEs+/CBgMfTNA7d73EZ50OZ+cE/CGsmKD3ynWvFyPdcMZyMLdV1/zSNa6X+KzTf0aa5nEke6Kg5/w+54X6NhpQHH+vukCH0dAE3TuvR99GA/Nr9764ZxeDuQMJoyEh/srM38yoP7Qv1+H0Cgxd/HsdKH0zFeBXZtS/Wj9vdk/Azwz12tU4HkBS32X+YkZ9CcjkExAEesuMBxDb1v1kgr4IQv6J/wN8kv+BaUCEDjO/s8EIQCI68Ql4HyAXBLy3A13cSViqsjwr9SpzHR1ORZE+V6x95LnSmdxaAf/JBL2zOmbl/+5AcittWG9MRJcAfjCQucjp0jWWypPkn1Ycpdb/AqKEOQLGADqs1NCOFX0zTc4sc+MqUB5AZvIQXea3cjGAcRYjqfLIY18Ig2AeENEbBv4yQS9PpvpmOkGrdV4M+IxpZhgz6nUbZSRXkrn6qSzjitXtv+tV8lyFhOVqSXwV9uRxdxl1qB3/7SPBTozUSW+VxbKgTXKPZxLNDVcAv5drrajelN5ttIvriEvtAiRXLkcJdmMkKxsK0rsVRIlK2SpW5/eZEVyZdAWyIb1bQdgqtQz2YZIXPOonXwl2A1IhvaukGA3BEgbpR4szqWIzlVpTMcYFoFaJsoXHsjLFV4IdgWyX3jSPbJC0lhBLVCzbUOZyvhLsBGSb9Iq18c9irVZKH1hWQ11ITikgfsCiNS5KukizjwTXArHKkMco6Enz82SfjwQ7AFnWSD7lQlNIfSTYAUjWsfG1CfpSijzZ5yPBDkDSMt0zMzeBdiXB9UasB7LqDQyID9LeVoJm0kmhWtLMFfc4A2nCwrue0SgQ6dZAaqO/3vVxTvs4lg7yY7NAHIs3pwc6LvIpVp1dy26o5AIgPgHUNxkOJElxHr8F8w/pvfPfAEzQ+yDvXvbrYLTVtYySkmaM6GX+u3Dmck/1wGPnGFkHkg/RkkFd8UK7l89mU3lyS5kt5girSMyHf4cBYk06UkaGgLqzGBmD2ViMJDknm0imjABtdWUxovPfS0byMxNGPHr3etfKR5j1Wu7o+s7LdDj9nFbRtSPaeiDWhDEZXBMmiFuHzSdqocH5QBsuDVktEJtiZ1M2uLA4vKs62glIAuY2GiCOT6Xba/Cd1UcR3UGpSVnTVbbJGciTPH6PS45A9jDeQbYeGTmIWfc49MjIHsY7yNZnw8i/cRvnURwRtd0AAAAASUVORK5CYII=',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: 't1', group: 'top' },
          { id: 'r1', group: 'right' },
          { id: 'b1', group: 'bottom' },
          { id: 'l1', group: 'left' },
        ],
      },
      id: '00ac7239-70bb-45eb-a491-664aa5bfd9f2',
      zIndex: 13,
    },
    {
      position: { x: 1062, y: 440 },
      size: { width: 100, height: 50 },
      attrs: {
        image: {
          'xlink:href':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACmElEQVRoQ2NkGCaAcZj4g2HUI4MtJgc0RqS1rAwYWJj36+toCjD8/09W2Lx4/ZbhxatXFwbUIxI6Ng6JUcH748ODyPIESNPnr18ZAmLSBzaPIHvk+q17DAyMpIWriBA/g6iwEINzYMzg8Uh6cTPD9x8/SIoZG3NDhrS4kMHlEZJ8gKZ4wGNEx9YjxsrCZLG1mTEl/mDonjJr8CQtSnwy4DGCnNnbJswhObPLSUkwxIR6D648EpddTXKkaKgqMlQVpAwuj+zYd5Th+3fSSi05aUkGYwOtweURkqMDSQM4jxi6hL430dcWoMQgaup9/vI1g6S4KENxViLRxoI9klbS+H9mdx3RmuihMCankqG2KJNoq8AeSS1u+D+rp55oTfRQOOqR0RihUTobTVqjSWs0aeEPgWGZR4qWfmZQFGVmyHXjwun7IVEhxkz/CPZIcwjP0PYIMdlwSMTIqEeICQFaqxmWpRYxgTaaR4gJJUrUhKQWMaTFBhNtRE55w+DsWIWlFzPkJEUS7ZGk3PLB6ZGRndkH2+DDl6/fGDLKm0kffDB0DT1AdGLEovDfv38Cf//80UeWYmVjO0iMmSC9IkIC+uKiIijKtdRUGEJ83YgxAqyGKmO/oPFbZibG/ci2Pr10mKgZG2rMWI1Mjxg4BAgwsrKiJB9YDHz79k3l54/vc2D8/wwMX4SEhH2wpYv/DAwfL+xefQEmR/cYMXCIUGBk/bsAV6L99/cvYsiVkeEPExPzF2xqGRkYLpzbvbpgwDxCdK4jUSEoRsL8PPdnJceQqBOh/MvXrwz+g2FWF1RQKCvKM/Bw4+7K4vPl3fsPGUBFNlGlC9nBRUAjdMEAqPjnp8iO//8vDqhHKHI8muZRj1AzNKlh1rCJEQCRX1wO0PtAnAAAAABJRU5ErkJggg==',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: 't1', group: 'top' },
          { id: 'r1', group: 'right' },
          { id: 'b1', group: 'bottom' },
          { id: 'l1', group: 'left' },
        ],
      },
      id: '93bde8ca-3222-48ce-a74e-e68f78ed8dcc',
      zIndex: 15,
    },
    {
      position: { x: 600, y: 726 },
      size: { width: 100, height: 50 },
      attrs: {
        image: {
          'xlink:href':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACmElEQVRoQ2NkGCaAcZj4g2HUI4MtJgc0RqS1rAwYWJj36+toCjD8/09W2Lx4/ZbhxatXFwbUIxI6Ng6JUcH748ODyPIESNPnr18ZAmLSBzaPIHvk+q17DAyMpIWriBA/g6iwEINzYMzg8Uh6cTPD9x8/SIoZG3NDhrS4kMHlEZJ8gKZ4wGNEx9YjxsrCZLG1mTEl/mDonjJr8CQtSnwy4DGCnNnbJswhObPLSUkwxIR6D648EpddTXKkaKgqMlQVpAwuj+zYd5Th+3fSSi05aUkGYwOtweURkqMDSQM4jxi6hL430dcWoMQgaup9/vI1g6S4KENxViLRxoI9klbS+H9mdx3RmuihMCankqG2KJNoq8AeSS1u+D+rp55oTfRQOOqR0RihUTobTVqjSWs0aeEPgWGZR4qWfmZQFGVmyHXjwun7IVEhxkz/CPZIcwjP0PYIMdlwSMTIqEeICQFaqxmWpRYxgTaaR4gJJUrUhKQWMaTFBhNtRE55w+DsWIWlFzPkJEUS7ZGk3PLB6ZGRndkH2+DDl6/fGDLKm0kffDB0DT1AdGLEovDfv38Cf//80UeWYmVjO0iMmSC9IkIC+uKiIijKtdRUGEJ83YgxAqyGKmO/oPFbZibG/ci2Pr10mKgZG2rMWI1Mjxg4BAgwsrKiJB9YDHz79k3l54/vc2D8/wwMX4SEhH2wpYv/DAwfL+xefQEmR/cYMXCIUGBk/bsAV6L99/cvYsiVkeEPExPzF2xqGRkYLpzbvbpgwDxCdK4jUSEoRsL8PPdnJceQqBOh/MvXrwz+g2FWF1RQKCvKM/Bw4+7K4vPl3fsPGUBFNlGlC9nBRUAjdMEAqPjnp8iO//8vDqhHKHI8muZRj1AzNKlh1rCJEQCRX1wO0PtAnAAAAABJRU5ErkJggg==',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: 't1', group: 'top' },
          { id: 'r1', group: 'right' },
          { id: 'b1', group: 'bottom' },
          { id: 'l1', group: 'left' },
        ],
      },
      id: 'efb313a3-4000-4ec4-acc3-e42d2ecfca4d',
      zIndex: 16,
    },
    {
      position: { x: 360, y: 440 },
      size: { width: 100, height: 50 },
      attrs: {
        text: { textWrap: { text: '防火墙' } },
        image: {
          'xlink:href':
            'data:image/png;base64,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',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: 't1', group: 'top' },
          { id: 'r1', group: 'right' },
          { id: 'b1', group: 'bottom' },
          { id: 'l1', group: 'left' },
        ],
      },
      id: '04e006d5-1d26-484c-8c27-173e48202a8e',
      zIndex: 17,
    },
    {
      position: { x: 30, y: 340 },
      size: { width: 100, height: 50 },
      attrs: {
        text: { textWrap: { text: 'A服务器区' } },
        image: {
          'xlink:href':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADDElEQVRoQ+1aXUsUURh+zpmdmd11FUvIdP1IIwokTZNIEvoAqfQ+vaybfkQQ9CO6L+qqPxCElFBE0aVrSomBHxmuX+Wu68yeOefEjCD2oZ2OtDsbs3eHfd/hec7zPu875+wSaH6azw/cJIQ+0Ez/bZqU4tb829GHOs8kOkl+TkvfVambu1/e3JtnWpi0kiIiChKWXJF79x9Jy7IUoP1dyJ3bI1pVopUUlZaCOCUvrd1di6ZPgdgJBZi/hkiPQcxN7HxRViJnB0dwpbczAPN8/CMys1+USUlWhDcxFg4ipLYBMDWNLzzI1c/hIHLm2g30d3UEYF5OzmBqYakyFbFaO2AlqwPwReaBC6FOhDOI2Uw4FJGGCUKoMvgfAwXgsXAQae0fwsm2tgDMh8UsFte+KZMKldnruy8inW4MwC8sr2N1I69MBF4RfPpdOBShDScAzTkC3yPzU+Eg0jM0gkvdpwMwY5lpTMxV6BxBqhaEmurltCtSCg7k18KhiBaDPZLK+opCDjUeYLJzyJX5cCjie+Ryz7ZHXoxXsEdIXTOIZWtVmOQMMjsbDkXSfdfR3tISgPmUXUH2q/ocCdVATJ8bQPux1oDIzJJPJKesjk+ET74KhyLKqBUCy9q1FPAph0RElLfqp8DopvEPOxeVVlRaFwb/zW3866dat59aSb6KTQPD0nNdSCHAXRckZoBSA1JKCMZAzRiA7cdvr/1zPSCkhGQeqOWvCYTHAcFhVdeAUIqF0SdamLSSfHB+1yps5OAVGZx8DjHbghVPgDMPbmETViIBGotBcg6nUEA8WQUao0E823Jgp/y1gWLBgeAMdU3pYCPKYvaISKTI3j028khk9qhr7f8OEnnE98hWLg+PMTibBZiWCdO2wTmHW9iCHbd3BqK/tqqSoJSCMwbmurCSCVDDgOcU4XkMhxuOBuuSD8To5+n/6jxiUsRSFrx1B3FJcNww8V4UA4olL62DHHWruo4g1VmPpccZ9NI4hs0a3HWW4RBZWUSwSxFfhUZiYFHyylNkP5uUvLTC9sez73Ex21EoTZRbAAAAAElFTkSuQmCC',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: 't1', group: 'top' },
          { id: 'r1', group: 'right' },
          { id: 'b1', group: 'bottom' },
          { id: 'l1', group: 'left' },
        ],
      },
      id: '94141723-b7f7-4425-8160-8ebb917dc30c',
      zIndex: 21,
    },
    {
      position: { x: 203, y: 440 },
      size: { width: 100, height: 50 },
      attrs: {
        text: { textWrap: { text: 'DMZ交换机' } },
        image: {
          'xlink:href':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEN0lEQVRoQ+1YS3LbRhB9PeTezAk8LHIf+gSiT2BtUwlo+gRWThD5BJZPoA9KlaXpE1g+gZU9WRifINI6JDrVIAAOQYCYIUFVSiF2lOb3+nW//hCeyUfPBAeOQP5rTB4ZOTJyIAv8v11Lh7P3YAxArBs1MJOB4jvzW//a91wvRvRl1EE7/krAwPcin/UM3GOuXpt33QfXfX5AbmZnRPgI4JHBEwAToOV82fZHLToATgl0CuAFM343o97FYYCEs+/CBgMfTNA7d73EZ50OZ+cE/CGsmKD3ynWvFyPdcMZyMLdV1/zSNa6X+KzTf0aa5nEke6Kg5/w+54X6NhpQHH+vukCH0dAE3TuvR99GA/Nr9764ZxeDuQMJoyEh/srM38yoP7Qv1+H0Cgxd/HsdKH0zFeBXZtS/Wj9vdk/Azwz12tU4HkBS32X+YkZ9CcjkExAEesuMBxDb1v1kgr4IQv6J/wN8kv+BaUCEDjO/s8EIQCI68Ql4HyAXBLy3A13cSViqsjwr9SpzHR1ORZE+V6x95LnSmdxaAf/JBL2zOmbl/+5AcittWG9MRJcAfjCQucjp0jWWypPkn1Ycpdb/AqKEOQLGADqs1NCOFX0zTc4sc+MqUB5AZvIQXea3cjGAcRYjqfLIY18Ig2AeENEbBv4yQS9PpvpmOkGrdV4M+IxpZhgz6nUbZSRXkrn6qSzjitXtv+tV8lyFhOVqSXwV9uRxdxl1qB3/7SPBTozUSW+VxbKgTXKPZxLNDVcAv5drrajelN5ttIvriEvtAiRXLkcJdmMkKxsK0rsVRIlK2SpW5/eZEVyZdAWyIb1bQdgqtQz2YZIXPOonXwl2A1IhvaukGA3BEgbpR4szqWIzlVpTMcYFoFaJsoXHsjLFV4IdgWyX3jSPbJC0lhBLVCzbUOZyvhLsBGSb9Iq18c9irVZKH1hWQ11ITikgfsCiNS5KukizjwTXArHKkMco6Enz82SfjwQ7AFnWSD7lQlNIfSTYAUjWsfG1CfpSijzZ5yPBDkDSMt0zMzeBdiXB9UasB7LqDQyID9LeVoJm0kmhWtLMFfc4A2nCwrue0SgQ6dZAaqO/3vVxTvs4lg7yY7NAHIs3pwc6LvIpVp1dy26o5AIgPgHUNxkOJElxHr8F8w/pvfPfAEzQ+yDvXvbrYLTVtYySkmaM6GX+u3Dmck/1wGPnGFkHkg/RkkFd8UK7l89mU3lyS5kt5girSMyHf4cBYk06UkaGgLqzGBmD2ViMJDknm0imjABtdWUxovPfS0byMxNGPHr3etfKR5j1Wu7o+s7LdDj9nFbRtSPaeiDWhDEZXBMmiFuHzSdqocH5QBsuDVktEJtiZ1M2uLA4vKs62glIAuY2GiCOT6Xba/Cd1UcR3UGpSVnTVbbJGciTPH6PS45A9jDeQbYeGTmIWfc49MjIHsY7yNZnw8i/cRvnURwRtd0AAAAASUVORK5CYII=',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: 't1', group: 'top' },
          { id: 'r1', group: 'right' },
          { id: 'b1', group: 'bottom' },
          { id: 'l1', group: 'left' },
        ],
      },
      id: '21832e94-40b1-47b2-ae66-ef80562b2f83',
      zIndex: 23,
    },
    {
      position: { x: 30, y: 532 },
      size: { width: 100, height: 50 },
      attrs: {
        text: { textWrap: { text: 'B服务器区' } },
        image: {
          'xlink:href':
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADDElEQVRoQ+1aXUsUURh+zpmdmd11FUvIdP1IIwokTZNIEvoAqfQ+vaybfkQQ9CO6L+qqPxCElFBE0aVrSomBHxmuX+Wu68yeOefEjCD2oZ2OtDsbs3eHfd/hec7zPu875+wSaH6azw/cJIQ+0Ez/bZqU4tb829GHOs8kOkl+TkvfVambu1/e3JtnWpi0kiIiChKWXJF79x9Jy7IUoP1dyJ3bI1pVopUUlZaCOCUvrd1di6ZPgdgJBZi/hkiPQcxN7HxRViJnB0dwpbczAPN8/CMys1+USUlWhDcxFg4ipLYBMDWNLzzI1c/hIHLm2g30d3UEYF5OzmBqYakyFbFaO2AlqwPwReaBC6FOhDOI2Uw4FJGGCUKoMvgfAwXgsXAQae0fwsm2tgDMh8UsFte+KZMKldnruy8inW4MwC8sr2N1I69MBF4RfPpdOBShDScAzTkC3yPzU+Eg0jM0gkvdpwMwY5lpTMxV6BxBqhaEmurltCtSCg7k18KhiBaDPZLK+opCDjUeYLJzyJX5cCjie+Ryz7ZHXoxXsEdIXTOIZWtVmOQMMjsbDkXSfdfR3tISgPmUXUH2q/ocCdVATJ8bQPux1oDIzJJPJKesjk+ET74KhyLKqBUCy9q1FPAph0RElLfqp8DopvEPOxeVVlRaFwb/zW3866dat59aSb6KTQPD0nNdSCHAXRckZoBSA1JKCMZAzRiA7cdvr/1zPSCkhGQeqOWvCYTHAcFhVdeAUIqF0SdamLSSfHB+1yps5OAVGZx8DjHbghVPgDMPbmETViIBGotBcg6nUEA8WQUao0E823Jgp/y1gWLBgeAMdU3pYCPKYvaISKTI3j028khk9qhr7f8OEnnE98hWLg+PMTibBZiWCdO2wTmHW9iCHbd3BqK/tqqSoJSCMwbmurCSCVDDgOcU4XkMhxuOBuuSD8To5+n/6jxiUsRSFrx1B3FJcNww8V4UA4olL62DHHWruo4g1VmPpccZ9NI4hs0a3HWW4RBZWUSwSxFfhUZiYFHyylNkP5uUvLTC9sez73Ex21EoTZRbAAAAAElFTkSuQmCC',
        },
      },
      shape: 'flow-chart-image-rect',
      ports: {
        groups: {
          top: {
            position: 'top',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          right: {
            position: 'right',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          bottom: {
            position: 'bottom',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
          left: {
            position: 'left',
            attrs: {
              circle: {
                r: 3,
                magnet: true,
                stroke: '#5F95FF',
                strokeWidth: 1,
                fill: '#fff',
                style: { visibility: 'hidden' },
              },
            },
          },
        },
        items: [
          { id: 't1', group: 'top' },
          { id: 'r1', group: 'right' },
          { id: 'b1', group: 'bottom' },
          { id: 'l1', group: 'left' },
        ],
      },
      id: 'ea917f11-f5c7-46a0-93d9-48e4ffdff0fa',
      zIndex: 24,
    },
  ],
};

export default graphData;
