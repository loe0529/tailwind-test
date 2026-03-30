/** public/ 자산 URL — GitHub Pages(/tailwind-test/)와 Vercel(/) 모두 동작 */
export function publicUrl(path) {
  const base = import.meta.env.BASE_URL || '/'
  const p = String(path).replace(/^\/+/, '')
  return `${base}${p}`
}
