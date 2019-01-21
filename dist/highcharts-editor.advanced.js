/*

Highcharts Editor v0.2.2

Copyright (c) 2016-2017, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

highed.meta.optionsAdvanced = {
  "meta": {
    "types": {},
    "excludes": {}
  },
  "subtree": {
    "series": {
      "meta": {
        "types": {
          "array": "series",
          "object": 1
        },
        "name": "series",
        "excludes": {},
        "extends": ",plotOptions.series,plotOptions.ad,plotOptions.atr,plotOptions.bb,plotOptions.cci,plotOptions.cmf,plotOptions.ema,plotOptions.ikh,plotOptions.sma,plotOptions.macd,plotOptions.mfi,plotOptions.momentum,plotOptions.pivotpoints,plotOptions.priceenvelopes,plotOptions.psar,plotOptions.roc,plotOptions.rsi,plotOptions.stochastic,plotOptions.vbp,plotOptions.vwap,plotOptions.wma,plotOptions.zigzag,plotOptions.bellcurve,plotOptions.bullet,plotOptions.line,plotOptions.pyramid,plotOptions.funnel,plotOptions.histogram,plotOptions.pareto,plotOptions.sankey,plotOptions.solidgauge,plotOptions.streamgraph,plotOptions.sunburst,plotOptions.treemap,plotOptions.tilemap,plotOptions.variablepie,plotOptions.variwide,plotOptions.vector,plotOptions.windbarb,plotOptions.wordcloud,plotOptions.xrange,plotOptions.area,plotOptions.areaspline,plotOptions.bar,plotOptions.candlestick,plotOptions.column,plotOptions.flags,plotOptions.ohlc,plotOptions.pie,plotOptions.scatter,plotOptions.spline,plotOptions.scatter3d,plotOptions.arearange,plotOptions.areasplinerange,plotOptions.boxplot,plotOptions.bubble,plotOptions.columnrange,plotOptions.errorbar,plotOptions.gauge,plotOptions.polygon,plotOptions.waterfall,plotOptions.heatmap,plotOptions.mapbubble,plotOptions.mapline,plotOptions.mappoint,plotOptions.map"
      },
      "subtree": {
        "id": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "id",
            "excludes": {},
            "description": "An id for the series. This can be used after render time to get a\npointer to the series object through `chart.get()`."
          },
          "subtree": {}
        },
        "index": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "index",
            "excludes": {},
            "default": "undefined",
            "description": "The index of the series in the chart, affecting the internal index\nin the `chart.series` array, the visible Z index as well as the order\nin the legend."
          },
          "subtree": {}
        },
        "legendIndex": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "legendIndex",
            "excludes": {},
            "description": "The sequential index of the series in the legend."
          },
          "subtree": {}
        },
        "name": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "name",
            "excludes": {},
            "description": "The name of the series as shown in the legend, tooltip etc."
          },
          "subtree": {}
        },
        "stack": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "stack",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "This option allows grouping series in a stacked chart. The stack\noption can be a string or a number or anything else, as long as the\ngrouped series' stack options match each other."
          },
          "subtree": {}
        },
        "type": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "type",
            "excludes": {},
            "description": "The type of series, for example `line` or `column`. By default, the\nseries type is inherited from [chart.type](#chart.type), so unless the\nchart is a combination of series types, there is no need to set it on the\nseries level."
          },
          "subtree": {}
        },
        "xAxis": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "xAxis",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "When using dual or multiple x axes, this number defines which xAxis\nthe particular series is connected to. It refers to either the [axis\nid](#xAxis.id) or the index of the axis in the xAxis array, with\n0 being the first."
          },
          "subtree": {}
        },
        "yAxis": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "yAxis",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "When using dual or multiple y axes, this number defines which yAxis\nthe particular series is connected to. It refers to either the [axis\nid](#yAxis.id) or the index of the axis in the yAxis array, with\n0 being the first."
          },
          "subtree": {}
        },
        "zIndex": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "zIndex",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Define the visual z index of the series."
          },
          "subtree": {}
        },
        "mapData": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "mapData",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "An array of objects containing a `path` definition and optionally\na code or property to join in the data as per the `joinBy` option."
          },
          "subtree": {}
        },
        "baseSeries": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "baseSeries",
            "excludes": {},
            "default": "undefined",
            "validFor": {
              "bellcurve": true,
              "histogram": true,
              "pareto": true
            },
            "description": "An integer identifying the index to use for the base series, or a string\nrepresenting the id of the series."
          },
          "subtree": {}
        },
        "states": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "states",
            "excludes": {},
            "validFor": {
              "bullet": true,
              "bar": true,
              "column": true,
              "columnrange": true
            }
          },
          "subtree": {
            "hover": {
              "meta": {
                "types": {},
                "name": "hover",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                }
              },
              "subtree": {}
            },
            "select": {
              "meta": {
                "types": {},
                "name": "select",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                }
              },
              "subtree": {}
            }
          }
        },
        "nodes": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "nodes",
            "excludes": {},
            "validFor": {
              "sankey": true
            },
            "products": {
              "highcharts": 1
            },
            "description": "A collection of options for the individual nodes. The nodes in a sankey \ndiagram are auto-generated instances of `Highcharts.Point`, but options can\nbe applied here and linked by the `id`."
          },
          "subtree": {
            "id": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "id",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The id of the auto-generated node, refering to the `from` or `to` setting of\nthe link."
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the auto generated node."
              },
              "subtree": {}
            },
            "colorIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "colorIndex",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The color index of the auto generated node, especially for use in styled\nmode."
              },
              "subtree": {}
            },
            "column": {
              "meta": {
                "types": {
                  "undefined": 1,
                  "number": 1
                },
                "name": "column",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highcharts": 1
                },
                "description": "An optional column index of where to place the node. The default behaviour is\nto place it next to the preceding node."
              },
              "subtree": {}
            },
            "name": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "name",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The name to display for the node in data labels and tooltips. Use this when\nthe name is different from the `id`. Where the id must be unique for each\nnode, this is not necessary for the name."
              },
              "subtree": {}
            },
            "offset": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "offset",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "The vertical offset of a node in terms of weight. Positive values shift the\nnode downwards, negative shift it upwards."
              },
              "subtree": {}
            }
          }
        },
        "marker": {
          "meta": {
            "types": {},
            "name": "marker",
            "excludes": {},
            "validFor": {
              "bubble": true,
              "mapbubble": true
            }
          },
          "subtree": {}
        }
      }
    },
    "plotOptions": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "plotOptions",
        "excludes": {},
        "description": "The plotOptions is a wrapper object for config objects for each series\ntype. The config objects for each series can also be overridden for\neach series item as given in the series array.\n\nConfiguration options for the series are given in three levels. Options\nfor all series in a chart are given in the [plotOptions.series](#plotOptions.\nseries) object. Then options for all series of a specific type are\ngiven in the plotOptions of that type, for example plotOptions.line.\nNext, options for one single series are given in [the series array](#series)."
      },
      "subtree": {
        "ad": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "ad",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Accumulation Distribution (AD). This series requires `linkedTo` option to\nbe set.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "volumeSeriesID": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "volumeSeriesID",
                    "excludes": {},
                    "default": "volume",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The id of volume series which is mandatory.\nFor example using OHLC data, volumeSeriesID='volume' means\nthe indicator will be calculated using OHLC and volume values."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "atr": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "atr",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Average true range indicator (ATR). This series requires `linkedTo`\noption to be set.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 14
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "bb": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "bb",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Bollinger bands (BB). This series requires the `linkedTo` option to be\nset and should be loaded after the `stock/indicators/indicators.js` file.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "name": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "name",
                "excludes": {},
                "default": "BB (20, 2)"
              },
              "subtree": {}
            },
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 20
                  },
                  "subtree": {}
                },
                "standardDeviation": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "standardDeviation",
                    "excludes": {},
                    "default": 2,
                    "products": {
                      "highstock": 1
                    },
                    "description": "Standard deviation for top and bottom bands."
                  },
                  "subtree": {}
                },
                "index": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "index",
                    "excludes": {},
                    "default": 3
                  },
                  "subtree": {}
                }
              }
            },
            "bottomLine": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "bottomLine",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Bottom line options."
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "Styles for a bottom line."
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1,
                        "products": {
                          "highstock": 1
                        },
                        "description": "Pixel width of the line."
                      },
                      "subtree": {}
                    },
                    "lineColor": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of the line. If not set, it's inherited from\n[plotOptions.bb.color](#plotOptions.bb.color)."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "topLine": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "topLine",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Top line options.",
                "extends": "{plotOptions.bb.bottomLine}"
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1
                      },
                      "subtree": {}
                    },
                    "lineColor": {
                      "meta": {
                        "types": {},
                        "name": "lineColor",
                        "excludes": {}
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<span style=\"color:{point.color}\">●</span><b> {series.name}</b><br/>Top: {point.top}<br/>Middle: {point.middle}<br/>Bottom: {point.bottom}<br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "approximation": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "approximation",
                    "excludes": {},
                    "default": "averages"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "cci": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "cci",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Commodity Channel Index (CCI). This series requires `linkedTo` option to\nbe set.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 14
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "cmf": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "cmf",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Chaikin Money Flow indicator (cmf).",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 14
                  },
                  "subtree": {}
                },
                "volumeSeriesID": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "volumeSeriesID",
                    "excludes": {},
                    "default": "volume",
                    "description": "The id of another series to use its data as volume data for the\nindiator calculation."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "ema": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "ema",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Exponential moving average indicator (EMA). This series requires the\n`linkedTo` option to be set.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "index": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "index",
                    "excludes": {},
                    "default": 0
                  },
                  "subtree": {}
                },
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 14
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "ikh": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "ikh",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Ichimoku Kinko Hyo (IKH). This series requires `linkedTo` option to be\nset.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 26
                  },
                  "subtree": {}
                },
                "periodTenkan": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "periodTenkan",
                    "excludes": {},
                    "default": 9,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The base period for Tenkan calculations."
                  },
                  "subtree": {}
                },
                "periodSenkouSpanB": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "periodSenkouSpanB",
                    "excludes": {},
                    "default": 52,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The base period for Senkou Span B calculations"
                  },
                  "subtree": {}
                }
              }
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            },
            "tenkanLine": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "tenkanLine",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The styles for Tenkan line"
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1,
                        "products": {
                          "highstock": 1
                        },
                        "description": "Pixel width of the line."
                      },
                      "subtree": {}
                    },
                    "lineColor": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of the line."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "kijunLine": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "kijunLine",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The styles for Kijun line"
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1,
                        "products": {
                          "highstock": 1
                        },
                        "description": "Pixel width of the line."
                      },
                      "subtree": {}
                    },
                    "lineColor": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of the line."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "chikouLine": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "chikouLine",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The styles for Chikou line"
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1,
                        "products": {
                          "highstock": 1
                        },
                        "description": "Pixel width of the line."
                      },
                      "subtree": {}
                    },
                    "lineColor": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of the line."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "senkouSpanA": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "senkouSpanA",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The styles for Senkou Span A line"
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1,
                        "products": {
                          "highstock": 1
                        },
                        "description": "Pixel width of the line."
                      },
                      "subtree": {}
                    },
                    "lineColor": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of the line."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "senkouSpanB": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "senkouSpanB",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The styles for Senkou Span B line"
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1,
                        "products": {
                          "highstock": 1
                        },
                        "description": "Pixel width of the line."
                      },
                      "subtree": {}
                    },
                    "lineColor": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of the line."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "senkouSpan": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "senkouSpan",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The styles for fill between Senkou Span A and B"
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "fill": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "fill",
                        "excludes": {},
                        "default": "rgba(255, 0, 0, 0.5)",
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of the area between Senkou Span A and B."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "approximation": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "approximation",
                    "excludes": {},
                    "default": "ichimoku-averages"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "sma": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "sma",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Simple moving average indicator (SMA). This series requires `linkedTo`\noption to be set.",
            "extends": "{plotOptions.line}"
          },
          "subtree": {
            "name": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "name",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The name of the series as shown in the legend, tooltip etc. If not\nset, it will be based on a technical indicator type and default \nparams."
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "valueDecimals": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "valueDecimals",
                    "excludes": {},
                    "default": 4,
                    "products": {
                      "highstock": 1
                    },
                    "description": "Number of decimals in indicator series."
                  },
                  "subtree": {}
                }
              }
            },
            "linkedTo": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "linkedTo",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The main series ID that indicator will be based on. Required for this\nindicator."
              },
              "subtree": {}
            },
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "index": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "index",
                    "excludes": {},
                    "default": 0,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The point index which indicator calculations will base. For\nexample using OHLC data, index=2 means the indicator will be\ncalculated using Low values."
                  },
                  "subtree": {}
                },
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 14,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The base period for indicator calculations."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "macd": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "macd",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Moving Average Convergence Divergence (MACD). This series requires\n`linkedTo` option to be set.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "shortPeriod": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "shortPeriod",
                    "excludes": {},
                    "default": 12,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The short period for indicator calculations."
                  },
                  "subtree": {}
                },
                "longPeriod": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "longPeriod",
                    "excludes": {},
                    "default": 26,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The long period for indicator calculations."
                  },
                  "subtree": {}
                },
                "signalPeriod": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "signalPeriod",
                    "excludes": {},
                    "default": 9,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The base period for signal calculations."
                  },
                  "subtree": {}
                },
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 26
                  },
                  "subtree": {}
                }
              }
            },
            "signalLine": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "signalLine",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The styles for signal line"
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1,
                        "products": {
                          "highstock": 1
                        },
                        "description": "Pixel width of the line."
                      },
                      "subtree": {}
                    },
                    "lineColor": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of the line."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "macdLine": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "macdLine",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The styles for macd line"
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1,
                        "products": {
                          "highstock": 1
                        },
                        "description": "Pixel width of the line."
                      },
                      "subtree": {}
                    },
                    "lineColor": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of the line."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "threshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "groupPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "groupPadding",
                "excludes": {},
                "default": 0.1
              },
              "subtree": {}
            },
            "pointPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointPadding",
                "excludes": {},
                "default": 0.1
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "halo": {
                      "meta": {
                        "types": {
                          "object": 1
                        },
                        "name": "halo",
                        "excludes": {}
                      },
                      "subtree": {
                        "size": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "size",
                            "excludes": {},
                            "default": 0
                          },
                          "subtree": {}
                        }
                      }
                    }
                  }
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "approximation": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "approximation",
                    "excludes": {},
                    "default": "averages"
                  },
                  "subtree": {}
                }
              }
            },
            "minPointLength": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "minPointLength",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            }
          }
        },
        "mfi": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "mfi",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Money Flow Index. This series requires `linkedTo` option to be set and\nshould be loaded after the `stock/indicators/indicators.js` file.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 14
                  },
                  "subtree": {}
                },
                "volumeSeriesID": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "volumeSeriesID",
                    "excludes": {},
                    "default": "volume",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The id of volume series which is mandatory.\nFor example using OHLC data, volumeSeriesID='volume' means \nthe indicator will be calculated using OHLC and volume values."
                  },
                  "subtree": {}
                },
                "decimals": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "decimals",
                    "excludes": {},
                    "default": 4,
                    "products": {
                      "highstock": 1
                    },
                    "description": "Number of maximum decimals that are used in MFI calculations."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "momentum": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "momentum",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Momentum. This series requires `linkedTo` option to be set.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 14
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "pivotpoints": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "pivotpoints",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Pivot points indicator. This series requires the `linkedTo` option to be\rset and should be loaded after `stock/indicators/indicators.js` file.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 28
                  },
                  "subtree": {}
                },
                "algorithm": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "algorithm",
                    "excludes": {},
                    "default": "standard",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Algorithm used to calculate ressistance and support lines based\ron pivot points. Implemented algorithms: `'standard'`,\r`'fibonacci'` and `'camarilla'`"
                  },
                  "subtree": {}
                }
              }
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "enableMouseTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enableMouseTracking",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "format": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "format",
                    "excludes": {},
                    "default": "{point.pivotLine}"
                  },
                  "subtree": {}
                }
              }
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "approximation": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "approximation",
                    "excludes": {},
                    "default": "averages"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "priceenvelopes": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "priceenvelopes",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Price envelopes indicator based on [SMA](#plotOptions.sma) calculations.\rThis series requires the `linkedTo` option to be set and should be loaded\rafter the `stock/indicators/indicators.js` file.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<span style=\"color:{point.color}\">●</span><b> {series.name}</b><br/>Top: {point.top}<br/>Middle: {point.middle}<br/>Bottom: {point.bottom}<br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 20
                  },
                  "subtree": {}
                },
                "topBand": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "topBand",
                    "excludes": {},
                    "default": 0.1,
                    "products": {
                      "highstock": 1
                    },
                    "description": "Percentage above the moving average that should be displayed.\r0.1 means 110%. Relative to the calculated value."
                  },
                  "subtree": {}
                },
                "bottomBand": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "bottomBand",
                    "excludes": {},
                    "default": 0.1,
                    "products": {
                      "highstock": 1
                    },
                    "description": "Percentage below the moving average that should be displayed.\r0.1 means 90%. Relative to the calculated value."
                  },
                  "subtree": {}
                }
              }
            },
            "bottomLine": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "bottomLine",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Bottom line options."
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1,
                        "products": {
                          "highstock": 1
                        },
                        "description": "Pixel width of the line."
                      },
                      "subtree": {}
                    },
                    "lineColor": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of the line. If not set, it's inherited from\r[plotOptions.priceenvelopes.color](#plotOptions.\rpriceenvelopes.color)."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "topLine": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "topLine",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Top line options.",
                "extends": "{plotOptions.priceenvelopes.bottomLine}"
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "approximation": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "approximation",
                    "excludes": {},
                    "default": "averages"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "psar": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "psar",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Parabolic SAR. This series requires `linkedTo`\roption to be set and should be loaded\rafter `stock/indicators/indicators.js` file.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                }
              }
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidthPlus": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidthPlus",
                        "excludes": {},
                        "default": 0
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "initialAccelerationFactor": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "initialAccelerationFactor",
                    "excludes": {},
                    "default": 0.02,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The initial value for acceleration factor.\rAcceleration factor is starting with this value\rand increases by specified increment each time\rthe extreme point makes a new high.\rAF can reach a maximum of maxAccelerationFactor,\rno matter how long the uptrend extends."
                  },
                  "subtree": {}
                },
                "maxAccelerationFactor": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "maxAccelerationFactor",
                    "excludes": {},
                    "default": 0.2,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The Maximum value for acceleration factor.\rAF can reach a maximum of maxAccelerationFactor,\rno matter how long the uptrend extends."
                  },
                  "subtree": {}
                },
                "increment": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "increment",
                    "excludes": {},
                    "default": 0.02,
                    "products": {
                      "highstock": 1
                    },
                    "description": "Acceleration factor increases by increment each time\rthe extreme point makes a new high."
                  },
                  "subtree": {}
                },
                "index": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "index",
                    "excludes": {},
                    "default": 2,
                    "products": {
                      "highstock": 1
                    },
                    "description": "Index from which PSAR is starting calculation"
                  },
                  "subtree": {}
                },
                "decimals": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "decimals",
                    "excludes": {},
                    "default": 4,
                    "products": {
                      "highstock": 1
                    },
                    "description": "Number of maximum decimals that are used in PSAR calculations."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "roc": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "roc",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Rate of change indicator (ROC). The indicator value for each point\nis defined as:\n\n`(C - Cn) / Cn * 100`\n\nwhere: `C` is the close value of the point of the same x in the\nlinked series and `Cn` is the close value of the point `n` periods\nago. `n` is set through [period](#plotOptions.roc.params.period).\n\nThis series requires `linkedTo` option to be set.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "name": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "name",
                "excludes": {},
                "default": "Rate of Change (9)"
              },
              "subtree": {}
            },
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "index": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "index",
                    "excludes": {},
                    "default": 3
                  },
                  "subtree": {}
                },
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 9
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "rsi": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "rsi",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Relative strength index (RSI) technical indicator. This series\nrequires the `linkedTo` option to be set and should be loaded after\nthe `stock/indicators/indicators.js` file.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 14
                  },
                  "subtree": {}
                },
                "decimals": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "decimals",
                    "excludes": {},
                    "default": 4,
                    "products": {
                      "highstock": 1
                    },
                    "description": "Number of maximum decimals that are used in RSI calculations."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "stochastic": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "stochastic",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Stochastic oscillator. This series requires the `linkedTo` option to be\nset and should be loaded after the `stock/indicators/indicators.js` file.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "name": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "name",
                "excludes": {},
                "default": "Stochastic (14, 3)"
              },
              "subtree": {}
            },
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "periods": {
                  "meta": {
                    "types": {
                      "array": "object"
                    },
                    "name": "periods",
                    "excludes": {},
                    "default": "[14, 3]",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Periods for Stochastic oscillator: [%K, %D]."
                  },
                  "subtree": {}
                }
              }
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<span style=\"color:{point.color}\">●</span><b> {series.name}</b><br/>%K: {point.y}<br/>%D: {point.smoothed}<br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "smoothedLine": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "smoothedLine",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Smoothed line options."
              },
              "subtree": {
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "Styles for a smoothed line."
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1,
                        "products": {
                          "highstock": 1
                        },
                        "description": "Pixel width of the line."
                      },
                      "subtree": {}
                    },
                    "lineColor": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of the line. If not set, it's inherited from\n[plotOptions.stochastic.color](#plotOptions.stochastic.\ncolor)."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "approximation": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "approximation",
                    "excludes": {},
                    "default": "averages"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "vbp": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "vbp",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Volume By Price indicator.\n\nThis series requires `linkedTo` option to be set.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "ranges": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "ranges",
                    "excludes": {},
                    "default": 12,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The number of price zones."
                  },
                  "subtree": {}
                },
                "volumeSeriesID": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "volumeSeriesID",
                    "excludes": {},
                    "default": "volume",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The id of volume series which is mandatory. For example using\nOHLC data, volumeSeriesID='volume' means the indicator will be\ncalculated using OHLC and volume values."
                  },
                  "subtree": {}
                }
              }
            },
            "zoneLines": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "zoneLines",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The styles for lines which determine price zones."
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": "true",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Enable/disable zone lines."
                  },
                  "subtree": {}
                },
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "#0A9AC9",
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of zone lines."
                      },
                      "subtree": {}
                    },
                    "dashStyle": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "dashStyle",
                        "excludes": {},
                        "default": "LongDash",
                        "products": {
                          "highstock": 1
                        },
                        "description": "The dash style of zone lines."
                      },
                      "subtree": {}
                    },
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": 1,
                        "products": {
                          "highstock": 1
                        },
                        "description": "Pixel width of zone lines."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "volumeDivision": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "volumeDivision",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The styles for bars when volume is divided into positive/negative."
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true,
                    "products": {
                      "highstock": 1
                    },
                    "description": "Option to control if volume is divided."
                  },
                  "subtree": {}
                },
                "styles": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "styles",
                    "excludes": {}
                  },
                  "subtree": {
                    "positiveColor": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "positiveColor",
                        "excludes": {},
                        "default": "rgba(144, 237, 125, 0.8)",
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of positive volume bars."
                      },
                      "subtree": {}
                    },
                    "negativeColor": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "negativeColor",
                        "excludes": {},
                        "default": "rgba(244, 91, 91, 0.8)",
                        "products": {
                          "highstock": 1
                        },
                        "description": "Color of negative volume bars."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "animationLimit": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "animationLimit",
                "excludes": {},
                "default": 1000
              },
              "subtree": {}
            },
            "enableMouseTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enableMouseTracking",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "pointPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointPadding",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "default": -1
              },
              "subtree": {}
            },
            "crisp": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "crisp",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "allowOverlap": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "allowOverlap",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "top"
                  },
                  "subtree": {}
                },
                "format": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "format",
                    "excludes": {},
                    "default": "P: {point.volumePos:.2f} | N: {point.volumeNeg:.2f}"
                  },
                  "subtree": {}
                },
                "padding": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "padding",
                    "excludes": {},
                    "default": 0
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "style",
                    "excludes": {}
                  },
                  "subtree": {
                    "fontSize": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "fontSize",
                        "excludes": {},
                        "default": "7px"
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            }
          }
        },
        "vwap": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "vwap",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Volume Weighted Average Price indicator.\n\nThis series requires `linkedTo` option to be set.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 30
                  },
                  "subtree": {}
                },
                "volumeSeriesID": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "volumeSeriesID",
                    "excludes": {},
                    "default": "volume",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The id of volume series which is mandatory. For example using\nOHLC data, volumeSeriesID='volume' means the indicator will be\ncalculated using OHLC and volume values."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "wma": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "wma",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Weighted moving average indicator (WMA). This series requires `linkedTo`\noption to be set.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "index": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "index",
                    "excludes": {},
                    "default": 3
                  },
                  "subtree": {}
                },
                "period": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "period",
                    "excludes": {},
                    "default": 9
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "zigzag": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "zigzag",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Zig Zag indicator.\n\nThis series requires `linkedTo` option to be set.",
            "extends": "{plotOptions.sma}"
          },
          "subtree": {
            "params": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "params",
                "excludes": {}
              },
              "subtree": {
                "lowIndex": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "lowIndex",
                    "excludes": {},
                    "default": 2,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The point index which indicator calculations will base - low\nvalue.\n\nFor example using OHLC data, index=2 means the indicator will be\ncalculated using Low values."
                  },
                  "subtree": {}
                },
                "highIndex": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "highIndex",
                    "excludes": {},
                    "default": 1,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The point index which indicator calculations will base - high\nvalue.\n\nFor example using OHLC data, index=1 means the indicator will be\ncalculated using High values."
                  },
                  "subtree": {}
                },
                "deviation": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "deviation",
                    "excludes": {},
                    "default": 1,
                    "products": {
                      "highstock": 1
                    },
                    "description": "The threshold for the value change.\n\nFor example deviation=1 means the indicator will ignore all price\nmovements less than 1%."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "bellcurve": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "bellcurve",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A bell curve is an areaspline series which represents the probability density\nfunction of the normal distribution. It calculates mean and standard\ndeviation of the base series data and plots the curve according to the\ncalculated parameters.",
            "extends": "plotOptions.areaspline"
          },
          "subtree": {
            "intervals": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "intervals",
                "excludes": {},
                "default": 3,
                "description": "This option allows to define the length of the bell curve. A unit of the\nlength of the bell curve is standard deviation."
              },
              "subtree": {}
            },
            "pointsInInterval": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointsInInterval",
                "excludes": {},
                "default": 3,
                "description": "Defines how many points should be plotted within 1 interval. See \n`plotOptions.bellcurve.intervals`."
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "series": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "series",
            "excludes": {},
            "description": "General options for all series types."
          },
          "subtree": {
            "boostThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "boostThreshold",
                "excludes": {},
                "default": "5000",
                "description": "Set the point threshold for when a series should enter boost mode.\n\nSetting it to e.g. 2000 will cause the series to enter boost mode when there\nare 2000 or more points in the series.\n\nTo disable boosting on the series, set the `boostThreshold` to 0. Setting it\nto 1 will force boosting.\n\nRequires `modules/boost.js`."
              },
              "subtree": {}
            },
            "gapSize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "gapSize",
                "excludes": {},
                "default": "0",
                "products": {
                  "highstock": 1
                },
                "description": "Defines when to display a gap in the graph, together with the\n[gapUnit](plotOptions.series.gapUnit) option.\n\nIn case when `dataGrouping` is enabled, points can be grouped into a \nlarger time span. This can make the grouped points to have a greater \ndistance than the absolute value of `gapSize` property, which will result\nin disappearing graph completely. To prevent this situation the mentioned\ndistance between grouped points is used instead of previously defined \n`gapSize`.\n\nIn practice, this option is most often used to visualize gaps in\ntime series. In a stock chart, intraday data is available for daytime\nhours, while gaps will appear in nights and weekends."
              },
              "subtree": {}
            },
            "gapUnit": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "gapUnit",
                "excludes": {},
                "default": "relative",
                "products": {
                  "highstock": 1
                },
                "description": "Together with [gapSize](plotOptions.series.gapSize), this option defines\nwhere to draw gaps in the graph.\n\nWhen the `gapUnit` is `relative` (default), a gap size of 5 means\nthat if the distance between two points is greater than five times\nthat of the two closest points, the graph will be broken.\n\nWhen the `gapUnit` is `value`, the gap is based on absolute axis values,\nwhich on a datetime axis is milliseconds. This also applies to the\nnavigator series that inherits gap options from the base series."
              },
              "subtree": {}
            },
            "label": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "label",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Series labels are placed as close to the series as possible in a\nnatural way, seeking to avoid other series. The goal of this\nfeature is to make the chart more easily readable, like if a\nhuman designer placed the labels in the optimal position.\n\nThe series labels currently work with series types having a\n`graph` or an `area`.\n\nRequires the `series-label.js` module."
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true,
                    "description": "Enable the series label per series."
                  },
                  "subtree": {}
                },
                "connectorAllowed": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "connectorAllowed",
                    "excludes": {},
                    "default": true,
                    "description": "Allow labels to be placed distant to the graph if necessary,\nand draw a connector line to the graph."
                  },
                  "subtree": {}
                },
                "connectorNeighbourDistance": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "connectorNeighbourDistance",
                    "excludes": {},
                    "default": 24,
                    "description": "If the label is closer than this to a neighbour graph, draw a\nconnector."
                  },
                  "subtree": {}
                },
                "minFontSize": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "minFontSize",
                    "excludes": {},
                    "default": null,
                    "description": "For area-like series, allow the font size to vary so that\nsmall areas get a smaller font size. The default applies this\neffect to area-like series but not line-like series."
                  },
                  "subtree": {}
                },
                "maxFontSize": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "maxFontSize",
                    "excludes": {},
                    "default": null,
                    "description": "For area-like series, allow the font size to vary so that\nsmall areas get a smaller font size. The default applies this\neffect to area-like series but not line-like series."
                  },
                  "subtree": {}
                },
                "onArea": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "onArea",
                    "excludes": {},
                    "default": null,
                    "description": "Draw the label on the area of an area series. By default it\nis drawn on the area. Set it to `false` to draw it next to\nthe graph instead."
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "style",
                    "excludes": {},
                    "description": "Styles for the series label. The color defaults to the series\ncolor, or a contrast color if `onArea`."
                  },
                  "subtree": {
                    "fontWeight": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "fontWeight",
                        "excludes": {},
                        "default": "bold"
                      },
                      "subtree": {}
                    }
                  }
                },
                "boxesToAvoid": {
                  "meta": {
                    "types": {
                      "array": "Object"
                    },
                    "name": "boxesToAvoid",
                    "excludes": {},
                    "description": "An array of boxes to avoid when laying out the labels. Each \nitem has a `left`, `right`, `top` and `bottom` property."
                  },
                  "subtree": {}
                }
              }
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Data grouping is the concept of sampling the data values into larger\nblocks in order to ease readability and increase performance of the\nJavaScript charts. Highstock by default applies data grouping when\nthe points become closer than a certain pixel value, determined by\nthe `groupPixelWidth` option.\n\nIf data grouping is applied, the grouping information of grouped\npoints can be read from the [Point.dataGroup](#Point.dataGroup)."
              },
              "subtree": {
                "approximation": {
                  "meta": {
                    "types": {
                      "string": 1,
                      "function": 1
                    },
                    "name": "approximation",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "The method of approximation inside a group. When for example 30 days\nare grouped into one month, this determines what value should represent\nthe group. Possible values are \"average\", \"averages\", \"open\", \"high\",\n\"low\", \"close\" and \"sum\". For OHLC and candlestick series the approximation\nis \"ohlc\" by default, which finds the open, high, low and close values\nwithin all the grouped data. For ranges, the approximation is \"range\",\nwhich finds the low and high values. For multi-dimensional data,\nlike ranges and OHLC, \"averages\" will compute the average for each\ndimension.\n\nCustom aggregate methods can be added by assigning a callback function\nas the approximation. This function takes a numeric array as the\nargument and should return a single numeric value or `null`. Note\nthat the numeric array will never contain null values, only true\nnumbers. Instead, if null values are present in the raw data, the\nnumeric array will have an `.hasNulls` property set to `true`. For\nsingle-value data sets the data is available in the first argument\nof the callback function. For OHLC data sets, all the open values\nare in the first argument, all high values in the second etc.\n\nSince v4.2.7, grouping meta data is available in the approximation\ncallback from `this.dataGroupInfo`. It can be used to extract information\nfrom the raw data.\n\nDefaults to `average` for line-type series, `sum` for columns, `range`\nfor range series and `ohlc` for OHLC and candlestick."
                  },
                  "subtree": {}
                },
                "dateTimeLabelFormats": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "dateTimeLabelFormats",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "Datetime formats for the header of the tooltip in a stock chart.\nThe format can vary within a chart depending on the currently selected\ntime range and the current data grouping.\n\nThe default formats are:\n\n<pre>{\n    millisecond: [\n        '%A, %b %e, %H:%M:%S.%L', '%A, %b %e, %H:%M:%S.%L', '-%H:%M:%S.%L'\n    ],\n    second: ['%A, %b %e, %H:%M:%S', '%A, %b %e, %H:%M:%S', '-%H:%M:%S'],\n    minute: ['%A, %b %e, %H:%M', '%A, %b %e, %H:%M', '-%H:%M'],\n    hour: ['%A, %b %e, %H:%M', '%A, %b %e, %H:%M', '-%H:%M'],\n    day: ['%A, %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],\n    week: ['Week from %A, %b %e, %Y', '%A, %b %e', '-%A, %b %e, %Y'],\n    month: ['%B %Y', '%B', '-%B %Y'],\n    year: ['%Y', '%Y', '-%Y']\n}</pre>\n\nFor each of these array definitions, the first item is the format\nused when the active time span is one unit. For instance, if the\ncurrent data applies to one week, the first item of the week array\nis used. The second and third items are used when the active time\nspan is more than two units. For instance, if the current data applies\nto two weeks, the second and third item of the week array are used,\n and applied to the start and end date of the time span."
                  },
                  "subtree": {}
                },
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": "true",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Enable or disable data grouping."
                  },
                  "subtree": {}
                },
                "forced": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "forced",
                    "excludes": {},
                    "default": "false",
                    "products": {
                      "highstock": 1
                    },
                    "description": "When data grouping is forced, it runs no matter how small the intervals\nare. This can be handy for example when the sum should be calculated\nfor values appearing at random times within each hour."
                  },
                  "subtree": {}
                },
                "groupPixelWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "groupPixelWidth",
                    "excludes": {},
                    "default": "2",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The approximate pixel width of each group. If for example a series\nwith 30 points is displayed over a 600 pixel wide plot area, no grouping\nis performed. If however the series contains so many points that\nthe spacing is less than the groupPixelWidth, Highcharts will try\nto group it into appropriate groups so that each is more or less\ntwo pixels wide. If multiple series with different group pixel widths\nare drawn on the same x axis, all series will take the greatest width.\nFor example, line series have 2px default group width, while column\nseries have 10px. If combined, both the line and the column will\nhave 10px by default."
                  },
                  "subtree": {}
                },
                "smoothed": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "smoothed",
                    "excludes": {},
                    "default": "false",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Normally, a group is indexed by the start of that group, so for example\nwhen 30 daily values are grouped into one month, that month's x value\nwill be the 1st of the month. This apparently shifts the data to\nthe left. When the smoothed option is true, this is compensated for.\nThe data is shifted to the middle of the group, and min and max\nvalues are preserved. Internally, this is used in the Navigator series."
                  },
                  "subtree": {}
                },
                "units": {
                  "meta": {
                    "types": {
                      "array": "object"
                    },
                    "name": "units",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "An array determining what time intervals the data is allowed to be\ngrouped to. Each array item is an array where the first value is\nthe time unit and the second value another array of allowed multiples.\nDefaults to:\n\n<pre>units: [[\n    'millisecond', // unit name\n    [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples\n], [\n    'second',\n    [1, 2, 5, 10, 15, 30]\n], [\n    'minute',\n    [1, 2, 5, 10, 15, 30]\n], [\n    'hour',\n    [1, 2, 3, 4, 6, 8, 12]\n], [\n    'day',\n    [1]\n], [\n    'week',\n    [1]\n], [\n    'month',\n    [1, 3, 6]\n], [\n    'year',\n    null\n]]</pre>"
                  },
                  "subtree": {}
                }
              }
            },
            "navigatorOptions": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "navigatorOptions",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highstock": 1
                },
                "description": "Options for the corresponding navigator series if `showInNavigator`\nis `true` for this series. Available options are the same as any\nseries, documented at [plotOptions](#plotOptions.series) and\n[series](#series).\n\n\nThese options are merged with options in [navigator.series](#navigator.\nseries), and will take precedence if the same option is defined both\nplaces."
              },
              "subtree": {}
            },
            "showInNavigator": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInNavigator",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highstock": 1
                },
                "description": "Whether or not to show the series in the navigator. Takes precedence\nover [navigator.baseSeries](#navigator.baseSeries) if defined."
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "2",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Pixel width of the graph line."
              },
              "subtree": {}
            },
            "allowPointSelect": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "allowPointSelect",
                "excludes": {},
                "default": "false",
                "description": "Allow this series' points to be selected by clicking on the graphic \n(columns, point markers, pie slices, map areas etc)."
              },
              "subtree": {}
            },
            "showCheckbox": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showCheckbox",
                "excludes": {},
                "default": "false",
                "description": "If true, a checkbox is displayed next to the legend item to allow\nselecting the series. The state of the checkbox is determined by\nthe `selected` option."
              },
              "subtree": {}
            },
            "animation": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "animation",
                "excludes": {},
                "description": "Enable or disable the initial animation when a series is displayed.\nThe animation can also be set as a configuration object. Please\nnote that this option only applies to the initial animation of the\nseries itself. For other animations, see [chart.animation](#chart.\nanimation) and the animation parameter under the API methods. The\nfollowing properties are supported:\n\n<dl>\n\n<dt>duration</dt>\n\n<dd>The duration of the animation in milliseconds.</dd>\n\n<dt>easing</dt>\n\n<dd>A string reference to an easing function set on the `Math` object.\nSee the _Custom easing function_ demo below.</dd>\n\n</dl>\n\nDue to poor performance, animation is disabled in old IE browsers\nfor several chart types."
              },
              "subtree": {
                "duration": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "duration",
                    "excludes": {},
                    "default": 1000
                  },
                  "subtree": {}
                }
              }
            },
            "events": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "events",
                "excludes": {}
              },
              "subtree": {
                "afterAnimate": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "afterAnimate",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Fires after the series has finished its initial animation, or in\ncase animation is disabled, immediately as the series is displayed."
                  },
                  "subtree": {}
                },
                "checkboxClick": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "checkboxClick",
                    "excludes": {},
                    "description": "Fires when the checkbox next to the series' name in the legend is\nclicked. One parameter, `event`, is passed to the function. The state\nof the checkbox is found by `event.checked`. The checked item is\nfound by `event.item`. Return `false` to prevent the default action\nwhich is to toggle the select state of the series."
                  },
                  "subtree": {}
                },
                "click": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "click",
                    "excludes": {},
                    "description": "Fires when the series is clicked. One parameter, `event`, is passed\nto the function, containing common event information. Additionally,\n`event.point` holds a pointer to the nearest point on the graph."
                  },
                  "subtree": {}
                },
                "hide": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "hide",
                    "excludes": {},
                    "description": "Fires when the series is hidden after chart generation time, either\nby clicking the legend item or by calling `.hide()`."
                  },
                  "subtree": {}
                },
                "legendItemClick": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "legendItemClick",
                    "excludes": {},
                    "description": "Fires when the legend item belonging to the series is clicked. One\nparameter, `event`, is passed to the function. The default action\nis to toggle the visibility of the series. This can be prevented\nby returning `false` or calling `event.preventDefault()`."
                  },
                  "subtree": {}
                },
                "mouseOut": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "mouseOut",
                    "excludes": {},
                    "description": "Fires when the mouse leaves the graph. One parameter, `event`, is\npassed to the function, containing common event information. If the\n[stickyTracking](#plotOptions.series) option is true, `mouseOut`\ndoesn't happen before the mouse enters another graph or leaves the\nplot area."
                  },
                  "subtree": {}
                },
                "mouseOver": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "mouseOver",
                    "excludes": {},
                    "description": "Fires when the mouse enters the graph. One parameter, `event`, is\npassed to the function, containing common event information."
                  },
                  "subtree": {}
                },
                "show": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "show",
                    "excludes": {},
                    "description": "Fires when the series is shown after chart generation time, either\nby clicking the legend item or by calling `.show()`."
                  },
                  "subtree": {}
                }
              }
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {},
                "description": "Options for the point markers of line-like series. Properties like\n`fillColor`, `lineColor` and `lineWidth` define the visual appearance\nof the markers. Other series types, like column series, don't have\nmarkers, but have visual options on the series level instead.\n\nIn styled mode, the markers can be styled with the `.highcharts-point`,\n`.highcharts-point-hover` and `.highcharts-point-select`\nclass names."
              },
              "subtree": {
                "lineWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "lineWidth",
                    "excludes": {},
                    "default": "0",
                    "description": "The width of the point marker's outline."
                  },
                  "subtree": {}
                },
                "lineColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "lineColor",
                    "excludes": {},
                    "default": "#ffffff",
                    "description": "The color of the point marker's outline. When `null`, the series'\nor point's color is used."
                  },
                  "subtree": {}
                },
                "enabledThreshold": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "enabledThreshold",
                    "excludes": {},
                    "default": 2,
                    "description": "The threshold for how dense the point markers should be before they\nare hidden, given that `enabled` is not defined. The number indicates\nthe horizontal distance between the two closest points in the series,\nas multiples of the `marker.radius`. In other words, the default\nvalue of 2 means points are hidden if overlapping horizontally."
                  },
                  "subtree": {}
                },
                "radius": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "radius",
                    "excludes": {},
                    "default": 4,
                    "description": "The radius of the point marker."
                  },
                  "subtree": {}
                },
                "states": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "states",
                    "excludes": {},
                    "description": "States for a single point marker."
                  },
                  "subtree": {
                    "normal": {
                      "meta": {
                        "types": {
                          "object": 1
                        },
                        "name": "normal",
                        "excludes": {},
                        "description": "The normal state of a single point marker. Currently only used\nfor setting animation when returning to normal state from hover."
                      },
                      "subtree": {
                        "animation": {
                          "meta": {
                            "types": {
                              "boolean": 1,
                              "object": 1
                            },
                            "name": "animation",
                            "excludes": {},
                            "default": true,
                            "description": "Animation when returning to normal state after hovering."
                          },
                          "subtree": {}
                        }
                      }
                    },
                    "hover": {
                      "meta": {
                        "types": {
                          "object": 1
                        },
                        "name": "hover",
                        "excludes": {},
                        "description": "The hover state for a single point marker."
                      },
                      "subtree": {
                        "animation": {
                          "meta": {
                            "types": {
                              "boolean": 1,
                              "object": 1
                            },
                            "name": "animation",
                            "excludes": {},
                            "description": "Animation when hovering over the marker."
                          },
                          "subtree": {
                            "duration": {
                              "meta": {
                                "types": {
                                  "number": 1
                                },
                                "name": "duration",
                                "excludes": {},
                                "default": 50
                              },
                              "subtree": {}
                            }
                          }
                        },
                        "enabled": {
                          "meta": {
                            "types": {
                              "boolean": 1
                            },
                            "name": "enabled",
                            "excludes": {},
                            "default": true,
                            "description": "Enable or disable the point marker."
                          },
                          "subtree": {}
                        },
                        "radiusPlus": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "radiusPlus",
                            "excludes": {},
                            "default": 2,
                            "description": "The number of pixels to increase the radius of the hovered\npoint."
                          },
                          "subtree": {}
                        },
                        "lineWidthPlus": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "lineWidthPlus",
                            "excludes": {},
                            "default": 1,
                            "description": "The additional line width for a hovered point."
                          },
                          "subtree": {}
                        },
                        "fillColor": {
                          "meta": {
                            "types": {
                              "color": 1
                            },
                            "name": "fillColor",
                            "excludes": {},
                            "default": "null",
                            "description": "The fill color of the marker in hover state. When `null`, the\nseries' or point's fillColor for normal state is used."
                          },
                          "subtree": {}
                        },
                        "lineColor": {
                          "meta": {
                            "types": {
                              "color": 1
                            },
                            "name": "lineColor",
                            "excludes": {},
                            "default": "null",
                            "description": "The color of the point marker's outline. When `null`, the\nseries' or point's lineColor for normal state is used."
                          },
                          "subtree": {}
                        },
                        "lineWidth": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "lineWidth",
                            "excludes": {},
                            "default": "null",
                            "description": "The width of the point marker's outline. When `null`, the\nseries' or point's lineWidth for normal state is used."
                          },
                          "subtree": {}
                        },
                        "radius": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "radius",
                            "excludes": {},
                            "description": "The radius of the point marker. In hover state, it defaults\nto the normal state's radius + 2 as per the\n[radiusPlus](#plotOptions.series.marker.states.hover.radiusPlus)\noption."
                          },
                          "subtree": {}
                        }
                      }
                    },
                    "select": {
                      "meta": {
                        "types": {
                          "object": 1
                        },
                        "name": "select",
                        "excludes": {},
                        "description": "The appearance of the point marker when selected. In order to\nallow a point to be selected, set the `series.allowPointSelect`\noption to true."
                      },
                      "subtree": {
                        "fillColor": {
                          "meta": {
                            "types": {
                              "color": 1
                            },
                            "name": "fillColor",
                            "excludes": {},
                            "default": "#cccccc",
                            "description": "The fill color of the point marker."
                          },
                          "subtree": {}
                        },
                        "lineColor": {
                          "meta": {
                            "types": {
                              "color": 1
                            },
                            "name": "lineColor",
                            "excludes": {},
                            "default": "#000000",
                            "description": "The color of the point marker's outline. When `null`, the\nseries' or point's color is used."
                          },
                          "subtree": {}
                        },
                        "lineWidth": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "lineWidth",
                            "excludes": {},
                            "default": 2,
                            "description": "The width of the point marker's outline."
                          },
                          "subtree": {}
                        },
                        "radius": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "radius",
                            "excludes": {},
                            "description": "The radius of the point marker. In hover state, it defaults\nto the normal state's radius + 2."
                          },
                          "subtree": {}
                        },
                        "enabled": {
                          "meta": {
                            "types": {
                              "boolean": 1
                            },
                            "name": "enabled",
                            "excludes": {},
                            "default": "true",
                            "description": "Enable or disable visible feedback for selection."
                          },
                          "subtree": {}
                        }
                      }
                    }
                  }
                },
                "fillColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "fillColor",
                    "excludes": {},
                    "default": "null",
                    "description": "The fill color of the point marker. When `null`, the series' or\npoint's color is used."
                  },
                  "subtree": {}
                },
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "description": "Enable or disable the point marker. If `null`, the markers are hidden\nwhen the data is dense, and shown for more widespread data points."
                  },
                  "subtree": {}
                },
                "height": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "height",
                    "excludes": {},
                    "default": "null",
                    "description": "Image markers only. Set the image width explicitly. When using this\noption, a `width` must also be set."
                  },
                  "subtree": {}
                },
                "symbol": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "symbol",
                    "excludes": {},
                    "default": "null",
                    "description": "A predefined shape or symbol for the marker. When null, the symbol\nis pulled from options.symbols. Other possible values are \"circle\",\n\"square\", \"diamond\", \"triangle\" and \"triangle-down\".\n\nAdditionally, the URL to a graphic can be given on this form:\n\"url(graphic.png)\". Note that for the image to be applied to exported\ncharts, its URL needs to be accessible by the export server.\n\nCustom callbacks for symbol path generation can also be added to\n`Highcharts.SVGRenderer.prototype.symbols`. The callback is then\nused by its method name, as shown in the demo."
                  },
                  "subtree": {}
                },
                "width": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "width",
                    "excludes": {},
                    "default": "null",
                    "description": "Image markers only. Set the image width explicitly. When using this\noption, a `height` must also be set."
                  },
                  "subtree": {}
                }
              }
            },
            "point": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "point",
                "excludes": {},
                "description": "Properties for each single point."
              },
              "subtree": {
                "events": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "events",
                    "excludes": {},
                    "description": "Events for each single point."
                  },
                  "subtree": {
                    "click": {
                      "meta": {
                        "types": {
                          "function": 1
                        },
                        "name": "click",
                        "excludes": {},
                        "description": "Fires when a point is clicked. One parameter, `event`, is passed\nto the function, containing common event information.\n\nIf the `series.allowPointSelect` option is true, the default\naction for the point's click event is to toggle the point's\nselect state. Returning `false` cancels this action."
                      },
                      "subtree": {}
                    },
                    "mouseOut": {
                      "meta": {
                        "types": {
                          "function": 1
                        },
                        "name": "mouseOut",
                        "excludes": {},
                        "description": "Fires when the mouse leaves the area close to the point. One\nparameter, `event`, is passed to the function, containing common\nevent information."
                      },
                      "subtree": {}
                    },
                    "mouseOver": {
                      "meta": {
                        "types": {
                          "function": 1
                        },
                        "name": "mouseOver",
                        "excludes": {},
                        "description": "Fires when the mouse enters the area close to the point. One\nparameter, `event`, is passed to the function, containing common\nevent information."
                      },
                      "subtree": {}
                    },
                    "remove": {
                      "meta": {
                        "types": {
                          "function": 1
                        },
                        "name": "remove",
                        "excludes": {},
                        "description": "Fires when the point is removed using the `.remove()` method. One\nparameter, `event`, is passed to the function. Returning `false`\ncancels the operation."
                      },
                      "subtree": {}
                    },
                    "select": {
                      "meta": {
                        "types": {
                          "function": 1
                        },
                        "name": "select",
                        "excludes": {},
                        "description": "Fires when the point is selected either programmatically or\nfollowing a click on the point. One parameter, `event`, is passed\nto the function. Returning `false` cancels the operation."
                      },
                      "subtree": {}
                    },
                    "unselect": {
                      "meta": {
                        "types": {
                          "function": 1
                        },
                        "name": "unselect",
                        "excludes": {},
                        "description": "Fires when the point is unselected either programmatically or\nfollowing a click on the point. One parameter, `event`, is passed\nto the function.\n Returning `false` cancels the operation."
                      },
                      "subtree": {}
                    },
                    "update": {
                      "meta": {
                        "types": {
                          "function": 1
                        },
                        "name": "update",
                        "excludes": {},
                        "description": "Fires when the point is updated programmatically through the\n`.update()` method. One parameter, `event`, is passed to the\nfunction. The new point options can be accessed through\n`event.options`. Returning `false` cancels the operation."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {},
                "description": "Options for the series data labels, appearing next to each data\npoint.\n\nIn styled mode, the data labels can be styled wtih the\n`.highcharts-data-label-box` and `.highcharts-data-label` class names\n([see example](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/series-datalabels))."
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "center",
                    "description": "The alignment of the data label compared to the point. If `right`,\nthe right side of the label should be touching the point. For\npoints with an extent, like columns, the alignments also dictates\nhow to align it inside the box, as given with the\n[inside](#plotOptions.column.dataLabels.inside) option. Can be one of\n`left`, `center` or `right`."
                  },
                  "subtree": {}
                },
                "formatter": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "formatter",
                    "excludes": {},
                    "description": "Callback JavaScript function to format the data label. Note that if a\n`format` is defined, the format takes precedence and the formatter is\nignored. Available data are:\n\n<table>\n\n<tbody>\n\n<tr>\n\n<td>`this.percentage`</td>\n\n<td>Stacked series and pies only. The point's percentage of the\ntotal.</td>\n\n</tr>\n\n<tr>\n\n<td>`this.point`</td>\n\n<td>The point object. The point name, if defined, is available\nthrough `this.point.name`.</td>\n\n</tr>\n\n<tr>\n\n<td>`this.series`:</td>\n\n<td>The series object. The series name is available through\n`this.series.name`.</td>\n\n</tr>\n\n<tr>\n\n<td>`this.total`</td>\n\n<td>Stacked series only. The total value at this point's x value.\n</td>\n\n</tr>\n\n<tr>\n\n<td>`this.x`:</td>\n\n<td>The x value.</td>\n\n</tr>\n\n<tr>\n\n<td>`this.y`:</td>\n\n<td>The y value.</td>\n\n</tr>\n\n</tbody>\n\n</table>"
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "cssobject": 1
                    },
                    "name": "style",
                    "excludes": {},
                    "default": "{\"color\": \"contrast\", \"fontSize\": \"11px\", \"fontWeight\": \"bold\", \"textOutline\": \"1px contrast\" }",
                    "description": "Styles for the label. The default `color` setting is `\"contrast\"`,\nwhich is a pseudo color that Highcharts picks up and applies the\nmaximum contrast to the underlying point item, for example the\nbar in a bar chart.\n\nThe `textOutline` is a pseudo property that\napplies an outline of the given width with the given color, which\nby default is the maximum contrast to the text. So a bright text\ncolor will result in a black text outline for maximum readability\non a mixed background. In some cases, especially with grayscale\ntext, the text outline doesn't work well, in which cases it can\nbe disabled by setting it to `\"none\"`. When `useHTML` is true, the\n`textOutline` will not be picked up. In this, case, the same effect\ncan be acheived through the `text-shadow` CSS property."
                  },
                  "subtree": {
                    "fontSize": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "fontSize",
                        "excludes": {},
                        "default": "11px"
                      },
                      "subtree": {}
                    },
                    "fontWeight": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "fontWeight",
                        "excludes": {},
                        "default": "bold"
                      },
                      "subtree": {}
                    },
                    "color": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "contrast"
                      },
                      "subtree": {}
                    },
                    "textOutline": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "textOutline",
                        "excludes": {},
                        "default": "1px contrast"
                      },
                      "subtree": {}
                    }
                  }
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "bottom",
                    "description": "The vertical alignment of a data label. Can be one of `top`, `middle`\nor `bottom`. The default value depends on the data, for instance\nin a column chart, the label is above positive values and below\nnegative values."
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "default": "0",
                    "description": "The x position offset of the label relative to the point."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": "-6",
                    "description": "The y position offset of the label relative to the point."
                  },
                  "subtree": {}
                },
                "padding": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "padding",
                    "excludes": {},
                    "default": 5,
                    "description": "When either the `borderWidth` or the `backgroundColor` is set,\nthis is the padding within the box."
                  },
                  "subtree": {}
                },
                "allowOverlap": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "allowOverlap",
                    "excludes": {},
                    "default": "false",
                    "description": "Whether to allow data labels to overlap. To make the labels less\nsensitive for overlapping, the [dataLabels.padding](#plotOptions.\nseries.dataLabels.padding) can be set to 0."
                  },
                  "subtree": {}
                },
                "borderRadius": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderRadius",
                    "excludes": {},
                    "default": "0",
                    "description": "The border radius in pixels for the data label."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "default": "0",
                    "description": "The border width in pixels for the data label."
                  },
                  "subtree": {}
                },
                "className": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "className",
                    "excludes": {},
                    "description": "A class name for the data label. Particularly in styled mode, this\ncan be used to give each series' or point's data label unique\nstyling. In addition to this option, a default color class name is\nadded so that we can give the labels a\n[contrast text shadow](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/data-label-contrast/)."
                  },
                  "subtree": {}
                },
                "color": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "description": "The text color for the data labels. Defaults to `null`. For certain\nseries types, like column or map, the data labels can be drawn inside\nthe points. In this case the data label will be drawn with maximum\ncontrast by default. Additionally, it will be given a `text-outline`\nstyle with the opposite color, to further increase the contrast. This\ncan be overridden by setting the `text-outline` style to `none` in\nthe `dataLabels.style` option."
                  },
                  "subtree": {}
                },
                "crop": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "crop",
                    "excludes": {},
                    "default": "true",
                    "description": "Whether to hide data labels that are outside the plot area. By\ndefault, the data label is moved inside the plot area according to\nthe [overflow](#plotOptions.series.dataLabels.overflow) option."
                  },
                  "subtree": {}
                },
                "defer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "defer",
                    "excludes": {},
                    "default": "true",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Whether to defer displaying the data labels until the initial series\nanimation has finished."
                  },
                  "subtree": {}
                },
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": "false",
                    "description": "Enable or disable the data labels."
                  },
                  "subtree": {}
                },
                "format": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "format",
                    "excludes": {},
                    "description": "A [format string](http://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting)\nfor the data label. Available variables are the same as for\n`formatter`."
                  },
                  "subtree": {}
                },
                "shape": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "shape",
                    "excludes": {},
                    "default": "square",
                    "description": "The name of a symbol to use for the border around the label. Symbols\nare predefined functions on the Renderer object."
                  },
                  "subtree": {}
                },
                "zIndex": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "zIndex",
                    "excludes": {},
                    "default": "6",
                    "description": "The Z index of the data labels. The default Z index puts it above\nthe series. Use a Z index of 2 to display it behind the series."
                  },
                  "subtree": {}
                },
                "filter": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "filter",
                    "excludes": {},
                    "description": "A declarative filter for which data labels to display. The\ndeclarative filter is designed for use when callback functions are\nnot available, like when the chart options require a pure JSON\nstructure or for use with graphical editors. For programmatic\ncontrol, use the `formatter` instead, and return `false` to disable\na single data label."
                  },
                  "subtree": {
                    "property": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "property",
                        "excludes": {},
                        "description": "The point property to filter by. Point options are passed directly to\nproperties, additionally there are `y` value, `percentage` and others\nlisted under [Point](https://api.highcharts.com/class-reference/Highcharts.Point)\nmembers."
                      },
                      "subtree": {}
                    },
                    "operator": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "operator",
                        "excludes": {},
                        "description": "The operator to compare by. Can be one of `>`, `<`, `>=`, `<=`, `==`,\nand `===`."
                      },
                      "subtree": {}
                    },
                    "value": {
                      "meta": {
                        "types": {
                          "mixed": 1
                        },
                        "name": "value",
                        "excludes": {},
                        "description": "The value to compare against."
                      },
                      "subtree": {}
                    }
                  }
                },
                "backgroundColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "backgroundColor",
                    "excludes": {},
                    "description": "The background color or gradient for the data label."
                  },
                  "subtree": {}
                },
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "default": "undefined",
                    "description": "The border color for the data label. Defaults to `undefined`."
                  },
                  "subtree": {}
                },
                "shadow": {
                  "meta": {
                    "types": {
                      "boolean": 1,
                      "object": 1
                    },
                    "name": "shadow",
                    "excludes": {},
                    "default": "false",
                    "description": "The shadow of the box. Works best with `borderWidth` or\n`backgroundColor`. Since 2.3 the shadow can be an object\nconfiguration containing `color`, `offsetX`, `offsetY`, `opacity` and\n`width`."
                  },
                  "subtree": {}
                },
                "inside": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "inside",
                    "excludes": {},
                    "description": "For points with an extent, like columns or map areas, whether to\nalign the data label inside the box or to the actual value point.\nDefaults to `false` in most cases, `true` in stacked columns."
                  },
                  "subtree": {}
                },
                "overflow": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "overflow",
                    "excludes": {},
                    "default": "justify",
                    "description": "How to handle data labels that flow outside the plot area. The\ndefault is `justify`, which aligns them inside the plot area. For\ncolumns and bars, this means it will be moved inside the bar. To\ndisplay data labels outside the plot area, set `crop` to `false` and\n`overflow` to `\"none\"`."
                  },
                  "subtree": {}
                },
                "rotation": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "rotation",
                    "excludes": {},
                    "default": "0",
                    "description": "Text rotation in degrees. Note that due to a more complex structure,\nbackgrounds, borders and padding will be lost on a rotated data\nlabel."
                  },
                  "subtree": {}
                },
                "useHTML": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "useHTML",
                    "excludes": {},
                    "default": "false",
                    "description": "Whether to\n[use HTML](http://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)\nto render the labels."
                  },
                  "subtree": {}
                }
              }
            },
            "cropThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "cropThreshold",
                "excludes": {},
                "default": "300",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When the series contains less points than the crop threshold, all\npoints are drawn, even if the points fall outside the visible plot\narea at the current zoom. The advantage of drawing all points (including\nmarkers and columns), is that animation is performed on updates.\nOn the other hand, when the series contains more points than the\ncrop threshold, the series data is cropped to only contain points\nthat fall within the plot area. The advantage of cropping away invisible\npoints is to increase performance on large series."
              },
              "subtree": {}
            },
            "pointRange": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointRange",
                "excludes": {},
                "default": "0",
                "products": {
                  "highstock": 1
                },
                "description": "The width of each point on the x axis. For example in a column chart\nwith one value each day, the pointRange would be 1 day (= 24 * 3600\n* 1000 milliseconds). This is normally computed automatically, but\nthis option can be used to override the automatic value."
              },
              "subtree": {}
            },
            "softThreshold": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "softThreshold",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When this is true, the series will not cause the Y axis to cross\nthe zero plane (or [threshold](#plotOptions.series.threshold) option)\nunless the data actually crosses the plane.\n\nFor example, if `softThreshold` is `false`, a series of 0, 1, 2,\n3 will make the Y axis show negative values according to the `minPadding`\noption. If `softThreshold` is `true`, the Y axis starts at 0."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "plotoptions.series.states": 1
                },
                "name": "states",
                "excludes": {},
                "description": "A wrapper object for all the series options in specific states."
              },
              "subtree": {
                "normal": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "normal",
                    "excludes": {},
                    "products": {
                      "highmaps": 1
                    },
                    "description": "Overrides for the normal state."
                  },
                  "subtree": {
                    "animation": {
                      "meta": {
                        "types": {
                          "object": 1,
                          "boolean": 1
                        },
                        "name": "animation",
                        "excludes": {},
                        "default": "true",
                        "products": {
                          "highmaps": 1
                        },
                        "description": "Animation options for the fill color when returning from hover state\nto normal state. The animation adds some latency in order to reduce\nthe effect of flickering when hovering in and out of for example\nan uneven coastline."
                      },
                      "subtree": {}
                    }
                  }
                },
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {},
                    "description": "Options for the hovered series. These settings override the normal\nstate options when a series is moused over or touched."
                  },
                  "subtree": {
                    "animation": {
                      "meta": {
                        "types": {
                          "boolean": 1,
                          "object": 1
                        },
                        "name": "animation",
                        "excludes": {},
                        "default": "{ \"duration\": 50 }",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "Animation setting for hovering the graph in line-type series."
                      },
                      "subtree": {
                        "duration": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "duration",
                            "excludes": {},
                            "default": 50,
                            "description": "The duration of the hover animation in milliseconds. By\ndefault the hover state animates quickly in, and slowly back\nto normal."
                          },
                          "subtree": {}
                        }
                      }
                    },
                    "lineWidthPlus": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidthPlus",
                        "excludes": {},
                        "default": "1",
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "The additional line width for the graph of a hovered series."
                      },
                      "subtree": {}
                    },
                    "marker": {
                      "meta": {
                        "types": {},
                        "name": "marker",
                        "excludes": {},
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "In Highcharts 1.0, the appearance of all markers belonging to the\nhovered series. For settings on the hover state of the individual\npoint, see\n[marker.states.hover](#plotOptions.series.marker.states.hover).",
                        "extends": "plotOptions.series.marker"
                      },
                      "subtree": {}
                    },
                    "halo": {
                      "meta": {
                        "types": {
                          "object": 1
                        },
                        "name": "halo",
                        "excludes": {},
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "Options for the halo appearing around the hovered point in line-\ntype series as well as outside the hovered slice in pie charts.\nBy default the halo is filled by the current point or series\ncolor with an opacity of 0.25\\. The halo can be disabled by\nsetting the `halo` option to `false`.\n\nIn styled mode, the halo is styled with the `.highcharts-halo`\nclass, with colors inherited from `.highcharts-color-{n}`."
                      },
                      "subtree": {
                        "size": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "size",
                            "excludes": {},
                            "default": "10",
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "The pixel size of the halo. For point markers this is the\nradius of the halo. For pie slices it is the width of the\nhalo outside the slice. For bubbles it defaults to 5 and is\nthe width of the halo outside the bubble."
                          },
                          "subtree": {}
                        },
                        "opacity": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "opacity",
                            "excludes": {},
                            "default": "0.25",
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "Opacity for the halo unless a specific fill is overridden\nusing the `attributes` setting. Note that Highcharts is only\nable to apply opacity to colors of hex or rgb(a) formats."
                          },
                          "subtree": {}
                        },
                        "attributes": {
                          "meta": {
                            "types": {
                              "object": 1
                            },
                            "name": "attributes",
                            "excludes": {},
                            "products": {
                              "highcharts": 1,
                              "highstock": 1
                            },
                            "description": "A collection of SVG attributes to override the appearance of\nthe halo, for example `fill`, `stroke` and `stroke-width`."
                          },
                          "subtree": {}
                        }
                      }
                    },
                    "enabled": {
                      "meta": {
                        "types": {
                          "boolean": 1
                        },
                        "name": "enabled",
                        "excludes": {},
                        "default": "true",
                        "description": "Enable separate styles for the hovered series to visualize that\nthe user hovers either the series itself or the legend. ."
                      },
                      "subtree": {}
                    },
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": "undefined",
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "Pixel width of the graph line. By default this property is\nundefined, and the `lineWidthPlus` property dictates how much\nto increase the linewidth from normal state."
                      },
                      "subtree": {}
                    },
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "products": {
                          "highmaps": 1
                        },
                        "description": "The color of the shape in this state"
                      },
                      "subtree": {}
                    },
                    "borderColor": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "borderColor",
                        "excludes": {},
                        "products": {
                          "highmaps": 1
                        },
                        "description": "The border color of the point in this state."
                      },
                      "subtree": {}
                    },
                    "borderWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "borderWidth",
                        "excludes": {},
                        "products": {
                          "highmaps": 1
                        },
                        "description": "The border width of the point in this state"
                      },
                      "subtree": {}
                    },
                    "brightness": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "brightness",
                        "excludes": {},
                        "default": "0.2",
                        "products": {
                          "highmaps": 1
                        },
                        "description": "The relative brightness of the point when hovered, relative to the\nnormal point color."
                      },
                      "subtree": {}
                    }
                  }
                },
                "select": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "select",
                    "excludes": {},
                    "products": {
                      "highmaps": 1
                    },
                    "description": "Specific options for point in selected states, after being selected\nby [allowPointSelect](#plotOptions.series.allowPointSelect) or\nprogrammatically.",
                    "extends": "plotOptions.series.states.hover"
                  },
                  "subtree": {
                    "marker": {
                      "meta": {
                        "types": {},
                        "name": "marker",
                        "excludes": {}
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "stickyTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "stickyTracking",
                "excludes": {},
                "default": true,
                "description": "Sticky tracking of mouse events. When true, the `mouseOut` event\non a series isn't triggered until the mouse moves over another series,\nor out of the plot area. When false, the `mouseOut` event on a\nseries is triggered when the mouse leaves the area around the series'\ngraph or markers. This also implies the tooltip when not shared. When\n`stickyTracking` is false and `tooltip.shared` is false, the tooltip will\nbe hidden when moving the mouse between series. Defaults to true for line\nand area type series, but to false for columns, pies etc."
              },
              "subtree": {}
            },
            "turboThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "turboThreshold",
                "excludes": {},
                "default": "1000",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When a series contains a data array that is longer than this, only\none dimensional arrays of numbers, or two dimensional arrays with\nx and y values are allowed. Also, only the first point is tested,\nand the rest are assumed to be the same format. This saves expensive\ndata checking and indexing in long series. Set it to `0` disable."
              },
              "subtree": {}
            },
            "findNearestPointBy": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "findNearestPointBy",
                "excludes": {},
                "default": "x",
                "description": "Determines whether the series should look for the nearest point\nin both dimensions or just the x-dimension when hovering the series.\nDefaults to `'xy'` for scatter series and `'x'` for most other\nseries. If the data has duplicate x-values, it is recommended to\nset this to `'xy'` to allow hovering over all points.\n\nApplies only to series types using nearest neighbor search (not\ndirect hover) for tooltip."
              },
              "subtree": {}
            },
            "animationLimit": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "animationLimit",
                "excludes": {},
                "description": "For some series, there is a limit that shuts down initial animation\nby default when the total number of points in the chart is too high.\nFor example, for a column chart and its derivatives, animation doesn't\nrun if there is more than 250 points totally. To disable this cap, set\n`animationLimit` to `Infinity`."
              },
              "subtree": {}
            },
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "description": "A class name to apply to the series' graphical elements."
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "description": "The main color of the series. In line type series it applies to the\nline and the point markers unless otherwise specified. In bar type\nseries it applies to the bars unless a color is specified per point.\nThe default value is pulled from the `options.colors` array.\n\nIn styled mode, the color can be defined by the\n[colorIndex](#plotOptions.series.colorIndex) option. Also, the series\ncolor can be set with the `.highcharts-series`, `.highcharts-color-{n}`,\n`.highcharts-{type}-series` or `.highcharts-series-{n}` class, or\nindividual classes given by the `className` option."
              },
              "subtree": {}
            },
            "colorIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "colorIndex",
                "excludes": {},
                "description": "Styled mode only. A specific color index to use for the series, so its\ngraphic representations are given the class name `highcharts-color-{n}`."
              },
              "subtree": {}
            },
            "connectNulls": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "connectNulls",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to connect a graph line across null points, or render a gap\nbetween the two points on either side of the null."
              },
              "subtree": {}
            },
            "cursor": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "cursor",
                "excludes": {},
                "description": "You can set the cursor to \"pointer\" if you have click events attached\nto the series, to signal to the user that the points and lines can\nbe clicked."
              },
              "subtree": {}
            },
            "dashStyle": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "dashStyle",
                "excludes": {},
                "default": "Solid",
                "description": "A name for the dash style to use for the graph, or for some series types\nthe outline of each shape. The value for the `dashStyle` include:\n\n*   Solid\n*   ShortDash\n*   ShortDot\n*   ShortDashDot\n*   ShortDashDotDot\n*   Dot\n*   Dash\n*   LongDash\n*   DashDot\n*   LongDashDot\n*   LongDashDotDot"
              },
              "subtree": {}
            },
            "description": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "description",
                "excludes": {},
                "default": "undefined",
                "description": "Requires the Accessibility module.\n\nA description of the series to add to the screen reader information\nabout the series."
              },
              "subtree": {}
            },
            "enableMouseTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enableMouseTracking",
                "excludes": {},
                "default": "true",
                "description": "Enable or disable the mouse tracking for a specific series. This\nincludes point tooltips and click events on graphs and points. For\nlarge datasets it improves performance."
              },
              "subtree": {}
            },
            "exposeElementToA11y": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "exposeElementToA11y",
                "excludes": {},
                "default": "undefined",
                "description": "By default, series are exposed to screen readers as regions. By enabling\nthis option, the series element itself will be exposed in the same\nway as the data points. This is useful if the series is not used\nas a grouping entity in the chart, but you still want to attach a\ndescription to the series.\n\nRequires the Accessibility module."
              },
              "subtree": {}
            },
            "getExtremesFromAll": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "getExtremesFromAll",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to use the Y extremes of the total chart width or only the\nzoomed area when zooming in on parts of the X axis. By default, the\nY axis adjusts to the min and max of the visible data. Cartesian\nseries only."
              },
              "subtree": {}
            },
            "keys": {
              "meta": {
                "types": {
                  "array": "String"
                },
                "name": "keys",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An array specifying which option maps to which key in the data point\narray. This makes it convenient to work with unstructured data arrays\nfrom different sources."
              },
              "subtree": {}
            },
            "linecap": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "linecap",
                "excludes": {},
                "default": "round",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The line cap used for line ends and line joins on the graph."
              },
              "subtree": {}
            },
            "linkedTo": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "linkedTo",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The [id](#series.id) of another series to link to. Additionally,\nthe value can be \":previous\" to link to the previous series. When\ntwo series are linked, only the first one appears in the legend.\nToggling the visibility of this also toggles the linked series."
              },
              "subtree": {}
            },
            "negativeColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "negativeColor",
                "excludes": {},
                "default": "null",
                "description": "The color for the parts of the graph or points that are below the\n[threshold](#plotOptions.series.threshold)."
              },
              "subtree": {}
            },
            "pointDescriptionFormatter": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "pointDescriptionFormatter",
                "excludes": {},
                "description": "Same as [accessibility.pointDescriptionFormatter](#accessibility.\npointDescriptionFormatter), but for an individual series. Overrides\nthe chart wide configuration."
              },
              "subtree": {}
            },
            "pointInterval": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointInterval",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "If no x values are given for the points in a series, `pointInterval`\ndefines the interval of the x values. For example, if a series contains\none value every decade starting from year 0, set `pointInterval` to\n`10`. In true `datetime` axes, the `pointInterval` is set in\nmilliseconds.\n\nIt can be also be combined with `pointIntervalUnit` to draw irregular\ntime intervals.\n\nPlease note that this options applies to the _series data_, not the\ninterval of the axis ticks, which is independent."
              },
              "subtree": {}
            },
            "pointIntervalUnit": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "pointIntervalUnit",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "On datetime series, this allows for setting the\n[pointInterval](#plotOptions.series.pointInterval) to irregular time \nunits, `day`, `month` and `year`. A day is usually the same as 24 hours,\nbut `pointIntervalUnit` also takes the DST crossover into consideration\nwhen dealing with local time. Combine this option with `pointInterval`\nto draw weeks, quarters, 6 months, 10 years etc.\n\nPlease note that this options applies to the _series data_, not the\ninterval of the axis ticks, which is independent."
              },
              "subtree": {}
            },
            "pointPlacement": {
              "meta": {
                "types": {
                  "string": 1,
                  "number": 1
                },
                "name": "pointPlacement",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Possible values: `null`, `\"on\"`, `\"between\"`.\n\nIn a column chart, when pointPlacement is `\"on\"`, the point will\nnot create any padding of the X axis. In a polar column chart this\nmeans that the first column points directly north. If the pointPlacement\nis `\"between\"`, the columns will be laid out between ticks. This\nis useful for example for visualising an amount between two points\nin time or in a certain sector of a polar chart.\n\nSince Highcharts 3.0.2, the point placement can also be numeric,\nwhere 0 is on the axis value, -0.5 is between this value and the\nprevious, and 0.5 is between this value and the next. Unlike the\ntextual options, numeric point placement options won't affect axis\npadding.\n\nNote that pointPlacement needs a [pointRange](#plotOptions.series.\npointRange) to work. For column series this is computed, but for\nline-type series it needs to be set.\n\nDefaults to `null` in cartesian charts, `\"between\"` in polar charts."
              },
              "subtree": {}
            },
            "pointStart": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointStart",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "If no x values are given for the points in a series, pointStart defines\non what value to start. For example, if a series contains one yearly\nvalue starting from 1945, set pointStart to 1945."
              },
              "subtree": {}
            },
            "selected": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "selected",
                "excludes": {},
                "default": "false",
                "description": "Whether to select the series initially. If `showCheckbox` is true,\nthe checkbox next to the series name in the legend will be checked for a\nselected series."
              },
              "subtree": {}
            },
            "shadow": {
              "meta": {
                "types": {
                  "boolean": 1,
                  "object": 1
                },
                "name": "shadow",
                "excludes": {},
                "default": "false",
                "description": "Whether to apply a drop shadow to the graph line. Since 2.3 the shadow\ncan be an object configuration containing `color`, `offsetX`, `offsetY`,\n `opacity` and `width`."
              },
              "subtree": {}
            },
            "showInLegend": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInLegend",
                "excludes": {},
                "default": "true",
                "description": "Whether to display this particular series or series type in the legend.\nThe default value is `true` for standalone series, `false` for linked\nseries."
              },
              "subtree": {}
            },
            "skipKeyboardNavigation": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "skipKeyboardNavigation",
                "excludes": {},
                "description": "If set to `True`, the accessibility module will skip past the points\nin this series for keyboard navigation."
              },
              "subtree": {}
            },
            "stacking": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "stacking",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to stack the values of each series on top of each other.\nPossible values are `null` to disable, `\"normal\"` to stack by value or\n`\"percent\"`. When stacking is enabled, data must be sorted in ascending\nX order. A special stacking option is with the streamgraph series type,\nwhere the stacking option is set to `\"stream\"`."
              },
              "subtree": {}
            },
            "step": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "step",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to apply steps to the line. Possible values are `left`, `center`\nand `right`."
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The threshold, also called zero level or base level. For line type\nseries this is only used in conjunction with\n[negativeColor](#plotOptions.series.negativeColor)."
              },
              "subtree": {}
            },
            "visible": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "visible",
                "excludes": {},
                "default": "true",
                "description": "Set the initial visibility of the series."
              },
              "subtree": {}
            },
            "zoneAxis": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "zoneAxis",
                "excludes": {},
                "default": "y",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Defines the Axis on which the zones are applied."
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {},
                "description": "A configuration object for the tooltip rendering of each single series.\nProperties are inherited from [tooltip](#tooltip), but only the\nfollowing properties can be defined on a series level.",
                "extends": "tooltip"
              },
              "subtree": {}
            },
            "zones": {
              "meta": {
                "types": {
                  "array": "object"
                },
                "name": "zones",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An array defining zones within a series. Zones can be applied to\nthe X axis, Y axis or Z axis for bubbles, according to the `zoneAxis`\noption.\n\nIn styled mode, the color zones are styled with the\n`.highcharts-zone-{n}` class, or custom classed from the `className`\noption\n([view live demo](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/css/color-zones/))."
              },
              "subtree": {
                "className": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "className",
                    "excludes": {},
                    "description": "Styled mode only. A custom class name for the zone."
                  },
                  "subtree": {}
                },
                "color": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Defines the color of the series."
                  },
                  "subtree": {}
                },
                "dashStyle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "dashStyle",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "A name for the dash style to use for the graph."
                  },
                  "subtree": {}
                },
                "fillColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "fillColor",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Defines the fill color for the series (in area type series)"
                  },
                  "subtree": {}
                },
                "value": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "value",
                    "excludes": {},
                    "default": "undefined",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "The value up to where the zone extends, if undefined the zones stretches\nto the last value in the series."
                  },
                  "subtree": {}
                }
              }
            },
            "compare": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "compare",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highstock": 1
                },
                "description": "Compare the values of the series against the first non-null, non-\nzero value in the visible range. The y axis will show percentage\nor absolute change depending on whether `compare` is set to `\"percent\"`\nor `\"value\"`. When this is applied to multiple series, it allows\ncomparing the development of the series against each other."
              },
              "subtree": {}
            },
            "compareStart": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "compareStart",
                "excludes": {},
                "default": "false",
                "products": {
                  "highstock": 1
                },
                "description": "Defines if comparisson should start from the first point within the visible\nrange or should start from the first point <b>before</b> the range.\nIn other words, this flag determines if first point within the visible range\nwill have 0% (`compareStart=true`) or should have been already calculated\naccording to the previous point (`compareStart=false`)."
              },
              "subtree": {}
            },
            "compareBase": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "compareBase",
                "excludes": {},
                "default": "0",
                "products": {
                  "highstock": 1
                },
                "description": "When [compare](#plotOptions.series.compare) is `percent`, this option\ndictates whether to use 0 or 100 as the base of comparison."
              },
              "subtree": {}
            },
            "connectEnds": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "connectEnds",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Polar charts only. Whether to connect the ends of a line series\nplot across the extremes."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "Define the z index of the series."
              },
              "subtree": {}
            },
            "allAreas": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "allAreas",
                "excludes": {},
                "default": "true",
                "products": {
                  "highmaps": 1
                },
                "description": "Whether all areas of the map defined in `mapData` should be rendered.\nIf `true`, areas which don't correspond to a data point, are rendered\nas `null` points. If `false`, those areas are skipped."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#cccccc",
                "products": {
                  "highmaps": 1
                },
                "description": "The border color of the map areas.\n\nIn styled mode, the border stroke is given in the `.highcharts-point` class."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {},
                "name": "borderWidth",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "The border width of each map area.\n\nIn styled mode, the border stroke width is given in the\n`.highcharts-point` class."
              },
              "subtree": {}
            },
            "colorAxis": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "colorAxis",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highmaps": 1
                },
                "description": "Set this option to `false` to prevent a series from connecting to\nthe global color axis. This will cause the series to have its own\nlegend item."
              },
              "subtree": {}
            },
            "joinBy": {
              "meta": {
                "types": {
                  "string": 1,
                  "array": "String"
                },
                "name": "joinBy",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "What property to join the `mapData` to the value data. For example,\nif joinBy is \"code\", the mapData items with a specific code is merged\ninto the data with the same code. For maps loaded from GeoJSON, the\nkeys may be held in each point's `properties` object.\n\nThe joinBy option can also be an array of two values, where the first\npoints to a key in the `mapData`, and the second points to another\nkey in the `data`.\n\nWhen joinBy is `null`, the map items are joined by their position\nin the array, which performs much better in maps with many data points.\nThis is the recommended option if you are printing more than a thousand\ndata points and have a backend that can preprocess the data into\na parallel array of the mapData."
              },
              "subtree": {}
            }
          }
        },
        "bullet": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "bullet",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A bullet graph is a variation of a bar graph. The bullet graph features\na single measure, compares it to a target, and displays it in the context\nof qualitative ranges of performance that could be set using\n[plotBands](#yAxis.plotBands) on [yAxis](#yAxis).",
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "targetOptions": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "targetOptions",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "All options related with look and positiong of targets."
              },
              "subtree": {
                "width": {
                  "meta": {
                    "types": {
                      "number": 1,
                      "string": 1
                    },
                    "name": "width",
                    "excludes": {},
                    "default": "140%",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The width of the rectangle representing the target. Could be set\nas a pixel value or as a percentage of a column width."
                  },
                  "subtree": {}
                },
                "height": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "height",
                    "excludes": {},
                    "default": 3,
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The height of the rectangle representing the target."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "default": 0,
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The border width of the rectangle representing the target.\n\nIn styled mode, use class `highcharts-bullet-target` instead."
                  },
                  "subtree": {}
                },
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The border color of the rectangle representing the target. When\nnot set, the  point's border color is used.\n\nIn styled mode, use class `highcharts-bullet-target` instead."
                  },
                  "subtree": {}
                },
                "color": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The color of the rectangle representing the target. When not set,\npoint's color (if set in point's options -\n[`color`](#series.bullet.data.color)) or zone of the target value\n(if [`zones`](#plotOptions.bullet.zones) or\n[`negativeColor`](#plotOptions.bullet.negativeColor) are set)\nor the same color as the point has is used.\n\nIn styled mode, use class `highcharts-bullet-target` instead."
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "funnel": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "funnel",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Funnel charts are a type of chart often used to visualize stages in a sales \nproject, where the top are the initial stages with the most clients. \nIt requires that the modules/funnel.js file is loaded.",
            "extends": "{plotOptions.pie}"
          },
          "subtree": {
            "animation": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "animation",
                "excludes": {},
                "default": false,
                "description": "Initial animation is by default disabled for the funnel chart."
              },
              "subtree": {}
            },
            "center": {
              "meta": {
                "types": {
                  "array": "(String|Number)"
                },
                "name": "center",
                "excludes": {},
                "default": "[\"50%\", \"50%\"]",
                "products": {
                  "highcharts": 1
                },
                "description": "The center of the series. By default, it is centered in the middle\nof the plot area, so it fills the plot area height."
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "width",
                "excludes": {},
                "default": "90%",
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the funnel compared to the width of the plot area,\nor the pixel width if it is a number."
              },
              "subtree": {}
            },
            "neckWidth": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "neckWidth",
                "excludes": {},
                "default": "30%",
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the neck, the lower part of the funnel. A number defines\npixel width, a percentage string defines a percentage of the plot\narea width."
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "height",
                "excludes": {},
                "default": "100%",
                "products": {
                  "highcharts": 1
                },
                "description": "The height of the funnel or pyramid. If it is a number it defines\nthe pixel height, if it is a percentage string it is the percentage\nof the plot area height."
              },
              "subtree": {}
            },
            "neckHeight": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "neckHeight",
                "excludes": {},
                "default": "25%",
                "products": {
                  "highcharts": 1
                },
                "description": "The height of the neck, the lower part of the funnel. A number defines\npixel width, a percentage string defines a percentage of the plot\narea height."
              },
              "subtree": {}
            },
            "reversed": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "reversed",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1
                },
                "description": "A reversed funnel has the widest area down. A reversed funnel with\nno neck width and neck height is a pyramid."
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "connectorWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "connectorWidth",
                    "excludes": {},
                    "default": 1
                  },
                  "subtree": {}
                }
              }
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Options for the series states."
              },
              "subtree": {
                "select": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "select",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Options for a selected funnel item."
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "#cccccc",
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "A specific color for the selected point."
                      },
                      "subtree": {}
                    },
                    "borderColor": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "borderColor",
                        "excludes": {},
                        "default": "#000000",
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "A specific border color for the selected point."
                      },
                      "subtree": {}
                    }
                  }
                },
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "pyramid": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "pyramid",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A pyramid series is a special type of funnel, without neck and reversed by\ndefault.",
            "extends": "plotOptions.funnel"
          },
          "subtree": {
            "neckWidth": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "neckWidth",
                "excludes": {},
                "default": "0%",
                "products": {
                  "highcharts": 1
                },
                "description": "The pyramid neck width is zero by default, as opposed to the funnel, \nwhich shares the same layout logic."
              },
              "subtree": {}
            },
            "neckHeight": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "neckHeight",
                "excludes": {},
                "default": "0%",
                "products": {
                  "highcharts": 1
                },
                "description": "The pyramid neck width is zero by default, as opposed to the funnel, \nwhich shares the same layout logic."
              },
              "subtree": {}
            },
            "reversed": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "reversed",
                "excludes": {},
                "default": true,
                "products": {
                  "highcharts": 1
                },
                "description": "The pyramid is reversed by default, as opposed to the funnel, which\nshares the layout engine, and is not reversed."
              },
              "subtree": {}
            }
          }
        },
        "histogram": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "histogram",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A histogram is a column series which represents the distribution of the data\nset in the base series. Histogram splits data into bins and shows their\nfrequencies.",
            "extends": "plotOptions.column"
          },
          "subtree": {
            "binsNumber": {
              "meta": {
                "types": {
                  "string": 1,
                  "number": 1,
                  "function": 1
                },
                "name": "binsNumber",
                "excludes": {},
                "default": "square-root",
                "description": "A preferable number of bins. It is a suggestion, so a histogram may have\na different number of bins. By default it is set to the square root\nof the base series' data length. Available options are: `square-root`,\n`sturges`, `rice`. You can also define a function which takes a\n`baseSeries` as a parameter and should return a positive integer."
              },
              "subtree": {}
            },
            "binWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "binWidth",
                "excludes": {},
                "description": "Width of each bin. By default the bin's width is calculated as\n`(max - min) / number of bins`. This option takes precedence over\n[binsNumber](#plotOptions.histogram.binsNumber)."
              },
              "subtree": {}
            },
            "pointPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointPadding",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "groupPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "groupPadding",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "grouping": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "grouping",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "pointPlacement": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "pointPlacement",
                "excludes": {},
                "default": "between"
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "headerFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "headerFormat",
                    "excludes": {},
                    "default": ""
                  },
                  "subtree": {}
                },
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "pareto": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "pareto",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A pareto diagram is a type of chart that contains both bars and a line graph,\nwhere individual values are represented in descending order by bars, \nand the cumulative total is represented by the line.",
            "extends": "{plotOptions.line}"
          },
          "subtree": {
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "default": 3,
                "description": "Higher zIndex than column series to draw line above shapes."
              },
              "subtree": {}
            }
          }
        },
        "sankey": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "sankey",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A sankey diagram is a type of flow diagram, in which the width of the \nlink between two nodes is shown proportionally to the flow quantity.",
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "colorByPoint": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "colorByPoint",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "curveFactor": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "curveFactor",
                "excludes": {},
                "default": 0.33,
                "description": "Higher numbers makes the links in a sankey diagram render more curved.\nA `curveFactor` of 0 makes the lines straight."
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {},
                "description": "Options for the data labels appearing on top of the nodes and links. For\nsankey charts, data labels are visible for the nodes by default, but \nhidden for links. This is controlled by modifying the `nodeFormat`, and\nthe `format` that applies to links and is an empty string by default."
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "backgroundColor": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "backgroundColor",
                    "excludes": {},
                    "default": "none"
                  },
                  "subtree": {}
                },
                "crop": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "crop",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "nodeFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "nodeFormat",
                    "excludes": {},
                    "description": "The [format string](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting) specifying what to show for _nodes_ in the \nsankey diagram. By default the `nodeFormatter` returns\n`{point.name}`."
                  },
                  "subtree": {}
                },
                "nodeFormatter": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "nodeFormatter",
                    "excludes": {},
                    "description": "Callback to format data labels for _nodes_ in the sankey diagram. \nThe `nodeFormat` option takes precedence over the `nodeFormatter`."
                  },
                  "subtree": {}
                },
                "format": {
                  "meta": {
                    "types": {},
                    "name": "format",
                    "excludes": {},
                    "description": "The [format string](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting) specifying what to show for _links_ in the \nsankey diagram. Defaults to an empty string returned from the \n`formatter`, in effect disabling the labels."
                  },
                  "subtree": {}
                },
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {},
                    "description": "Callback to format data labels for _links_ in the sankey diagram. \nThe `format` option takes precedence over the `formatter`."
                  },
                  "subtree": {}
                },
                "inside": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "inside",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                }
              }
            },
            "linkOpacity": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "linkOpacity",
                "excludes": {},
                "default": 0.5,
                "description": "Opacity for the links between nodes in the sankey diagram."
              },
              "subtree": {}
            },
            "nodeWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "nodeWidth",
                "excludes": {},
                "default": 20,
                "description": "The pixel width of each node in a sankey diagram, or the height in case\nthe chart is inverted."
              },
              "subtree": {}
            },
            "nodePadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "nodePadding",
                "excludes": {},
                "default": 10,
                "description": "The padding between nodes in a sankey diagram, in pixels."
              },
              "subtree": {}
            },
            "showInLegend": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInLegend",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "linkOpacity": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "linkOpacity",
                        "excludes": {},
                        "default": 1,
                        "description": "Opacity for the links between nodes in the sankey diagram in\nhover mode."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "followPointer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "followPointer",
                    "excludes": {},
                    "default": true,
                    "description": "Whether the tooltip should follow the pointer or stay fixed on the\nitem."
                  },
                  "subtree": {}
                },
                "headerFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "headerFormat",
                    "excludes": {},
                    "default": "<span class=\"highcharts-header\">{series.name}</span><br/>"
                  },
                  "subtree": {}
                },
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "{point.fromNode.name} → {point.toNode.name}: <b>{point.weight}</b><br/>"
                  },
                  "subtree": {}
                },
                "nodeFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "nodeFormat",
                    "excludes": {},
                    "default": "{point.name}: <b>{point.sum}</b><br/>",
                    "description": "The [format string](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting) specifying what to show for _nodes_ in tooltip\nof a sankey diagram series, as opposed to links."
                  },
                  "subtree": {}
                },
                "nodeFormatter": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "nodeFormatter",
                    "excludes": {},
                    "description": "A callback for defining the format for _nodes_ in the sankey chart's\ntooltip, as opposed to links."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "solidgauge": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "solidgauge",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A solid gauge is a circular gauge where the value is indicated by a filled\narc, and the color of the arc may variate with the value.",
            "extends": "plotOptions.gauge"
          },
          "subtree": {
            "colorByPoint": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "colorByPoint",
                "excludes": {},
                "default": true,
                "description": "Whether to give each point an individual color."
              },
              "subtree": {}
            },
            "linecap": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "linecap",
                "excludes": {},
                "default": "round",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether the strokes of the solid gauge should be `round` or `square`."
              },
              "subtree": {}
            },
            "overshoot": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "overshoot",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "Allow the gauge to overshoot the end of the perimeter axis by this\nmany degrees. Say if the gauge axis goes from 0 to 60, a value of\n100, or 1000, will show 5 degrees beyond the end of the axis when this\noption is set to 5."
              },
              "subtree": {}
            },
            "rounded": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "rounded",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "Wether to draw rounded edges on the gauge."
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The threshold or base level for the gauge."
              },
              "subtree": {}
            }
          }
        },
        "streamgraph": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "streamgraph",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A streamgraph is a type of stacked area graph which is displaced around a\ncentral axis, resulting in a flowing, organic shape.",
            "extends": "{plotOptions.areaspline}"
          },
          "subtree": {
            "fillOpacity": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "fillOpacity",
                "excludes": {},
                "default": 1
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "stacking": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "stacking",
                "excludes": {},
                "default": "stream"
              },
              "subtree": {}
            }
          }
        },
        "sunburst": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "sunburst",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A Sunburst displays hierarchical data, where a level in the hierarchy is represented by a circle.\nThe center represents the root node of the tree.\nThe visualization bears a resemblance to both treemap and pie charts.",
            "extends": "{plotOptions.pie}"
          },
          "subtree": {
            "center": {
              "meta": {
                "types": {
                  "array": "(String|Number)"
                },
                "name": "center",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The center of the sunburst chart relative to the plot area. Can be\npercentages or pixel values."
              },
              "subtree": {}
            },
            "colorByPoint": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "colorByPoint",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {},
                "extends": "plotOptions.series.dataLabels"
              },
              "subtree": {
                "defer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "defer",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "style",
                    "excludes": {}
                  },
                  "subtree": {
                    "textOverflow": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "textOverflow",
                        "excludes": {},
                        "default": "ellipsis"
                      },
                      "subtree": {}
                    }
                  }
                },
                "rotationMode": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "rotationMode",
                    "excludes": {},
                    "default": "perpendicular",
                    "description": "Decides how the data label will be rotated according to the perimeter\nof the sunburst. It can either be parallel or perpendicular to the\nperimeter.\n`series.rotation` takes precedence over `rotationMode`."
                  },
                  "subtree": {}
                }
              }
            },
            "rootId": {
              "meta": {
                "types": {
                  "string": 1,
                  "undefined": 1
                },
                "name": "rootId",
                "excludes": {},
                "default": "undefined",
                "description": "Which point to use as a root in the visualization."
              },
              "subtree": {}
            },
            "levelIsConstant": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "levelIsConstant",
                "excludes": {},
                "default": true,
                "description": "Used together with the levels and `allowDrillToNode` options. When\nset to false the first level visible when drilling is considered\nto be level one. Otherwise the level will be the same as the tree\nstructure."
              },
              "subtree": {}
            },
            "levelSize": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "levelSize",
                "excludes": {},
                "description": "Determines the width of the ring per level."
              },
              "subtree": {
                "value": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "value",
                    "excludes": {},
                    "default": 1,
                    "description": "The value used for calculating the width of the ring. Its' affect is\ndetermined by `levelSize.unit`."
                  },
                  "subtree": {}
                },
                "unit": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "unit",
                    "excludes": {},
                    "default": "weight",
                    "description": "How to interpret `levelSize.value`.\n`percentage` gives a width relative to result of outer radius minus\ninner radius.\n`pixels` gives the ring a fixed width in pixels.\n`weight` takes the remaining width after percentage and pixels, and\ndistributes it accross all \"weighted\" levels. The value relative to the\nsum of all weights determines the width."
                  },
                  "subtree": {}
                }
              }
            },
            "slicedOffset": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "slicedOffset",
                "excludes": {},
                "default": 10,
                "description": "If a point is sliced, moved out from the center, how many pixels\nshould it be moved?."
              },
              "subtree": {}
            },
            "levels": {
              "meta": {
                "types": {
                  "array": "Object"
                },
                "name": "levels",
                "excludes": {},
                "description": "Set options on specific levels. Takes precedence over series options,\nbut not point options."
              },
              "subtree": {
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "description": "Can set a `borderColor` on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "description": "Can set a `borderWidth` on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "borderDashStyle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "borderDashStyle",
                    "excludes": {},
                    "description": "Can set a `borderDashStyle` on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "color": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "description": "Can set a `color` on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "colorVariation": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "colorVariation",
                    "excludes": {},
                    "description": "Can set a `colorVariation` on all points which lies on the same level."
                  },
                  "subtree": {
                    "key": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "key",
                        "excludes": {},
                        "description": "The key of a color variation. Currently supports `brightness` only."
                      },
                      "subtree": {}
                    },
                    "to": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "to",
                        "excludes": {},
                        "description": "The ending value of a color variation. The last sibling will receive this\nvalue."
                      },
                      "subtree": {}
                    }
                  }
                },
                "levelSize": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "levelSize",
                    "excludes": {},
                    "description": "Can set a `levelSize` on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "rotation": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "rotation",
                    "excludes": {},
                    "description": "Can set a `rotation` on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "rotationMode": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "rotationMode",
                    "excludes": {},
                    "description": "Can set a `rotationMode` on all points which lies on the same level."
                  },
                  "subtree": {}
                }
              }
            },
            "allowDrillToNode": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "allowDrillToNode",
                "excludes": {},
                "default": "false",
                "description": "When enabled the user can click on a point which is a parent and\nzoom in on its children."
              },
              "subtree": {}
            }
          }
        },
        "tilemap": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "tilemap",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "A tilemap series is a type of heatmap where the tile shapes are configurable.",
            "extends": "{plotOptions.heatmap}"
          },
          "subtree": {
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "halo": {
                      "meta": {
                        "types": {
                          "object": 1
                        },
                        "name": "halo",
                        "excludes": {}
                      },
                      "subtree": {
                        "enabled": {
                          "meta": {
                            "types": {
                              "boolean": 1
                            },
                            "name": "enabled",
                            "excludes": {},
                            "default": true
                          },
                          "subtree": {}
                        },
                        "size": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "size",
                            "excludes": {},
                            "default": 2
                          },
                          "subtree": {}
                        },
                        "opacity": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "opacity",
                            "excludes": {},
                            "default": 0.5
                          },
                          "subtree": {}
                        },
                        "attributes": {
                          "meta": {
                            "types": {
                              "object": 1
                            },
                            "name": "attributes",
                            "excludes": {}
                          },
                          "subtree": {
                            "zIndex": {
                              "meta": {
                                "types": {
                                  "number": 1
                                },
                                "name": "zIndex",
                                "excludes": {},
                                "default": 3
                              },
                              "subtree": {}
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "pointPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointPadding",
                "excludes": {},
                "default": 2,
                "description": "The padding between points in the tilemap."
              },
              "subtree": {}
            },
            "tileShape": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "tileShape",
                "excludes": {},
                "default": "hexagon",
                "description": "The shape of the tiles in the tilemap. Possible values are `hexagon`,\n`circle`, `diamond`, and `square`."
              },
              "subtree": {}
            },
            "colsize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "colsize",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "The column size - how many X axis units each column in the tilemap\nshould span. Works as in [Heatmaps](#plotOptions.heatmap.colsize)."
              },
              "subtree": {}
            },
            "rowsize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rowsize",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "The row size - how many Y axis units each tilemap row should span.\nAnalogous to [colsize](#plotOptions.tilemap.colsize)."
              },
              "subtree": {}
            }
          }
        },
        "treemap": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "treemap",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A treemap displays hierarchical data using nested rectangles. The data can be\nlaid out in varying ways depending on options.",
            "extends": "{plotOptions.scatter}"
          },
          "subtree": {
            "showInLegend": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInLegend",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to display this series type or specific series item in the\nlegend."
              },
              "subtree": {}
            },
            "colorByPoint": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "colorByPoint",
                "excludes": {},
                "default": "false",
                "description": "When using automatic point colors pulled from the `options.colors`\ncollection, this option determines whether the chart should receive\none color per series or one color per point."
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "extends": "plotOptions.heatmap.dataLabels"
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "defer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "defer",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "middle"
                  },
                  "subtree": {}
                },
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "inside": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "inside",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "headerFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "headerFormat",
                    "excludes": {},
                    "default": ""
                  },
                  "subtree": {}
                },
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<b>{point.name}</b>: {point.value}<br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "ignoreHiddenPoint": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "ignoreHiddenPoint",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to ignore hidden points when the layout algorithm runs.\nIf `false`, hidden points will leave open spaces."
              },
              "subtree": {}
            },
            "layoutAlgorithm": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "layoutAlgorithm",
                "excludes": {},
                "default": "sliceAndDice",
                "products": {
                  "highcharts": 1
                },
                "description": "This option decides which algorithm is used for setting position\nand dimensions of the points. Can be one of `sliceAndDice`, `stripes`,\n `squarified` or `strip`."
              },
              "subtree": {}
            },
            "layoutStartingDirection": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "layoutStartingDirection",
                "excludes": {},
                "default": "vertical",
                "products": {
                  "highcharts": 1
                },
                "description": "Defines which direction the layout algorithm will start drawing.\n Possible values are \"vertical\" and \"horizontal\"."
              },
              "subtree": {}
            },
            "alternateStartingDirection": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "alternateStartingDirection",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "Enabling this option will make the treemap alternate the drawing\ndirection between vertical and horizontal. The next levels starting\ndirection will always be the opposite of the previous."
              },
              "subtree": {}
            },
            "levelIsConstant": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "levelIsConstant",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "Used together with the levels and allowDrillToNode options. When\nset to false the first level visible when drilling is considered\nto be level one. Otherwise the level will be the same as the tree\nstructure."
              },
              "subtree": {}
            },
            "drillUpButton": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "drillUpButton",
                "excludes": {},
                "description": "Options for the button appearing when drilling down in a treemap."
              },
              "subtree": {
                "position": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "position",
                    "excludes": {},
                    "description": "The position of the button."
                  },
                  "subtree": {
                    "align": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "align",
                        "excludes": {},
                        "default": "right",
                        "description": "Horizontal alignment of the button."
                      },
                      "subtree": {}
                    },
                    "x": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "x",
                        "excludes": {},
                        "default": "-10",
                        "description": "Horizontal offset of the button."
                      },
                      "subtree": {}
                    },
                    "y": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "y",
                        "excludes": {},
                        "default": 10,
                        "description": "Vertical offset of the button."
                      },
                      "subtree": {}
                    },
                    "verticalAlign": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "verticalAlign",
                        "excludes": {},
                        "default": "top",
                        "description": "Vertical alignment of the button."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#e6e6e6",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the border surrounding each tree map item."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": 1,
                "description": "The width of the border surrounding each tree map item."
              },
              "subtree": {}
            },
            "opacity": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "opacity",
                "excludes": {},
                "default": "0.15",
                "products": {
                  "highcharts": 1
                },
                "description": "The opacity of a point in treemap. When a point has children, the\nvisibility of the children is determined by the opacity."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "A wrapper object for all the series options in specific states.",
                "extends": "plotOptions.heatmap.states"
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Options for the hovered series",
                    "extends": "plotOptions.heatmap.states.hover"
                  },
                  "subtree": {
                    "borderColor": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "borderColor",
                        "excludes": {},
                        "default": "#999999",
                        "description": "The border color for the hovered state."
                      },
                      "subtree": {}
                    },
                    "brightness": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "brightness",
                        "excludes": {},
                        "default": "null",
                        "description": "Brightness for the hovered point. Defaults to 0 if the heatmap\nseries is loaded, otherwise 0.1."
                      },
                      "subtree": {}
                    },
                    "halo": {
                      "meta": {
                        "types": {
                          "boolean": 1
                        },
                        "name": "halo",
                        "excludes": {},
                        "default": false,
                        "extends": "plotOptions.heatmap.states.hover.halo"
                      },
                      "subtree": {}
                    },
                    "opacity": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "opacity",
                        "excludes": {},
                        "default": "0.75",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The opacity of a point in treemap. When a point has children,\nthe visibility of the children is determined by the opacity."
                      },
                      "subtree": {}
                    },
                    "shadow": {
                      "meta": {
                        "types": {
                          "boolean": 1
                        },
                        "name": "shadow",
                        "excludes": {},
                        "default": false,
                        "description": "The shadow option for hovered state."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "allowDrillToNode": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "allowDrillToNode",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "When enabled the user can click on a point which is a parent and\nzoom in on its children."
              },
              "subtree": {}
            },
            "cropThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "cropThreshold",
                "excludes": {},
                "default": "300",
                "products": {
                  "highcharts": 1
                },
                "description": "When the series contains less points than the crop threshold, all\npoints are drawn, event if the points fall outside the visible plot\narea at the current zoom. The advantage of drawing all points (including\nmarkers and columns), is that animation is performed on updates.\nOn the other hand, when the series contains more points than the\ncrop threshold, the series data is cropped to only contain points\nthat fall within the plot area. The advantage of cropping away invisible\npoints is to increase performance on large series."
              },
              "subtree": {}
            },
            "interactByLeaf": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "interactByLeaf",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "This option decides if the user can interact with the parent nodes\nor just the leaf nodes. When this option is undefined, it will be\ntrue by default. However when allowDrillToNode is true, then it will\nbe false by default."
              },
              "subtree": {}
            },
            "sortIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "sortIndex",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The sort index of the point inside the treemap level."
              },
              "subtree": {}
            },
            "colors": {
              "meta": {
                "types": {
                  "array": "Color"
                },
                "name": "colors",
                "excludes": {},
                "description": "A series specific or series type specific color set to apply instead\nof the global [colors](#colors) when [colorByPoint](#plotOptions.\ntreemap.colorByPoint) is true."
              },
              "subtree": {}
            },
            "levels": {
              "meta": {
                "types": {
                  "array": "Object"
                },
                "name": "levels",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Set options on specific levels. Takes precedence over series options,\nbut not point options."
              },
              "subtree": {
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Can set a `borderColor` on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "borderDashStyle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "borderDashStyle",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Set the dash style of the border of all the point which lies on the\nlevel. See <a href\"#plotoptions.scatter.dashstyle\">\nplotOptions.scatter.dashStyle</a> for possible options."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Can set the borderWidth on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "color": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Can set a color on all points which lies on the same level."
                  },
                  "subtree": {}
                },
                "colorVariation": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "colorVariation",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "A configuration object to define how the color of a child varies from the\nparent's color. The variation is distributed among the children of node.\nFor example when setting brightness, the brightness change will range\nfrom the parent's original brightness on the first child, to the amount\nset in the `to` setting on the last node. This allows a gradient-like\ncolor scheme that sets children out from each other while highlighting\nthe grouping on treemaps and sectors on sunburst charts."
                  },
                  "subtree": {
                    "key": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "key",
                        "excludes": {},
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The key of a color variation. Currently supports `brightness` only."
                      },
                      "subtree": {}
                    },
                    "to": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "to",
                        "excludes": {},
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The ending value of a color variation. The last sibling will receive this\nvalue."
                      },
                      "subtree": {}
                    }
                  }
                },
                "layoutAlgorithm": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "layoutAlgorithm",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Can set the layoutAlgorithm option on a specific level."
                  },
                  "subtree": {}
                },
                "layoutStartingDirection": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "layoutStartingDirection",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Can set the layoutStartingDirection option on a specific level."
                  },
                  "subtree": {}
                },
                "level": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "level",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Decides which level takes effect from the options set in the levels\nobject."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "variablepie": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "variablepie",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A variable pie series is a two dimensional series type, where each point\nrenders an Y and Z value.  Each point is drawn as a pie slice where the\nsize (arc) of the slice relates to the Y value and the radius of pie\nslice relates to the Z value. Requires `highcharts-more.js`.",
            "extends": "{plotOptions.pie}"
          },
          "subtree": {
            "minPointSize": {
              "meta": {
                "types": {
                  "string": 1,
                  "number": 1
                },
                "name": "minPointSize",
                "excludes": {},
                "default": "10%",
                "products": {
                  "highcharts": 1
                },
                "description": "The minimum size of the points' radius related to chart's `plotArea`.\nIf a number is set, it applies in pixels."
              },
              "subtree": {}
            },
            "maxPointSize": {
              "meta": {
                "types": {
                  "string": 1,
                  "number": 1
                },
                "name": "maxPointSize",
                "excludes": {},
                "default": "100%",
                "products": {
                  "highcharts": 1
                },
                "description": "The maximum size of the points' radius related to chart's `plotArea`.\nIf a number is set, it applies in pixels."
              },
              "subtree": {}
            },
            "zMin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zMin",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The minimum possible z value for the point's radius calculation. \nIf the point's Z value is smaller than zMin, the slice will be drawn\naccording to the zMin value."
              },
              "subtree": {}
            },
            "zMax": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zMax",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The maximum possible z value for the point's radius calculation. If\nthe point's Z value is bigger than zMax, the slice will be drawn\naccording to the zMax value"
              },
              "subtree": {}
            },
            "sizeBy": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "sizeBy",
                "excludes": {},
                "default": "area",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether the pie slice's value should be represented by the area \nor the radius of the slice. Can be either `area` or `radius`. The\ndefault, `area`, corresponds best to the human perception of the size\nof each pie slice."
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<span style=\"color:{point.color}\">●</span> {series.name}<br/>Value: {point.y}<br/>Size: {point.z}<br/>"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "variwide": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "variwide",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A variwide chart (related to marimekko chart) is a column chart with a\nvariable width expressing a third dimension.",
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "pointPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointPadding",
                "excludes": {},
                "default": 0,
                "description": "In a variwide chart, the point padding is 0 in order to express the \nhorizontal stacking of items."
              },
              "subtree": {}
            },
            "groupPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "groupPadding",
                "excludes": {},
                "default": 0,
                "description": "In a variwide chart, the group padding is 0 in order to express the \nhorizontal stacking of items."
              },
              "subtree": {}
            }
          }
        },
        "vector": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "vector",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A vector plot is a type of cartesian chart where each point has an X and Y\nposition, a length and a direction. Vectors are drawn as arrows.",
            "extends": "{plotOptions.scatter}"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 2,
                "description": "The line width for each vector arrow."
              },
              "subtree": {}
            },
            "rotationOrigin": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "rotationOrigin",
                "excludes": {},
                "default": "center",
                "description": "What part of the vector it should be rotated around. Can be one of\n`start`, `center` and `end`. When `start`, the vectors will start from\nthe given [x, y] position, and when `end` the vectors will end in the\n[x, y] position."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidthPlus": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidthPlus",
                        "excludes": {},
                        "default": 1,
                        "description": "Additonal line width for the vector errors when they are hovered."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<b>[{point.x}, {point.y}]</b><br/>Length: <b>{point.length}</b><br/>Direction: <b>{point.direction}°</b><br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "vectorLength": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "vectorLength",
                "excludes": {},
                "default": 20,
                "description": "Maximum length of the arrows in the vector plot. The individual arrow\nlength is computed between 0 and this value."
              },
              "subtree": {}
            }
          }
        },
        "windbarb": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "windbarb",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Wind barbs are a convenient way to represent wind speed and direction in one\ngraphical form. Wind direction is given by the stem direction, and wind speed\nby the number and shape of barbs.",
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 2,
                "description": "The line width of the wind barb symbols."
              },
              "subtree": {}
            },
            "onSeries": {
              "meta": {
                "types": {
                  "string": 1,
                  "null": 1
                },
                "name": "onSeries",
                "excludes": {},
                "default": null,
                "description": "The id of another series in the chart that the wind barbs are projected\non. When `null`, the wind symbols are drawn on the X axis, but offset\nup or down by the `yOffset` setting."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidthPlus": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidthPlus",
                        "excludes": {},
                        "default": 0
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.value}</b> ({point.beaufort})<br/>",
                    "description": "The default point format for the wind barb tooltip. Note the \n`point.beaufort` property that refers to the Beaufort wind scale. The\nnames can be internationalized by modifying\n`Highcharts.seriesTypes.windbarb.prototype.beaufortNames`."
                  },
                  "subtree": {}
                }
              }
            },
            "vectorLength": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "vectorLength",
                "excludes": {},
                "default": 20,
                "description": "Pixel length of the stems."
              },
              "subtree": {}
            },
            "yOffset": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "yOffset",
                "excludes": {},
                "default": -20,
                "description": "Vertical offset from the cartesian position, in pixels. The default value\nmakes sure the symbols don't overlap the X axis when `onSeries` is\n`null`, and that they don't overlap the linked series when `onSeries` is\ngiven."
              },
              "subtree": {}
            }
          }
        },
        "wordcloud": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "wordcloud",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A word cloud is a visualization of a set of words, where the size and\nplacement of a word is determined by how it is weighted.",
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "animation": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "animation",
                "excludes": {}
              },
              "subtree": {
                "duration": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "duration",
                    "excludes": {},
                    "default": 500
                  },
                  "subtree": {}
                }
              }
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "clip": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "clip",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "colorByPoint": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "colorByPoint",
                "excludes": {},
                "default": true,
                "description": "When using automatic point colors pulled from the `options.colors`\ncollection, this option determines whether the chart should receive\none color per series or one color per point."
              },
              "subtree": {}
            },
            "placementStrategy": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "placementStrategy",
                "excludes": {},
                "default": "center",
                "description": "This option decides which algorithm is used for placement, and rotation\nof a word. The choice of algorith is therefore a crucial part of the\nresulting layout of the wordcloud.\nIt is possible for users to add their own custom placement strategies\nfor use in word cloud. Read more about it in our\n[documentation](https://www.highcharts.com/docs/chart-and-series-types/word-cloud-series#custom-placement-strategies)"
              },
              "subtree": {}
            },
            "rotation": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "rotation",
                "excludes": {},
                "description": "Rotation options for the words in the wordcloud."
              },
              "subtree": {
                "from": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "from",
                    "excludes": {},
                    "default": 0,
                    "description": "The smallest degree of rotation for a word."
                  },
                  "subtree": {}
                },
                "orientations": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "orientations",
                    "excludes": {},
                    "default": 2,
                    "description": "The number of possible orientations for a word, within the range of\n`rotation.from` and `rotation.to`."
                  },
                  "subtree": {}
                },
                "to": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "to",
                    "excludes": {},
                    "default": 90,
                    "description": "The largest degree of rotation for a word."
                  },
                  "subtree": {}
                }
              }
            },
            "showInLegend": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInLegend",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "spiral": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "spiral",
                "excludes": {},
                "default": "rectangular",
                "description": "Spiral used for placing a word after the inital position experienced a\ncollision with either another word or the borders.\nIt is possible for users to add their own custom spiralling algorithms\nfor use in word cloud. Read more about it in our\n[documentation](https://www.highcharts.com/docs/chart-and-series-types/word-cloud-series#custom-spiralling-algorithm)"
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "default": "{\"fontFamily\":\"sans-serif\", \"fontWeight\": \"900\"}",
                "description": "CSS styles for the words."
              },
              "subtree": {
                "fontFamily": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fontFamily",
                    "excludes": {},
                    "default": "sans-serif"
                  },
                  "subtree": {}
                },
                "fontWeight": {
                  "meta": {
                    "types": {
                      "number": 1,
                      "string": 1
                    },
                    "name": "fontWeight",
                    "excludes": {},
                    "default": "900"
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "followPointer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "followPointer",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.weight}</b><br/>"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "xrange": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "xrange",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The X-range series displays ranges on the X axis, typically time intervals\nwith a start and end date.",
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "colorByPoint": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "colorByPoint",
                "excludes": {},
                "default": true,
                "description": "In an X-range series, this option makes all points of the same Y-axis\ncategory the same color."
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "middle"
                  },
                  "subtree": {}
                },
                "inside": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "inside",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {},
                    "description": "The default formatter for X-range data labels displays the percentage\nof the partial fill amount."
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "headerFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "headerFormat",
                    "excludes": {},
                    "default": "<span style=\"font-size: 0.85em\">{point.x} - {point.x2}</span><br/>"
                  },
                  "subtree": {}
                },
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.yCategory}</b><br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "borderRadius": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderRadius",
                "excludes": {},
                "default": 3
              },
              "subtree": {}
            },
            "pointRange": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointRange",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "partialFill": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "partialFill",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A partial fill for each point, typically used to visualize how much of\na task is performed. The partial fill object can be set either on series\nor point level."
              },
              "subtree": {
                "fill": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "fill",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "The fill color to be used for partial fills. Defaults to a darker shade\nof the point color."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "area": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "area",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The area series type.",
            "extends": "{plotOptions.line}"
          },
          "subtree": {
            "softThreshold": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "softThreshold",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When this is true, the series will not cause the Y axis to cross\nthe zero plane (or [threshold](#plotOptions.series.threshold) option)\nunless the data actually crosses the plane.\n\nFor example, if `softThreshold` is `false`, a series of 0, 1, 2,\n3 will make the Y axis show negative values according to the `minPadding`\noption. If `softThreshold` is `true`, the Y axis starts at 0."
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": 0,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The Y axis value to serve as the base for the area, for distinguishing\nbetween values above and below a threshold. If `null`, the area\nbehaves like a line series with fill between the graph and the Y\naxis minimum."
              },
              "subtree": {}
            },
            "fillColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "fillColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Fill color or gradient for the area. When `null`, the series' `color`\nis used with the series' `fillOpacity`.\n\nIn styled mode, the fill color can be set with the `.highcharts-area`\nclass name."
              },
              "subtree": {}
            },
            "fillOpacity": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "fillOpacity",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Fill opacity for the area. When you set an explicit `fillColor`,\nthe `fillOpacity` is not applied. Instead, you should define the\nopacity in the `fillColor` with an rgba color definition. The\n`fillOpacity` setting, also the default setting, overrides the alpha\ncomponent of the `color` setting.\n\nIn styled mode, the fill opacity can be set with the `.highcharts-area`\nclass name."
              },
              "subtree": {}
            },
            "lineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "lineColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A separate color for the graph line. By default the line takes the\n`color` of the series, but the lineColor setting allows setting a\nseparate color for the line without altering the `fillColor`.\n\nIn styled mode, the line stroke can be set with the `.highcharts-graph`\nclass name."
              },
              "subtree": {}
            },
            "negativeFillColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "negativeFillColor",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "A separate color for the negative part of the area.\n\nIn styled mode, a negative color is set with the `.highcharts-negative`\nclass name."
              },
              "subtree": {}
            },
            "trackByArea": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "trackByArea",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether the whole area or just the line should respond to mouseover\ntooltips and other mouse or touch events."
              },
              "subtree": {}
            }
          }
        },
        "areaspline": {
          "meta": {
            "types": {},
            "name": "areaspline",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The area spline series is an area series where the graph between the points\nis smoothed into a spline.",
            "extends": "plotOptions.area"
          },
          "subtree": {}
        },
        "bar": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "bar",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A bar series is a special type of column series where the columns are\nhorizontal.",
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "left",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Alignment of the data label relative to the data point."
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "default": "5",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The x position of the data label relative to the data point."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "candlestick": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "candlestick",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "A candlestick chart is a style of financial chart used to describe price\nmovements over time.",
            "extends": "{plotOptions.ohlc}"
          },
          "subtree": {
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "extends": "plotOptions.column.states.hover"
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": "2",
                        "products": {
                          "highstock": 1
                        },
                        "description": "The pixel width of the line/border around the candlestick."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {},
                "name": "tooltip",
                "excludes": {},
                "extends": "{plotOptions.ohlc.tooltip}"
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "lineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "lineColor",
                "excludes": {},
                "default": "#000000",
                "products": {
                  "highstock": 1
                },
                "description": "The color of the line/border of the candlestick.\n\nIn styled mode, the line stroke can be set with the\n`.highcharts-candlestick-series .highcahrts-point` rule."
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highstock": 1
                },
                "description": "The pixel width of the candlestick line/border. Defaults to `1`.\n\n\nIn styled mode, the line stroke width can be set with the\n`.highcharts-candlestick-series .highcahrts-point` rule."
              },
              "subtree": {}
            },
            "upColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "upColor",
                "excludes": {},
                "default": "#ffffff",
                "products": {
                  "highstock": 1
                },
                "description": "The fill color of the candlestick when values are rising.\n\nIn styled mode, the up color can be set with the\n`.highcharts-candlestick-series .highcharts-point-up` rule."
              },
              "subtree": {}
            },
            "stickyTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "stickyTracking",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "upLineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "upLineColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highstock": 1
                },
                "description": "The specific line color for up candle sticks. The default is to inherit\nthe general `lineColor` setting."
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "approximation": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "approximation",
                    "excludes": {},
                    "default": "ohlc"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "column": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "column",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Column series display one column per value along an X axis.",
            "extends": "{plotOptions.line}"
          },
          "subtree": {
            "borderRadius": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderRadius",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The corner radius of the border surrounding each column or bar."
              },
              "subtree": {}
            },
            "crisp": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "crisp",
                "excludes": {},
                "default": true,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When true, each column edge is rounded to its nearest pixel in order\nto render sharp on screen. In some cases, when there are a lot of\ndensely packed columns, this leads to visible difference in column\nwidths or distance between columns. In these cases, setting `crisp`\nto `false` may look better, even though each column is rendered\nblurry."
              },
              "subtree": {}
            },
            "groupPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "groupPadding",
                "excludes": {},
                "default": 0.2,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Padding between each value groups, in x axis units."
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "pointPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointPadding",
                "excludes": {},
                "default": 0.1,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Padding between each column or bar, in x axis units."
              },
              "subtree": {}
            },
            "minPointLength": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "minPointLength",
                "excludes": {},
                "default": 0,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The minimal height for a column or width for a bar. By default,\n0 values are not shown. To visualize a 0 (or close to zero) point,\nset the minimal point length to a pixel value like 3\\. In stacked\ncolumn charts, minPointLength might not be respected for tightly\npacked values."
              },
              "subtree": {}
            },
            "cropThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "cropThreshold",
                "excludes": {},
                "default": 50,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When the series contains less points than the crop threshold, all\npoints are drawn, event if the points fall outside the visible plot\narea at the current zoom. The advantage of drawing all points (including\nmarkers and columns), is that animation is performed on updates.\nOn the other hand, when the series contains more points than the\ncrop threshold, the series data is cropped to only contain points\nthat fall within the plot area. The advantage of cropping away invisible\npoints is to increase performance on large series. ."
              },
              "subtree": {}
            },
            "pointRange": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointRange",
                "excludes": {},
                "default": null,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The X axis range that each point is valid for. This determines the\nwidth of the column. On a categorized axis, the range will be 1\nby default (one category unit). On linear and datetime axes, the\nrange will be computed as the distance between the two closest data\npoints.\n\nThe default `null` means it is computed automatically, but this option\ncan be used to override the automatic value."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Options for the hovered point. These settings override the normal\nstate options when a point is moused over or touched.",
                    "extends": "plotOptions.series.states.hover"
                  },
                  "subtree": {
                    "brightness": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "brightness",
                        "excludes": {},
                        "default": 0.1,
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "How much to brighten the point on interaction. Requires the main\ncolor to be defined in hex or rgb(a) format.\n\nIn styled mode, the hover brightening is by default replaced\nwith a fill-opacity set in the `.highcharts-point:hover` rule."
                      },
                      "subtree": {}
                    },
                    "borderColor": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "borderColor",
                        "excludes": {},
                        "products": {
                          "highcharts": 1
                        },
                        "description": "A specific border color for the hovered point. Defaults to\ninherit the normal state border color."
                      },
                      "subtree": {}
                    },
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "undefined",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "A specific color for the hovered point."
                      },
                      "subtree": {}
                    }
                  }
                },
                "select": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "select",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Options for the selected point. These settings override the normal\nstate options when a point is selected."
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "#cccccc",
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "A specific color for the selected point."
                      },
                      "subtree": {}
                    },
                    "borderColor": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "borderColor",
                        "excludes": {},
                        "default": "#000000",
                        "products": {
                          "highcharts": 1,
                          "highstock": 1
                        },
                        "description": "A specific border color for the selected point."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                }
              }
            },
            "softThreshold": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "softThreshold",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When this is true, the series will not cause the Y axis to cross\nthe zero plane (or [threshold](#plotOptions.series.threshold) option)\nunless the data actually crosses the plane.\n\nFor example, if `softThreshold` is `false`, a series of 0, 1, 2,\n3 will make the Y axis show negative values according to the `minPadding`\noption. If `softThreshold` is `true`, the Y axis starts at 0."
              },
              "subtree": {}
            },
            "startFromThreshold": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "startFromThreshold",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "stickyTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "stickyTracking",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "distance": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "distance",
                    "excludes": {},
                    "default": 6
                  },
                  "subtree": {}
                }
              }
            },
            "threshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": 0,
                "products": {
                  "highcharts": 1
                },
                "description": "The Y axis value to serve as the base for the columns, for distinguishing\nbetween values above and below a threshold. If `null`, the columns\nextend from the padding Y axis minimum."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#ffffff",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The color of the border surrounding each column or bar.\n\nIn styled mode, the border stroke can be set with the `.highcharts-point`\nrule."
              },
              "subtree": {}
            },
            "colorByPoint": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "colorByPoint",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "When using automatic point colors pulled from the `options.colors`\ncollection, this option determines whether the chart should receive\none color per series or one color per point."
              },
              "subtree": {}
            },
            "colors": {
              "meta": {
                "types": {
                  "array": "Color"
                },
                "name": "colors",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A series specific or series type specific color set to apply instead\nof the global [colors](#colors) when [colorByPoint](#plotOptions.\ncolumn.colorByPoint) is true."
              },
              "subtree": {}
            },
            "grouping": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "grouping",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to group non-stacked columns or to let them render independent\nof each other. Non-grouped columns will be laid out individually\nand overlap each other."
              },
              "subtree": {}
            },
            "maxPointWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "maxPointWidth",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The maximum allowed pixel width for a column, translated to the height\nof a bar in a bar chart. This prevents the columns from becoming\ntoo wide when there is a small number of points in the chart."
              },
              "subtree": {}
            },
            "pointWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointWidth",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A pixel value specifying a fixed width for each column or bar. When\n`null`, the width is calculated from the `pointPadding` and\n`groupPadding`."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The width of the border surrounding each column or bar.\n\nIn styled mode, the stroke width can be set with the `.highcharts-point`\nrule."
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "groupPixelWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "groupPixelWidth",
                    "excludes": {},
                    "default": "10",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The approximate pixel width of each group. If for example a series\nwith 30 points is displayed over a 600 pixel wide plot area, no grouping\nis performed. If however the series contains so many points that\nthe spacing is less than the groupPixelWidth, Highcharts will try\nto group it into appropriate groups so that each is more or less\ntwo pixels wide. Defaults to `10`."
                  },
                  "subtree": {}
                }
              }
            },
            "depth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "depth",
                "excludes": {},
                "default": "25",
                "products": {
                  "highcharts": 1
                },
                "description": "Depth of the columns in a 3D column chart. Requires `highcharts-3d.js`."
              },
              "subtree": {}
            },
            "edgeColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "edgeColor",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "3D columns only. The color of the edges. Similar to `borderColor`,\n except it defaults to the same color as the column."
              },
              "subtree": {}
            },
            "edgeWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "edgeWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1
                },
                "description": "3D columns only. The width of the colored edges."
              },
              "subtree": {}
            },
            "groupZPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "groupZPadding",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1
                },
                "description": "The spacing between columns on the Z Axis in a 3D chart. Requires\n`highcharts-3d.js`."
              },
              "subtree": {}
            }
          }
        },
        "flags": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "flags",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Flags are used to mark events in stock charts. They can be added on the\ntimeline, or attached to a specific series.",
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "pointRange": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointRange",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "allowOverlapX": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "allowOverlapX",
                "excludes": {},
                "default": false,
                "description": "Whether the flags are allowed to overlap sideways. If `false`, the flags\nare moved sideways using an algorithm that seeks to place every flag as\nclose as possible to its original position."
              },
              "subtree": {}
            },
            "shape": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "shape",
                "excludes": {},
                "default": "flag",
                "products": {
                  "highstock": 1
                },
                "description": "The shape of the marker. Can be one of \"flag\", \"circlepin\", \"squarepin\",\nor an image on the format `url(/path-to-image.jpg)`. Individual\nshapes can also be set for each point."
              },
              "subtree": {}
            },
            "stackDistance": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "stackDistance",
                "excludes": {},
                "default": 12,
                "products": {
                  "highstock": 1
                },
                "description": "When multiple flags in the same series fall on the same value, this\nnumber determines the vertical offset between them."
              },
              "subtree": {}
            },
            "textAlign": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "textAlign",
                "excludes": {},
                "default": "center",
                "products": {
                  "highstock": 1
                },
                "description": "Text alignment for the text inside the flag."
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Specific tooltip options for flag series. Flag series tooltips are\ndifferent from most other types in that a flag doesn't have a data\nvalue, so the tooltip rather displays the `text` option for each\npoint.",
                "extends": "plotOptions.series.tooltip"
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "{point.text}<br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "threshold": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": -30,
                "products": {
                  "highstock": 1
                },
                "description": "The y position of the top left corner of the flag relative to either\nthe series (if onSeries is defined), or the x axis. Defaults to\n`-30`."
              },
              "subtree": {}
            },
            "fillColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "fillColor",
                "excludes": {},
                "default": "#ffffff",
                "products": {
                  "highstock": 1
                },
                "description": "The fill color for the flags."
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 1,
                "products": {
                  "highstock": 1
                },
                "description": "The pixel width of the flag's line/border."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "extends": "plotOptions.column.states.hover"
                  },
                  "subtree": {
                    "lineColor": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "lineColor",
                        "excludes": {},
                        "default": "#000000",
                        "products": {
                          "highstock": 1
                        },
                        "description": "The color of the line/border of the flag."
                      },
                      "subtree": {}
                    },
                    "fillColor": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "fillColor",
                        "excludes": {},
                        "default": "#ccd6eb",
                        "products": {
                          "highstock": 1
                        },
                        "description": "The fill or background color of the flag."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "default": "{ \"fontSize\": \"11px\", \"fontWeight\": \"bold\" }",
                "products": {
                  "highstock": 1
                },
                "description": "The text styles of the flag.\n\nIn styled mode, the styles are set in the\n`.highcharts-flag-series .highcharts-point` rule."
              },
              "subtree": {
                "fontSize": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fontSize",
                    "excludes": {},
                    "default": "11px"
                  },
                  "subtree": {}
                },
                "fontWeight": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fontWeight",
                    "excludes": {},
                    "default": "bold"
                  },
                  "subtree": {}
                }
              }
            },
            "onKey": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "onKey",
                "excludes": {},
                "default": "y",
                "products": {
                  "highstock": 1
                },
                "description": "In case the flag is placed on a series, on what point key to place\nit. Line and columns have one key, `y`. In range or OHLC-type series,\nhowever, the flag can optionally be placed on the `open`, `high`,\n `low` or `close` key."
              },
              "subtree": {}
            },
            "onSeries": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "onSeries",
                "excludes": {},
                "default": "undefined",
                "products": {
                  "highstock": 1
                },
                "description": "The id of the series that the flags should be drawn on. If no id\nis given, the flags are drawn on the x axis."
              },
              "subtree": {}
            },
            "title": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "title",
                "excludes": {},
                "default": "A",
                "products": {
                  "highstock": 1
                },
                "description": "The text to display on each flag. This can be defined on series level,\n or individually for each point. Defaults to `\"A\"`."
              },
              "subtree": {}
            },
            "useHTML": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "useHTML",
                "excludes": {},
                "default": "false",
                "products": {
                  "highstock": 1
                },
                "description": "Whether to use HTML to render the flag texts. Using HTML allows for\nadvanced formatting, images and reliable bi-directional text rendering.\nNote that exported images won't respect the HTML, and that HTML\nwon't respect Z-index settings."
              },
              "subtree": {}
            },
            "lineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "lineColor",
                "excludes": {},
                "default": "#000000",
                "products": {
                  "highstock": 1
                },
                "description": "The color of the line/border of the flag.\n\nIn styled mode, the stroke is set in the\n`.highcharts-flag-series.highcharts-point` rule."
              },
              "subtree": {}
            }
          }
        },
        "ohlc": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "ohlc",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "An OHLC chart is a style of financial chart used to describe price\nmovements over time. It displays open, high, low and close values per data\npoint.",
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highstock": 1
                },
                "description": "The pixel width of the line/border. Defaults to `1`."
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            },
            "threshold": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "extends": "plotOptions.column.states.hover"
                  },
                  "subtree": {
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": "3",
                        "products": {
                          "highstock": 1
                        },
                        "description": "The pixel width of the line representing the OHLC point."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "stickyTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "stickyTracking",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {}
              },
              "subtree": {
                "groupPixelWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "groupPixelWidth",
                    "excludes": {},
                    "default": "5",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The approximate pixel width of each group. If for example a series\nwith 30 points is displayed over a 600 pixel wide plot area, no grouping\nis performed. If however the series contains so many points that\nthe spacing is less than the groupPixelWidth, Highcharts will try\nto group it into appropriate groups so that each is more or less\ntwo pixels wide. Defaults to `5`."
                  },
                  "subtree": {}
                }
              }
            },
            "upColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "upColor",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Line color for up points."
              },
              "subtree": {}
            }
          }
        },
        "pie": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "pie",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A pie chart is a circular graphic which is divided into slices to illustrate\nnumerical proportion.",
            "extends": "{plotOptions.line}"
          },
          "subtree": {
            "events": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "events",
                "excludes": {}
              },
              "subtree": {
                "checkboxClick": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "checkboxClick",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Fires when the checkbox next to the point name in the legend is clicked.\nOne parameter, event, is passed to the function. The state of the\ncheckbox is found by event.checked. The checked item is found by\nevent.item. Return false to prevent the default action which is to\ntoggle the select state of the series."
                  },
                  "subtree": {}
                },
                "legendItemClick": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "legendItemClick",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Not applicable to pies, as the legend item is per point. See point.\nevents."
                  },
                  "subtree": {}
                }
              }
            },
            "point": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "point",
                "excludes": {}
              },
              "subtree": {
                "events": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "events",
                    "excludes": {}
                  },
                  "subtree": {
                    "legendItemClick": {
                      "meta": {
                        "types": {
                          "function": 1
                        },
                        "name": "legendItemClick",
                        "excludes": {},
                        "products": {
                          "highcharts": 1
                        },
                        "description": "Fires when the legend item belonging to the pie point (slice) is\nclicked. The `this` keyword refers to the point itself. One parameter,\n`event`, is passed to the function, containing common event information. The\ndefault action is to toggle the visibility of the point. This can be\nprevented by calling `event.preventDefault()`."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "center": {
              "meta": {
                "types": {
                  "array": "(String|Number)"
                },
                "name": "center",
                "excludes": {},
                "default": "[null, null]",
                "products": {
                  "highcharts": 1
                },
                "description": "The center of the pie chart relative to the plot area. Can be percentages\nor pixel values. The default behaviour (as of 3.0) is to center\nthe pie so that all slices and data labels are within the plot area.\nAs a consequence, the pie may actually jump around in a chart with\ndynamic values, as the data labels move. In that case, the center\nshould be explicitly set, for example to `[\"50%\", \"50%\"]`."
              },
              "subtree": {}
            },
            "clip": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "clip",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "extends": "plotOptions.series.dataLabels"
              },
              "subtree": {
                "distance": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "distance",
                    "excludes": {},
                    "default": "30",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The distance of the data label from the pie's edge. Negative numbers\nput the data label on top of the pie slices. Connectors are only\nshown for data labels outside the pie."
                  },
                  "subtree": {}
                },
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true,
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Enable or disable the data labels."
                  },
                  "subtree": {}
                },
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "default": 0
                  },
                  "subtree": {}
                },
                "connectorColor": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "connectorColor",
                    "excludes": {},
                    "default": "{point.color}",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The color of the line connecting the data label to the pie slice.\nThe default color is the same as the point's color.\n\nIn styled mode, the connector stroke is given in the\n`.highcharts-data-label-connector` class."
                  },
                  "subtree": {}
                },
                "connectorPadding": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "connectorPadding",
                    "excludes": {},
                    "default": "5",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The distance from the data label to the connector."
                  },
                  "subtree": {}
                },
                "connectorWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "connectorWidth",
                    "excludes": {},
                    "default": "1",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The width of the line connecting the data label to the pie slice.\n\n\nIn styled mode, the connector stroke width is given in the\n`.highcharts-data-label-connector` class."
                  },
                  "subtree": {}
                },
                "softConnector": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "softConnector",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Whether to render the connector as a soft arc or a line with sharp\nbreak."
                  },
                  "subtree": {}
                }
              }
            },
            "ignoreHiddenPoint": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "ignoreHiddenPoint",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "Equivalent to [chart.ignoreHiddenSeries](#chart.ignoreHiddenSeries),\nthis option tells whether the series shall be redrawn as if the\nhidden point were `null`.\n\nThe default value changed from `false` to `true` with Highcharts\n3.0."
              },
              "subtree": {}
            },
            "legendType": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "legendType",
                "excludes": {},
                "default": "point"
              },
              "subtree": {}
            },
            "size": {
              "meta": {
                "types": {
                  "string": 1,
                  "number": 1
                },
                "name": "size",
                "excludes": {},
                "default": null,
                "products": {
                  "highcharts": 1
                },
                "description": "The diameter of the pie relative to the plot area. Can be a percentage\nor pixel value. Pixel values are given as integers. The default\nbehaviour (as of 3.0) is to scale to the plot area and give room\nfor data labels within the plot area.\n[slicedOffset](#plotOptions.pie.slicedOffset) is also included \nin the default size calculation. As a consequence, the size\nof the pie may vary when points are updated and data labels more\naround. In that case it is best to set a fixed value, for example\n`\"75%\"`."
              },
              "subtree": {}
            },
            "showInLegend": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInLegend",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to display this particular series or series type in the\nlegend. Since 2.1, pies are not shown in the legend by default."
              },
              "subtree": {}
            },
            "slicedOffset": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "slicedOffset",
                "excludes": {},
                "default": "10",
                "products": {
                  "highcharts": 1
                },
                "description": "If a point is sliced, moved out from the center, how many pixels\nshould it be moved?."
              },
              "subtree": {}
            },
            "stickyTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "stickyTracking",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1
                },
                "description": "Sticky tracking of mouse events. When true, the `mouseOut` event\non a series isn't triggered until the mouse moves over another series,\nor out of the plot area. When false, the `mouseOut` event on a\nseries is triggered when the mouse leaves the area around the series'\ngraph or markers. This also implies the tooltip. When `stickyTracking`\nis false and `tooltip.shared` is false, the tooltip will be hidden\nwhen moving the mouse between series."
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "followPointer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "followPointer",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                }
              }
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#ffffff",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the border surrounding each slice. When `null`, the\nborder takes the same color as the slice fill. This can be used\ntogether with a `borderWidth` to fill drawing gaps created by antialiazing\nartefacts in borderless pies.\n\nIn styled mode, the border stroke is given in the `.highcharts-point` class."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the border surrounding each slice.\n\nWhen setting the border width to 0, there may be small gaps between\nthe slices due to SVG antialiasing artefacts. To work around this,\nkeep the border width at 0.5 or 1, but set the `borderColor` to\n`null` instead.\n\nIn styled mode, the border stroke width is given in the `.highcharts-point` class."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "extends": "plotOptions.series.states.hover"
                  },
                  "subtree": {
                    "brightness": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "brightness",
                        "excludes": {},
                        "default": 0.1,
                        "products": {
                          "highcharts": 1
                        },
                        "description": "How much to brighten the point on interaction. Requires the main\ncolor to be defined in hex or rgb(a) format.\n\nIn styled mode, the hover brightness is by default replaced\nby a fill-opacity given in the `.highcharts-point-hover` class."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "colors": {
              "meta": {
                "types": {
                  "array": "Color"
                },
                "name": "colors",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "A series specific or series type specific color set to use instead\nof the global [colors](#colors)."
              },
              "subtree": {}
            },
            "endAngle": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "endAngle",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The end angle of the pie in degrees where 0 is top and 90 is right.\nDefaults to `startAngle` plus 360."
              },
              "subtree": {}
            },
            "innerSize": {
              "meta": {
                "types": {
                  "string": 1,
                  "number": 1
                },
                "name": "innerSize",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "The size of the inner diameter for the pie. A size greater than 0\nrenders a donut chart. Can be a percentage or pixel value. Percentages\nare relative to the pie size. Pixel values are given as integers.\n\n\nNote: in Highcharts < 4.1.2, the percentage was relative to the plot\narea, not the pie size."
              },
              "subtree": {}
            },
            "minSize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "minSize",
                "excludes": {},
                "default": "80",
                "products": {
                  "highcharts": 1
                },
                "description": "The minimum size for a pie in response to auto margins. The pie will\ntry to shrink to make room for data labels in side the plot area,\n but only to this size."
              },
              "subtree": {}
            },
            "startAngle": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "startAngle",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "The start angle of the pie slices in degrees where 0 is top and 90\nright."
              },
              "subtree": {}
            },
            "depth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "depth",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "The thickness of a 3D pie. Requires `highcharts-3d.js`"
              },
              "subtree": {}
            }
          }
        },
        "scatter": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "scatter",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A scatter plot uses cartesian coordinates to display values for two variables\nfor a set of data.",
            "extends": "{plotOptions.line}"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 0,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The width of the line connecting the data points."
              },
              "subtree": {}
            },
            "findNearestPointBy": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "findNearestPointBy",
                "excludes": {},
                "default": "xy"
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A configuration object for the tooltip rendering of each single\nseries. Properties are inherited from <a class=\"internal\">#tooltip</a>.\nOverridable properties are `headerFormat`, `pointFormat`, `yDecimals`,\n`xDateFormat`, `yPrefix` and `ySuffix`. Unlike other series, in\na scatter plot the series.name by default shows in the headerFormat\nand point.x and point.y in the pointFormat."
              },
              "subtree": {
                "headerFormat": {
                  "meta": {
                    "types": {},
                    "name": "headerFormat",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "stickyTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "stickyTracking",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Sticky tracking of mouse events. When true, the `mouseOut` event\non a series isn't triggered until the mouse moves over another series,\nor out of the plot area. When false, the `mouseOut` event on a series\nis triggered when the mouse leaves the area around the series' graph\nor markers. This also implies the tooltip. When `stickyTracking`\nis false and `tooltip.shared` is false, the tooltip will be hidden\nwhen moving the mouse between series."
              },
              "subtree": {}
            }
          }
        },
        "line": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "line",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A line series displays information as a series of data points connected by\nstraight line segments.",
            "extends": "plotOptions.series"
          },
          "subtree": {
            "linecap": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "linecap",
                "excludes": {},
                "default": "round",
                "description": "The SVG value used for the `stroke-linecap` and `stroke-linejoin`\nof a line graph. Round means that lines are rounded in the ends and\nbends."
              },
              "subtree": {}
            }
          }
        },
        "spline": {
          "meta": {
            "types": {},
            "name": "spline",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A spline series is a special type of line series, where the segments between\nthe data points are smoothed.",
            "extends": "plotOptions.series"
          },
          "subtree": {}
        },
        "scatter3d": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "scatter3d",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A 3D scatter plot uses x, y and z coordinates to display values for three\nvariables for a set of data.",
            "extends": "{plotOptions.scatter}"
          },
          "subtree": {
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>z: <b>{point.z}</b><br/>"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "arearange": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "arearange",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The area range series is a carteseian series with higher and lower values\nfor each point along an X axis, where the area between the values is shaded.\nRequires `highcharts-more.js`.",
            "extends": "plotOptions.area"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 1,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Pixel width of the arearange graph line."
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<span style=\"color:{series.color}\">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "trackByArea": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "trackByArea",
                "excludes": {},
                "default": true,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether the whole area or just the line should respond to mouseover\ntooltips and other mouse or touch events."
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Extended data labels for range series types. Range series data labels\nhave no `x` and `y` options. Instead, they have `xLow`, `xHigh`,\n`yLow` and `yHigh` options to allow the higher and lower data label\nsets individually.",
                "extends": "plotOptions.series.dataLabels"
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "xLow": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "xLow",
                    "excludes": {},
                    "default": 0,
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "X offset of the lower data labels relative to the point value."
                  },
                  "subtree": {}
                },
                "xHigh": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "xHigh",
                    "excludes": {},
                    "default": 0,
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "X offset of the higher data labels relative to the point value."
                  },
                  "subtree": {}
                },
                "yLow": {
                  "meta": {
                    "types": {
                      "number": 1,
                      "string": 1
                    },
                    "name": "yLow",
                    "excludes": {},
                    "default": "16",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Y offset of the lower data labels relative to the point value."
                  },
                  "subtree": {}
                },
                "yHigh": {
                  "meta": {
                    "types": {
                      "number": 1,
                      "string": 1
                    },
                    "name": "yHigh",
                    "excludes": {},
                    "default": "-6",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Y offset of the higher data labels relative to the point value."
                  },
                  "subtree": {}
                }
              }
            },
            "shadow": {
              "meta": {
                "types": {
                  "boolean": 1,
                  "object": 1
                },
                "name": "shadow",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to apply a drop shadow to the graph line. Since 2.3 the shadow\ncan be an object configuration containing `color`, `offsetX`, `offsetY`,\n`opacity` and `width`."
              },
              "subtree": {}
            }
          }
        },
        "areasplinerange": {
          "meta": {
            "types": {},
            "name": "areasplinerange",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The area spline range is a cartesian series type with higher and\nlower Y values along an X axis. The area inside the range is colored, and\nthe graph outlining the area is a smoothed spline. Requires\n`highcharts-more.js`.",
            "extends": "plotOptions.arearange"
          },
          "subtree": {}
        },
        "boxplot": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "boxplot",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A box plot is a convenient way of depicting groups of data through their\nfive-number summaries: the smallest observation (sample minimum), lower\nquartile (Q1), median (Q2), upper quartile (Q3), and largest observation\n(sample maximum).",
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "threshold": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {},
                    "name": "pointFormat",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            },
            "whiskerLength": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "whiskerLength",
                "excludes": {},
                "default": "50%",
                "products": {
                  "highcharts": 1
                },
                "description": "The length of the whiskers, the horizontal lines marking low and\nhigh values. It can be a numerical pixel value, or a percentage\nvalue of the box width. Set `0` to disable whiskers."
              },
              "subtree": {}
            },
            "fillColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "fillColor",
                "excludes": {},
                "default": "#ffffff",
                "products": {
                  "highcharts": 1
                },
                "description": "The fill color of the box.\n\nIn styled mode, the fill color can be set with the\n`.highcharts-boxplot-box` class."
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 1,
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the line surrounding the box. If any of\n[stemWidth](#plotOptions.boxplot.stemWidth),\n[medianWidth](#plotOptions.boxplot.medianWidth)\nor [whiskerWidth](#plotOptions.boxplot.whiskerWidth) are `null`,\nthe lineWidth also applies to these lines."
              },
              "subtree": {}
            },
            "medianWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "medianWidth",
                "excludes": {},
                "default": 2,
                "products": {
                  "highcharts": 1
                },
                "description": "The pixel width of the median line. If `null`, the\n[lineWidth](#plotOptions.boxplot.lineWidth) is used.\n\nIn styled mode, the median stroke width can be set with the\n`.highcharts-boxplot-median` class."
              },
              "subtree": {}
            },
            "whiskerWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "whiskerWidth",
                "excludes": {},
                "default": 2,
                "products": {
                  "highcharts": 1
                },
                "description": "The line width of the whiskers, the horizontal lines marking low and\nhigh values. When `null`, the general\n[lineWidth](#plotOptions.boxplot.lineWidth) applies.\n\nIn styled mode, the whisker stroke width can be set with the\n`.highcharts-boxplot-whisker` class."
              },
              "subtree": {}
            },
            "medianColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "medianColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the median line. If `null`, the general series color\napplies.\n\nIn styled mode, the median stroke width can be set with the\n`.highcharts-boxplot-median` class."
              },
              "subtree": {}
            },
            "stemColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "stemColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the stem, the vertical line extending from the box to\nthe whiskers. If `null`, the series color is used.\n\nIn styled mode, the stem stroke can be set with the\n`.highcharts-boxplot-stem` class."
              },
              "subtree": {}
            },
            "stemDashStyle": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "stemDashStyle",
                "excludes": {},
                "default": "Solid",
                "products": {
                  "highcharts": 1
                },
                "description": "The dash style of the stem, the vertical line extending from the\nbox to the whiskers."
              },
              "subtree": {}
            },
            "stemWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "stemWidth",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the stem, the vertical line extending from the box to\nthe whiskers. If `null`, the width is inherited from the\n[lineWidth](#plotOptions.boxplot.lineWidth) option.\n\nIn styled mode, the stem stroke width can be set with the\n`.highcharts-boxplot-stem` class."
              },
              "subtree": {}
            },
            "whiskerColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "whiskerColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the whiskers, the horizontal lines marking low and high\nvalues. When `null`, the general series color is used.\n\nIn styled mode, the whisker stroke can be set with the\n`.highcharts-boxplot-whisker` class ."
              },
              "subtree": {}
            }
          }
        },
        "bubble": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "bubble",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A bubble series is a three dimensional series type where each point renders\nan X, Y and Z value. Each points is drawn as a bubble where the position\nalong the X and Y axes mark the X and Y values, and the size of the bubble\nrelates to the Z value. Requires `highcharts-more.js`.",
            "extends": "plotOptions.scatter"
          },
          "subtree": {
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "inside": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "inside",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "middle"
                  },
                  "subtree": {}
                }
              }
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {},
                "extends": "plotOptions.series.marker"
              },
              "subtree": {
                "lineColor": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "lineColor",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "lineWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "lineWidth",
                    "excludes": {},
                    "default": 1
                  },
                  "subtree": {}
                },
                "fillOpacity": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "fillOpacity",
                    "excludes": {},
                    "default": 0.5,
                    "description": "The fill opacity of the bubble markers."
                  },
                  "subtree": {}
                },
                "radius": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "radius",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                },
                "states": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "states",
                    "excludes": {}
                  },
                  "subtree": {
                    "hover": {
                      "meta": {
                        "types": {
                          "object": 1
                        },
                        "name": "hover",
                        "excludes": {}
                      },
                      "subtree": {
                        "radiusPlus": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "radiusPlus",
                            "excludes": {},
                            "default": 0
                          },
                          "subtree": {}
                        }
                      }
                    }
                  }
                },
                "symbol": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "symbol",
                    "excludes": {},
                    "default": "circle",
                    "description": "A predefined shape or symbol for the marker. Possible values are\n\"circle\", \"square\", \"diamond\", \"triangle\" and \"triangle-down\".\n\nAdditionally, the URL to a graphic can be given on the form\n`url(graphic.png)`. Note that for the image to be applied to exported\ncharts, its URL needs to be accessible by the export server.\n\nCustom callbacks for symbol path generation can also be added to\n`Highcharts.SVGRenderer.prototype.symbols`. The callback is then\nused by its method name, as shown in the demo."
                  },
                  "subtree": {}
                }
              }
            },
            "minSize": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "minSize",
                "excludes": {},
                "default": 8,
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Minimum bubble size. Bubbles will automatically size between the\n`minSize` and `maxSize` to reflect the `z` value of each bubble.\nCan be either pixels (when no unit is given), or a percentage of\nthe smallest one of the plot width and height."
              },
              "subtree": {}
            },
            "maxSize": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "maxSize",
                "excludes": {},
                "default": "20%",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Maximum bubble size. Bubbles will automatically size between the\n`minSize` and `maxSize` to reflect the `z` value of each bubble.\nCan be either pixels (when no unit is given), or a percentage of\nthe smallest one of the plot width and height."
              },
              "subtree": {}
            },
            "softThreshold": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "softThreshold",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1
                },
                "description": "When this is true, the series will not cause the Y axis to cross\nthe zero plane (or [threshold](#plotOptions.series.threshold) option)\nunless the data actually crosses the plane.\n\nFor example, if `softThreshold` is `false`, a series of 0, 1, 2,\n3 will make the Y axis show negative values according to the `minPadding`\noption. If `softThreshold` is `true`, the Y axis starts at 0."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "halo": {
                      "meta": {
                        "types": {
                          "object": 1
                        },
                        "name": "halo",
                        "excludes": {}
                      },
                      "subtree": {
                        "size": {
                          "meta": {
                            "types": {
                              "number": 1
                            },
                            "name": "size",
                            "excludes": {},
                            "default": 5
                          },
                          "subtree": {}
                        }
                      }
                    }
                  }
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "({point.x}, {point.y}), Size: {point.z}"
                  },
                  "subtree": {}
                }
              }
            },
            "turboThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "turboThreshold",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "zThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zThreshold",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "When [displayNegative](#plotOptions.bubble.displayNegative) is `false`,\nbubbles with lower Z values are skipped. When `displayNegative`\nis `true` and a [negativeColor](#plotOptions.bubble.negativeColor)\nis given, points with lower Z is colored."
              },
              "subtree": {}
            },
            "zoneAxis": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "zoneAxis",
                "excludes": {},
                "default": "z"
              },
              "subtree": {}
            },
            "displayNegative": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "displayNegative",
                "excludes": {},
                "default": "true",
                "description": "Whether to display negative sized bubbles. The threshold is given\nby the [zThreshold](#plotOptions.bubble.zThreshold) option, and negative\nbubbles can be visualized by setting\n[negativeColor](#plotOptions.bubble.negativeColor)."
              },
              "subtree": {}
            },
            "negativeColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "negativeColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "When a point's Z value is below the\n[zThreshold](#plotOptions.bubble.zThreshold) setting, this color is used."
              },
              "subtree": {}
            },
            "sizeBy": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "sizeBy",
                "excludes": {},
                "default": "area",
                "description": "Whether the bubble's value should be represented by the area or the\nwidth of the bubble. The default, `area`, corresponds best to the\nhuman perception of the size of each bubble."
              },
              "subtree": {}
            },
            "sizeByAbsoluteValue": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "sizeByAbsoluteValue",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "When this is true, the absolute value of z determines the size of\nthe bubble. This means that with the default `zThreshold` of 0, a\nbubble of value -1 will have the same size as a bubble of value 1,\nwhile a bubble of value 0 will have a smaller size according to\n`minSize`."
              },
              "subtree": {}
            },
            "zMax": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zMax",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The minimum for the Z value range. Defaults to the highest Z value\nin the data."
              },
              "subtree": {}
            },
            "zMin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zMin",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The minimum for the Z value range. Defaults to the lowest Z value\nin the data."
              },
              "subtree": {}
            }
          }
        },
        "columnrange": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "columnrange",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The column range is a cartesian series type with higher and lower\nY values along an X axis. Requires `highcharts-more.js`. To display\nhorizontal bars, set [chart.inverted](#chart.inverted) to `true`.",
            "extends": "plotOptions.column"
          },
          "subtree": {
            "pointRange": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "pointRange",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {},
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "errorbar": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "errorbar",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Error bars are a graphical representation of the variability of data and are\nused on graphs to indicate the error, or uncertainty in a reported\nmeasurement.",
            "extends": "{plotOptions.boxplot}"
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#000000",
                "products": {
                  "highcharts": 1
                },
                "description": "The main color of the bars. This can be overridden by\n[stemColor](#plotOptions.errorbar.stemColor) and\n[whiskerColor](#plotOptions.errorbar.whiskerColor) individually."
              },
              "subtree": {}
            },
            "grouping": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "grouping",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "linkedTo": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "linkedTo",
                "excludes": {},
                "default": ":previous",
                "products": {
                  "highcharts": 1
                },
                "description": "The parent series of the error bar. The default value links it to\nthe previous series. Otherwise, use the id of the parent series."
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "<span style=\"color:{point.color}\">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "whiskerWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "whiskerWidth",
                "excludes": {},
                "default": null,
                "products": {
                  "highcharts": 1
                },
                "description": "The line width of the whiskers, the horizontal lines marking low\nand high values. When `null`, the general\n[lineWidth](#plotOptions.errorbar.lineWidth) applies."
              },
              "subtree": {}
            }
          }
        },
        "gauge": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "gauge",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Gauges are circular plots displaying one or more values with a dial pointing\nto values along the perimeter.",
            "extends": "{plotOptions.line}"
          },
          "subtree": {
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Data labels for the gauge. For gauges, the data labels are enabled\nby default and shown in a bordered box below the point.",
                "extends": "plotOptions.series.dataLabels"
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true,
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "Enable or disable the data labels."
                  },
                  "subtree": {}
                },
                "defer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "defer",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": 15,
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The y position offset of the label relative to the center of the\ngauge."
                  },
                  "subtree": {}
                },
                "borderRadius": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderRadius",
                    "excludes": {},
                    "default": 3,
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The border radius in pixels for the gauge's data label."
                  },
                  "subtree": {}
                },
                "crop": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "crop",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "top",
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The vertical alignment of the data label."
                  },
                  "subtree": {}
                },
                "zIndex": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "zIndex",
                    "excludes": {},
                    "default": 2,
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The Z index of the data labels. A value of 2 display them behind\nthe dial."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "default": 1,
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The border width in pixels for the gauge data label."
                  },
                  "subtree": {}
                },
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "default": "#cccccc",
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "The border color for the data label."
                  },
                  "subtree": {}
                }
              }
            },
            "dial": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dial",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Options for the dial or arrow pointer of the gauge.\n\nIn styled mode, the dial is styled with the\n`.highcharts-gauge-series .highcharts-dial` rule."
              },
              "subtree": {
                "baseLength": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "baseLength",
                    "excludes": {},
                    "default": "70%",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The length of the dial's base part, relative to the total radius\nor length of the dial."
                  },
                  "subtree": {}
                },
                "baseWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "baseWidth",
                    "excludes": {},
                    "default": "3",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The pixel width of the base of the gauge dial. The base is the part\nclosest to the pivot, defined by baseLength."
                  },
                  "subtree": {}
                },
                "radius": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "radius",
                    "excludes": {},
                    "default": "80%",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The radius or length of the dial, in percentages relative to the\nradius of the gauge itself."
                  },
                  "subtree": {}
                },
                "rearLength": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "rearLength",
                    "excludes": {},
                    "default": "10%",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The length of the dial's rear end, the part that extends out on the\nother side of the pivot. Relative to the dial's length."
                  },
                  "subtree": {}
                },
                "topWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "topWidth",
                    "excludes": {},
                    "default": "1",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The width of the top of the dial, closest to the perimeter. The pivot\nnarrows in from the base to the top."
                  },
                  "subtree": {}
                },
                "backgroundColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "backgroundColor",
                    "excludes": {},
                    "default": "#000000",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The background or fill color of the gauge's dial."
                  },
                  "subtree": {}
                },
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "default": "#cccccc",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The border color or stroke of the gauge's dial. By default, the borderWidth\nis 0, so this must be set in addition to a custom border color."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The width of the gauge dial border in pixels."
                  },
                  "subtree": {}
                }
              }
            },
            "pivot": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "pivot",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Options for the pivot or the center point of the gauge.\n\nIn styled mode, the pivot is styled with the\n`.highcharts-gauge-series .highcharts-pivot` rule."
              },
              "subtree": {
                "radius": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "radius",
                    "excludes": {},
                    "default": "5",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The pixel radius of the pivot."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The border or stroke width of the pivot."
                  },
                  "subtree": {}
                },
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "default": "#cccccc",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The border or stroke color of the pivot. In able to change this,\nthe borderWidth must also be set to something other than the default\n0."
                  },
                  "subtree": {}
                },
                "backgroundColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "backgroundColor",
                    "excludes": {},
                    "default": "#000000",
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The background color or fill of the pivot."
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "headerFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "headerFormat",
                    "excludes": {},
                    "default": ""
                  },
                  "subtree": {}
                }
              }
            },
            "showInLegend": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showInLegend",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to display this particular series or series type in the\nlegend. Defaults to false for gauge series."
              },
              "subtree": {}
            },
            "wrap": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "wrap",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "When this option is `true`, the dial will wrap around the axes. For\ninstance, in a full-range gauge going from 0 to 360, a value of 400\nwill point to 40\\. When `wrap` is `false`, the dial stops at 360."
              },
              "subtree": {}
            },
            "overshoot": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "overshoot",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "Allow the dial to overshoot the end of the perimeter axis by this\nmany degrees. Say if the gauge axis goes from 0 to 60, a value of\n100, or 1000, will show 5 degrees beyond the end of the axis when this\noption is set to 5."
              },
              "subtree": {}
            }
          }
        },
        "polygon": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "polygon",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A polygon series can be used to draw any freeform shape in the cartesian\ncoordinate system. A fill is applied with the `color` option, and\nstroke is applied through `lineWidth` and `lineColor` options. Requires\nthe `highcharts-more.js` file.",
            "extends": "plotOptions.scatter"
          },
          "subtree": {
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "states": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "states",
                    "excludes": {}
                  },
                  "subtree": {
                    "hover": {
                      "meta": {
                        "types": {
                          "object": 1
                        },
                        "name": "hover",
                        "excludes": {}
                      },
                      "subtree": {
                        "enabled": {
                          "meta": {
                            "types": {
                              "boolean": 1
                            },
                            "name": "enabled",
                            "excludes": {},
                            "default": false
                          },
                          "subtree": {}
                        }
                      }
                    }
                  }
                }
              }
            },
            "stickyTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "stickyTracking",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "followPointer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "followPointer",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": ""
                  },
                  "subtree": {}
                }
              }
            },
            "trackByArea": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "trackByArea",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            }
          }
        },
        "waterfall": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "waterfall",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "A waterfall chart displays sequentially introduced positive or negative\nvalues in cumulative columns.",
            "extends": "{plotOptions.column}"
          },
          "subtree": {
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "inside": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "inside",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                }
              }
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 1,
                "products": {
                  "highcharts": 1
                },
                "description": "The width of the line connecting waterfall columns."
              },
              "subtree": {}
            },
            "lineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "lineColor",
                "excludes": {},
                "default": "#333333",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the line that connects columns in a waterfall series.\n\nIn styled mode, the stroke can be set with the `.highcharts-graph` class."
              },
              "subtree": {}
            },
            "dashStyle": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "dashStyle",
                "excludes": {},
                "default": "Dot",
                "products": {
                  "highcharts": 1
                },
                "description": "A name for the dash style to use for the line connecting the columns\nof the waterfall series. Possible values:\n\n*   Solid\n*   ShortDash\n*   ShortDot\n*   ShortDashDot\n*   ShortDashDotDot\n*   Dot\n*   Dash\n*   LongDash\n*   DashDot\n*   LongDashDot\n*   LongDashDotDot\n\nIn styled mode, the stroke dash-array can be set with the\n`.highcharts-graph` class."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#333333",
                "products": {
                  "highcharts": 1
                },
                "description": "The color of the border of each waterfall column.\n\nIn styled mode, the border stroke can be set with the\n`.highcharts-point` class."
              },
              "subtree": {}
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "lineWidthPlus": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidthPlus",
                        "excludes": {},
                        "default": 0
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "upColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "upColor",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The color used specifically for positive point columns. When not\nspecified, the general series color is used.\n\nIn styled mode, the waterfall colors can be set with the\n`.highcharts-point-negative`, `.highcharts-sum` and\n`.highcharts-intermediate-sum` classes."
              },
              "subtree": {}
            }
          }
        },
        "heatmap": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "heatmap",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "A heatmap is a graphical representation of data where the individual values\ncontained in a matrix are represented as colors.",
            "extends": "{plotOptions.scatter}"
          },
          "subtree": {
            "animation": {
              "meta": {
                "types": {
                  "boolean": 1,
                  "object": 1
                },
                "name": "animation",
                "excludes": {},
                "default": false,
                "description": "Animation is disabled by default on the heatmap series."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": 0,
                "description": "The border width for each heat map item."
              },
              "subtree": {}
            },
            "nullColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "nullColor",
                "excludes": {},
                "default": "#f7f7f7",
                "description": "The color applied to null points. In styled mode, a general CSS class is\napplied instead."
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "inside": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "inside",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "middle"
                  },
                  "subtree": {}
                },
                "crop": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "crop",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "overflow": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "overflow",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "padding": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "padding",
                    "excludes": {},
                    "default": 0
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "{point.x}, {point.y}: {point.value}<br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "brightness": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "brightness",
                        "excludes": {},
                        "default": 0.2,
                        "products": {
                          "highcharts": 1,
                          "highmaps": 1
                        },
                        "description": "How much to brighten the point on interaction. Requires the main\ncolor to be defined in hex or rgb(a) format.\n\nIn styled mode, the hover brightening is by default replaced\nwith a fill-opacity set in the `.highcharts-point:hover` rule."
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "pointPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointPadding",
                "excludes": {},
                "default": "0",
                "description": "Padding between the points in the heatmap."
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "The main color of the series. In heat maps this color is rarely used,\nas we mostly use the color to denote the value of each point. Unless\noptions are set in the [colorAxis](#colorAxis), the default value\nis pulled from the [options.colors](#colors) array."
              },
              "subtree": {}
            },
            "colsize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "colsize",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "The column size - how many X axis units each column in the heatmap\nshould span."
              },
              "subtree": {}
            },
            "rowsize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rowsize",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "The row size - how many Y axis units each heatmap row should span."
              },
              "subtree": {}
            }
          }
        },
        "mapbubble": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "mapbubble",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "A map bubble series is a bubble series laid out on top of a map series,\nwhere each bubble is tied to a specific map area.",
            "extends": "{plotOptions.bubble}"
          },
          "subtree": {
            "animationLimit": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "animationLimit",
                "excludes": {},
                "default": 500
              },
              "subtree": {}
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "{point.name}: {point.z}"
                  },
                  "subtree": {}
                }
              }
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "The main color of the series. This color affects both the fill and\nthe stroke of the bubble. For enhanced control, use `marker` options."
              },
              "subtree": {}
            },
            "displayNegative": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "displayNegative",
                "excludes": {},
                "default": "true",
                "products": {
                  "highmaps": 1
                },
                "description": "Whether to display negative sized bubbles. The threshold is given\nby the [zThreshold](#plotOptions.mapbubble.zThreshold) option, and negative\nbubbles can be visualized by setting [negativeColor](#plotOptions.\nbubble.negativeColor)."
              },
              "subtree": {}
            },
            "maxSize": {
              "meta": {
                "types": {},
                "name": "maxSize",
                "excludes": {},
                "products": {
                  "highmaps": 1
                }
              },
              "subtree": {}
            },
            "minSize": {
              "meta": {
                "types": {},
                "name": "minSize",
                "excludes": {},
                "products": {
                  "highmaps": 1
                }
              },
              "subtree": {}
            },
            "negativeColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "negativeColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highmaps": 1
                },
                "description": "When a point's Z value is below the [zThreshold](#plotOptions.mapbubble.\nzThreshold) setting, this color is used."
              },
              "subtree": {}
            },
            "sizeBy": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "sizeBy",
                "excludes": {},
                "default": "area",
                "products": {
                  "highmaps": 1
                },
                "description": "Whether the bubble's value should be represented by the area or the\nwidth of the bubble. The default, `area`, corresponds best to the\nhuman perception of the size of each bubble."
              },
              "subtree": {}
            },
            "sizeByAbsoluteValue": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "sizeByAbsoluteValue",
                "excludes": {},
                "default": "false",
                "products": {
                  "highmaps": 1
                },
                "description": "When this is true, the absolute value of z determines the size of\nthe bubble. This means that with the default `zThreshold` of 0, a\nbubble of value -1 will have the same size as a bubble of value 1,\nwhile a bubble of value 0 will have a smaller size according to\n`minSize`."
              },
              "subtree": {}
            },
            "zMax": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zMax",
                "excludes": {},
                "default": "null",
                "products": {
                  "highmaps": 1
                },
                "description": "The minimum for the Z value range. Defaults to the highest Z value\nin the data."
              },
              "subtree": {}
            },
            "zMin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zMin",
                "excludes": {},
                "default": "null",
                "products": {
                  "highmaps": 1
                },
                "description": "The minimum for the Z value range. Defaults to the lowest Z value\nin the data."
              },
              "subtree": {}
            },
            "zThreshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zThreshold",
                "excludes": {},
                "default": "0",
                "products": {
                  "highmaps": 1
                },
                "description": "When [displayNegative](#plotOptions.mapbubble.displayNegative) is `false`,\nbubbles with lower Z values are skipped. When `displayNegative`\nis `true` and a [negativeColor](#plotOptions.mapbubble.negativeColor)\nis given, points with lower Z is colored."
              },
              "subtree": {}
            }
          }
        },
        "mapline": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "mapline",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "A mapline series is a special case of the map series where the value colors\nare applied to the strokes rather than the fills. It can also be used for\nfreeform drawing, like dividers, in the map.",
            "extends": "{plotOptions.map}"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highmaps": 1
                },
                "description": "The width of the map line."
              },
              "subtree": {}
            },
            "fillColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "fillColor",
                "excludes": {},
                "default": "none",
                "products": {
                  "highmaps": 1
                },
                "description": "Fill color for the map line shapes"
              },
              "subtree": {}
            }
          }
        },
        "mappoint": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "mappoint",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "A mappoint series is a special form of scatter series where the points can\nbe laid out in map coordinates on top of a map.",
            "extends": "plotOptions.scatter"
          },
          "subtree": {
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "crop": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "crop",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "defer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "defer",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "overflow": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "overflow",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "style",
                    "excludes": {}
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "#000000"
                      },
                      "subtree": {}
                    }
                  }
                },
                "format": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "format",
                    "excludes": {},
                    "default": "{point.name}"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "map": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "map",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "The map series is used for basic choropleth maps, where each map area has a\ncolor based on its value.",
            "extends": "{plotOptions.scatter}"
          },
          "subtree": {
            "allAreas": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "allAreas",
                "excludes": {},
                "default": true
              },
              "subtree": {}
            },
            "animation": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "animation",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "nullColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "nullColor",
                "excludes": {},
                "default": "#f7f7f7",
                "products": {
                  "highmaps": 1
                },
                "description": "The color to apply to null points.\n\nIn styled mode, the null point fill is set in the\n`.highcharts-null-point` class."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#cccccc"
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": 1
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "stickyTracking": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "stickyTracking",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "joinBy": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "joinBy",
                "excludes": {},
                "default": "hc-key"
              },
              "subtree": {}
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {}
              },
              "subtree": {
                "formatter": {
                  "meta": {
                    "types": {},
                    "name": "formatter",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "inside": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "inside",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "middle"
                  },
                  "subtree": {}
                },
                "crop": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "crop",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "overflow": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "overflow",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "padding": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "padding",
                    "excludes": {},
                    "default": 0
                  },
                  "subtree": {}
                }
              }
            },
            "tooltip": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "tooltip",
                "excludes": {}
              },
              "subtree": {
                "followPointer": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "followPointer",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "pointFormat": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pointFormat",
                    "excludes": {},
                    "default": "{point.name}: {point.value}<br/>"
                  },
                  "subtree": {}
                }
              }
            },
            "states": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "states",
                "excludes": {}
              },
              "subtree": {
                "normal": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "normal",
                    "excludes": {}
                  },
                  "subtree": {
                    "animation": {
                      "meta": {
                        "types": {
                          "boolean": 1
                        },
                        "name": "animation",
                        "excludes": {},
                        "default": true
                      },
                      "subtree": {}
                    }
                  }
                },
                "hover": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "hover",
                    "excludes": {}
                  },
                  "subtree": {
                    "halo": {
                      "meta": {
                        "types": {
                          "object": 1
                        },
                        "name": "halo",
                        "excludes": {},
                        "default": null
                      },
                      "subtree": {}
                    },
                    "brightness": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "brightness",
                        "excludes": {},
                        "default": 0.2
                      },
                      "subtree": {}
                    }
                  }
                },
                "select": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "select",
                    "excludes": {}
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "#cccccc"
                      },
                      "subtree": {}
                    }
                  }
                }
              }
            },
            "nullInteraction": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "nullInteraction",
                "excludes": {},
                "default": "false",
                "products": {
                  "highmaps": 1
                },
                "description": "Whether to allow pointer interaction like tooltips and mouse events\non null points."
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "lang": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "lang",
        "excludes": {},
        "description": "Language object. The language object is global and it can't be set\non each chart initiation. Instead, use `Highcharts.setOptions` to\nset it before any chart is initialized.\n\n<pre>Highcharts.setOptions({\n    lang: {\n        months: [\n            'Janvier', 'Février', 'Mars', 'Avril',\n            'Mai', 'Juin', 'Juillet', 'Août',\n            'Septembre', 'Octobre', 'Novembre', 'Décembre'\n        ],\n        weekdays: [\n            'Dimanche', 'Lundi', 'Mardi', 'Mercredi',\n            'Jeudi', 'Vendredi', 'Samedi'\n        ]\n    }\n});</pre>"
      },
      "subtree": {
        "accessibility": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "accessibility",
            "excludes": {},
            "description": "Configure the accessibility strings in the chart. Requires the \n[accessibility module](//code.highcharts.com/modules/accessibility.\njs) to be loaded. For a description of the module and information\non its features, see [Highcharts Accessibility](http://www.highcharts.\ncom/docs/chart-concepts/accessibility).\n\nFor more dynamic control over the accessibility functionality, see\n[accessibility.pointDescriptionFormatter](accessibility.\npointDescriptionFormatter),\n[accessibility.seriesDescriptionFormatter](accessibility.\nseriesDescriptionFormatter), and\n[accessibility.screenReaderSectionFormatter](accessibility.\nscreenReaderSectionFormatter)."
          },
          "subtree": {
            "screenReaderRegionLabel": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "screenReaderRegionLabel",
                "excludes": {},
                "default": "Chart screen reader information."
              },
              "subtree": {}
            },
            "navigationHint": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "navigationHint",
                "excludes": {},
                "default": "Use regions/landmarks to skip ahead to chart {#plural(numSeries, and navigate between data series,)}"
              },
              "subtree": {}
            },
            "defaultChartTitle": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "defaultChartTitle",
                "excludes": {},
                "default": "Chart"
              },
              "subtree": {}
            },
            "longDescriptionHeading": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "longDescriptionHeading",
                "excludes": {},
                "default": "Long description."
              },
              "subtree": {}
            },
            "noDescription": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "noDescription",
                "excludes": {},
                "default": "No description available."
              },
              "subtree": {}
            },
            "structureHeading": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "structureHeading",
                "excludes": {},
                "default": "Structure."
              },
              "subtree": {}
            },
            "viewAsDataTable": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "viewAsDataTable",
                "excludes": {},
                "default": "View as data table."
              },
              "subtree": {}
            },
            "chartHeading": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "chartHeading",
                "excludes": {},
                "default": "Chart graphic."
              },
              "subtree": {}
            },
            "chartContainerLabel": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "chartContainerLabel",
                "excludes": {},
                "default": "Interactive chart. {title}. Use up and down arrows to navigate with most screen readers."
              },
              "subtree": {}
            },
            "rangeSelectorMinInput": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "rangeSelectorMinInput",
                "excludes": {},
                "default": "Select start date."
              },
              "subtree": {}
            },
            "rangeSelectorMaxInput": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "rangeSelectorMaxInput",
                "excludes": {},
                "default": "Select end date."
              },
              "subtree": {}
            },
            "tableSummary": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "tableSummary",
                "excludes": {},
                "default": "Table representation of chart."
              },
              "subtree": {}
            },
            "mapZoomIn": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "mapZoomIn",
                "excludes": {},
                "default": "Zoom chart"
              },
              "subtree": {}
            },
            "mapZoomOut": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "mapZoomOut",
                "excludes": {},
                "default": "Zoom out chart"
              },
              "subtree": {}
            },
            "rangeSelectorButton": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "rangeSelectorButton",
                "excludes": {},
                "default": "Select range {buttonText}"
              },
              "subtree": {}
            },
            "legendItem": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "legendItem",
                "excludes": {},
                "default": "Toggle visibility of series {itemName}"
              },
              "subtree": {}
            },
            "svgContainerTitle": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "svgContainerTitle",
                "excludes": {},
                "default": "{chartTitle}",
                "description": "Title element text for the chart SVG element. Leave this\nempty to disable adding the title element. Browsers will display\nthis content when hovering over elements in the chart. Assistive\ntechnology may use this element to label the chart."
              },
              "subtree": {}
            },
            "seriesTypeDescriptions": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "seriesTypeDescriptions",
                "excludes": {},
                "description": "Descriptions of lesser known series types. The relevant\ndescription is added to the screen reader information region\nwhen these series types are used."
              },
              "subtree": {
                "boxplot": {
                  "meta": {
                    "types": {},
                    "name": "boxplot",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "arearange": {
                  "meta": {
                    "types": {},
                    "name": "arearange",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "areasplinerange": {
                  "meta": {
                    "types": {},
                    "name": "areasplinerange",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "bubble": {
                  "meta": {
                    "types": {},
                    "name": "bubble",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "columnrange": {
                  "meta": {
                    "types": {},
                    "name": "columnrange",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "errorbar": {
                  "meta": {
                    "types": {},
                    "name": "errorbar",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "funnel": {
                  "meta": {
                    "types": {},
                    "name": "funnel",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "pyramid": {
                  "meta": {
                    "types": {},
                    "name": "pyramid",
                    "excludes": {}
                  },
                  "subtree": {}
                },
                "waterfall": {
                  "meta": {
                    "types": {},
                    "name": "waterfall",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            },
            "chartTypes": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "chartTypes",
                "excludes": {},
                "description": "Chart type description strings. This is added to the chart \ninformation region.\n\nIf there is only a single series type used in the chart, we use\nthe format string for the series type, or default if missing.\nThere is one format string for cases where there is only a single\nseries in the chart, and one for multiple series of the same\ntype."
              },
              "subtree": {
                "emptyChart": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "emptyChart",
                    "excludes": {},
                    "default": "Empty chart"
                  },
                  "subtree": {}
                },
                "mapTypeDescription": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "mapTypeDescription",
                    "excludes": {},
                    "default": "Map of {mapTitle} with {numSeries} data series."
                  },
                  "subtree": {}
                },
                "unknownMap": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "unknownMap",
                    "excludes": {},
                    "default": "Map of unspecified region with {numSeries} data series."
                  },
                  "subtree": {}
                },
                "combinationChart": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "combinationChart",
                    "excludes": {},
                    "default": "Combination chart with {numSeries} data series."
                  },
                  "subtree": {}
                },
                "defaultSingle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "defaultSingle",
                    "excludes": {},
                    "default": "Chart with {numPoints} data {#plural(numPoints, points, point)}."
                  },
                  "subtree": {}
                },
                "defaultMultiple": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "defaultMultiple",
                    "excludes": {},
                    "default": "Chart with {numSeries} data series."
                  },
                  "subtree": {}
                },
                "splineSingle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "splineSingle",
                    "excludes": {},
                    "default": "Line chart with {numPoints} data {#plural(numPoints, points, point)}."
                  },
                  "subtree": {}
                },
                "splineMultiple": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "splineMultiple",
                    "excludes": {},
                    "default": "Line chart with {numSeries} lines."
                  },
                  "subtree": {}
                },
                "lineSingle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "lineSingle",
                    "excludes": {},
                    "default": "Line chart with {numPoints} data {#plural(numPoints, points, point)}."
                  },
                  "subtree": {}
                },
                "lineMultiple": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "lineMultiple",
                    "excludes": {},
                    "default": "Line chart with {numSeries} lines."
                  },
                  "subtree": {}
                },
                "columnSingle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "columnSingle",
                    "excludes": {},
                    "default": "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}."
                  },
                  "subtree": {}
                },
                "columnMultiple": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "columnMultiple",
                    "excludes": {},
                    "default": "Bar chart with {numSeries} data series."
                  },
                  "subtree": {}
                },
                "barSingle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "barSingle",
                    "excludes": {},
                    "default": "Bar chart with {numPoints} {#plural(numPoints, bars, bar)}."
                  },
                  "subtree": {}
                },
                "barMultiple": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "barMultiple",
                    "excludes": {},
                    "default": "Bar chart with {numSeries} data series."
                  },
                  "subtree": {}
                },
                "pieSingle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pieSingle",
                    "excludes": {},
                    "default": "Pie chart with {numPoints} {#plural(numPoints, slices, slice)}."
                  },
                  "subtree": {}
                },
                "pieMultiple": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "pieMultiple",
                    "excludes": {},
                    "default": "Pie chart with {numSeries} pies."
                  },
                  "subtree": {}
                },
                "scatterSingle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "scatterSingle",
                    "excludes": {},
                    "default": "Scatter chart with {numPoints} {#plural(numPoints, points, point)}."
                  },
                  "subtree": {}
                },
                "scatterMultiple": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "scatterMultiple",
                    "excludes": {},
                    "default": "Scatter chart with {numSeries} data series."
                  },
                  "subtree": {}
                },
                "boxplotSingle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "boxplotSingle",
                    "excludes": {},
                    "default": "Boxplot with {numPoints} {#plural(numPoints, boxes, box)}."
                  },
                  "subtree": {}
                },
                "boxplotMultiple": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "boxplotMultiple",
                    "excludes": {},
                    "default": "Boxplot with {numSeries} data series."
                  },
                  "subtree": {}
                },
                "bubbleSingle": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "bubbleSingle",
                    "excludes": {},
                    "default": "Bubble chart with {numPoints} {#plural(numPoints, bubbles, bubble)}."
                  },
                  "subtree": {}
                },
                "bubbleMultiple": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "bubbleMultiple",
                    "excludes": {},
                    "default": "Bubble chart with {numSeries} data series."
                  },
                  "subtree": {}
                }
              }
            },
            "axis": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "axis",
                "excludes": {},
                "description": "Axis description format strings."
              },
              "subtree": {
                "xAxisDescriptionSingular": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "xAxisDescriptionSingular",
                    "excludes": {},
                    "default": "The chart has 1 X axis displaying {names[0]}."
                  },
                  "subtree": {}
                },
                "xAxisDescriptionPlural": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "xAxisDescriptionPlural",
                    "excludes": {},
                    "default": "The chart has {numAxes} X axes displaying {#each(names, -1), }and {names[-1]}"
                  },
                  "subtree": {}
                },
                "yAxisDescriptionSingular": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "yAxisDescriptionSingular",
                    "excludes": {},
                    "default": "The chart has 1 Y axis displaying {names[0]}."
                  },
                  "subtree": {}
                },
                "yAxisDescriptionPlural": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "yAxisDescriptionPlural",
                    "excludes": {},
                    "default": "The chart has {numAxes} Y axes displaying {#each(names, -1), }and {names[-1]}"
                  },
                  "subtree": {}
                }
              }
            },
            "exporting": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "exporting",
                "excludes": {},
                "description": "Exporting menu format strings for accessibility module."
              },
              "subtree": {
                "chartMenuLabel": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "chartMenuLabel",
                    "excludes": {},
                    "default": "Chart export"
                  },
                  "subtree": {}
                },
                "menuButtonLabel": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "menuButtonLabel",
                    "excludes": {},
                    "default": "View export menu"
                  },
                  "subtree": {}
                },
                "exportRegionLabel": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "exportRegionLabel",
                    "excludes": {},
                    "default": "Chart export menu"
                  },
                  "subtree": {}
                }
              }
            },
            "series": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "series",
                "excludes": {},
                "description": "Lang configuration for different series types. For more dynamic\ncontrol over the series element descriptions, see\n[accessibility.seriesDescriptionFormatter](accessibility.\nseriesDescriptionFormatter)."
              },
              "subtree": {
                "summary": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "summary",
                    "excludes": {},
                    "description": "Lang configuration for the series main summary. Each series\ntype has two modes:\n\t1. This series type is the only series type used in the\n\t\tchart\n\t2. This is a combination chart with multiple series types\n\nIf a definition does not exist for the specific series type\nand mode, the 'default' lang definitions are used."
                  },
                  "subtree": {
                    "default": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "default",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}."
                      },
                      "subtree": {}
                    },
                    "defaultCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "defaultCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}."
                      },
                      "subtree": {}
                    },
                    "line": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "line",
                        "excludes": {},
                        "default": "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}."
                      },
                      "subtree": {}
                    },
                    "lineCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "lineCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}."
                      },
                      "subtree": {}
                    },
                    "spline": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "spline",
                        "excludes": {},
                        "default": "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}."
                      },
                      "subtree": {}
                    },
                    "splineCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "splineCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}."
                      },
                      "subtree": {}
                    },
                    "column": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "column",
                        "excludes": {},
                        "default": "{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}."
                      },
                      "subtree": {}
                    },
                    "columnCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "columnCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}."
                      },
                      "subtree": {}
                    },
                    "bar": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "bar",
                        "excludes": {},
                        "default": "{name}, bar series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bars, bar)}."
                      },
                      "subtree": {}
                    },
                    "barCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "barCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries}. Bar series with {numPoints} {#plural(numPoints, bars, bar)}."
                      },
                      "subtree": {}
                    },
                    "pie": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "pie",
                        "excludes": {},
                        "default": "{name}, pie {ix} of {numSeries} with {numPoints} {#plural(numPoints, slices, slice)}."
                      },
                      "subtree": {}
                    },
                    "pieCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "pieCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries}. Pie with {numPoints} {#plural(numPoints, slices, slice)}."
                      },
                      "subtree": {}
                    },
                    "scatter": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "scatter",
                        "excludes": {},
                        "default": "{name}, scatter plot {ix} of {numSeries} with {numPoints} {#plural(numPoints, points, point)}."
                      },
                      "subtree": {}
                    },
                    "scatterCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "scatterCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries}, scatter plot with {numPoints} {#plural(numPoints, points, point)}."
                      },
                      "subtree": {}
                    },
                    "boxplot": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "boxplot",
                        "excludes": {},
                        "default": "{name}, boxplot {ix} of {numSeries} with {numPoints} {#plural(numPoints, boxes, box)}."
                      },
                      "subtree": {}
                    },
                    "boxplotCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "boxplotCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries}. Boxplot with {numPoints} {#plural(numPoints, boxes, box)}."
                      },
                      "subtree": {}
                    },
                    "bubble": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "bubble",
                        "excludes": {},
                        "default": "{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}."
                      },
                      "subtree": {}
                    },
                    "bubbleCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "bubbleCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}."
                      },
                      "subtree": {}
                    },
                    "map": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "map",
                        "excludes": {},
                        "default": "{name}, map {ix} of {numSeries} with {numPoints} {#plural(numPoints, areas, area)}."
                      },
                      "subtree": {}
                    },
                    "mapCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "mapCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries}. Map with {numPoints} {#plural(numPoints, areas, area)}."
                      },
                      "subtree": {}
                    },
                    "mapline": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "mapline",
                        "excludes": {},
                        "default": "{name}, line {ix} of {numSeries} with {numPoints} data {#plural(numPoints, points, point)}."
                      },
                      "subtree": {}
                    },
                    "maplineCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "maplineCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries}. Line with {numPoints} data {#plural(numPoints, points, point)}."
                      },
                      "subtree": {}
                    },
                    "mapbubble": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "mapbubble",
                        "excludes": {},
                        "default": "{name}, bubble series {ix} of {numSeries} with {numPoints} {#plural(numPoints, bubbles, bubble)}."
                      },
                      "subtree": {}
                    },
                    "mapbubbleCombination": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "mapbubbleCombination",
                        "excludes": {},
                        "default": "{name}, series {ix} of {numSeries}. Bubble series with {numPoints} {#plural(numPoints, bubbles, bubble)}."
                      },
                      "subtree": {}
                    }
                  }
                },
                "description": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "description",
                    "excludes": {},
                    "default": "{description}",
                    "description": "User supplied description text. This is added after the main\nsummary if present."
                  },
                  "subtree": {}
                },
                "xAxisDescription": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "xAxisDescription",
                    "excludes": {},
                    "default": "X axis, {name}",
                    "description": "xAxis description for series if there are multiple xAxes in\nthe chart."
                  },
                  "subtree": {}
                },
                "yAxisDescription": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "yAxisDescription",
                    "excludes": {},
                    "default": "Y axis, {name}",
                    "description": "yAxis description for series if there are multiple yAxes in\nthe chart."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "drillUpText": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "drillUpText",
            "excludes": {},
            "default": "Back to {series.name}",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The text for the button that appears when drilling down, linking\nback to the parent series. The parent series' name is inserted for\n`{series.name}`."
          },
          "subtree": {}
        },
        "downloadCSV": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "downloadCSV",
            "excludes": {},
            "default": "Download CSV",
            "description": "Export-data module only. The text for the menu item."
          },
          "subtree": {}
        },
        "downloadXLS": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "downloadXLS",
            "excludes": {},
            "default": "Download XLS",
            "description": "Export-data module only. The text for the menu item."
          },
          "subtree": {}
        },
        "viewData": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "viewData",
            "excludes": {},
            "default": "View data table",
            "description": "Export-data module only. The text for the menu item."
          },
          "subtree": {}
        },
        "printChart": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "printChart",
            "excludes": {},
            "default": "Print chart",
            "description": "Exporting module only. The text for the menu item to print the chart."
          },
          "subtree": {}
        },
        "downloadPNG": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "downloadPNG",
            "excludes": {},
            "default": "Download PNG image",
            "description": "Exporting module only. The text for the PNG download menu item."
          },
          "subtree": {}
        },
        "downloadJPEG": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "downloadJPEG",
            "excludes": {},
            "default": "Download JPEG image",
            "description": "Exporting module only. The text for the JPEG download menu item."
          },
          "subtree": {}
        },
        "downloadPDF": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "downloadPDF",
            "excludes": {},
            "default": "Download PDF document",
            "description": "Exporting module only. The text for the PDF download menu item."
          },
          "subtree": {}
        },
        "downloadSVG": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "downloadSVG",
            "excludes": {},
            "default": "Download SVG vector image",
            "description": "Exporting module only. The text for the SVG download menu item."
          },
          "subtree": {}
        },
        "contextButtonTitle": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "contextButtonTitle",
            "excludes": {},
            "default": "Chart context menu",
            "description": "Exporting module menu. The tooltip title for the context menu holding\nprint and export menu items."
          },
          "subtree": {}
        },
        "noData": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "noData",
            "excludes": {},
            "default": "No data to display",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The text to display when the chart contains no data. Requires the\nno-data module, see [noData](#noData)."
          },
          "subtree": {}
        },
        "loading": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "loading",
            "excludes": {},
            "default": "Loading...",
            "description": "The loading text that appears when the chart is set into the loading\nstate following a call to `chart.showLoading`."
          },
          "subtree": {}
        },
        "months": {
          "meta": {
            "types": {
              "array": "String"
            },
            "name": "months",
            "excludes": {},
            "default": "[ \"January\" , \"February\" , \"March\" , \"April\" , \"May\" ,\n         \"June\" , \"July\" , \"August\" , \"September\" , \"October\" ,\n         \"November\" , \"December\"]",
            "description": "An array containing the months names. Corresponds to the `%B` format\nin `Highcharts.dateFormat()`."
          },
          "subtree": {}
        },
        "shortMonths": {
          "meta": {
            "types": {
              "array": "String"
            },
            "name": "shortMonths",
            "excludes": {},
            "default": "[ \"Jan\" , \"Feb\" , \"Mar\" , \"Apr\" , \"May\" , \"Jun\" ,\n         \"Jul\" , \"Aug\" , \"Sep\" , \"Oct\" , \"Nov\" , \"Dec\"]",
            "description": "An array containing the months names in abbreviated form. Corresponds\nto the `%b` format in `Highcharts.dateFormat()`."
          },
          "subtree": {}
        },
        "weekdays": {
          "meta": {
            "types": {
              "array": "String"
            },
            "name": "weekdays",
            "excludes": {},
            "default": "[\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\",\n         \"Friday\", \"Saturday\"]",
            "description": "An array containing the weekday names."
          },
          "subtree": {}
        },
        "decimalPoint": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "decimalPoint",
            "excludes": {},
            "default": ".",
            "description": "The default decimal point used in the `Highcharts.numberFormat`\nmethod unless otherwise specified in the function arguments."
          },
          "subtree": {}
        },
        "numericSymbols": {
          "meta": {
            "types": {
              "array": "String"
            },
            "name": "numericSymbols",
            "excludes": {},
            "default": "[ \"k\" , \"M\" , \"G\" , \"T\" , \"P\" , \"E\"]",
            "description": "[Metric prefixes](http://en.wikipedia.org/wiki/Metric_prefix) used\nto shorten high numbers in axis labels. Replacing any of the positions\nwith `null` causes the full number to be written. Setting `numericSymbols`\nto `null` disables shortening altogether."
          },
          "subtree": {}
        },
        "resetZoom": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "resetZoom",
            "excludes": {},
            "default": "Reset zoom",
            "description": "The text for the label appearing when a chart is zoomed."
          },
          "subtree": {}
        },
        "resetZoomTitle": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "resetZoomTitle",
            "excludes": {},
            "default": "Reset zoom level 1:1",
            "description": "The tooltip title for the label appearing when a chart is zoomed."
          },
          "subtree": {}
        },
        "thousandsSep": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "thousandsSep",
            "excludes": {},
            "default": " ",
            "description": "The default thousands separator used in the `Highcharts.numberFormat`\nmethod unless otherwise specified in the function arguments. Since\nHighcharts 4.1 it defaults to a single space character, which is\ncompatible with ISO and works across Anglo-American and continental\nEuropean languages.\n\nThe default is a single space."
          },
          "subtree": {}
        },
        "shortWeekdays": {
          "meta": {
            "types": {
              "array": "String"
            },
            "name": "shortWeekdays",
            "excludes": {},
            "description": "Short week days, starting Sunday. If not specified, Highcharts uses\nthe first three letters of the `lang.weekdays` option."
          },
          "subtree": {}
        },
        "invalidDate": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "invalidDate",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "What to show in a date field for invalid dates. Defaults to an empty\nstring."
          },
          "subtree": {}
        },
        "numericSymbolMagnitude": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "numericSymbolMagnitude",
            "excludes": {},
            "default": "1000",
            "description": "The magnitude of [numericSymbols](#lang.numericSymbol) replacements.\nUse 10000 for Japanese, Korean and various Chinese locales, which\nuse symbols for 10^4, 10^8 and 10^12."
          },
          "subtree": {}
        },
        "rangeSelectorZoom": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "rangeSelectorZoom",
            "excludes": {},
            "default": "Zoom",
            "products": {
              "highstock": 1
            },
            "description": "The text for the label for the range selector buttons."
          },
          "subtree": {}
        },
        "rangeSelectorFrom": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "rangeSelectorFrom",
            "excludes": {},
            "default": "From",
            "products": {
              "highstock": 1
            },
            "description": "The text for the label for the \"from\" input box in the range\nselector."
          },
          "subtree": {}
        },
        "rangeSelectorTo": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "rangeSelectorTo",
            "excludes": {},
            "default": "To",
            "products": {
              "highstock": 1
            },
            "description": "The text for the label for the \"to\" input box in the range selector."
          },
          "subtree": {}
        },
        "zoomIn": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "zoomIn",
            "excludes": {},
            "default": "Zoom in",
            "products": {
              "highmaps": 1
            },
            "description": "The title appearing on hovering the zoom in button. The text itself\ndefaults to \"+\" and can be changed in the button options."
          },
          "subtree": {}
        },
        "zoomOut": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "zoomOut",
            "excludes": {},
            "default": "Zoom out",
            "products": {
              "highmaps": 1
            },
            "description": "The title appearing on hovering the zoom out button. The text itself\ndefaults to \"-\" and can be changed in the button options."
          },
          "subtree": {}
        }
      }
    },
    "defs": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "defs",
        "excludes": {},
        "description": "Styled mode only. Configuration object for adding SVG definitions for\nreusable elements. See [gradients, shadows and patterns](http://www.\nhighcharts.com/docs/chart-design-and-style/gradients-shadows-and-\npatterns) for more information and code examples."
      },
      "subtree": {}
    },
    "annotations": {
      "meta": {
        "types": {
          "array": "Object"
        },
        "name": "annotations",
        "excludes": {},
        "description": "Options for configuring annotations, for example labels, arrows or \nshapes. Annotations can be tied to points, axis coordinates or chart\npixel coordinates."
      },
      "subtree": {
        "visible": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "visible",
            "excludes": {},
            "default": true,
            "description": "Whether the annotation is visible."
          },
          "subtree": {}
        },
        "labelOptions": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "labelOptions",
            "excludes": {},
            "description": "Options for annotation's labels. Each label inherits options\nfrom the labelOptions object. An option from the labelOptions can be\noverwritten by config for a specific label."
          },
          "subtree": {
            "align": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "align",
                "excludes": {},
                "default": "center",
                "description": "The alignment of the annotation's label. If right,\nthe right side of the label should be touching the point."
              },
              "subtree": {}
            },
            "allowOverlap": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "allowOverlap",
                "excludes": {},
                "default": false,
                "description": "Whether to allow the annotation's labels to overlap.\nTo make the labels less sensitive for overlapping, \nthe can be set to 0."
              },
              "subtree": {}
            },
            "backgroundColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "backgroundColor",
                "excludes": {},
                "default": "rgba(0, 0, 0, 0.75)",
                "description": "The background color or gradient for the annotation's label."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "black",
                "description": "The border color for the annotation's label."
              },
              "subtree": {}
            },
            "borderRadius": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderRadius",
                "excludes": {},
                "default": 3,
                "description": "The border radius in pixels for the annotaiton's label."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": 1,
                "description": "The border width in pixels for the annotation's label"
              },
              "subtree": {}
            },
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "default": "",
                "description": "A class name for styling by CSS."
              },
              "subtree": {}
            },
            "crop": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "crop",
                "excludes": {},
                "default": false,
                "description": "Whether to hide the annotation's label that is outside the plot\narea."
              },
              "subtree": {}
            },
            "formatter": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "formatter",
                "excludes": {},
                "default": "function () {\n\treturn defined(this.y) ? this.y : 'Annotation label';\n}\n*",
                "description": "Callback JavaScript function to format the annotation's label.\nNote that if a `format` or `text` are defined, the format or text\ntake precedence and the formatter is ignored. `This` refers to a\npoint object."
              },
              "subtree": {}
            },
            "overflow": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "overflow",
                "excludes": {},
                "default": "justify",
                "description": "How to handle the annotation's label that flow outside the plot\narea. The justify option aligns the label inside the plot area."
              },
              "subtree": {}
            },
            "padding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "padding",
                "excludes": {},
                "default": 5,
                "description": "When either the borderWidth or the backgroundColor is set,\nthis\tis the padding within the box."
              },
              "subtree": {}
            },
            "shadow": {
              "meta": {
                "types": {
                  "boolean": 1,
                  "object": 1
                },
                "name": "shadow",
                "excludes": {},
                "default": false,
                "description": "The shadow of the box. The shadow can be an object configuration\ncontaining `color`, `offsetX`, `offsetY`, `opacity` and `width`."
              },
              "subtree": {}
            },
            "shape": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "shape",
                "excludes": {},
                "default": "callout",
                "description": "The name of a symbol to use for the border around the label.\nSymbols are predefined functions on the Renderer object."
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "description": "Styles for the annotation's label."
              },
              "subtree": {
                "fontSize": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fontSize",
                    "excludes": {},
                    "default": "11px"
                  },
                  "subtree": {}
                },
                "fontWeight": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fontWeight",
                    "excludes": {},
                    "default": "normal"
                  },
                  "subtree": {}
                },
                "color": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "default": "contrast"
                  },
                  "subtree": {}
                }
              }
            },
            "useHTML": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "useHTML",
                "excludes": {},
                "default": "false\n*",
                "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)\nto render the annotation's label."
              },
              "subtree": {}
            },
            "verticalAlign": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "verticalAlign",
                "excludes": {},
                "default": "bottom",
                "description": "The vertical alignment of the annotation's label."
              },
              "subtree": {}
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": 0,
                "description": "The x position offset of the label relative to the point.\nNote that if a `distance` is defined, the distance takes\nprecedence over `x` and `y` options."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": -16,
                "description": "The y position offset of the label relative to the point.\nNote that if a `distance` is defined, the distance takes\nprecedence over `x` and `y` options."
              },
              "subtree": {}
            },
            "distance": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "distance",
                "excludes": {},
                "default": "undefined",
                "description": "The label's pixel distance from the point."
              },
              "subtree": {}
            },
            "format": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "format",
                "excludes": {},
                "default": "undefined",
                "description": "A [format](https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting) string for the data label."
              },
              "subtree": {}
            },
            "text": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "text",
                "excludes": {},
                "default": "undefined",
                "description": "Alias for the format option."
              },
              "subtree": {}
            }
          }
        },
        "shapeOptions": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "shapeOptions",
            "excludes": {},
            "description": "Options for annotation's shapes. Each shape inherits options\nfrom the shapeOptions object. An option from the shapeOptions can be\noverwritten by config for a specific shape."
          },
          "subtree": {
            "stroke": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "stroke",
                "excludes": {},
                "default": "rgba(0, 0, 0, 0.75)",
                "description": "The color of the shape's stroke."
              },
              "subtree": {}
            },
            "strokeWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "strokeWidth",
                "excludes": {},
                "default": 1,
                "description": "The pixel stroke width of the shape."
              },
              "subtree": {}
            },
            "fill": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "fill",
                "excludes": {},
                "default": "rgba(0, 0, 0, 0.75)",
                "description": "The color of the shape's fill."
              },
              "subtree": {}
            },
            "r": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "r",
                "excludes": {},
                "default": 0,
                "description": "The radius of the shape."
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "width",
                "excludes": {},
                "description": "The width of the shape."
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "height",
                "excludes": {},
                "description": "The height of the shape."
              },
              "subtree": {}
            },
            "type": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "type",
                "excludes": {},
                "default": "'rect'",
                "description": "The type of the shape, e.g. circle or rectangle."
              },
              "subtree": {}
            }
          }
        },
        "zIndex": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "zIndex",
            "excludes": {},
            "default": "6\n*",
            "description": "The Z index of the annotation."
          },
          "subtree": {}
        },
        "labels": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "labels",
            "excludes": {},
            "description": "An array of labels for the annotation. For options that apply to\nmultiple labels, they can be added to the\n[labelOptions](annotations.labelOptions.html).",
            "extends": "annotations.labelOptions"
          },
          "subtree": {
            "point": {
              "meta": {
                "types": {
                  "string": 1,
                  "object": 1
                },
                "name": "point",
                "excludes": {},
                "description": "This option defines the point to which the label will be connected.\nIt can be either the point which exists in the series - it is\nreferenced by the point's id - or a new point with defined x, y\nproperies and optionally axes."
              },
              "subtree": {
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "description": "The x position of the point. Units can be either in axis \nor chart pixel coordinates."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "description": "The y position of the point. Units can be either in axis\nor chart pixel coordinates."
                  },
                  "subtree": {}
                },
                "xAxis": {
                  "meta": {
                    "types": {
                      "number": 1,
                      "string": 1
                    },
                    "name": "xAxis",
                    "excludes": {},
                    "description": "This number defines which xAxis the point is connected to. It refers\nto either the axis id or the index of the axis in the xAxis array.\nIf the option is not configured or the axis is not found the point's\nx coordinate refers to the chart pixels."
                  },
                  "subtree": {}
                },
                "yAxis": {
                  "meta": {
                    "types": {
                      "number": 1,
                      "string": 1
                    },
                    "name": "yAxis",
                    "excludes": {},
                    "description": "This number defines which yAxis the point is connected to. It refers\nto either the axis id or the index of the axis in the yAxis array.\nIf the option is not configured or the axis is not found the point's\ny coordinate refers to the chart pixels."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "shapes": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "shapes",
            "excludes": {},
            "description": "An array of shapes for the annotation. For options that apply to\nmultiple shapes, then can be added to the\n[shapeOptions](annotations.shapeOptions.html).",
            "extends": "annotations.shapeOptions"
          },
          "subtree": {
            "point": {
              "meta": {
                "types": {
                  "string": 1,
                  "object": 1
                },
                "name": "point",
                "excludes": {},
                "description": "This option defines the point to which the shape will be connected.\nIt can be either the point which exists in the series - it is\nreferenced by the point's id - or a new point with defined x, y\nproperties and optionally axes.",
                "extends": "annotations.labels.point"
              },
              "subtree": {}
            },
            "points": {
              "meta": {
                "types": {
                  "array": "object"
                },
                "name": "points",
                "excludes": {},
                "description": "An array of points for the shape. This option is available for shapes\nwhich can use multiple points such as path. A point can be either \na point object or a point's id."
              },
              "subtree": {}
            },
            "markerEnd": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "markerEnd",
                "excludes": {},
                "description": "Id of the marker which will be drawn at the final vertex of the path.\nCustom markers can be defined in defs property."
              },
              "subtree": {}
            },
            "markerStart": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "markerStart",
                "excludes": {},
                "description": "Id of the marker which will be drawn at the first vertex of the path.\nCustom markers can be defined in defs property."
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "boost": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "boost",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highstock": 1
        },
        "description": "Options for the Boost module. The Boost module allows certain series types\nto be rendered by WebGL instead of the default SVG. This allows hundreds of\nthousands of data points to be rendered in milliseconds. In addition to the\nWebGL rendering it saves time by skipping processing and inspection of the\ndata wherever possible. This introduces some limitations to what features are\navailable in Boost mode. See [the docs](https://www.highcharts.com/docs/advanced-chart-features/boost-module)\nfor details.\n\nIn addition to the global `boost` option, each series has a\n[boostThreshold](#plotOptions.series.boostThreshold) that defines when the\nboost should kick in.\n\nRequires the `modules/boost.js` module."
      },
      "subtree": {
        "seriesThreshold": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "seriesThreshold",
            "excludes": {},
            "default": "null",
            "description": "Set the series threshold for when the boost should kick in globally.\n\nSetting to e.g. 20 will cause the whole chart to enter boost mode\nif there are 20 or more series active. When the chart is in boost mode,\nevery series in it will be rendered to a common canvas. This offers\na significant speed improvment in charts with a very high\namount of series."
          },
          "subtree": {}
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "description": "Enable or disable boost on a chart."
          },
          "subtree": {}
        },
        "debug": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "debug",
            "excludes": {},
            "description": "Debugging options for boost.\nUseful for benchmarking, and general timing."
          },
          "subtree": {
            "timeRendering": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "timeRendering",
                "excludes": {},
                "default": "false",
                "description": "Time the series rendering.\n\nThis outputs the time spent on actual rendering in the console when\nset to true."
              },
              "subtree": {}
            },
            "timeSeriesProcessing": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "timeSeriesProcessing",
                "excludes": {},
                "default": "false",
                "description": "Time the series processing.\n\nThis outputs the time spent on transforming the series data to\nvertex buffers when set to true."
              },
              "subtree": {}
            },
            "timeSetup": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "timeSetup",
                "excludes": {},
                "default": "false",
                "description": "Time the the WebGL setup.\n\nThis outputs the time spent on setting up the WebGL context,\ncreating shaders, and textures."
              },
              "subtree": {}
            },
            "timeKDTree": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "timeKDTree",
                "excludes": {},
                "default": "false",
                "description": "Time the building of the k-d tree.\n\nThis outputs the time spent building the k-d tree used for\nmarkers etc.\n\nNote that the k-d tree is built async, and runs post-rendering.\nFollowing, it does not affect the performance of the rendering itself."
              },
              "subtree": {}
            },
            "showSkipSummary": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showSkipSummary",
                "excludes": {},
                "default": "false",
                "description": "Show the number of points skipped through culling.\n\nWhen set to true, the number of points skipped in series processing\nis outputted. Points are skipped if they are closer than 1 pixel from\neach other."
              },
              "subtree": {}
            },
            "timeBufferCopy": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "timeBufferCopy",
                "excludes": {},
                "default": "false",
                "description": "Time the WebGL to SVG buffer copy\n\nAfter rendering, the result is copied to an image which is injected\ninto the SVG.\n\nIf this property is set to true, the time it takes for the buffer copy\nto complete is outputted."
              },
              "subtree": {}
            }
          }
        },
        "useGPUTranslations": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useGPUTranslations",
            "excludes": {},
            "default": "false",
            "description": "Enable or disable GPU translations. GPU translations are faster than doing\nthe translation in JavaScript.\n\nThis option may cause rendering issues with certain datasets.\nNamely, if your dataset has large numbers with small increments (such as\ntimestamps), it won't work correctly. This is due to floating point\nprecission."
          },
          "subtree": {}
        },
        "allowForce": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "allowForce",
            "excludes": {},
            "default": "true",
            "description": "If set to true, the whole chart will be boosted if one of the series\ncrosses its threshold, and all the series can be boosted."
          },
          "subtree": {}
        }
      }
    },
    "yAxis": {
      "meta": {
        "types": {
          "array": "yAxis"
        },
        "name": "yAxis",
        "excludes": {},
        "description": "The Y axis or value axis. Normally this is the vertical axis,\nthough if the chart is inverted this is the horizontal axis.\nIn case of multiple axes, the yAxis node is an array of\nconfiguration objects.\n\nSee [the Axis object](#Axis) for programmatic access to the axis.",
        "extends": "xAxis"
      },
      "subtree": {
        "minLength": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "minLength",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Minimal size of a resizable axis. Could be set as a percent\nof plot area or pixel size.\n\nThis feature requires the `drag-panes.js` module."
          },
          "subtree": {}
        },
        "maxLength": {
          "meta": {
            "types": {
              "string": 1,
              "number": 1
            },
            "name": "maxLength",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Maximal size of a resizable axis. Could be set as a percent\nof plot area or pixel size.\n\nThis feature requires the `drag-panes.js` module."
          },
          "subtree": {}
        },
        "resize": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "resize",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Options for axis resizing. This feature requires the\n`drag-panes.js` -\n[classic](http://code.highcharts.com/stock/modules/drag-panes.js) or\n[styled](http://code.highcharts.com/stock/js/modules/drag-panes.js)\nmode - module."
          },
          "subtree": {
            "controlledAxis": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "controlledAxis",
                "excludes": {},
                "description": "Contains two arrays of axes that are controlled by control line\nof the axis.\n\nThis feature requires the `drag-panes.js` module."
              },
              "subtree": {
                "next": {
                  "meta": {
                    "types": {
                      "array": "(String|Number)"
                    },
                    "name": "next",
                    "excludes": {},
                    "default": "[]",
                    "description": "Array of axes that should move out of the way of resizing\nbeing done for the current axis. If not set, the next axis\nwill be used.\n\nThis feature requires the `drag-panes.js` module."
                  },
                  "subtree": {}
                },
                "prev": {
                  "meta": {
                    "types": {
                      "array": "(String|Number)"
                    },
                    "name": "prev",
                    "excludes": {},
                    "description": "Array of axes that should move with the current axis\nwhile resizing.\n\nThis feature requires the `drag-panes.js` module."
                  },
                  "subtree": {}
                }
              }
            },
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": false,
                "description": "Enable or disable resize by drag for the axis.\n\nThis feature requires the `drag-panes.js` module."
              },
              "subtree": {}
            },
            "cursor": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "cursor",
                "excludes": {},
                "default": "ns-resize",
                "description": "Cursor style for the control line.\n\nIn styled mode use class `highcharts-axis-resizer` instead.\n\nThis feature requires the `drag-panes.js` module."
              },
              "subtree": {}
            },
            "lineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "lineColor",
                "excludes": {},
                "default": "#cccccc",
                "description": "Color of the control line.\n\nIn styled mode use class `highcharts-axis-resizer` instead.\n\nThis feature requires the `drag-panes.js` module."
              },
              "subtree": {}
            },
            "lineDashStyle": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "lineDashStyle",
                "excludes": {},
                "default": "Solid",
                "description": "Dash style of the control line.\n\nIn styled mode use class `highcharts-axis-resizer` instead.\n\nThis feature requires the `drag-panes.js` module."
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 4,
                "description": "Width of the control line.\n\nIn styled mode use class `highcharts-axis-resizer` instead.\n\nThis feature requires the `drag-panes.js` module."
              },
              "subtree": {}
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": 0,
                "description": "Horizontal offset of the control line.\n\nThis feature requires the `drag-panes.js` module."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": 0,
                "description": "Vertical offset of the control line.\n\nThis feature requires the `drag-panes.js` module."
              },
              "subtree": {}
            }
          }
        },
        "tooltipValueFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "tooltipValueFormat",
            "excludes": {},
            "default": "undefined",
            "description": "Parallel coordinates only. Format that will be used for point.y\nand available in [tooltip.pointFormat](#tooltip.pointFormat) as\n`{point.formattedValue}`. If not set, `{point.formattedValue}`\nwill use other options, in this order:\n\n1. [yAxis.labels.format](#yAxis.labels.format) will be used if\n   set\n2. if yAxis is a category, then category name will be displayed\n3. if yAxis is a datetime, then value will use the same format as\n   yAxis labels\n4. if yAxis is linear/logarithmic type, then simple value will be\n   used"
          },
          "subtree": {}
        },
        "endOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "endOnTick",
            "excludes": {},
            "default": true
          },
          "subtree": {}
        },
        "tickPixelInterval": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickPixelInterval",
            "excludes": {},
            "default": 72
          },
          "subtree": {}
        },
        "showLastLabel": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showLastLabel",
            "excludes": {},
            "default": true
          },
          "subtree": {}
        },
        "labels": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "labels",
            "excludes": {},
            "extends": "xAxis.labels"
          },
          "subtree": {
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": -8,
                "description": "The x position offset of the label relative to the tick position\non the axis. Defaults to -15 for left axis, 15 for right axis."
              },
              "subtree": {}
            },
            "align": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "align",
                "excludes": {},
                "description": "What part of the string the given position is anchored to. Can\nbe one of `\"left\"`, `\"center\"` or `\"right\"`. The exact position\nalso depends on the `labels.x` setting.\n\nAngular gauges and solid gauges defaults to `center`."
              },
              "subtree": {}
            },
            "distance": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "distance",
                "excludes": {},
                "default": "-25",
                "products": {
                  "highcharts": 1
                },
                "description": "Angular gauges and solid gauges only. The label's pixel distance\nfrom the perimeter of the plot area."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "description": "The y position offset of the label relative to the tick position\non the axis."
              },
              "subtree": {}
            }
          }
        },
        "maxPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "maxPadding",
            "excludes": {},
            "default": 0.05,
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Padding of the max value relative to the length of the axis. A\npadding of 0.05 will make a 100px axis 5px longer. This is useful\nwhen you don't want the highest data value to appear on the edge\nof the plot area. When the axis' `max` option is set or a max extreme\nis set using `axis.setExtremes()`, the maxPadding will be ignored."
          },
          "subtree": {}
        },
        "minPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minPadding",
            "excludes": {},
            "default": 0.05,
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Padding of the min value relative to the length of the axis. A\npadding of 0.05 will make a 100px axis 5px longer. This is useful\nwhen you don't want the lowest data value to appear on the edge\nof the plot area. When the axis' `min` option is set or a max extreme\nis set using `axis.setExtremes()`, the maxPadding will be ignored."
          },
          "subtree": {}
        },
        "startOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "startOnTick",
            "excludes": {},
            "default": true,
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Whether to force the axis to start on a tick. Use this option with\nthe `maxPadding` option to control the axis start."
          },
          "subtree": {}
        },
        "title": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "title",
            "excludes": {},
            "extends": "xAxis.title"
          },
          "subtree": {
            "rotation": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rotation",
                "excludes": {},
                "default": 270,
                "description": "The rotation of the text in degrees. 0 is horizontal, 270 is\nvertical reading from bottom to top."
              },
              "subtree": {}
            },
            "text": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "text",
                "excludes": {},
                "default": "Values",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The actual text of the axis title. Horizontal texts can contain\nHTML, but rotated texts are painted using vector techniques and\nmust be clean text. The Y axis title is disabled by setting the\n`text` option to `null`."
              },
              "subtree": {}
            },
            "margin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "margin",
                "excludes": {},
                "default": "40",
                "description": "The pixel distance between the axis labels and the title. Positive\nvalues are outside the axis line, negative are inside."
              },
              "subtree": {}
            }
          }
        },
        "stackLabels": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "stackLabels",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "The stack labels show the total value for each bar in a stacked\ncolumn or bar chart. The label will be placed on top of positive\ncolumns and below negative columns. In case of an inverted column\nchart or a bar chart the label is placed to the right of positive\nbars and to the left of negative bars."
          },
          "subtree": {
            "allowOverlap": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "allowOverlap",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1
                },
                "description": "Allow the stack labels to overlap."
              },
              "subtree": {}
            },
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1
                },
                "description": "Enable or disable the stack total labels."
              },
              "subtree": {}
            },
            "formatter": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "formatter",
                "excludes": {},
                "default": "function() { return this.total; }",
                "products": {
                  "highcharts": 1
                },
                "description": "Callback JavaScript function to format the label. The value is\ngiven by `this.total`."
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "CSS styles for the label.\n\nIn styled mode, the styles are set in the\n`.highcharts-stack-label` class."
              },
              "subtree": {
                "fontSize": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fontSize",
                    "excludes": {},
                    "default": "11px"
                  },
                  "subtree": {}
                },
                "fontWeight": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fontWeight",
                    "excludes": {},
                    "default": "bold"
                  },
                  "subtree": {}
                },
                "color": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "default": "#000000"
                  },
                  "subtree": {}
                },
                "textOutline": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "textOutline",
                    "excludes": {},
                    "default": "1px contrast"
                  },
                  "subtree": {}
                }
              }
            },
            "align": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "align",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Defines the horizontal alignment of the stack total label. Can be\none of `\"left\"`, `\"center\"` or `\"right\"`. The default value is calculated\nat runtime and depends on orientation and whether the stack is positive\nor negative."
              },
              "subtree": {}
            },
            "format": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "format",
                "excludes": {},
                "default": "{total}",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A [format string](http://docs.highcharts.com/#formatting) for the\ndata label. Available variables are the same as for `formatter`."
              },
              "subtree": {}
            },
            "rotation": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rotation",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "Rotation of the labels in degrees."
              },
              "subtree": {}
            },
            "textAlign": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "textAlign",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The text alignment for the label. While `align` determines where\nthe texts anchor point is placed with regards to the stack, `textAlign`\ndetermines how the text is aligned against its anchor point. Possible\nvalues are `\"left\"`, `\"center\"` and `\"right\"`. The default value\nis calculated at runtime and depends on orientation and whether the\nstack is positive or negative."
              },
              "subtree": {}
            },
            "useHTML": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "useHTML",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting#html)\nto render the labels."
              },
              "subtree": {}
            },
            "verticalAlign": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "verticalAlign",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Defines the vertical alignment of the stack total label. Can be one\nof `\"top\"`, `\"middle\"` or `\"bottom\"`. The default value is calculated\nat runtime and depends on orientation and whether the stack is positive\nor negative."
              },
              "subtree": {}
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The x position offset of the label relative to the left of the stacked\nbar. The default value is calculated at runtime and depends on orientation\nand whether the stack is positive or negative."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The y position offset of the label relative to the tick position\non the axis. The default value is calculated at runtime and depends\non orientation and whether the stack is positive or negative."
              },
              "subtree": {}
            }
          }
        },
        "gridLineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "gridLineWidth",
            "excludes": {},
            "default": 1
          },
          "subtree": {}
        },
        "lineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "lineWidth",
            "excludes": {},
            "default": 0
          },
          "subtree": {}
        },
        "opposite": {
          "meta": {
            "types": {},
            "name": "opposite",
            "excludes": {},
            "products": {
              "highstock": 1,
              "highcharts": 1
            }
          },
          "subtree": {}
        },
        "lineColor": {
          "meta": {
            "types": {},
            "name": "lineColor",
            "excludes": {}
          },
          "subtree": {}
        },
        "min": {
          "meta": {
            "types": {},
            "name": "min",
            "excludes": {}
          },
          "subtree": {}
        },
        "max": {
          "meta": {
            "types": {},
            "name": "max",
            "excludes": {}
          },
          "subtree": {}
        },
        "angle": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "angle",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1
            },
            "description": "In a polar chart, this is the angle of the Y axis in degrees, where\n0 is up and 90 is right. The angle determines the position of the\naxis line and the labels, though the coordinate system is unaffected."
          },
          "subtree": {}
        },
        "gridLineInterpolation": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "gridLineInterpolation",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1
            },
            "description": "Polar charts only. Whether the grid lines should draw as a polygon\nwith straight lines between categories, or as circles. Can be either\n`circle` or `polygon`."
          },
          "subtree": {}
        },
        "maxColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "maxColor",
            "excludes": {},
            "default": "#003399",
            "products": {
              "highcharts": 1
            },
            "description": "Solid gauge only. Unless [stops](#yAxis.stops) are set, the color\nto represent the maximum value of the Y axis."
          },
          "subtree": {}
        },
        "minColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "minColor",
            "excludes": {},
            "default": "#e6ebf5",
            "products": {
              "highcharts": 1
            },
            "description": "Solid gauge only. Unless [stops](#yAxis.stops) are set, the color\nto represent the minimum value of the Y axis."
          },
          "subtree": {}
        },
        "reversedStacks": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "reversedStacks",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "If `true`, the first series in a stack will be drawn on top in a\npositive, non-reversed Y axis. If `false`, the first series is in\nthe base of the stack."
          },
          "subtree": {}
        },
        "stops": {
          "meta": {
            "types": {
              "array": "Array"
            },
            "name": "stops",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Solid gauge series only. Color stops for the solid gauge. Use this\nin cases where a linear gradient between a `minColor` and `maxColor`\nis not sufficient. The stops is an array of tuples, where the first\nitem is a float between 0 and 1 assigning the relative position in\nthe gradient, and the second item is the color.\n\nFor solid gauges, the Y axis also inherits the concept of [data classes](http://api.\nhighcharts.com/highmaps#colorAxis.dataClasses) from the Highmaps\ncolor axis."
          },
          "subtree": {}
        },
        "tickWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickWidth",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The pixel width of the major tick marks."
          },
          "subtree": {}
        },
        "plotBands": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "plotBands",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "An array of objects defining plot bands on the Y axis.",
            "extends": "xAxis.plotBands"
          },
          "subtree": {
            "innerRadius": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "innerRadius",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "In a gauge chart, this option determines the inner radius of the\nplot band that stretches along the perimeter. It can be given as\na percentage string, like `\"100%\"`, or as a pixel number, like `100`.\nBy default, the inner radius is controlled by the [thickness](#yAxis.\nplotBands.thickness) option."
              },
              "subtree": {}
            },
            "outerRadius": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "outerRadius",
                "excludes": {},
                "default": "100%",
                "products": {
                  "highcharts": 1
                },
                "description": "In a gauge chart, this option determines the outer radius of the\nplot band that stretches along the perimeter. It can be given as\na percentage string, like `\"100%\"`, or as a pixel number, like `100`."
              },
              "subtree": {}
            },
            "thickness": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "thickness",
                "excludes": {},
                "default": "10",
                "products": {
                  "highcharts": 1
                },
                "description": "In a gauge chart, this option sets the width of the plot band stretching\nalong the perimeter. It can be given as a percentage string, like\n`\"10%\"`, or as a pixel number, like `10`. The default value 10 is\nthe same as the default [tickLength](#yAxis.tickLength), thus making\nthe plot band act as a background for the tick markers."
              },
              "subtree": {}
            }
          }
        },
        "plotLines": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "plotLines",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "An array of objects representing plot lines on the X axis",
            "extends": "xAxis.plotLines"
          },
          "subtree": {}
        },
        "height": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "height",
            "excludes": {},
            "default": "null",
            "products": {
              "highstock": 1
            },
            "description": "The height of the Y axis. If it's a number, it is interpreted as\npixels.\n\nSince Highstock 2: If it's a percentage string, it is interpreted\nas percentages of the total plot height."
          },
          "subtree": {}
        },
        "softMax": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "softMax",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A soft maximum for the axis. If the series data maximum is less\nthan this, the axis will stay at this maximum, but if the series\ndata maximum is higher, the axis will flex to show all data."
          },
          "subtree": {}
        },
        "softMin": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "softMin",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A soft minimum for the axis. If the series data minimum is greater\nthan this, the axis will stay at this minimum, but if the series\ndata minimum is lower, the axis will flex to show all data."
          },
          "subtree": {}
        },
        "top": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "top",
            "excludes": {},
            "default": "null",
            "products": {
              "highstock": 1
            },
            "description": "The top position of the Y axis. If it's a number, it is interpreted\nas pixel position relative to the chart.\n\nSince Highstock 2: If it's a percentage string, it is interpreted\nas percentages of the plot height, offset from plot area top."
          },
          "subtree": {}
        },
        "scrollbar": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "scrollbar",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "An optional scrollbar to display on the Y axis in response to limiting\nthe minimum an maximum of the axis values.\n\nIn styled mode, all the presentational options for the scrollbar\nare replaced by the classes `.highcharts-scrollbar-thumb`, `.highcharts-scrollbar-arrow`, `.highcharts-scrollbar-button`, `.highcharts-scrollbar-rifles` and `.highcharts-scrollbar-track`.",
            "extends": "scrollbar"
          },
          "subtree": {
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "false",
                "products": {
                  "highstock": 1
                },
                "description": "Enable the scrollbar on the Y axis."
              },
              "subtree": {}
            },
            "margin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "margin",
                "excludes": {},
                "default": "10",
                "products": {
                  "highstock": 1
                },
                "description": "Pixel margin between the scrollbar and the axis elements."
              },
              "subtree": {}
            },
            "showFull": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "showFull",
                "excludes": {},
                "default": "true",
                "products": {
                  "highstock": 1
                },
                "description": "Whether to show the scrollbar when it is fully zoomed out at max\nrange. Setting it to `false` on the Y axis makes the scrollbar stay\nhidden until the user zooms in, like common in browsers."
              },
              "subtree": {}
            },
            "size": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "size",
                "excludes": {},
                "default": "14",
                "products": {
                  "highstock": 1
                },
                "description": "The width of a vertical scrollbar or height of a horizontal scrollbar.\n Defaults to 20 on touch devices."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "default": "3",
                "products": {
                  "highstock": 1
                },
                "description": "Z index of the scrollbar elements."
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "drilldown": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "drilldown",
        "excludes": {},
        "description": "Options for drill down, the concept of inspecting increasingly high \nresolution data through clicking on chart items like columns or pie slices.\n\nThe drilldown feature requires the drilldown.js file to be loaded, \nfound in the modules directory of the download package, or online at \n(code.highcharts.com/modules/drilldown.js)[code.highcharts.com/modules/\ndrilldown.js]."
      },
      "subtree": {
        "activeAxisLabelStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "activeAxisLabelStyle",
            "excludes": {},
            "default": "{ \"cursor\": \"pointer\", \"color\": \"#003399\", \"fontWeight\": \"bold\", \"textDecoration\": \"underline\" }",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Additional styles to apply to the X axis label for a point that\nhas drilldown data. By default it is underlined and blue to invite\nto interaction."
          },
          "subtree": {
            "cursor": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "cursor",
                "excludes": {},
                "default": "pointer"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#003399"
              },
              "subtree": {}
            },
            "fontWeight": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "fontWeight",
                "excludes": {},
                "default": "bold"
              },
              "subtree": {}
            },
            "textDecoration": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "textDecoration",
                "excludes": {},
                "default": "underline"
              },
              "subtree": {}
            }
          }
        },
        "activeDataLabelStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "activeDataLabelStyle",
            "excludes": {},
            "default": "{ \"cursor\": \"pointer\", \"color\": \"#003399\", \"fontWeight\": \"bold\", \"textDecoration\": \"underline\" }",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Additional styles to apply to the data label of a point that has\ndrilldown data. By default it is underlined and blue to invite to\ninteraction."
          },
          "subtree": {
            "cursor": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "cursor",
                "excludes": {},
                "default": "pointer"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#003399"
              },
              "subtree": {}
            },
            "fontWeight": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "fontWeight",
                "excludes": {},
                "default": "bold"
              },
              "subtree": {}
            },
            "textDecoration": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "textDecoration",
                "excludes": {},
                "default": "underline"
              },
              "subtree": {}
            }
          }
        },
        "animation": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "animation",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Set the animation for all drilldown animations. Animation of a drilldown\noccurs when drilling between a column point and a column series,\nor a pie slice and a full pie series. Drilldown can still be used\nbetween series and points of different types, but animation will\nnot occur.\n\nThe animation can either be set as a boolean or a configuration\nobject. If `true`, it will use the 'swing' jQuery easing and a duration\nof 500 ms. If used as a configuration object, the following properties\nare supported:\n\n<dl>\n\n<dt>duration</dt>\n\n<dd>The duration of the animation in milliseconds.</dd>\n\n<dt>easing</dt>\n\n<dd>A string reference to an easing function set on the `Math` object.\nSee [the easing demo](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-\nanimation-easing/).</dd>\n\n</dl>"
          },
          "subtree": {
            "duration": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "duration",
                "excludes": {},
                "default": "500",
                "description": "Duration for the drilldown animation."
              },
              "subtree": {}
            }
          }
        },
        "drillUpButton": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "drillUpButton",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Options for the drill up button that appears when drilling down\non a series. The text for the button is defined in\n[lang.drillUpText](#lang.drillUpText)."
          },
          "subtree": {
            "position": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "position",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "Positioning options for the button within the `relativeTo` box.\nAvailable properties are `x`, `y`, `align` and `verticalAlign`."
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "right",
                    "description": "Horizontal alignment."
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "default": -10,
                    "description": "The X offset of the button."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": 10,
                    "description": "The Y offset of the button."
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "top",
                    "products": {
                      "highcharts": 1,
                      "highmaps": 1
                    },
                    "description": "Vertical alignment of the button."
                  },
                  "subtree": {}
                }
              }
            },
            "relativeTo": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "relativeTo",
                "excludes": {},
                "default": "plotBox",
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "What box to align the button to. Can be either `plotBox` or\n`spacingBox`."
              },
              "subtree": {}
            },
            "theme": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "theme",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "A collection of attributes for the button. The object takes SVG\nattributes like `fill`, `stroke`, `stroke-width` or `r`, the border\nradius. The theme also supports `style`, a collection of CSS\nproperties for the text. Equivalent attributes for the hover state\nare given in `theme.states.hover`."
              },
              "subtree": {}
            }
          }
        },
        "allowPointDrilldown": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "allowPointDrilldown",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1
            },
            "description": "When this option is false, clicking a single point will drill down\nall points in the same category, equivalent to clicking the X axis\nlabel."
          },
          "subtree": {}
        },
        "series": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "series",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "An array of series configurations for the drill down. Each series\nconfiguration uses the same syntax as the [series](#series) option\nset. These drilldown series are hidden by default. The drilldown\nseries is linked to the parent series' point by its `id`."
          },
          "subtree": {}
        }
      }
    },
    "chart": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "chart",
        "excludes": {}
      },
      "subtree": {
        "events": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "events",
            "excludes": {},
            "description": "Event listeners for the chart."
          },
          "subtree": {
            "drilldown": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "drilldown",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "Fires when a drilldown point is clicked, before the new series is\nadded. This event is also utilized for async drilldown, where the\nseriesOptions are not added by option, but rather loaded async. Note\nthat when clicking a category label to trigger multiple series drilldown,\none `drilldown` event is triggered per point in the category.\n\nEvent arguments:\n\n<dl>\n\n<dt>`category`</dt>\n\n<dd>If a category label was clicked, which index.</dd>\n\n<dt>`point`</dt>\n\n<dd>The originating point.</dd>\n\n<dt>`originalEvent`</dt>\n\n<dd>The original browser event (usually click) that triggered the\ndrilldown.</dd>\n\n<dt>`points`</dt>\n\n<dd>If a category label was clicked, this array holds all points\ncorresponing to the category.</dd>\n\n<dt>`seriesOptions`</dt>\n\n<dd>Options for the new series</dd>\n\n</dl>"
              },
              "subtree": {}
            },
            "drillup": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "drillup",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "Fires when drilling up from a drilldown series."
              },
              "subtree": {}
            },
            "drillupall": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "drillupall",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "In a chart with multiple drilldown series, this event fires after\nall the series have been drilled up."
              },
              "subtree": {}
            },
            "afterPrint": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "afterPrint",
                "excludes": {},
                "description": "Fires after a chart is printed through the context menu item or the\n`Chart.print` method. Requires the exporting module."
              },
              "subtree": {}
            },
            "beforePrint": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "beforePrint",
                "excludes": {},
                "description": "Fires before a chart is printed through the context menu item or\nthe `Chart.print` method. Requires the exporting module."
              },
              "subtree": {}
            },
            "addSeries": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "addSeries",
                "excludes": {},
                "description": "Fires when a series is added to the chart after load time, using\nthe `addSeries` method. One parameter, `event`, is passed to the\nfunction, containing common event information.\nThrough `event.options` you can access the series options that was\npassed to the `addSeries` method. Returning false prevents the series\nfrom being added."
              },
              "subtree": {}
            },
            "click": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "click",
                "excludes": {},
                "description": "Fires when clicking on the plot background. One parameter, `event`,\nis passed to the function, containing common event information.\n\nInformation on the clicked spot can be found through `event.xAxis`\nand `event.yAxis`, which are arrays containing the axes of each dimension\nand each axis' value at the clicked spot. The primary axes are\n`event.xAxis[0]` and `event.yAxis[0]`. Remember the unit of a\ndatetime axis is milliseconds since 1970-01-01 00:00:00.\n\n<pre>click: function(e) {\n    console.log(\n        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', e.xAxis[0].value),\n        e.yAxis[0].value\n    )\n}</pre>"
              },
              "subtree": {}
            },
            "load": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "load",
                "excludes": {},
                "description": "Fires when the chart is finished loading. Since v4.2.2, it also waits\nfor images to be loaded, for example from point markers. One parameter,\n`event`, is passed to the function, containing common event information.\n\nThere is also a second parameter to the chart constructor where a\ncallback function can be passed to be executed on chart.load."
              },
              "subtree": {}
            },
            "redraw": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "redraw",
                "excludes": {},
                "description": "Fires when the chart is redrawn, either after a call to chart.redraw()\nor after an axis, series or point is modified with the `redraw` option\nset to true. One parameter, `event`, is passed to the function, containing common event information."
              },
              "subtree": {}
            },
            "render": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "render",
                "excludes": {},
                "description": "Fires after initial load of the chart (directly after the `load`\nevent), and after each redraw (directly after the `redraw` event)."
              },
              "subtree": {}
            },
            "selection": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "selection",
                "excludes": {},
                "description": "Fires when an area of the chart has been selected. Selection is enabled\nby setting the chart's zoomType. One parameter, `event`, is passed\nto the function, containing common event information. The default action for the selection event is to\nzoom the chart to the selected area. It can be prevented by calling\n`event.preventDefault()`.\n\nInformation on the selected area can be found through `event.xAxis`\nand `event.yAxis`, which are arrays containing the axes of each dimension\nand each axis' min and max values. The primary axes are `event.xAxis[0]`\nand `event.yAxis[0]`. Remember the unit of a datetime axis is milliseconds\nsince 1970-01-01 00:00:00.\n\n<pre>selection: function(event) {\n    // log the min and max of the primary, datetime x-axis\n    console.log(\n        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', event.xAxis[0].min),\n        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', event.xAxis[0].max)\n    );\n    // log the min and max of the y axis\n    console.log(event.yAxis[0].min, event.yAxis[0].max);\n}</pre>"
              },
              "subtree": {}
            }
          }
        },
        "parallelCoordinates": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "parallelCoordinates",
            "excludes": {},
            "default": false,
            "products": {
              "highcharts": 1
            },
            "description": "Flag to render charts as a parallel coordinates plot. In a parallel\ncoordinates plot (||-coords) by default all required yAxes are generated\nand the legend is disabled. This feature requires\n`modules/parallel-coordinates.js`."
          },
          "subtree": {}
        },
        "parallelAxes": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "parallelAxes",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Common options for all yAxes rendered in a parallel coordinates plot.\nThis feature requires `modules/parallel-coordinates.js`.\n\nThe default options are:\n<pre>\nparallelAxes: {\n\tlineWidth: 1,       // classic mode only\n\tgridlinesWidth: 0,  // classic mode only\n\ttitle: {\n\t\ttext: '',\n\t\treserveSpace: false\n\t},\n\tlabels: {\n\t\tx: 0,\n\t\ty: 0,\n\t\talign: 'center',\n\t\treserveSpace: false\n\t},\n\toffset: 0\n}</pre>",
            "extends": "{yAxis}"
          },
          "subtree": {
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 1
              },
              "subtree": {}
            },
            "title": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "title",
                "excludes": {},
                "description": "Titles for yAxes are taken from \n[xAxis.categories](#xAxis.categories). All options for \n`xAxis.labels` applies to parallel coordinates titles.\nFor example, to style categories, use \n[xAxis.labels.style](#xAxis.labels.style)."
              },
              "subtree": {
                "text": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "text",
                    "excludes": {},
                    "default": ""
                  },
                  "subtree": {}
                },
                "reserveSpace": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "reserveSpace",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "labels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "labels",
                "excludes": {}
              },
              "subtree": {
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "default": 0
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": 4
                  },
                  "subtree": {}
                },
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "center"
                  },
                  "subtree": {}
                },
                "reserveSpace": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "reserveSpace",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "offset": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "offset",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            }
          }
        },
        "description": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "description",
            "excludes": {},
            "default": "undefined",
            "description": "A text description of the chart.\n\nIf the Accessibility module is loaded, this is included by default\nas a long description of the chart and its contents in the hidden\nscreen reader information region."
          },
          "subtree": {}
        },
        "typeDescription": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "typeDescription",
            "excludes": {},
            "default": "undefined",
            "description": "A text description of the chart type.\n\nIf the Accessibility module is loaded, this will be included in the\ndescription of the chart in the screen reader information region.\n\n\nHighcharts will by default attempt to guess the chart type, but for\nmore complex charts it is recommended to specify this property for\nclarity."
          },
          "subtree": {}
        },
        "borderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderRadius",
            "excludes": {},
            "default": "0",
            "description": "The corner radius of the outer chart border."
          },
          "subtree": {}
        },
        "colorCount": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "colorCount",
            "excludes": {},
            "default": "10",
            "description": "In styled mode, this sets how many colors the class names\nshould rotate between. With ten colors, series (or points) are\ngiven class names like `highcharts-color-0`, `highcharts-color-0`\n[...] `highcharts-color-9`. The equivalent in non-styled mode\nis to set colors using the [colors](#colors) setting."
          },
          "subtree": {}
        },
        "defaultSeriesType": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "defaultSeriesType",
            "excludes": {},
            "default": "line",
            "products": {
              "highcharts": 1
            },
            "description": "Alias of `type`."
          },
          "subtree": {}
        },
        "ignoreHiddenSeries": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "ignoreHiddenSeries",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "If true, the axes will scale to the remaining visible series once\none series is hidden. If false, hiding and showing a series will\nnot affect the axes or the other series. For stacks, once one series\nwithin the stack is hidden, the rest of the stack will close in\naround it even if the axis is not affected."
          },
          "subtree": {}
        },
        "spacing": {
          "meta": {
            "types": {
              "array": "Number"
            },
            "name": "spacing",
            "excludes": {},
            "default": "[10, 10, 15, 10]",
            "description": "The distance between the outer edge of the chart and the content,\nlike title or legend, or axis title and labels if present. The\nnumbers in the array designate top, right, bottom and left respectively.\nUse the options spacingTop, spacingRight, spacingBottom and spacingLeft\noptions for shorthand setting of one option."
          },
          "subtree": {}
        },
        "resetZoomButton": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "resetZoomButton",
            "excludes": {},
            "description": "The button that appears after a selection zoom, allowing the user\nto reset zoom."
          },
          "subtree": {
            "theme": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "theme",
                "excludes": {},
                "description": "A collection of attributes for the button. The object takes SVG\nattributes like `fill`, `stroke`, `stroke-width` or `r`, the border\nradius. The theme also supports `style`, a collection of CSS properties\nfor the text. Equivalent attributes for the hover state are given\nin `theme.states.hover`."
              },
              "subtree": {
                "zIndex": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "zIndex",
                    "excludes": {},
                    "default": 6,
                    "description": "The Z index for the reset zoom button. The default value\nplaces it below the tooltip that has Z index 7."
                  },
                  "subtree": {}
                }
              }
            },
            "position": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "position",
                "excludes": {},
                "description": "The position of the button."
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "right",
                    "description": "The horizontal alignment of the button."
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "default": -10,
                    "description": "The horizontal offset of the button."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": 10,
                    "description": "The vertical offset of the button."
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "top",
                    "description": "The vertical alignment of the button."
                  },
                  "subtree": {}
                }
              }
            },
            "relativeTo": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "relativeTo",
                "excludes": {},
                "default": "plot",
                "description": "What frame the button should be placed related to. Can be either\n`plot` or `chart`"
              },
              "subtree": {}
            }
          }
        },
        "width": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "width",
            "excludes": {},
            "default": "null",
            "description": "An explicit width for the chart. By default (when `null`) the width\nis calculated from the offset width of the containing element."
          },
          "subtree": {}
        },
        "height": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "height",
            "excludes": {},
            "default": "null",
            "description": "An explicit height for the chart. If a _number_, the height is\ngiven in pixels. If given a _percentage string_ (for example `'56%'`),\nthe height is given as the percentage of the actual chart width.\nThis allows for preserving the aspect ratio across responsive\nsizes.\n\nBy default (when `null`) the height is calculated from the offset\nheight of the containing element, or 400 pixels if the containing\nelement's height is 0."
          },
          "subtree": {}
        },
        "borderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "borderColor",
            "excludes": {},
            "default": "#335cad",
            "description": "The color of the outer chart border."
          },
          "subtree": {}
        },
        "backgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "backgroundColor",
            "excludes": {},
            "default": "#FFFFFF",
            "description": "The background color or gradient for the outer chart area."
          },
          "subtree": {}
        },
        "plotBorderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "plotBorderColor",
            "excludes": {},
            "default": "#cccccc",
            "description": "The color of the inner chart or plot area border."
          },
          "subtree": {}
        },
        "alignTicks": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "alignTicks",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "When using multiple axis, the ticks of two or more opposite axes\nwill automatically be aligned by adding ticks to the axis or axes\nwith the least ticks, as if `tickAmount` were specified.\n\nThis can be prevented by setting `alignTicks` to false. If the grid\nlines look messy, it's a good idea to hide them for the secondary\naxis by setting `gridLineWidth` to 0.\n\nIf `startOnTick` or `endOnTick` in an Axis options are set to false,\nthen the `alignTicks ` will be disabled for the Axis.\n\nDisabled for logarithmic axes."
          },
          "subtree": {}
        },
        "animation": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "animation",
            "excludes": {},
            "default": "true",
            "description": "Set the overall animation for all chart updating. Animation can be\ndisabled throughout the chart by setting it to false here. It can\nbe overridden for each individual API method as a function parameter.\nThe only animation not affected by this option is the initial series\nanimation, see [plotOptions.series.animation](#plotOptions.series.\nanimation).\n\nThe animation can either be set as a boolean or a configuration\nobject. If `true`, it will use the 'swing' jQuery easing and a\nduration of 500 ms. If used as a configuration object, the following\nproperties are supported:\n\n<dl>\n\n<dt>duration</dt>\n\n<dd>The duration of the animation in milliseconds.</dd>\n\n<dt>easing</dt>\n\n<dd>A string reference to an easing function set on the `Math` object.\nSee [the easing demo](http://jsfiddle.net/gh/get/library/pure/\nhighcharts/highcharts/tree/master/samples/highcharts/plotoptions/\nseries-animation-easing/).</dd>\n\n</dl>"
          },
          "subtree": {}
        },
        "className": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "className",
            "excludes": {},
            "description": "A CSS class name to apply to the charts container `div`, allowing\nunique CSS styling for each chart."
          },
          "subtree": {}
        },
        "margin": {
          "meta": {
            "types": {
              "array": "object"
            },
            "name": "margin",
            "excludes": {},
            "description": "The margin between the outer edge of the chart and the plot area.\nThe numbers in the array designate top, right, bottom and left\nrespectively. Use the options `marginTop`, `marginRight`,\n`marginBottom` and `marginLeft` for shorthand setting of one option.\n\nBy default there is no margin. The actual space is dynamically calculated\nfrom the offset of axis labels, axis title, title, subtitle and legend\nin addition to the `spacingTop`, `spacingRight`, `spacingBottom`\nand `spacingLeft` options."
          },
          "subtree": {}
        },
        "marginBottom": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "marginBottom",
            "excludes": {},
            "description": "The margin between the bottom outer edge of the chart and the plot\narea. Use this to set a fixed pixel value for the margin as opposed\nto the default dynamic margin. See also `spacingBottom`."
          },
          "subtree": {}
        },
        "marginLeft": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "marginLeft",
            "excludes": {},
            "default": "null",
            "description": "The margin between the left outer edge of the chart and the plot\narea. Use this to set a fixed pixel value for the margin as opposed\nto the default dynamic margin. See also `spacingLeft`."
          },
          "subtree": {}
        },
        "marginRight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "marginRight",
            "excludes": {},
            "default": "null",
            "description": "The margin between the right outer edge of the chart and the plot\narea. Use this to set a fixed pixel value for the margin as opposed\nto the default dynamic margin. See also `spacingRight`."
          },
          "subtree": {}
        },
        "marginTop": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "marginTop",
            "excludes": {},
            "default": "null",
            "description": "The margin between the top outer edge of the chart and the plot area.\nUse this to set a fixed pixel value for the margin as opposed to\nthe default dynamic margin. See also `spacingTop`."
          },
          "subtree": {}
        },
        "panKey": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "panKey",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Allows setting a key to switch between zooming and panning. Can be\none of `alt`, `ctrl`, `meta` (the command key on Mac and Windows\nkey on Windows) or `shift`. The keys are mapped directly to the key\nproperties of the click event argument (`event.altKey`, `event.ctrlKey`,\n`event.metaKey` and `event.shiftKey`)."
          },
          "subtree": {}
        },
        "panning": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "panning",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Allow panning in a chart. Best used with [panKey](#chart.panKey)\nto combine zooming and panning.\n\nOn touch devices, when the [tooltip.followTouchMove](#tooltip.followTouchMove)\noption is `true` (default), panning requires two fingers. To allow\npanning with one finger, set `followTouchMove` to `false`."
          },
          "subtree": {}
        },
        "pinchType": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "pinchType",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Equivalent to [zoomType](#chart.zoomType), but for multitouch gestures\nonly. By default, the `pinchType` is the same as the `zoomType` setting.\nHowever, pinching can be enabled separately in some cases, for example\nin stock charts where a mouse drag pans the chart, while pinching\nis enabled. When [tooltip.followTouchMove](#tooltip.followTouchMove)\nis true, pinchType only applies to two-finger touches."
          },
          "subtree": {}
        },
        "inverted": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "inverted",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Whether to invert the axes so that the x axis is vertical and y axis\nis horizontal. When `true`, the x axis is [reversed](#xAxis.reversed)\nby default."
          },
          "subtree": {}
        },
        "plotBorderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "plotBorderWidth",
            "excludes": {},
            "default": "0",
            "description": "The pixel width of the plot area border."
          },
          "subtree": {}
        },
        "plotShadow": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "plotShadow",
            "excludes": {},
            "default": "false",
            "description": "Whether to apply a drop shadow to the plot area. Requires that\nplotBackgroundColor be set. The shadow can be an object configuration\ncontaining `color`, `offsetX`, `offsetY`, `opacity` and `width`."
          },
          "subtree": {}
        },
        "polar": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "polar",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1
            },
            "description": "When true, cartesian charts like line, spline, area and column are\ntransformed into the polar coordinate system. Requires\n`highcharts-more.js`."
          },
          "subtree": {}
        },
        "reflow": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "reflow",
            "excludes": {},
            "default": "true",
            "description": "Whether to reflow the chart to fit the width of the container div\non resizing the window."
          },
          "subtree": {}
        },
        "renderTo": {
          "meta": {
            "types": {
              "string": 1,
              "object": 1
            },
            "name": "renderTo",
            "excludes": {},
            "description": "The HTML element where the chart will be rendered. If it is a string,\nthe element by that id is used. The HTML element can also be passed\nby direct reference, or as the first argument of the chart constructor,\n in which case the option is not needed."
          },
          "subtree": {}
        },
        "selectionMarkerFill": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "selectionMarkerFill",
            "excludes": {},
            "default": "rgba(51,92,173,0.25)",
            "description": "The background color of the marker square when selecting (zooming\nin on) an area of the chart."
          },
          "subtree": {}
        },
        "shadow": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "shadow",
            "excludes": {},
            "default": "false",
            "description": "Whether to apply a drop shadow to the outer chart area. Requires\nthat backgroundColor be set. The shadow can be an object configuration\ncontaining `color`, `offsetX`, `offsetY`, `opacity` and `width`."
          },
          "subtree": {}
        },
        "showAxes": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showAxes",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Whether to show the axes initially. This only applies to empty charts\nwhere series are added dynamically, as axes are automatically added\nto cartesian series."
          },
          "subtree": {}
        },
        "spacingBottom": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "spacingBottom",
            "excludes": {},
            "default": "15",
            "description": "The space between the bottom edge of the chart and the content (plot\narea, axis title and labels, title, subtitle or legend in top position)."
          },
          "subtree": {}
        },
        "spacingLeft": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "spacingLeft",
            "excludes": {},
            "default": "10",
            "description": "The space between the left edge of the chart and the content (plot\narea, axis title and labels, title, subtitle or legend in top position)."
          },
          "subtree": {}
        },
        "spacingRight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "spacingRight",
            "excludes": {},
            "default": "10",
            "description": "The space between the right edge of the chart and the content (plot\narea, axis title and labels, title, subtitle or legend in top\nposition)."
          },
          "subtree": {}
        },
        "spacingTop": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "spacingTop",
            "excludes": {},
            "default": "10",
            "description": "The space between the top edge of the chart and the content (plot\narea, axis title and labels, title, subtitle or legend in top\nposition)."
          },
          "subtree": {}
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{\"fontFamily\":\"\\\"Lucida Grande\\\", \\\"Lucida Sans Unicode\\\", Verdana, Arial, Helvetica, sans-serif\",\"fontSize\":\"12px\"}",
            "description": "Additional CSS styles to apply inline to the container `div`. Note\nthat since the default font styles are applied in the renderer, it\nis ignorant of the individual chart options and must be set globally."
          },
          "subtree": {}
        },
        "type": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "type",
            "excludes": {},
            "description": "The default series type for the chart. Can be any of the chart types\nlisted under [plotOptions](#plotOptions)."
          },
          "subtree": {}
        },
        "zoomType": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "zoomType",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Decides in what dimensions the user can zoom by dragging the mouse.\nCan be one of `x`, `y` or `xy`."
          },
          "subtree": {}
        },
        "borderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderWidth",
            "excludes": {},
            "default": "0",
            "description": "The pixel width of the outer chart border."
          },
          "subtree": {}
        },
        "plotBackgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "plotBackgroundColor",
            "excludes": {},
            "default": "null",
            "description": "The background color or gradient for the plot area."
          },
          "subtree": {}
        },
        "plotBackgroundImage": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "plotBackgroundImage",
            "excludes": {},
            "default": "null",
            "description": "The URL for an image to use as the plot background. To set an image\nas the background for the entire chart, set a CSS background image\nto the container element. Note that for the image to be applied to\nexported charts, its URL needs to be accessible by the export server."
          },
          "subtree": {}
        },
        "options3d": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "options3d",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Options to render charts in 3 dimensions. This feature requires\n`highcharts-3d.js`, found in the download package or online at\n[code.highcharts.com/highcharts-3d.js](http://code.highcharts.com/highcharts-\n3d.js)."
          },
          "subtree": {
            "frame": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "frame",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "Provides the option to draw a frame around the charts by defining\na bottom, front and back panel."
              },
              "subtree": {
                "side": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "side",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "Note: As of v5.0.12, `frame.left` or `frame.right` should be used\ninstead.\n\nThe side for the frame around a 3D chart."
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "transparent",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The color of the panel."
                      },
                      "subtree": {}
                    },
                    "size": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "size",
                        "excludes": {},
                        "default": "1",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The thickness of the panel."
                      },
                      "subtree": {}
                    }
                  }
                },
                "visible": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "visible",
                    "excludes": {},
                    "default": "default",
                    "description": "Whether the frames are visible."
                  },
                  "subtree": {}
                },
                "size": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "size",
                    "excludes": {},
                    "default": 1,
                    "description": "General pixel thickness for the frame faces."
                  },
                  "subtree": {}
                },
                "bottom": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "bottom",
                    "excludes": {},
                    "description": "The bottom of the frame around a 3D chart."
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "transparent",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The color of the panel."
                      },
                      "subtree": {}
                    },
                    "size": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "size",
                        "excludes": {},
                        "default": "1",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "The thickness of the panel."
                      },
                      "subtree": {}
                    },
                    "visible": {
                      "meta": {
                        "types": {
                          "boolean": 1,
                          "string": 1
                        },
                        "name": "visible",
                        "excludes": {},
                        "default": "default",
                        "products": {
                          "highcharts": 1
                        },
                        "description": "Whether to display the frame. Possible values are `true`, `false`,\n`\"auto\"` to display only the frames behind the data, and `\"default\"`\nto display faces behind the data based on the axis layout, ignoring\nthe point of view."
                      },
                      "subtree": {}
                    }
                  }
                },
                "top": {
                  "meta": {
                    "types": {},
                    "name": "top",
                    "excludes": {},
                    "description": "The top of the frame around a 3D chart.",
                    "extends": "{chart.options3d.frame.bottom}"
                  },
                  "subtree": {}
                },
                "left": {
                  "meta": {
                    "types": {},
                    "name": "left",
                    "excludes": {},
                    "description": "The left side of the frame around a 3D chart.",
                    "extends": "{chart.options3d.frame.bottom}"
                  },
                  "subtree": {}
                },
                "right": {
                  "meta": {
                    "types": {},
                    "name": "right",
                    "excludes": {},
                    "description": "The right of the frame around a 3D chart.",
                    "extends": "{chart.options3d.frame.bottom}"
                  },
                  "subtree": {}
                },
                "back": {
                  "meta": {
                    "types": {},
                    "name": "back",
                    "excludes": {},
                    "description": "The back side of the frame around a 3D chart.",
                    "extends": "{chart.options3d.frame.bottom}"
                  },
                  "subtree": {}
                },
                "front": {
                  "meta": {
                    "types": {},
                    "name": "front",
                    "excludes": {},
                    "description": "The front of the frame around a 3D chart.",
                    "extends": "{chart.options3d.frame.bottom}"
                  },
                  "subtree": {}
                }
              }
            },
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1
                },
                "description": "Wether to render the chart using the 3D functionality."
              },
              "subtree": {}
            },
            "alpha": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "alpha",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "One of the two rotation angles for the chart."
              },
              "subtree": {}
            },
            "beta": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "beta",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "One of the two rotation angles for the chart."
              },
              "subtree": {}
            },
            "depth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "depth",
                "excludes": {},
                "default": "100",
                "products": {
                  "highcharts": 1
                },
                "description": "The total depth of the chart."
              },
              "subtree": {}
            },
            "fitToPlot": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "fitToPlot",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether the 3d box should automatically adjust to the chart plot\narea."
              },
              "subtree": {}
            },
            "viewDistance": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "viewDistance",
                "excludes": {},
                "default": "100",
                "products": {
                  "highcharts": 1
                },
                "description": "Defines the distance the viewer is standing in front of the chart,\nthis setting is important to calculate the perspective effect\nin column and scatter charts. It is not used for 3D pie charts."
              },
              "subtree": {}
            },
            "axisLabelPosition": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "axisLabelPosition",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "Set it to `\"auto\"` to automatically move the labels to the best\nedge."
              },
              "subtree": {}
            }
          }
        },
        "map": {
          "meta": {
            "types": {
              "string": 1,
              "array": "Object"
            },
            "name": "map",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highmaps": 1
            },
            "description": "Default `mapData` for all series. If set to a string, it functions\nas an index into the `Highcharts.maps` array. Otherwise it is interpreted\nas map data."
          },
          "subtree": {}
        },
        "mapTransforms": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "mapTransforms",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highmaps": 1
            },
            "description": "Set lat/lon transformation definitions for the chart. If not defined,\n these are extracted from the map data."
          },
          "subtree": {}
        }
      }
    },
    "exporting": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "exporting",
        "excludes": {},
        "description": "Options for the exporting module. For an overview on the matter, see [the docs](http://www.highcharts.com/docs/export-module/export-module-overview)."
      },
      "subtree": {
        "csv": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "csv",
            "excludes": {},
            "description": "Options for exporting data to CSV or ExCel, or displaying the data\nin a HTML table or a JavaScript structure. Requires the\n`export-data.js` module. This module adds data export options to the\nexport menu and provides functions like `Chart.getCSV`,\n`Chart.getTable`, `Chart.getDataRows` and `Chart.viewData`."
          },
          "subtree": {
            "columnHeaderFormatter": {
              "meta": {
                "types": {
                  "function": 1,
                  "null": 1
                },
                "name": "columnHeaderFormatter",
                "excludes": {},
                "default": null,
                "description": "Formatter callback for the column headers. Parameters are:\n- `item` - The series or axis object)\n- `key` -  The point key, for example y or z\n- `keyLength` - The amount of value keys for this item, for\n  example a range series has the keys `low` and `high` so the\n  key length is 2.\n\nIf [useMultiLevelHeaders](#exporting.useMultiLevelHeaders) is\ntrue, columnHeaderFormatter by default returns an object with\ncolumnTitle and topLevelColumnTitle for each key. Columns with\nthe same topLevelColumnTitle have their titles merged into a\nsingle cell with colspan for table/Excel export.\n\nIf `useMultiLevelHeaders` is false, or for CSV export, it returns\nthe series name, followed by the key if there is more than one\nkey.\n\nFor the axis it returns the axis title or \"Category\" or\n\"DateTime\" by default.\n\nReturn `false` to use Highcharts' proposed header."
              },
              "subtree": {}
            },
            "dateFormat": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "dateFormat",
                "excludes": {},
                "default": "%Y-%m-%d %H:%M:%S",
                "description": "Which date format to use for exported dates on a datetime X axis.\nSee `Highcharts.dateFormat`."
              },
              "subtree": {}
            },
            "decimalPoint": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "decimalPoint",
                "excludes": {},
                "default": null,
                "description": "Which decimal point to use for exported CSV. Defaults to the same\nas the browser locale, typically `.` (English) or `,` (German,\nFrench etc)."
              },
              "subtree": {}
            },
            "itemDelimiter": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "itemDelimiter",
                "excludes": {},
                "default": null,
                "description": "The item delimiter in the exported data. Use `;` for direct\nexporting to Excel. Defaults to a best guess based on the browser\nlocale. If the locale _decimal point_ is `,`, the `itemDelimiter`\ndefaults to `;`, otherwise the `itemDelimiter` defaults to `,`."
              },
              "subtree": {}
            },
            "lineDelimiter": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "lineDelimiter",
                "excludes": {},
                "default": "\n",
                "description": "The line delimiter in the exported data, defaults to a newline."
              },
              "subtree": {}
            }
          }
        },
        "showTable": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showTable",
            "excludes": {},
            "default": false,
            "description": "Export-data module required. Show a HTML table below the chart with\nthe chart's current data."
          },
          "subtree": {}
        },
        "useMultiLevelHeaders": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useMultiLevelHeaders",
            "excludes": {},
            "default": true,
            "description": "Export-data module required. Use multi level headers in data table.\nIf [csv.columnHeaderFormatter](#exporting.csv.columnHeaderFormatter)\nis defined, it has to return objects in order for multi level headers\nto work."
          },
          "subtree": {}
        },
        "useRowspanHeaders": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useRowspanHeaders",
            "excludes": {},
            "default": true,
            "description": "Export-data module required. If using multi level table headers, use\nrowspans for headers that have only one level."
          },
          "subtree": {}
        },
        "tableCaption": {
          "meta": {
            "types": {
              "boolean": 1,
              "string": 1
            },
            "name": "tableCaption",
            "excludes": {},
            "default": "undefined",
            "description": "Export-data module required. Caption for the data table. Same as\nchart title by default. Set to `false` to disable."
          },
          "subtree": {}
        },
        "type": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "type",
            "excludes": {},
            "default": "image/png",
            "description": "Default MIME type for exporting if `chart.exportChart()` is called\nwithout specifying a `type` option. Possible values are `image/png`,\n `image/jpeg`, `application/pdf` and `image/svg+xml`."
          },
          "subtree": {}
        },
        "url": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "url",
            "excludes": {},
            "default": "https://export.highcharts.com/",
            "description": "The URL for the server module converting the SVG string to an image\nformat. By default this points to Highchart's free web service."
          },
          "subtree": {}
        },
        "printMaxWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "printMaxWidth",
            "excludes": {},
            "default": "780",
            "description": "When printing the chart from the menu item in the burger menu, if\nthe on-screen chart exceeds this width, it is resized. After printing\nor cancelled, it is restored. The default width makes the chart\nfit into typical paper format. Note that this does not affect the\nchart when printing the web page as a whole."
          },
          "subtree": {}
        },
        "scale": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "scale",
            "excludes": {},
            "default": 2,
            "description": "Defines the scale or zoom factor for the exported image compared\nto the on-screen display. While for instance a 600px wide chart\nmay look good on a website, it will look bad in print. The default\nscale of 2 makes this chart export to a 1200px PNG or JPG."
          },
          "subtree": {}
        },
        "buttons": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "buttons",
            "excludes": {},
            "description": "Options for the export related buttons, print and export. In addition\nto the default buttons listed here, custom buttons can be added.\nSee [navigation.buttonOptions](#navigation.buttonOptions) for general\noptions."
          },
          "subtree": {
            "contextButton": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "contextButton",
                "excludes": {},
                "description": "Options for the export button.\n\nIn styled mode, export button styles can be applied with the\n`.highcharts-contextbutton` class.",
                "extends": "navigation.buttonOptions"
              },
              "subtree": {
                "className": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "className",
                    "excludes": {},
                    "default": "highcharts-contextbutton",
                    "description": "The class name of the context button."
                  },
                  "subtree": {}
                },
                "menuClassName": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "menuClassName",
                    "excludes": {},
                    "default": "highcharts-contextmenu",
                    "description": "The class name of the menu appearing from the button."
                  },
                  "subtree": {}
                },
                "symbol": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "symbol",
                    "excludes": {},
                    "default": "menu",
                    "description": "The symbol for the button. Points to a definition function in\nthe `Highcharts.Renderer.symbols` collection. The default `exportIcon`\nfunction is part of the exporting module."
                  },
                  "subtree": {}
                },
                "_titleKey": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "_titleKey",
                    "excludes": {},
                    "default": "contextButtonTitle",
                    "description": "The key to a [lang](#lang) option setting that is used for the\nbutton's title tooltip. When the key is `contextButtonTitle`, it\nrefers to [lang.contextButtonTitle](#lang.contextButtonTitle)\nthat defaults to \"Chart context menu\"."
                  },
                  "subtree": {}
                },
                "menuItems": {
                  "meta": {
                    "types": {
                      "array": "Object"
                    },
                    "name": "menuItems",
                    "excludes": {},
                    "description": "A collection of strings pointing to config options for the menu\nitems. The config options are defined in the\n`menuItemDefinitions` option.\n\nBy default, there is the \"Print\" menu item plus one menu item\nfor each of the available export types. \n\nDefaults to \n<pre>\n[\n\t'printChart',\n\t'separator',\n\t'downloadPNG',\n\t'downloadJPEG',\n\t'downloadPDF',\n\t'downloadSVG'\n]\n</pre>"
                  },
                  "subtree": {}
                },
                "onclick": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "onclick",
                    "excludes": {},
                    "description": "A click handler callback to use on the button directly instead of\nthe popup menu."
                  },
                  "subtree": {}
                },
                "symbolFill": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "symbolFill",
                    "excludes": {},
                    "default": "#666666",
                    "description": "See [navigation.buttonOptions.symbolFill](#navigation.buttonOptions.symbolFill)."
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "default": "-10",
                    "description": "The horizontal position of the button relative to the `align`\noption."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "menuItemDefinitions": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "menuItemDefinitions",
            "excludes": {},
            "description": "An object consisting of definitions for the menu items in the context\nmenu. Each key value pair has a `key` that is referenced in the\n[menuItems](#exporting.buttons.contextButton.menuItems) setting,\nand a `value`, which is an object with the following properties:\n\n<dl>\n\n<dt>onclick</dt>\n\n<dd>The click handler for the menu item</dd>\n\n<dt>text</dt>\n\n<dd>The text for the menu item</dd>\n\n<dt>textKey</dt>\n\n<dd>If internationalization is required, the key to a language string</dd>\n\n</dl>"
          },
          "subtree": {}
        },
        "allowHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "allowHTML",
            "excludes": {},
            "default": "false",
            "description": "Experimental setting to allow HTML inside the chart (added through\nthe `useHTML` options), directly in the exported image. This allows\nyou to preserve complicated HTML structures like tables or bi-directional\ntext in exported charts.\n\nDisclaimer: The HTML is rendered in a `foreignObject` tag in the\ngenerated SVG. The official export server is based on PhantomJS,\nwhich supports this, but other SVG clients, like Batik, does not\nsupport it. This also applies to downloaded SVG that you want to\nopen in a desktop client."
          },
          "subtree": {}
        },
        "chartOptions": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "chartOptions",
            "excludes": {},
            "default": "null",
            "description": "Additional chart options to be merged into an exported chart. For\nexample, a common use case is to add data labels to improve readability\nof the exported chart, or to add a printer-friendly color scheme."
          },
          "subtree": {}
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "description": "Whether to enable the exporting module. Disabling the module will\nhide the context button, but API methods will still be available."
          },
          "subtree": {}
        },
        "error": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "error",
            "excludes": {},
            "default": "undefined",
            "description": "Function to call if the offline-exporting module fails to export\na chart on the client side, and [fallbackToExportServer](#exporting.\nfallbackToExportServer) is disabled. If left undefined, an exception\nis thrown instead."
          },
          "subtree": {}
        },
        "fallbackToExportServer": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "fallbackToExportServer",
            "excludes": {},
            "default": "true",
            "description": "Whether or not to fall back to the export server if the offline-exporting\nmodule is unable to export the chart on the client side."
          },
          "subtree": {}
        },
        "filename": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "filename",
            "excludes": {},
            "default": "chart",
            "description": "The filename, without extension, to use for the exported chart."
          },
          "subtree": {}
        },
        "formAttributes": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "formAttributes",
            "excludes": {},
            "description": "An object containing additional attributes for the POST form that\nsends the SVG to the export server. For example, a `target` can be\nset to make sure the generated image is received in another frame,\n or a custom `enctype` or `encoding` can be set."
          },
          "subtree": {}
        },
        "libURL": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "libURL",
            "excludes": {},
            "description": "Path where Highcharts will look for export module dependencies to\nload on demand if they don't already exist on `window`. Should currently\npoint to location of [CanVG](https://github.com/canvg/canvg) library,\n[RGBColor.js](https://github.com/canvg/canvg), [jsPDF](https://github.\ncom/yWorks/jsPDF) and [svg2pdf.js](https://github.com/yWorks/svg2pdf.\njs), required for client side export in certain browsers."
          },
          "subtree": {}
        },
        "sourceHeight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "sourceHeight",
            "excludes": {},
            "description": "Analogous to [sourceWidth](#exporting.sourceWidth)."
          },
          "subtree": {}
        },
        "sourceWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "sourceWidth",
            "excludes": {},
            "description": "The width of the original chart when exported, unless an explicit\n[chart.width](#chart.width) is set. The width exported raster image\nis then multiplied by [scale](#exporting.scale)."
          },
          "subtree": {}
        },
        "width": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "width",
            "excludes": {},
            "default": "undefined",
            "description": "The pixel width of charts exported to PNG or JPG. As of Highcharts\n3.0, the default pixel width is a function of the [chart.width](#chart.\nwidth) or [exporting.sourceWidth](#exporting.sourceWidth) and the\n[exporting.scale](#exporting.scale)."
          },
          "subtree": {}
        }
      }
    },
    "navigation": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "navigation",
        "excludes": {},
        "description": "A collection of options for buttons and menus appearing in the exporting module."
      },
      "subtree": {
        "buttonOptions": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "buttonOptions",
            "excludes": {},
            "description": "A collection of options for buttons appearing in the exporting module.\n\n\nIn styled mode, the buttons are styled with the `.highcharts-contextbutton` and `.highcharts-button-symbol` class."
          },
          "subtree": {
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "true",
                "description": "Whether to enable buttons."
              },
              "subtree": {}
            },
            "symbolSize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "symbolSize",
                "excludes": {},
                "default": "14",
                "description": "The pixel size of the symbol on the button."
              },
              "subtree": {}
            },
            "symbolX": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "symbolX",
                "excludes": {},
                "default": "12.5",
                "description": "The x position of the center of the symbol inside the button."
              },
              "subtree": {}
            },
            "symbolY": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "symbolY",
                "excludes": {},
                "default": "10.5",
                "description": "The y position of the center of the symbol inside the button."
              },
              "subtree": {}
            },
            "align": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "align",
                "excludes": {},
                "default": "right",
                "description": "Alignment for the buttons."
              },
              "subtree": {}
            },
            "buttonSpacing": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "buttonSpacing",
                "excludes": {},
                "default": "3",
                "description": "The pixel spacing between buttons."
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "height",
                "excludes": {},
                "default": "22",
                "description": "Pixel height of the buttons."
              },
              "subtree": {}
            },
            "text": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "text",
                "excludes": {},
                "default": "null",
                "description": "A text string to add to the individual button."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": "0",
                "description": "The vertical offset of the button's position relative to its\n`verticalAlign`."
              },
              "subtree": {}
            },
            "verticalAlign": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "verticalAlign",
                "excludes": {},
                "default": "top",
                "description": "The vertical alignment of the buttons. Can be one of \"top\", \"middle\"\nor \"bottom\"."
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "width",
                "excludes": {},
                "default": "24",
                "description": "The pixel width of the button."
              },
              "subtree": {}
            },
            "symbolFill": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "symbolFill",
                "excludes": {},
                "default": "#666666",
                "description": "Fill color for the symbol within the button."
              },
              "subtree": {}
            },
            "symbolStroke": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "symbolStroke",
                "excludes": {},
                "default": "#666666",
                "description": "The color of the symbol's stroke or line."
              },
              "subtree": {}
            },
            "symbolStrokeWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "symbolStrokeWidth",
                "excludes": {},
                "default": "1",
                "description": "The pixel stroke width of the symbol on the button."
              },
              "subtree": {}
            },
            "theme": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "theme",
                "excludes": {},
                "description": "A configuration object for the button theme. The object accepts\nSVG properties like `stroke-width`, `stroke` and `fill`. Tri-state\nbutton styles are supported by the `states.hover` and `states.select`\nobjects."
              },
              "subtree": {
                "fill": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fill",
                    "excludes": {},
                    "default": "#ffffff",
                    "description": "The default fill exists only to capture hover events."
                  },
                  "subtree": {}
                },
                "stroke": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "stroke",
                    "excludes": {},
                    "default": "none"
                  },
                  "subtree": {}
                },
                "padding": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "padding",
                    "excludes": {},
                    "default": "5"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "menuStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "menuStyle",
            "excludes": {},
            "default": "{ \"border\": \"1px solid #999999\", \"background\": \"#ffffff\", \"padding\": \"5px 0\" }",
            "description": "CSS styles for the popup menu appearing by default when the export\nicon is clicked. This menu is rendered in HTML."
          },
          "subtree": {
            "border": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "border",
                "excludes": {},
                "default": "1px solid #999999"
              },
              "subtree": {}
            },
            "background": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "background",
                "excludes": {},
                "default": "#ffffff"
              },
              "subtree": {}
            },
            "padding": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "padding",
                "excludes": {},
                "default": "5px 0"
              },
              "subtree": {}
            }
          }
        },
        "menuItemStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "menuItemStyle",
            "excludes": {},
            "default": "{ \"padding\": \"0.5em 1em\", \"color\": \"#333333\", \"background\": \"none\" }",
            "description": "CSS styles for the individual items within the popup menu appearing\nby default when the export icon is clicked. The menu items are rendered\nin HTML."
          },
          "subtree": {
            "padding": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "padding",
                "excludes": {},
                "default": "0.5em 1em"
              },
              "subtree": {}
            },
            "background": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "background",
                "excludes": {},
                "default": "none"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#333333"
              },
              "subtree": {}
            },
            "fontSize": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "fontSize",
                "excludes": {},
                "description": "Defaults to `14px` on touch devices and `11px` on desktop."
              },
              "subtree": {}
            },
            "transition": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "transition",
                "excludes": {},
                "default": "background 250ms, color 250ms"
              },
              "subtree": {}
            }
          }
        },
        "menuItemHoverStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "menuItemHoverStyle",
            "excludes": {},
            "default": "{ \"background\": \"#335cad\", \"color\": \"#ffffff\" }",
            "description": "CSS styles for the hover state of the individual items within the\npopup menu appearing by default when the export icon is clicked.\n The menu items are rendered in HTML."
          },
          "subtree": {
            "background": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "background",
                "excludes": {},
                "default": "#335cad"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#ffffff"
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "accessibility": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "accessibility",
        "excludes": {},
        "description": "Options for configuring accessibility for the chart. Requires the\n[accessibility module](//code.highcharts.com/modules/accessibility.\njs) to be loaded. For a description of the module and information\non its features, see [Highcharts Accessibility](http://www.highcharts.\ncom/docs/chart-concepts/accessibility)."
      },
      "subtree": {
        "keyboardNavigation": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "keyboardNavigation",
            "excludes": {},
            "description": "Options for keyboard navigation."
          },
          "subtree": {
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "true",
                "description": "Enable keyboard navigation for the chart."
              },
              "subtree": {}
            },
            "focusBorder": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "focusBorder",
                "excludes": {},
                "description": "Options for the focus border drawn around elements while\nnavigating through them."
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": "true",
                    "description": "Enable/disable focus border for chart."
                  },
                  "subtree": {}
                },
                "hideBrowserFocusOutline": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "hideBrowserFocusOutline",
                    "excludes": {},
                    "default": "true",
                    "description": "Hide the browser's default focus indicator."
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "style",
                    "excludes": {},
                    "description": "Style options for the focus border drawn around elements \nwhile navigating through them. Note that some browsers in \naddition draw their own borders for focused elements. These\nautomatic borders can not be styled by Highcharts.\n\nIn styled mode, the border is given the \n`.highcharts-focus-border` class."
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {
                          "color": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "#000000",
                        "description": "Color of the focus border."
                      },
                      "subtree": {}
                    },
                    "lineWidth": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "lineWidth",
                        "excludes": {},
                        "default": "2",
                        "description": "Line width of the focus border."
                      },
                      "subtree": {}
                    },
                    "borderRadius": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "borderRadius",
                        "excludes": {},
                        "default": "3",
                        "description": "Border radius of the focus border."
                      },
                      "subtree": {}
                    }
                  }
                },
                "margin": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "margin",
                    "excludes": {},
                    "default": "2",
                    "description": "Focus border margin around the elements."
                  },
                  "subtree": {}
                }
              }
            },
            "mode": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "mode",
                "excludes": {},
                "default": "normal",
                "description": "Set the keyboard navigation mode for the chart. Can be \"normal\"\nor \"serialize\". In normal mode, left/right arrow keys move\nbetween points in a series, while up/down arrow keys move between\nseries. Up/down navigation acts intelligently to figure out which\nseries makes sense to move to from any given point.\n\nIn \"serialize\" mode, points are instead navigated as a single \nlist. Left/right behaves as in \"normal\" mode. Up/down arrow keys\nwill behave like left/right. This is useful for unifying \nnavigation behavior with/without screen readers enabled."
              },
              "subtree": {}
            },
            "skipNullPoints": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "skipNullPoints",
                "excludes": {},
                "default": "true",
                "description": "Skip null points when navigating through points with the\nkeyboard."
              },
              "subtree": {}
            }
          }
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "description": "Enable accessibility features for the chart."
          },
          "subtree": {}
        },
        "pointDescriptionThreshold": {
          "meta": {
            "types": {
              "number": 1,
              "boolean": 1
            },
            "name": "pointDescriptionThreshold",
            "excludes": {},
            "default": false,
            "description": "When a series contains more points than this, we no longer expose\ninformation about individual points to screen readers.\n\nSet to `false` to disable."
          },
          "subtree": {}
        },
        "screenReaderSectionFormatter": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "screenReaderSectionFormatter",
            "excludes": {},
            "default": "undefined",
            "description": "A formatter function to create the HTML contents of the hidden screen\nreader information region. Receives one argument, `chart`, referring\nto the chart object. Should return a String with the HTML content\nof the region.\n\nThe link to view the chart as a data table will be added\nautomatically after the custom HTML content."
          },
          "subtree": {}
        },
        "describeSingleSeries": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "describeSingleSeries",
            "excludes": {},
            "default": "false",
            "description": "Whether or not to add series descriptions to charts with a single\nseries."
          },
          "subtree": {}
        },
        "onTableAnchorClick": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "onTableAnchorClick",
            "excludes": {},
            "description": "Function to run upon clicking the \"View as Data Table\" link in the\nscreen reader region.\n\nBy default Highcharts will insert and set focus to a data table\nrepresentation of the chart."
          },
          "subtree": {}
        },
        "pointDateFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "pointDateFormat",
            "excludes": {},
            "description": "Date format to use for points on datetime axes when describing them\nto screen reader users.\n\nDefaults to the same format as in tooltip.\n\nFor an overview of the replacement codes, see\n[dateFormat](#Highcharts.dateFormat)."
          },
          "subtree": {}
        },
        "pointDateFormatter": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "pointDateFormatter",
            "excludes": {},
            "description": "Formatter function to determine the date/time format used with\npoints on datetime axes when describing them to screen reader users.\nReceives one argument, `point`, referring to the point to describe.\nShould return a date format string compatible with\n[dateFormat](#Highcharts.dateFormat)."
          },
          "subtree": {}
        },
        "pointDescriptionFormatter": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "pointDescriptionFormatter",
            "excludes": {},
            "description": "Formatter function to use instead of the default for point\ndescriptions.\nReceives one argument, `point`, referring to the point to describe.\nShould return a String with the description of the point for a screen\nreader user."
          },
          "subtree": {}
        },
        "seriesDescriptionFormatter": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "seriesDescriptionFormatter",
            "excludes": {},
            "description": "Formatter function to use instead of the default for series\ndescriptions. Receives one argument, `series`, referring to the\nseries to describe. Should return a String with the description of\nthe series for a screen reader user."
          },
          "subtree": {}
        }
      }
    },
    "legend": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "legend",
        "excludes": {},
        "description": "The legend is a box containing a symbol and name for each series\nitem or point item in the chart. Each series (or points in case\nof pie charts) is represented by a symbol and its name in the legend.\n\nIt is possible to override the symbol creator function and\ncreate [custom legend symbols](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/studies/legend-\ncustom-symbol/)."
      },
      "subtree": {
        "keyboardNavigation": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "keyboardNavigation",
            "excludes": {},
            "description": "Keyboard navigation for the legend. Requires the Accessibility module."
          },
          "subtree": {
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "true",
                "description": "Enable/disable keyboard navigation for the legend. Requires the Accessibility\nmodule."
              },
              "subtree": {}
            }
          }
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": true,
            "description": "Enable or disable the legend."
          },
          "subtree": {}
        },
        "align": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "align",
            "excludes": {},
            "default": "center",
            "description": "The horizontal alignment of the legend box within the chart area.\nValid values are `left`, `center` and `right`.\n\nIn the case that the legend is aligned in a corner position, the\n`layout` option will determine whether to place it above/below\nor on the side of the plot area."
          },
          "subtree": {}
        },
        "layout": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "layout",
            "excludes": {},
            "default": "horizontal",
            "description": "The layout of the legend items. Can be one of \"horizontal\" or \"vertical\"."
          },
          "subtree": {}
        },
        "labelFormatter": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "labelFormatter",
            "excludes": {},
            "description": "Callback function to format each of the series' labels. The `this`\nkeyword refers to the series object, or the point object in case\nof pie charts. By default the series or point name is printed."
          },
          "subtree": {}
        },
        "borderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "borderColor",
            "excludes": {},
            "default": "#999999",
            "description": "The color of the drawn border around the legend."
          },
          "subtree": {}
        },
        "borderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderRadius",
            "excludes": {},
            "default": "0",
            "description": "The border corner radius of the legend."
          },
          "subtree": {}
        },
        "navigation": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "navigation",
            "excludes": {},
            "description": "Options for the paging or navigation appearing when the legend\nis overflown. Navigation works well on screen, but not in static\nexported images. One way of working around that is to [increase\nthe chart height in export](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/legend/navigation-\nenabled-false/)."
          },
          "subtree": {
            "activeColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "activeColor",
                "excludes": {},
                "default": "#003399",
                "description": "The color for the active up or down arrow in the legend page navigation."
              },
              "subtree": {}
            },
            "inactiveColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "inactiveColor",
                "excludes": {},
                "default": "#cccccc",
                "description": "The color of the inactive up or down arrow in the legend page\nnavigation. ."
              },
              "subtree": {}
            },
            "animation": {
              "meta": {
                "types": {
                  "boolean": 1,
                  "object": 1
                },
                "name": "animation",
                "excludes": {},
                "default": "true",
                "description": "How to animate the pages when navigating up or down. A value of `true`\napplies the default navigation given in the chart.animation option.\nAdditional options can be given as an object containing values for\neasing and duration."
              },
              "subtree": {}
            },
            "arrowSize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "arrowSize",
                "excludes": {},
                "default": "12",
                "description": "The pixel size of the up and down arrows in the legend paging\nnavigation."
              },
              "subtree": {}
            },
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "true",
                "description": "Whether to enable the legend navigation. In most cases, disabling\nthe navigation results in an unwanted overflow.\n\nSee also the [adapt chart to legend](http://www.highcharts.com/plugin-\nregistry/single/8/Adapt-Chart-To-Legend) plugin for a solution to\nextend the chart height to make room for the legend, optionally in\nexported charts only."
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "description": "Text styles for the legend page navigation."
              },
              "subtree": {}
            }
          }
        },
        "itemStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "itemStyle",
            "excludes": {},
            "default": "{ \"color\": \"#333333\", \"cursor\": \"pointer\", \"fontSize\": \"12px\", \"fontWeight\": \"bold\", \"textOverflow\": \"ellipsis\" }",
            "description": "CSS styles for each legend item. Only a subset of CSS is supported,\nnotably those options related to text. The default `textOverflow`\nproperty makes long texts truncate. Set it to `null` to wrap text\ninstead. A `width` property can be added to control the text width."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#333333"
              },
              "subtree": {}
            },
            "fontSize": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "fontSize",
                "excludes": {},
                "default": "12px"
              },
              "subtree": {}
            },
            "fontWeight": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "fontWeight",
                "excludes": {},
                "default": "bold"
              },
              "subtree": {}
            },
            "textOverflow": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "textOverflow",
                "excludes": {},
                "default": "ellipsis"
              },
              "subtree": {}
            }
          }
        },
        "itemHoverStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "itemHoverStyle",
            "excludes": {},
            "default": "{ \"color\": \"#000000\" }",
            "description": "CSS styles for each legend item in hover mode. Only a subset of\nCSS is supported, notably those options related to text. Properties\nare inherited from `style` unless overridden here."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#000000"
              },
              "subtree": {}
            }
          }
        },
        "itemHiddenStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "itemHiddenStyle",
            "excludes": {},
            "default": "{ \"color\": \"#cccccc\" }",
            "description": "CSS styles for each legend item when the corresponding series or\npoint is hidden. Only a subset of CSS is supported, notably those\noptions related to text. Properties are inherited from `style`\nunless overridden here."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#cccccc"
              },
              "subtree": {}
            }
          }
        },
        "shadow": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "shadow",
            "excludes": {},
            "default": "false",
            "description": "Whether to apply a drop shadow to the legend. A `backgroundColor`\nalso needs to be applied for this to take effect. The shadow can be\nan object configuration containing `color`, `offsetX`, `offsetY`,\n`opacity` and `width`."
          },
          "subtree": {}
        },
        "itemCheckboxStyle": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "itemCheckboxStyle",
            "excludes": {},
            "description": "Default styling for the checkbox next to a legend item when\n`showCheckbox` is true."
          },
          "subtree": {
            "position": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "position",
                "excludes": {},
                "default": "absolute"
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "width",
                "excludes": {},
                "default": "13px"
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "height",
                "excludes": {},
                "default": "13px"
              },
              "subtree": {}
            }
          }
        },
        "squareSymbol": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "squareSymbol",
            "excludes": {},
            "default": "true",
            "description": "When this is true, the legend symbol width will be the same as\nthe symbol height, which in turn defaults to the font size of the\nlegend items."
          },
          "subtree": {}
        },
        "symbolPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "symbolPadding",
            "excludes": {},
            "default": "5",
            "description": "The pixel padding between the legend item symbol and the legend\nitem text."
          },
          "subtree": {}
        },
        "verticalAlign": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "verticalAlign",
            "excludes": {},
            "default": "bottom",
            "description": "The vertical alignment of the legend box. Can be one of `top`,\n`middle` or `bottom`. Vertical position can be further determined\nby the `y` option.\n\nIn the case that the legend is aligned in a corner position, the\n`layout` option will determine whether to place it above/below\nor on the side of the plot area."
          },
          "subtree": {}
        },
        "x": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "x",
            "excludes": {},
            "default": "0",
            "description": "The x offset of the legend relative to its horizontal alignment\n`align` within chart.spacingLeft and chart.spacingRight. Negative\nx moves it to the left, positive x moves it to the right."
          },
          "subtree": {}
        },
        "y": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "y",
            "excludes": {},
            "default": "0",
            "description": "The vertical offset of the legend relative to it's vertical alignment\n`verticalAlign` within chart.spacingTop and chart.spacingBottom.\n Negative y moves it up, positive y moves it down."
          },
          "subtree": {}
        },
        "title": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "title",
            "excludes": {},
            "description": "A title to be added on top of the legend."
          },
          "subtree": {
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "default": "{\"fontWeight\":\"bold\"}",
                "description": "Generic CSS styles for the legend title."
              },
              "subtree": {
                "fontWeight": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fontWeight",
                    "excludes": {},
                    "default": "bold"
                  },
                  "subtree": {}
                }
              }
            },
            "text": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "text",
                "excludes": {},
                "default": "null",
                "description": "A text or HTML string for the title."
              },
              "subtree": {}
            }
          }
        },
        "backgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "backgroundColor",
            "excludes": {},
            "description": "The background color of the legend."
          },
          "subtree": {}
        },
        "borderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderWidth",
            "excludes": {},
            "default": "0",
            "description": "The width of the drawn border around the legend."
          },
          "subtree": {}
        },
        "floating": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "floating",
            "excludes": {},
            "default": "false",
            "description": "When the legend is floating, the plot area ignores it and is allowed\nto be placed below it."
          },
          "subtree": {}
        },
        "itemDistance": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "itemDistance",
            "excludes": {},
            "description": "In a legend with horizontal layout, the itemDistance defines the\npixel distance between each item."
          },
          "subtree": {}
        },
        "itemMarginBottom": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "itemMarginBottom",
            "excludes": {},
            "default": "0",
            "description": "The pixel bottom margin for each legend item."
          },
          "subtree": {}
        },
        "itemMarginTop": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "itemMarginTop",
            "excludes": {},
            "default": "0",
            "description": "The pixel top margin for each legend item."
          },
          "subtree": {}
        },
        "itemWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "itemWidth",
            "excludes": {},
            "default": "null",
            "description": "The width for each legend item. This is useful in a horizontal layout\nwith many items when you want the items to align vertically. ."
          },
          "subtree": {}
        },
        "labelFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "labelFormat",
            "excludes": {},
            "default": "{name}",
            "description": "A [format string](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting) for each legend label. Available variables\nrelates to properties on the series, or the point in case of pies."
          },
          "subtree": {}
        },
        "lineHeight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "lineHeight",
            "excludes": {},
            "default": "16",
            "products": {
              "highcharts": 1
            },
            "description": "Line height for the legend items. Deprecated as of 2.1\\. Instead,\nthe line height for each item can be set using itemStyle.lineHeight,\nand the padding between items using itemMarginTop and itemMarginBottom."
          },
          "subtree": {}
        },
        "margin": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "margin",
            "excludes": {},
            "default": "12",
            "description": "If the plot area sized is calculated automatically and the legend\nis not floating, the legend margin is the space between the legend\nand the axis labels or plot area."
          },
          "subtree": {}
        },
        "maxHeight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "maxHeight",
            "excludes": {},
            "default": "undefined",
            "description": "Maximum pixel height for the legend. When the maximum height is extended,\n navigation will show."
          },
          "subtree": {}
        },
        "padding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "padding",
            "excludes": {},
            "default": "8",
            "description": "The inner padding of the legend box."
          },
          "subtree": {}
        },
        "reversed": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "reversed",
            "excludes": {},
            "default": "false",
            "description": "Whether to reverse the order of the legend items compared to the\norder of the series or points as defined in the configuration object."
          },
          "subtree": {}
        },
        "rtl": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "rtl",
            "excludes": {},
            "default": "false",
            "description": "Whether to show the symbol on the right side of the text rather than\nthe left side. This is common in Arabic and Hebraic."
          },
          "subtree": {}
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "CSS styles for the legend area. In the 1.x versions the position\nof the legend area was determined by CSS. In 2.x, the position is\ndetermined by properties like `align`, `verticalAlign`, `x` and `y`,\n but the styles are still parsed for backwards compatibility."
          },
          "subtree": {}
        },
        "symbolHeight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "symbolHeight",
            "excludes": {},
            "description": "The pixel height of the symbol for series types that use a rectangle\nin the legend. Defaults to the font size of legend items."
          },
          "subtree": {}
        },
        "symbolRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "symbolRadius",
            "excludes": {},
            "description": "The border radius of the symbol for series types that use a rectangle\nin the legend. Defaults to half the `symbolHeight`."
          },
          "subtree": {}
        },
        "symbolWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "symbolWidth",
            "excludes": {},
            "description": "The pixel width of the legend item symbol. When the `squareSymbol`\noption is set, this defaults to the `symbolHeight`, otherwise 16."
          },
          "subtree": {}
        },
        "useHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useHTML",
            "excludes": {},
            "default": "false",
            "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the legend item texts. Prior\nto 4.1.7, when using HTML, [legend.navigation](#legend.navigation)\nwas disabled."
          },
          "subtree": {}
        },
        "width": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "width",
            "excludes": {},
            "default": "null",
            "description": "The width of the legend box."
          },
          "subtree": {}
        }
      }
    },
    "noData": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "noData",
        "excludes": {},
        "description": "Options for displaying a message like \"No data to display\". \nThis feature requires the file no-data-to-display.js to be loaded in the\npage. The actual text to display is set in the lang.noData option."
      },
      "subtree": {
        "position": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "position",
            "excludes": {},
            "default": "{ \"x\": 0, \"y\": 0, \"align\": \"center\", \"verticalAlign\": \"middle\" }",
            "description": "The position of the no-data label, relative to the plot area."
          },
          "subtree": {
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Horizontal offset of the label, in pixels."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Vertical offset of the label, in pixels."
              },
              "subtree": {}
            },
            "align": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "align",
                "excludes": {},
                "default": "center",
                "description": "Horizontal alignment of the label."
              },
              "subtree": {}
            },
            "verticalAlign": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "verticalAlign",
                "excludes": {},
                "default": "middle",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Vertical alignment of the label."
              },
              "subtree": {}
            }
          }
        },
        "attr": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "attr",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "An object of additional SVG attributes for the no-data label."
          },
          "subtree": {}
        },
        "useHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useHTML",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Whether to insert the label as HTML, or as pseudo-HTML rendered with\nSVG."
          },
          "subtree": {}
        },
        "style": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "style",
            "excludes": {},
            "description": "CSS styles for the no-data label."
          },
          "subtree": {
            "fontWeight": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "fontWeight",
                "excludes": {},
                "default": "bold"
              },
              "subtree": {}
            },
            "fontSize": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "fontSize",
                "excludes": {},
                "default": "12px"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#666666"
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "global": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "global",
        "excludes": {}
      },
      "subtree": {
        "VMLRadialGradientURL": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "VMLRadialGradientURL",
            "excludes": {},
            "description": "Path to the pattern image required by VML browsers in order to\ndraw radial gradients."
          },
          "subtree": {}
        },
        "canvasToolsURL": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "canvasToolsURL",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "_Canvg rendering for Android 2.x is removed as of Highcharts 5.0\\.\nUse the [libURL](#exporting.libURL) option to configure exporting._\n\nThe URL to the additional file to lazy load for Android 2.x devices.\nThese devices don't support SVG, so we download a helper file that\ncontains [canvg](http://code.google.com/p/canvg/), its dependency\nrbcolor, and our own CanVG Renderer class. To avoid hotlinking to\nour site, you can install canvas-tools.js on your own server and\nchange this option accordingly."
          },
          "subtree": {}
        },
        "useUTC": {
          "meta": {
            "types": {},
            "name": "useUTC",
            "excludes": {},
            "description": "This option is deprecated since v6.0.5. Instead, use\n[time.useUTC](#time.useUTC) that supports individual time settings\nper chart."
          },
          "subtree": {}
        },
        "Date": {
          "meta": {
            "types": {},
            "name": "Date",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "This option is deprecated since v6.0.5. Instead, use\n[time.Date](#time.Date) that supports individual time settings\nper chart."
          },
          "subtree": {}
        },
        "getTimezoneOffset": {
          "meta": {
            "types": {},
            "name": "getTimezoneOffset",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "This option is deprecated since v6.0.5. Instead, use\n[time.getTimezoneOffset](#time.getTimezoneOffset) that supports\nindividual time settings per chart."
          },
          "subtree": {}
        },
        "timezone": {
          "meta": {
            "types": {},
            "name": "timezone",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "This option is deprecated since v6.0.5. Instead, use\n[time.timezone](#time.timezone) that supports individual time\nsettings per chart."
          },
          "subtree": {}
        },
        "timezoneOffset": {
          "meta": {
            "types": {},
            "name": "timezoneOffset",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "This option is deprecated since v6.0.5. Instead, use\n[time.timezoneOffset](#time.timezoneOffset) that supports individual\ntime settings per chart."
          },
          "subtree": {}
        }
      }
    },
    "xAxis": {
      "meta": {
        "types": {
          "array": "xAxis"
        },
        "name": "xAxis",
        "excludes": {},
        "description": "The X axis or category axis. Normally this is the horizontal axis,\nthough if the chart is inverted this is the vertical axis. In case of\nmultiple axes, the xAxis node is an array of configuration objects.\n\nSee [the Axis object](#Axis) for programmatic access to the axis."
      },
      "subtree": {
        "dateTimeLabelFormats": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "dateTimeLabelFormats",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "For a datetime axis, the scale will automatically adjust to the\nappropriate unit. This member gives the default string\nrepresentations used for each unit. For intermediate values,\ndifferent units may be used, for example the `day` unit can be used\non midnight and `hour` unit be used for intermediate values on the\nsame axis. For an overview of the replacement codes, see\n[dateFormat](#Highcharts.dateFormat). Defaults to:\n\n<pre>{\n    millisecond: '%H:%M:%S.%L',\n    second: '%H:%M:%S',\n    minute: '%H:%M',\n    hour: '%H:%M',\n    day: '%e. %b',\n    week: '%e. %b',\n    month: '%b \\'%y',\n    year: '%Y'\n}</pre>"
          },
          "subtree": {
            "millisecond": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "millisecond",
                "excludes": {},
                "default": "%H:%M:%S.%L"
              },
              "subtree": {}
            },
            "second": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "second",
                "excludes": {},
                "default": "%H:%M:%S"
              },
              "subtree": {}
            },
            "minute": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "minute",
                "excludes": {},
                "default": "%H:%M"
              },
              "subtree": {}
            },
            "hour": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "hour",
                "excludes": {},
                "default": "%H:%M"
              },
              "subtree": {}
            },
            "day": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "day",
                "excludes": {},
                "default": "%e. %b"
              },
              "subtree": {}
            },
            "week": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "week",
                "excludes": {},
                "default": "%e. %b"
              },
              "subtree": {}
            },
            "month": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "month",
                "excludes": {},
                "default": "%b '%y"
              },
              "subtree": {}
            },
            "year": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "year",
                "excludes": {},
                "default": "%Y"
              },
              "subtree": {}
            }
          }
        },
        "endOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "endOnTick",
            "excludes": {},
            "default": false,
            "description": "Whether to force the axis to end on a tick. Use this option with\nthe `maxPadding` option to control the axis end."
          },
          "subtree": {}
        },
        "labels": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "labels",
            "excludes": {},
            "description": "The axis labels show the number or category for each tick."
          },
          "subtree": {
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": true,
                "description": "Enable or disable the axis labels."
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "description": "CSS styles for the label. Use `whiteSpace: 'nowrap'` to prevent\nwrapping of category labels. Use `textOverflow: 'none'` to\nprevent ellipsis (dots).\n\nIn styled mode, the labels are styled with the\n`.highcharts-axis-labels` class."
              },
              "subtree": {
                "color": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "default": "#666666"
                  },
                  "subtree": {}
                },
                "cursor": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "cursor",
                    "excludes": {},
                    "default": "default"
                  },
                  "subtree": {}
                },
                "fontSize": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fontSize",
                    "excludes": {},
                    "default": "11px"
                  },
                  "subtree": {}
                }
              }
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": 0,
                "description": "The x position offset of the label relative to the tick position\non the axis."
              },
              "subtree": {}
            },
            "align": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "align",
                "excludes": {},
                "description": "What part of the string the given position is anchored to.\nIf `left`, the left side of the string is at the axis position.\nCan be one of `\"left\"`, `\"center\"` or `\"right\"`. Defaults to\nan intelligent guess based on which side of the chart the axis\nis on and the rotation of the label."
              },
              "subtree": {}
            },
            "autoRotation": {
              "meta": {
                "types": {
                  "array": "Number"
                },
                "name": "autoRotation",
                "excludes": {},
                "default": "[-45]",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "For horizontal axes, the allowed degrees of label rotation\nto prevent overlapping labels. If there is enough space,\nlabels are not rotated. As the chart gets narrower, it\nwill start rotating the labels -45 degrees, then remove\nevery second label and try again with rotations 0 and -45 etc.\nSet it to `false` to disable rotation, which will\ncause the labels to word-wrap if possible."
              },
              "subtree": {}
            },
            "autoRotationLimit": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "autoRotationLimit",
                "excludes": {},
                "default": "80",
                "products": {
                  "highcharts": 1
                },
                "description": "When each category width is more than this many pixels, we don't\napply auto rotation. Instead, we lay out the axis label with word\nwrap. A lower limit makes sense when the label contains multiple\nshort words that don't extend the available horizontal space for\neach label."
              },
              "subtree": {}
            },
            "distance": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "distance",
                "excludes": {},
                "default": "15",
                "products": {
                  "highcharts": 1
                },
                "description": "Polar charts only. The label's pixel distance from the perimeter\nof the plot area."
              },
              "subtree": {}
            },
            "format": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "format",
                "excludes": {},
                "default": "{value}",
                "description": "A [format string](http://www.highcharts.com/docs/chart-\nconcepts/labels-and-string-formatting) for the axis label."
              },
              "subtree": {}
            },
            "formatter": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "formatter",
                "excludes": {},
                "description": "Callback JavaScript function to format the label. The value\nis given by `this.value`. Additional properties for `this` are\n`axis`, `chart`, `isFirst` and `isLast`. The value of the default\nlabel formatter can be retrieved by calling\n`this.axis.defaultLabelFormatter.call(this)` within the function.\n\nDefaults to:\n\n<pre>function() {\n    return this.value;\n}</pre>"
              },
              "subtree": {}
            },
            "overflow": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "overflow",
                "excludes": {},
                "description": "How to handle overflowing labels on horizontal axis. Can be\nundefined, `false` or `\"justify\"`. By default it aligns inside\nthe chart area. If \"justify\", labels will not render outside\nthe plot area. If `false`, it will not be aligned at all.\nIf there is room to move it, it will be aligned to the edge,\nelse it will be removed."
              },
              "subtree": {}
            },
            "padding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "padding",
                "excludes": {},
                "default": "5",
                "products": {
                  "highcharts": 1
                },
                "description": "The pixel padding for axis labels, to ensure white space between\nthem."
              },
              "subtree": {}
            },
            "reserveSpace": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "reserveSpace",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1
                },
                "description": "Whether to reserve space for the labels. By default, space is\nreserved for the labels in these cases:\n\n* On all horizontal axes.\n* On vertical axes if `label.align` is `right` on a left-side\naxis or `left` on a right-side axis.\n* On vertical axes if `label.align` is `center`.\n\nThis can be turned off when for example the labels are rendered\ninside the plot area instead of outside."
              },
              "subtree": {}
            },
            "rotation": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rotation",
                "excludes": {},
                "default": "0",
                "description": "Rotation of the labels in degrees."
              },
              "subtree": {}
            },
            "staggerLines": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "staggerLines",
                "excludes": {},
                "default": "null",
                "description": "Horizontal axes only. The number of lines to spread the labels\nover to make room or tighter labels."
              },
              "subtree": {}
            },
            "step": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "step",
                "excludes": {},
                "default": "null",
                "description": "To show only every _n_'th label on the axis, set the step to _n_.\nSetting the step to 2 shows every other label.\n\nBy default, the step is calculated automatically to avoid\noverlap. To prevent this, set it to 1\\. This usually only\nhappens on a category axis, and is often a sign that you have\nchosen the wrong axis type.\n\nRead more at\n[Axis docs](http://www.highcharts.com/docs/chart-concepts/axes)\n=> What axis should I use?"
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": "null",
                "description": "The y position offset of the label relative to the tick position\non the axis. The default makes it adapt to the font size on\nbottom axis."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "default": "7",
                "description": "The Z index for the axis labels."
              },
              "subtree": {}
            },
            "useHTML": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "useHTML",
                "excludes": {},
                "default": "false",
                "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-\nconcepts/labels-and-string-formatting#html) to render the labels."
              },
              "subtree": {}
            },
            "position3d": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "position3d",
                "excludes": {},
                "default": "offset",
                "products": {
                  "highcharts": 1
                },
                "description": "Defines how the labels are be repositioned according to the 3D chart\norientation.\n- `'offset'`: Maintain a fixed horizontal/vertical distance from the\n\t tick marks, despite the chart orientation. This is the backwards\n\t compatible behavior, and causes skewing of X and Z axes.\n- `'chart'`: Preserve 3D position relative to the chart.\n  This looks nice, but hard to read if the text isn't\n  forward-facing.\n- `'flap'`: Rotated text along the axis to compensate for the chart\n\t orientation. This tries to maintain text as legible as possible on\n\t all orientations.\n- `'ortho'`: Rotated text along the axis direction so that the labels\n\t are orthogonal to the axis. This is very similar to `'flap'`, but\n\t prevents skewing the labels (X and Y scaling are still present)."
              },
              "subtree": {}
            },
            "skew3d": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "skew3d",
                "excludes": {},
                "default": false,
                "products": {
                  "highcharts": 1
                },
                "description": "If enabled, the axis labels will skewed to follow the perspective. \n\nThis will fix overlapping labels and titles, but texts become less\nlegible due to the distortion.\n\nThe final appearance depends heavily on `labels.position3d`."
              },
              "subtree": {}
            },
            "maxStaggerLines": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "maxStaggerLines",
                "excludes": {},
                "default": "5",
                "products": {
                  "highstock": 1,
                  "highmaps": 1
                },
                "description": "Horizontal axis only. When `staggerLines` is not set, `maxStaggerLines`\ndefines how many lines the axis is allowed to add to automatically\navoid overlapping X labels. Set to `1` to disable overlap detection."
              },
              "subtree": {}
            }
          }
        },
        "maxPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "maxPadding",
            "excludes": {},
            "default": 0.01,
            "description": "Padding of the max value relative to the length of the axis. A\npadding of 0.05 will make a 100px axis 5px longer. This is useful\nwhen you don't want the highest data value to appear on the edge\nof the plot area. When the axis' `max` option is set or a max extreme\nis set using `axis.setExtremes()`, the maxPadding will be ignored."
          },
          "subtree": {}
        },
        "minorTickLength": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minorTickLength",
            "excludes": {},
            "default": 2,
            "description": "The pixel length of the minor tick marks."
          },
          "subtree": {}
        },
        "minorTickPosition": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "minorTickPosition",
            "excludes": {},
            "default": "outside",
            "description": "The position of the minor tick marks relative to the axis line.\n Can be one of `inside` and `outside`."
          },
          "subtree": {}
        },
        "minPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minPadding",
            "excludes": {},
            "default": 0.01,
            "description": "Padding of the min value relative to the length of the axis. A\npadding of 0.05 will make a 100px axis 5px longer. This is useful\nwhen you don't want the lowest data value to appear on the edge\nof the plot area. When the axis' `min` option is set or a min extreme\nis set using `axis.setExtremes()`, the minPadding will be ignored."
          },
          "subtree": {}
        },
        "startOfWeek": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "startOfWeek",
            "excludes": {},
            "default": 1,
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "For datetime axes, this decides where to put the tick between weeks.\n 0 = Sunday, 1 = Monday."
          },
          "subtree": {}
        },
        "startOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "startOnTick",
            "excludes": {},
            "default": false,
            "description": "Whether to force the axis to start on a tick. Use this option with\nthe `minPadding` option to control the axis start."
          },
          "subtree": {}
        },
        "tickLength": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickLength",
            "excludes": {},
            "default": 10,
            "description": "The pixel length of the main tick marks."
          },
          "subtree": {}
        },
        "tickmarkPlacement": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "tickmarkPlacement",
            "excludes": {},
            "default": "between",
            "products": {
              "highcharts": 1
            },
            "description": "For categorized axes only. If `on` the tick mark is placed in the\ncenter of the category, if `between` the tick mark is placed between\ncategories. The default is `between` if the `tickInterval` is 1,\n else `on`."
          },
          "subtree": {}
        },
        "tickPixelInterval": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickPixelInterval",
            "excludes": {},
            "default": 100,
            "description": "If tickInterval is `null` this option sets the approximate pixel\ninterval of the tick marks. Not applicable to categorized axis.\n\nThe tick interval is also influenced by the [minTickInterval](#xAxis.\nminTickInterval) option, that, by default prevents ticks from being\ndenser than the data points."
          },
          "subtree": {}
        },
        "tickPosition": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "tickPosition",
            "excludes": {},
            "default": "outside",
            "description": "The position of the major tick marks relative to the axis line.\nCan be one of `inside` and `outside`."
          },
          "subtree": {}
        },
        "title": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "title",
            "excludes": {},
            "description": "The axis title, showing next to the axis line."
          },
          "subtree": {
            "align": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "align",
                "excludes": {},
                "default": "middle",
                "description": "Alignment of the title relative to the axis values. Possible\nvalues are \"low\", \"middle\" or \"high\"."
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "default": "{ \"color\": \"#666666\" }",
                "description": "CSS styles for the title. If the title text is longer than the\naxis length, it will wrap to multiple lines by default. This can\nbe customized by setting `textOverflow: 'ellipsis'`, by \nsetting a specific `width` or by setting `whiteSpace: 'nowrap'`.\n\nIn styled mode, the stroke width is given in the\n`.highcharts-axis-title` class."
              },
              "subtree": {
                "color": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "color",
                    "excludes": {},
                    "default": "#666666"
                  },
                  "subtree": {}
                }
              }
            },
            "position3d": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "position3d",
                "excludes": {},
                "default": null,
                "products": {
                  "highcharts": 1
                },
                "description": "Defines how the title is repositioned according to the 3D chart\norientation.\n- `'offset'`: Maintain a fixed horizontal/vertical distance from the\n  tick marks, despite the chart orientation. This is the backwards\n  compatible behavior, and causes skewing of X and Z axes.\n- `'chart'`: Preserve 3D position relative to the chart.\n  This looks nice, but hard to read if the text isn't\n  forward-facing.\n- `'flap'`: Rotated text along the axis to compensate for the chart\n  orientation. This tries to maintain text as legible as possible on\n  all orientations.\n- `'ortho'`: Rotated text along the axis direction so that the labels\n  are orthogonal to the axis. This is very similar to `'flap'`, but\n  prevents skewing the labels (X and Y scaling are still present).\n- `null`: Will use the config from `labels.position3d`"
              },
              "subtree": {}
            },
            "skew3d": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "skew3d",
                "excludes": {},
                "default": null,
                "products": {
                  "highcharts": 1
                },
                "description": "If enabled, the axis title will skewed to follow the perspective.\n\nThis will fix overlapping labels and titles, but texts become less\nlegible due to the distortion.\n\nThe final appearance depends heavily on `title.position3d`.\n\nA `null` value will use the config from `labels.skew3d`."
              },
              "subtree": {}
            },
            "enabled": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "middle",
                "products": {
                  "highcharts": 1
                },
                "description": "Deprecated. Set the `text` to `null` to disable the title."
              },
              "subtree": {}
            },
            "margin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "margin",
                "excludes": {},
                "description": "The pixel distance between the axis labels or line and the title.\n Defaults to 0 for horizontal axes, 10 for vertical"
              },
              "subtree": {}
            },
            "offset": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "offset",
                "excludes": {},
                "description": "The distance of the axis title from the axis line. By default, this\ndistance is computed from the offset width of the labels, the labels'\ndistance from the axis and the title's margin. However when the offset\noption is set, it overrides all this."
              },
              "subtree": {}
            },
            "reserveSpace": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "reserveSpace",
                "excludes": {},
                "default": "true",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to reserve space for the title when laying out the axis."
              },
              "subtree": {}
            },
            "rotation": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rotation",
                "excludes": {},
                "default": "0",
                "description": "The rotation of the text in degrees. 0 is horizontal, 270 is vertical\nreading from bottom to top."
              },
              "subtree": {}
            },
            "text": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "text",
                "excludes": {},
                "default": "null",
                "description": "The actual text of the axis title. It can contain basic HTML text\nmarkup like <b>, <i> and spans with style."
              },
              "subtree": {}
            },
            "useHTML": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "useHTML",
                "excludes": {},
                "default": "false",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the axis title."
              },
              "subtree": {}
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Horizontal pixel offset of the title position."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Vertical pixel offset of the title position."
              },
              "subtree": {}
            }
          }
        },
        "type": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "type",
            "excludes": {},
            "default": "linear",
            "products": {
              "highcharts": 1
            },
            "description": "The type of axis. Can be one of `linear`, `logarithmic`, `datetime`\nor `category`. In a datetime axis, the numbers are given in\nmilliseconds, and tick marks are placed on appropriate values like\nfull hours or days. In a category axis, the \n[point names](#series.line.data.name) of the chart's series are used\nfor categories, if not a [categories](#xAxis.categories) array is\ndefined."
          },
          "subtree": {}
        },
        "minorGridLineColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "minorGridLineColor",
            "excludes": {},
            "default": "#f2f2f2",
            "description": "Color of the minor, secondary grid lines.\n\nIn styled mode, the stroke width is given in the\n`.highcharts-minor-grid-line` class."
          },
          "subtree": {}
        },
        "minorGridLineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minorGridLineWidth",
            "excludes": {},
            "default": 1,
            "description": "Width of the minor, secondary grid lines.\n\nIn styled mode, the stroke width is given in the\n`.highcharts-grid-line` class."
          },
          "subtree": {}
        },
        "minorTickColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "minorTickColor",
            "excludes": {},
            "default": "#999999",
            "description": "Color for the minor tick marks."
          },
          "subtree": {}
        },
        "lineColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "lineColor",
            "excludes": {},
            "default": "#ccd6eb",
            "description": "The color of the line marking the axis itself.\n\nIn styled mode, the line stroke is given in the\n`.highcharts-axis-line` or `.highcharts-xaxis-line` class."
          },
          "subtree": {}
        },
        "lineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "lineWidth",
            "excludes": {},
            "default": 1,
            "description": "The width of the line marking the axis itself.\n\nIn styled mode, the stroke width is given in the\n`.highcharts-axis-line` or `.highcharts-xaxis-line` class."
          },
          "subtree": {}
        },
        "gridLineColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "gridLineColor",
            "excludes": {},
            "default": "#e6e6e6",
            "description": "Color of the grid lines extending the ticks across the plot area.\n\nIn styled mode, the stroke is given in the `.highcharts-grid-line`\nclass."
          },
          "subtree": {}
        },
        "tickColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "tickColor",
            "excludes": {},
            "default": "#ccd6eb",
            "description": "Color for the main tick marks.\n\nIn styled mode, the stroke is given in the `.highcharts-tick`\nclass."
          },
          "subtree": {}
        },
        "allowDecimals": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "allowDecimals",
            "excludes": {},
            "default": "true",
            "description": "Whether to allow decimals in this axis' ticks. When counting\nintegers, like persons or hits on a web page, decimals should\nbe avoided in the labels."
          },
          "subtree": {}
        },
        "alternateGridColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "alternateGridColor",
            "excludes": {},
            "default": "null",
            "description": "When using an alternate grid color, a band is painted across the\nplot area between every other grid line."
          },
          "subtree": {}
        },
        "breaks": {
          "meta": {
            "types": {
              "array": "object"
            },
            "name": "breaks",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "An array defining breaks in the axis, the sections defined will be\nleft out and all the points shifted closer to each other."
          },
          "subtree": {
            "breakSize": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "breakSize",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "A number indicating how much space should be left between the start\nand the end of the break. The break size is given in axis units,\nso for instance on a `datetime` axis, a break size of 3600000 would\nindicate the equivalent of an hour."
              },
              "subtree": {}
            },
            "from": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "from",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The point where the break starts."
              },
              "subtree": {}
            },
            "repeat": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "repeat",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Defines an interval after which the break appears again. By default\nthe breaks do not repeat."
              },
              "subtree": {}
            },
            "to": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "to",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The point where the break ends."
              },
              "subtree": {}
            }
          }
        },
        "categories": {
          "meta": {
            "types": {
              "array": "String"
            },
            "name": "categories",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1
            },
            "description": "If categories are present for the xAxis, names are used instead of\nnumbers for that axis. Since Highcharts 3.0, categories can also\nbe extracted by giving each point a [name](#series.data) and setting\naxis [type](#xAxis.type) to `category`. However, if you have multiple\nseries, best practice remains defining the `categories` array.\n\nExample:\n\n<pre>categories: ['Apples', 'Bananas', 'Oranges']</pre>"
          },
          "subtree": {}
        },
        "ceiling": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "ceiling",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The highest allowed value for automatically computed axis extremes."
          },
          "subtree": {}
        },
        "className": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "className",
            "excludes": {},
            "description": "A class name that opens for styling the axis by CSS, especially in\nHighcharts styled mode. The class name is applied to group elements\nfor the grid, axis elements and labels."
          },
          "subtree": {}
        },
        "crosshair": {
          "meta": {
            "types": {
              "boolean": 1,
              "object": 1
            },
            "name": "crosshair",
            "excludes": {},
            "default": "false",
            "description": "Configure a crosshair that follows either the mouse pointer or the\nhovered point.\n\nIn styled mode, the crosshairs are styled in the\n`.highcharts-crosshair`, `.highcharts-crosshair-thin` or\n`.highcharts-xaxis-category` classes."
          },
          "subtree": {
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "description": "A class name for the crosshair, especially as a hook for styling."
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#cccccc",
                "description": "The color of the crosshair. Defaults to `#cccccc` for numeric and\ndatetime axes, and `rgba(204,214,235,0.25)` for category axes, where\nthe crosshair by default highlights the whole category."
              },
              "subtree": {}
            },
            "dashStyle": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "dashStyle",
                "excludes": {},
                "default": "Solid",
                "description": "The dash style for the crosshair. See\n[series.dashStyle](#plotOptions.series.dashStyle)\nfor possible values."
              },
              "subtree": {}
            },
            "snap": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "snap",
                "excludes": {},
                "default": "true",
                "description": "Whether the crosshair should snap to the point or follow the pointer\nindependent of points."
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "width",
                "excludes": {},
                "default": "1",
                "description": "The pixel width of the crosshair. Defaults to 1 for numeric or\ndatetime axes, and for one category width for category axes."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "default": "2",
                "description": "The Z index of the crosshair. Higher Z indices allow drawing the\ncrosshair on top of the series or behind the grid lines."
              },
              "subtree": {}
            },
            "label": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "label",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "A label on the axis next to the crosshair.\n\nIn styled mode, the label is styled with the `.highcharts-crosshair-label` class."
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "Alignment of the label compared to the axis. Defaults to `left` for\nright-side axes, `right` for left-side axes and `center` for horizontal\naxes."
                  },
                  "subtree": {}
                },
                "backgroundColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "backgroundColor",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "The background color for the label. Defaults to the related series\ncolor, or `#666666` if that is not available."
                  },
                  "subtree": {}
                },
                "borderColor": {
                  "meta": {
                    "types": {
                      "color": 1
                    },
                    "name": "borderColor",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "The border color for the crosshair label"
                  },
                  "subtree": {}
                },
                "borderRadius": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderRadius",
                    "excludes": {},
                    "default": "3",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The border corner radius of the crosshair label."
                  },
                  "subtree": {}
                },
                "borderWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "borderWidth",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The border width for the crosshair label."
                  },
                  "subtree": {}
                },
                "format": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "format",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "A format string for the crosshair label. Defaults to `{value}` for\nnumeric axes and `{value:%b %d, %Y}` for datetime axes."
                  },
                  "subtree": {}
                },
                "formatter": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "formatter",
                    "excludes": {},
                    "products": {
                      "highstock": 1
                    },
                    "description": "Formatter function for the label text."
                  },
                  "subtree": {}
                },
                "padding": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "padding",
                    "excludes": {},
                    "default": "8",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Padding inside the crosshair label."
                  },
                  "subtree": {}
                },
                "shape": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "shape",
                    "excludes": {},
                    "default": "callout",
                    "products": {
                      "highstock": 1
                    },
                    "description": "The shape to use for the label box."
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "cssobject": 1
                    },
                    "name": "style",
                    "excludes": {},
                    "default": "{ \"color\": \"white\", \"fontWeight\": \"normal\", \"fontSize\": \"11px\", \"textAlign\": \"center\" }",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Text styles for the crosshair label."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "description": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "description",
            "excludes": {},
            "default": "undefined",
            "description": "_Requires Accessibility module_\n\nDescription of the axis to screen reader users."
          },
          "subtree": {}
        },
        "events": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "events",
            "excludes": {},
            "description": "Event handlers for the axis."
          },
          "subtree": {
            "afterBreaks": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "afterBreaks",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "An event fired after the breaks have rendered."
              },
              "subtree": {}
            },
            "afterSetExtremes": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "afterSetExtremes",
                "excludes": {},
                "description": "As opposed to the `setExtremes` event, this event fires after the\nfinal min and max values are computed and corrected for `minRange`.\n\n\nFires when the minimum and maximum is set for the axis, either by\ncalling the `.setExtremes()` method or by selecting an area in the\nchart. One parameter, `event`, is passed to the function, containing\ncommon event information.\n\nThe new user set minimum and maximum values can be found by\n`event.min` and `event.max`. These reflect the axis minimum and\nmaximum in axis values. The actual data extremes are found in\n`event.dataMin` and `event.dataMax`."
              },
              "subtree": {}
            },
            "pointBreak": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "pointBreak",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "An event fired when a break from this axis occurs on a point."
              },
              "subtree": {}
            },
            "pointInBreak": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "pointInBreak",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An event fired when a point falls inside a break from this axis."
              },
              "subtree": {}
            },
            "setExtremes": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "setExtremes",
                "excludes": {},
                "description": "Fires when the minimum and maximum is set for the axis, either by\ncalling the `.setExtremes()` method or by selecting an area in the\nchart. One parameter, `event`, is passed to the function,\ncontaining common event information.\n\nThe new user set minimum and maximum values can be found by\n`event.min` and `event.max`. These reflect the axis minimum and\nmaximum in data values. When an axis is zoomed all the way out from\nthe \"Reset zoom\" button, `event.min` and `event.max` are null, and\nthe new extremes are set based on `this.dataMin` and `this.dataMax`."
              },
              "subtree": {}
            }
          }
        },
        "floor": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "floor",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The lowest allowed value for automatically computed axis extremes."
          },
          "subtree": {}
        },
        "gridLineDashStyle": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "gridLineDashStyle",
            "excludes": {},
            "default": "Solid",
            "description": "The dash or dot style of the grid lines. For possible values, see\n[this demonstration](http://jsfiddle.net/gh/get/library/pure/\nhighcharts/highcharts/tree/master/samples/highcharts/plotoptions/\nseries-dashstyle-all/)."
          },
          "subtree": {}
        },
        "gridZIndex": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "gridZIndex",
            "excludes": {},
            "default": "1",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The Z index of the grid lines."
          },
          "subtree": {}
        },
        "id": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "id",
            "excludes": {},
            "default": "null",
            "description": "An id for the axis. This can be used after render time to get\na pointer to the axis object through `chart.get()`."
          },
          "subtree": {}
        },
        "linkedTo": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "linkedTo",
            "excludes": {},
            "default": "null",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Index of another axis that this axis is linked to. When an axis is\nlinked to a master axis, it will take the same extremes as\nthe master, but as assigned by min or max or by setExtremes.\nIt can be used to show additional info, or to ease reading the\nchart by duplicating the scales."
          },
          "subtree": {}
        },
        "max": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "max",
            "excludes": {},
            "description": "The maximum value of the axis. If `null`, the max value is\nautomatically calculated.\n\nIf the `endOnTick` option is true, the `max` value might\nbe rounded up.\n\nIf a [tickAmount](#yAxis.tickAmount) is set, the axis may be extended\nbeyond the set max in order to reach the given number of ticks. The\nsame may happen in a chart with multiple axes, determined by [chart.\nalignTicks](#chart), where a `tickAmount` is applied internally."
          },
          "subtree": {}
        },
        "alignTicks": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "alignTicks",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "When using multiple axis, the ticks of two or more opposite axes\nwill automatically be aligned by adding ticks to the axis or axes\nwith the least ticks, as if `tickAmount` were specified.\n\nThis can be prevented by setting `alignTicks` to false. If the grid\nlines look messy, it's a good idea to hide them for the secondary\naxis by setting `gridLineWidth` to 0.\n\nIf `startOnTick` or `endOnTick` in an Axis options are set to false,\nthen the `alignTicks ` will be disabled for the Axis.\n\nDisabled for logarithmic axes."
          },
          "subtree": {}
        },
        "maxZoom": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "maxZoom",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Deprecated. Use `minRange` instead."
          },
          "subtree": {}
        },
        "min": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "min",
            "excludes": {},
            "description": "The minimum value of the axis. If `null` the min value is \nautomatically calculated.\n\nIf the `startOnTick` option is true (default), the `min` value might\nbe rounded down.\n\nThe automatically calculated minimum value is also affected by\n[floor](#yAxis.floor), [softMin](#yAxis.softMin),\n[minPadding](#yAxis.minPadding), [minRange](#yAxis.minRange)\nas well as [series.threshold](#plotOptions.series.threshold)\nand [series.softThreshold](#plotOptions.series.softThreshold)."
          },
          "subtree": {}
        },
        "minorGridLineDashStyle": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "minorGridLineDashStyle",
            "excludes": {},
            "default": "Solid",
            "description": "The dash or dot style of the minor grid lines. For possible values,\nsee [this demonstration](http://jsfiddle.net/gh/get/library/pure/\nhighcharts/highcharts/tree/master/samples/highcharts/plotoptions/\nseries-dashstyle-all/)."
          },
          "subtree": {}
        },
        "minorTickInterval": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "minorTickInterval",
            "excludes": {},
            "description": "Specific tick interval in axis units for the minor ticks.\nOn a linear axis, if `\"auto\"`, the minor tick interval is\ncalculated as a fifth of the tickInterval. If `null`, minor\nticks are not shown.\n\nOn logarithmic axes, the unit is the power of the value. For example,\nsetting the minorTickInterval to 1 puts one tick on each of 0.1,\n1, 10, 100 etc. Setting the minorTickInterval to 0.1 produces 9\nticks between 1 and 10, 10 and 100 etc.\n\nIf user settings dictate minor ticks to become too dense, they don't\nmake sense, and will be ignored to prevent performance problems."
          },
          "subtree": {}
        },
        "minorTicks": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "minorTicks",
            "excludes": {},
            "default": "false",
            "description": "Enable or disable minor ticks. Unless\n[minorTickInterval](#xAxis.minorTickInterval) is set, the tick\ninterval is calculated as a fifth of the `tickInterval`.\n\nOn a logarithmic axis, minor ticks are laid out based on a best\nguess, attempting to enter approximately 5 minor ticks between\neach major tick.\n\nPrior to v6.0.0, ticks were unabled in auto layout by setting\n`minorTickInterval` to `\"auto\"`."
          },
          "subtree": {}
        },
        "minorTickWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minorTickWidth",
            "excludes": {},
            "default": "0",
            "description": "The pixel width of the minor tick mark."
          },
          "subtree": {}
        },
        "minRange": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minRange",
            "excludes": {},
            "description": "The minimum range to display on this axis. The entire axis will not\nbe allowed to span over a smaller interval than this. For example,\nfor a datetime axis the main unit is milliseconds. If minRange is\nset to 3600000, you can't zoom in more than to one hour.\n\nThe default minRange for the x axis is five times the smallest\ninterval between any of the data points.\n\nOn a logarithmic axis, the unit for the minimum range is the power.\nSo a minRange of 1 means that the axis can be zoomed to 10-100,\n100-1000, 1000-10000 etc.\n\nNote that the `minPadding`, `maxPadding`, `startOnTick` and\n`endOnTick` settings also affect how the extremes of the axis\nare computed."
          },
          "subtree": {}
        },
        "minTickInterval": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minTickInterval",
            "excludes": {},
            "description": "The minimum tick interval allowed in axis values. For example on\nzooming in on an axis with daily data, this can be used to prevent\nthe axis from showing hours. Defaults to the closest distance between\ntwo points on the axis."
          },
          "subtree": {}
        },
        "offset": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "offset",
            "excludes": {},
            "default": "0",
            "description": "The distance in pixels from the plot area to the axis line.\nA positive offset moves the axis with it's line, labels and ticks\naway from the plot area. This is typically used when two or more\naxes are displayed on the same side of the plot. With multiple\naxes the offset is dynamically adjusted to avoid collision, this\ncan be overridden by setting offset explicitly."
          },
          "subtree": {}
        },
        "opposite": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "opposite",
            "excludes": {},
            "default": "false",
            "description": "Whether to display the axis on the opposite side of the normal. The\nnormal is on the left side for vertical axes and bottom for\nhorizontal, so the opposite sides will be right and top respectively.\nThis is typically used with dual or multiple axes."
          },
          "subtree": {}
        },
        "pane": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "pane",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "Refers to the index in the [panes](#panes) array. Used for circular\ngauges and polar charts. When the option is not set then first pane\nwill be used."
          },
          "subtree": {}
        },
        "reversed": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "reversed",
            "excludes": {},
            "default": "false",
            "description": "Whether to reverse the axis so that the highest number is closest\nto the origin. If the chart is inverted, the x axis is reversed by\ndefault."
          },
          "subtree": {}
        },
        "showLastLabel": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showLastLabel",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Whether to show the last tick label. Defaults to `true` on cartesian\ncharts, and `false` on polar charts."
          },
          "subtree": {}
        },
        "gridLineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "gridLineWidth",
            "excludes": {},
            "default": "0",
            "description": "The width of the grid lines extending the ticks across the plot area.\n\nIn styled mode, the stroke width is given in the\n`.highcharts-grid-line` class."
          },
          "subtree": {}
        },
        "overscroll": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "overscroll",
            "excludes": {},
            "default": "0",
            "products": {
              "highstock": 1
            },
            "description": "Additional range on the right side of the xAxis. Works similar to\n`xAxis.maxPadding`, but value is set in milliseconds. Can be set for both\nmain `xAxis` and the navigator's `xAxis`."
          },
          "subtree": {}
        },
        "maxRange": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "maxRange",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highstock": 1
            },
            "description": "Maximum range which can be set using the navigator's handles.\nOpposite of [xAxis.minRange](#xAxis.minRange)."
          },
          "subtree": {}
        },
        "scrollbar": {
          "meta": {
            "types": {},
            "name": "scrollbar",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "An optional scrollbar to display on the X axis in response to limiting\nthe minimum and maximum of the axis values.\n\nIn styled mode, all the presentational options for the scrollbar\nare replaced by the classes `.highcharts-scrollbar-thumb`, `.highcharts-scrollbar-arrow`, `.highcharts-scrollbar-button`, `.highcharts-scrollbar-rifles` and `.highcharts-scrollbar-track`.",
            "extends": "scrollbar"
          },
          "subtree": {}
        },
        "showEmpty": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showEmpty",
            "excludes": {},
            "default": "true",
            "description": "Whether to show the axis line and title when the axis has no data."
          },
          "subtree": {}
        },
        "showFirstLabel": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showFirstLabel",
            "excludes": {},
            "default": "true",
            "description": "Whether to show the first tick label."
          },
          "subtree": {}
        },
        "softMax": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "softMax",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A soft maximum for the axis. If the series data maximum is less than\nthis, the axis will stay at this maximum, but if the series data\nmaximum is higher, the axis will flex to show all data."
          },
          "subtree": {}
        },
        "softMin": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "softMin",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A soft minimum for the axis. If the series data minimum is greater\nthan this, the axis will stay at this minimum, but if the series\ndata minimum is lower, the axis will flex to show all data."
          },
          "subtree": {}
        },
        "tickAmount": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickAmount",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The amount of ticks to draw on the axis. This opens up for aligning\nthe ticks of multiple charts or panes within a chart. This option\noverrides the `tickPixelInterval` option.\n\nThis option only has an effect on linear axes. Datetime, logarithmic\nor category axes are not affected."
          },
          "subtree": {}
        },
        "tickInterval": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickInterval",
            "excludes": {},
            "default": "null",
            "description": "The interval of the tick marks in axis units. When `null`, the tick\ninterval is computed to approximately follow the [tickPixelInterval](#xAxis.\ntickPixelInterval) on linear and datetime axes. On categorized axes,\na `null` tickInterval will default to 1, one category. Note that\ndatetime axes are based on milliseconds, so for example an interval\nof one day is expressed as `24 * 3600 * 1000`.\n\nOn logarithmic axes, the tickInterval is based on powers, so a tickInterval\nof 1 means one tick on each of 0.1, 1, 10, 100 etc. A tickInterval\nof 2 means a tick of 0.1, 10, 1000 etc. A tickInterval of 0.2 puts\na tick on 0.1, 0.2, 0.4, 0.6, 0.8, 1, 2, 4, 6, 8, 10, 20, 40 etc.\n\n\nIf the tickInterval is too dense for labels to be drawn, Highcharts\nmay remove ticks.\n\nIf the chart has multiple axes, the [alignTicks](#chart.alignTicks)\noption may interfere with the `tickInterval` setting."
          },
          "subtree": {}
        },
        "tickPositioner": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "tickPositioner",
            "excludes": {},
            "description": "A callback function returning array defining where the ticks are\nlaid out on the axis. This overrides the default behaviour of [tickPixelInterval](#xAxis.\ntickPixelInterval) and [tickInterval](#xAxis.tickInterval). The automatic\ntick positions are accessible through `this.tickPositions` and can\nbe modified by the callback."
          },
          "subtree": {}
        },
        "tickPositions": {
          "meta": {
            "types": {
              "array": "Number"
            },
            "name": "tickPositions",
            "excludes": {},
            "description": "An array defining where the ticks are laid out on the axis. This\noverrides the default behaviour of [tickPixelInterval](#xAxis.tickPixelInterval)\nand [tickInterval](#xAxis.tickInterval)."
          },
          "subtree": {}
        },
        "tickWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickWidth",
            "excludes": {},
            "description": "The pixel width of the major tick marks.\n\nIn styled mode, the stroke width is given in the `.highcharts-tick` class."
          },
          "subtree": {}
        },
        "uniqueNames": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "uniqueNames",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1
            },
            "description": "Applies only when the axis `type` is `category`. When `uniqueNames`\nis true, points are placed on the X axis according to their names.\nIf the same point name is repeated in the same or another series,\nthe point is placed on the same X position as other points of the\nsame name. When `uniqueNames` is false, the points are laid out in\nincreasing X positions regardless of their names, and the X axis\ncategory will take the name of the last point in each position."
          },
          "subtree": {}
        },
        "units": {
          "meta": {
            "types": {
              "array": "object"
            },
            "name": "units",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Datetime axis only. An array determining what time intervals the\nticks are allowed to fall on. Each array item is an array where the\nfirst value is the time unit and the second value another array of\nallowed multiples. Defaults to:\n\n<pre>units: [[\n    'millisecond', // unit name\n    [1, 2, 5, 10, 20, 25, 50, 100, 200, 500] // allowed multiples\n], [\n    'second',\n    [1, 2, 5, 10, 15, 30]\n], [\n    'minute',\n    [1, 2, 5, 10, 15, 30]\n], [\n    'hour',\n    [1, 2, 3, 4, 6, 8, 12]\n], [\n    'day',\n    [1]\n], [\n    'week',\n    [1]\n], [\n    'month',\n    [1, 3, 6]\n], [\n    'year',\n    null\n]]</pre>"
          },
          "subtree": {}
        },
        "visible": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "visible",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Whether axis, including axis title, line, ticks and labels, should\nbe visible."
          },
          "subtree": {}
        },
        "plotBands": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "plotBands",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "An array of colored bands stretching across the plot area marking\nan interval on the axis.\n\nIn styled mode, the plot bands are styled by the `.highcharts-plot-band` class in addition to the `className` option."
          },
          "subtree": {
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Border color for the plot band. Also requires `borderWidth` to be\nset."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Border width for the plot band. Also requires `borderColor` to be\nset."
              },
              "subtree": {}
            },
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "description": "A custom class name, in addition to the default `highcharts-plot-band`, to\napply to each individual band."
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The color of the plot band."
              },
              "subtree": {}
            },
            "events": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "events",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An object defining mouse events for the plot band. Supported properties\nare `click`, `mouseover`, `mouseout`, `mousemove`."
              },
              "subtree": {}
            },
            "from": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "from",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The start position of the plot band in axis units."
              },
              "subtree": {}
            },
            "id": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "id",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An id used for identifying the plot band in Axis.removePlotBand."
              },
              "subtree": {}
            },
            "to": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "to",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The end position of the plot band in axis units."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The z index of the plot band within the chart, relative to other\nelements. Using the same z index as another element may give unpredictable\nresults, as the last rendered element will be on top. Values from\n0 to 20 make sense."
              },
              "subtree": {}
            },
            "label": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "label",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Text labels for the plot bands"
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "center",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Horizontal alignment of the label. Can be one of \"left\", \"center\"\nor \"right\"."
                  },
                  "subtree": {}
                },
                "rotation": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "rotation",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Rotation of the text label in degrees ."
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "style",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "CSS styles for the text label.\n\nIn styled mode, the labels are styled by the `.highcharts-plot-band-label` class."
                  },
                  "subtree": {}
                },
                "text": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "text",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The string text itself. A subset of HTML is supported."
                  },
                  "subtree": {}
                },
                "textAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "textAlign",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "The text alignment for the label. While `align` determines where\nthe texts anchor point is placed within the plot band, `textAlign`\ndetermines how the text is aligned against its anchor point. Possible\nvalues are \"left\", \"center\" and \"right\". Defaults to the same as\nthe `align` option."
                  },
                  "subtree": {}
                },
                "useHTML": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "useHTML",
                    "excludes": {},
                    "default": "false",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the labels."
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "default": "top",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Vertical alignment of the label relative to the plot band. Can be\none of \"top\", \"middle\" or \"bottom\"."
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Horizontal position relative the alignment. Default varies by orientation."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Vertical position of the text baseline relative to the alignment.\n Default varies by orientation."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "plotLines": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "plotLines",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "An array of lines stretching across the plot area, marking a specific\nvalue on one of the axes.\n\nIn styled mode, the plot lines are styled by the `.highcharts-plot-line` class in addition to the `className` option."
          },
          "subtree": {
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "description": "A custom class name, in addition to the default `highcharts-plot-line`, to\napply to each individual line."
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The color of the line."
              },
              "subtree": {}
            },
            "dashStyle": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "dashStyle",
                "excludes": {},
                "default": "Solid",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The dashing or dot style for the plot line. For possible values see\n[this overview](http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-\ndashstyle-all/)."
              },
              "subtree": {}
            },
            "events": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "events",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An object defining mouse events for the plot line. Supported properties\nare `click`, `mouseover`, `mouseout`, `mousemove`."
              },
              "subtree": {}
            },
            "id": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "id",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "An id used for identifying the plot line in Axis.removePlotLine."
              },
              "subtree": {}
            },
            "value": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "value",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The position of the line in axis units."
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "width",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The width or thickness of the plot line."
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "default": "null",
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "The z index of the plot line within the chart."
              },
              "subtree": {}
            },
            "label": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "label",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highstock": 1
                },
                "description": "Text labels for the plot bands"
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "left",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Horizontal alignment of the label. Can be one of \"left\", \"center\"\nor \"right\"."
                  },
                  "subtree": {}
                },
                "rotation": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "rotation",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Rotation of the text label in degrees. Defaults to 0 for horizontal\nplot lines and 90 for vertical lines."
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "style",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "CSS styles for the text label.\n\nIn styled mode, the labels are styled by the\n`.highcharts-plot-line-label` class."
                  },
                  "subtree": {}
                },
                "text": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "text",
                    "excludes": {},
                    "products": {
                      "highcharts": 1
                    },
                    "description": "The text itself. A subset of HTML is supported."
                  },
                  "subtree": {}
                },
                "textAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "textAlign",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "The text alignment for the label. While `align` determines where\nthe texts anchor point is placed within the plot band, `textAlign`\ndetermines how the text is aligned against its anchor point. Possible\nvalues are \"left\", \"center\" and \"right\". Defaults to the same as\nthe `align` option."
                  },
                  "subtree": {}
                },
                "useHTML": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "useHTML",
                    "excludes": {},
                    "default": "false",
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the labels."
                  },
                  "subtree": {}
                },
                "verticalAlign": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "verticalAlign",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Vertical alignment of the label relative to the plot line. Can be\none of \"top\", \"middle\" or \"bottom\"."
                  },
                  "subtree": {}
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Horizontal position relative the alignment. Default varies by orientation."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "products": {
                      "highcharts": 1,
                      "highstock": 1
                    },
                    "description": "Vertical position of the text baseline relative to the alignment.\n Default varies by orientation."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "ordinal": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "ordinal",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "In an ordinal axis, the points are equally spaced in the chart regardless\nof the actual time or x distance between them. This means that missing\ndata for nights or weekends will not take up space in the chart."
          },
          "subtree": {}
        },
        "range": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "range",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highstock": 1
            },
            "description": "The zoomed range to display when only defining one or none of `min`\nor `max`. For example, to show the latest month, a range of one month\ncan be set."
          },
          "subtree": {}
        }
      }
    },
    "navigator": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "navigator",
        "excludes": {},
        "products": {
          "highstock": 1
        },
        "description": "The navigator is a small series below the main series, displaying\na view of the entire data set. It provides tools to zoom in and\nout on parts of the data as well as panning across the dataset."
      },
      "subtree": {
        "height": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "height",
            "excludes": {},
            "default": "40",
            "products": {
              "highstock": 1
            },
            "description": "The height of the navigator."
          },
          "subtree": {}
        },
        "margin": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "margin",
            "excludes": {},
            "default": "25",
            "products": {
              "highstock": 1
            },
            "description": "The distance from the nearest element, the X axis or X axis labels."
          },
          "subtree": {}
        },
        "maskInside": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "maskInside",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Whether the mask should be inside the range marking the zoomed\nrange, or outside. In Highstock 1.x it was always `false`."
          },
          "subtree": {}
        },
        "handles": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "handles",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Options for the handles for dragging the zoomed area."
          },
          "subtree": {
            "width": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "width",
                "excludes": {},
                "default": "7",
                "products": {
                  "highstock": 1
                },
                "description": "Width for handles."
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "height",
                "excludes": {},
                "default": "15",
                "products": {
                  "highstock": 1
                },
                "description": "Height for handles."
              },
              "subtree": {}
            },
            "symbols": {
              "meta": {
                "types": {
                  "array": "object"
                },
                "name": "symbols",
                "excludes": {},
                "default": "['navigator-handle', 'navigator-handle']",
                "products": {
                  "highstock": 1
                },
                "description": "Array to define shapes of handles. 0-index for left, 1-index for\nright.\n\nAdditionally, the URL to a graphic can be given on this form:\n`url(graphic.png)`. Note that for the image to be applied to\nexported charts, its URL needs to be accessible by the export\nserver.\n\nCustom callbacks for symbol path generation can also be added to\n`Highcharts.SVGRenderer.prototype.symbols`. The callback is then\nused by its method name, as shown in the demo."
              },
              "subtree": {}
            },
            "enabled": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "enabled",
                "excludes": {},
                "default": "true",
                "products": {
                  "highstock": 1
                },
                "description": "Allows to enable/disable handles."
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": "7",
                "products": {
                  "highstock": 1
                },
                "description": "The width for the handle border and the stripes inside."
              },
              "subtree": {}
            },
            "backgroundColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "backgroundColor",
                "excludes": {},
                "default": "#f2f2f2",
                "products": {
                  "highstock": 1
                },
                "description": "The fill for the handle."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#999999",
                "products": {
                  "highstock": 1
                },
                "description": "The stroke for the handle border and the stripes inside."
              },
              "subtree": {}
            }
          }
        },
        "maskFill": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "maskFill",
            "excludes": {},
            "default": "rgba(102,133,194,0.3)",
            "products": {
              "highstock": 1
            },
            "description": "The color of the mask covering the areas of the navigator series\nthat are currently not visible in the main series. The default\ncolor is bluish with an opacity of 0.3 to see the series below."
          },
          "subtree": {}
        },
        "outlineColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "outlineColor",
            "excludes": {},
            "default": "#cccccc",
            "products": {
              "highstock": 1
            },
            "description": "The color of the line marking the currently zoomed area in the\nnavigator."
          },
          "subtree": {}
        },
        "outlineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "outlineWidth",
            "excludes": {},
            "default": "2",
            "products": {
              "highstock": 1
            },
            "description": "The width of the line marking the currently zoomed area in the\nnavigator."
          },
          "subtree": {}
        },
        "series": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "series",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Options for the navigator series. Available options are the same\nas any series, documented at [plotOptions](#plotOptions.series)\nand [series](#series).\n\nUnless data is explicitly defined on navigator.series, the data\nis borrowed from the first series in the chart.\n\nDefault series options for the navigator series are:\n\n<pre>series: {\n    type: 'areaspline',\n    fillOpacity: 0.05,\n    dataGrouping: {\n        smoothed: true\n    },\n    lineWidth: 1,\n    marker: {\n        enabled: false\n    }\n}</pre>"
          },
          "subtree": {
            "type": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "type",
                "excludes": {},
                "description": "The type of the navigator series. Defaults to `areaspline` if\ndefined, otherwise `line`."
              },
              "subtree": {}
            },
            "fillOpacity": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "fillOpacity",
                "excludes": {},
                "default": 0.05,
                "description": "The fill opacity of the navigator series."
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 1,
                "description": "The pixel line width of the navigator series."
              },
              "subtree": {}
            },
            "compare": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "compare",
                "excludes": {},
                "default": null
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {},
                "description": "Data grouping options for the navigator series.",
                "extends": "{plotOptions.series.dataGrouping}"
              },
              "subtree": {
                "approximation": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "approximation",
                    "excludes": {},
                    "default": "average"
                  },
                  "subtree": {}
                },
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "groupPixelWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "groupPixelWidth",
                    "excludes": {},
                    "default": 2
                  },
                  "subtree": {}
                },
                "smoothed": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "smoothed",
                    "excludes": {},
                    "default": true
                  },
                  "subtree": {}
                },
                "units": {
                  "meta": {
                    "types": {},
                    "name": "units",
                    "excludes": {}
                  },
                  "subtree": {}
                }
              }
            },
            "dataLabels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataLabels",
                "excludes": {},
                "description": "Data label options for the navigator series. Data labels are\ndisabled by default on the navigator series.",
                "extends": "{plotOptions.series.dataLabels}"
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                },
                "zIndex": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "zIndex",
                    "excludes": {},
                    "default": 2
                  },
                  "subtree": {}
                }
              }
            },
            "id": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "id",
                "excludes": {},
                "default": "highcharts-navigator-series"
              },
              "subtree": {}
            },
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "default": "highcharts-navigator-series"
              },
              "subtree": {}
            },
            "lineColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "lineColor",
                "excludes": {},
                "default": null,
                "description": "Line color for the navigator series. Allows setting the color\nwhile disallowing the default candlestick setting."
              },
              "subtree": {}
            },
            "marker": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "marker",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "pointRange": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "pointRange",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "threshold": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "threshold",
                "excludes": {},
                "default": null,
                "description": "The threshold option. Setting it to 0 will make the default\nnavigator area series draw its area from the 0 value and up."
              },
              "subtree": {}
            }
          }
        },
        "xAxis": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "xAxis",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Options for the navigator X axis. Default series options\nfor the navigator xAxis are:\n\n<pre>xAxis: {\n    tickWidth: 0,\n    lineWidth: 0,\n    gridLineWidth: 1,\n    tickPixelInterval: 200,\n    labels: {\n    \t   align: 'left',\n        style: {\n            color: '#888'\n        },\n        x: 3,\n        y: -4\n    }\n}</pre>",
            "extends": "{xAxis}"
          },
          "subtree": {
            "overscroll": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "overscroll",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "default": "highcharts-navigator-xaxis"
              },
              "subtree": {}
            },
            "tickLength": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "tickLength",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "lineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "lineWidth",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "gridLineColor": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "gridLineColor",
                "excludes": {},
                "default": "#e6e6e6"
              },
              "subtree": {}
            },
            "gridLineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "gridLineWidth",
                "excludes": {},
                "default": 1
              },
              "subtree": {}
            },
            "tickPixelInterval": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "tickPixelInterval",
                "excludes": {},
                "default": 200
              },
              "subtree": {}
            },
            "labels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "labels",
                "excludes": {}
              },
              "subtree": {
                "align": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "align",
                    "excludes": {},
                    "default": "left"
                  },
                  "subtree": {}
                },
                "style": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "style",
                    "excludes": {}
                  },
                  "subtree": {
                    "color": {
                      "meta": {
                        "types": {
                          "string": 1
                        },
                        "name": "color",
                        "excludes": {},
                        "default": "#999999"
                      },
                      "subtree": {}
                    }
                  }
                },
                "x": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "x",
                    "excludes": {},
                    "default": 3
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": -4
                  },
                  "subtree": {}
                }
              }
            },
            "crosshair": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "crosshair",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            }
          }
        },
        "yAxis": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "yAxis",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Options for the navigator Y axis. Default series options\nfor the navigator yAxis are:\n\n<pre>yAxis: {\n    gridLineWidth: 0,\n    startOnTick: false,\n    endOnTick: false,\n    minPadding: 0.1,\n    maxPadding: 0.1,\n    labels: {\n        enabled: false\n    },\n    title: {\n        text: null\n    },\n    tickWidth: 0\n}</pre>",
            "extends": "{yAxis}"
          },
          "subtree": {
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "default": "highcharts-navigator-yaxis"
              },
              "subtree": {}
            },
            "gridLineWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "gridLineWidth",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "startOnTick": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "startOnTick",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "endOnTick": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "endOnTick",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "minPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "minPadding",
                "excludes": {},
                "default": 0.1
              },
              "subtree": {}
            },
            "maxPadding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "maxPadding",
                "excludes": {},
                "default": 0.1
              },
              "subtree": {}
            },
            "labels": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "labels",
                "excludes": {}
              },
              "subtree": {
                "enabled": {
                  "meta": {
                    "types": {
                      "boolean": 1
                    },
                    "name": "enabled",
                    "excludes": {},
                    "default": false
                  },
                  "subtree": {}
                }
              }
            },
            "crosshair": {
              "meta": {
                "types": {
                  "boolean": 1
                },
                "name": "crosshair",
                "excludes": {},
                "default": false
              },
              "subtree": {}
            },
            "title": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "title",
                "excludes": {}
              },
              "subtree": {
                "text": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "text",
                    "excludes": {},
                    "default": null
                  },
                  "subtree": {}
                }
              }
            },
            "tickLength": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "tickLength",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "tickWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "tickWidth",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            }
          }
        },
        "adaptToUpdatedData": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "adaptToUpdatedData",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Whether the navigator and scrollbar should adapt to updated data\nin the base X axis. When loading data async, as in the demo below,\nthis should be `false`. Otherwise new data will trigger navigator\nredraw, which will cause unwanted looping. In the demo below, the\ndata in the navigator is set only once. On navigating, only the main\nchart content is updated."
          },
          "subtree": {}
        },
        "baseSeries": {
          "meta": {
            "types": {
              "mixed": 1
            },
            "name": "baseSeries",
            "excludes": {},
            "default": "0",
            "products": {
              "highstock": 1
            },
            "description": "An integer identifying the index to use for the base series, or a\nstring representing the id of the series.\n\n**Note**: As of Highcharts 5.0, this is now a deprecated option.\nPrefer [series.showInNavigator](#plotOptions.series.showInNavigator)."
          },
          "subtree": {}
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Enable or disable the navigator."
          },
          "subtree": {}
        },
        "opposite": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "opposite",
            "excludes": {},
            "default": "false",
            "products": {
              "highstock": 1
            },
            "description": "When the chart is inverted, whether to draw the navigator on the\nopposite side."
          },
          "subtree": {}
        }
      }
    },
    "colors": {
      "meta": {
        "types": {
          "array": "Color"
        },
        "name": "colors",
        "excludes": {},
        "default": "[\"#7cb5ec\", \"#434348\", \"#90ed7d\", \"#f7a35c\", \"#8085e9\",\n         \"#f15c80\", \"#e4d354\", \"#2b908f\", \"#f45b5b\", \"#91e8e1\"]",
        "description": "An array containing the default colors for the chart's series. When\nall colors are used, new colors are pulled from the start again.\n\nDefault colors can also be set on a series or series.type basis,\nsee [column.colors](#plotOptions.column.colors),\n[pie.colors](#plotOptions.pie.colors).\n\nIn styled mode, the colors option doesn't exist. Instead, colors\nare defined in CSS and applied either through series or point class\nnames, or through the [chart.colorCount](#chart.colorCount) option.\n\n\n### Legacy\n\nIn Highcharts 3.x, the default colors were:\n\n<pre>colors: ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',\n    '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']</pre>\n\nIn Highcharts 2.x, the default colors were:\n\n<pre>colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE',\n   '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92']</pre>"
      },
      "subtree": {}
    },
    "time": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "time",
        "excludes": {},
        "description": "Time options that can apply globally or to individual charts. These\nsettings affect how `datetime` axes are laid out, how tooltips are\nformatted, how series\n[pointIntervalUnit](#plotOptions.series.pointIntervalUnit) works and how\nthe Highstock range selector handles time.\n\nThe common use case is that all charts in the same Highcharts object\nshare the same time settings, in which case the global settings are set\nusing `setOptions`.\n\n```js\n// Apply time settings globally\nHighcharts.setOptions({\n    time: {\n        timezone: 'Europe/London'\n    }\n});\n// Apply time settings by instance\nvar chart = Highcharts.chart('container', {\n    time: {\n        timezone: 'America/New_York'\n    },\n    series: [{\n        data: [1, 4, 3, 5]\n    }]\n});\n\n// Use the Time object\nconsole.log(\n\t   'Current time in New York',\n\t    chart.time.dateFormat('%Y-%m-%d %H:%M:%S', Date.now())\n);\n```\n\nSince v6.0.5, the time options were moved from the `global` obect to the\n`time` object, and time options can be set on each individual chart."
      },
      "subtree": {
        "useUTC": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useUTC",
            "excludes": {},
            "description": "Whether to use UTC time for axis scaling, tickmark placement and\ntime display in `Highcharts.dateFormat`. Advantages of using UTC\nis that the time displays equally regardless of the user agent's\ntime zone settings. Local time can be used when the data is loaded\nin real time or when correct Daylight Saving Time transitions are\nrequired."
          },
          "subtree": {}
        },
        "Date": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "Date",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A custom `Date` class for advanced date handling. For example,\n[JDate](https://github.com/tahajahangir/jdate) can be hooked in to\nhandle Jalali dates."
          },
          "subtree": {}
        },
        "getTimezoneOffset": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "getTimezoneOffset",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "A callback to return the time zone offset for a given datetime. It\ntakes the timestamp in terms of milliseconds since January 1 1970,\nand returns the timezone offset in minutes. This provides a hook\nfor drawing time based charts in specific time zones using their\nlocal DST crossover dates, with the help of external libraries."
          },
          "subtree": {}
        },
        "timezone": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "timezone",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Requires [moment.js](http://momentjs.com/). If the timezone option\nis specified, it creates a default\n[getTimezoneOffset](#time.getTimezoneOffset) function that looks\nup the specified timezone in moment.js. If moment.js is not included,\nthis throws a Highcharts error in the console, but does not crash the\nchart."
          },
          "subtree": {}
        },
        "timezoneOffset": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "timezoneOffset",
            "excludes": {},
            "default": "0",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The timezone offset in minutes. Positive values are west, negative\nvalues are east of UTC, as in the ECMAScript\n[getTimezoneOffset](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset)\nmethod. Use this to display UTC based data in a predefined time zone."
          },
          "subtree": {}
        }
      }
    },
    "title": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "title",
        "excludes": {},
        "description": "The chart's main title."
      },
      "subtree": {
        "text": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "text",
            "excludes": {},
            "default": "Chart title",
            "description": "The title of the chart. To disable the title, set the `text` to\n`null`."
          },
          "subtree": {}
        },
        "align": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "align",
            "excludes": {},
            "default": "center",
            "description": "The horizontal alignment of the title. Can be one of \"left\", \"center\"\nand \"right\"."
          },
          "subtree": {}
        },
        "margin": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "margin",
            "excludes": {},
            "default": "15",
            "description": "The margin between the title and the plot area, or if a subtitle\nis present, the margin between the subtitle and the plot area."
          },
          "subtree": {}
        },
        "widthAdjust": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "widthAdjust",
            "excludes": {},
            "default": "-44",
            "description": "Adjustment made to the title width, normally to reserve space for\nthe exporting burger menu."
          },
          "subtree": {}
        },
        "floating": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "floating",
            "excludes": {},
            "default": "false",
            "description": "When the title is floating, the plot area will not move to make space\nfor it."
          },
          "subtree": {}
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "description": "CSS styles for the title. Use this for font styling, but use `align`,\n`x` and `y` for text alignment.\n\nIn styled mode, the title style is given in the `.highcharts-title` class."
          },
          "subtree": {}
        },
        "useHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useHTML",
            "excludes": {},
            "default": "false",
            "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the text."
          },
          "subtree": {}
        },
        "verticalAlign": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "verticalAlign",
            "excludes": {},
            "description": "The vertical alignment of the title. Can be one of `\"top\"`, `\"middle\"`\nand `\"bottom\"`. When a value is given, the title behaves as if [floating](#title.\nfloating) were `true`."
          },
          "subtree": {}
        },
        "x": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "x",
            "excludes": {},
            "default": "0",
            "description": "The x position of the title relative to the alignment within chart.\nspacingLeft and chart.spacingRight."
          },
          "subtree": {}
        },
        "y": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "y",
            "excludes": {},
            "description": "The y position of the title relative to the alignment within [chart.\nspacingTop](#chart.spacingTop) and [chart.spacingBottom](#chart.spacingBottom).\n By default it depends on the font size."
          },
          "subtree": {}
        }
      }
    },
    "subtitle": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "subtitle",
        "excludes": {},
        "description": "The chart's subtitle. This can be used both to display a subtitle below\nthe main title, and to display random text anywhere in the chart. The\nsubtitle can be updated after chart initialization through the\n`Chart.setTitle` method."
      },
      "subtree": {
        "text": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "text",
            "excludes": {},
            "default": "",
            "description": "The subtitle of the chart."
          },
          "subtree": {}
        },
        "align": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "align",
            "excludes": {},
            "default": "center",
            "description": "The horizontal alignment of the subtitle. Can be one of \"left\",\n \"center\" and \"right\"."
          },
          "subtree": {}
        },
        "widthAdjust": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "widthAdjust",
            "excludes": {},
            "default": "-44",
            "description": "Adjustment made to the subtitle width, normally to reserve space\nfor the exporting burger menu."
          },
          "subtree": {}
        },
        "floating": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "floating",
            "excludes": {},
            "default": "false",
            "description": "When the subtitle is floating, the plot area will not move to make\nspace for it."
          },
          "subtree": {}
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"color\": \"#666666\" }",
            "description": "CSS styles for the title.\n\nIn styled mode, the subtitle style is given in the `.highcharts-subtitle` class."
          },
          "subtree": {}
        },
        "useHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useHTML",
            "excludes": {},
            "default": "false",
            "description": "Whether to [use HTML](http://www.highcharts.com/docs/chart-concepts/labels-\nand-string-formatting#html) to render the text."
          },
          "subtree": {}
        },
        "verticalAlign": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "verticalAlign",
            "excludes": {},
            "description": "The vertical alignment of the title. Can be one of \"top\", \"middle\"\nand \"bottom\". When a value is given, the title behaves as floating."
          },
          "subtree": {}
        },
        "x": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "x",
            "excludes": {},
            "default": "0",
            "description": "The x position of the subtitle relative to the alignment within chart.\nspacingLeft and chart.spacingRight."
          },
          "subtree": {}
        },
        "y": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "y",
            "excludes": {},
            "description": "The y position of the subtitle relative to the alignment within chart.\nspacingTop and chart.spacingBottom. By default the subtitle is laid\nout below the title unless the title is floating."
          },
          "subtree": {}
        }
      }
    },
    "labels": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "labels",
        "excludes": {},
        "description": "HTML labels that can be positioned anywhere in the chart area."
      },
      "subtree": {
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"color\": \"#333333\" }",
            "description": "Shared CSS styles for all labels."
          },
          "subtree": {
            "position": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "position",
                "excludes": {},
                "default": "absolute"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#333333"
              },
              "subtree": {}
            }
          }
        },
        "items": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "items",
            "excludes": {},
            "description": "A HTML label that can be positioned anywhere in the chart area."
          },
          "subtree": {
            "html": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "html",
                "excludes": {},
                "description": "Inner HTML or text for the label."
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "description": "CSS styles for each label. To position the label, use left and top\nlike this:\n\n<pre>style: {\n    left: '100px',\n    top: '100px'\n}</pre>"
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "loading": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "loading",
        "excludes": {},
        "description": "The loading options control the appearance of the loading screen\nthat covers the plot area on chart operations. This screen only\nappears after an explicit call to `chart.showLoading()`. It is a\nutility for developers to communicate to the end user that something\nis going on, for example while retrieving new data via an XHR connection.\nThe \"Loading...\" text itself is not part of this configuration\nobject, but part of the `lang` object."
      },
      "subtree": {
        "labelStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "labelStyle",
            "excludes": {},
            "default": "{ \"fontWeight\": \"bold\", \"position\": \"relative\", \"top\": \"45%\" }",
            "description": "CSS styles for the loading label `span`."
          },
          "subtree": {
            "fontWeight": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "fontWeight",
                "excludes": {},
                "default": "bold"
              },
              "subtree": {}
            },
            "position": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "position",
                "excludes": {},
                "default": "relative"
              },
              "subtree": {}
            },
            "top": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "top",
                "excludes": {},
                "default": "45%"
              },
              "subtree": {}
            }
          }
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"position\": \"absolute\", \"backgroundColor\": \"#ffffff\", \"opacity\": 0.5, \"textAlign\": \"center\" }",
            "description": "CSS styles for the loading screen that covers the plot area."
          },
          "subtree": {
            "position": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "position",
                "excludes": {},
                "default": "absolute"
              },
              "subtree": {}
            },
            "backgroundColor": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "backgroundColor",
                "excludes": {},
                "default": "#ffffff"
              },
              "subtree": {}
            },
            "opacity": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "opacity",
                "excludes": {},
                "default": 0.5
              },
              "subtree": {}
            },
            "textAlign": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "textAlign",
                "excludes": {},
                "default": "center"
              },
              "subtree": {}
            }
          }
        },
        "hideDuration": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "hideDuration",
            "excludes": {},
            "default": "100",
            "description": "The duration in milliseconds of the fade out effect."
          },
          "subtree": {}
        },
        "showDuration": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "showDuration",
            "excludes": {},
            "default": "100",
            "description": "The duration in milliseconds of the fade in effect."
          },
          "subtree": {}
        }
      }
    },
    "tooltip": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "tooltip",
        "excludes": {},
        "description": "Options for the tooltip that appears when the user hovers over a\nseries or point."
      },
      "subtree": {
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "description": "Enable or disable the tooltip."
          },
          "subtree": {}
        },
        "animation": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "animation",
            "excludes": {},
            "default": "true",
            "description": "Enable or disable animation of the tooltip. In slow legacy IE browsers\nthe animation is disabled by default."
          },
          "subtree": {}
        },
        "borderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderRadius",
            "excludes": {},
            "default": "3",
            "description": "The radius of the rounded border corners."
          },
          "subtree": {}
        },
        "dateTimeLabelFormats": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "dateTimeLabelFormats",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "For series on a datetime axes, the date format in the tooltip's\nheader will by default be guessed based on the closest data points.\nThis member gives the default string representations used for\neach unit. For an overview of the replacement codes, see [dateFormat](#Highcharts.\ndateFormat).\n\nDefaults to:\n\n<pre>{\n    millisecond:\"%A, %b %e, %H:%M:%S.%L\",\n    second:\"%A, %b %e, %H:%M:%S\",\n    minute:\"%A, %b %e, %H:%M\",\n    hour:\"%A, %b %e, %H:%M\",\n    day:\"%A, %b %e, %Y\",\n    week:\"Week from %A, %b %e, %Y\",\n    month:\"%B %Y\",\n    year:\"%Y\"\n}</pre>"
          },
          "subtree": {
            "millisecond": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "millisecond",
                "excludes": {},
                "default": "%A, %b %e, %H:%M:%S.%L"
              },
              "subtree": {}
            },
            "second": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "second",
                "excludes": {},
                "default": "%A, %b %e, %H:%M:%S"
              },
              "subtree": {}
            },
            "minute": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "minute",
                "excludes": {},
                "default": "%A, %b %e, %H:%M"
              },
              "subtree": {}
            },
            "hour": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "hour",
                "excludes": {},
                "default": "%A, %b %e, %H:%M"
              },
              "subtree": {}
            },
            "day": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "day",
                "excludes": {},
                "default": "%A, %b %e, %Y"
              },
              "subtree": {}
            },
            "week": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "week",
                "excludes": {},
                "default": "Week from %A, %b %e, %Y"
              },
              "subtree": {}
            },
            "month": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "month",
                "excludes": {},
                "default": "%B %Y"
              },
              "subtree": {}
            },
            "year": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "year",
                "excludes": {},
                "default": "%Y"
              },
              "subtree": {}
            }
          }
        },
        "footerFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "footerFormat",
            "excludes": {},
            "default": "",
            "description": "A string to append to the tooltip format."
          },
          "subtree": {}
        },
        "padding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "padding",
            "excludes": {},
            "default": "8",
            "description": "Padding inside the tooltip, in pixels."
          },
          "subtree": {}
        },
        "snap": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "snap",
            "excludes": {},
            "default": "10/25",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Proximity snap for graphs or single points. It defaults to 10 for\nmouse-powered devices and 25 for touch devices.\n\nNote that in most cases the whole plot area captures the mouse\nmovement, and in these cases `tooltip.snap` doesn't make sense.\nThis applies when [stickyTracking](#plotOptions.series.stickyTracking)\nis `true` (default) and when the tooltip is [shared](#tooltip.shared)\nor [split](#tooltip.split)."
          },
          "subtree": {}
        },
        "headerFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "headerFormat",
            "excludes": {},
            "default": "<span style=\"font-size: 10px\">{point.key}</span><br/>",
            "description": "The HTML of the tooltip header line. Variables are enclosed by\ncurly brackets. Available variables are `point.key`, `series.name`,\n`series.color` and other members from the `point` and `series`\nobjects. The `point.key` variable contains the category name, x\nvalue or datetime string depending on the type of axis. For datetime\naxes, the `point.key` date format can be set using tooltip.xDateFormat."
          },
          "subtree": {}
        },
        "pointFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "pointFormat",
            "excludes": {},
            "default": "<span style=\"color:{point.color}\">\\u25CF</span> {series.name}: <b>{point.y}</b><br/>",
            "description": "The HTML of the point's line in the tooltip. Variables are enclosed\nby curly brackets. Available variables are point.x, point.y, series.\nname and series.color and other properties on the same form. Furthermore,\npoint.y can be extended by the `tooltip.valuePrefix` and\n`tooltip.valueSuffix` variables. This can also be overridden for each\nseries, which makes it a good hook for displaying units.\n\nIn styled mode, the dot is colored by a class name rather\nthan the point color."
          },
          "subtree": {}
        },
        "backgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "backgroundColor",
            "excludes": {},
            "default": "rgba(247,247,247,0.85)",
            "description": "The background color or gradient for the tooltip.\n\nIn styled mode, the stroke width is set in the `.highcharts-tooltip-box` class."
          },
          "subtree": {}
        },
        "borderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "borderWidth",
            "excludes": {},
            "default": "1",
            "description": "The pixel width of the tooltip border.\n\nIn styled mode, the stroke width is set in the `.highcharts-tooltip-box` class."
          },
          "subtree": {}
        },
        "shadow": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "shadow",
            "excludes": {},
            "default": "true",
            "description": "Whether to apply a drop shadow to the tooltip."
          },
          "subtree": {}
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"color\": \"#333333\", \"cursor\": \"default\", \"fontSize\": \"12px\", \"pointerEvents\": \"none\", \"whiteSpace\": \"nowrap\" }",
            "description": "CSS styles for the tooltip. The tooltip can also be styled through\nthe CSS class `.highcharts-tooltip`."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#333333"
              },
              "subtree": {}
            },
            "cursor": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "cursor",
                "excludes": {},
                "default": "default"
              },
              "subtree": {}
            },
            "fontSize": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "fontSize",
                "excludes": {},
                "default": "12px"
              },
              "subtree": {}
            },
            "pointerEvents": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "pointerEvents",
                "excludes": {},
                "default": "none"
              },
              "subtree": {}
            },
            "whiteSpace": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "whiteSpace",
                "excludes": {},
                "default": "nowrap"
              },
              "subtree": {}
            }
          }
        },
        "borderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "borderColor",
            "excludes": {},
            "default": "null",
            "description": "The color of the tooltip border. When `null`, the border takes the\ncolor of the corresponding series or point."
          },
          "subtree": {}
        },
        "crosshairs": {
          "meta": {
            "types": {
              "mixed": 1
            },
            "name": "crosshairs",
            "excludes": {},
            "default": "true",
            "description": "Since 4.1, the crosshair definitions are moved to the Axis object\nin order for a better separation from the tooltip. See [xAxis.crosshair](#xAxis.\ncrosshair)<a>.</a>"
          },
          "subtree": {}
        },
        "followPointer": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "followPointer",
            "excludes": {},
            "description": "Whether the tooltip should follow the mouse as it moves across columns,\npie slices and other point types with an extent. By default it behaves\nthis way for scatter, bubble and pie series by override in the `plotOptions`\nfor those series types.\n\nFor touch moves to behave the same way, [followTouchMove](#tooltip.\nfollowTouchMove) must be `true` also."
          },
          "subtree": {}
        },
        "followTouchMove": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "followTouchMove",
            "excludes": {},
            "description": "Whether the tooltip should follow the finger as it moves on a touch\ndevice. If this is `true` and [chart.panning](#chart.panning) is\nset,`followTouchMove` will take over one-finger touches, so the user\nneeds to use two fingers for zooming and panning."
          },
          "subtree": {}
        },
        "formatter": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "formatter",
            "excludes": {},
            "description": "Callback function to format the text of the tooltip from scratch. Return\n`false` to disable tooltip for a specific point on series.\n\nA subset of HTML is supported. Unless `useHTML` is true, the HTML of the\ntooltip is parsed and converted to SVG, therefore this isn't a complete HTML\nrenderer. The following tags are supported: `<b>`, `<strong>`, `<i>`, `<em>`,\n`<br/>`, `<span>`. Spans can be styled with a `style` attribute,\nbut only text-related CSS that is shared with SVG is handled.\n\nSince version 2.1 the tooltip can be shared between multiple series\nthrough the `shared` option. The available data in the formatter\ndiffer a bit depending on whether the tooltip is shared or not. In\na shared tooltip, all properties except `x`, which is common for\nall points, are kept in an array, `this.points`.\n\nAvailable data are:\n\n<dl>\n\n<dt>this.percentage (not shared) / this.points[i].percentage (shared)</dt>\n\n<dd>Stacked series and pies only. The point's percentage of the total.\n</dd>\n\n<dt>this.point (not shared) / this.points[i].point (shared)</dt>\n\n<dd>The point object. The point name, if defined, is available through\n`this.point.name`.</dd>\n\n<dt>this.points</dt>\n\n<dd>In a shared tooltip, this is an array containing all other properties\nfor each point.</dd>\n\n<dt>this.series (not shared) / this.points[i].series (shared)</dt>\n\n<dd>The series object. The series name is available through\n`this.series.name`.</dd>\n\n<dt>this.total (not shared) / this.points[i].total (shared)</dt>\n\n<dd>Stacked series only. The total value at this point's x value.\n</dd>\n\n<dt>this.x</dt>\n\n<dd>The x value. This property is the same regardless of the tooltip\nbeing shared or not.</dd>\n\n<dt>this.y (not shared) / this.points[i].y (shared)</dt>\n\n<dd>The y value.</dd>\n\n</dl>"
          },
          "subtree": {}
        },
        "hideDelay": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "hideDelay",
            "excludes": {},
            "default": "500",
            "description": "The number of milliseconds to wait until the tooltip is hidden when\nmouse out from a point or chart."
          },
          "subtree": {}
        },
        "pointFormatter": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "pointFormatter",
            "excludes": {},
            "description": "A callback function for formatting the HTML output for a single point\nin the tooltip. Like the `pointFormat` string, but with more flexibility."
          },
          "subtree": {}
        },
        "positioner": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "positioner",
            "excludes": {},
            "description": "A callback function to place the tooltip in a default position. The\ncallback receives three parameters: `labelWidth`, `labelHeight` and\n`point`, where point contains values for `plotX` and `plotY` telling\nwhere the reference point is in the plot area. Add `chart.plotLeft`\nand `chart.plotTop` to get the full coordinates.\n\nThe return should be an object containing x and y values, for example\n`{ x: 100, y: 100 }`."
          },
          "subtree": {}
        },
        "shape": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "shape",
            "excludes": {},
            "default": "callout",
            "description": "The name of a symbol to use for the border around the tooltip."
          },
          "subtree": {}
        },
        "shared": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "shared",
            "excludes": {},
            "default": "false",
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "When the tooltip is shared, the entire plot area will capture mouse\nmovement or touch events. Tooltip texts for series types with ordered\ndata (not pie, scatter, flags etc) will be shown in a single bubble.\nThis is recommended for single series charts and for tablet/mobile\noptimized charts.\n\nSee also [tooltip.split](#tooltip.split), that is better suited for\ncharts with many series, especially line-type series. The\n`tooltip.split` option takes precedence over `tooltip.shared`."
          },
          "subtree": {}
        },
        "split": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "split",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "Split the tooltip into one label per series, with the header close\nto the axis. This is recommended over [shared](#tooltip.shared) tooltips\nfor charts with multiple line series, generally making them easier\nto read. This option takes precedence over `tooltip.shared`."
          },
          "subtree": {}
        },
        "useHTML": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "useHTML",
            "excludes": {},
            "default": "false",
            "description": "Use HTML to render the contents of the tooltip instead of SVG. Using\nHTML allows advanced formatting like tables and images in the tooltip.\nIt is also recommended for rtl languages as it works around rtl\nbugs in early Firefox."
          },
          "subtree": {}
        },
        "valueDecimals": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "valueDecimals",
            "excludes": {},
            "description": "How many decimals to show in each series' y value. This is overridable\nin each series' tooltip options object. The default is to preserve\nall decimals."
          },
          "subtree": {}
        },
        "valuePrefix": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "valuePrefix",
            "excludes": {},
            "description": "A string to prepend to each series' y value. Overridable in each\nseries' tooltip options object."
          },
          "subtree": {}
        },
        "valueSuffix": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "valueSuffix",
            "excludes": {},
            "description": "A string to append to each series' y value. Overridable in each series'\ntooltip options object."
          },
          "subtree": {}
        },
        "xDateFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "xDateFormat",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highstock": 1
            },
            "description": "The format for the date in the tooltip header if the X axis is a\ndatetime axis. The default is a best guess based on the smallest\ndistance between points in the chart."
          },
          "subtree": {}
        },
        "changeDecimals": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "changeDecimals",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "How many decimals to show for the `point.change` value when the\n`series.compare` option is set. This is overridable in each series' tooltip\noptions object. The default is to preserve all decimals."
          },
          "subtree": {}
        }
      }
    },
    "credits": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "credits",
        "excludes": {},
        "description": "Highchart by default puts a credits label in the lower right corner\nof the chart. This can be changed using these options."
      },
      "subtree": {
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "description": "Whether to show the credits text."
          },
          "subtree": {}
        },
        "href": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "href",
            "excludes": {},
            "default": "http://www.highcharts.com",
            "description": "The URL for the credits label."
          },
          "subtree": {}
        },
        "position": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "position",
            "excludes": {},
            "description": "Position configuration for the credits label."
          },
          "subtree": {
            "align": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "align",
                "excludes": {},
                "default": "right",
                "description": "Horizontal alignment of the credits."
              },
              "subtree": {}
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": "-10",
                "description": "Horizontal pixel offset of the credits."
              },
              "subtree": {}
            },
            "verticalAlign": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "verticalAlign",
                "excludes": {},
                "default": "bottom",
                "description": "Vertical alignment of the credits."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": "-5",
                "description": "Vertical pixel offset of the credits."
              },
              "subtree": {}
            }
          }
        },
        "style": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "style",
            "excludes": {},
            "default": "{ \"cursor\": \"pointer\", \"color\": \"#999999\", \"fontSize\": \"10px\" }",
            "description": "CSS styles for the credits label."
          },
          "subtree": {
            "cursor": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "cursor",
                "excludes": {},
                "default": "pointer"
              },
              "subtree": {}
            },
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#999999"
              },
              "subtree": {}
            },
            "fontSize": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "fontSize",
                "excludes": {},
                "default": "9px"
              },
              "subtree": {}
            }
          }
        },
        "text": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "text",
            "excludes": {},
            "default": "Highcharts.com",
            "description": "The text for the credits label."
          },
          "subtree": {}
        },
        "mapText": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "mapText",
            "excludes": {},
            "default": "\\u00a9 <a href=\"{geojson.copyrightUrl}\">{geojson.copyrightShort}</a>",
            "products": {
              "highmaps": 1
            },
            "description": "Credits for map source to be concatenated with conventional credit\ntext. By default this is a format string that collects copyright\ninformation from the map if available."
          },
          "subtree": {}
        },
        "mapTextFull": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "mapTextFull",
            "excludes": {},
            "default": "{geojson.copyright}",
            "products": {
              "highmaps": 1
            },
            "description": "Detailed credits for map source to be displayed on hover of credits\ntext. By default this is a format string that collects copyright\ninformation from the map if available."
          },
          "subtree": {}
        }
      }
    },
    "rangeSelector": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "rangeSelector",
        "excludes": {},
        "products": {
          "highstock": 1
        },
        "description": "The range selector is a tool for selecting ranges to display within\nthe chart. It provides buttons to select preconfigured ranges in\nthe chart, like 1 day, 1 week, 1 month etc. It also provides input\nboxes where min and max dates can be manually input."
      },
      "subtree": {
        "verticalAlign": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "verticalAlign",
            "excludes": {},
            "default": "top",
            "description": "The vertical alignment of the rangeselector box. Allowed properties are `top`,\n`middle`, `bottom`."
          },
          "subtree": {}
        },
        "buttonTheme": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "buttonTheme",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "A collection of attributes for the buttons. The object takes SVG\nattributes like `fill`, `stroke`, `stroke-width`, as well as `style`,\na collection of CSS properties for the text.\n\nThe object can also be extended with states, so you can set presentational\noptions for `hover`, `select` or `disabled` button states.\n\nCSS styles for the text label.\n\nIn styled mode, the buttons are styled by the\n`.highcharts-range-selector-buttons .highcharts-button` rule with its\ndifferent states."
          },
          "subtree": {
            "undefined": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "undefined",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "width",
                "excludes": {},
                "default": 28
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "height",
                "excludes": {},
                "default": 18
              },
              "subtree": {}
            },
            "padding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "padding",
                "excludes": {},
                "default": 2
              },
              "subtree": {}
            },
            "zIndex": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "zIndex",
                "excludes": {},
                "default": 7
              },
              "subtree": {}
            }
          }
        },
        "floating": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "floating",
            "excludes": {},
            "default": false,
            "products": {
              "highstock": 1
            },
            "description": "When the rangeselector is floating, the plot area does not reserve \nspace for it. This opens for positioning anywhere on the chart."
          },
          "subtree": {}
        },
        "x": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "x",
            "excludes": {},
            "default": 0,
            "products": {
              "highstock": 1
            },
            "description": "The x offset of the range selector relative to its horizontal\nalignment within `chart.spacingLeft` and `chart.spacingRight`."
          },
          "subtree": {}
        },
        "y": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "y",
            "excludes": {},
            "default": 0,
            "products": {
              "highstock": 1
            },
            "description": "The y offset of the range selector relative to its horizontal\nalignment within `chart.spacingLeft` and `chart.spacingRight`."
          },
          "subtree": {}
        },
        "height": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "height",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highstock": 1
            },
            "description": "Deprecated. The height of the range selector. Currently it is\ncalculated dynamically."
          },
          "subtree": {}
        },
        "inputPosition": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "inputPosition",
            "excludes": {},
            "default": "{ align: \"right\" }",
            "products": {
              "highstock": 1
            },
            "description": "Positioning for the input boxes. Allowed properties are `align`,\n `x` and `y`."
          },
          "subtree": {
            "align": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "align",
                "excludes": {},
                "default": "right",
                "description": "The alignment of the input box. Allowed properties are `left`,\n`center`, `right`."
              },
              "subtree": {}
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            }
          }
        },
        "buttonPosition": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "buttonPosition",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Positioning for the button row."
          },
          "subtree": {
            "align": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "align",
                "excludes": {},
                "default": "left",
                "description": "The alignment of the input box. Allowed properties are `left`,\n`center`, `right`."
              },
              "subtree": {}
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": 0,
                "description": "X offset of the button row."
              },
              "subtree": {}
            },
            "y": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "y",
                "excludes": {},
                "default": 0,
                "description": "Y offset of the button row."
              },
              "subtree": {}
            }
          }
        },
        "labelStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "labelStyle",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "CSS styles for the labels - the Zoom, From and To texts.\n\nIn styled mode, the labels are styled by the `.highcharts-range-label` class."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#666666"
              },
              "subtree": {}
            }
          }
        },
        "allButtonsEnabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "allButtonsEnabled",
            "excludes": {},
            "default": "false",
            "products": {
              "highstock": 1
            },
            "description": "Whether to enable all buttons from the start. By default buttons\nare only enabled if the corresponding time range exists on the X\naxis, but enabling all buttons allows for dynamically loading different\ntime ranges."
          },
          "subtree": {}
        },
        "buttonSpacing": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "buttonSpacing",
            "excludes": {},
            "default": "0",
            "products": {
              "highstock": 1
            },
            "description": "The space in pixels between the buttons in the range selector."
          },
          "subtree": {}
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Enable or disable the range selector."
          },
          "subtree": {}
        },
        "inputBoxBorderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "inputBoxBorderColor",
            "excludes": {},
            "default": "#cccccc",
            "products": {
              "highstock": 1
            },
            "description": "The border color of the date input boxes."
          },
          "subtree": {}
        },
        "inputBoxHeight": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "inputBoxHeight",
            "excludes": {},
            "default": "17",
            "products": {
              "highstock": 1
            },
            "description": "The pixel height of the date input boxes."
          },
          "subtree": {}
        },
        "inputBoxStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "inputBoxStyle",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "CSS for the container DIV holding the input boxes. Deprecated as\nof 1.2.5\\. Use [inputPosition](#rangeSelector.inputPosition) instead."
          },
          "subtree": {}
        },
        "inputBoxWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "inputBoxWidth",
            "excludes": {},
            "default": "90",
            "products": {
              "highstock": 1
            },
            "description": "The pixel width of the date input boxes."
          },
          "subtree": {}
        },
        "inputDateFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "inputDateFormat",
            "excludes": {},
            "default": "%b %e %Y,",
            "products": {
              "highstock": 1
            },
            "description": "The date format in the input boxes when not selected for editing.\n Defaults to `%b %e, %Y`."
          },
          "subtree": {}
        },
        "inputDateParser": {
          "meta": {
            "types": {
              "function": 1
            },
            "name": "inputDateParser",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "A custom callback function to parse values entered in the input boxes\nand return a valid JavaScript time as milliseconds since 1970."
          },
          "subtree": {}
        },
        "inputEditDateFormat": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "inputEditDateFormat",
            "excludes": {},
            "default": "%Y-%m-%d",
            "products": {
              "highstock": 1
            },
            "description": "The date format in the input boxes when they are selected for editing.\nThis must be a format that is recognized by JavaScript Date.parse."
          },
          "subtree": {}
        },
        "inputEnabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "inputEnabled",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Enable or disable the date input boxes. Defaults to enabled when\nthere is enough space, disabled if not (typically mobile)."
          },
          "subtree": {}
        },
        "inputStyle": {
          "meta": {
            "types": {
              "cssobject": 1
            },
            "name": "inputStyle",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "CSS for the HTML inputs in the range selector.\n\nIn styled mode, the inputs are styled by the `.highcharts-range-input text`\nrule in SVG mode, and `input.highcharts-range-selector` when active."
          },
          "subtree": {}
        },
        "selected": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "selected",
            "excludes": {},
            "default": "undefined",
            "products": {
              "highstock": 1
            },
            "description": "The index of the button to appear pre-selected."
          },
          "subtree": {}
        },
        "buttons": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "buttons",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "An array of configuration objects for the buttons.\n\nDefaults to\n\n<pre>buttons: [{\n    type: 'month',\n    count: 1,\n    text: '1m'\n}, {\n    type: 'month',\n    count: 3,\n    text: '3m'\n}, {\n    type: 'month',\n    count: 6,\n    text: '6m'\n}, {\n    type: 'ytd',\n    text: 'YTD'\n}, {\n    type: 'year',\n    count: 1,\n    text: '1y'\n}, {\n    type: 'all',\n    text: 'All'\n}]</pre>"
          },
          "subtree": {
            "count": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "count",
                "excludes": {},
                "default": "1",
                "products": {
                  "highstock": 1
                },
                "description": "How many units of the defined type the button should span. If `type`\nis \"month\" and `count` is 3, the button spans three months."
              },
              "subtree": {}
            },
            "events": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "events",
                "excludes": {}
              },
              "subtree": {
                "click": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "click",
                    "excludes": {},
                    "default": "undefined",
                    "products": {
                      "highstock": 1
                    },
                    "description": "Fires when clicking on the rangeSelector button. One parameter, event,\nis passed to the function, containing common event information.\n<pre>\nclick: function(e) {\n  console.log(this);\n}\n</pre>\n\nReturn false to stop default button's click action."
                  },
                  "subtree": {}
                }
              }
            },
            "offsetMax": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "offsetMax",
                "excludes": {},
                "default": "0",
                "products": {
                  "highstock": 1
                },
                "description": "Additional range (in milliseconds) added to the end of the calculated time span."
              },
              "subtree": {}
            },
            "offsetMin": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "offsetMin",
                "excludes": {},
                "default": "0",
                "products": {
                  "highstock": 1
                },
                "description": "Additional range (in milliseconds) added to the start of the calculated time span."
              },
              "subtree": {}
            },
            "dataGrouping": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "dataGrouping",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "A custom data grouping object for each button."
              },
              "subtree": {}
            },
            "text": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "text",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "The text for the button itself."
              },
              "subtree": {}
            },
            "type": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "type",
                "excludes": {},
                "products": {
                  "highstock": 1
                },
                "description": "Defined the time span for the button. Can be one of `millisecond`,\n`second`, `minute`, `hour`, `day`, `week`, `month`, `ytd`, `all`."
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "responsive": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "responsive",
        "excludes": {},
        "description": "Allows setting a set of rules to apply for different screen or chart\nsizes. Each rule specifies additional chart options."
      },
      "subtree": {
        "rules": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "rules",
            "excludes": {},
            "description": "A set of rules for responsive settings. The rules are executed from\nthe top down."
          },
          "subtree": {
            "chartOptions": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "chartOptions",
                "excludes": {},
                "description": "A full set of chart options to apply as overrides to the general\nchart options. The chart options are applied when the given rule\nis active.\n\nA special case is configuration objects that take arrays, for example\n[xAxis](#xAxis), [yAxis](#yAxis) or [series](#series). For these\ncollections, an `id` option is used to map the new option set to\nan existing object. If an existing object of the same id is not found,\nthe item of the same indexupdated. So for example, setting `chartOptions`\nwith two series items without an `id`, will cause the existing chart's\ntwo series to be updated with respective options."
              },
              "subtree": {}
            },
            "condition": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "condition",
                "excludes": {},
                "description": "Under which conditions the rule applies."
              },
              "subtree": {
                "callback": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "callback",
                    "excludes": {},
                    "description": "A callback function to gain complete control on when the responsive\nrule applies. Return `true` if it applies. This opens for checking\nagainst other metrics than the chart size, or example the document\nsize or other elements."
                  },
                  "subtree": {}
                },
                "maxHeight": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "maxHeight",
                    "excludes": {},
                    "description": "The responsive rule applies if the chart height is less than this."
                  },
                  "subtree": {}
                },
                "maxWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "maxWidth",
                    "excludes": {},
                    "description": "The responsive rule applies if the chart width is less than this."
                  },
                  "subtree": {}
                },
                "minHeight": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "minHeight",
                    "excludes": {},
                    "default": "0",
                    "description": "The responsive rule applies if the chart height is greater than this."
                  },
                  "subtree": {}
                },
                "minWidth": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "minWidth",
                    "excludes": {},
                    "default": "0",
                    "description": "The responsive rule applies if the chart width is greater than this."
                  },
                  "subtree": {}
                }
              }
            }
          }
        }
      }
    },
    "scrollbar": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "scrollbar",
        "excludes": {},
        "products": {
          "highstock": 1
        },
        "description": "The scrollbar is a means of panning over the X axis of a stock chart.\n\nIn styled mode, all the presentational options for the\nscrollbar are replaced by the classes `.highcharts-scrollbar-thumb`,\n`.highcharts-scrollbar-arrow`, `.highcharts-scrollbar-button`,\n`.highcharts-scrollbar-rifles` and `.highcharts-scrollbar-track`."
      },
      "subtree": {
        "height": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "height",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "The height of the scrollbar. The height also applies to the width\nof the scroll arrows so that they are always squares. Defaults to\n20 for touch devices and 14 for mouse devices."
          },
          "subtree": {}
        },
        "barBorderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "barBorderRadius",
            "excludes": {},
            "default": "0",
            "products": {
              "highstock": 1
            },
            "description": "The border rounding radius of the bar."
          },
          "subtree": {}
        },
        "buttonBorderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "buttonBorderRadius",
            "excludes": {},
            "default": "0",
            "products": {
              "highstock": 1
            },
            "description": "The corner radius of the scrollbar buttons."
          },
          "subtree": {}
        },
        "liveRedraw": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "liveRedraw",
            "excludes": {},
            "products": {
              "highstock": 1
            },
            "description": "Whether to redraw the main chart as the scrollbar or the navigator\nzoomed window is moved. Defaults to `true` for modern browsers and\n`false` for legacy IE browsers as well as mobile devices."
          },
          "subtree": {}
        },
        "margin": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "margin",
            "excludes": {},
            "default": 10,
            "description": "The margin between the scrollbar and its axis when the scrollbar is\napplied directly to an axis."
          },
          "subtree": {}
        },
        "minWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minWidth",
            "excludes": {},
            "default": "6",
            "products": {
              "highstock": 1
            },
            "description": "The minimum width of the scrollbar."
          },
          "subtree": {}
        },
        "step": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "step",
            "excludes": {},
            "default": 0.2
          },
          "subtree": {}
        },
        "zIndex": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "zIndex",
            "excludes": {},
            "default": 3,
            "description": "The z index of the scrollbar group."
          },
          "subtree": {}
        },
        "barBackgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "barBackgroundColor",
            "excludes": {},
            "default": "#cccccc",
            "products": {
              "highstock": 1
            },
            "description": "The background color of the scrollbar itself."
          },
          "subtree": {}
        },
        "barBorderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "barBorderWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highstock": 1
            },
            "description": "The width of the bar's border."
          },
          "subtree": {}
        },
        "barBorderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "barBorderColor",
            "excludes": {},
            "default": "#cccccc",
            "products": {
              "highstock": 1
            },
            "description": "The color of the scrollbar's border."
          },
          "subtree": {}
        },
        "buttonArrowColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "buttonArrowColor",
            "excludes": {},
            "default": "#333333",
            "products": {
              "highstock": 1
            },
            "description": "The color of the small arrow inside the scrollbar buttons."
          },
          "subtree": {}
        },
        "buttonBackgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "buttonBackgroundColor",
            "excludes": {},
            "default": "#e6e6e6",
            "products": {
              "highstock": 1
            },
            "description": "The color of scrollbar buttons."
          },
          "subtree": {}
        },
        "buttonBorderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "buttonBorderColor",
            "excludes": {},
            "default": "#cccccc",
            "products": {
              "highstock": 1
            },
            "description": "The color of the border of the scrollbar buttons."
          },
          "subtree": {}
        },
        "buttonBorderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "buttonBorderWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highstock": 1
            },
            "description": "The border width of the scrollbar buttons."
          },
          "subtree": {}
        },
        "rifleColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "rifleColor",
            "excludes": {},
            "default": "#333333",
            "products": {
              "highstock": 1
            },
            "description": "The color of the small rifles in the middle of the scrollbar."
          },
          "subtree": {}
        },
        "trackBackgroundColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "trackBackgroundColor",
            "excludes": {},
            "default": "#f2f2f2",
            "products": {
              "highstock": 1
            },
            "description": "The color of the track background."
          },
          "subtree": {}
        },
        "trackBorderColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "trackBorderColor",
            "excludes": {},
            "default": "#f2f2f2",
            "products": {
              "highstock": 1
            },
            "description": "The color of the border of the scrollbar track."
          },
          "subtree": {}
        },
        "trackBorderWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "trackBorderWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highstock": 1
            },
            "description": "The width of the border of the scrollbar track."
          },
          "subtree": {}
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Enable or disable the scrollbar."
          },
          "subtree": {}
        },
        "showFull": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showFull",
            "excludes": {},
            "default": "true",
            "products": {
              "highstock": 1
            },
            "description": "Whether to show or hide the scrollbar when the scrolled content is\nzoomed out to it full extent."
          },
          "subtree": {}
        },
        "trackBorderRadius": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "trackBorderRadius",
            "excludes": {},
            "default": "0",
            "products": {
              "highstock": 1
            },
            "description": "The corner radius of the border of the scrollbar track."
          },
          "subtree": {}
        }
      }
    },
    "pane": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "pane",
        "excludes": {},
        "description": "The pane serves as a container for axes and backgrounds for circular \ngauges and polar charts."
      },
      "subtree": {
        "center": {
          "meta": {
            "types": {
              "array": "(String|Number)"
            },
            "name": "center",
            "excludes": {},
            "default": "[\"50%\", \"50%\"]",
            "products": {
              "highcharts": 1
            },
            "description": "The center of a polar chart or angular gauge, given as an array\nof [x, y] positions. Positions can be given as integers that transform\nto pixels, or as percentages of the plot area size."
          },
          "subtree": {}
        },
        "size": {
          "meta": {
            "types": {
              "number": 1,
              "string": 1
            },
            "name": "size",
            "excludes": {},
            "default": "85%",
            "products": {
              "highcharts": 1
            },
            "description": "The size of the pane, either as a number defining pixels, or a\npercentage defining a percentage of the plot are."
          },
          "subtree": {}
        },
        "startAngle": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "startAngle",
            "excludes": {},
            "default": 0,
            "products": {
              "highcharts": 1
            },
            "description": "The start angle of the polar X axis or gauge axis, given in degrees\nwhere 0 is north. Defaults to 0."
          },
          "subtree": {}
        },
        "endAngle": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "endAngle",
            "excludes": {},
            "products": {
              "highcharts": 1
            },
            "description": "The end angle of the polar X axis or gauge value axis, given in degrees\nwhere 0 is north. Defaults to [startAngle](#pane.startAngle) + 360."
          },
          "subtree": {}
        },
        "background": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "background",
            "excludes": {},
            "description": "An array of background items for the pane."
          },
          "subtree": {
            "shape": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "shape",
                "excludes": {},
                "default": "solid",
                "products": {
                  "highcharts": 1
                },
                "description": "Tha shape of the pane background. When `solid`, the background\nis circular. When `arc`, the background extends only from the min\nto the max of the value axis."
              },
              "subtree": {}
            },
            "borderWidth": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "borderWidth",
                "excludes": {},
                "default": "1",
                "products": {
                  "highcharts": 1
                },
                "description": "The pixel border width of the pane background."
              },
              "subtree": {}
            },
            "borderColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "borderColor",
                "excludes": {},
                "default": "#cccccc",
                "products": {
                  "highcharts": 1
                },
                "description": "The pane background border color."
              },
              "subtree": {}
            },
            "backgroundColor": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "backgroundColor",
                "excludes": {},
                "products": {
                  "highcharts": 1
                },
                "description": "The background color or gradient for the pane."
              },
              "subtree": {
                "linearGradient": {
                  "meta": {
                    "types": {
                      "object": 1
                    },
                    "name": "linearGradient",
                    "excludes": {},
                    "description": "Definition of the gradient, similar to SVG: object literal holds\nstart position (x1, y1) and the end position (x2, y2) relative\nto the shape, where 0 means top/left and 1 is bottom/right.\nAll positions are floats between 0 and 1."
                  },
                  "subtree": {
                    "x1": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "x1",
                        "excludes": {},
                        "default": 0
                      },
                      "subtree": {}
                    },
                    "y1": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "y1",
                        "excludes": {},
                        "default": 0
                      },
                      "subtree": {}
                    },
                    "x2": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "x2",
                        "excludes": {},
                        "default": 0
                      },
                      "subtree": {}
                    },
                    "y2": {
                      "meta": {
                        "types": {
                          "number": 1
                        },
                        "name": "y2",
                        "excludes": {},
                        "default": 1
                      },
                      "subtree": {}
                    }
                  }
                },
                "stops": {
                  "meta": {
                    "types": {
                      "array": "Array"
                    },
                    "name": "stops",
                    "excludes": {},
                    "default": "[[0, #ffffff], [1, #e6e6e6]]",
                    "description": "The stops is an array of tuples, where the first\nitem is a float between 0 and 1 assigning the relative position in\nthe gradient, and the second item is the color."
                  },
                  "subtree": {}
                }
              }
            },
            "from": {
              "meta": {
                "types": {},
                "name": "from",
                "excludes": {}
              },
              "subtree": {}
            },
            "innerRadius": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "innerRadius",
                "excludes": {},
                "default": "0",
                "products": {
                  "highcharts": 1
                },
                "description": "The inner radius of the pane background. Can be either numeric\n(pixels) or a percentage string."
              },
              "subtree": {}
            },
            "outerRadius": {
              "meta": {
                "types": {
                  "number": 1,
                  "string": 1
                },
                "name": "outerRadius",
                "excludes": {},
                "default": "105%",
                "products": {
                  "highcharts": 1
                },
                "description": "The outer radius of the circular pane background. Can be either\nnumeric (pixels) or a percentage string."
              },
              "subtree": {}
            },
            "className": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "className",
                "excludes": {},
                "description": "The class name for this background."
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "colorAxis": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "colorAxis",
        "excludes": {},
        "products": {
          "highcharts": 1,
          "highmaps": 1
        },
        "description": "A color axis for choropleth maps and heat maps. Visually, the color axis\nwill appear as a gradient or as separate items inside the legend,\ndepending on whether the axis is scalar or based on data classes.\n\nFor supported color formats, see the \n[docs article about colors](http://www.highcharts.com/docs/chart-design-and-style/colors).\n\nA scalar color axis is represented by a gradient. The colors either range\nbetween the [minColor](#colorAxis.minColor) and the [maxColor](#colorAxis.maxColor),\nor for more fine grained control the colors can be\ndefined in [stops](#colorAxis.stops). Often times, the color axis needs\nto be adjusted to get the right color spread for the data. In addition to\nstops, consider using a logarithmic [axis type](#colorAxis.type), or\nsetting [min](#colorAxis.min) and [max](#colorAxis.max) to avoid the\ncolors being determined by outliers.\n\nWhen [dataClasses](#colorAxis.dataClasses) are used, the ranges are\nsubdivided into separate classes like categories based on their values.\nThis can be used for ranges between two values, but also for a true\ncategory. However, when your data is categorized, it may be as convenient\nto add each category to a separate series.\n\nSee [the Axis object](#Axis) for programmatic access to the axis.",
        "extends": "{xAxis}"
      },
      "subtree": {
        "lineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "lineWidth",
            "excludes": {},
            "default": 0
          },
          "subtree": {}
        },
        "minPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "minPadding",
            "excludes": {},
            "default": 0,
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Padding of the min value relative to the length of the axis. A\npadding of 0.05 will make a 100px axis 5px longer."
          },
          "subtree": {}
        },
        "maxPadding": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "maxPadding",
            "excludes": {},
            "default": 0,
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Padding of the max value relative to the length of the axis. A\npadding of 0.05 will make a 100px axis 5px longer."
          },
          "subtree": {}
        },
        "gridLineWidth": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "gridLineWidth",
            "excludes": {},
            "default": "1",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The width of the grid lines extending from the axis across the\ngradient of a scalar color axis."
          },
          "subtree": {}
        },
        "tickPixelInterval": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickPixelInterval",
            "excludes": {},
            "default": "72",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "If [tickInterval](#colorAxis.tickInterval) is `null` this option\nsets the approximate pixel interval of the tick marks."
          },
          "subtree": {}
        },
        "startOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "startOnTick",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Whether to force the axis to start on a tick. Use this option with\nthe `maxPadding` option to control the axis start."
          },
          "subtree": {}
        },
        "endOnTick": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "endOnTick",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Whether to force the axis to end on a tick. Use this option with\nthe [maxPadding](#colorAxis.maxPadding) option to control the axis\nend."
          },
          "subtree": {}
        },
        "marker": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "marker",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The triangular marker on a scalar color axis that points to the\nvalue of the hovered area. To disable the marker, set\n`marker: null`."
          },
          "subtree": {
            "animation": {
              "meta": {
                "types": {
                  "object": 1,
                  "boolean": 1
                },
                "name": "animation",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "Animation for the marker as it moves between values. Set to `false`\nto disable animation. Defaults to `{ duration: 50 }`."
              },
              "subtree": {
                "duration": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "duration",
                    "excludes": {},
                    "default": 50
                  },
                  "subtree": {}
                }
              }
            },
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "default": "#999999",
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "The color of the marker."
              },
              "subtree": {}
            }
          }
        },
        "labels": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "labels",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The axis labels show the number for each tick.\n\nFor more live examples on label options, see [xAxis.labels in the\nHighcharts API.](/highcharts#xAxis.labels)",
            "extends": "xAxis.labels"
          },
          "subtree": {
            "overflow": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "overflow",
                "excludes": {},
                "default": "justify",
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "How to handle overflowing labels on horizontal color axis. Can be\nundefined or \"justify\". If \"justify\", labels will not render\noutside the legend area. If there is room to move it, it will be\naligned to the edge, else it will be removed."
              },
              "subtree": {}
            },
            "rotation": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "rotation",
                "excludes": {},
                "default": 0
              },
              "subtree": {}
            }
          }
        },
        "minColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "minColor",
            "excludes": {},
            "default": "#e6ebf5",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The color to represent the minimum of the color axis. Unless [dataClasses](#colorAxis.\ndataClasses) or [stops](#colorAxis.stops) are set, the gradient\nstarts at this value.\n\nIf dataClasses are set, the color is based on minColor and maxColor\nunless a color is set for each data class, or the [dataClassColor](#colorAxis.\ndataClassColor) is set."
          },
          "subtree": {}
        },
        "maxColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "maxColor",
            "excludes": {},
            "default": "#003399",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The color to represent the maximum of the color axis. Unless [dataClasses](#colorAxis.\ndataClasses) or [stops](#colorAxis.stops) are set, the gradient\nends at this value.\n\nIf dataClasses are set, the color is based on minColor and maxColor\nunless a color is set for each data class, or the [dataClassColor](#colorAxis.\ndataClassColor) is set."
          },
          "subtree": {}
        },
        "tickLength": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickLength",
            "excludes": {},
            "default": 5,
            "description": "The pixel length of the main tick marks on the color axis."
          },
          "subtree": {}
        },
        "showInLegend": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "showInLegend",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Whether to display the colorAxis in the legend."
          },
          "subtree": {}
        },
        "allowDecimals": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "allowDecimals",
            "excludes": {},
            "default": "true",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Whether to allow decimals on the color axis."
          },
          "subtree": {}
        },
        "dataClassColor": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "dataClassColor",
            "excludes": {},
            "default": "tween",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Determines how to set each data class' color if no individual color\nis set. The default value, `tween`, computes intermediate colors\nbetween `minColor` and `maxColor`. The other possible value, `category`,\npulls colors from the global or chart specific [colors](#colors)\narray."
          },
          "subtree": {}
        },
        "dataClasses": {
          "meta": {
            "types": {
              "array": "Object"
            },
            "name": "dataClasses",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "An array of data classes or ranges for the choropleth map. If none\ngiven, the color axis is scalar and values are distributed as a gradient\nbetween the minimum and maximum colors."
          },
          "subtree": {
            "color": {
              "meta": {
                "types": {
                  "color": 1
                },
                "name": "color",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "The color of each data class. If not set, the color is pulled from\nthe global or chart-specific [colors](#colors) array. In \nstyled mode, this option is ignored. Instead, use colors defined in\nCSS."
              },
              "subtree": {}
            },
            "from": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "from",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "The start of the value range that the data class represents,\nrelating to the point value.\n\nThe range of each `dataClass` is closed in both ends, but can be\noverridden by the next `dataClass`."
              },
              "subtree": {}
            },
            "name": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "name",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "The name of the data class as it appears in the legend.\nIf no name is given, it is automatically created based on the\n`from` and `to` values. For full programmatic control,\n[legend.labelFormatter](#legend.labelFormatter) can be used.\nIn the formatter, `this.from` and `this.to` can be accessed."
              },
              "subtree": {}
            },
            "to": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "to",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "The end of the value range that the data class represents,\nrelating to the point value.\n\nThe range of each `dataClass` is closed in both ends, but can be\noverridden by the next `dataClass`."
              },
              "subtree": {}
            }
          }
        },
        "max": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "max",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The maximum value of the axis in terms of map point values. If `null`,\nthe max value is automatically calculated. If the `endOnTick` option\nis true, the max value might be rounded up."
          },
          "subtree": {}
        },
        "min": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "min",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The minimum value of the axis in terms of map point values. If `null`,\nthe min value is automatically calculated. If the `startOnTick`\noption is true, the min value might be rounded down."
          },
          "subtree": {}
        },
        "gridLineColor": {
          "meta": {
            "types": {
              "color": 1
            },
            "name": "gridLineColor",
            "excludes": {},
            "default": "#e6e6e6",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Color of the grid lines extending from the axis across the gradient."
          },
          "subtree": {}
        },
        "tickInterval": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "tickInterval",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The interval of the tick marks in axis units. When `null`, the tick\ninterval is computed to approximately follow the `tickPixelInterval`."
          },
          "subtree": {}
        },
        "stops": {
          "meta": {
            "types": {
              "array": "Array"
            },
            "name": "stops",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Color stops for the gradient of a scalar color axis. Use this in\ncases where a linear gradient between a `minColor` and `maxColor`\nis not sufficient. The stops is an array of tuples, where the first\nitem is a float between 0 and 1 assigning the relative position in\nthe gradient, and the second item is the color."
          },
          "subtree": {}
        },
        "type": {
          "meta": {
            "types": {
              "string": 1
            },
            "name": "type",
            "excludes": {},
            "default": "linear",
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "The type of interpolation to use for the color axis. Can be `linear`\nor `logarithmic`."
          },
          "subtree": {}
        },
        "reversed": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "reversed",
            "excludes": {},
            "products": {
              "highcharts": 1,
              "highmaps": 1
            },
            "description": "Whether to reverse the axis so that the highest number is closest\nto the origin. Defaults to `false` in a horizontal legend and `true`\nin a vertical legend, where the smallest value starts on top."
          },
          "subtree": {}
        },
        "events": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "events",
            "excludes": {}
          },
          "subtree": {
            "legendItemClick": {
              "meta": {
                "types": {
                  "function": 1
                },
                "name": "legendItemClick",
                "excludes": {},
                "products": {
                  "highcharts": 1,
                  "highmaps": 1
                },
                "description": "Fires when the legend item belonging to the colorAxis is clicked.\nOne parameter, `event`, is passed to the function."
              },
              "subtree": {}
            }
          }
        }
      }
    },
    "mapNavigation": {
      "meta": {
        "types": {
          "object": 1
        },
        "name": "mapNavigation",
        "excludes": {},
        "products": {
          "highmaps": 1
        }
      },
      "subtree": {
        "buttonOptions": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "buttonOptions",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "General options for the map navigation buttons. Individual options\ncan be given from the [mapNavigation.buttons](#mapNavigation.buttons)\noption set."
          },
          "subtree": {
            "alignTo": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "alignTo",
                "excludes": {},
                "default": "plotBox",
                "products": {
                  "highmaps": 1
                },
                "description": "What box to align the buttons to. Possible values are `plotBox`\nand `spacingBox`."
              },
              "subtree": {}
            },
            "align": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "align",
                "excludes": {},
                "default": "left",
                "products": {
                  "highmaps": 1
                },
                "description": "The alignment of the navigation buttons."
              },
              "subtree": {}
            },
            "verticalAlign": {
              "meta": {
                "types": {
                  "string": 1
                },
                "name": "verticalAlign",
                "excludes": {},
                "default": "bottom",
                "products": {
                  "highmaps": 1
                },
                "description": "The vertical alignment of the buttons. Individual alignment can\nbe adjusted by each button's `y` offset."
              },
              "subtree": {}
            },
            "x": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "x",
                "excludes": {},
                "default": "0",
                "products": {
                  "highmaps": 1
                },
                "description": "The X offset of the buttons relative to its `align` setting."
              },
              "subtree": {}
            },
            "width": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "width",
                "excludes": {},
                "default": "18",
                "products": {
                  "highmaps": 1
                },
                "description": "The width of the map navigation buttons."
              },
              "subtree": {}
            },
            "height": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "height",
                "excludes": {},
                "default": "18",
                "products": {
                  "highmaps": 1
                },
                "description": "The pixel height of the map navigation buttons."
              },
              "subtree": {}
            },
            "padding": {
              "meta": {
                "types": {
                  "number": 1
                },
                "name": "padding",
                "excludes": {},
                "default": "5",
                "products": {
                  "highmaps": 1
                },
                "description": "Padding for the navigation buttons."
              },
              "subtree": {}
            },
            "style": {
              "meta": {
                "types": {
                  "cssobject": 1
                },
                "name": "style",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "Text styles for the map navigation buttons. Defaults to\n\n<pre>{\n    fontSize: '15px',\n    fontWeight: 'bold',\n    textAlign: 'center'\n}</pre>"
              },
              "subtree": {
                "fontSize": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fontSize",
                    "excludes": {},
                    "default": "15px"
                  },
                  "subtree": {}
                },
                "fontWeight": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "fontWeight",
                    "excludes": {},
                    "default": "bold"
                  },
                  "subtree": {}
                }
              }
            },
            "theme": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "theme",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "A configuration object for the button theme. The object accepts\nSVG properties like `stroke-width`, `stroke` and `fill`. Tri-state\nbutton styles are supported by the `states.hover` and `states.select`\nobjects."
              },
              "subtree": {
                "undefined": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "undefined",
                    "excludes": {},
                    "default": "center"
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "buttons": {
          "meta": {
            "types": {
              "object": 1
            },
            "name": "buttons",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "The individual buttons for the map navigation. This usually includes\nthe zoom in and zoom out buttons. Properties for each button is\ninherited from\n[mapNavigation.buttonOptions](#mapNavigation.buttonOptions), while\nindividual options can be overridden. But default, the `onclick`, `text`\nand `y` options are individual."
          },
          "subtree": {
            "zoomIn": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "zoomIn",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "Options for the zoom in button. Properties for the zoom in and zoom\nout buttons are inherited from\n[mapNavigation.buttonOptions](#mapNavigation.buttonOptions), while\nindividual options can be overridden. By default, the `onclick`,\n`text` and `y` options are individual.",
                "extends": "mapNavigation.buttonOptions"
              },
              "subtree": {
                "onclick": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "onclick",
                    "excludes": {},
                    "products": {
                      "highmaps": 1
                    },
                    "description": "Click handler for the button. Defaults to:\n\n<pre>function () {\nthis.mapZoom(0.5);\n}</pre>"
                  },
                  "subtree": {}
                },
                "text": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "text",
                    "excludes": {},
                    "default": "+",
                    "products": {
                      "highmaps": 1
                    },
                    "description": "The text for the button. The tooltip (title) is a language option\ngiven by [lang.zoomIn](#lang.zoomIn)."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": "0",
                    "products": {
                      "highmaps": 1
                    },
                    "description": "The position of the zoomIn button relative to the vertical\nalignment."
                  },
                  "subtree": {}
                }
              }
            },
            "zoomOut": {
              "meta": {
                "types": {
                  "object": 1
                },
                "name": "zoomOut",
                "excludes": {},
                "products": {
                  "highmaps": 1
                },
                "description": "Options for the zoom out button. Properties for the zoom in and\nzoom out buttons are inherited from\n[mapNavigation.buttonOptions](#mapNavigation.buttonOptions), while\nindividual options can be overridden. By default, the `onclick`,\n`text` and `y` options are individual.",
                "extends": "mapNavigation.buttonOptions"
              },
              "subtree": {
                "onclick": {
                  "meta": {
                    "types": {
                      "function": 1
                    },
                    "name": "onclick",
                    "excludes": {},
                    "products": {
                      "highmaps": 1
                    },
                    "description": "Click handler for the button. Defaults to:\n\n<pre>function () {\n    this.mapZoom(2);\n}</pre>"
                  },
                  "subtree": {}
                },
                "text": {
                  "meta": {
                    "types": {
                      "string": 1
                    },
                    "name": "text",
                    "excludes": {},
                    "default": "-",
                    "products": {
                      "highmaps": 1
                    },
                    "description": "The text for the button. The tooltip (title) is a language option\ngiven by [lang.zoomOut](#lang.zoomIn)."
                  },
                  "subtree": {}
                },
                "y": {
                  "meta": {
                    "types": {
                      "number": 1
                    },
                    "name": "y",
                    "excludes": {},
                    "default": "28",
                    "products": {
                      "highmaps": 1
                    },
                    "description": "The position of the zoomOut button relative to the vertical\nalignment."
                  },
                  "subtree": {}
                }
              }
            }
          }
        },
        "mouseWheelSensitivity": {
          "meta": {
            "types": {
              "number": 1
            },
            "name": "mouseWheelSensitivity",
            "excludes": {},
            "default": "1.1",
            "products": {
              "highmaps": 1
            },
            "description": "Sensitivity of mouse wheel or trackpad scrolling. 1 is no sensitivity,\n while with 2, one mousewheel delta will zoom in 50%."
          },
          "subtree": {}
        },
        "enableButtons": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enableButtons",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "Whether to enable navigation buttons. By default it inherits the\n[enabled](#mapNavigation.enabled) setting."
          },
          "subtree": {}
        },
        "enableDoubleClickZoom": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enableDoubleClickZoom",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "Enables zooming in on an area on double clicking in the map. By default\nit inherits the [enabled](#mapNavigation.enabled) setting."
          },
          "subtree": {}
        },
        "enableDoubleClickZoomTo": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enableDoubleClickZoomTo",
            "excludes": {},
            "default": "false",
            "products": {
              "highmaps": 1
            },
            "description": "Whether to zoom in on an area when that area is double clicked."
          },
          "subtree": {}
        },
        "enableMouseWheelZoom": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enableMouseWheelZoom",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "Enables zooming by mouse wheel. By default it inherits the [enabled](#mapNavigation.\nenabled) setting."
          },
          "subtree": {}
        },
        "enableTouchZoom": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enableTouchZoom",
            "excludes": {},
            "products": {
              "highmaps": 1
            },
            "description": "Whether to enable multitouch zooming. Note that if the chart covers\nthe viewport, this prevents the user from using multitouch and touchdrag\non the web page, so you should make sure the user is not trapped\ninside the chart. By default it inherits the [enabled](#mapNavigation.\nenabled) setting."
          },
          "subtree": {}
        },
        "enabled": {
          "meta": {
            "types": {
              "boolean": 1
            },
            "name": "enabled",
            "excludes": {},
            "default": "false",
            "products": {
              "highmaps": 1
            },
            "description": "Whether to enable map navigation. The default is not to enable navigation,\nas many choropleth maps are simple and don't need it. Additionally,\nwhen touch zoom and mousewheel zoom is enabled, it breaks the default\nbehaviour of these interactions in the website, and the implementer\nshould be aware of this.\n\nIndividual interactions can be enabled separately, namely buttons,\nmultitouch zoom, double click zoom, double click zoom to element\nand mousewheel zoom."
          },
          "subtree": {}
        }
      }
    },
    "zAxis": {
      "meta": {
        "types": {
          "array": "zAxis"
        },
        "name": "zAxis",
        "excludes": {},
        "products": {
          "highcharts": 1
        },
        "description": "The Z axis or depth axis for 3D plots.\n\nSee [the Axis object](#Axis) for programmatic access to the axis.",
        "extends": "xAxis"
      },
      "subtree": {}
    }
  }
};
