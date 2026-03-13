"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Car, Fuel, Receipt, ParkingCircle, Calculator, TrendingUp } from "lucide-react"

export default function CarMaintenanceCostPage() {
  const [form, setForm] = useState({
    monthlyKm: "",
    fuelEfficiency: "",
    fuelPrice: "",
    monthlyInsurance: "",
    annualTax: "",
    monthlyParking: "",
  })

  const [result, setResult] = useState<{
    monthlyFuel: number
    monthlyTotal: number
    annualTotal: number
  } | null>(null)

  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const validate = () => {
    const newErrors: Partial<typeof form> = {}
    if (!form.monthlyKm || Number(form.monthlyKm) <= 0) newErrors.monthlyKm = "월 주행거리를 입력해주세요"
    if (!form.fuelEfficiency || Number(form.fuelEfficiency) <= 0) newErrors.fuelEfficiency = "연비를 입력해주세요"
    if (!form.fuelPrice || Number(form.fuelPrice) <= 0) newErrors.fuelPrice = "유류 가격을 입력해주세요"
    if (!form.monthlyInsurance || Number(form.monthlyInsurance) < 0) newErrors.monthlyInsurance = "월 보험료를 입력해주세요"
    if (!form.annualTax || Number(form.annualTax) < 0) newErrors.annualTax = "연 자동차세를 입력해주세요"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculate = () => {
    if (!validate()) return
    const km = Number(form.monthlyKm)
    const eff = Number(form.fuelEfficiency)
    const price = Number(form.fuelPrice)
    const insurance = Number(form.monthlyInsurance)
    const tax = Number(form.annualTax)
    const parking = Number(form.monthlyParking) || 0

    const monthlyFuel = Math.round((km / eff) * price)
    const monthlyTotal = Math.round(monthlyFuel + insurance + tax / 12 + parking)
    const annualTotal = monthlyTotal * 12
    setResult({ monthlyFuel, monthlyTotal, annualTotal })
  }

  const formatKRW = (n: number) => {
    const man = Math.floor(n / 10000)
    const rest = n % 10000
    if (rest === 0) return `${man.toLocaleString()}만원`
    return `${man.toLocaleString()}만 ${rest.toLocaleString()}원`
  }

  const inputClass = (field: keyof typeof form) =>
    `w-full rounded-xl border px-4 py-3 text-sm font-medium bg-white transition-all outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary ${
      errors[field] ? "border-destructive bg-destructive/5" : "border-border"
    }`

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

        {/* 헤더 */}
        <section className="mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-warning/10 text-warning rounded-full text-xs font-bold mb-4">
            <Car className="w-3 h-3" />
            <span>MAINTENANCE COST CALCULATOR</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4 leading-tight">
            자동차 유지비<br />
            <span className="text-primary italic">실제로 얼마 드나요?</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            월 주행거리·연비·보험료·자동차세를 입력하면{" "}
            <strong className="text-foreground">월 유지비와 연 유지비</strong>를 바로 계산해 드립니다.
          </p>
        </section>

        {/* 계산기 카드 */}
        <div className="premium-card rounded-3xl border border-border bg-white shadow-sm p-8 md:p-10 mb-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-black text-foreground">유지비 입력</h2>
          </div>

          <div className="space-y-5">
            {/* 연료비 그룹 */}
            <div className="p-5 bg-secondary/30 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <Fuel className="w-4 h-4 text-warning" />
                <span className="text-xs font-black uppercase tracking-widest text-warning">연료비 계산</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                    월 주행거리 (km)
                  </label>
                  <input
                    type="number"
                    name="monthlyKm"
                    value={form.monthlyKm}
                    onChange={handleChange}
                    placeholder="예: 1500"
                    className={inputClass("monthlyKm")}
                  />
                  {errors.monthlyKm && (
                    <p className="text-xs text-destructive mt-1">{errors.monthlyKm}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                    연비 (km/L)
                  </label>
                  <input
                    type="number"
                    name="fuelEfficiency"
                    value={form.fuelEfficiency}
                    onChange={handleChange}
                    placeholder="예: 12"
                    className={inputClass("fuelEfficiency")}
                  />
                  {errors.fuelEfficiency && (
                    <p className="text-xs text-destructive mt-1">{errors.fuelEfficiency}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                    유류 가격 (원/L)
                  </label>
                  <input
                    type="number"
                    name="fuelPrice"
                    value={form.fuelPrice}
                    onChange={handleChange}
                    placeholder="예: 1700"
                    className={inputClass("fuelPrice")}
                  />
                  {errors.fuelPrice && (
                    <p className="text-xs text-destructive mt-1">{errors.fuelPrice}</p>
                  )}
                </div>
              </div>
            </div>

            {/* 고정비 그룹 */}
            <div className="p-5 bg-secondary/30 rounded-2xl space-y-4">
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-primary" />
                <span className="text-xs font-black uppercase tracking-widest text-primary">고정 비용</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                    월 보험료 (원)
                  </label>
                  <input
                    type="number"
                    name="monthlyInsurance"
                    value={form.monthlyInsurance}
                    onChange={handleChange}
                    placeholder="예: 60000"
                    className={inputClass("monthlyInsurance")}
                  />
                  {errors.monthlyInsurance && (
                    <p className="text-xs text-destructive mt-1">{errors.monthlyInsurance}</p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                    연 자동차세 (원)
                  </label>
                  <input
                    type="number"
                    name="annualTax"
                    value={form.annualTax}
                    onChange={handleChange}
                    placeholder="예: 250000"
                    className={inputClass("annualTax")}
                  />
                  {errors.annualTax && (
                    <p className="text-xs text-destructive mt-1">{errors.annualTax}</p>
                  )}
                </div>
              </div>
            </div>

            {/* 선택 입력 */}
            <div className="p-5 bg-secondary/30 rounded-2xl">
              <div className="flex items-center gap-2 mb-3">
                <ParkingCircle className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  선택 입력
                </span>
              </div>
              <div className="max-w-xs">
                <label className="block text-xs font-bold text-muted-foreground mb-1.5">
                  월 주차비 (원, 선택)
                </label>
                <input
                  type="number"
                  name="monthlyParking"
                  value={form.monthlyParking}
                  onChange={handleChange}
                  placeholder="예: 100000"
                  className={inputClass("monthlyParking")}
                />
              </div>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full mt-8 rounded-2xl bg-foreground text-background py-4 text-base font-black tracking-tight hover:bg-primary transition-all shadow-lg hover:scale-[1.01] active:scale-[0.99]"
          >
            유지비 계산하기
          </button>
        </div>

        {/* 결과 카드 */}
        {result && (
          <div className="premium-card rounded-3xl border border-primary/20 bg-white shadow-sm p-8 md:p-10 mb-12 animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-xl">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-black text-foreground">계산 결과</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="p-6 rounded-2xl bg-warning/10 border border-warning/20 text-center">
                <p className="text-xs font-black uppercase tracking-widest text-warning mb-2">월 유류비</p>
                <p className="text-2xl font-black text-foreground">
                  {result.monthlyFuel.toLocaleString()}원
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                <p className="text-xs font-black uppercase tracking-widest text-primary mb-2">월 총 유지비</p>
                <p className="text-2xl font-black text-foreground">
                  {result.monthlyTotal.toLocaleString()}원
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-success/10 border border-success/20 text-center">
                <p className="text-xs font-black uppercase tracking-widest text-success mb-2">연 총 유지비</p>
                <p className="text-2xl font-black text-foreground">{formatKRW(result.annualTotal)}</p>
              </div>
            </div>

            {/* 비용 내역 */}
            <div className="p-5 bg-secondary/30 rounded-2xl space-y-3">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-3">
                월 비용 구성 내역
              </p>
              {[
                { label: "월 유류비", value: result.monthlyFuel },
                { label: "월 보험료", value: Number(form.monthlyInsurance) },
                { label: "자동차세 (월 환산)", value: Math.round(Number(form.annualTax) / 12) },
                ...(form.monthlyParking
                  ? [{ label: "월 주차비", value: Number(form.monthlyParking) }]
                  : []),
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground font-medium">{item.label}</span>
                  <span className="font-bold text-foreground">{item.value.toLocaleString()}원</span>
                </div>
              ))}
              <div className="border-t border-border pt-3 flex justify-between items-center">
                <span className="font-black text-foreground">월 합계</span>
                <span className="font-black text-primary text-lg">
                  {result.monthlyTotal.toLocaleString()}원
                </span>
              </div>
            </div>
          </div>
        )}

        {/* SEO 콘텐츠 */}
        <article className="space-y-10 pt-4 border-t border-border">
          <section>
            <h2 className="text-2xl font-black text-foreground mb-4">
              자동차 유지비, 어떤 항목이 포함되나요?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              자동차를 소유하면 구매 가격 이외에도 매달·매년 지출되는{" "}
              <strong className="text-foreground">고정 비용과 변동 비용</strong>이 발생합니다. 실제
              유지비를 정확히 파악해야 차량 구매 전 예산을 올바르게 세울 수 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "⛽",
                  title: "유류비 (변동)",
                  desc: "월 주행거리와 연비에 따라 달라집니다. 유류비는 유지비 중 가장 큰 비중을 차지하는 경우가 많습니다.",
                },
                {
                  icon: "🛡️",
                  title: "자동차 보험료 (고정)",
                  desc: "차량 가격, 운전자 나이·경력, 사고 이력에 따라 연 50만~150만원 수준으로 차이가 납니다.",
                },
                {
                  icon: "📋",
                  title: "자동차세 (고정)",
                  desc: "배기량 기준으로 부과됩니다. 배기량 1,000cc 미만 경차는 연 10만원 내외입니다.",
                },
                {
                  icon: "🅿️",
                  title: "주차비 (선택)",
                  desc: "거주지나 직장 근처에 유료 주차장을 이용하면 월 5~20만원의 추가 비용이 발생합니다.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-border shadow-sm"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-foreground mb-4">차종별 월 유지비 평균 비교</h2>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="text-left p-4 font-black text-foreground">차종</th>
                    <th className="text-right p-4 font-black text-foreground">월 유류비</th>
                    <th className="text-right p-4 font-black text-foreground">월 보험료</th>
                    <th className="text-right p-4 font-black text-foreground">월 자동차세</th>
                    <th className="text-right p-4 font-black text-primary">월 합계</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { type: "경차 (모닝·스파크)", fuel: "약 12만원", ins: "약 4만원", tax: "약 1만원", total: "약 17만원" },
                    { type: "소형 SUV (코나·셀토스)", fuel: "약 16만원", ins: "약 5.5만원", tax: "약 2만원", total: "약 24만원" },
                    { type: "중형 세단 (쏘나타·K5)", fuel: "약 17만원", ins: "약 6만원", tax: "약 2.5만원", total: "약 26만원" },
                    { type: "대형 SUV (팰리세이드)", fuel: "약 22만원", ins: "약 8만원", tax: "약 3.5만원", total: "약 34만원" },
                  ].map((row) => (
                    <tr key={row.type} className="hover:bg-secondary/30 transition-colors">
                      <td className="p-4 font-medium text-foreground">{row.type}</td>
                      <td className="p-4 text-right text-muted-foreground">{row.fuel}</td>
                      <td className="p-4 text-right text-muted-foreground">{row.ins}</td>
                      <td className="p-4 text-right text-muted-foreground">{row.tax}</td>
                      <td className="p-4 text-right font-black text-primary">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              * 월 1,500km 주행, 유류비 1,700원/L 기준 추정치입니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-foreground mb-4">자동차 유지비 절약 팁</h2>
            <div className="space-y-3">
              {[
                {
                  tip: "연비 운전 습관",
                  detail: "급가속·급제동을 줄이면 연비를 최대 20% 개선할 수 있습니다. 정속 주행과 엔진 브레이크 활용이 효과적입니다.",
                },
                {
                  tip: "자동차세 연납 할인",
                  detail: "1월에 연납 신청 시 최대 4.57% 할인을 받을 수 있습니다. 지방세 앱에서 간편하게 신청 가능합니다.",
                },
                {
                  tip: "보험 갱신 전 비교 견적",
                  detail: "보험 만기 3개월 전부터 여러 보험사 견적을 비교하면 동일 조건에서 연 10~30만원을 절약할 수 있습니다.",
                },
                {
                  tip: "타이어 공기압 관리",
                  detail: "권장 공기압보다 낮으면 연비가 최대 3% 저하됩니다. 한 달에 한 번 점검하는 것을 권장합니다.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-border">
                  <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.tip}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
