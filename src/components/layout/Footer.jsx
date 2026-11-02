import { siteInfo } from '../../data/siteInfo'

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-4 border-t border-surface px-6 py-8 text-sm text-sand md:px-12">
      <span>© {new Date().getFullYear()} {siteInfo.name}</span>
      <span>{siteInfo.address} · {siteInfo.phone}</span>
    </footer>
  )
}