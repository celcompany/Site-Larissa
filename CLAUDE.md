# Larissa Mendes Hairstylist — Regras do Projeto

Site: https://larissamendeshairstylist.com.br
Negócio: penteado e maquiagem **a domicílio** em São Paulo e Grande SP (noivas, madrinhas/mães, social, maquiagem, shooting).
WhatsApp: +55 11 97084-5497 (`https://wa.me/5511970845497`) · Instagram: @lar1mendes
Diferencial: Vencedora Beleza Experience 2024 — Novos Talentos Penteado. Maquiagem via maquiadoras parceiras.

## Stack (fixa)
- Next.js (App Router) + TypeScript + Tailwind CSS 4, deploy na Vercel (páginas SSG/estáticas, sem `output: 'export'`)
- Metadados via Metadata API do Next, `sitemap.ts` e `robots.ts`
- Imagens com `next/image`, fontes via `next/font`

## Escopo do site (enxuto)
| Rota | Página |
|---|---|
| `/` | Home (portfólio em carrossel na âncora `#portfolio`) |
| `/penteado-noiva-a-domicilio-sp` | Noivas |
| `/penteado-madrinha-e-mae-sp` | Madrinhas e Mães |
| `/penteado-social-a-domicilio-sp` | Penteado Social |
| `/maquiagem-a-domicilio-sp` | Maquiagem |
| `/penteado-para-ensaio-fotografico-sp` | Ensaios e Shooting |
| `/sobre` | Sobre a Larissa |
| `/perguntas-frequentes` | FAQ (Schema `FAQPage`) |

**Fora do escopo por enquanto:** `/portfolio`, páginas `/regioes/...` e seção de depoimentos (voltar só com avaliações reais; nunca usar depoimentos ou Schema de Review fictícios).

## SEO Local (fixo)
- Comunicação visível: **"toda São Paulo e Grande SP"** (residências, hotéis e espaços de eventos). Não exibir listas de bairros/zonas na página.
- Zonas Sul, Oeste e Centro + bairros estratégicos ficam **só no Schema** (`areaServed`, via `REGIONS` em `src/lib/site.ts`).
- H1 da Home: "Penteado e Maquiagem a Domicílio" — "São Paulo e Grande SP" vai no subtítulo, `<title>`, meta description e Schema.
- Schema.org: `HealthAndBeautyBusiness` (global) + `Service`/`BreadcrumbList` nas páginas de serviço, com `areaServed`.
- **Sem endereço físico**: nunca publicar `address`/`streetAddress`/`geo`.
- Domínio canônico: `https://larissamendeshairstylist.com.br` (sem www) em canonical, OG, sitemap e Schema.
- Uma intenção de busca por página; H1 único; links internos entre serviços.

## Preservar sempre (nunca apagar/renomear)
- Google Tag Manager **GTM-NXC87NT7** (script no `<head>` + `<noscript>` logo após `<body>`)
- Tags G-F38VJ77VVM (GA4) e AW-18449298619 (Ads): não remover sem aprovação explícita
- `public/google0e805388159113cd.html` (verificação Search Console), servido na raiz do domínio
- Pasta `public/fotos/` (fotos originais, URLs `/fotos/...`)

## Direção de arte
- Toda página/seção visual segue a skill **`design-editorial`** (`.claude/skills/design-editorial/SKILL.md`). Carregá-la antes de criar ou alterar layout.

## Estrutura
- Dados centrais (contato, serviços, regiões do Schema, mensagens de WhatsApp, links de navegação): `src/lib/site.ts`
- Fotos + alt SEO: `src/lib/photos.ts` · Conteúdo da Home: `src/content/home.ts`
- Schema JSON-LD: `src/lib/schema.ts` · Metadata por página (canonical obrigatório): `src/lib/seo.ts` → `pageMetadata()`
- UI compartilhada: `src/components/ui.tsx` (`Eyebrow`, `ButtonLink`, `Arrow`)
- Ao criar uma página, incluí-la em `LIVE_ROUTES` de `src/app/sitemap.ts`
- `index.html` na raiz = site antigo, apenas referência (não é servido pelo Next)
- Deploy: Vercel, automático pela branch `main`. **Não dar `git push` até as páginas internas estarem prontas e aprovadas.**

## Modo de trabalho
1. **Proposta**: descrever em tópicos curtos o que será feito
2. **Aprovação**: aguardar o OK do usuário
3. **Execução direta**: editar os arquivos sem imprimir código longo no chat; ao final, resumo curto do que mudou
