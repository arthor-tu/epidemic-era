import { WeightLevel, ScopeType } from '@/config/enums'

export interface Event {
  title: string // 标题
  description: string // 描述
  img: string | null // 图片
  time: string // 时间
  href: string | null // 跳转链接
  weight: WeightLevel // 排序/过滤权重
  scope: ScopeType // 事件范围：国内国外
}
