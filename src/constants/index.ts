import { CurrenciesConfigType } from "./types";

export const listMenu = [
  {
      title: "Fitur",
      subItems: [
        {
          title: 'Harga Cryptocurrency',
          subTitle: 'Pantau harga Bitcoin dan aset crypto lainnya',
          icon: 'akjsdklas'
        },
        {
          title: 'Earn',
          subTitle: 'Simpan aset crypto, dapatkan bunga tiap jam',
          icon: 'akjsdklas'
        },
        {
          title: 'Biaya Transaksi',
          subTitle: 'Lihat biaya trading, tarik Rupiah, dan kirim aset crypto',
          icon: 'akjsdklas'
        },
        {
          title: 'Limit Trading Beli/Jual',
          subTitle: 'Ketahui jumlah minimum dan maksimum trading di Pintu',
          icon: 'akjsdklas'
        },
        {
          title: 'OTC',
          subTitle: 'Layanan personal dengan harga khusus untuk transaksi dengan jumlah besar',
          icon: 'akjsdklas'
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
          title: 'Harga',
          subTitle: 'SubTitle',
          icon: 'akjsdklas'
        },
        {
          title: 'Harga',
          subTitle: 'SubTitle',
          icon: 'akjsdklas'
        },
        {
          title: 'Harga',
          subTitle: 'SubTitle',
          icon: 'akjsdklas'
        },
        {
          title: 'Harga',
          subTitle: 'SubTitle',
          icon: 'akjsdklas'
        }
      ]
  },
  {
      title: "Ikuti Kami",
      subItems: [
        {
          title: 'Harga',
          subTitle: 'SubTitle',
          icon: 'akjsdklas'
        },
        {
          title: 'Harga',
          subTitle: 'SubTitle',
          icon: 'akjsdklas'
        },
        {
          title: 'Harga',
          subTitle: 'SubTitle',
          icon: 'akjsdklas'
        },
        {
          title: 'Harga',
          subTitle: 'SubTitle',
          icon: 'akjsdklas'
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
          icon: 'akjsdklas'
        },
        {
          title: 'English',
          subTitle: '',
          icon: 'akjsdklas'
        }
      ]
  }
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