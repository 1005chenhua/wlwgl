export function getGauge(optionSet) {
  const parData = [
    { value: 10, name: '资源消耗计量设备' },
    { value: 5, name: '智能交互终端' },
    { value: 15, name: '无线通讯设备' },
    { value: 25, name: '电平量开关量控制设备' },
    { value: 20, name: '监控摄像设备' },
    { value: 35, name: '教育矫正设备' },
    { value: 30, name: '位置采集设备' },
    { value: 40, name: '生命体征采集设备' },
    { value: 20, name: '运动康复设备' },
    { value: 35, name: '物品信息采集设备' },
    { value: 30, name: '环境信息采集设备' },
    { value: 40, name: '戒毒医疗设备' }
  ];
  const legendArr = parData.map((e,i) => {
    const x = i % 2 === 0 ? '55%' : '75%';
    return {
      orient: 'vertical',
      icon: 'circle',
      x: x,
      y: 8 + parseInt(i / 2) * 15 + '%', // 0 1 => 20,2 3 => 35, 4 5 => 50, 6 7 => 65
      align: 'left',
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 8,
      data: [e.name],
      textStyle: {
        fontSize: 12,
        color: '#06C5FD'
      }
    };
  });
  const option = {
    color: ['#00FFFF', '#556FB5', '#FACD89', '#0068B7', '#F29B76', '#22AC38', '#AA89BD', '#004986'],
    tooltip: {
      trigger: 'item',
      formatter: '<br/>{b} : {c} ({d}%)'
    },
    legend: legendArr,
    calculable: true,
    series: [
      {
        name: '半径模式',
        type: 'pie',
        radius: [20, 90],
        center: ['28%', '50%'],
        roseType: 'radius',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        lableLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data: parData
      }
    ]
  };
  return option;
}
export function getLine(optionSet) {
  const option = {
    legend: {
      right: '6%',
      top: '10%',
      itemWidth: 8,
      itemHeight: 8,
      itemGap: 30,
      icon: 'rectangle',
      textStyle: {
        color: '#fff'
      },
      data: [],
    },
    xAxis: {
      type: 'category',
      name: '',
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          color: '#FFFFFF',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#054792', // X轴及其文字颜色
          width: 0.5
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#054792',
          width: 0.5
        }
      },
      data: ['11-13', '11-14', '11-15', '11-16', '11-17', '11-18', '11-19']
    },
    yAxis: {
      type: 'value',
      name: '',
      min: 0,
      max: 1000,
      interval: 200,
      axisLabel: {
        textStyle: {
          color: '#FFFFFF',
        },
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#054792', // Y轴及其文字颜色
          width: 0.5
        }
      },
      splitLine: { // 分割线颜色修改
        lineStyle: {
          color: '#054792',
          width: 0.5
        }
      }
    },
    series: [{
      // symbol: 'circle',
      smooth: true,
      symbolSize: 5,
      sampling: 'average',
      itemStyle: {
        normal: {
          color: '#00BBF4'
        }
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,195,255,1)'
          },{
            offset: 1,
            color: 'rgba(0,195,255,0)'
          }],
        }
      },
      type: 'line',
      data: [820, 932, 901, 934, 560, 780, 800],
    }]
  };
  return option;
}
