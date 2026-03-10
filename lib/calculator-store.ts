import { create } from 'zustand'
import { Car, calculateMonthlyPayment, calculateAmortizationSchedule, estimateCosts, AmortizationRow } from './car-data'

interface CalculatorState {
  // Step management
  currentStep: number
  setStep: (step: number) => void
  nextStep: () => void
  
  // Step 1: Car selection
  selectedCar: Car | null
  setSelectedCar: (car: Car | null) => void
  
  // Step 2: Loan conditions
  carPrice: number
  setCarPrice: (price: number) => void
  downPayment: number
  setDownPayment: (payment: number) => void
  downPaymentPercent: number
  setDownPaymentPercent: (percent: number) => void
  interestRate: number
  setInterestRate: (rate: number) => void
  loanMonths: number
  setLoanMonths: (months: number) => void
  
  // Step 3: Income
  annualSalary: number
  setAnnualSalary: (salary: number) => void
  extraCost: number
  setExtraCost: (cost: number) => void
  
  // Results
  showResults: boolean
  setShowResults: (show: boolean) => void
  
  // Calculations
  getMonthlyPayment: () => number
  getTotalPayment: () => number
  getTotalInterest: () => number
  getMonthlyInsurance: () => number
  getMonthlyTax: () => number
  getMonthlyMaintenance: () => number
  getTotalMonthlyExpense: () => number
  getIncomeRatio: () => number
  getVerdict: () => { status: 'safe' | 'warn' | 'danger'; title: string; desc: string }
  getAmortizationSchedule: () => AmortizationRow[]
  
  // Actions
  reset: () => void
  applyCarData: (car: Car) => void
}

const initialState = {
  currentStep: 1,
  selectedCar: null,
  carPrice: 0,
  downPayment: 0,
  downPaymentPercent: 20,
  interestRate: 6.5,
  loanMonths: 36,
  annualSalary: 0,
  extraCost: 0,
  showResults: false,
}

export const useCalculatorStore = create<CalculatorState>((set, get) => ({
  ...initialState,
  
  setStep: (step) => set({ currentStep: step }),
  nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, 4) })),
  
  setSelectedCar: (car) => set({ selectedCar: car }),
  
  setCarPrice: (price) => {
    const percent = get().downPaymentPercent
    set({ 
      carPrice: price,
      downPayment: Math.round(price * percent / 100)
    })
  },
  
  setDownPayment: (payment) => {
    const price = get().carPrice
    set({ 
      downPayment: payment,
      downPaymentPercent: price > 0 ? Math.round(payment / price * 100) : 20
    })
  },
  
  setDownPaymentPercent: (percent) => {
    const price = get().carPrice
    set({
      downPaymentPercent: percent,
      downPayment: Math.round(price * percent / 100)
    })
  },
  
  setInterestRate: (rate) => set({ interestRate: rate }),
  setLoanMonths: (months) => set({ loanMonths: months }),
  setAnnualSalary: (salary) => set({ annualSalary: salary }),
  setExtraCost: (cost) => set({ extraCost: cost }),
  setShowResults: (show) => set({ showResults: show }),
  
  getMonthlyPayment: () => {
    const { carPrice, downPayment, interestRate, loanMonths } = get()
    const principal = carPrice - downPayment
    if (principal <= 0) return 0
    return calculateMonthlyPayment(principal, interestRate, loanMonths)
  },
  
  getTotalPayment: () => {
    const { loanMonths } = get()
    return get().getMonthlyPayment() * loanMonths
  },
  
  getTotalInterest: () => {
    const { carPrice, downPayment } = get()
    const principal = carPrice - downPayment
    return get().getTotalPayment() - principal
  },
  
  getMonthlyInsurance: () => {
    const { selectedCar, carPrice } = get()
    if (selectedCar) return selectedCar.insurance / 12
    if (carPrice > 0) return estimateCosts(carPrice).insurance
    return 0
  },
  
  getMonthlyTax: () => {
    const { selectedCar, carPrice } = get()
    if (selectedCar) return selectedCar.tax / 12
    if (carPrice > 0) return estimateCosts(carPrice).tax
    return 0
  },
  
  getMonthlyMaintenance: () => {
    const { selectedCar, carPrice } = get()
    if (selectedCar) return selectedCar.maintenance
    if (carPrice > 0) return estimateCosts(carPrice).maintenance
    return 0
  },
  
  getTotalMonthlyExpense: () => {
    const { extraCost } = get()
    return (
      get().getMonthlyPayment() +
      get().getMonthlyInsurance() +
      get().getMonthlyTax() +
      get().getMonthlyMaintenance() +
      extraCost
    )
  },
  
  getIncomeRatio: () => {
    const { annualSalary } = get()
    if (annualSalary <= 0) return 0
    const monthlyIncome = annualSalary / 12
    return (get().getTotalMonthlyExpense() / monthlyIncome) * 100
  },
  
  getVerdict: () => {
    const { annualSalary, selectedCar } = get()
    const ratio = get().getIncomeRatio()
    const carName = selectedCar?.name || '이 차'
    const totalExpense = get().getTotalMonthlyExpense()
    
    if (annualSalary <= 0) {
      return {
        status: 'warn' as const,
        title: '연봉 미입력 - 월 지출만 표시',
        desc: `월 총 지출은 ${Math.round(totalExpense).toLocaleString()}만원입니다. 연봉을 입력하면 상세 분석이 가능합니다.`
      }
    }
    
    if (ratio < 20) {
      return {
        status: 'safe' as const,
        title: '안전! 구매 추천',
        desc: `월 소득의 ${ratio.toFixed(1)}%로 ${carName}을(를) 유지할 수 있습니다. 재정적으로 여유 있는 선택입니다.`
      }
    }
    
    if (ratio < 30) {
      return {
        status: 'warn' as const,
        title: '주의 - 다소 부담스러운 수준',
        desc: `월 소득의 ${ratio.toFixed(1)}%가 자동차에 나갑니다. 선수금을 높이거나 할부 기간을 늘려보세요.`
      }
    }
    
      return {
        status: 'danger' as const,
        title: `유지비 부담 위험! ${carName} 무리입니다`,
      desc: `월 소득의 ${ratio.toFixed(1)}%가 자동차 지출입니다. 전문가 권장(20%) 기준을 크게 초과합니다.`
    }
  },
  
  getAmortizationSchedule: () => {
    const { carPrice, downPayment, interestRate, loanMonths } = get()
    const principal = carPrice - downPayment
    if (principal <= 0) return []
    return calculateAmortizationSchedule(principal, interestRate, loanMonths)
  },
  
  reset: () => set({ ...initialState }),
  
  applyCarData: (car) => {
    const downPayment = Math.round(car.price * 0.2)
    set({
      selectedCar: car,
      carPrice: car.price,
      downPayment,
      downPaymentPercent: 20,
    })
  },
}))
