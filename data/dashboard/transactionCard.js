import { ActiveTransaction, PublishIcon, WalletIcon } from '@/public/assets/dashboard/navBarIcon';
const transactionCard = [
  {
    backgroundColor: '#E8F0FB',
    icon: <ActiveTransaction />,
    title: 'Active Transaction',
    total: '12'
  },
  {
    backgroundColor: 'rgba(251, 54, 64, 0.15)',
    icon: <PublishIcon />,
    title: 'Inactive Transaction',
    total: '8'
  },
  {
    backgroundColor: 'rgba(243, 192, 0, 0.15)',
    icon: <WalletIcon />,
    title: 'Draft',
    total: '4'
  }
];
export default transactionCard;
