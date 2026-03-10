import { Car, ChevronLeft, CreditCard, Info } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "중고차 할부 이자",
  description: "중고차 할부 금리 비교 및 이자 계산법 안내. 신차보다 높은 중고차 금리를 현명하게 선택하는 방법을 확인하세요.",
  alternates: { canonical: '/used-car-interest' },
  openGraph: {
    title: "중고차 할부 이자 | 자동차 할부 계산기",
    description: "중고차 할부 금리 비교 및 이자 계산법 안내. 신차보다 높은 중고차 금리를 현명하게 선택하는 방법을 확인하세요.",
  },
}

export default function UsedCarInterestPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-4 py-12 md:py-20">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors mb-10"
        >
          <ChevronLeft className="w-4 h-4" />
          메인페이지로 돌아가기
        </Link>

        <section className="mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4">
            <CreditCard className="w-3 h-3" />
            <span>USED CAR LOAN GUIDE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
            신차보다 높은 중고차 이자,<br />
            <span className="text-primary italic">어떻게 줄일 수 있을까요?</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            중고차 할부는 리스크 관리를 위해 신차보다 기본 금리가 높게 측정됩니다. 
            하지만 신용 등급과 대출 상품에 따라 최대 5% 이상의 금리 차이가 발생할 수 있습니다.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="premium-card p-10 rounded-3xl border border-border bg-white shadow-sm hover:border-primary/20 transition-all">
            <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
              <Info className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">왜 중고차 금리가 더 높나요?</h2>
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary font-bold">01.</span>
                <span>담보 가치 하락 속도가 신차보다 빠르기 때문입니다.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">02.</span>
                <span>차량 상태에 대한 리스크가 대출 금리에 반영됩니다.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary font-bold">03.</span>
                <span>제2금융권 상품이 주를 이루기 때문입니다.</span>
              </li>
            </ul>
          </div>

          <div className="premium-card p-10 rounded-3xl border border-border bg-white shadow-sm hover:border-primary/20 transition-all">
            <div className="h-14 w-14 bg-success/10 rounded-2xl flex items-center justify-center mb-8">
              <ChevronRight className="h-7 w-7 text-success" />
            </div>
            <h2 className="text-2xl font-bold mb-4">할부 이자 절약 꿀팁</h2>
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              <li className="flex gap-2">
                <span className="text-success font-bold font-mono">STEP 1.</span>
                <span>제1금융권(은행) 대출 가능 여부를 먼저 확인하세요.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-success font-bold font-mono">STEP 2.</span>
                <span>카드사 다이렉트 할부 상품을 비교해 보세요.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-success font-bold font-mono">STEP 3.</span>
                <span>가급적 할부 기간을 48개월 이내로 설정하세요.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Section: 금리 결정 요인 */}
        <section className="mb-20 space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">금리 결정 요인</p>
          <h2 className="text-2xl font-bold text-foreground">중고차 할부 금리, 무엇이 결정하나요?</h2>
          <p className="text-muted-foreground leading-relaxed">단순히 운이 아니라 명확한 기준에 의해 금리가 산정됩니다. 아래 세 가지 요소를 미리 파악하면 불필요한 이자를 줄일 수 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border border-border bg-white shadow-sm">
              <p className="text-3xl font-black text-primary italic mb-3">01</p>
              <h3 className="text-lg font-bold text-foreground mb-2">신용점수 (NICE·KCB)</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 800점 이상 → 연 4~7% (1금융권 가능)</li>
                <li>• 700~799점 → 연 7~10% (캐피탈 우량)</li>
                <li>• 600~699점 → 연 10~14% (캐피탈 일반)</li>
                <li>• 600점 미만 → 연 14% 이상 또는 거절</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-white shadow-sm">
              <p className="text-3xl font-black text-primary italic mb-3">02</p>
              <h3 className="text-lg font-bold text-foreground mb-2">차량 연식·주행거리</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 3년 이내 → 리스크 낮아 금리 유리</li>
                <li>• 5~7년 → 담보 가치 하락, 금리 상승</li>
                <li>• 10년 이상·고주행 → 일부 금융사 거절</li>
                <li>• 국산차 vs 수입차 → 감가상각 속도 다름</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-white shadow-sm">
              <p className="text-3xl font-black text-primary italic mb-3">03</p>
              <h3 className="text-lg font-bold text-foreground mb-2">할부 기간</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 36개월 → 월 납입 높지만 총이자 최소</li>
                <li>• 48개월 → 부담과 이자의 균형점</li>
                <li>• 60개월 → 월 납입 낮지만 이자 급증</li>
                <li>• 72개월 이상 → 잔존가치 역전 위험</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: 1금융권 vs 2금융권 */}
        <section className="mb-20 space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">금융권 비교</p>
          <h2 className="text-2xl font-bold text-foreground">제1금융권 vs 제2금융권, 어디서 빌려야 할까요?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-foreground/10">
                  <th className="py-3 pr-6 font-bold text-foreground w-36">구분</th>
                  <th className="py-3 pr-6 font-bold text-foreground">제1금융권 (은행)</th>
                  <th className="py-3 font-bold text-foreground">제2금융권 (캐피탈·카드사)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">대표 상품</td>
                  <td className="py-3 pr-6">신한 마이카론, 우리 드림카론, 국민 오토론</td>
                  <td className="py-3">현대캐피탈, KB캐피탈, 롯데·삼성카드 할부</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">평균 금리</td>
                  <td className="py-3 pr-6 text-success font-semibold">연 4~7%</td>
                  <td className="py-3 text-destructive font-semibold">연 7~14%</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">심사 기준</td>
                  <td className="py-3 pr-6">까다로움 — 신용점수·소득 증빙 필수</td>
                  <td className="py-3">상대적으로 유연 — 빠른 승인 가능</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">한도</td>
                  <td className="py-3 pr-6">차량 가액 80~90% 이내</td>
                  <td className="py-3">차량 가액 100% 가능한 경우도 있음</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">추천 대상</td>
                  <td className="py-3 pr-6">신용점수 700점 이상, 소득 증빙 가능자</td>
                  <td className="py-3">급한 승인이 필요하거나 신용점수가 낮은 경우</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">※ 금리는 2025~2026년 시장 평균 기준이며, 개인 신용도·금융사 정책에 따라 달라집니다.</p>
        </section>

        {/* Section: 이자 계산 예시 */}
        <section className="mb-20 space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">이자 계산 공식</p>
          <h2 className="text-2xl font-bold text-foreground">중고차 할부 이자 계산 예시</h2>
          <p className="text-muted-foreground leading-relaxed">원리금 균등 상환 방식 기준 — <strong className="text-foreground">대출 원금 2,000만 원, 연 7% 금리</strong> 조건으로 기간별 비교입니다.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-foreground/10">
                  <th className="py-3 pr-6 font-bold text-foreground">할부 기간</th>
                  <th className="py-3 pr-6 font-bold text-foreground">월 납입금</th>
                  <th className="py-3 pr-6 font-bold text-foreground">총 납입액</th>
                  <th className="py-3 font-bold text-foreground">총 이자</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">36개월</td>
                  <td className="py-3 pr-6">약 617,000원</td>
                  <td className="py-3 pr-6">약 2,221만 원</td>
                  <td className="py-3 text-success font-semibold">약 221만 원</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">48개월</td>
                  <td className="py-3 pr-6">약 478,000원</td>
                  <td className="py-3 pr-6">약 2,294만 원</td>
                  <td className="py-3">약 294만 원</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">60개월</td>
                  <td className="py-3 pr-6">약 396,000원</td>
                  <td className="py-3 pr-6">약 2,376만 원</td>
                  <td className="py-3">약 376만 원</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">72개월</td>
                  <td className="py-3 pr-6">약 341,000원</td>
                  <td className="py-3 pr-6">약 2,455만 원</td>
                  <td className="py-3 text-destructive font-semibold">약 455만 원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">※ 36개월 대비 72개월은 이자만 <strong className="text-foreground">234만 원 더</strong> 납부하게 됩니다. 월 부담을 줄이더라도 장기 할부의 총 비용을 반드시 확인하세요.</p>
        </section>

        {/* Section: 이자 절약 꿀팁 */}
        <section className="mb-20 space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">이자 절약 전략</p>
          <h2 className="text-2xl font-bold text-foreground">중고차 할부 이자를 줄이는 3가지 꿀팁</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-6 p-8 rounded-2xl border border-border bg-white shadow-sm">
              <span className="text-2xl font-black text-primary italic shrink-0">TIP 1</span>
              <div>
                <h3 className="font-bold text-foreground mb-1">선수금 비중을 최대한 높이세요</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">대출 원금이 줄면 이자 총액도 비례해 줄어듭니다. 2,000만 원 차량 기준 선수금을 300만 원에서 600만 원으로 늘리면 총 이자가 60개월 기준 약 56만 원 절감됩니다. 위 계산기에서 선수금을 직접 조정해 비교해 보세요.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-8 rounded-2xl border border-border bg-white shadow-sm">
              <span className="text-2xl font-black text-primary italic shrink-0">TIP 2</span>
              <div>
                <h3 className="font-bold text-foreground mb-1">금리인하요구권을 적극 활용하세요</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">대출 이후 승진, 이직, 소득 증가, 신용점수 상승 등 재무 상태가 개선됐다면 금융사에 금리인하를 요구할 수 있는 법적 권리입니다. 성공 시 0.5~2%p 인하 사례도 많습니다. 대출 후 6개월~1년 뒤 반드시 시도해 보세요.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-8 rounded-2xl border border-border bg-white shadow-sm">
              <span className="text-2xl font-black text-primary italic shrink-0">TIP 3</span>
              <div>
                <h3 className="font-bold text-foreground mb-1">카드사 다이렉트 할부 상품을 비교하세요</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">딜러를 통한 캐피탈 연계 할부는 중간 수수료가 포함돼 금리가 높아지는 경우가 많습니다. 삼성·롯데·현대 카드사의 다이렉트 자동차 할부 상품을 직접 비교하면 같은 조건에서 1~3%p 낮은 금리를 찾을 수 있습니다.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-foreground text-background rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black mb-6">나에게 맞는 중고차 대출 찾기</h2>
            <p className="text-background/70 mb-10 max-w-xl mx-auto">
              지금 바로 할부 계산기로 예상 월 납입금을 확인하고,<br />
              내 연봉에 가장 적합한 중고차 할부 한도를 체크해 보세요.
            </p>
            <Link 
              href="/" 
              className="px-12 py-4 bg-primary text-white rounded-2xl font-bold text-xl hover:scale-105 active:scale-100 transition-all inline-block shadow-lg shadow-primary/25"
            >
              지금 계산해보기
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6"/>
    </svg>
  )
}
