// src/app/mails/emailTemplates.ts
export type Lang = 'de' | 'en'

export type ContactCtx = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message?: string
  siteUrl?: string
  lang?: Lang // ✅ neu
}

const BRAND = {
  name: 'MVPWERK',
  websiteTitle: 'MVPWERK',
  supportEmail: 'info@mvpwerk.de',
  legalNote: '© MVPWERK • Made in Germany • DSGVO-konform',

  bg: '#ffffff',
  card: '#ffffff',
  border: '#E5E7EB',
  text: '#0B1220',
  muted: '#111827',
}

const DEFAULT_SITE_URL = 'https://www.mvpwerk.de'
const CONTAINER_W = 640

function escapeHtml(s: string) {
  return (s || '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' } as any)[c])
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

function h1(text: string, px = 22) {
  return `
  <tr>
    <td class="px" style="padding:0 ${px}px 10px ${px}px;">
      <div class="t" style="
        font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
        font-size:22px;line-height:1.28;color:${BRAND.text};font-weight:800;
      ">${text}</div>
    </td>
  </tr>`
}

function p(text: string, px = 22) {
  return `
  <tr>
    <td class="px" style="padding:0 ${px}px 12px ${px}px;">
      <div style="
        font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
        font-size:14px;line-height:1.65;color:${BRAND.text};font-weight:500;
      ">${text}</div>
    </td>
  </tr>`
}

function sectionTitle(text: string, px = 22) {
  return `
  <tr>
    <td class="px" style="padding:14px ${px}px 6px ${px}px;">
      <div style="
        font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
        font-size:12px;line-height:1.2;color:${BRAND.text};font-weight:800;
        letter-spacing:.06em;text-transform:uppercase;
      ">${escapeHtml(text)}</div>
    </td>
  </tr>`
}

function field(label: string, valueHtml: string, px = 22, withTopBorder = true) {
  return `
  <tr>
    <td class="px" style="padding:0 ${px}px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        <tr>
          <td style="padding:12px 0;${withTopBorder ? `border-top:1px solid ${BRAND.border};` : ''}">
            <div style="
              font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
              font-size:11px;line-height:1.3;color:${BRAND.text};font-weight:800;
              letter-spacing:.05em;text-transform:uppercase;margin:0 0 6px 0;
            ">${escapeHtml(label)}</div>

            <div style="
              font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
              font-size:14px;line-height:1.6;color:${BRAND.text};font-weight:600;
              word-break:break-word;
            ">${valueHtml}</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>`
}

function messageBox(messageHtml: string, px = 22) {
  return `
  <tr>
    <td class="px" style="padding:0 ${px}px 16px ${px}px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0;">
        <tr>
          <td bgcolor="#FFFFFF" style="
            background:#FFFFFF;
            border:1px solid ${BRAND.border};
            border-radius:12px;
            padding:12px 14px;
            font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
            font-size:14px;line-height:1.7;color:${BRAND.text};
            word-break:break-word;
          ">${messageHtml}</td>
        </tr>
      </table>
    </td>
  </tr>`
}

