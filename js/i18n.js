// Bilingual copy for the site (English -> Chinese).
//
// main.js swaps a text node when the language switches to Chinese, and puts the
// original English back when it switches back. Add an entry here whenever new
// English copy is added to the page; anything not listed simply stays as-is.
//
// Keys must match the rendered text exactly (entities resolved: &mdash; -> —,
// &rarr; -> →, &amp; -> &), with leading/trailing whitespace trimmed.
window.I18N_ZH = {
  // Page title
  "Jianqiang — Personal Site v2": "建强 — 个人网站",

  // Navigation
  "Articles": "文章",
  "Equipment": "设备",
  "3D Models": "3D 模型",
  "Creative": "创意",
  "Music": "音乐",
  "Video": "视频",
  "Gallery": "相册",
  "Travel": "旅行",
  "Engineering": "工程",
  "Books": "图书",
  "Science": "科学",
  "Bookstore": "书店",

  // Hero
  "Articles on AI and tech, engineering proposals, 3D models, music, photos — all in one place.":
    "关于 AI 与技术、工程方案、3D 模型、音乐和摄影的文章，都汇集在这里。",

  // Articles
  "Latest Writings": "最新文章",
  "Sep 2026": "2026 年 9 月",
  "Aug 2026": "2026 年 8 月",
  "Jul 2026": "2026 年 7 月",
  "Building Better AI Agents: Lessons from the Field": "打造更好的 AI 智能体：来自一线的经验",
  "A practical look at what works when designing autonomous coding agents — from prompt design to error recovery patterns.":
    "设计自主编程智能体时哪些做法真正有效 —— 从提示词设计到错误恢复模式，一次务实的梳理。",
  "TETRA Digital Clusters: Why 800MHz Still Matters": "TETRA 数字集群：800MHz 为什么依然重要",
  "Reflections on maintaining TETRA infrastructure across Chinese port cities.":
    "在国内多个港口城市维护 TETRA 基础设施的思考。",
  "The Case for Simple Tools": "为简单工具辩护",
  "Why the best engineering decisions often lead to the simplest implementations.":
    "为什么最好的工程决策，往往通向最简单的实现。",
  "Read more →": "阅读全文 →",
  "View all articles →": "查看全部文章 →",

  // Equipment
  "Second-Hand Gear": "二手设备",
  "Tested and verified. Each item sold as-is with full description.":
    "逐台测试确认，如实描述，按现状出售。",
  "📷 Photo": "📷 图片",
  "Available": "在售",
  "Sold": "已售",
  "TESS Terminal Unit": "TESS 终端电台",
  "TETRA radio terminal, fully functional. Original packaging included.":
    "TETRA 电台终端，功能完好，含原包装。",
  "BR DV400 Terminal": "BR DV400 终端",
  "Portable TETRA terminal, good condition. Battery holds charge well.":
    "便携式 TETRA 终端，成色良好，电池续航正常。",
  "VT100 Base Station Module": "VT100 基站模块",
  "Used in Yunnan deployment. All documentation included.": "曾在云南项目中部署使用，资料齐全。",
  "Yantai · 2024": "烟台 · 2024",
  "Yingkou · 2023": "营口 · 2023",
  "Kunming · 2022": "昆明 · 2022",
  "Inquire": "咨询",
  "View all listings →": "查看全部在售 →",

  // 3D models
  "Three-Dimensional Work": "三维作品",
  "Parametric designs, mechanical parts, and experimental forms.":
    "参数化设计、机械零件与实验性造型。",
  "Interactive 3D Viewer": "可交互的 3D 查看器",
  "Interactive Viewer": "可交互查看器",
  "Flat Screwdriver": "一字螺丝刀",
  "Parametric bevel gear set for 3D printing. STEP & OBJ formats.":
    "用于 3D 打印的参数化锥齿轮组，提供 STEP 与 OBJ 格式。",
  "Mechanical": "机械",
  "Printable": "可打印",
  "Enclosure – IoT Box": "外壳 – IoT 盒子",
  "Weatherproof enclosure for field-deployed sensors.": "为野外部署的传感器设计的防水外壳。",
  "Enclosure": "外壳",
  "3D Print": "3D 打印",
  "TETRA Antenna Element": "TETRA 天线单元",
  "Parametric dipole array for 800 MHz TETRA systems.": "用于 800 MHz TETRA 系统的参数化偶极子阵列。",
  "Antenna": "天线",
  "RF": "射频",
  "Simulation": "仿真",
  "Browse all models →": "浏览全部模型 →",

  // Creative
  "Small Ideas & Projects": "小想法与小项目",
  "Prototypes, generative art, and things built for fun.": "原型、生成艺术，以及纯粹为了好玩做出来的东西。",
  "PDF Translation Tool": "PDF 翻译工具",
  "Self-contained Windows app translating English PDFs to Chinese via DeepSeek.":
    "基于 DeepSeek 的自包含 Windows 应用，把英文 PDF 翻译成中文。",
  "Argument Structure Maps": "论证结构图谱",
  "Visual tool extracting argument chains from essays and reports.":
    "从文章和报告中提取论证链条的可视化工具。",
  "Graph": "图谱",
  "TETRA Inspection Automation": "TETRA 巡检自动化",
  "Python scripts parsing vt100 logs into Excel summaries and Word reports.":
    "用 Python 解析 vt100 日志，生成 Excel 汇总表和 Word 报告。",
  "Automation": "自动化",

  // Music
  "Likes & Recommendations": "喜欢的与推荐的",
  "Songs and albums I keep coming back to.": "反复回听的歌曲与专辑。",
  "Unknown": "未知",
  "More songs →": "更多歌曲 →",
  "Show less ←": "收起 ←",

  // Video
  "Films & Clips": "影片与片段",
  "Videos I have made or found worth sharing.": "我自己拍的，以及觉得值得分享的视频。",
  "Liberia Road Footage": "利比里亚公路片段",
  "Clip from a trip in Liberia, August 2023. 1920×880, ~15s.":
    "2023 年 8 月利比里亚之行拍摄，1920×880，约 15 秒。",
  "Yantai Port Clip": "烟台港片段",
  "Jinan area footage, July 2025. 1920×1080, ~8s.":
    "2025 年 7 月济南一带拍摄，1920×1080，约 8 秒。",
  "Your browser does not support the video tag.": "你的浏览器不支持 video 标签。",

  // Gallery
  "Featured Photos": "精选照片",
  "Auto-advancing slideshow of recent favorites.": "近期精选照片自动轮播。",
  "Liaoning Mountain Pass": "辽宁山口",
  "En route to Yingkou. Early autumn light through the pines.": "去营口的路上。初秋的阳光穿过松林。",
  "Yantai Coast": "烟台海岸",
  "Summer evening walk along the harbor.": "夏日傍晚，沿着港口散步。",
  "Antenna Array": "天线阵列",
  "TETRA base station installation at the port.": "港口 TETRA 基站安装现场。",
  "View all photos →": "查看全部照片 →",

  // Travel
  "Places & Notes": "地方与笔记",
  "Photography from engineering trips and personal journeys.": "工程出差与个人旅途中的摄影。",
  "Lianyungang Dock": "连云港码头",
  "Container cranes at dusk.": "暮色中的集装箱吊机。",
  "Qingdao Temple": "青岛古庙",
  "Shandong Coast": "山东海岸",

  // Engineering
  "Proposals & Schemes": "方案与设计",
  "Technical proposals, system designs, and project documentation.": "技术方案、系统设计与项目文档。",
  "Port Infrastructure": "港口基础设施",
  "View proposal →": "查看方案 →",

  // Books
  "Recommended Reading": "推荐阅读",
  "Books that shaped my thinking — with reviews and notes.": "塑造了我思考方式的书，附书评与笔记。",

  // Science
  "Popular Science & Book Reviews": "科普与书评",
  "Articles and reviews on science books — making complex ideas accessible.":
    "关于科普书籍的文章与书评 —— 把复杂的思想讲清楚。",
  "What this book gets right, what it misses, and why it matters for curious readers.":
    "这本书说对了什么、漏掉了什么，以及它为什么值得好奇的读者一读。",

  // Bookstore
  "Books for Sale": "在售图书",
  "Curated selection, tested and recommended. Each book sold as-is.": "精选挑过、读过才推荐，按现状出售。",
  "Condition: Like New": "品相：几乎全新",
  "Condition: Good": "品相：良好",
  "Condition: Used": "品相：有使用痕迹",

  // Footer
  "Engineer, maker, writer.": "工程师、创客、写作者。",
  "Based in Jinan, working across the coast.": "常驻济南，工作在沿海各地。",
  "Sections": "栏目",
  "Connect": "联系",
  "Email": "邮箱",
  "WeChat": "微信",
  "© 2026 Jianqiang. All rights reserved.": "© 2026 建强 保留所有权利。",
  "Built with care. — v3": "用心构建。— v3"
};
