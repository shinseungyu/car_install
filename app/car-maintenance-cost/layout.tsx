import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '자동차 유지비 계산기 - 월 유지비 및 연 유지비 계산',
  description: '자동차 유지비 계산기로 월 유류비, 보험료, 자동차세를 포함한 실제 차량 유지비를 간편하게 계산해보세요.',
  keywords: ['자동차 유지비 계산기', '차량 유지비', '월 유지비', '연 유지비', '유류비 계산', '자동차세', '자동차 보험료'],
  alternates: { canonical: '/car-maintenance-cost' },
  openGraph: {
    title: '자동차 유지비 계산기 - 월·연 유지비 무료 계산',
    description: '월 유류비, 보험료, 자동차세까지 한번에 계산. 실제 차량 유지비를 확인해보세요.',
  },
}

export default function CarMaintenanceCostLayout({ children }: { children: React.ReactNode }) {
  return children
}
