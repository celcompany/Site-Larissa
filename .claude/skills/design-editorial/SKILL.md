---
name: design-editorial
description: Direção de arte do site Larissa Mendes Hairstylist — editorial de beleza/noivas de alto padrão. Use SEMPRE que criar ou alterar qualquer página, seção ou componente visual do site (Home, serviços, regiões, portfólio, sobre, FAQ).
---

# Direção de arte — Editorial de Beleza & Noivas

Referência: revistas de moda/casamento (Vogue Noiva, Harper's Bazaar, Martha Stewart Weddings) e estúdios de beleza de luxo. O site deve parecer uma **matéria editorial**, não um template.

## Paleta (tokens em `src/app/globals.css`)
| Token | Hex | Uso |
|---|---|---|
| `brand-cream` | #FAF8F5 | Fundo principal (linho quente) |
| `brand-sand` | #F3EFEA | Superfícies/blocos alternados, bem suaves |
| `brand-dark` | #1C1917 | Texto principal (carvão — **nunca** `#000`/`text-black`) |
| `brand-muted` | #78716C | Texto secundário |
| `brand-gold` | #C5A059 | Destaque **decorativo** (fios, numerais grandes, detalhes) |
| `brand-bronze` | #8C6B3E | Destaque em **texto pequeno** (rótulos, links) — contraste AA |

- Um único tom de destaque (família champanhe/bronze). Nada de outras cores de marca.
- Exceção funcional única: verde do WhatsApp no botão flutuante.

## Tipografia
- **Playfair Display** (`font-serif`): títulos grandes, `font-normal`/`font-medium`, `tracking-tight`, `leading-[1.05]`–`[1.15]`. Itálico **pontual** (1–3 palavras por título) para elegância.
- **Plus Jakarta Sans** (`font-sans`): corpo `text-base`/`text-[15px]`, `leading-relaxed`, `text-stone-600`.
- Rótulos/eyebrows: `text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-bronze`.
- Escala com contraste alto: H1 mobile `text-[2.5rem]` → desktop `text-7xl`; H2 `text-4xl` → `text-5xl`.

## Layout
- **Mobile-first** sempre: escrever as classes base para 360px e só depois `sm:`/`lg:`.
- Respiro generoso: seções `py-24 lg:py-36`; blocos de texto com `max-w-xl`.
- Composições **assimétricas** (grid de 12 colunas com 7/5, 5/7, deslocamentos `lg:mt-24`, imagens sobrepostas) onde fizer sentido.
- Fotos reais são protagonistas: grandes, com proporção retrato (`aspect-[3/4]`/`[4/5]`), cantos retos ou `rounded-sm`, sem molduras pesadas.
- Separadores: fios finos (`h-px bg-stone-300`, `border-stone-200`), numerais em serif (`01`, `02`) e legendas em caixa alta.
- Listas de serviços/regiões em formato **tipográfico** (linhas com fio + título serif + seta), não em cards.

## PROIBIDO (anti-visual genérico de IA)
- Grids repetitivos de 3 cards iguais com ícone redondo no topo.
- `shadow-lg`, `shadow-xl`, `shadow-2xl` (máx. `shadow-sm`, preferir bordas finas).
- Gradientes chamativos, `blur` decorativo, glow, glassmorphism.
- Badges/pílulas coloridas sobre fotos; emojis como ícones de seção.
- Visual de template SaaS: hero centralizado com dois botões arredondados genéricos, "features", contadores animados, ícones de check em série.
- `rounded-2xl`/`rounded-3xl` em tudo; preto puro; mais de um tom de destaque.

## Componentes e padrões do projeto
- Imagens: `next/image` com imports estáticos de `src/lib/photos.ts` (alt com SEO local já definido lá). `priority` **só** na imagem do hero da página. Sempre `sizes` coerente.
- CTAs: `ButtonLink` (`src/components/ui.tsx`) — primário carvão sólido com cantos retos/levemente arredondados e texto em caixa alta com tracking; secundário como link sublinhado com seta.
- WhatsApp: sempre via `waLink(WA_MESSAGES.<serviço>)` de `src/lib/site.ts`.
- Rótulos de seção: componente `Eyebrow`.
- Um único `<h1>` por página; hierarquia H2 → H3 sem pular níveis.
- Animações: no máximo transições sutis (`transition-colors`, `duration-500` em zoom leve de imagem). Respeitar `motion-reduce`.

## Checklist antes de entregar uma página
1. Testado mentalmente em 360px: nada de scroll horizontal, CTA visível sem rolar muito.
2. Nenhum item da lista PROIBIDO presente.
3. Fotos com `alt` descritivo + local (ex.: "… a domicílio em São Paulo").
4. Contraste: texto pequeno nunca em `brand-gold` sobre fundo claro (usar `brand-bronze`).
