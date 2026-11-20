# Larissa Mendes Hairstylist — Regras do Projeto

Site: https://larissamendeshairstylist.com.br
Negócio: penteado e maquiagem **a domicílio** em São Paulo (noivas, madrinhas/mães, social, shooting).
WhatsApp: +55 11 97084-5497 (`https://wa.me/5511970845497`) · Instagram: @lar1mendes
Diferencial: Vencedora Beleza Experience 2024 — Novos Talentos Penteado. Maquiagem via maquiadoras parceiras.

## Stack (fixa)
- Next.js (App Router) + TypeScript + Tailwind CSS
- SSG: geração estática (`output: 'export'` ou páginas estáticas); nada de SSR/API dependente de servidor
- Metadados via Metadata API do Next (`metadata` / `generateMetadata`), `sitemap.ts` e `robots.ts`
- Imagens otimizadas (next/image ou pré-processamento), fontes via `next/font`

## SEO Local (fixo)
- Foco geográfico: São Paulo — **Zona Sul, Zona Oeste e Centro** (bairros: Jardins, Pinheiros, Moema, Itaim, Vila Mariana, Vila Madalena, Brooklin, Perdizes, etc.)
- Schema.org: `HealthAndBeautyBusiness` + `Service`, com `areaServed` (City / Place / AdministrativeArea)
- **Sem endereço físico**: não publicar `address`/`streetAddress` nem `geo` de local fixo (negócio de área de atendimento)
- Domínio canônico: `https://larissamendeshairstylist.com.br` em canonical, OG, sitemap e Schema
- Uma intenção de busca por página; H1 único por página; links internos entre serviços e regiões

## Preservar sempre (nunca apagar/renomear)
- Google Tag Manager **GTM-NXC87NT7** (script no `<head>` + `<noscript>` logo após `<body>`)
- `public/google0e805388159113cd.html` (verificação Search Console) — servido na raiz do domínio
- Pasta `public/fotos/` (fotos originais, URLs `/fotos/...`; versões otimizadas podem ser derivadas, sem remover as originais)

## Estrutura
- Dados centrais (NAP, serviços, regiões, mensagens de WhatsApp): `src/lib/site.ts`
- Schema JSON-LD: `src/lib/schema.ts` · Metadata por página (canonical obrigatório): `src/lib/seo.ts` → `pageMetadata()`
- Ao criar uma página, incluí-la em `LIVE_ROUTES` de `src/app/sitemap.ts`
- `index.html` na raiz = site antigo, apenas referência (não é servido pelo Next)
- Deploy: Vercel, automático pela branch `main` — não dar push na main até a Home estar pronta
- Tags existentes G-F38VJ77VVM (GA4) e AW-18449298619 (Ads): não remover sem aprovação explícita

## Modo de trabalho
1. **Proposta** — descrever em tópicos curtos o que será feito
2. **Aprovação** — aguardar o OK do usuário
3. **Execução direta** — editar os arquivos sem imprimir código longo no chat; ao final, resumo curto do que mudou
