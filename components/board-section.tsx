"use client"

import posts from "@/data/posts.json"
import Link from "next/link"
import { Car, ChevronRight, Calendar, Tag } from "lucide-react"

interface Post {
  id: number
  title: string
  date: string
  category: string
  summary: string
  tags: string[]
}

export function BoardSection() {
  const allPosts: Post[] = (posts as Post[]).sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section className="mt-20 pt-16 border-t border-border">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-3">
            <Car className="w-3 h-3" />
            <span>CAR LIFE GUIDE</span>
          </div>
          <h2 className="text-3xl font-black tracking-tight text-foreground">
            똑똑한 자동차 구매를 위한 <span className="text-primary italic">완벽 가이드</span>
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl">
            할부 이자 절약법부터 유지비 비결까지, 전문가들이 전하는 필독 정보를 확인하세요.
          </p>
        </div>
        <Link 
          href="/board" 
          className="group inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
        >
          가이드 전체보기
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPosts.slice(0, 3).map((post) => (
          <Link 
            key={post.id} 
            href={`/board?id=${post.id}`}
            className="group flex flex-col bg-white border border-border rounded-3xl p-6 shadow-sm hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all animate-fade-in"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="inline-flex rounded-lg bg-secondary px-2.5 py-1 text-[10px] font-black text-primary uppercase">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-muted-foreground uppercase">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3 leading-snug">
              {post.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
              {post.summary}
            </p>
            <div className="mt-auto pt-4 border-t border-border/50 flex flex-wrap gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[10px] font-bold text-muted-foreground/60">
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-8 rounded-3xl bg-secondary/50 border border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
            <Tag className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="font-bold text-foreground">더 많은 꿀팁이 필요하신가요?</div>
            <div className="text-sm text-muted-foreground">매주 업데이트되는 최신 자동차 금융 소식을 받아보세요.</div>
          </div>
        </div>
        <Link 
          href="/board" 
          className="w-full md:w-auto px-8 py-3 bg-white border border-border text-foreground rounded-xl font-bold text-sm hover:bg-muted transition-colors shadow-sm text-center"
        >
          가이드 게시판 바로가기
        </Link>
      </div>
    </section>
  )
}
