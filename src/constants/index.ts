import { CurrenciesConfigType, DirectionType, PriceTypeSort } from "./types";

export const listMenu = [
  {
      title: "Fitur",
      subItems: [
        {
          title: 'Harga Cryptocurrency',
          subTitle: 'Pantau harga Bitcoin dan aset crypto lainnya',
        },
        {
          title: 'Earn',
          subTitle: 'Simpan aset crypto, dapatkan bunga tiap jam',
        },
        {
          title: 'Biaya Transaksi',
          subTitle: 'Lihat biaya trading, tarik Rupiah, dan kirim aset crypto',
        },
        {
          title: 'Limit Trading Beli/Jual',
          subTitle: 'Ketahui jumlah minimum dan maksimum trading di Pintu',
        },
        {
          title: 'OTC',
          subTitle: 'Layanan personal dengan harga khusus untuk transaksi dengan jumlah besar',
        }
      ]
  },
  {
      title: "PTU",
      subItems: []
  },
  {
      title: "Edukasi",
      subItems: [
        {
          title: 'Tentang',
          subTitle: 'Jelajahi dunia crypto bersama Pintu',
        },
        {
          title: 'Pintu Academy',
          subTitle: 'Kumpulan artikel untuk bantu kamu memahami crypto dengan lebih gampang',
        },
        {
          title: 'FAQ',
          subTitle: 'Informasi seputar crypto dan cara menggunakan aplikasi Pintu',
        },
      ]
  },
  {
      title: "Ikuti Kami",
      subItems: [
        {
          title: 'Telegram',
          subTitle: '@pintuindonesia',
        },
        {
          title: 'Twitter',
          subTitle: '@pintuID',
        },
        {
          title: 'Instagram',
          subTitle: '@pintu_id',
        },
        {
          title: 'Youtube',
          subTitle: 'Pintu - Aplikasi Jual Beli Cryptocurrency',
        },
        {
          title: 'Facebook',
          subTitle: 'pintucrypto',
        },
        {
          title: 'Discord',
          subTitle: 'pintuindonesia',
        }
      ]
  },
  {
      title: "Blog & News",
      subItems: [
        {
          title: 'Pintu Blog',
          subTitle: 'Kumpulan artikel crypto, keuangan, dan informasi terbaru terkait Pintu.',
          icon: ''
        },
        {
          title: 'Pintu News',
          subTitle: 'Temukan update berita terkini tentang crypto, blockchain, hingga NFT!',
          icon: ''
        },
        {
          title: 'Pintu Press Kit',
          subTitle: 'Temukan logo resmi, foto, dan kumpulan press release Pintu untuk materi promosi di sini.',
          icon: ''
        },
      ]
  },
  {
      title: "Karier",
      subItems: [
        {
          title: 'Karier',
          subTitle: 'Temukan pekerjaan impianmu di sini.',
          icon: ''
        },
        {
          title: 'Karier Engineering',
          subTitle: 'Bergabung dengan tim engineering kami menciptakan platform blockchain yang canggih.',
          icon: ''
        },
      ]
  },
  {
      title: "Bahasa",
      subItems: [
        {
          title: 'Indonesia',
          subTitle: '',
        },
        {
          title: 'English',
          subTitle: '',
        }
      ]
  }
];

export const categories = [
  'Terbaru',
  'DeFi',
  'NFT/Gaming',
  'CEX',
  'DEX',
  'Layer-1',
  'Infrastructure',
  'Lending',
  'Layer-2',
  'Ekosistem Stablecoin'
];

export const currenciesConfig: CurrenciesConfigType = {
  idr: {
    symbol: 'Rp ',
    decimal: 3
  },
  dollar: {
    symbol: '$ ',
    decimal: 3
  },
};

export const MAX_DISPLAY_TOP_MOVERS = 6;

export const PRICE_TYPE: PriceTypeSort[] = [
  {
    value: 'latestPrice',
    text: 'Harga'
  },
  {
    value: 'day',
    text: '24 JAM',
  },
  {
    value: 'week',
    text: '1 MGG'
  },
  {
    value: 'month',
    text: '1 BLN'
  },
  {
    value: 'year',
    text: '1 THN'
  }
];

export const stepDirection: DirectionType[] = ['desc', 'asc'];
