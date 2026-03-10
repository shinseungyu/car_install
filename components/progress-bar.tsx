"use client"

import { useCalculatorStore } from "@/lib/calculator-store"
import { cn } from "@/lib/utils"

const steps = [
  { num: 1, label: "차종" },
  { num: 2, label: "할부조건" },
  { num: 3, label: "연봉" },
  { num: 4, label: "결과", icon: true },
]

export function ProgressBar() {
  const { currentStep, setStep, showResults } = useCalculatorStore()

  const handleClick = (stepNum: number) => {
    if (stepNum < currentStep || (showResults && stepNum <= 3)) {
      setStep(stepNum)
    }
  }

  return (
    <div className="flex items-center py-7">
      {steps.map((step, idx) => {
        const isDone = step.num < currentStep || (showResults && step.num <= 3)
        const isActive = step.num === currentStep && !showResults
        const isResult = step.num === 4 && showResults

        return (
          <div key={step.num} className="flex items-center flex-1 last:flex-none">
            <div
              className={cn(
                "flex flex-col items-center cursor-pointer",
                step.num > currentStep && !showResults && "cursor-default"
              )}
              onClick={() => handleClick(step.num)}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all",
                  isDone && "bg-primary border-primary text-primary-foreground",
                  isActive && "bg-card border-primary text-primary shadow-[0_0_0_4px_rgba(79,125,255,0.15)]",
                  isResult && "bg-primary border-primary text-primary-foreground",
                  !isDone && !isActive && !isResult && "bg-secondary border-border text-muted-foreground"
                )}
              >
                {step.icon ? "✦" : step.num}
              </div>
              <span
                className={cn(
                  "text-[10px] font-semibold tracking-wide mt-1.5 text-center",
                  isDone && "text-muted-foreground",
                  isActive && "text-primary",
                  isResult && "text-primary",
                  !isDone && !isActive && !isResult && "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
            </div>

            {idx < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 mx-2 -mt-6 transition-colors",
                  isDone ? "bg-primary" : "bg-border"
                )}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
