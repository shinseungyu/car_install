"use client"

import { Car, ChevronLeft, Building, Calculator, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RegistrationTaxPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 text-success rounded-full text-xs font-bold mb-4">
            <Building className="w-3 h-3" />
            <span>TAX & REGISTRATION GUIDE</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-6 leading-tight">
            차량 구매 시 뒷목 잡게 하는<br />
            <span className="text-primary italic">취등록세, 미리 계산해 보세요.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            차량 가격 외에도 이전 등록비(취등록세, 공채 등)로 약 7~9%의 추가 비용이 발생합니다. 
            현금 흐름에 차질이 생기지 않도록 미리 준비하는 것이 중요합니다.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-center">
          <div className="premium-card p-10 rounded-3xl border border-border bg-white shadow-sm hover:transform hover:-translate-y-2 transition-all">
            <div className="text-4xl font-black text-primary mb-4 italic">7%</div>
            <h3 className="text-xl font-bold mb-3">승용차 (비영업용)</h3>
            <p className="text-sm text-muted-foreground">일반적인 자가용의 취등록세 요율입니다.</p>
          </div>
          <div className="premium-card p-10 rounded-3xl border border-border bg-white shadow-sm hover:transform hover:-translate-y-2 transition-all">
            <div className="text-4xl font-black text-primary mb-4 italic">5%</div>
            <h3 className="text-xl font-bold mb-3">화물·승합차</h3>
            <p className="text-sm text-muted-foreground">다목적 차량에 적용되는 저렴한 요율입니다.</p>
          </div>
          <div className="premium-card p-10 rounded-3xl border border-border bg-white shadow-sm hover:transform hover:-translate-y-2 transition-all">
            <div className="text-4xl font-black text-success mb-4 italic">0%</div>
            <h3 className="text-xl font-bold mb-3">경차 면제</h3>
            <p className="text-sm text-muted-foreground">취득가액 1,250만원 이하는 전액 면제됩니다.</p>
          </div>
        </div>

        <div className="space-y-6 mb-20">
          <h2 className="text-2xl font-bold">취등록세 계산 시 주의사항</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "할부 계약 시 취등록세는 현금으로 별도 준비하는 것이 유리합니다.",
              "다자녀 가구는 취등록세 감면 혜택(최대 140만원)을 받을 수 있습니다.",
              "공채 매입/할인 비용은 지역 및 시기에 따라 매일 달라집니다.",
              "중고차의 경우 과표(세금기준가)와 실거래가 중 높은 쪽으로 부과됩니다."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-secondary/30 rounded-2xl border border-border/50">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-base font-medium text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: 이전비 3대 구성 항목 */}
        <section className="mb-20 space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">이전비 구성</p>
          <h2 className="text-2xl font-bold text-foreground">중고차 이전비의 3대 구성 항목</h2>
          <p className="text-muted-foreground leading-relaxed">단순히 '세금'이라고 뭉뚱그리지 말고, 항목을 정확히 파악해야 예산을 제대로 세울 수 있습니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border border-border bg-white shadow-sm">
              <p className="text-3xl font-black text-primary italic mb-3">01</p>
              <h3 className="text-lg font-bold text-foreground mb-2">취득세</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 일반 승용차(비영업용): 차량가의 <strong className="text-foreground">7%</strong></li>
                <li>• 화물·승합차: <strong className="text-foreground">5%</strong></li>
                <li>• 경차: <strong className="text-foreground">4%</strong> (단, 감면 혜택 별도 적용)</li>
                <li>• 과세 기준은 실거래가와 시가표준액 중 높은 금액</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-white shadow-sm">
              <p className="text-3xl font-black text-primary italic mb-3">02</p>
              <h3 className="text-lg font-bold text-foreground mb-2">공채 매입비</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 지자체 발행 채권을 의무 매입하는 비용</li>
                <li>• 서울 기준 차량가의 약 4~9%</li>
                <li>• 매입 즉시 할인(즉시 매도) 처리 가능</li>
                <li>• 실질 비용은 할인 손실분 — 약 차량가의 0.1~0.3%</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-white shadow-sm">
              <p className="text-3xl font-black text-primary italic mb-3">03</p>
              <h3 className="text-lg font-bold text-foreground mb-2">기타 부대비용</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 증지대·인지대: 약 1~2만 원</li>
                <li>• 번호판 교체비: 신규 발급 시 수만 원 추가</li>
                <li>• 이전 등록 대행료: 딜러사 수수료 약 5~15만 원</li>
                <li>• 지역·시기에 따라 변동 가능</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: 딜러 추가 비용 */}
        <section className="mb-20 space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">딜러 비용 투명하게 보기</p>
          <h2 className="text-2xl font-bold text-foreground">딜러에게 지불하는 추가 비용 — 매도비</h2>
          <p className="text-muted-foreground leading-relaxed">중고차 상사를 통해 구매할 때 발생하는 항목입니다. 계약서에 명시되어 있는지 반드시 확인하세요.</p>
          <div className="space-y-4">
            <div className="flex items-start gap-6 p-8 rounded-2xl border border-border bg-white shadow-sm">
              <span className="text-2xl font-black text-primary italic shrink-0 w-8">①</span>
              <div>
                <h3 className="font-bold text-foreground mb-1">매도비 (관리비용)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">상사에서 차량을 보관·관리하고 거래를 중개하는 비용입니다. 지역별 차이가 있으나 일반적으로 <strong className="text-foreground">33~45만 원</strong> 수준입니다. 일부 딜러는 명칭을 '탁송비', '관리비', '등록비' 등으로 달리 표기하기도 하므로, 계약 전 항목별로 꼼꼼히 확인하는 것이 필요합니다.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 p-8 rounded-2xl border border-border bg-white shadow-sm">
              <span className="text-2xl font-black text-primary italic shrink-0 w-8">②</span>
              <div>
                <h3 className="font-bold text-foreground mb-1">성능상태 점검 책임보험료</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">중고차 구매 시 의무 가입 항목으로, 성능점검 결과와 실제 상태가 다를 경우를 보장하는 보험입니다. 국산 일반 차량은 <strong className="text-foreground">약 2~10만 원</strong> 수준이지만, 수입차·고가 차량·노후 차량의 경우 <strong className="text-foreground">30만 원 이상</strong>이 발생할 수 있습니다. 반드시 영수증을 요청하세요.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: 2026 감면 혜택 */}
        <section className="mb-20 space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">2026년 감면 혜택</p>
          <h2 className="text-2xl font-bold text-foreground">취득세 감면 — 나는 해당될까요?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-foreground/10">
                  <th className="py-3 pr-6 font-bold text-foreground">대상</th>
                  <th className="py-3 pr-6 font-bold text-foreground">감면 내용</th>
                  <th className="py-3 font-bold text-foreground">비고</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground divide-y divide-border">
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">경차</td>
                  <td className="py-3 pr-6">취득세 4% 중 <strong className="text-foreground">75만 원까지 감면</strong></td>
                  <td className="py-3">차량가 약 1,875만 원 이하면 사실상 면제</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">하이브리드</td>
                  <td className="py-3 pr-6">취득세 <strong className="text-foreground">최대 40만 원 감면</strong></td>
                  <td className="py-3">연도별 한도 변경 가능, 구매 전 확인 필수</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">전기차</td>
                  <td className="py-3 pr-6">취득세 <strong className="text-foreground">최대 140만 원 감면</strong></td>
                  <td className="py-3">차종·가격에 따라 한도 내 감면 적용</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">다자녀 가구</td>
                  <td className="py-3 pr-6">18세 미만 자녀 <strong className="text-foreground">2인 이상 시 감면 확대</strong></td>
                  <td className="py-3">2024년부터 3인→2인으로 요건 완화</td>
                </tr>
                <tr>
                  <td className="py-3 pr-6 font-medium text-foreground">장애인·국가유공자</td>
                  <td className="py-3 pr-6">취득세 <strong className="text-foreground">전액 또는 일부 면제</strong></td>
                  <td className="py-3">별도 증빙 서류 제출, 관할 구청 확인</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground">※ 감면 요건은 매년 바뀔 수 있습니다. 구매 전 관할 시·군·구청 또는 위택스(wetax.go.kr)에서 반드시 최신 기준을 확인하세요.</p>
        </section>

        {/* Section: 계산 시 주의점 */}
        <section className="mb-20 space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">꼭 알아야 할 주의사항</p>
          <h2 className="text-2xl font-bold text-foreground">취득세 계산 시 절대 놓치면 안 되는 포인트</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <div className="p-8 rounded-2xl border-l-4 border-primary bg-primary/5">
              <h3 className="font-bold text-foreground mb-2">과세표준액 vs 실거래가 — "왜 내가 산 가격보다 세금이 더 나오지?"</h3>
              <p>중고차를 시세보다 저렴하게 구매했더라도, 지자체가 정한 <strong className="text-foreground">시가표준액(과세표준액)</strong>이 실거래가보다 높으면 시가표준액을 기준으로 취득세가 부과됩니다. 예를 들어 500만 원에 구매한 차량의 시가표준액이 800만 원이라면, 세금은 800만 원 × 7% = 56만 원이 됩니다.</p>
            </div>
            <div className="p-8 rounded-2xl border-l-4 border-primary bg-primary/5">
              <h3 className="font-bold text-foreground mb-2">취득세는 현금으로 별도 준비해야 합니다</h3>
              <p>취득세는 차량 등록 시점에 현금으로 납부해야 하며, 캐피탈 할부 대출에 포함되지 않습니다. 차량 가격의 7~9% 수준(취득세 + 공채 등)을 별도 현금으로 준비하지 않으면 등록 자체가 불가합니다.</p>
            </div>
            <div className="p-8 rounded-2xl border-l-4 border-primary bg-primary/5">
              <h3 className="font-bold text-foreground mb-2">공채 매입비는 지역과 날짜마다 다릅니다</h3>
              <p>공채 할인율은 금융 시장 상황에 따라 매일 바뀝니다. 딜러가 제시하는 금액이 적절한지 확인하려면 한국자산관리공사(KAMCO) 또는 딜러 견적서의 공채 명세를 직접 확인하는 것을 권장합니다.</p>
            </div>
          </div>
        </section>

        <section className="bg-primary p-12 md:p-16 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-primary/20">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 mb-4">
              <Calculator className="w-6 h-6" />
              <span className="font-bold uppercase tracking-widest text-sm opacity-80">CAR TAX CALCULATOR</span>
            </div>
            <h2 className="text-3xl font-black mb-4 leading-tight">
              취등록세 포함 <br />실제 초기 비용을 알고 싶다면?
            </h2>
            <p className="text-primary-foreground/70 text-lg">
              할부 계산기에 선수금과 보험료를 함께 입력해 보세요.
            </p>
          </div>
          <Link 
            href="/" 
            className="w-full md:w-auto px-10 py-5 bg-foreground text-background rounded-2xl font-bold text-xl hover:bg-black transition-all shadow-xl"
          >
            초기 비용 계산기 실행 →
          </Link>
        </section>
      </div>
    </main>
  )
}
