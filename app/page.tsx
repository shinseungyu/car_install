"use client"

import { HeroSection } from "@/components/hero-section"

import { ProgressBar } from "@/components/progress-bar"
import { StepCarSelect, Step1Summary } from "@/components/step-car-select"
import { StepLoanConditions, Step2Summary } from "@/components/step-loan-conditions"
import { StepSalary } from "@/components/step-salary"
import { ResultsSection } from "@/components/results-section"
import { BoardSection } from "@/components/board-section"

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '선수금(계약금)을 많이 내면 금리도 낮아지나요?',
      acceptedAnswer: { '@type': 'Answer', text: '금리 자체가 낮아지지는 않지만, 대출 원금이 줄어 총 이자 부담은 확연히 줄어듭니다. 선수금 500만 원 추가만으로 총 이자가 30만 원 이상 절감되는 경우도 많습니다.' },
    },
    {
      '@type': 'Question',
      name: '신차와 중고차의 할부 금리 차이는 얼마나 되나요?',
      acceptedAnswer: { '@type': 'Answer', text: '신차 캐피탈 기준 연 3~6%, 중고차는 연 7~14%로 크게 높습니다. 가능하다면 은행(1금융권) 자동차 대출(연 4~7%)을 먼저 알아보는 것이 이자 절감에 절대적으로 유리합니다.' },
    },
    {
      '@type': 'Question',
      name: '보험료는 어떻게 계산에 반영되나요?',
      acceptedAnswer: { '@type': 'Answer', text: '연령과 차량 유형을 입력하면 업계 평균 보험료를 추정해 월 유지비에 자동으로 반영됩니다. 실제 보험료는 운전 경력, 사고 이력에 따라 다를 수 있으므로 참고용으로 활용하세요.' },
    },
    {
      '@type': 'Question',
      name: '자동차 할부 계산기는 어떻게 사용하나요?',
      acceptedAnswer: { '@type': 'Answer', text: '①차량 가격·선수금 입력 → ②할부 기간·금리 선택 → ③연봉 입력 순서로 진행하면 월 납입금, 총 이자, 월 유지비, 적정성 진단까지 자동으로 계산됩니다. 모든 기능은 무료로 이용할 수 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '60개월과 72개월 할부 중 어느 것이 유리한가요?',
      acceptedAnswer: { '@type': 'Answer', text: '월 납입금 부담은 72개월이 낮지만, 총 이자는 크게 늘어납니다. 예를 들어 2,000만 원을 연 6%로 빌릴 경우, 60개월이면 총 이자 약 320만 원, 72개월은 약 387만 원으로 67만 원 차이가 납니다. 신차라면 48~60개월, 중고차라면 36~48개월을 권장합니다.' },
    },
    {
      '@type': 'Question',
      name: '자동차 할부 중도상환 수수료는 얼마인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '캐피탈사 기준 중도상환 수수료는 잔여 원금의 1~2% 수준입니다. 단, 은행 자동차 대출은 수수료가 없거나 0.5% 이하로 낮은 경우가 많습니다. 중도 상환을 고려한다면 처음부터 은행 대출을 선택하는 것이 유리합니다.' },
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="max-w-[1200px] mx-auto px-4 pb-24">
        <HeroSection />
        <ProgressBar />
        
        <div className="space-y-3">
          {/* Step 1 */}
          <StepCarSelect />
          <Step1Summary />
          
          {/* Step 2 */}
          <StepLoanConditions />
          <Step2Summary />
          
          {/* Step 3 */}
          <StepSalary />
          
          {/* Results */}
          <ResultsSection />
        </div>

        {/* SEO Text Section */}
        <section className="mt-24 mb-8">
          <div className="space-y-16 text-muted-foreground leading-relaxed">

            {/* Section 1 */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">자동차 할부 계산기 가이드</p>
              <h2 className="text-2xl font-bold text-foreground mb-4">중고차 할부, 왜 미리 계산해야 할까요?</h2>
              <p className="mb-4">중고차는 신차보다 금리 변동폭이 큽니다. 딜러가 제시하는 월 납입금만 믿고 계약했다가 <strong className="text-foreground">높은 이자율(10~15%)</strong>에 당황하는 경우가 많습니다. CarPayPro는 2026년 최신 중고차 금리를 반영한 원리금 균등상환 방식으로 정확한 월 납입금을 계산해 드립니다.</p>
              <ul className="space-y-2 pl-1">
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">금리 비교:</strong> 1금융권부터 캐피탈까지 금리 차이를 미리 파악하세요.</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">예산 수립:</strong> 취등록세(7%)와 공채 매입비 등 초기 비용을 합산해야 진짜 예산이 나옵니다.</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">신용 점수 관리:</strong> 무분별한 조회 전, 계산기로 미리 견적을 뽑아보는 것이 안전합니다.</span></li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">초기 비용 안내</p>
              <h2 className="text-2xl font-bold text-foreground mb-4">취등록세 및 부대비용, 차값만으론 부족합니다</h2>
              <p className="mb-4">차값만 있다고 차를 살 수 있는 게 아닙니다. 중고차 구매 시 발생하는 추가 비용을 꼭 체크하세요. 일반적으로 차량 가격의 <strong className="text-foreground">8~10% 수준의 현금</strong>이 별도로 필요합니다.</p>
              <ul className="space-y-2 pl-1">
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">취등록세:</strong> 일반 승용차 기준 차량 가액의 7% (경차·다자녀는 감면 혜택 확인 필수)</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">공채 매입비:</strong> 서울 기준 차량가의 약 4~9%, 즉시 매도 시 손실분이 실질 비용</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">이전 등록 대행료:</strong> 상사 거래 시 발생하는 고정 비용 (약 30~50만 원)</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">성능점검 책임보험료:</strong> 중고차 성능 보증을 위한 필수 보험료</span></li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">연봉별 적정 차량</p>
              <h2 className="text-2xl font-bold text-foreground mb-4">카푸어 탈출! 연봉별 적정 할부금 가이드</h2>
              <p className="mb-4">금융 전문가들은 월 자동차 유지비(할부금 + 기름값 + 보험료)가 <strong className="text-foreground">월 가구 소득의 20%</strong>를 넘지 않는 것을 권장합니다. 아래 기준을 참고하되, STEP 3에서 연봉을 입력하면 정밀 진단 결과를 바로 확인할 수 있습니다.</p>
              <ul className="space-y-2 pl-1">
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">연봉 3,000만 원:</strong> 월 유지비 40만 원 이하 권장 — 아반떼, 캐스퍼 급</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">연봉 5,000만 원:</strong> 월 유지비 80만 원 이하 권장 — 쏘렌토, 그랜저 급</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">연봉 1억 원 이상:</strong> 제네시스, 수입차 등 선택 폭이 넓어집니다</span></li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">할부 기간 전략</p>
              <h2 className="text-2xl font-bold text-foreground mb-4">할부 기간, 길수록 유리할까요?</h2>
              <p className="mb-4">월 납입금 부담은 줄어들지만 총 이자 비용은 반대로 증가합니다. 예를 들어 2,000만 원을 연 8%로 빌릴 경우, 36개월은 총 이자 약 258만 원이지만 72개월이면 약 523만 원으로 <strong className="text-foreground">265만 원 이상 더 냅니다.</strong></p>
              <ul className="space-y-2 pl-1 mb-6">
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">신차:</strong> 48~60개월이 감가상각 속도와 균형이 맞는 구간입니다.</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">중고차:</strong> 36~48개월을 권장합니다. 잔존가치 대비 잔여 대출이 역전되는 '깡통 상태'를 예방하세요.</span></li>
                <li className="flex gap-2"><span className="text-primary font-bold mt-0.5">→</span><span><strong className="text-foreground">72개월 이상 장기 할부:</strong> 월 부담은 낮지만 총비용이 크게 늘고 중도 매각 시 손해가 발생할 수 있습니다.</span></li>
              </ul>

              {/* 비교표: 2,000만원 연 7% */}
              <p className="text-sm font-semibold text-foreground mb-2">📊 할부 기간별 실제 납입금 비교 (차량가 2,000만 원 · 금리 연 7%)</p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-500 text-xs">
                    <tr>
                      <th className="text-left px-4 py-2.5 font-semibold">할부 기간</th>
                      <th className="px-3 py-2.5 font-semibold text-center">월 납입금</th>
                      <th className="px-3 py-2.5 font-semibold text-center">총 이자</th>
                      <th className="px-3 py-2.5 font-semibold text-center">총 납입금</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {[
                      { period: '36개월', monthly: '617,000원', interest: '221,000원', total: '22,221,000원' },
                      { period: '48개월', monthly: '479,000원', interest: '298,000원', total: '22,998,000원' },
                      { period: '60개월 (추천)', monthly: '396,000원', interest: '374,000원', total: '23,740,000원', highlight: true },
                      { period: '72개월', monthly: '340,000원', interest: '452,000원', total: '24,524,000원' },
                    ].map((row) => (
                      <tr key={row.period} className={row.highlight ? 'bg-primary/5' : 'hover:bg-gray-50'}>
                        <td className={`px-4 py-2.5 font-medium ${row.highlight ? 'text-primary' : 'text-gray-700'}`}>{row.period}</td>
                        <td className="px-3 py-2.5 text-center text-gray-700">{row.monthly}</td>
                        <td className="px-3 py-2.5 text-center text-gray-500">{row.interest}</td>
                        <td className="px-3 py-2.5 text-center text-gray-500">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* EV Subsidy Callout */}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">전기차 구매를 고려 중이라면</p>
              <h2 className="text-lg font-bold text-foreground mb-2">보조금 먼저 확인하고 할부 계획 세우세요</h2>
              <p className="text-sm text-muted-foreground mb-3">전기차는 국고보조금(최대 650만 원)과 지자체 보조금을 합산하면 실구매가가 크게 낮아집니다. 할부 원금 자체가 줄어드니 이자 절감 효과도 덤으로 따라옵니다. <a href="https://carelec.kr" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-600 underline underline-offset-2 hover:text-emerald-700">전기차 보조금 계산기(carelec.kr)</a>에서 차종별·지역별 보조금을 미리 조회한 뒤 할부 계획을 세워보세요.</p>
              <a href="https://carelec.kr" target="_blank" rel="noopener noreferrer" className="inline-block rounded-xl bg-emerald-600 text-white text-sm font-bold px-4 py-2 hover:bg-emerald-700 transition-colors">2026 전기차 보조금 조회 →</a>
            </div>

            {/* Section 5 */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">자주 묻는 질문</p>
              <h2 className="text-2xl font-bold text-foreground mb-4">FAQ</h2>
              <div className="space-y-5">
                <div>
                  <p className="font-semibold text-foreground">Q. 선수금(계약금)을 많이 내면 금리도 낮아지나요?</p>
                  <p className="mt-1">A. 금리 자체가 낮아지지는 않지만, 대출 원금이 줄어 총 이자 부담은 확연히 줄어듭니다. 선수금 500만 원 추가만으로 총 이자가 30만 원 이상 절감되는 경우도 많습니다. 위 STEP 1에서 선수금을 조정해 직접 비교해 보세요.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Q. 신차와 중고차의 할부 금리 차이는 얼마나 되나요?</p>
                  <p className="mt-1">A. 신차 캐피탈 기준 연 3~6%, 중고차는 연 7~14%로 크게 높습니다. 가능하다면 은행(1금융권) 자동차 대출(연 4~7%)을 먼저 알아보는 것이 이자 절감에 절대적으로 유리합니다.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Q. 보험료는 어떻게 계산에 반영되나요?</p>
                  <p className="mt-1">A. STEP 3에서 연령과 차량 유형을 입력하면 업계 평균 보험료를 추정해 월 유지비에 자동으로 반영됩니다. 실제 보험료는 운전 경력, 사고 이력에 따라 다를 수 있으므로 참고용으로 활용하세요.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Q. 자동차 할부 계산기는 어떻게 사용하나요?</p>
                  <p className="mt-1">A. ① 차량 가격·선수금 입력 → ② 할부 기간·금리 선택 → ③ 연봉 입력 순서로 진행하면 월 납입금, 총 이자, 월 유지비, 적정성 진단까지 자동으로 계산됩니다. 모든 기능은 무료로 이용할 수 있습니다.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Q. 자동차 할부 중도상환 수수료는 얼마인가요?</p>
                  <p className="mt-1">A. 캐피탈사 기준 중도상환 수수료는 잔여 원금의 1~2% 수준입니다. 단, 은행 자동차 대출은 수수료가 없거나 0.5% 이하로 낮은 경우가 많습니다. 중도 상환을 고려한다면 처음부터 은행 대출을 선택하는 것이 유리합니다.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Q. 2026년 자동차 할부 평균 금리는 얼마인가요?</p>
                  <p className="mt-1">A. 2026년 3월 기준 신차 캐피탈 할부 평균 금리는 연 4~7%, 1금융권 자동차 대출은 연 4~6% 수준입니다. 중고차는 연 8~14%로 신차 대비 높습니다. 금리는 신용점수·차종·금융사에 따라 크게 달라지므로 위 계산기에 직접 입력해 비교해 보세요.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Guide Posts Section */}
        <BoardSection />
      </div>
    </main>
  )
}
