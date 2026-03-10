import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '자동차 취득세·등록세 계산기',
  description: '신차·중고차 취득세 및 등록비용을 쉽게 계산하세요. 차량 가격별 취득세율과 공채 매입 비용, 번호판 비용까지 한번에 확인 가능합니다.',
  alternates: { canonical: '/registration-tax' },
  openGraph: {
    title: '자동차 취득세·등록세 계산기',
    description: '신차·중고차 취득세 및 등록비용을 쉽게 계산하세요. 차량 가격별 취득세율과 공채·번호판 비용까지 한번에 확인하세요.',
  },
}

export default function RegistrationTaxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
