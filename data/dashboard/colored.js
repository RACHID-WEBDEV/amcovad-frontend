import { ActiveTransaction, PublishIcon, WalletIcon } from '@/public/assets/dashboard/navBarIcon';
const activeData = [
  {
    backgroundColor: 'rgba(251, 54, 64, 0.15)',
    icon: <ActiveTransaction />,
    title: 'Active Transaction',
    total: '24'
  },
  {
    backgroundColor: '#E8F0FB',
    icon: <PublishIcon />,
    title: 'Published',
    total: '10'
  },
  {
    backgroundColor: 'rgba(243, 192, 0, 0.15)',
    icon: <WalletIcon />,
    title: 'Wallet',
    total: '24'
  }
];
export default activeData;
