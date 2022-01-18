// Multiavatar v1.0

// URL: https://multiavatar.com
// GitHub: https://github.com/multiavatar/Multiavatar
// Copyright: Gie Katon (2020-2021) (https://giekaton.com)


function multiavatar(string, sansEnv, ver) {
  string += '';

  var themes = {

    // 00_final
    "00": {
      "A": {
        "env": ["none"],
        "clo": ["none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none"]
      },
      "B": {
        "env": ["none"],
        "clo": ["none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none"]
      },
      "C": {
        "env": ["none"],
        "clo": ["none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none"]
      },
    },

    // 01_final
    "01": {
      "A": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["#4a2d00"]
      },
      "B": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["#4a2d00"]
      },
      "C": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["#4a2d00"]
      }
    },

    // 02_final
    "02": {
      "A": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["red"],
        "eyes": ["red", "white", "white", "white", "white", "white", "white", "white", "white"],
        "top": ["#e5ca69", "pink"]
      },
      "B": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["red"],
        "eyes": ["green", "white", "white", "white", "white", "white", "white", "white", "white"],
        "top": ["#e5ca69", "pink"]
      },
      "C": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["red"],
        "eyes": ["blue", "white", "white", "white", "white", "white", "white", "white", "white"],
        "top": ["#e5ca69", "pink"]
      }
    },

    // 03_final
    "03": {
      "A": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["ffeebe"],
        "mouth": ["white", "black"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      },
      "B": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["ffeebe"],
        "mouth": ["white", "black"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      },
      "C": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["ffeebe"],
        "mouth": ["white", "black"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      }
    },

    // 04_final
    "04": {
      "A": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["red", "orange"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      },
      "B": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["red", "orange"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      },
      "C": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["red", "orange"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      }
    },

    // 05_final
    "05": {
      "A": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["orange", "white"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      },
      "B": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["orange", "white"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      },
      "C": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["orange", "white"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      }
    },

    // 06_final
    "06": {
      "A": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["orange", "white"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      },
      "B": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["orange", "white"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      },
      "C": {
        "env": ["none"],
        "clo": ["#685220", "black"],
        "head": ["#ffeebe"],
        "mouth": ["orange", "white"],
        "eyes": ["black", "black", "black", "white", "black", "white"],
        "top": ["black"]
      }
    },

    // 07_final
    "07": {
      "A": {
        "env": ["none"],
        "clo": ["none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none", "none", "none", "none"],
        "top": ["none", "none", "none", "none"]
      },
      "B": {
        "env": ["none"],
        "clo": ["none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none", "none", "none", "none"],
        "top": ["none", "none", "none", "none"]
      },
      "C": {
        "env": ["none"],
        "clo": ["none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none", "none", "none", "none"],
        "top": ["none", "none", "none", "none"]
      }
    },

    // 08_final
    "08": {
      "A": {
        "env": ["none"],
        "clo": ["none", "none"],
        "head": ["#ffeebe"],
        "eyes": ["none", "none"],
        "mouth": ["white"],
        "top": ["none", "none"]
      },
      "B": {
        "env": ["none"],
        "clo": ["none", "none"],
        "head": ["#ffeebe"],
        "eyes": ["none", "none"],
        "mouth": ["white"],
        "top": ["none", "none"]
      },
      "C": {
        "env": ["none"],
        "clo": ["none", "none"],
        "head": ["#ffeebe"],
        "eyes": ["none", "none"],
        "mouth": ["white"],
        "top": ["none", "none"]
      }
    },

    // 09_final
    "09": {
      "A": {
        "env": ["none"],
        "clo": ["none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none", "none", "none"]
      },
      "B": {
        "env": ["none"],
        "clo": ["none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none", "none", "none"]
      },
      "C": {
        "env": ["none"],
        "clo": ["none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none", "none", "none"]
      }
    },

    // 10_final
    "10": {
      "A": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none"],
        "top": ["none", "none", "none"]
      },
      "B": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none"],
        "top": ["none", "none", "none"]
      },
      "C": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none"],
        "top": ["none", "none", "none"]
      }
    },

    // 11_final
    "11": {
      "A": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none", "none"]
      },
      "B": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none", "none"]
      },
      "C": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none", "none"]
      }
    },

    // 12_final
    "12": {
      "A": {
        "env": ["none"],
        "clo": ["none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none"]
      },
      "B": {
        "env": ["none"],
        "clo": ["none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none"]
      },
      "C": {
        "env": ["none"],
        "clo": ["none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none"]
      }
    },

    // 13_final
    "13": {
      "A": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none"],
        "top": ["none", "none", "none", "none"]
      },
      "B": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none"],
        "top": ["none", "none", "none", "none"]
      },
      "C": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none"],
        "top": ["none", "none", "none", "none"]
      }
    },

    // 14_final
    "14": {
      "A": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none"],
        "top": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
      },
      "B": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none"],
        "top": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
      },
      "C": {
        "env": ["none"],
        "clo": ["none", "none", "none", "none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none"],
        "top": ["none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none"]
      }
    },

    // 15_final
    "15": {
      "A": {
        "env": ["none"],
        "clo": ["none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none", "none", "none", "none"]
      },
      "B": {
        "env": ["none"],
        "clo": ["none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none", "none", "none", "none"]
      },
      "C": {
        "env": ["none"],
        "clo": ["none", "none"],
        "head": ["#ffeebe"],
        "mouth": ["white"],
        "eyes": ["none", "none", "none"],
        "top": ["none", "none", "none", "none", "none"]
      }
    }
  }


  var sP = [];
  var svgStart = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231 231">';
  var svgEnd = '</svg>';

  // Optimization
  var env = '<path d="M33.83,33.83a115.5,115.5,0,1,1,0,163.34,115.49,115.49,0,0,1,0-163.34Z" style="fill:#01;"/>';
  var head = '<path d="m115.5 51.75a63.75 63.75 0 0 0-10.5 126.63v14.09a115.5 115.5 0 0 0-53.729 19.027 115.5 115.5 0 0 0 128.46 0 115.5 115.5 0 0 0-53.729-19.029v-14.084a63.75 63.75 0 0 0 53.25-62.881 63.75 63.75 0 0 0-63.65-63.75 63.75 63.75 0 0 0-0.09961 0z" style="fill:#000;"/>';
  var str = 'stroke-linecap:round;stroke-linejoin:round;stroke-width:';


  // The below code is automatically injected by running /svg/_build.php script
  // PHP_inject_start


  // 00_final
  sP['00'] = [];
  sP['00']['env'] = env;
  sP['00']['clo'] = '<path d="m141.74 195a114.93 114.93 0 0 1 37.912 16.45l0.07 0.05c-1.17 0.79-2.3601 1.55-3.5601 2.29a115.55 115.55 0 0 1-120.95 0.21q-2.0001-1.23-4.0002-2.54a114.79 114.79 0 0 1 38.002-16.5 116.21 116.21 0 0 1 15.791-2.49v-14.57c1.32 0.22 2.6501 0.39 4.0002 0.51 2.0001 0.19 4.0002 0.28 6.1202 0.29a64.333 64.33 0 0 0 8.8804-0.62c0.67003-0.09 1.3401-0.2 2.0001-0.31v14.69a118 118 0 0 1 15.741 2.54z" style="fill:#fff;"/><path d="m79.292 212a3.4601 3.46 0 0 0 3.8902 5.07 3.3801 3.38 0 0 0 2.1001-1.61 3.4701 3.47 0 0 0-1.2801-4.72 3.4201 3.42 0 0 0-2.6201-0.34 3.5101 3.51 0 0 0-2.0901 1.6zm60.122 0.46a3.4901 3.49 0 0 0 1.21 4.7h0.06a3.4601 3.46 0 0 0 4.7202-1.27l0.07-0.13a3.4601 3.46 0 0 0-1.34-4.6 3.4601 3.46 0 0 0-2.5801-0.32 3.5301 3.53 0 0 0-2.1001 1.61zm9.8004 5.7 5.8602 5.87c-1.39 0.5-2.7901 1-4.2102 1.44l-4.4802-4.47a7.5203 7.52 0 0 1-1.9401 0.81 7.8303 7.83 0 0 1-6.0002-0.79 7.8703 7.87 0 0 1-2.9201-10.69v-0.07a7.8903 7.89 0 0 1 10.77-2.88l0.12 0.07a7.8603 7.86 0 0 1 2.7901 10.62v0.07zm-37.701-2.36-9.5004 9.51v4.9c-1.35-0.16-2.6801-0.33-4.0002-0.54v-6l0.58002-0.58 10.1-10.09a7.8703 7.87 0 1 1 2.8401 2.86zm7.3203-5.91a3.4601 3.46 0 1 0-1.6101 2.1 3.3801 3.38 0 0 0 1.6101-2.1zm-29.741 7.82 3.0901 3.1 0.59002 0.59v7.36c-1.3401-0.26-2.6801-0.55-4.0002-0.87v-4.84l-2.5101-2.51a7.5203 7.52 0 0 1-1.9401 0.81 7.8803 7.88 0 1 1 1.9101-14.43 7.8703 7.87 0 0 1 2.8901 10.75z" style="fill:#1a1a1a;"/>';
  sP['00']['head'] = '';
  sP['00']['mouth'] = '<path d="m94.19 136.84h42.632a3.7801 3.78 0 0 1 3.7802 3.78v3.22a15.231 15.23 0 0 1-15.211 15.16h-19.781a15.251 15.25 0 0 1-15.221-15.16v-3.22a3.8002 3.8 0 0 1 3.7802-3.78z" style="fill:#fff;' + str + '3px;stroke:#1a1a1a;"/><path d="m130.96 136.84v21.16m-30.911-21.16v21.16m10.34-21.16v22.16m10.31-22.2v22.2" style="fill:none;' + str + '3px;stroke:#1a1a1a;"/>';
  sP['00']['eyes'] = '<path d="m83.739 83.92h63.533a19.101 19.1 0 0 1 19.051 19 19.111 19.11 0 0 1-19.051 19h-63.533a19.091 19.09 0 0 1-19.001-19 19.091 19.09 0 0 1 19.001-19z" style="fill:#1a1a1a;"/><path d="m140.23 93.54a9.3804 9.38 0 1 0 9.3804 9.38 9.3804 9.38 0 0 0-9.3804-9.38zm-49.402 0a9.3804 9.38 0 1 0 9.3804 9.38 9.3904 9.39 0 0 0-9.3804-9.38z" style="fill:#e6e7e8;"/><rect x="79.795" y="98.627" width="71.471" height="8.5859" ry="4.2929" style="fill:#b3b3b3;"/>';
  sP['00']['top'] = '<path d="m32.902 67.662c-0.36295 1.7227-6.2342 30.695 5.6133 52.596 4.5843 8.4743 9.0081 13.239 12.75 15.893a67.7 67.7 0 0 1-3.4688-21.35 67.7 67.7 0 0 1 2.332-17.658c-4.4914-2.4646-10.868-6.9012-13.834-13.52-4.1626-9.285-3.6155-14.673-3.3926-15.961zm165.19 0c0.22292 1.2882 0.77005 6.6759-3.3926 15.961-2.9664 6.6183-9.3426 11.055-13.834 13.52a67.7 67.7 0 0 1 2.332 17.658 67.7 67.7 0 0 1-3.4688 21.35c3.7419-2.6532 8.1657-7.4183 12.75-15.893 11.847-21.9 5.9762-50.873 5.6133-52.596z" style="fill:#fff;"/><path d="m115.73 13.191c-7.3787-0.13351-13.509 5.7888-13.631 13.168-0.10128 5.8827 3.4508 10.518 8.0566 12.52 1.061 0.46115 2.1869 0.78009 3.3418 0.95703v8.4291c0.66778-0.02035 1.3358-0.03077 2.0039-0.03125 0.66547-9e-5 1.3309 0.0097 1.9961 0.0293v-8.4115c2.6002-0.38406 5.1586-1.5484 7.3086-3.625 4.2322-4.0878 4.9991-9.8755 3.1582-14.549-1.8407-4.6726-6.3502-8.3834-12.232-8.4863z" style="fill:#fff;"/>';


  // 01_final
  sP['01'] = [];
  sP['01']['env'] = env;
  sP['01']['clo'] = '<path d="M142.73 181.39a27.45 27.45 0 0 0-5.93-13.59c-1 .47-2 .9-3 1.29v14.65a18.35 18.35 0 1 1-36.7 0v-14.53c-1.07-.39-2.11-.82-3.13-1.29a27.4 27.4 0 0 0-5.84 13.47 26.87 26.87 0 0 0-.27 3.83 27.59 27.59 0 0 0 55.18 0 28.42 28.42 0 0 0-.31-3.83Z" style="fill:#b3b3b3;fill-opacity:1"/><path d="M142.73 181.39a28.42 28.42 0 0 1 .27 3.83 27.59 27.59 0 0 1-55.18 0 26.87 26.87 0 0 1 .27-3.83 72.56 72.56 0 0 0-35.42 31 115.55 115.55 0 0 0 125.52.08 72.49 72.49 0 0 0-35.46-31.08Z" style="fill:#1a1a1a;fill-opacity:1"/>';
  sP['01']['head'] = '<path d="M164.44 96.62V73.87q0-2.13-.18-4.23c-2-24.86-21.79-44.39-45.86-44.39h-5.88c-24.07 0-43.83 19.51-45.86 44.39q-.18 2.1-.18 4.23v22.75a12.74 12.74 0 0 0-11.29 12.67v.85a12.77 12.77 0 0 0 11.29 12.68v.52c0 21.19 12.86 39.22 30.79 45.87v14.53a18.41 18.41 0 0 0 18.36 18.35A18.41 18.41 0 0 0 134 183.74v-14.65c17.75-6.74 30.46-24.67 30.46-45.75v-.52a12.77 12.77 0 0 0 11.29-12.68v-.85a12.74 12.74 0 0 0-11.31-12.67Z" style="fill:#e5e5e5;fill-opacity:1"/>';
  sP['01']['mouth'] = '<path d="M98.37 134.43c0 3.7.79 7.73 3.71 10.49 2.14 2 5.43 3.35 10.46 3.35h5c5.34 0 8.72-1.5 10.84-3.73 2.62-2.73 3.31-6.58 3.33-10.11Z" style="fill:#fff;fill-opacity:1"/>';
  sP['01']['eyes'] = '<rect x="77.55" y="81.87" width="32.5" height="12.75" rx="6.01" style="fill:#1a1a1a;fill-opacity:1"/><rect x="122.05" y="81.87" width="30.5" height="12.75" rx="6.01" style="fill:#1a1a1a;fill-opacity:1"/><path d="M100.17 116.81v-12.48a6 6 0 0 0-6-6h-.74a6 6 0 0 0-6 6v12.48a6 6 0 0 0 6 6h.74a6 6 0 0 0 6-6Zm-1.91-5.94a1.79 1.79 0 0 1-3.58 0v-7.06a1.79 1.79 0 0 1 3.58 0Z" style="fill:#1a1a1a;fill-opacity:1"/><path d="M96.47 102a1.79 1.79 0 0 0-1.79 1.79v7.06a1.79 1.79 0 0 0 3.58 0v-7.06a1.79 1.79 0 0 0-1.79-1.79Z" style="fill:#fff;fill-opacity:1"/><path d="M137.67 98.32h-.74a6 6 0 0 0-6 6v12.48a6 6 0 0 0 6 6h.74a6 6 0 0 0 6-6v-12.47a6 6 0 0 0-6-6.01Zm4.09 12.55a1.79 1.79 0 0 1-3.58 0v-7.06a1.79 1.79 0 1 1 3.58 0Z" style="fill:#1a1a1a;fill-opacity:1"/><path d="M140 102a1.79 1.79 0 0 0-1.79 1.79v7.06a1.79 1.79 0 0 0 3.58 0v-7.06A1.79 1.79 0 0 0 140 102Z" style="fill:#fff;fill-opacity:1"/>';
  sP['01']['top'] = '<path d="m199.76 114.9-18-49.16a26 26 0 0 0 7.39-18.19v-.34A26.11 26.11 0 0 0 163 21.11H77.83a24.14 24.14 0 0 0-3.53-.27c-13.67 0-24.75 11.76-24.75 26.26v22l-16.8 45.8c-2.21 6 1.18 12.85 7.62 15.21a12.72 12.72 0 0 0 9.18-.11v2.75c0 6.42 5.53 11.66 12.38 11.66a12.82 12.82 0 0 0 7.78-2.6 50.79 50.79 0 0 1-3.45-18.47v-.52A12.8 12.8 0 0 1 55 110.14v-.85a12.73 12.73 0 0 1 10.84-12.6c.15 0 .3-.06.45-.07l8.06-23.13.05-.13A24.42 24.42 0 0 0 95 61.5a26.08 26.08 0 0 0 22.06 12.15h47.2v23a12.29 12.29 0 0 1 2.65.6 12.74 12.74 0 0 1 8.64 12.07v.85a12.82 12.82 0 0 1-11.29 12.68v.52a51 51 0 0 1-3.44 18.46 12.82 12.82 0 0 0 7.8 2.61c6.86 0 12.38-5.24 12.38-11.66V129a12.63 12.63 0 0 0 11.19 1.15c6.39-2.4 9.81-9.22 7.57-15.25Z" style="fill:#b3b3b3;fill-opacity:1"/>';


  // 02_final
  sP['02'] = [];
  sP['02']['env'] = env;
  sP['02']['clo'] = '<path d="M142.73 181.39a27.45 27.45 0 0 0-5.93-13.59c-1 .47-2 .9-3 1.29v14.65a18.35 18.35 0 1 1-36.7 0v-14.53c-1.07-.39-2.11-.82-3.13-1.29a27.4 27.4 0 0 0-5.84 13.47 26.87 26.87 0 0 0-.27 3.83 27.59 27.59 0 0 0 55.18 0 28.42 28.42 0 0 0-.31-3.83Z" id="path36" style="fill:#b3b3b3;fill-opacity:1"/><path d="M142.73 181.39a28.42 28.42 0 0 1 .27 3.83 27.59 27.59 0 0 1-55.18 0 26.87 26.87 0 0 1 .27-3.83 72.56 72.56 0 0 0-35.42 31 115.55 115.55 0 0 0 125.52.08 72.49 72.49 0 0 0-35.46-31.08Z" id="path34" style="fill:#5a5a5a;fill-opacity:1"/>';
  sP['02']['head'] = '<path d="M164.44 96.62V73.87q0-2.13-.18-4.23c-2-24.86-21.79-44.39-45.86-44.39h-5.88c-24.07 0-43.83 19.51-45.86 44.39q-.18 2.1-.18 4.23v22.75a12.74 12.74 0 0 0-11.29 12.67v.85a12.77 12.77 0 0 0 11.29 12.68v.52c0 21.19 12.86 39.22 30.79 45.87v14.53a18.41 18.41 0 0 0 18.36 18.35A18.41 18.41 0 0 0 134 183.74v-14.65c17.75-6.74 30.46-24.67 30.46-45.75v-.52a12.77 12.77 0 0 0 11.29-12.68v-.85a12.74 12.74 0 0 0-11.31-12.67Z" id="path8" style="fill:#fff;fill-opacity:1"/>';
  sP['02']['mouth'] = '<path d="M127.16 135.83v-.73a6 6 0 0 0-6-6h-12.49a6 6 0 0 0-6 6v.73a6 6 0 0 0 3.93 5.64 6 6 0 0 0-3.93 5.63v.73a6 6 0 0 0 6 6h12.48a6 6 0 0 0 6-6v-.73a6 6 0 0 0-3.93-5.63 6 6 0 0 0 3.94-5.64Z" id="path10" style="fill:#5a5a5a;fill-opacity:1"/>';
  sP['02']['eyes'] = '<path d="M172.22 98.33h-2.93a18.22 18.22 0 0 0-17.67-13.8H136a18.18 18.18 0 0 0-12.9 5.36 18.5 18.5 0 0 0-3.61 5.17h-7.78a18.68 18.68 0 0 0-3.6-5.17 18.2 18.2 0 0 0-12.91-5.36H79.51a18.2 18.2 0 0 0-17.67 13.8h-2.68a3.39 3.39 0 0 0-3.39 3.39v1.17a3.4 3.4 0 0 0 3.39 3.4h2.15a18.25 18.25 0 0 0 18.2 17.47h15.65A18.27 18.27 0 0 0 113 109.5h5.23A18.26 18.26 0 0 0 136 123.76h15.66a18.26 18.26 0 0 0 18.2-17.47h2.4a3.4 3.4 0 0 0 3.39-3.4v-1.17a3.39 3.39 0 0 0-3.43-3.39Zm-104.89 4.43a12.2 12.2 0 0 1 12.18-12.18h2.17l-12.7 21a12.16 12.16 0 0 1-1.65-6.1ZM82 115.87l-1.11 1.83h-1.4a12.13 12.13 0 0 1-2.19-.21l1-1.68 15.27-25.23h1.59a12.24 12.24 0 0 1 2 .19Zm15.32 1.62 1.23-2 6.55-10.85 2.1-3.48a12.35 12.35 0 0 1 .12 1.62v2.76a12.15 12.15 0 0 1-1.67 6.12 12.17 12.17 0 0 1-8.31 5.83ZM136 90.58h2.18l-12.7 21a12.07 12.07 0 0 1-1.66-6.1v-2.76A12.2 12.2 0 0 1 136 90.58Zm15.66 0a12 12 0 0 1 2 .19l-15.16 25.1H136c-.39 0-.78 0-1.16-.06L150 90.58Zm2.18 26.91 1.22-2 8.66-14.33a12.35 12.35 0 0 1 .12 1.62v2.76a12.22 12.22 0 0 1-10 12Z" id="path32" style="fill:#1a1a1a;fill-opacity:1"/><path d="M95.16 84.53a18.2 18.2 0 0 1 12.91 5.36 15.2 15.2 0 0 0-12.91-7.19H79.51a15.18 15.18 0 0 0-12.91 7.19 18.18 18.18 0 0 1 12.91-5.36Z" id="path16" style="fill:#fff;fill-opacity:1"/><path d="M79.51 90.58a12.2 12.2 0 0 0-12.18 12.18v2.76a12.16 12.16 0 0 0 1.65 6.1l12.7-21Z" id="path18" style="fill:#fff;fill-opacity:1"/><path d="m93.57 90.58-15.23 25.23-1 1.68a12.13 12.13 0 0 0 2.19.21h1.4l1.07-1.83 15.16-25.1a12.24 12.24 0 0 0-2-.19Z" id="path20" style="fill:#fff;fill-opacity:1"/><path d="m105.12 104.62-6.55 10.85-1.23 2a12.17 12.17 0 0 0 8.33-5.85 12.15 12.15 0 0 0 1.67-6.12v-2.76a12.35 12.35 0 0 0-.12-1.62Z" id="path22" style="fill:#fff;fill-opacity:1"/><path d="M151.62 84.53a18.18 18.18 0 0 1 12.9 5.36 15.17 15.17 0 0 0-12.9-7.19H136a15.17 15.17 0 0 0-12.9 7.19 18.18 18.18 0 0 1 12.9-5.36Z" id="path24" style="fill:#fff;fill-opacity:1"/><path d="m155 115.47-1.22 2a12.22 12.22 0 0 0 10-12v-2.76a12.35 12.35 0 0 0-.12-1.62Z" id="path26" style="fill:#fff;fill-opacity:1"/><path d="M136 90.58a12.2 12.2 0 0 0-12.18 12.18v2.76a12.07 12.07 0 0 0 1.66 6.1l12.7-21Z" id="path28" style="fill:#fff;fill-opacity:1"/><path d="m150 90.58-15.2 25.23c.38 0 .77.06 1.16.06h2.51l15.16-25.1a12 12 0 0 0-2-.19Z" id="path30" style="fill:#fff;fill-opacity:1"/>';
  sP['02']['top'] = '<path d="M178.24 67.73a63.34 63.34 0 0 0-125.94 0 46.58 46.58 0 1 0 25.58 87.57 50 50 0 0 1-11.4-32v-.52a12.77 12.77 0 0 1-11.29-12.68v-.85a12.74 12.74 0 0 1 11.29-12.63v-24.1h97.9v24.1a12.74 12.74 0 0 1 11.29 12.67v.85a12.77 12.77 0 0 1-11.29 12.68v.52a50 50 0 0 1-11.37 32 46.59 46.59 0 1 0 25.17-87.58Z" id="path12" style="fill:#c5c5c5;fill-opacity:1"/><path id="polygon14" style="fill:#7c7c7c;fill-opacity:1" d="m160.28 20.19 3.44 10.88 8.41-7.71-2.46 11.15 11.15-2.46-7.71 8.42 10.88 3.44-10.88 3.43 7.71 8.42-11.15-2.46 2.46 11.14-8.41-7.7-3.44 10.88-3.44-10.88-8.42 7.7 2.46-11.14-11.14 2.46 7.7-8.42-10.88-3.43 10.88-3.44-7.7-8.42 11.14 2.46-2.46-11.15 8.42 7.71 3.44-10.88z"/>';


  // 03_final
  sP['03'] = [];
  sP['03']['env'] = env;
  sP['03']['clo'] = '<path d="M142.73 181.39a27.45 27.45 0 0 0-5.93-13.59c-1 .47-2 .9-3 1.29v14.65a18.35 18.35 0 1 1-36.7 0v-14.53c-1.07-.39-2.11-.82-3.13-1.29a27.4 27.4 0 0 0-5.84 13.47 26.87 26.87 0 0 0-.27 3.83 27.59 27.59 0 0 0 55.18 0 28.42 28.42 0 0 0-.31-3.83Z" id="path10" style="fill:#fff;fill-opacity:1"/><path d="M142.73 181.39a28.42 28.42 0 0 1 .27 3.83 27.59 27.59 0 0 1-55.18 0 26.87 26.87 0 0 1 .27-3.83 72.56 72.56 0 0 0-35.42 31 115.55 115.55 0 0 0 125.52.08 72.49 72.49 0 0 0-35.46-31.08Z" id="path8" style="fill:#c6c6c6;fill-opacity:1"/>';
  sP['03']['head'] = '<path d="M164.44 96.62V73.87q0-2.13-.18-4.23c-2-24.86-21.79-44.39-45.86-44.39h-5.88c-24.07 0-43.83 19.51-45.86 44.39q-.18 2.1-.18 4.23v22.75a12.74 12.74 0 0 0-11.29 12.67v.85a12.77 12.77 0 0 0 11.29 12.68v.52c0 21.19 12.86 39.22 30.79 45.87v14.53a18.41 18.41 0 0 0 18.36 18.35A18.41 18.41 0 0 0 134 183.74v-14.65c17.75-6.74 30.46-24.67 30.46-45.75v-.52a12.77 12.77 0 0 0 11.29-12.68v-.85a12.74 12.74 0 0 0-11.31-12.67Z" id="path12" style="fill:#e5e5e5;fill-opacity:1"/>';
  sP['03']['mouth'] = '<path d="M98.37 134.43c0 6.4 2.26 13.84 14.17 13.84h5c11.91 0 14.14-7.44 14.17-13.84Z" id="path16" style="fill:#fff;fill-opacity:1"/><path d="m133.18 131.78-11.43-5a6 6 0 0 0-6.84 1.45 6 6 0 0 0-6.84-1.45l-11.44 5a6 6 0 0 0-3.09 7.92l.3.67a6 6 0 0 0 7.91 3.1l11.43-5a5.75 5.75 0 0 0 1.73-1.15 5.75 5.75 0 0 0 1.73 1.15l11.43 5a6 6 0 0 0 7.91-3.1l.3-.67a6 6 0 0 0-3.1-7.92z" id="path30" style="fill:#1a1a1a;fill-opacity:1"/>';
  sP['03']['eyes'] = '<rect x="77.55" y="81.87" width="32.5" height="12.75" rx="6.01" id="rect22" style="fill:#1a1a1a;fill-opacity:1"/><rect x="122.05" y="81.87" width="30.5" height="12.75" rx="6.01" id="rect28" style="fill:#1a1a1a;fill-opacity:1"/><rect x="87.42" y="98.32" width="12.75" height="24.5" rx="6.01" id="rect18" style="fill:#1a1a1a;fill-opacity:1"/><rect x="94.68" y="102.02" width="3.58" height="10.64" rx="1.79" id="rect20" style="fill:#fff;fill-opacity:1"/><rect x="130.92" y="98.32" width="12.75" height="24.5" rx="6.01" id="rect24" style="fill:#1a1a1a;fill-opacity:1"/><rect x="138.18" y="102.02" width="3.58" height="10.64" rx="1.79" id="rect26" style="fill:#fff;fill-opacity:1"/>';
  sP['03']['top'] = '<path d="M185.67 70.52a25.35 25.35 0 0 0-.28-3.82c-1.14-17.25-7.46-28.12-17.51-38.06-11.45-11.32-35.23-17.36-52.61-17.36s-23.49 2.25-39.56 18.33c-10 10-15.78 13.14-19.15 15.61a26.26 26.26 0 0 0-6.69 46.52A26.25 26.25 0 0 0 67.81 135a51.22 51.22 0 0 1-1.33-11.64v-.52a12.77 12.77 0 0 1-11.29-12.68v-.85a12.74 12.74 0 0 1 11.29-12.69v-24.1h97.9v24.1a12.74 12.74 0 0 1 11.29 12.67v.85a12.77 12.77 0 0 1-11.29 12.68v.52a51.1 51.1 0 0 1-1.27 11.36A26.24 26.24 0 0 0 177.08 90a26.16 26.16 0 0 0 8.51-17.43v-.08c.05-.69.08-1.32.08-1.97Z" id="path32" style="fill:#1a1a1a;fill-opacity:1"/>';


  // 04_final
  sP['04'] = [];
  sP['04']['env'] = env;
  sP['04']['clo'] = '<path d="M142.73 181.39a27.45 27.45 0 0 0-5.93-13.59c-1 .47-2 .9-3 1.29v14.65a18.35 18.35 0 1 1-36.7 0v-14.53c-1.07-.39-2.11-.82-3.13-1.29a27.4 27.4 0 0 0-5.84 13.47 26.87 26.87 0 0 0-.27 3.83 27.59 27.59 0 0 0 55.18 0 28.42 28.42 0 0 0-.31-3.83Z" id="path10" style="fill:#e3e3e3;fill-opacity:1"/><path d="M142.73 181.39a28.42 28.42 0 0 1 .27 3.83 27.59 27.59 0 0 1-55.18 0 26.87 26.87 0 0 1 .27-3.83 72.56 72.56 0 0 0-35.42 31 115.55 115.55 0 0 0 125.52.08 72.49 72.49 0 0 0-35.46-31.08Z" id="path8" style="fill:#646464;fill-opacity:1"/>';
  sP['04']['head'] = '<path d="M164.44 96.62V73.87q0-2.13-.18-4.23c-2-24.86-21.79-44.39-45.86-44.39h-5.88c-24.07 0-43.83 19.51-45.86 44.39q-.18 2.1-.18 4.23v22.75a12.74 12.74 0 0 0-11.29 12.67v.85a12.77 12.77 0 0 0 11.29 12.68v.52c0 21.19 12.86 39.22 30.79 45.87v14.53a18.41 18.41 0 0 0 18.36 18.35A18.41 18.41 0 0 0 134 183.74v-14.65c17.75-6.74 30.46-24.67 30.46-45.75v-.52a12.77 12.77 0 0 0 11.29-12.68v-.85a12.74 12.74 0 0 0-11.31-12.67Z" id="path12" style="fill:#d3d3d3;fill-opacity:1"/>';
  sP['04']['mouth'] = '<path d="M126.7 135.83v-.73a6 6 0 0 0-6-6h-12.49a6 6 0 0 0-6 6v.73a6 6 0 0 0 3.93 5.64 6 6 0 0 0-3.93 5.63v.73a6 6 0 0 0 6 6h12.48a6 6 0 0 0 6-6v-.73a6 6 0 0 0-3.93-5.63 6 6 0 0 0 3.94-5.64Z" id="path22" style="fill:#5a5a5a;fill-opacity:1"/><circle cx="141.55" cy="135.8" r="6.8" id="circle34" style="fill:#b8b8b8;fill-opacity:1"/>';
  sP['04']['eyes'] = '<rect x="77.31" y="81.87" width="32.5" height="12.75" rx="6.01" id="rect24" style="fill:#1a1a1a;fill-opacity:1"/><rect x="121.81" y="81.87" width="30.5" height="12.75" rx="6.01" id="rect32" style="fill:#1a1a1a;fill-opacity:1"/><path d="M93.92 98.32H81.64a1.79 1.79 0 1 0 0 3.57h6a5.93 5.93 0 0 0-.51 2.42v12.48a6 6 0 0 0 6 6h.73a6 6 0 0 0 6-6v-12.46a6 6 0 0 0-5.94-6.01Z" id="path30" style="fill:#1a1a1a;fill-opacity:1"/><rect x="94.44" y="102.02" width="3.58" height="10.64" rx="1.79" id="rect36" style="fill:#fff;fill-opacity:1"/><path d="M149.11 98.34h-12.42a6 6 0 0 0-6 6v12.48a6 6 0 0 0 6 6h.73a6 6 0 0 0 6-6v-12.49a5.93 5.93 0 0 0-.51-2.42h6.19a1.79 1.79 0 1 0 0-3.57Z" id="path26" style="fill:#1a1a1a;fill-opacity:1"/><rect x="137.94" y="102.02" width="3.58" height="10.64" rx="1.79" id="rect28" style="fill:#fff;fill-opacity:1"/>';
  sP['04']['top'] = '<path d="M198.29 157.4a39.2 39.2 0 0 0-7.55-55.83 29.24 29.24 0 0 0-7.62-42.42 21.25 21.25 0 0 0 4.51-13.08 21.51 21.51 0 0 0-21.46-21.46H64.48A21.52 21.52 0 0 0 43 46.07a21.31 21.31 0 0 0 4.51 13.08 29.26 29.26 0 0 0-7.62 42.42 39.22 39.22 0 0 0-7.55 55.83 53.69 53.69 0 0 0-16 18 116.06 116.06 0 0 0 36.07 37.09 72.54 72.54 0 0 1 35.46-31.12 27.61 27.61 0 0 1 5.87-13.52c-16.23-7.51-27.58-24.61-27.58-44.53v-.52a12.77 12.77 0 0 1-11.29-12.68v-.85a12.74 12.74 0 0 1 11.34-12.65v-.53l1-28.57h96.27l1 28.57v.53a12.74 12.74 0 0 1 11.29 12.67v.85a12.77 12.77 0 0 1-11.29 12.68v.52c0 19.92-11.35 37-27.58 44.53a27.52 27.52 0 0 1 5.87 13.52 72.49 72.49 0 0 1 35.46 31.12 116.06 116.06 0 0 0 36.07-37.09 53.59 53.59 0 0 0-16.01-18.02Z" id="path38" style="fill:#1a1a1a;fill-opacity:1"/>';


  // 05_final
  sP['05'] = [];
  sP['05']['env'] = env;
  sP['05']['clo'] = '<path d="M142.73 181.39a27.45 27.45 0 0 0-5.93-13.59c-1 .47-2 .9-3 1.29v14.65a18.35 18.35 0 1 1-36.7 0v-14.53c-1.07-.39-2.11-.82-3.13-1.29a27.4 27.4 0 0 0-5.84 13.47 26.87 26.87 0 0 0-.27 3.83 27.59 27.59 0 0 0 55.18 0 28.42 28.42 0 0 0-.31-3.83Z" id="path10" style="fill:#919191;fill-opacity:1"/><path d="M142.73 181.39a28.42 28.42 0 0 1 .27 3.83 27.59 27.59 0 0 1-55.18 0 26.87 26.87 0 0 1 .27-3.83 72.56 72.56 0 0 0-35.42 31 115.55 115.55 0 0 0 125.52.08 72.49 72.49 0 0 0-35.46-31.08Z" id="path8" style="fill:#353535;fill-opacity:1"/>';
  sP['05']['head'] = '<path d="M164.44 96.62V73.87q0-2.13-.18-4.23c-2-24.86-21.79-44.39-45.86-44.39h-5.88c-24.07 0-43.83 19.51-45.86 44.39q-.18 2.1-.18 4.23v22.75a12.74 12.74 0 0 0-11.29 12.67v.85a12.77 12.77 0 0 0 11.29 12.68v.52c0 21.19 12.86 39.22 30.79 45.87v14.53a18.41 18.41 0 0 0 18.36 18.35A18.41 18.41 0 0 0 134 183.74v-14.65c17.75-6.74 30.46-24.67 30.46-45.75v-.52a12.77 12.77 0 0 0 11.29-12.68v-.85a12.74 12.74 0 0 0-11.31-12.67Z" id="path12" style="fill:#efefef;fill-opacity:1"/>';
  sP['05']['mouth'] = '<rect x="140.29" y="129.01" width="16.02" height="8.34" rx="3.93" id="rect14" style="fill:#9e9e9e;fill-opacity:1"/><path d="M98.37 134.43c0 6.4 2.26 13.84 14.17 13.84h5c11.91 0 14.14-7.44 14.17-13.84Z" id="path16" style="fill:#fff;fill-opacity:1"/>';
  sP['05']['eyes'] = '<rect x="77.55" y="81.87" width="32.5" height="12.75" rx="6.01" id="rect22" style="fill:#5e5e5e;fill-opacity:1"/><rect x="122.05" y="81.87" width="30.5" height="12.75" rx="6.01" id="rect28" style="fill:#5e5e5e;fill-opacity:1"/><rect x="87.42" y="98.32" width="12.75" height="24.5" rx="6.01" id="rect18" style="fill:#1a1a1a;fill-opacity:1"/><rect x="94.68" y="102.02" width="3.58" height="10.64" rx="1.79" id="rect20" style="fill:#fff;fill-opacity:1"/><rect x="130.92" y="98.32" width="12.75" height="24.5" rx="6.01" id="rect24" style="fill:#1a1a1a;fill-opacity:1"/><rect x="138.18" y="102.02" width="3.58" height="10.64" rx="1.79" id="rect26" style="fill:#fff;fill-opacity:1"/>';
  sP['05']['top'] = '<path d="M203.41 79.94a36.89 36.89 0 0 0-15-29.75 38.85 38.85 0 0 0-1.22-25.27 115.49 115.49 0 0 0-143.32 0 38.85 38.85 0 0 0-1.22 25.27 37 37 0 0 0 1 60.19A29.26 29.26 0 0 0 78 155.45a50 50 0 0 1-11.49-32.11v-.52a12.77 12.77 0 0 1-11.29-12.68v-.85a12.74 12.74 0 0 1 11.26-12.67V75.87A38.82 38.82 0 0 0 80 78.3c1 0 1.93 0 2.89-.11.5 0 1-.1 1.49-.16s.89-.08 1.33-.15c.67-.1 1.34-.23 2-.37l.73-.13c.78-.18 1.55-.38 2.32-.6.11 0 .23-.06.34-.09q1.26-.39 2.49-.84h.09a39 39 0 0 0 8.75-4.66l.51-.36c.58-.42 1.14-.86 1.69-1.32l.49-.4c.71-.6 1.39-1.22 2-1.87.11-.09.21-.19.31-.29a38 38 0 0 0 3-3.36c.23-.28.47-.56.69-.86a36.73 36.73 0 0 0 2.57-3.92l.09-.15c.58-1 1.14-2.07 1.63-3.15.49 1.08 1 2.12 1.63 3.15l.09.15a36.73 36.73 0 0 0 2.57 3.92c.22.3.46.58.69.86a38 38 0 0 0 3 3.36c.1.1.2.2.31.29.66.65 1.34 1.27 2 1.87l.49.4c.58.48 1.16.93 1.77 1.37l.43.31a38.76 38.76 0 0 0 8.74 4.66h.09q1.23.45 2.49.84l.35.09q1.14.33 2.31.6l.75.14c.66.13 1.32.26 2 .36.44.07.89.1 1.33.15s1 .13 1.49.16c1 .07 1.92.11 2.89.11a38.85 38.85 0 0 0 13.48-2.4v20.72a12.74 12.74 0 0 1 11.29 12.67v.85a12.77 12.77 0 0 1-11.29 12.68v.52A50 50 0 0 1 153 155.43a29.26 29.26 0 0 0 34.45-45.05 36.92 36.92 0 0 0 15.96-30.44Z" id="path42" style="fill:#1a1a1a;fill-opacity:1"/>';


  // 06_final
  sP['06'] = [];
  sP['06']['env'] = env;
  sP['06']['clo'] = '<path d="M142.73 181.39a27.45 27.45 0 0 0-5.93-13.59c-1 .47-2 .9-3 1.29v14.65a18.35 18.35 0 1 1-36.7 0v-14.53c-1.07-.39-2.11-.82-3.13-1.29a27.4 27.4 0 0 0-5.84 13.47 26.87 26.87 0 0 0-.27 3.83 27.59 27.59 0 0 0 55.18 0 28.42 28.42 0 0 0-.31-3.83Z" id="path12" style="fill:silver;fill-opacity:1"/><path d="M142.73 181.39a28.42 28.42 0 0 1 .27 3.83 27.59 27.59 0 0 1-55.18 0 26.87 26.87 0 0 1 .27-3.83 72.56 72.56 0 0 0-35.42 31 115.55 115.55 0 0 0 125.52.08 72.49 72.49 0 0 0-35.46-31.08Z" id="path10" style="fill:#949494;fill-opacity:1"/>';
  sP['06']['head'] = '<path d="M164.25 96.62V73.87q0-2.13-.18-4.23c-2-24.86-21.78-44.39-45.86-44.39h-5.88c-24.07 0-43.83 19.51-45.86 44.39q-.18 2.1-.18 4.23v22.75A12.74 12.74 0 0 0 55 109.29v.85a12.77 12.77 0 0 0 11.29 12.68v.52c0 21.19 12.86 39.22 30.79 45.87v14.53a18.41 18.41 0 0 0 18.36 18.35 18.41 18.41 0 0 0 18.35-18.35v-14.65c17.75-6.74 30.46-24.67 30.46-45.75v-.52a12.77 12.77 0 0 0 11.29-12.68v-.85a12.73 12.73 0 0 0-11.29-12.67Z" id="path8" style="fill:#ddd;fill-opacity:1"/>';
  sP['06']['mouth'] = '<rect x="140.29" y="129.01" width="16.02" height="8.34" rx="3.93" id="rect32" style="fill:#b8b8b8;fill-opacity:1"/><path d="M98.37 134.43c0 6.4 2.26 13.84 14.17 13.84h5c11.91 0 14.14-7.44 14.17-13.84Z" id="path14" style="fill:#fff;fill-opacity:1"/>';
  sP['06']['eyes'] = '<rect x="77.55" y="81.87" width="32.5" height="12.75" rx="6.01" id="rect20" style="fill:#1a1a1a;fill-opacity:1"/><rect x="122.05" y="81.87" width="30.5" height="12.75" rx="6.01" id="rect26" style="fill:#1a1a1a;fill-opacity:1"/><rect x="87.42" y="98.32" width="12.75" height="24.5" rx="6.01" id="rect16" style="fill:#1a1a1a;fill-opacity:1"/><rect x="94.68" y="102.02" width="3.58" height="10.64" rx="1.79" id="rect18" style="fill:#fff;fill-opacity:1"/><rect x="130.92" y="98.32" width="12.75" height="24.5" rx="6.01" id="rect22" style="fill:#1a1a1a;fill-opacity:1"/><rect x="138.18" y="102.02" width="3.58" height="10.64" rx="1.79" id="rect24" style="fill:#fff;fill-opacity:1"/>';
  sP['06']['top'] = '<path d="M163 21.11H77.83a24.14 24.14 0 0 0-3.53-.27c-13.67 0-24.75 11.76-24.75 26.26v19.66a30.14 30.14 0 0 0 0 51.39v14.6c0 6.42 5.53 11.66 12.38 11.66a12.8 12.8 0 0 0 7.8-2.61 50.94 50.94 0 0 1-3.44-18.46v-.52a12.26 12.26 0 0 1-1.37-.25A12.75 12.75 0 0 1 55 110.14v-.85a12.74 12.74 0 0 1 11.29-12.67V71.96a23.48 23.48 0 0 0 8 1.4A24.4 24.4 0 0 0 95 61.5a26.08 26.08 0 0 0 22.06 12.15h47.23v23a12.73 12.73 0 0 1 11.29 12.67v.85a12.77 12.77 0 0 1-11.29 12.68v.52a50.72 50.72 0 0 1-3.55 18.74 12.84 12.84 0 0 0 7.4 2.33c6.82 0 12.38-5.21 12.38-11.66V66.94a26 26 0 0 0 8.64-19.39v-.34A26.11 26.11 0 0 0 163 21.11Z" id="path30" style="fill:#434343;fill-opacity:1"/>';


  // 07_final
  sP['07'] = [];
  sP['07']['env'] = env;
  sP['07']['clo'] = '';
  sP['07']['head'] = '';
  sP['07']['mouth'] = '';
  sP['07']['eyes'] = '';
  sP['07']['top'] = '';


  // 08_final
  sP['08'] = [];
  sP['08']['env'] = env;
  sP['08']['clo'] = '';
  sP['08']['head'] = '';
  sP['08']['mouth'] = '';
  sP['08']['eyes'] = '';
  sP['08']['top'] = '';


  // 09_final
  sP['09'] = [];
  sP['09']['env'] = env;
  sP['09']['clo'] = '';
  sP['09']['head'] = '';
  sP['09']['mouth'] = '';
  sP['09']['eyes'] = '';
  sP['09']['top'] = '';


  // 10_final
  sP['10'] = [];
  sP['10']['env'] = env;
  sP['10']['clo'] = '';
  sP['10']['head'] = '';
  sP['10']['mouth'] = '';
  sP['10']['eyes'] = '';
  sP['10']['top'] = '';


  // 11_final
  sP['11'] = [];
  sP['11']['env'] = env;
  sP['11']['clo'] = '';
  sP['11']['head'] = '';
  sP['11']['mouth'] = '';
  sP['11']['eyes'] = '';
  sP['11']['top'] = '';


  // 12_final
  sP['12'] = [];
  sP['12']['env'] = env;
  sP['12']['clo'] = '';
  sP['12']['head'] = '';
  sP['12']['mouth'] = '';
  sP['12']['eyes'] = '';
  sP['12']['top'] = '';


  // 13_final
  sP['13'] = [];
  sP['13']['env'] = env;
  sP['13']['clo'] = '';
  sP['13']['head'] = '';
  sP['13']['mouth'] = '';
  sP['13']['eyes'] = '';
  sP['13']['top'] = '';


  // 14_final
  sP['14'] = [];
  sP['14']['env'] = env;
  sP['14']['clo'] = '';
  sP['14']['head'] = '';
  sP['14']['mouth'] = '';
  sP['14']['eyes'] = '';
  sP['14']['top'] = '';


  // 15_final
  sP['15'] = [];
  sP['15']['env'] = env;
  sP['15']['clo'] = '';
  sP['15']['head'] = '';
  sP['15']['mouth'] = '';
  sP['15']['eyes'] = '';
  sP['15']['top'] = '';


  // PHP_inject_end


  /*
  CryptoJS v3.1.2
  code.google.com/p/crypto-js
  (c) 2009-2013 by Jeff Mott. All rights reserved.
  code.google.com/p/crypto-js/wiki/License
  */
  var CryptoJS = CryptoJS || function (h, s) {
    var f = {}, t = f.lib = {}, g = function () { }, j = t.Base = { extend: function (a) { g.prototype = this; var c = new g; a && c.mixIn(a); c.hasOwnProperty("init") || (c.init = function () { c.$super.init.apply(this, arguments) }); c.init.prototype = c; c.$super = this; return c }, create: function () { var a = this.extend(); a.init.apply(a, arguments); return a }, init: function () { }, mixIn: function (a) { for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]); a.hasOwnProperty("toString") && (this.toString = a.toString) }, clone: function () { return this.init.prototype.extend(this) } },
      q = t.WordArray = j.extend({
        init: function (a, c) { a = this.words = a || []; this.sigBytes = c != s ? c : 4 * a.length }, toString: function (a) { return (a || u).stringify(this) }, concat: function (a) { var c = this.words, d = a.words, b = this.sigBytes; a = a.sigBytes; this.clamp(); if (b % 4) for (var e = 0; e < a; e++)c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4); else if (65535 < d.length) for (e = 0; e < a; e += 4)c[b + e >>> 2] = d[e >>> 2]; else c.push.apply(c, d); this.sigBytes += a; return this }, clamp: function () {
          var a = this.words, c = this.sigBytes; a[c >>> 2] &= 4294967295 <<
            32 - 8 * (c % 4); a.length = h.ceil(c / 4)
        }, clone: function () { var a = j.clone.call(this); a.words = this.words.slice(0); return a }, random: function (a) { for (var c = [], d = 0; d < a; d += 4)c.push(4294967296 * h.random() | 0); return new q.init(c, a) }
      }), v = f.enc = {}, u = v.Hex = {
        stringify: function (a) { var c = a.words; a = a.sigBytes; for (var d = [], b = 0; b < a; b++) { var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255; d.push((e >>> 4).toString(16)); d.push((e & 15).toString(16)) } return d.join("") }, parse: function (a) {
          for (var c = a.length, d = [], b = 0; b < c; b += 2)d[b >>> 3] |= parseInt(a.substr(b,
            2), 16) << 24 - 4 * (b % 8); return new q.init(d, c / 2)
        }
      }, k = v.Latin1 = { stringify: function (a) { var c = a.words; a = a.sigBytes; for (var d = [], b = 0; b < a; b++)d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255)); return d.join("") }, parse: function (a) { for (var c = a.length, d = [], b = 0; b < c; b++)d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4); return new q.init(d, c) } }, l = v.Utf8 = { stringify: function (a) { try { return decodeURIComponent(escape(k.stringify(a))) } catch (c) { throw Error("Malformed UTF-8 data"); } }, parse: function (a) { return k.parse(unescape(encodeURIComponent(a))) } },
      x = t.BufferedBlockAlgorithm = j.extend({
        reset: function () { this._data = new q.init; this._nDataBytes = 0 }, _append: function (a) { "string" == typeof a && (a = l.parse(a)); this._data.concat(a); this._nDataBytes += a.sigBytes }, _process: function (a) { var c = this._data, d = c.words, b = c.sigBytes, e = this.blockSize, f = b / (4 * e), f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0); a = f * e; b = h.min(4 * a, b); if (a) { for (var m = 0; m < a; m += e)this._doProcessBlock(d, m); m = d.splice(0, a); c.sigBytes -= b } return new q.init(m, b) }, clone: function () {
          var a = j.clone.call(this);
          a._data = this._data.clone(); return a
        }, _minBufferSize: 0
      }); t.Hasher = x.extend({
        cfg: j.extend(), init: function (a) { this.cfg = this.cfg.extend(a); this.reset() }, reset: function () { x.reset.call(this); this._doReset() }, update: function (a) { this._append(a); this._process(); return this }, finalize: function (a) { a && this._append(a); return this._doFinalize() }, blockSize: 16, _createHelper: function (a) { return function (c, d) { return (new a.init(d)).finalize(c) } }, _createHmacHelper: function (a) {
          return function (c, d) {
            return (new w.HMAC.init(a,
              d)).finalize(c)
          }
        }
      }); var w = f.algo = {}; return f
  }(Math);
  (function (h) {
    for (var s = CryptoJS, f = s.lib, t = f.WordArray, g = f.Hasher, f = s.algo, j = [], q = [], v = function (a) { return 4294967296 * (a - (a | 0)) | 0 }, u = 2, k = 0; 64 > k;) { var l; a: { l = u; for (var x = h.sqrt(l), w = 2; w <= x; w++)if (!(l % w)) { l = !1; break a } l = !0 } l && (8 > k && (j[k] = v(h.pow(u, 0.5))), q[k] = v(h.pow(u, 1 / 3)), k++); u++ } var a = [], f = f.SHA256 = g.extend({
      _doReset: function () { this._hash = new t.init(j.slice(0)) }, _doProcessBlock: function (c, d) {
        for (var b = this._hash.words, e = b[0], f = b[1], m = b[2], h = b[3], p = b[4], j = b[5], k = b[6], l = b[7], n = 0; 64 > n; n++) {
          if (16 > n) a[n] =
            c[d + n] | 0; else { var r = a[n - 15], g = a[n - 2]; a[n] = ((r << 25 | r >>> 7) ^ (r << 14 | r >>> 18) ^ r >>> 3) + a[n - 7] + ((g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10) + a[n - 16] } r = l + ((p << 26 | p >>> 6) ^ (p << 21 | p >>> 11) ^ (p << 7 | p >>> 25)) + (p & j ^ ~p & k) + q[n] + a[n]; g = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & m ^ f & m); l = k; k = j; j = p; p = h + r | 0; h = m; m = f; f = e; e = r + g | 0
        } b[0] = b[0] + e | 0; b[1] = b[1] + f | 0; b[2] = b[2] + m | 0; b[3] = b[3] + h | 0; b[4] = b[4] + p | 0; b[5] = b[5] + j | 0; b[6] = b[6] + k | 0; b[7] = b[7] + l | 0
      }, _doFinalize: function () {
        var a = this._data, d = a.words, b = 8 * this._nDataBytes, e = 8 * a.sigBytes;
        d[e >>> 5] |= 128 << 24 - e % 32; d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296); d[(e + 64 >>> 9 << 4) + 15] = b; a.sigBytes = 4 * d.length; this._process(); return this._hash
      }, clone: function () { var a = g.clone.call(this); a._hash = this._hash.clone(); return a }
    }); s.SHA256 = g._createHelper(f); s.HmacSHA256 = g._createHmacHelper(f)
  })(Math);

  var hash = '';
  if (string.length == 0) return hash;

  var sha256Hash = CryptoJS.SHA256(string);
  var sha256Numbers = sha256Hash.toString().replace(/\D/g, '');

  hash = sha256Numbers.substring(0, 12);


  // parts
  var p = [];

  // Get parts (range 0-47)
  p['env'] = hash[0] + '' + hash[1];
  p['env'] = Math.round((47 / 100) * p['env']) + '';

  // Freeze a single part
  // e.g. '0' = 01A; '16' = 01B; '32' = 01C; '1' = 02A; '17' = 02B;
  // p['env'] = '16';

  p['clo'] = hash[2] + '' + hash[3];
  p['clo'] = Math.round((47 / 100) * p['clo']) + '';

  // p['clo'] = '16';

  p['head'] = hash[4] + '' + hash[5];
  p['head'] = Math.round((47 / 100) * p['head']) + '';

  // p['head'] = '01';

  p['mouth'] = hash[6] + '' + hash[7];
  p['mouth'] = Math.round((47 / 100) * p['mouth']) + '';

  // p['mouth'] = '16';

  p['eyes'] = hash[8] + '' + hash[9];
  p['eyes'] = Math.round((47 / 100) * p['eyes']) + '';

  // p['eyes'] = '16';

  p['top'] = hash[10] + '' + hash[11];
  p['top'] = Math.round((47 / 100) * p['top']) + '';

  // p['top'] = '25';


  // Get parts (range 0-15) + define themes
  for (var part in p) {
    var nr = p[part];

    if (nr > 31) {
      nr = nr - 32 + '';
      if (nr.length == 1) nr = '0' + nr;
      p[part] = nr + 'C';
    }
    else if (nr > 15) {
      nr = nr - 16 + '';
      if (nr.length == 1) nr = '0' + nr;
      p[part] = nr + 'B';
    } else {
      if ((nr + '').length == 1) p[part] = '0' + nr + 'A';
      else p[part] = nr + 'A';
    }
  }


  // Get the SVG code for each part
  var final = [];

  for (var part in p) {
    var partV = p[part].substring(0, 2);
    var theme = p[part].substring(2, 3);
    // console.log(part, partV, theme);

    if (typeof (ver) != 'undefined') {
      partV = ver.part;
      theme = ver.theme;
    }

    // Freeze a single base version
    // partV = '00'; theme = 'A';

    final[part] = getFinal(part, partV, theme);
    // console.log(final[part]);
  }

  function getFinal(part, partV, theme) {
    // console.log(part, partV, theme)
    var colors = themes[partV][theme][part];
    var svgString = sP[partV][part];
    // console.log(colors, svgString);

    var regex = /#(.*?);/g;
    var result = svgString.match(regex);

    var resultFinal = svgString;

    if (result != null) {
      for (var i = 0; i < result.length; i++) {
        // console.log('replace', result[i], colors[i])
        resultFinal = resultFinal.replace(result[i], colors[i] + ';');
      }
    }

    // console.log(resultFinal)
    return resultFinal;
  }

  // Without 'env'
  if (sansEnv) {
    final['env'] = '';
  }

  return (svgStart + final['env'] + final['head'] + final['clo'] + final['top'] + final['eyes'] + final['mouth'] + svgEnd);

}
