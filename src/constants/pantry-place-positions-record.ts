interface IPantryPlacePosition {
  top: number
  left: number
  imageType: number
}

export const PantryPlacePositionsRecord: Record<number, IPantryPlacePosition> = {
  // 1st floor
  1: { top: 11, left: 0.15, imageType: 0 },
  2: { top: 7.1, left: 7.1, imageType: 1 },
  3: { top: 7.1, left: 9.3, imageType: 2 },

  // 2nd floor
  4: { top: 11, left: 0.15, imageType: 0 },
  5: { top: 7.1, left: 7.1, imageType: 1 },
  6: { top: 7.1, left: 9.3, imageType: 2 },
  7: { top: 7.6, left: 44.3, imageType: 3 },
  8: { top: 7.6, left: 46.1, imageType: 4 },
  9: { top: 7.6, left: 47.9, imageType: 3 },
  10: { top: 7.6, left: 49.7, imageType: 3 },
  11: { top: 7.6, left: 51.4, imageType: 5 },

  // 3rd floor
  14: { top: 7.1, left: 9.3, imageType: 2 },
  39: { top: 7.1, left: 7.1, imageType: 1 },
  40: { top: 11, left: 0.15, imageType: 0 },
  53: { top: 17.5, left: 0.15, imageType: 11 },
  54: { top: 19.45, left: 0.15, imageType: 11 },
  55: { top: 21.4, left: 0.15, imageType: 11 },
  56: { top: 21.75, left: 3.75, imageType: 54 },
  57: { top: 23.35, left: 0.15, imageType: 11 },
  58: { top: 23.65, left: 3.75, imageType: 54 },
  59: { top: 25.3, left: 0.15, imageType: 12 },
  60: { top: 27, left: 0.15, imageType: 13 },
  61: { top: 28.85, left: 0.15, imageType: 14 },
  62: { top: 28.85, left: 3.15, imageType: 15 },
  63: { top: 25.55, left: 3.75, imageType: 53 },
  64: { top: 28.85, left: 6.6, imageType: 16 },
  65: { top: 28.85, left: 9.3, imageType: 17 },
  66: { top: 31, left: 9.05, imageType: 18 },
  67: { top: 32.9, left: 9.05, imageType: 19 },
  68: { top: 34.8, left: 9.05, imageType: 20 },
  69: { top: 36.5, left: 9.05, imageType: 20 },
  70: { top: 39.75, left: 9.05, imageType: 21 },
  71: { top: 39.75, left: 10.45, imageType: 22 },
  72: { top: 39.75, left: 11.8, imageType: 23 },
  73: { top: 42.45, left: 11.8, imageType: 24 },
  74: { top: 42.4, left: 17.1, imageType: 25 },
  75: { top: 35.5, left: 13.3, imageType: 40 },
  76: { top: 35.5, left: 14.95, imageType: 41 },
  77: { top: 35.5, left: 16.45, imageType: 39 },
  78: { top: 35.5, left: 18.4, imageType: 39 },
  79: { top: 39.75, left: 18.15, imageType: 26 },
  80: { top: 35.5, left: 20.35, imageType: 40 },
  81: { top: 39.75, left: 19.8, imageType: 22 },
  82: { top: 39.75, left: 21.2, imageType: 22 },
  83: { top: 35.5, left: 22.05, imageType: 39 },
  84: { top: 39.75, left: 22.55, imageType: 27 },
  85: { top: 39.75, left: 24.1, imageType: 22 },
  86: { top: 39.75, left: 25.45, imageType: 22 },
  87: { top: 39.75, left: 26.8, imageType: 22 },
  88: { top: 35.5, left: 23.95, imageType: 39 },
  89: { top: 32.7, left: 23.95, imageType: 39 },
  90: { top: 32.7, left: 22.05, imageType: 39 },
  91: { top: 32.7, left: 20.35, imageType: 40 },
  92: { top: 28.2, left: 20.35, imageType: 46 },
  93: { top: 32.7, left: 18.4, imageType: 39 },
  94: { top: 28.2, left: 18.4, imageType: 47 },
  95: { top: 32.7, left: 16.45, imageType: 39 },
  96: { top: 28.2, left: 16.45, imageType: 47 },
  97: { top: 32.7, left: 14.95, imageType: 42 },
  98: { top: 28.2, left: 14.95, imageType: 48 },
  99: { top: 32.7, left: 13.3, imageType: 40 },
  100: { top: 28.2, left: 13.3, imageType: 46 },
  101: { top: 25.1, left: 13.3, imageType: 46 },
  102: { top: 25.15, left: 9.9, imageType: 50 },
  103: { top: 25.15, left: 8.2, imageType: 51 },
  104: { top: 25.15, left: 6.525, imageType: 52 },
  105: { top: 21.7, left: 6.525, imageType: 58 },
  106: { top: 21.7, left: 8.2, imageType: 58 },
  107: { top: 21.7, left: 9.9, imageType: 58 },
  108: { top: 21.7, left: 11.55, imageType: 58 },
  109: { top: 21.7, left: 13.25, imageType: 58 },
  110: { top: 21.7, left: 14.9, imageType: 59 },
  111: { top: 25.1, left: 14.95, imageType: 49 },
  112: { top: 21.7, left: 16.45, imageType: 60 },
  113: { top: 25.1, left: 16.45, imageType: 47 },
  114: { top: 21.7, left: 18.4, imageType: 60 },
  115: { top: 25.1, left: 18.4, imageType: 47 },
  116: { top: 25.1, left: 20.35, imageType: 46 },
  117: { top: 21.7, left: 20.35, imageType: 59 },
  118: { top: 21.7, left: 22.05, imageType: 59 },
  119: { top: 25.05, left: 21.95, imageType: 45 },
  120: { top: 26.6, left: 21.95, imageType: 44 },
  121: { top: 28.15, left: 21.95, imageType: 44 },
  122: { top: 29.7, left: 21.95, imageType: 43 },
  123: { top: 21.7, left: 23.65, imageType: 61 },
  124: { top: 20.35, left: 22, imageType: 62 },
  125: { top: 19.05, left: 22, imageType: 63 },
  126: { top: 17.75, left: 22, imageType: 63 },
  127: { top: 15.6, left: 23.65, imageType: 65 },
  128: { top: 13.65, left: 25.8, imageType: 66 },
  129: { top: 13.65, left: 23.65, imageType: 61 },
  130: { top: 17.75, left: 20.35, imageType: 64 },
  131: { top: 19.05, left: 14.85, imageType: 57 },
  132: { top: 19.05, left: 13.25, imageType: 40 },
  133: { top: 19.05, left: 11.55, imageType: 40 },
  134: { top: 19.05, left: 9.9, imageType: 40 },
  135: { top: 19.05, left: 8.2, imageType: 56 },
  136: { top: 19.05, left: 6.525, imageType: 40 },
  137: { top: 19.05, left: 5.15, imageType: 55 },
  138: { top: 19.05, left: 3.75, imageType: 55 },
  139: { top: 7.6, left: 23.6, imageType: 68 },
  140: { top: 9.5, left: 24.65, imageType: 67 },
  141: { top: 7.6, left: 26.4, imageType: 69 },
  142: { top: 7.6, left: 28.35, imageType: 25 },
  143: { top: 9.5, left: 29.4, imageType: 26 },
  144: { top: 7.6, left: 31, imageType: 22 },
  145: { top: 7.6, left: 32.3, imageType: 22 },
  146: { top: 7.6, left: 33.6, imageType: 28 },
  147: { top: 7.6, left: 34.95, imageType: 22 },
  148: { top: 7.6, left: 36.3, imageType: 22 },
  149: { top: 7.6, left: 37.65, imageType: 22 },
  150: { top: 9.4, left: 39, imageType: 23 },
  151: { top: 7.6, left: 39, imageType: 24 },
  152: { top: 7.6, left: 44.25, imageType: 29 },
  153: { top: 9.4, left: 45.35, imageType: 73 },
  154: { top: 7.6, left: 46.75, imageType: 22 },
  155: { top: 9.85, left: 48.1, imageType: 31 },
  156: { top: 7.6, left: 48.1, imageType: 31 },
  157: { top: 7.6, left: 51.75, imageType: 74 },
  158: { top: 10.8, left: 51.75, imageType: 75 },
  159: { top: 13.6, left: 51.75, imageType: 76 },
  160: { top: 13.6, left: 47.8, imageType: 77 },
  161: { top: 13.6, left: 46.15, imageType: 78 },
  162: { top: 13.6, left: 44.35, imageType: 79 },
  163: { top: 13.6, left: 42.625, imageType: 79 },
  164: { top: 13.6, left: 40.875, imageType: 79 },
  165: { top: 13.6, left: 39.1, imageType: 79 },
  166: { top: 13.6, left: 37.35, imageType: 79 },
  167: { top: 13.6, left: 35.6, imageType: 79 },
  168: { top: 13.6, left: 33.85, imageType: 79 },
  169: { top: 13.6, left: 32.1, imageType: 79 },
  170: { top: 13.65, left: 29.9, imageType: 80 },
  171: { top: 15.75, left: 29.9, imageType: 80 },
  172: { top: 15.7, left: 32.1, imageType: 81 },
  173: { top: 19.325, left: 32.1, imageType: 87 },
  174: { top: 15.7, left: 33.85, imageType: 79 },
  175: { top: 19.275, left: 33.85, imageType: 85 },
  176: { top: 15.7, left: 35.6, imageType: 79 },
  177: { top: 19.275, left: 35.6, imageType: 85 },
  178: { top: 15.7, left: 37.35, imageType: 79 },
  179: { top: 19.275, left: 37.35, imageType: 85 },
  180: { top: 15.7, left: 39.1, imageType: 79 },
  181: { top: 19.275, left: 39.15, imageType: 86 },
  182: { top: 15.7, left: 40.875, imageType: 79 },
  183: { top: 19.275, left: 40.875, imageType: 85 },
  184: { top: 15.7, left: 42.625, imageType: 79 },
  185: { top: 19.275, left: 42.625, imageType: 85 },
  186: { top: 15.7, left: 44.35, imageType: 79 },
  187: { top: 19.275, left: 44.35, imageType: 85 },
  188: { top: 15.7, left: 46.15, imageType: 78 },
  189: { top: 19.275, left: 46.15, imageType: 83 },
  190: { top: 15.7, left: 47.8, imageType: 77 },
  191: { top: 19.275, left: 47.8, imageType: 82 },
  192: { top: 19.275, left: 49.05, imageType: 82 },
  193: { top: 21.675, left: 49.05, imageType: 82 },
  194: { top: 21.675, left: 47.8, imageType: 82 },
  195: { top: 25.55, left: 49.05, imageType: 89 },
  196: { top: 25.55, left: 47.8, imageType: 89 },
  197: { top: 25.55, left: 46.15, imageType: 90 },
  198: { top: 21.675, left: 46.15, imageType: 36 },
  199: { top: 21.675, left: 44.35, imageType: 85 },
  200: { top: 25.55, left: 44.35, imageType: 91 },
  201: { top: 21.675, left: 42.625, imageType: 85 },
  202: { top: 25.55, left: 42.625, imageType: 91 },
  203: { top: 25.55, left: 40.875, imageType: 91 },
  204: { top: 21.675, left: 40.875, imageType: 85 },
  205: { top: 25.55, left: 39.15, imageType: 91 },
  206: { top: 21.675, left: 39.15, imageType: 85 },
  207: { top: 21.675, left: 37.35, imageType: 85 },
  208: { top: 25.55, left: 37.35, imageType: 91 },
  209: { top: 25.55, left: 35.6, imageType: 91 },
  210: { top: 21.675, left: 35.6, imageType: 85 },
  211: { top: 21.675, left: 33.85, imageType: 85 },
  212: { top: 25.55, left: 33.85, imageType: 91 },
  213: { top: 21.675, left: 32.1, imageType: 85 },
  214: { top: 25.55, left: 32.1, imageType: 91 },
  215: { top: 25.55, left: 29.9, imageType: 93 },
  216: { top: 21.675, left: 29.9, imageType: 88 },
  217: { top: 19.3, left: 29.9, imageType: 88 },
  218: { top: 27.125, left: 29.9, imageType: 93 },
  219: { top: 28.6, left: 29.9, imageType: 93 },
  220: { top: 30.175, left: 29.9, imageType: 93 },
  221: { top: 28.6, left: 32.1, imageType: 92 },
  222: { top: 33.15, left: 32.1, imageType: 37 },
  223: { top: 28.6, left: 33.85, imageType: 91 },
  224: { top: 33.15, left: 33.85, imageType: 36 },
  225: { top: 28.6, left: 35.6, imageType: 91 },
  226: { top: 33.15, left: 35.6, imageType: 36 },
  227: { top: 28.6, left: 37.35, imageType: 91 },
  228: { top: 33.15, left: 37.35, imageType: 36 },
  229: { top: 28.6, left: 39.15, imageType: 91 },
  230: { top: 33.15, left: 39.15, imageType: 36 },
  231: { top: 28.6, left: 40.875, imageType: 91 },
  232: { top: 33.15, left: 40.875, imageType: 36 },
  233: { top: 28.6, left: 42.625, imageType: 91 },
  234: { top: 33.15, left: 42.625, imageType: 36 },
  235: { top: 28.6, left: 44.35, imageType: 91 },
  236: { top: 33.15, left: 44.35, imageType: 36 },
  237: { top: 28.6, left: 46.15, imageType: 90 },
  238: { top: 33.15, left: 46.15, imageType: 36 },
  239: { top: 28.6, left: 47.8, imageType: 89 },
  240: { top: 33.15, left: 47.8, imageType: 35 },
  241: { top: 33.15, left: 49.05, imageType: 35 },
  242: { top: 28.6, left: 49.05, imageType: 89 },
  243: { top: 34.55, left: 51.85, imageType: 34 },
  244: { top: 35.65, left: 49.1, imageType: 35 },
  245: { top: 37.875, left: 51.85, imageType: 33 },
  246: { top: 41, left: 51.85, imageType: 32 },
  247: { top: 41.975, left: 48.2, imageType: 31 },
  248: { top: 39.7, left: 48.2, imageType: 31 },
  249: { top: 39.72, left: 46.85, imageType: 22 },
  250: { top: 39.65, left: 45.45, imageType: 30 },
  251: { top: 35.65, left: 47.9, imageType: 35 },
  252: { top: 35.65, left: 46.2, imageType: 36 },
  253: { top: 35.65, left: 44.35, imageType: 36 },
  254: { top: 42.35, left: 44.35, imageType: 29 },
  255: { top: 35.65, left: 42.625, imageType: 36 },
  256: { top: 35.65, left: 40.875, imageType: 36 },
  257: { top: 35.65, left: 39.15, imageType: 36 },
  258: { top: 42.4, left: 39.1, imageType: 24 },
  259: { top: 39.7, left: 39.1, imageType: 23 },
  260: { top: 39.75, left: 37.75, imageType: 22 },
  261: { top: 35.65, left: 37.35, imageType: 36 },
  262: { top: 39.75, left: 36.4, imageType: 22 },
  263: { top: 35.65, left: 35.6, imageType: 36 },
  264: { top: 39.75, left: 35.05, imageType: 22 },
  265: { top: 35.65, left: 33.85, imageType: 36 },
  266: { top: 39.7, left: 33.7, imageType: 28 },
  267: { top: 39.75, left: 32.4, imageType: 22 },
  268: { top: 35.65, left: 32.1, imageType: 36 },
  269: { top: 39.75, left: 31.1, imageType: 22 },
  270: { top: 39.75, left: 29.5, imageType: 26 },
  271: { top: 42.4, left: 28.45, imageType: 25 },
  272: { top: 35.65, left: 29.9, imageType: 38 },
  273: { top: 33.15, left: 29.9, imageType: 38 },

  // 4th floor
  41: { top: 7.1, left: 7.1, imageType: 1 },
  42: { top: 7.1, left: 9.3, imageType: 2 },
  43: { top: 11, left: 0.15, imageType: 0 },
  274: { top: 17.5, left: 0.15, imageType: 11 },
  275: { top: 19.45, left: 0.15, imageType: 11 },
  276: { top: 21.4, left: 0.15, imageType: 11 },
  277: { top: 21.75, left: 3.75, imageType: 54 },
  278: { top: 23.35, left: 0.15, imageType: 11 },
  279: { top: 23.65, left: 3.75, imageType: 54 },
  280: { top: 25.3, left: 0.15, imageType: 12 },
  281: { top: 27, left: 0.15, imageType: 13 },
  282: { top: 28.85, left: 0.15, imageType: 14 },
  283: { top: 28.85, left: 3.15, imageType: 15 },
  284: { top: 25.55, left: 3.75, imageType: 53 },
  285: { top: 28.85, left: 6.6, imageType: 16 },
  286: { top: 28.85, left: 9.3, imageType: 17 },
  287: { top: 31, left: 9.05, imageType: 18 },
  288: { top: 32.9, left: 9.05, imageType: 19 },
  289: { top: 34.8, left: 9.05, imageType: 20 },
  290: { top: 36.5, left: 9.05, imageType: 20 },
  291: { top: 39.75, left: 9.05, imageType: 21 },
  292: { top: 39.75, left: 10.45, imageType: 22 },
  293: { top: 39.75, left: 11.8, imageType: 23 },
  294: { top: 42.45, left: 11.8, imageType: 24 },
  295: { top: 42.4, left: 17.1, imageType: 25 },
  296: { top: 35.5, left: 13.3, imageType: 40 },
  297: { top: 35.5, left: 14.95, imageType: 41 },
  298: { top: 35.5, left: 16.45, imageType: 39 },
  299: { top: 35.5, left: 18.4, imageType: 39 },
  300: { top: 39.75, left: 18.15, imageType: 26 },
  301: { top: 35.5, left: 20.35, imageType: 40 },
  302: { top: 39.75, left: 19.8, imageType: 22 },
  303: { top: 39.75, left: 21.2, imageType: 22 },
  304: { top: 35.5, left: 22.05, imageType: 39 },
  305: { top: 39.75, left: 22.55, imageType: 27 },
  306: { top: 39.75, left: 24.1, imageType: 22 },
  307: { top: 39.75, left: 25.45, imageType: 22 },
  308: { top: 39.75, left: 26.8, imageType: 22 },
  309: { top: 35.5, left: 23.95, imageType: 39 },
  310: { top: 32.7, left: 23.95, imageType: 39 },
  311: { top: 32.7, left: 22.05, imageType: 39 },
  312: { top: 32.7, left: 20.35, imageType: 40 },
  313: { top: 28.2, left: 20.35, imageType: 46 },
  314: { top: 32.7, left: 18.4, imageType: 39 },
  315: { top: 28.2, left: 18.4, imageType: 47 },
  316: { top: 32.7, left: 16.45, imageType: 39 },
  317: { top: 28.2, left: 16.45, imageType: 47 },
  318: { top: 32.7, left: 14.95, imageType: 42 },
  319: { top: 28.2, left: 14.95, imageType: 48 },
  320: { top: 32.7, left: 13.3, imageType: 40 },
  321: { top: 28.2, left: 13.3, imageType: 46 },
  322: { top: 25.1, left: 13.3, imageType: 46 },
  323: { top: 25.15, left: 9.9, imageType: 50 },
  324: { top: 25.15, left: 8.2, imageType: 51 },
  325: { top: 25.15, left: 6.525, imageType: 52 },
  326: { top: 21.7, left: 6.525, imageType: 58 },
  327: { top: 21.7, left: 8.2, imageType: 58 },
  328: { top: 21.7, left: 9.9, imageType: 58 },
  329: { top: 21.7, left: 11.55, imageType: 58 },
  330: { top: 21.7, left: 13.25, imageType: 58 },
  331: { top: 21.7, left: 14.9, imageType: 59 },
  332: { top: 25.1, left: 14.95, imageType: 49 },
  333: { top: 21.7, left: 16.45, imageType: 60 },
  334: { top: 25.1, left: 16.45, imageType: 47 },
  335: { top: 21.7, left: 18.4, imageType: 60 },
  336: { top: 25.1, left: 18.4, imageType: 47 },
  337: { top: 25.1, left: 20.35, imageType: 46 },
  338: { top: 21.7, left: 20.35, imageType: 59 },
  339: { top: 21.7, left: 22.05, imageType: 59 },
  340: { top: 25.05, left: 21.95, imageType: 45 },
  341: { top: 26.6, left: 21.95, imageType: 44 },
  342: { top: 28.15, left: 21.95, imageType: 44 },
  343: { top: 29.7, left: 21.95, imageType: 43 },
  344: { top: 21.7, left: 23.65, imageType: 61 },
  345: { top: 20.35, left: 22, imageType: 62 },
  346: { top: 19.05, left: 22, imageType: 63 },
  347: { top: 17.75, left: 22, imageType: 63 },
  348: { top: 15.6, left: 23.65, imageType: 65 },
  349: { top: 13.65, left: 25.8, imageType: 66 },
  350: { top: 13.65, left: 23.65, imageType: 61 },
  351: { top: 17.75, left: 20.35, imageType: 64 },
  352: { top: 19.05, left: 14.85, imageType: 57 },
  353: { top: 19.05, left: 13.25, imageType: 40 },
  354: { top: 19.05, left: 11.55, imageType: 40 },
  355: { top: 19.05, left: 9.9, imageType: 40 },
  356: { top: 19.05, left: 8.2, imageType: 56 },
  357: { top: 19.05, left: 6.525, imageType: 40 },
  358: { top: 19.05, left: 5.15, imageType: 55 },
  359: { top: 19.05, left: 3.75, imageType: 55 },
  360: { top: 7.6, left: 23.6, imageType: 68 },
  361: { top: 9.5, left: 24.65, imageType: 67 },
  362: { top: 7.6, left: 26.4, imageType: 69 },
  363: { top: 7.6, left: 28.35, imageType: 25 },
  364: { top: 9.5, left: 29.4, imageType: 26 },
  365: { top: 7.6, left: 31, imageType: 22 },
  366: { top: 7.6, left: 32.3, imageType: 22 },
  367: { top: 7.6, left: 33.6, imageType: 28 },
  368: { top: 7.6, left: 34.95, imageType: 22 },
  369: { top: 7.6, left: 36.3, imageType: 22 },
  370: { top: 7.6, left: 37.65, imageType: 22 },
  371: { top: 9.4, left: 39, imageType: 23 },
  372: { top: 7.6, left: 39, imageType: 24 },
  373: { top: 7.6, left: 44.25, imageType: 29 },
  374: { top: 9.4, left: 45.35, imageType: 73 },
  375: { top: 7.6, left: 46.75, imageType: 22 },
  376: { top: 9.85, left: 48.1, imageType: 31 },
  377: { top: 7.6, left: 48.1, imageType: 31 },
  378: { top: 7.6, left: 51.75, imageType: 74 },
  379: { top: 10.8, left: 51.75, imageType: 75 },
  380: { top: 13.6, left: 51.75, imageType: 76 },
  381: { top: 13.6, left: 47.8, imageType: 77 },
  382: { top: 13.6, left: 46.15, imageType: 78 },
  383: { top: 13.6, left: 44.35, imageType: 79 },
  384: { top: 13.6, left: 42.625, imageType: 79 },
  385: { top: 13.6, left: 40.875, imageType: 79 },
  386: { top: 13.6, left: 39.1, imageType: 79 },
  387: { top: 13.6, left: 37.35, imageType: 79 },
  388: { top: 13.6, left: 35.6, imageType: 79 },
  389: { top: 13.6, left: 33.85, imageType: 79 },
  390: { top: 13.6, left: 32.1, imageType: 79 },
  391: { top: 13.65, left: 29.9, imageType: 80 },
  392: { top: 15.75, left: 29.9, imageType: 80 },
  393: { top: 15.7, left: 32.1, imageType: 81 },
  394: { top: 19.325, left: 32.1, imageType: 87 },
  395: { top: 15.7, left: 33.85, imageType: 79 },
  396: { top: 19.275, left: 33.85, imageType: 85 },
  397: { top: 15.7, left: 35.6, imageType: 79 },
  398: { top: 19.275, left: 35.6, imageType: 85 },
  399: { top: 15.7, left: 37.35, imageType: 79 },
  400: { top: 19.275, left: 37.35, imageType: 85 },
  401: { top: 15.7, left: 39.1, imageType: 79 },
  402: { top: 19.275, left: 39.15, imageType: 86 },
  403: { top: 15.7, left: 40.875, imageType: 79 },
  404: { top: 19.275, left: 40.875, imageType: 85 },
  405: { top: 15.7, left: 42.625, imageType: 79 },
  406: { top: 19.275, left: 42.625, imageType: 85 },
  407: { top: 15.7, left: 44.35, imageType: 79 },
  408: { top: 19.275, left: 44.35, imageType: 85 },
  409: { top: 15.7, left: 46.15, imageType: 78 },
  410: { top: 19.275, left: 46.15, imageType: 83 },
  411: { top: 15.7, left: 47.8, imageType: 77 },
  412: { top: 19.275, left: 47.8, imageType: 82 },
  413: { top: 19.275, left: 49.05, imageType: 82 },
  414: { top: 21.675, left: 49.05, imageType: 82 },
  415: { top: 21.675, left: 47.8, imageType: 82 },
  416: { top: 25.55, left: 49.05, imageType: 89 },
  417: { top: 25.55, left: 47.8, imageType: 89 },
  418: { top: 25.55, left: 46.15, imageType: 90 },
  419: { top: 21.675, left: 46.15, imageType: 36 },
  420: { top: 21.675, left: 44.35, imageType: 85 },
  421: { top: 25.55, left: 44.35, imageType: 91 },
  422: { top: 21.675, left: 42.625, imageType: 85 },
  423: { top: 25.55, left: 42.625, imageType: 91 },
  424: { top: 25.55, left: 40.875, imageType: 91 },
  425: { top: 21.675, left: 40.875, imageType: 85 },
  426: { top: 25.55, left: 39.15, imageType: 91 },
  427: { top: 21.675, left: 39.15, imageType: 85 },
  428: { top: 21.675, left: 37.35, imageType: 85 },
  429: { top: 25.55, left: 37.35, imageType: 91 },
  430: { top: 25.55, left: 35.6, imageType: 91 },
  431: { top: 21.675, left: 35.6, imageType: 85 },
  432: { top: 21.675, left: 33.85, imageType: 85 },
  433: { top: 25.55, left: 33.85, imageType: 91 },
  434: { top: 21.675, left: 32.1, imageType: 85 },
  435: { top: 25.55, left: 32.1, imageType: 91 },
  436: { top: 25.55, left: 29.9, imageType: 93 },
  437: { top: 21.675, left: 29.9, imageType: 88 },
  438: { top: 19.3, left: 29.9, imageType: 88 },
  439: { top: 27.125, left: 29.9, imageType: 93 },
  440: { top: 28.6, left: 29.9, imageType: 93 },
  441: { top: 30.175, left: 29.9, imageType: 93 },
  442: { top: 28.6, left: 32.1, imageType: 92 },
  443: { top: 33.15, left: 32.1, imageType: 37 },
  444: { top: 28.6, left: 33.85, imageType: 91 },
  445: { top: 33.15, left: 33.85, imageType: 36 },
  446: { top: 28.6, left: 35.6, imageType: 91 },
  447: { top: 33.15, left: 35.6, imageType: 36 },
  448: { top: 28.6, left: 37.35, imageType: 91 },
  449: { top: 33.15, left: 37.35, imageType: 36 },
  450: { top: 28.6, left: 39.15, imageType: 91 },
  451: { top: 33.15, left: 39.15, imageType: 36 },
  452: { top: 28.6, left: 40.875, imageType: 91 },
  453: { top: 33.15, left: 40.875, imageType: 36 },
  454: { top: 28.6, left: 42.625, imageType: 91 },
  455: { top: 33.15, left: 42.625, imageType: 36 },
  456: { top: 28.6, left: 44.35, imageType: 91 },
  457: { top: 33.15, left: 44.35, imageType: 36 },
  458: { top: 28.6, left: 46.15, imageType: 90 },
  459: { top: 33.15, left: 46.15, imageType: 36 },
  460: { top: 28.6, left: 47.8, imageType: 89 },
  461: { top: 33.15, left: 47.8, imageType: 35 },
  462: { top: 33.15, left: 49.05, imageType: 35 },
  463: { top: 28.6, left: 49.05, imageType: 89 },
  464: { top: 34.55, left: 51.85, imageType: 34 },
  465: { top: 35.65, left: 49.1, imageType: 35 },
  466: { top: 37.875, left: 51.85, imageType: 33 },
  467: { top: 41, left: 51.85, imageType: 32 },
  468: { top: 41.975, left: 48.2, imageType: 31 },
  469: { top: 39.7, left: 48.2, imageType: 31 },
  470: { top: 39.72, left: 46.85, imageType: 22 },
  471: { top: 39.65, left: 45.45, imageType: 30 },
  472: { top: 35.65, left: 47.9, imageType: 35 },
  473: { top: 35.65, left: 46.2, imageType: 36 },
  474: { top: 35.65, left: 44.35, imageType: 36 },
  475: { top: 42.35, left: 44.35, imageType: 29 },
  476: { top: 35.65, left: 42.625, imageType: 36 },
  477: { top: 35.65, left: 40.875, imageType: 36 },
  478: { top: 35.65, left: 39.15, imageType: 36 },
  479: { top: 42.4, left: 39.1, imageType: 24 },
  480: { top: 39.7, left: 39.1, imageType: 23 },
  481: { top: 39.75, left: 37.75, imageType: 22 },
  482: { top: 35.65, left: 37.35, imageType: 36 },
  483: { top: 39.75, left: 36.4, imageType: 22 },
  484: { top: 35.65, left: 35.6, imageType: 36 },
  485: { top: 39.75, left: 35.05, imageType: 22 },
  486: { top: 35.65, left: 33.85, imageType: 36 },
  487: { top: 39.7, left: 33.7, imageType: 28 },
  488: { top: 39.75, left: 32.4, imageType: 22 },
  489: { top: 35.65, left: 32.1, imageType: 36 },
  490: { top: 39.75, left: 31.1, imageType: 22 },
  491: { top: 39.75, left: 29.5, imageType: 26 },
  492: { top: 42.4, left: 28.45, imageType: 25 },
  493: { top: 35.65, left: 29.9, imageType: 38 },
  494: { top: 33.15, left: 29.9, imageType: 38 },

  // 5th floor
  18: { top: 11, left: 0.15, imageType: 0 },
  19: { top: 7.1, left: 7.1, imageType: 1 },
  20: { top: 7.1, left: 9.3, imageType: 2 },
  21: { top: 39.7, left: 46.6, imageType: 6 },
  22: { top: 39.7, left: 47.95, imageType: 7 },
  23: { top: 39.7, left: 49.3, imageType: 8 },
  24: { top: 39.7, left: 50.6, imageType: 9 },
  25: { top: 39.7, left: 51.95, imageType: 10 },
}