function baseWrap(preheader: string, title: string, contentRows: string, siteUrl?: string, lang: Lang = 'de') {
  const base = normalizeSiteUrl(siteUrl)
  const logoUrl = `${base}/logos/mvpwerk_logo_trans.png`

  const footerLine =
    lang === 'en'
      ? `Questions? Email us at <a href="mailto:${BRAND.supportEmail}" style="color:${BRAND.text};text-decoration:underline;">${BRAND.supportEmail}</a>`
      : `Fragen? Schreiben Sie uns an <a href="mailto:${BRAND.supportEmail}" style="color:${BRAND.text};text-decoration:underline;">${BRAND.supportEmail}</a>`

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no" />
  <title>${escapeHtml(title)}</title>

  <style>
    @media only screen and (max-width: 680px) {
      .container { width: 100% !important; max-width: 100% !important; }
      .px { padding-left: 16px !important; padding-right: 16px !important; }
      .t { font-size: 20px !important; line-height: 1.25 !important; }
    }
    a, a:visited { color: ${BRAND.text} !important; text-decoration: underline !important; }
    a[x-apple-data-detectors], .apple-link a, #MessageViewBody a {
      color: ${BRAND.text} !important;
      text-decoration: underline !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }
    @media (prefers-color-scheme: dark) {
      body, table, td, div { background: #FFFFFF !important; color: ${BRAND.text} !important; }
      .force-card { background:#FFFFFF !important; }
      a, a:visited { color: ${BRAND.text} !important; }
    }
  </style>
</head>

<body style="margin:0;padding:0;background:${BRAND.bg};color:${BRAND.text};
  -webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">
    ${escapeHtml(preheader)}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${BRAND.bg}"
    style="background:${BRAND.bg};margin:0;padding:26px 0;">
    <tr>
      <td align="center" style="padding:0 12px;">

        <table role="presentation" width="${CONTAINER_W}" cellpadding="0" cellspacing="0"
          class="container force-card" bgcolor="${BRAND.card}"
          style="width:${CONTAINER_W}px;max-width:${CONTAINER_W}px;margin:0 auto;background:${BRAND.card};
          border:1px solid ${BRAND.border};border-radius:18px;overflow:hidden;">
          <tr>
            <td style="height:3px;background:${BRAND.text};font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <tr>
            <td class="px" style="padding:18px 22px 10px 22px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="left" style="vertical-align:middle;">
                    <img src="${logoUrl}" alt="${escapeHtml(BRAND.name)}" height="26"
                      style="display:block;height:26px;width:auto;border:0;outline:none;text-decoration:none;" />
                  </td>
                  <td align="right" style="vertical-align:middle;">
                    <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
                      font-size:12px;line-height:1.4;color:${BRAND.text};font-weight:700;">
                      ${escapeHtml(BRAND.websiteTitle)}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${contentRows}
        </table>

        <table role="presentation" width="${CONTAINER_W}" cellpadding="0" cellspacing="0" class="container"
          style="width:${CONTAINER_W}px;max-width:${CONTAINER_W}px;margin:14px auto 0;">
          <tr>
            <td align="center" style="padding:12px 10px;">
              <p style="margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
                font-size:12px;line-height:1.6;color:${BRAND.text};font-weight:600;">
                ${footerLine}
              </p>
              <p style="margin:6px 0 0 0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
                font-size:11px;line-height:1.6;color:${BRAND.text};">
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

/** ✅ Customer Mail (DE/EN via ctx.lang) */
export function renderMvpwerkContactCustomerMail(ctx: ContactCtx) {
  const lang: Lang = ctx.lang === 'en' ? 'en' : 'de'
  const fullName = `${ctx.firstName} ${ctx.lastName}`.trim()

  const copy =
    lang === 'en'
      ? {
          pre: `Thanks — we received your request and usually reply the same day.`,
          title: `We received your request — ${BRAND.name}`,
          h: `Thanks for reaching out, ${escapeHtml(ctx.firstName)}!`,
          lead: `We received your request and will get back to you — usually the same day.`,
          section: 'Your details',
          msgSection: 'Your message',
          tip: `Tip: If you'd like to add more context, simply reply to this email.`,
          name: 'Name',
          mail: 'Email',
          phone: 'Phone',
        }
      : {
          pre: `Danke – wir haben Ihre Anfrage erhalten und melden uns in der Regel am selben Tag.`,
          title: `Wir haben Ihre Anfrage erhalten – ${BRAND.name}`,
          h: `Danke für Ihre Anfrage, ${escapeHtml(ctx.firstName)}!`,
          lead: `Wir haben Ihre Anfrage erhalten und melden uns in der Regel am selben Tag zurück.`,
          section: 'Ihre Angaben',
          msgSection: 'Ihre Nachricht',
          tip: `Tipp: Falls Sie noch Kontext ergänzen möchten, antworten Sie einfach auf diese E-Mail.`,
          name: 'Name',
          mail: 'E-Mail',
          phone: 'Telefon',
        }

  const rows = `
    ${h1(copy.h)}
    ${p(copy.lead)}

    ${divider()}
    ${sectionTitle(copy.section)}
    ${field(copy.name, escapeHtml(fullName), 22, false)}
    ${field(
      copy.mail,
      `<a href="mailto:${escapeHtml(ctx.email)}" style="color:${BRAND.text};text-decoration:underline;">${escapeHtml(
        ctx.email
      )}</a>`
    )}
    ${field(
      copy.phone,
      `<a href="tel:${escapeHtml(ctx.phone)}" style="color:${BRAND.text};text-decoration:underline;">${escapeHtml(
        ctx.phone
      )}</a>`
    )}

    ${
      ctx.message?.trim()
        ? `
          ${divider()}
          ${sectionTitle(copy.msgSection)}
          ${messageBox(nl2br(ctx.message))}
        `
        : ''
    }

    ${divider()}
    <tr>
      <td class="px" style="padding:12px 22px 18px 22px;">
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:12px;line-height:1.6;color:${BRAND.text};font-weight:600;">
          ${copy.tip}
        </div>
      </td>
    </tr>
  `

  return baseWrap(copy.pre, copy.title, rows, ctx.siteUrl, lang)
}

/** ✅ Internal Mail (optional ebenfalls EN) */
export function renderMvpwerkContactInternalMail(ctx: ContactCtx) {
  const lang: Lang = ctx.lang === 'en' ? 'en' : 'de'
  const fullName = `${ctx.firstName} ${ctx.lastName}`.trim()
  const submittedAt = new Date().toLocaleString(lang === 'en' ? 'en-GB' : 'de-DE')

  const copy =
    lang === 'en'
      ? {
          pre: `New contact request from ${ctx.firstName} ${ctx.lastName}`,
          title: `New contact request — ${BRAND.name}`,
          h: 'New contact request',
          source: 'Source',
          contact: 'Contact',
          msg: 'Message',
          none: '— (no message provided)',
          name: 'Name',
          mail: 'Email',
          phone: 'Phone',
          hint: `Note: Reply-To is set to the customer — just reply to this email.`,
        }
      : {
          pre: `Neue Kontaktanfrage von ${ctx.firstName} ${ctx.lastName}`,
          title: `Neue Kontaktanfrage – ${BRAND.name}`,
          h: 'Neue Kontaktanfrage',
          source: 'Quelle',
          contact: 'Kontakt',
          msg: 'Nachricht',
          none: '– (keine Nachricht angegeben)',
          name: 'Name',
          mail: 'E-Mail',
          phone: 'Telefon',
          hint: `Hinweis: Reply-To ist auf den Kunden gesetzt – antworten Sie einfach direkt auf diese E-Mail.`,
        }

  const rows = `
    ${h1(copy.h)}

    <tr>
      <td class="px" style="padding:0 22px 12px 22px;">
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:13px;line-height:1.65;color:${BRAND.text};font-weight:600;">
          ${copy.source}: <b style="color:${BRAND.text};">/kontakt</b> · ${escapeHtml(submittedAt)}
        </div>
      </td>
    </tr>

    ${divider()}
    ${sectionTitle(copy.contact)}
    ${field(copy.name, escapeHtml(fullName), 22, false)}
    ${field(
      copy.mail,
      `<a href="mailto:${escapeHtml(ctx.email)}" style="color:${BRAND.text};text-decoration:underline;">${escapeHtml(
        ctx.email
      )}</a>`
    )}
    ${field(
      copy.phone,
      `<a href="tel:${escapeHtml(ctx.phone)}" style="color:${BRAND.text};text-decoration:underline;">${escapeHtml(
        ctx.phone
      )}</a>`
    )}

    ${divider()}
    ${sectionTitle(copy.msg)}
    ${
      ctx.message?.trim()
        ? messageBox(nl2br(ctx.message))
        : messageBox(`<span style="color:${BRAND.text};font-weight:600;">${copy.none}</span>`)
    }

    ${divider()}
    <tr>
      <td class="px" style="padding:12px 22px 18px 22px;">
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:12px;line-height:1.6;color:${BRAND.text};font-weight:600;">
          ${copy.hint}
        </div>
      </td>
    </tr>
  `

  return baseWrap(copy.pre, copy.title, rows, ctx.siteUrl, lang)
}

export const MVPWERK_SUPPORT_EMAIL = BRAND.supportEmail
