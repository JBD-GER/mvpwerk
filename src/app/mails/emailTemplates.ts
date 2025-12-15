// src/app/mails/emailTemplates.ts

export type ContactCtx = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message?: string
  siteUrl?: string
}

const BRAND = {
  name: 'MVPWERK',
  websiteTitle: 'MVPWERK',
  supportEmail: 'info@mvpwerk.de',
  legalNote: '© MVPWERK • Made in Germany • DSGVO-konform',

  primary: '#0F172A', // slate-900
  bg: '#f6f9fc',
  card: '#ffffff',
  border: '#e6edf5',
  text: '#0b1220',
  muted: '#64748b',
  subtle: '#94a3b8',
}

const DEFAULT_SITE_URL = 'https://www.mvpwerk.de'
const CONTAINER_W = 640

function escapeHtml(s: string) {
  return (s || '').replace(/[&<>"]/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' } as Record<string, string>)[c]
  )
}

function nl2br(s: string) {
  return escapeHtml(s).replace(/\n/g, '<br/>')
}

function normalizeSiteUrl(input?: string) {
  let url = (input || '').trim()
  if (!url) url = DEFAULT_SITE_URL
  if (url.includes('localhost') || url.includes('127.0.0.1')) url = DEFAULT_SITE_URL
  if (!/^https?:\/\//i.test(url)) url = `https://${url}`
  return url.replace(/\/+$/, '')
}

function pill(text: string) {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;">
    <tr>
      <td bgcolor="#F1F5F9" style="
        background:#F1F5F9;background-image:linear-gradient(#F1F5F9,#F1F5F9);
        border:1px solid #E2E8F0;border-radius:999px;
        padding:6px 10px;
        font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
        font-size:12px;line-height:1;color:#334155;font-weight:700;
      ">
        ${escapeHtml(text)}
      </td>
    </tr>
  </table>`
}

function divider(px = 22) {
  return `
  <tr>
    <td style="padding:0 ${px}px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        <tr>
          <td style="border-top:1px solid ${BRAND.border};font-size:0;line-height:0;height:1px;">&nbsp;</td>
        </tr>
      </table>
    </td>
  </tr>`
}

function sectionTitle(text: string, px = 22) {
  return `
  <tr>
    <td style="padding:14px ${px}px 6px ${px}px;">
      <div style="
        font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
        font-size:12px;line-height:1.2;color:${BRAND.muted};font-weight:800;
        letter-spacing:.06em;text-transform:uppercase;
      ">
        ${escapeHtml(text)}
      </div>
    </td>
  </tr>`
}

function field(label: string, valueHtml: string, px = 22, withTopBorder = true) {
  return `
  <tr>
    <td style="padding:0 ${px}px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        <tr>
          <td style="padding:12px 0;${withTopBorder ? `border-top:1px solid ${BRAND.border};` : ''}">
            <div style="
              font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
              font-size:11px;line-height:1.3;color:${BRAND.muted};font-weight:800;
              letter-spacing:.05em;text-transform:uppercase;margin:0 0 6px 0;
            ">
              ${escapeHtml(label)}
            </div>
            <div style="
              font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
              font-size:14px;line-height:1.6;color:${BRAND.text};font-weight:700;
              word-break:break-word;
            ">
              ${valueHtml}
            </div>
          </td>
        </tr>
      </table>
    </td>
  </tr>`
}

function messageBlock(messageHtml: string, px = 22) {
  return `
  <tr>
    <td style="padding:0 ${px}px 16px ${px}px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0;">
        <tr>
          <td bgcolor="#F8FAFC" style="
            background:#F8FAFC;background-image:linear-gradient(#F8FAFC,#F8FAFC);
            border:1px solid ${BRAND.border};
            border-radius:12px;
            padding:12px 14px;
            font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
            font-size:14px;line-height:1.75;color:${BRAND.text};
            word-break:break-word;
          ">
            ${messageHtml}
          </td>
        </tr>
      </table>
    </td>
  </tr>`
}

function baseWrap(preheader: string, title: string, contentRows: string, siteUrl?: string) {
  const base = normalizeSiteUrl(siteUrl)
  const logoUrl = `${base}/logos/mvpwerk_logo_trans.png`

  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>${escapeHtml(title)}</title>
  <style>
    @media only screen and (max-width: 680px) {
      .container { width: 100% !important; }
      .px { padding-left: 16px !important; padding-right: 16px !important; }
      .h1 { font-size: 20px !important; line-height: 1.25 !important; }
      .p  { font-size: 14px !important; line-height: 1.65 !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${BRAND.bg};background-image:linear-gradient(${BRAND.bg},${BRAND.bg});
  color:${BRAND.text};-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    ${escapeHtml(preheader)}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${BRAND.bg}"
    style="background:${BRAND.bg};background-image:linear-gradient(${BRAND.bg},${BRAND.bg});margin:0;padding:26px 0;">
    <tr>
      <td align="center" style="padding:0 12px;">

        <table role="presentation" width="${CONTAINER_W}" cellpadding="0" cellspacing="0" class="container" bgcolor="${BRAND.card}"
          style="width:${CONTAINER_W}px;max-width:${CONTAINER_W}px;margin:0 auto;background:${BRAND.card};
          background-image:linear-gradient(${BRAND.card},${BRAND.card});
          border:1px solid ${BRAND.border};border-radius:18px;overflow:hidden;">
          <tr>
            <td style="height:4px;background:${BRAND.primary};font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <tr>
            <td class="px" style="padding:18px 22px 10px 22px;">
              <img src="${logoUrl}" alt="${escapeHtml(BRAND.name)}" height="26"
                style="display:block;height:26px;width:auto;border:0;outline:none;text-decoration:none;" />
              <div style="margin-top:8px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
                font-size:12px;line-height:1.4;color:${BRAND.muted};">
                ${escapeHtml(BRAND.websiteTitle)}
              </div>
            </td>
          </tr>

          ${contentRows}

        </table>

        <table role="presentation" width="${CONTAINER_W}" cellpadding="0" cellspacing="0" class="container"
          style="width:${CONTAINER_W}px;max-width:${CONTAINER_W}px;margin:14px auto 0;">
          <tr>
            <td align="center" style="padding:12px 10px;">
              <p style="margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
                font-size:12px;line-height:1.6;color:${BRAND.muted};">
                Fragen? Schreiben Sie uns an
                <a href="mailto:${BRAND.supportEmail}" style="color:${BRAND.primary};text-decoration:underline;">
                  ${BRAND.supportEmail}
                </a>
              </p>
              <p style="margin:6px 0 0 0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
                font-size:11px;line-height:1.6;color:${BRAND.subtle};">
                ${escapeHtml(BRAND.legalNote)}
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>`
}

/** ---------------- Templates ---------------- */

export function renderMvpwerkContactCustomerMail(ctx: ContactCtx) {
  const pre = `Danke – wir haben Ihre Anfrage erhalten und melden uns in der Regel am selben Tag.`
  const title = `Wir haben Ihre Anfrage erhalten – ${BRAND.name}`
  const fullName = `${ctx.firstName} ${ctx.lastName}`.trim()

  const rows = `
    <tr>
      <td class="px" style="padding:6px 22px 10px 22px;">
        ${pill('Anfrage erhalten')}
      </td>
    </tr>

    <tr>
      <td class="px" style="padding:0 22px 14px 22px;">
        <h1 class="h1" style="margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:22px;line-height:1.28;color:${BRAND.text};font-weight:900;">
          Danke für Ihre Anfrage, ${escapeHtml(ctx.firstName)}!
        </h1>
        <p class="p" style="margin:10px 0 0 0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:14px;line-height:1.7;color:${BRAND.muted};">
          Wir haben Ihre Anfrage erhalten und melden uns in der Regel am selben Tag zurück.
        </p>
      </td>
    </tr>

    ${divider()}
    ${sectionTitle('Ihre Angaben')}
    ${field('Name', escapeHtml(fullName), 22, false)}
    ${field(
      'E-Mail',
      `<a href="mailto:${escapeHtml(ctx.email)}" style="color:${BRAND.primary};text-decoration:underline;">${escapeHtml(
        ctx.email
      )}</a>`
    )}
    ${field(
      'Telefon',
      `<a href="tel:${escapeHtml(ctx.phone)}" style="color:${BRAND.primary};text-decoration:underline;">${escapeHtml(
        ctx.phone
      )}</a>`
    )}

    ${
      ctx.message
        ? `
          ${divider()}
          ${sectionTitle('Ihre Nachricht')}
          ${messageBlock(nl2br(ctx.message))}
        `
        : ''
    }

    ${divider()}
    <tr>
      <td class="px" style="padding:12px 22px 18px 22px;">
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:12px;line-height:1.6;color:${BRAND.muted};">
          Tipp: Falls Sie noch Kontext ergänzen möchten, antworten Sie einfach auf diese E-Mail.
        </div>
      </td>
    </tr>
  `

  return baseWrap(pre, title, rows, ctx.siteUrl)
}

export function renderMvpwerkContactInternalMail(ctx: ContactCtx) {
  const pre = `Neue Kontaktanfrage von ${ctx.firstName} ${ctx.lastName}`
  const title = `Neue Kontaktanfrage – ${BRAND.name}`
  const fullName = `${ctx.firstName} ${ctx.lastName}`.trim()
  const submittedAt = new Date().toLocaleString('de-DE')

  const rows = `
    <tr>
      <td class="px" style="padding:6px 22px 10px 22px;">
        ${pill('Neue Kontaktanfrage')}
      </td>
    </tr>

    <tr>
      <td class="px" style="padding:0 22px 10px 22px;">
        <h1 class="h1" style="margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:22px;line-height:1.28;color:${BRAND.text};font-weight:900;">
          Neue Kontaktanfrage
        </h1>
        <p style="margin:10px 0 0 0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:13px;line-height:1.7;color:${BRAND.muted};">
          Quelle: <b style="color:${BRAND.text};">/kontakt</b> · ${escapeHtml(submittedAt)}
        </p>
      </td>
    </tr>

    ${divider()}
    ${sectionTitle('Kontakt')}
    ${field('Name', escapeHtml(fullName), 22, false)}
    ${field(
      'E-Mail',
      `<a href="mailto:${escapeHtml(ctx.email)}" style="color:${BRAND.primary};text-decoration:underline;">${escapeHtml(
        ctx.email
      )}</a>`
    )}
    ${field(
      'Telefon',
      `<a href="tel:${escapeHtml(ctx.phone)}" style="color:${BRAND.primary};text-decoration:underline;">${escapeHtml(
        ctx.phone
      )}</a>`
    )}

    ${divider()}
    ${sectionTitle('Nachricht')}
    ${
      ctx.message
        ? messageBlock(nl2br(ctx.message))
        : messageBlock(`<span style="color:${BRAND.muted};">– (keine Nachricht angegeben)</span>`)
    }

    ${divider()}
    <tr>
      <td class="px" style="padding:12px 22px 18px 22px;">
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:12px;line-height:1.6;color:${BRAND.muted};">
          Hinweis: Reply-To ist auf den Kunden gesetzt – antworten Sie einfach direkt auf diese E-Mail.
        </div>
      </td>
    </tr>
  `

  return baseWrap(pre, title, rows, ctx.siteUrl)
}

export const MVPWERK_SUPPORT_EMAIL = BRAND.supportEmail
