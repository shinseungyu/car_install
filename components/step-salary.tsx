"use client"

import { useCalculatorStore } from "@/lib/calculator-store"

export function StepSalary() {
  const {
    currentStep,
    annualSalary,
    setAnnualSalary,
    extraCost,
    setExtraCost,
    setStep,
    setShowResults,
  } = useCalculatorStore()

  const handleCalculate = () => {
    setShowResults(true)
    setStep(4)
  }

  if (currentStep !== 3) return null

  return (
    <div className="bg-card border border-border rounded-[14px] p-6 animate-fade-in">
      <div className="flex items-center gap-2.5 mb-5">
        <span className="w-[22px] h-[22px] rounded-full bg-primary/15 text-primary text-[11px] font-black flex items-center justify-center">
          3
        </span>
        <span className="text-[13px] font-bold tracking-wide text-muted-foreground">내 연봉 입력</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Annual Salary */}
        <div className="flex flex-col gap-2">
          <label className="text-[11px] font-bold tracking-wide text-muted-foreground uppercase">
            세전 연봉
          </label>
          <div className="relative">
            <input
              type="number"
              value={annualSalary || ""}
              onChange={(e) => setAnnualSalary(Number(e.target.value) || 0)}
              placeholder="예) 4500"
              className="w-full bg-secondary border-[1.5px] border-border text-foreground py-3.5 px-4 pr-12 rounded-[10px] text-[15px] font-semibold placeholder:text-muted-foreground focus:border-primary focus:ring-[3px] focus:ring-primary/10 outline-none transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">
              만원
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground">구매 적정성 분석에 사용됩니다</p>
        </div>

        {/* Extra Cost */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center justify-between text-[11px] font-bold tracking-wide text-muted-foreground uppercase">
            월 기타 지출
            <span className="text-primary normal-case font-medium">기름·주차 등</span>
          </label>
          <div className="relative">
            <input
              type="number"
              value={extraCost || ""}
              onChange={(e) => setExtraCost(Number(e.target.value) || 0)}
              placeholder="예) 20"
              className="w-full bg-secondary border-[1.5px] border-border text-foreground py-3.5 px-4 pr-12 rounded-[10px] text-[15px] font-semibold placeholder:text-muted-foreground focus:border-primary focus:ring-[3px] focus:ring-primary/10 outline-none transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground">
              만원
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground">연봉 미입력 시 생략 가능</p>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full mt-4 py-5 bg-primary text-primary-foreground rounded-xl font-[var(--font-bebas-neue)] text-2xl tracking-widest hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(99,102,241,0.25)] active:translate-y-0 transition-all flex items-center justify-center gap-2"
      >
        🔍 구매 적정성 분석 시작
      </button>
    </div>
  )
}
