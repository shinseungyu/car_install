import type { Metadata } from 'next'
import { Noto_Sans_KR, Bebas_Neue } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-kr'
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-bebas-neue'
})

export const metadata: Metadata = {
  title: {
    default: '자동차 할부 계산기 | 월 납입금·중고차 이자·취등록세 무료 계산',
    template: '%s | CarPayPro 자동차 할부 계산기',
  },
  description: '자동차 할부 월 납입금, 중고차 이자, 취등록세까지 한번에 무료 계산. 내 연봉에 맞는 차가 뭔지 3초 만에 확인하세요.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://carpaypro.com'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    '자동차 할부 계산기',
    '자동차 월 납입금 계산',
    '중고차 할부 이자',
    '자동차 유지비 계산',
    '차량 구매 적정성 진단',
    '자동차 취득세 계산',
    '신차 할부 계산기',
    '자동차 보험료 계산',
    '연봉별 적정 차량',
    '자동차 총 비용 계산',
  ],
  openGraph: {
    title: '자동차 할부 계산기 | 월 납입금·중고차 이자·취등록세 무료 계산',
    description: '자동차 할부 월 납입금, 중고차 이자, 취등록세까지 한번에 무료 계산. 내 연봉에 맞는 차가 뭔지 3초 만에 확인하세요.',
    url: '/',
    type: 'website',
    locale: 'ko_KR',
    siteName: 'CarPayPro',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpaypro.com'}/thumb.webp`,
        width: 1200,
        height: 630,
        alt: '자동차 할부 계산기 썸네일',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '자동차 할부 계산기 | 월 납입금·중고차 이자·취등록세 무료 계산',
    description: '자동차 할부 월 납입금, 중고차 이자, 취등록세까지 한번에 무료 계산. 내 연봉에 맞는 차를 3초 만에 확인하세요.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://carpaypro.com'}/thumb.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/Gemini_Generated_Image_uqshuxuqshuxuqsh-_1_.ico',
    shortcut: '/Gemini_Generated_Image_uqshuxuqshuxuqsh-_1_.ico',
    apple: '/Gemini_Generated_Image_uqshuxuqshuxuqsh-_1_.ico',
  },
  // verification: { google: 'YOUR_GOOGLE_VERIFICATION_CODE' },
  other: {
    'google-adsense-account': 'ca-pub-5378247298190063',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://carpaypro.com'

  const jsonLdApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '자동차 할부 계산기 | 월 납입금·중고차 이자·취등록세 무료 계산',
    description: '자동차 할부 월 납입금, 중고차 이자, 취등록세까지 한번에 무료 계산. 내 연봉에 맞는 차가 뭔지 3초 만에 확인하세요.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    url: siteUrl,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  }

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CarPayPro',
    url: siteUrl,
    logo: `${siteUrl}/Gemini_Generated_Image_uqshuxuqshuxuqsh-_1_.ico`,
  }

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '선수금(계약금)을 많이 내면 금리도 낮아지나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '금리 자체가 낮아지지는 않지만, 대출 원금이 줄어 총 이자 부담은 확연히 줄어듭니다. 선수금 500만 원 추가만으로 총 이자가 30만 원 이상 절감되는 경우도 많습니다.',
        },
      },
      {
        '@type': 'Question',
        name: '신차와 중고차의 할부 금리 차이는 얼마나 되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '신차 캐피탈 기준 연 3~6%, 중고차는 연 7~14%로 크게 높습니다. 가능하다면 은행(1금융권) 자동차 대출(연 4~7%)을 먼저 알아보는 것이 이자 절감에 절대적으로 유리합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '보험료는 어떻게 계산에 반영되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '연령과 차량 유형을 입력하면 업계 평균 보험료를 추정해 월 유지비에 자동으로 반영됩니다. 실제 보험료는 운전 경력, 사고 이력에 따라 다를 수 있으므로 참고용으로 활용하세요.',
        },
      },
    ],
  }

  return (
    <html lang="ko">
      <head>
        <Script
          id="json-ld-app"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
          strategy="beforeInteractive"
        />
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
          strategy="beforeInteractive"
        />
        <Script
          id="json-ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
          strategy="beforeInteractive"
        />
        {/* <meta name="naver-site-verification" content="YOUR_NAVER_VERIFICATION_CODE" /> */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5378247298190063"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${notoSansKR.variable} ${bebasNeue.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <SiteHeader />
        <div className="flex-1">
          {children}
        </div>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}
