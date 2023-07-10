/**
 * 事件数据
 */
import { WeightLevel, ScopeType } from '@/config/enums'
import * as Interfaces from '@/config/interfaces'
const data: Interfaces.Event[] = [
  {
    title: '湖北省武汉市部分医院发现了多例不明原因肺炎病例',
    description: '12月以来，湖北省武汉市部分医院发现了多例有华南海鲜市场暴露史的不明原因肺炎病例',
    img: '',
    time: '2019.12',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.DOMESTIC
  },
  {
    title: '世卫组织总干事谭德塞在瑞士日内瓦宣布，将新型冠状病毒感染的肺炎命名为"COVID-19"。',
    description: '',
    img: '',
    time: '2020.02.11',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '世卫组织认为当前新冠肺炎疫情可被称为全球大流行。',
    description: '',
    img: '',
    time: '2020.03.11',
    href: '',
    weight: WeightLevel.SMALL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '中国举行全国性哀悼活动。',
    description: '',
    img: '',
    time: '2020.04.04',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.DOMESTIC
  },
  {
    title: '十三届全国人大三次会议表决通过了《中华人民共和国民法典》，自2021年1月1日起施行。',
    description: '',
    img: '',
    time: '2020.05.28',
    href: '',
    weight: WeightLevel.BIG,
    scope: ScopeType.DOMESTIC
  },
  {
    title: '《中华人民共和国民法典》正式施行。',
    description: '',
    img: '',
    time: '2021.01.01',
    href: '',
    weight: WeightLevel.BIG,
    scope: ScopeType.DOMESTIC
  },
  {
    title: '第59届美国总统拜登正式就职',
    description:
      '第59届美国总统就职典礼于当地时间2021年1月20日（周三），在华盛顿特区美国国会大厦西侧举行。这标志着第46任美国总统乔·拜登及其副总统卡马拉·哈里斯四年执政期的开端。',
    img: '',
    time: '2021.01.20',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '达沃斯论坛在新加坡举办',
    description:
      '考虑到新冠疫情现状，总部位于瑞士日内瓦的世界经济论坛（又称“达沃斯论坛”)2021年年会于5月13日至16日在新加坡举行。这是世界经济论坛自“9·11”恐袭后在纽约举行以来，首次在瑞士以外国家举行。',
    img: '',
    time: '2021.05.13',
    href: '',
    weight: WeightLevel.SMALL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '东京奥运会',
    description:
      '因新冠疫情影响而推迟的东京奥运会于2021年7月23日开幕，8月8日闭幕。东京奥运会及残奥委会伴随延期和新冠疫情防控而产生的追加经费预计高达2940亿日元。',
    img: '',
    time: '2021.07.23',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '东京残奥会',
    description: '东京残奥会，即第16届夏季残疾人奥林匹克运动会，于2021年8月24日开幕，9月5日闭幕。',
    img: '',
    time: '2021.08.24',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '中国“入世”20周年',
    description:
      '《中国加入WTO议定书》生效，中国正式成为世贸组织成员。到2021年，中国“入世”20年。20年来，中国经济显著开放，改革稳步推进，入世使中国进一步顺应了经济全球化的潮流。',
    img: '',
    time: '2001.12.11',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '第26届联合国气候变化大会',
    description:
      '第26届联合国气候变化大会（COP 26）因新型冠状病毒疫情推迟至2021年在苏格兰格拉斯哥举行，2021年11月这一新会期将使得英国和意大利可以利用分别担任七国集团和二十国集团主席国的机会去推动更大的气候雄心。',
    img: '',
    time: '2021.08.24',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '非洲自贸区将于2021年1月1日启动交易',
    description:
      '非盟召开特别会议决定，从2021年1月1日起，非洲自贸区将正式启动交易。这会极大促进非洲内部贸易、推进非洲工业化，并帮助非洲更好地融入全球经济。非洲自贸区启动交易，是非洲大陆一体化进程中的重要里程碑。非盟希望到2035年，自贸区能够使3000万非洲人摆脱极端贫困、7000万非洲人摆脱中等贫困。',
    img: '',
    time: '2021.12.05',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },

  // 2022,
  {
    title: '日本前首相安倍晋三遭枪击身亡',
    description:
      '安倍晋三在奈良县奈良市街头演讲时遭枪击，经数小时抢救后不治身亡，终年67岁。安倍晋三分别于2006年、2012年、2014年、2017年担任日本第90、96、97、98届首相，去世时为日本自民党最大派系细田派（清和会）会长。',
    img: '',
    time: '2022.07.08',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '苏联第一任也是最后一任总统戈尔巴乔夫去世，终年91岁。',
    description: '',
    img: '',
    time: '2022.08.30',
    href: '',
    weight: WeightLevel.SMALL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '英国女王、英联邦元首伊丽莎白二世去世，终年96岁',
    description: '英国女王、英联邦元首伊丽莎白二世去世，终年96岁，是英国历史上在位时间最长的君主。',
    img: '',
    time: '2022.09.08',
    href: '',
    weight: WeightLevel.SMALL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '第九批在韩志愿军烈士遗骸回归祖国，运20迎接，歼20护航',
    description: '第九批在韩志愿军烈士遗骸回归祖国，运20迎接，歼20护航，礼兵为伴，水门礼遇。',
    img: '',
    time: '2022.09.16',
    href: '',
    weight: WeightLevel.SMALL,
    scope: ScopeType.DOMESTIC
  },
  {
    title:
      '俄罗斯总统普京宣布在俄联邦境内进行部局部动员，并支持卢甘斯克、顿涅茨克、赫尔松和扎波罗热四个地区举行“入俄公投”',
    description:
      '俄罗斯总统普京讲话宣布在俄联邦境内进行部局部动员，俄罗斯防长邵伊古称在此次动员令行动将征召30万预备役人员，这是俄罗斯在二战之后进行的首次动员；支持卢甘斯克、顿涅茨克、赫尔松和扎波罗热四个地区举行“入俄公投”。',
    img: '',
    time: '2022.09.21',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '中共中央宣传部：两岸统一后，台湾可以实行不同于祖国大陆的社会制度。',
    description: '',
    img: '',
    time: '2022.09.21',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.DOMESTIC
  },
  {
    title: '“北溪-2”天然气管道在丹麦海域发生泄漏',
    description:
      '“北溪-2”天然气管道在丹麦海域发生泄漏，随后“北溪-1”天然气管道的两处区域也发生泄漏。',
    img: '',
    time: '2022.09.26',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '第55届世乒赛女团决赛中，中国选手陈梦、王曼昱、孙颖莎夺得冠军！',
    description:
      '第55届世乒赛女团决赛中，中国选手陈梦、王曼昱、孙颖莎出战，以总比分3:0击败日本队，夺得冠军。这是中国女团在世乒赛比赛中第22次夺得冠军，五连冠！',
    img: '',
    time: '2022.10.08',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '克里米亚大桥上一油罐车发生爆炸，部分桥段遭到破坏',
    description:
      '该大桥为克里米亚半岛与俄罗斯大陆之间物资运输的关键通道之一。2022年10月12日，俄联邦调查局公布调查结果，称克里米亚大桥事件主谋为乌军事情报局局长。2023年7月９日，乌克兰国防部副部长在其Telegram个人频道发文称：“距离我们第一次袭击克里米亚大桥已经过去273天了。袭击的目标是是破坏俄罗斯的后勤保障。”',
    img: '',
    time: '2022.10.08',
    href: '',
    weight: WeightLevel.NORMAL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '乌克兰多地先后报告遭到了导弹和火箭炮袭击',
    description:
      '当地时间上午，乌克兰多个地区先后报告遭到了导弹和火箭炮袭击，袭击目标包括乌多个能源设施、军事设施、乌克兰安全局等。时任俄罗斯总统普京与白俄罗斯总统卢卡申科就部署区域联合部队达成一致。',
    img: '',
    time: '2022.10.10',
    href: '',
    weight: WeightLevel.MINI,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '时任英国首相特拉斯宣布辞去英国首相职务',
    description: '',
    img: '',
    time: '2022.10.20',
    href: '',
    weight: WeightLevel.MINI,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '里希·苏纳克正式就职英国首相，也是英国历史上首位亚裔首相',
    description:
      '时任英国首相特拉斯发表告别演说，正式辞去首相职务，在职45天。刚刚当选为英国保守党党首的里希·苏纳克在白金汉宫接受英国国王查尔斯三世的正式任命，成为英国新任首相。现年42岁的里希·苏纳克是英国最近七周之内的第三位首相，也是英国历史上首位亚裔首相。',
    img: '',
    time: '2022.10.25',
    href: '',
    weight: WeightLevel.SMALL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '“天舟五号”货运飞船发射升空，并与中国空间站完成自主快速交会对接',
    description:
      '搭载“天舟五号”货运飞船的“长征七号”遥六运载火箭在中国文昌航天发射场发射升空，搭载了补给中国空间站的在轨驻留消耗品、推进剂、应用实（试）验装置等物资近5吨、补加燃料1.4吨。火箭于北京时间10时03分发射，经过两小时，与在轨运行的空间站组合体完成自主快速交会对接，创造了火箭从发射到交会对接时间的世界纪录。',
    img: '',
    time: '2022.11.08',
    href: '',
    weight: WeightLevel.SMALL,
    scope: ScopeType.DOMESTIC
  },
  {
    title: '俄军从赫尔松的第聂伯河西岸撤出',
    description:
      '俄罗斯国防部长谢尔盖·绍伊古下令，俄军从赫尔松附近的第聂伯河西岸撤出，在撤退行动中乌军没有紧追，俄军伤亡为0。此前，由于乌军对第聂伯河交通要道、轮渡的持续攻击，俄军在第聂伯河西岸地区后勤补给困难，作战艰难。',
    img: '',
    time: '2022.11.09',
    href: '',
    weight: WeightLevel.MINI,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: 'NASA"太空发射系统（SLS）"首次发射升空，开始执行“阿尔忒弥斯1号”无人绕月飞行测试任务',
    description:
      '美国航天局（NASA）"太空发射系统（SLS）"首次发射升空，执行“阿尔忒弥斯1号”无人绕月飞行测试任务。2022年4月，由于三次发射演练失败，该型火箭被撤下发射台进行检修。6月18至20日，第四次发射演练时，出现燃料泄漏、倒计时意外中断等问题。SLS原定8月29日、9月3日、9月27日的发射计划都由于燃料泄漏等问题宣告中断。',
    img: '',
    time: '2022.11.16',
    href: '',
    weight: WeightLevel.SMALL,
    scope: ScopeType.INTERNATIONAL
  },
  {
    title: '神舟十四号乘组进行第三次出舱活动',
    description:
      '神舟十四号乘组进行第三次出舱活动，航天员陈冬、蔡旭哲执行出舱任务，航天员刘洋在核心舱内配合支持。舱外活动期间，两名出舱航天员将先后配合完成舱间连接装置安装、问天实验舱全景相机抬升等作业。这是我国航天员在空间站进行的第七次出舱活动，预计历时6.5小时。',
    img: '',
    time: '2022.11.17',
    href: '',
    weight: WeightLevel.MINI,
    scope: ScopeType.DOMESTIC
  },
  {
    title: '长征二号F运载火箭托举神舟十五号载人飞船顺利升空',
    description: '',
    img: '',
    time: '2022.11.17',
    href: '',
    weight: WeightLevel.SMALL,
    scope: ScopeType.INTERNATIONAL
  }
]
export default data
