export const siteConfig = {
  title: 'VPS.DOG',
  description: '收录优质VPS资源',
  slogan: '发现全球优质VPS资源，助您轻松选择最佳服务器',
  github: 'https://github.com/dabowin/dog-nav',
  telegram: 'https://t.me/freevpschat',
  socialLinks: [
    {
      title: 'GitHub',
      url: 'https://github.com/dabowin/dog-nav',
      icon: '/icons/github.svg',
      description: '本项目开源仓库'
    },
    {
      title: 'Telegram群组',
      url: 'https://t.me/freevpschat',
      icon: '/icons/telegram.svg',
      description: '加入我们的讨论组'
    }
  ],
  categories: [
    {
      id: 'hot-vps',
      name: '近期热门',
      icon: '/icons/fire.svg',
      description: '近期备受关注的VPS服务商和热门资源'
    },
    {
      id: 'free-vps',
      name: '免费VPS&资源',
      icon: '/icons/gift.svg',
      description: '精选免费VPS资源'
    },
    {
      id: 'optimized-vps',
      name: '优化线路VPS',
      icon: '/icons/network.svg',
      description: '线路优化的VPS服务商'
    },
    {
      id: 'cheap-vps',
      name: '性价比VPS',
      icon: '/icons/dollar.svg',
      description: '价格在1刀1个月以内的性价比商家，今天是灵车，明天就可能是豪车，搏一搏，单车变摩托，别墅看大海。能月付就月付，*没有PayPal付款方式，不要买！！!*'
    },
    {
      id: 'performance-vps',
      name: '性能VPS',
      description: '提供高性能VPS服务的商家，适合对性能要求较高的用户',
      icon: '/icons/performance.svg'
    },
    {
      id: 'vps-tools',
      name: 'VPS工具',
      icon: '/icons/speed.svg',
      description: 'VPS常用工具&脚本'
    },
  ],
  navItems: [
    {
      id: 'racknerd',
      title: 'RackNerd',
      description: '美国大带宽VPS商家,支持支付宝',
      icon: '/icons/racknerd.svg',
      url: 'https://www.racknerd.com/',
      categoryId: 'cheap-vps',
    },
    {
      id: 'cloudcone',
      title: 'CloudCone',
      description: '性价比云服务器提供商,按小时计费',
      icon: '/icons/cloudcone.svg',
      url: 'https://cloudcone.com/',
      categoryId: 'cheap-vps',
    },
    {
      id: 'colocrossing',
      title: 'ColoCrossing',
      description: '美国老牌主机服务商,网络稳定',
      icon: '/icons/colocrossing.svg',
      url: 'https://www.colocrossing.com/',
      categoryId: 'cheap-vps',
    },
    {
        title: 'Cloudflare',
        description: '赛博菩萨，cdn，cf节点，cf优选IP以及优选域名，cf workers&pages各种业务，虽然2025政策有变，但是不影响自用，难度系数0',
        url: 'https://www.cloudflare.com',
        categoryId: 'free-vps',
        icon: '/icons/cloudflare.svg',
        id: 'cloudflare',
        guide: 'https://developers.cloudflare.com/workers/get-started/guide'
    },
    {
      title: 'Oracle Cloud',
      description: '重新定义永久免费，玄学ABC，小红卡5刀开卡送5刀申请龟壳大法，龟壳yyds，难度系数10，如果你很富，难度系数0',
      url: 'https://www.oracle.com/cloud/free/',
      categoryId: 'free-vps',
      icon: '/icons/oracle.svg',
      id: 'oracle-cloud',
      guide: 'https://example.com/oracle-guide'
    },
    {
      title: 'Google Cloud',
      description: 'Google Cloud Platform提供300美元免费额度，gmail安卓官方APP注册可以跳过手机验证，gcp年中出了一波不需要验卡可以注册免费体验gcp3个月，非常酸爽，现在依然可以验卡注册，难度系数8',
      url: 'https://cloud.google.com/',
      categoryId: 'free-vps',
      icon: '/icons/google-cloud.svg',
      id: 'google-cloud',
      guide: 'https://example.com/gcp-guide'
    },
    {
      title: 'AWS',
      description: '亚马逊云服务，全球最大的云计算平台之一，提供免费套餐包含EC2、S3等多种服务，新用户首年免费，难度系数2',
      url: 'https://aws.amazon.com/cn/',
      categoryId: 'free-vps',
      icon: '/icons/aws.svg',
      id: 'aws'
    },
    {
      title: 'Azure',
      description: '微软云服务平台，提供免费套餐包含虚拟机、存储等服务，新用户可获得200美元额度，难度系数2',
      url: 'https://azure.microsoft.com/zh-cn/',
      categoryId: 'free-vps',
      icon: '/icons/azure.svg',
      id: 'azure'
    },
    {
      title: 'Serv00',
      description: '10年免费主机，可以部署各种业务，节点，现在玄学注册，玄学封号，可以吃灰但是不能没有，难度系数0',
      url: 'https://serv00.com',
      categoryId: 'free-vps',
      icon: '/icons/server.svg',
      id: 'serv00',
      telegram: {
        group: 'https://t.me/serv00_group'
      }
    },
    {
      title: 'Vultr',
      description: '全球17个数据中心，最低月付$2.5起',
      url: 'https://www.vultr.com/',
      categoryId: 'free-vps',
      icon: '/icons/vultr.svg',
      id: 'vultr'
    },
    {
      title: 'DigitalOcean',
      description: 'edu邮箱注册github学生包，以及DO200刀一年，开了很多小鸡，流量随便跑，现在注册风控极高，难度系数8',
      url: 'https://www.digitalocean.com/',
      categoryId: 'free-vps',
      icon: '/icons/digitalocean.svg',
      id: 'digitalocean'
    },
    {
      title: 'Linode',
      description: 'Akamai旗下VPS服务商，性能稳定',
      url: 'https://www.linode.com/',
      categoryId: 'free-vps',
      icon: '/icons/linode.svg',
      id: 'linode'
    },
    {
      title: 'Alice',
      description: '为数不多的国人商家大善人，永久免费VPS，DNS解锁，家宽出口，短命的转发以及炒鸡市场，现在虽然需要kyc，但是不影响国人第一白票的地位，难度系数1',
      url: 'https://app.alice.ws/',
      categoryId: 'free-vps',
      icon: '/icons/alice.svg',
      telegram: {
        group: 'https://t.me/AS215355',
        channel: 'https://t.me/AS215355_NOC'
      },
      id: 'alice'
    },
    {
      title: 'Subreg',
      description: '捷克的域名注册商，提供免费的DNS解析服务和域名托管，免费域名，可托管cf，注册极其简单，以至于1w5脚本哥撸爆它导致续费需要收费，当时难度系数0',
      url: 'https://subreg.cz/en/',
      categoryId: 'free-vps',
      icon: '/icons/subreg.svg',
      id: 'subreg'
    },
    {
      title: 'Cock.li',
      description: '匿名邮箱，开放注册日期不定，注册极其简单，虽然经常挂掉以及红色预警，但不影响它在匿名邮箱界的地位，难度系数0',
      url: 'https://cock.li/',
      categoryId: 'free-vps',
      icon: '/icons/email.svg',
      id: 'cockli'
    },
    {
      title: 'DMIT',
      description: 'DMIT是一家成立于2016年的VPS服务商，提供CN2 GIA线路，以及香港、日本等地区的机房，适合中国大陆用户使用',
      url: 'https://www.dmit.io/',
      categoryId: 'optimized-vps',
      icon: '/icons/dmit.svg',
      id: 'dmit',
      telegram: {
        group: 'https://t.me/DMIT_IO_GROUP',
        channel: 'https://t.me/DMIT_IO'
      },
      products: [
        {
          productName: 'LAX.EB.INTRO $29.90 USD Annually',
          couponCode: null,
          cpu: '1 vCPU',
          memory: '1 GB RAM',
          disk: '10GB SSD Storage',
          traffic: '400GB Transfer',
          location: '美国 洛杉矶',
          additional: '线路 9929 cmin2',
          price: '$29.90 USD Annually',
          stock: 0,
          urls: {
            normal: 'https://www.dmit.io/cart.php?pid=231',
            aff: 'https://www.dmit.io/aff.php?aff=10284&pid=231'
          }
        },
        {
          productName: 'LAX.EB.WEE $39.90 USD Annually',
          couponCode: null,
          cpu: '1 vCPU',
          memory: '1 GB RAM',
          disk: '10GB SSD Storage',
          traffic: '800GB Transfer',
          location: '美国 LAX',
          additional: '亚洲优化带宽',
          price: '$39.90 USD Annually',
          stock: 1,
          urls: {
            normal: 'https://www.dmit.io/cart.php?pid=188',
            aff: 'https://www.dmit.io/aff.php?aff=10284&pid=188'
          }
        }
      ]
    },
    {
      title: 'BandwagonHost',
      description: '搬瓦工，老牌VPS服务商，提供CN2 GIA线路，以及香港、日本等地区的机房，性价比高',
      url: 'https://bandwagonhost.com/aff.php?aff=77315',
      categoryId: 'hot-vps',
      icon: '/icons/bwh.svg',
      id: 'bandwagonhost',
      products: [
        {
          productName: 'NODESEEK BIGGERBOX PRO $39USD Annually',
          couponCode: 'BWHCGLUKKB',
          cpu: '1x AMD',
          memory: '1024 MB RAM',
          disk: '20GB SSD RAID-10',
          traffic: '1000GB/月',
          location: '洛杉矶',
          additional: '回程: 电信CN2，移动联通CMIN2',
          price: '$39.00 USD Annually',
          stock: 1,
          urls: {
            normal: 'https://bandwagonhost.com/aff.php?pid=156',
            aff: 'https://bandwagonhost.com/aff.php?aff=77315&pid=156'
          }
        }
      ]
    },
    {
      title: 'Claw Cloud',
      description: '新加坡VPS服务商，提供优质的亚洲线路，适合中国大陆用户使用',
      url: 'https://claw.cloud/',
      categoryId: 'optimized-vps',
      icon: '/icons/claw.svg',
      id: 'claw'
    },
    {
      title: 'YXVM',
      description: '提供香港、日本等地区的VPS服务，线路优质，适合中国大陆用户使用',
      url: 'https://yxvm.com/',
      categoryId: 'optimized-vps',
      icon: '/icons/yxvm.svg',
      id: 'yxvm'
    },
    {
      title: 'ISIF Cloud',
      description: '提供多个数据中心的VPS服务，线路优质，支持支付宝付款',
      url: 'https://cloud.isif.net',
      categoryId: 'optimized-vps',
      icon: '/icons/isif.svg',
      id: 'isif'
    },
    {
      title: 'MassiveGrid',
      description: '提供便宜的VPS服务，支持支付宝付款，性价比不错，适合建站使用',
      url: 'https://www.massivegrid.com/',
      categoryId: 'cheap-vps',
      icon: '/icons/massivegrid.svg',
      id: 'massivegrid'
    },
    {
      title: 'EvosHosting',
      description: '性价比VPS服务商，提供多个数据中心选择，支持支付宝付款',
      url: 'https://www.evoshosting.com/',
      categoryId: 'cheap-vps',
      icon: '/icons/evos.svg',
      id: 'evoshosting'
    },
    {
      title: 'Dasabo',
      description: '性价比VPS服务商，提供香港、日本等亚洲机房，月付低至1刀',
      url: 'https://www.dasabo.com/',
      categoryId: 'cheap-vps',
      icon: '/icons/dasabo.svg',
      id: 'dasabo'
    },
    {
      title: 'Hetzner',
      description: '德国主机商，提供高性能VPS和独立服务器，性价比极高，支持支付宝',
      url: 'https://www.hetzner.com/',
      categoryId: 'performance-vps',
      icon: '/icons/hetzner.svg',
      id: 'hetzner'
    },
    {
      title: 'Netcup',
      description: '德国主机商，提供性能优秀的VPS服务，价格实惠，适合建站使用',
      url: 'https://www.netcup.com/en',
      categoryId: 'performance-vps',
      icon: '/icons/netcup.svg',
      id: 'netcup'
    },
    {
      title: 'OVHcloud',
      description: '法国最大的主机商，全球化布局，提供高性能云服务器和独立服务器',
      url: 'https://www.ovhcloud.com/asia/',
      categoryId: 'performance-vps',
      icon: '/icons/ovh.svg',
      id: 'ovh'
    },
    {
      title: 'Spartan Host',
      description: '美国主机商，提供高防VPS和独立服务器，支持支付宝，性能稳定',
      url: 'https://spartanhost.org/',
      categoryId: 'performance-vps',
      icon: '/icons/spartan.svg',
      id: 'spartan'
    },
    {
      title: 'GreenCloud',
      description: '提供Windows/Linux/MacOS VPS，硬件配置高端，支持支付宝',
      url: 'https://greencloudvps.com/',
      categoryId: 'performance-vps',
      icon: '/icons/greencloud.svg',
      id: 'greencloud'
    },
    {
      title: 'Speedtest',
      description: '知名网速测试工具，支持全球各地测速节点',
      url: 'https://www.speedtest.net/',
      categoryId: 'vps-tools',
      icon: '/icons/speedtest.svg',
      id: 'speedtest'
    },
    {
      title: 'Ping0',
      description: '支持全球 ping 测试、路由跟踪等网络诊断工具',
      url: 'https://ping0.cc/',
      categoryId: 'vps-tools',
      icon: '/icons/ping0.svg',
      id: 'ping0'
    },
    {
      title: 'ITdog',
      description: 'IT 狗在线工具箱，提供 ping、路由跟踪、端口扫描等多种网络工具',
      url: 'https://www.itdog.cn/',
      categoryId: 'vps-tools',
      icon: '/icons/itdog.svg',
      id: 'itdog'
    },
    {
      title: 'ECS',
      description: 'VPS融合怪测评脚本，支持全面的性能测试',
      url: 'https://github.com/spiritLHLS/ecs',
      categoryId: 'vps-tools',
      icon: '/icons/ecs.svg',
      id: 'ecs'
    },
    {
      title: '3x-ui',
      description: '支持多协议的 xray 面板，可视化管理',
      url: 'https://github.com/MHSanaei/3x-ui',
      categoryId: 'vps-tools',
      icon: '/icons/3xui.svg',
      id: '3xui'
    },
    {
      title: 'Aurora',
      description: '开源的多功能管理面板，支持多种协议',
      url: 'https://github.com/Aurora-Admin-Panel/deploy',
      categoryId: 'vps-tools',
      icon: '/icons/aurora.svg',
      id: 'aurora'
    },
    {
      title: 'WAP',
      description: '高性价比 VPS 服务',
      url: 'https://wap.ac',
      categoryId: 'cheap-vps',
      icon: '/icons/wap.svg',
      id: 'wap',
      products: [
        {
          productName: 'hk lxc',
          couponCode: null,
          cpu: '1',
          memory: '1g ram',
          disk: '10gb ssd',
          traffic: '1tb',
          portSpeed: '1000mbps (in & out)',
          location: 'hong kong',
          additional: '香港 LXC虚拟化',
          price: '$3.00 USD 每年',
          stock: 0,
          urls: {
            normal: 'https://wap.ac/aff.php?aff=0&pid=81',
            aff: 'https://wap.ac/aff.php?aff=0&pid=81',
          },
        },
      ],
    },
    {
      title: 'Nuyek',
      description: '新兴VPS服务商',
      url: 'https://nuyek.com/',
      categoryId: 'hot-vps',
      icon: '/icons/nuyek.svg',
      id: 'nuyek',
      products: [
        {
          productName: 'Highland Basic $7/year',
          couponCode: null,
          cpu: '1 vCPU Core',
          memory: '1GB DDR4 or Newer',
          disk: '10GB NVMe',
          traffic: '4TB',
          location: 'Highland, IL, USA',
          additional: 'IPv4 Address: 1 Included, IPv6 Address: 1 /56 IPv6 Subnet Included',
          price: '$7/year',
          stock: 0,
          urls: {
            normal: 'https://nuyek.com/shop/cart/add/40',
            aff: 'https://nuyek.com/shop/cart/add/40?aff=39'
          },
        },
        {
          productName: "Highland Ryzen 9950x Basic $11/year",
          couponCode: null,
          cpu: "1 Ryzen 9950x vCPU Core",
          memory: "1GB DDR5",
          disk: "15GB NVMe",
          traffic: "4TB",
          location: "Highland, IL, USA",
          additional: "IPv4 Address: 1 Included, IPv6 Address: 1 /56 IPv6 Subnet Included, Network Port: 1Gbps Shared",
          price: "$11/year",
          stock: 1,
          urls: {
            normal: "https://nuyek.com/shop/cart/add/50",
            aff: "https://nuyek.com/shop/cart/add/50?aff=39"
          }
        },
        {
          productName: "Highland Ryzen 9950x Pro $24/year",
          couponCode: null,
          cpu: "2 Ryzen 9950x vCPU Cores",
          memory: "4GB DDR5",
          disk: "50GB NVMe",
          traffic: "12TB",
          location: "Highland, IL, USA",
          additional: "IPv4 Address: 1 Included, IPv6 Address: 1 /56 IPv6 Subnet Included, Network Port: 1Gbps Shared",
          price: "$24/year",
          stock: 1,
          urls: {
            normal: "https://nuyek.com/shop/cart/add/52",
            aff: "https://nuyek.com/shop/cart/add/52?aff=39"
          }
        }
      ],
    },
    {
      title: 'VPS Town',
      description: '大带宽存储型产品，性价比高',
      url: 'https://vps.town/aff/IAGDYMBO',
      categoryId: 'hot-vps',
      icon: '/icons/vps-town.svg',
      id: 'vps-town',
      products: [
        {
          productName: '2C2G5T流量1T硬盘 ¥260/年+首年110设置费',
          couponCode: null,
          cpu: '2 vCPU Platinum 8160M 2.8Ghz',
          memory: '2 GiB RAM',
          disk: '10 GiB U.2 + 1 TiB Raid Z2',
          traffic: '5 TiB 双向计费',
          location: 'hk',
          additional: 'IPv6支持，10 Gbps DDoS防护，1.5 Gbps共享带宽',
          price: '¥370元/年',
          stock: 1,
          urls: {
            normal: 'https://vps.town/',
            aff: "https://vps.town/aff/IAGDYMBO"
          }
        }
      ]
    },
    {
      title: 'DeluxHost',
      description: '新兴VPS服务商，提供高性价比的VPS服务，无限流量',
      url: 'https://deluxhost.com/',
      categoryId: 'hot-vps',
      icon: '/icons/server.svg',
      id: 'deluxhost',
      products: [
        {
          productName: 'Special offert–OFFERT-1 €7/年',
          couponCode: null,
          cpu: '1 vCPU @ E5-2690v4',
          memory: '1GB RAM',
          disk: '20GB SSD',
          traffic: '不限 / 月（1Gbps端口）',
          location: 'Amsterdam',
          additional: '支持支付宝付款，KVM虚拟化',
          price: '€7/年',
          stock: 1,
          urls: {
            normal: 'https://billing.deluxhost.net/aff.php?pid=240&carttpl=lagom2',
            aff: 'https://billing.deluxhost.net/aff.php?aff=136&pid=240&carttpl=lagom2'
          }
        },
        {
          productName: 'Special offert–OFFERT-3 €12/年',
          couponCode: null,
          cpu: '2 vCPU @ E5-2690v4',
          memory: '4GB RAM',
          disk: '60GB SSD',
          traffic: '不限 / 月（10Gbps端口）',
          location: 'Amsterdam',
          additional: '支持支付宝付款，KVM虚拟化',
          price: '€12/年',
          stock: 1,
          urls: {
            normal: 'https://billing.deluxhost.net/aff.php?pid=242&carttpl=lagom2',
            aff: 'https://billing.deluxhost.net/aff.php?aff=136&pid=242&carttpl=lagom2'
          }
        },
        {
          productName: 'Special offert–OFFERT-4 €15/年',
          couponCode: null,
          cpu: '2 vCPU @ E5-2690v4',
          memory: '8GB RAM',
          disk: '80GB SSD',
          traffic: '不限 / 月（10Gbps端口）',
          location: 'Amsterdam',
          additional: '支持支付宝付款，KVM虚拟化',
          price: '€15/年',
          stock: 1,
          urls: {
            normal: 'https://billing.deluxhost.net/aff.php?pid=243&carttpl=lagom2',
            aff: 'https://billing.deluxhost.net/aff.php?aff=136&pid=243&carttpl=lagom2'
          }
        }
      ]
    },
  ]
};

// 类型定义
export type Category = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

type ProductInfo = {
  productName?: string;
  couponCode?: string | null;
  cpu: string;
  memory: string;
  disk: string;
  traffic: string;
  location: string;
  additional: string;
  price: string;
  stock: number;
  urls: {
    normal: string;
    aff?: string;
  };
}

export type NavItem = {
  title: string;
  description: string;
  url: string;
  categoryId: string;
  icon: string;
  id: string;
  telegram?: {
    group?: string;
    channel?: string;
  };
  guide?: string;
  products?: ProductInfo[];
};

export const categories = siteConfig.categories;
export const navItems = siteConfig.navItems;