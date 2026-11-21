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
| `brand-sand` | #F3EFEA | Seções alternadas (areia suave) |
| `brand-stone` | #E7E1D9 | Seções alternadas (cinza-pedra quente, um tom mais denso) |
| `brand-graphite` | #262321 | **Blocos escuros**: Header, "Como funciona", CTA final |
| `brand-dark` | #1C1917 | Texto principal (carvão — **nunca** `#000`/`text-black`) e Footer |
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

## Contraste e ritmo de fundos (obrigatório)
- O site **não** pode ficar branco/claro demais. **Nunca** colocar duas seções seguidas com o mesmo fundo claro.
- **Header sempre grafite** (`bg-brand-graphite`), com logo `text-brand-cream`, links `text-stone-300` (hover `brand-gold`) e botão "Agendar" em destaque `bg-brand-gold text-brand-dark`. Dropdowns e menu mobile também grafite.
- Alternar fundos: `brand-cream` → `brand-sand` → `brand-stone` → **bloco escuro `brand-graphite`** a cada 3–4 seções. Footer em `brand-dark`.
- Ritmo de referência (Home): Header grafite → Hero cream → Serviços sand → Portfólio stone → Como funciona **grafite** → Autoridade cream → Cobertura stone → FAQ sand → CTA final **grafite** → Footer dark.
- Em blocos escuros: títulos `text-brand-cream`, corpo `text-stone-400`, eyebrow `Eyebrow onDark` (gold), CTA `variant="gold"`/`"outlineLight"`, fios `border-white/15`.
- Toda página interna deve ter pelo menos 1 bloco escuro intermediário além do CTA final.

## Layout
- **Mobile-first** sempre: escrever as classes base para 360px e só depois `sm:`/`lg:`.
- Container padrão: `mx-auto max-w-6xl px-5 sm:px-8`. Respiro generoso: seções `py-24 lg:py-32`.
- **Alinhamento limpo e centralizado**: cabeçalhos de seção (eyebrow + H2 + fio dourado + intro) centralizados com `max-w-2xl mx-auto text-center`. Grids de 2 colunas com `items-center` e colunas equilibradas. No mobile, textos de hero/CTA centralizados.
- CTAs lado a lado devem ter a mesma altura (primário sólido + `outline`), nunca um botão ao lado de um link solto.
- Assimetria só pontual e intencional; o conjunto deve parecer equilibrado e centralizado.
- Fotos reais são protagonistas: grandes, com proporção retrato (`aspect-[3/4]`/`[4/5]`), cantos retos ou `rounded-sm`, sem molduras pesadas.
- Separadores: fios finos (`h-px bg-stone-300`, `border-stone-200`), numerais em serif (`01`, `02`) e legendas em caixa alta.
- Listas de serviços em formato **tipográfico** (linhas com fio + numeral + título serif + seta), não em cards.
- Galerias: carrossel horizontal com scroll-snap (`PortfolioCarousel`), setas circulares finas e swipe no mobile.
- Não exibir listas de bairros/zonas; comunicar "toda São Paulo e Grande SP".

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
