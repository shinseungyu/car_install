export interface Car {
  id: string
  name: string
  price: number // 만원
  insurance: number // 연간 보험료 만원
  tax: number // 연간 자동차세 만원
  maintenance: number // 월 유지비 만원
  fuel: '가솔린' | '디젤' | '전기' | '하이브리드'
  popular?: boolean
}

export const CARS: Car[] = [
  { id: 'avante', name: '아반떼 (CN7)', price: 1990, insurance: 72, tax: 22, maintenance: 10, fuel: '가솔린', popular: true },
  { id: 'sonata', name: '쏘나타 디 엣지', price: 2830, insurance: 88, tax: 28, maintenance: 12, fuel: '가솔린' },
  { id: 'grandeur', name: '그랜저 (GN7)', price: 3790, insurance: 115, tax: 45, maintenance: 15, fuel: '가솔린', popular: true },
  { id: 'k5', name: 'K5 (DL3)', price: 2790, insurance: 85, tax: 28, maintenance: 12, fuel: '가솔린' },
  { id: 'k8', name: 'K8', price: 3750, insurance: 105, tax: 35, maintenance: 14, fuel: '가솔린' },
  { id: 'k9', name: 'K9', price: 5930, insurance: 145, tax: 65, maintenance: 20, fuel: '가솔린' },
  { id: 'sportage', name: '스포티지 (NQ5)', price: 2540, insurance: 80, tax: 28, maintenance: 13, fuel: '가솔린', popular: true },
  { id: 'tucson', name: '투싼', price: 2770, insurance: 82, tax: 28, maintenance: 13, fuel: '가솔린' },
  { id: 'santafe', name: '싼타페 (MX5)', price: 3550, insurance: 98, tax: 45, maintenance: 14, fuel: '가솔린' },
  { id: 'palisade', name: '팰리세이드', price: 3900, insurance: 115, tax: 65, maintenance: 16, fuel: '가솔린' },
  { id: 'staria', name: '스타리아', price: 2800, insurance: 90, tax: 40, maintenance: 14, fuel: '디젤' },
  { id: 'carnival', name: '더 뉴 카니발', price: 3470, insurance: 105, tax: 65, maintenance: 15, fuel: '가솔린', popular: true },
  { id: 'ioniq6', name: '아이오닉6', price: 4690, insurance: 110, tax: 13, maintenance: 8, fuel: '전기' },
  { id: 'ioniq5', name: '아이오닉5 (PE)', price: 4700, insurance: 115, tax: 13, maintenance: 8, fuel: '전기', popular: true },
  { id: 'ev6', name: 'EV6 (PE)', price: 4800, insurance: 115, tax: 13, maintenance: 8, fuel: '전기' },
  { id: 'ev9', name: 'EV9', price: 7330, insurance: 155, tax: 13, maintenance: 10, fuel: '전기' },
  { id: 'model3', name: '테슬라 모델3 RWD', price: 5199, insurance: 125, tax: 13, maintenance: 7, fuel: '전기', popular: true },
  { id: 'modely', name: '테슬라 모델Y LongRange', price: 5999, insurance: 135, tax: 13, maintenance: 7, fuel: '전기', popular: true },
  { id: 'ray', name: 'The 2024 레이', price: 1330, insurance: 52, tax: 8, maintenance: 7, fuel: '가솔린' },
  { id: 'morning', name: '더 뉴 모닝', price: 1290, insurance: 48, tax: 8, maintenance: 7, fuel: '가솔린' },
  { id: 'casper', name: '캐스퍼', price: 1375, insurance: 55, tax: 8, maintenance: 8, fuel: '가솔린' },
  { id: 'seltos', name: '더 뉴 셀토스', price: 2090, insurance: 78, tax: 28, maintenance: 11, fuel: '가솔린' },
  { id: 'bmw3', name: 'BMW 320i', price: 5700, insurance: 150, tax: 52, maintenance: 25, fuel: '가솔린' },
  { id: 'benz_c', name: '벤츠 C200', price: 6100, insurance: 160, tax: 52, maintenance: 28, fuel: '가솔린' },
  { id: 'g80', name: '제네시스 G80 (RE)', price: 5890, insurance: 145, tax: 65, maintenance: 22, fuel: '가솔린' },
  { id: 'gv80', name: '제네시스 GV80 (RE)', price: 6930, insurance: 155, tax: 65, maintenance: 22, fuel: '가솔린' },
  { id: 'niro_hb', name: '니로 하이브리드', price: 2710, insurance: 75, tax: 22, maintenance: 9, fuel: '하이브리드', popular: true },
  { id: 'sorento_hb', name: '쏘렌토 하이브리드', price: 3780, insurance: 105, tax: 28, maintenance: 12, fuel: '하이브리드', popular: true },
  { id: 'avante_hb', name: '아반떼 하이브리드', price: 2480, insurance: 78, tax: 22, maintenance: 9, fuel: '하이브리드' },
]

export const FUEL_STYLES: Record<Car['fuel'], string> = {
  '가솔린': 'bg-primary/10 text-primary border-primary/20',
  '디젤': 'bg-warning/10 text-warning border-warning/20',
  '전기': 'bg-success/10 text-success border-success/20',
  '하이브리드': 'bg-chart-5/10 text-chart-5 border-chart-5/20',
}

// 원리금 균등상환 월 납입금 계산
export function calculateMonthlyPayment(principal: number, annualRate: number, months: number): number {
  if (annualRate === 0) return principal / months
  const monthlyRate = annualRate / 100 / 12
  return principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1)
}

// 상환 일정표 계산
export interface AmortizationRow {
  month: number
  payment: number
  principal: number
  interest: number
  balance: number
}

export function calculateAmortizationSchedule(
  principal: number,
  annualRate: number,
  months: number
): AmortizationRow[] {
  const monthlyRate = annualRate / 100 / 12
  const payment = calculateMonthlyPayment(principal, annualRate, months)
  let balance = principal

  return Array.from({ length: months }, (_, i) => {
    const interest = balance * monthlyRate
    const principalPart = payment - interest
    balance -= principalPart

    return {
      month: i + 1,
      payment: Math.round(payment),
      principal: Math.round(principalPart),
      interest: Math.round(interest),
      balance: Math.max(0, Math.round(balance)),
    }
  })
}

// 차량가 기반 비용 추정
export function estimateCosts(price: number) {
  return {
    insurance: price * 0.022 / 12,
    tax: price * 0.006 / 12,
    maintenance: price < 2000 ? 8 : price < 4000 ? 12 : 18,
  }
}

// 숫자 포맷팅
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('ko-KR').format(Math.round(value))
}
