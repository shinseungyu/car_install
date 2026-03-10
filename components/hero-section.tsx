"use client"

export function HeroSection() {
  return (
    <div className="py-14 text-center">
      <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary text-sm font-bold tracking-widest px-4 py-2 rounded-full mb-5">
        AUTO LOAN CALCULATOR
      </div>
      <h1 className="font-[var(--font-bebas-neue)] text-[clamp(52px,10vw,90px)] leading-[0.92] tracking-wide mb-4">
        자동차
        <br />
        <span className="text-primary">할부계산기</span>
      </h1>
      <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
        월 납입금만 보면 실제 유지비를 놓치기 쉽습니다.
        <br />
        보험·세금·유지비까지 합산한 <strong className="text-foreground">진짜 월 지출</strong>을 확인하세요.
      </p>
    </div>
  )
}
