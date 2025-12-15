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

  bg: '#ffffff',
  card: '#ffffff',
  border: '#E5E7EB', // light border
  text: '#0B1220', // near-black
  muted: '#111827', // still dark (so it stays "black-ish")
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

/** ---------- blocks ---------- */

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

/** ✅ label above value => always looks identical (mobile + desktop) */
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
  // ✅ still WHITE; just a border so it’s readable
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

/** ---------- wrapper ---------- */

function baseWrap(preheader: string, title: string, contentRows: string, siteUrl?: string) {
  const base = normalizeSiteUrl(siteUrl)
  const logoUrl = `${base}/logos/mvpwerk_logo_trans.png`

  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />

  <!-- ✅ FORCE LIGHT LOOK -->
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />

  <!-- ✅ stop iOS from auto-blue links where possible -->
  <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no" />

  <title>${escapeHtml(title)}</title>

  <style>
    @media only screen and (max-width: 680px) {
      .container { width: 100% !important; max-width: 100% !important; }
      .px { padding-left: 16px !important; padding-right: 16px !important; }
      .t { font-size: 20px !important; line-height: 1.25 !important; }
    }

    /* ✅ keep links NOT blue */
    a, a:visited { color: ${BRAND.text} !important; text-decoration: underline !important; }

    /* ✅ Apple Mail / iOS auto-detected links */
    a[x-apple-data-detectors],
    .apple-link a,
    #MessageViewBody a {
      color: ${BRAND.text} !important;
      text-decoration: underline !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    /* ✅ if client tries dark mode anyway: force white/bg + black text */
    @media (prefers-color-scheme: dark) {
      body, table, td, div { background: #FFFFFF !important; color: ${BRAND.text} !important; }
      .force-card { background:#FFFFFF !important; }
      a, a:visited { color: ${BRAND.text} !important; }
    }
  </style>
</head>

<body style="margin:0;padding:0;background:${BRAND.bg};color:${BRAND.text};
  -webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <!-- preheader -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;mso-hide:all;">
    ${escapeHtml(preheader)}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" bgcolor="${BRAND.bg}"
    style="background:${BRAND.bg};margin:0;padding:26px 0;">
    <tr>
      <td align="center" style="padding:0 12px;">

        <!-- main card -->
        <table role="presentation" width="${CONTAINER_W}" cellpadding="0" cellspacing="0"
          class="container force-card" bgcolor="${BRAND.card}"
          style="width:${CONTAINER_W}px;max-width:${CONTAINER_W}px;margin:0 auto;background:${BRAND.card};
          border:1px solid ${BRAND.border};border-radius:18px;overflow:hidden;">
          <tr>
            <td style="height:3px;background:${BRAND.text};font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- header -->
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

        <!-- footer -->
        <table role="presentation" width="${CONTAINER_W}" cellpadding="0" cellspacing="0" class="container"
          style="width:${CONTAINER_W}px;max-width:${CONTAINER_W}px;margin:14px auto 0;">
          <tr>
            <td align="center" style="padding:12px 10px;">
              <p style="margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
                font-size:12px;line-height:1.6;color:${BRAND.text};font-weight:600;">
                Fragen? Schreiben Sie uns an
                <a href="mailto:${BRAND.supportEmail}" style="color:${BRAND.text};text-decoration:underline;">
                  ${BRAND.supportEmail}
                </a>
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

/** ---------- templates ---------- */

export function renderMvpwerkContactCustomerMail(ctx: ContactCtx) {
  const pre = `Danke – wir haben Ihre Anfrage erhalten und melden uns in der Regel am selben Tag.`
  const title = `Wir haben Ihre Anfrage erhalten – ${BRAND.name}`
  const fullName = `${ctx.firstName} ${ctx.lastName}`.trim()

  const rows = `
    ${h1(`Danke für Ihre Anfrage, ${escapeHtml(ctx.firstName)}!`)}
    ${p('Wir haben Ihre Anfrage erhalten und melden uns in der Regel am selben Tag zurück.')}

    ${divider()}
    ${sectionTitle('Ihre Angaben')}
    ${field('Name', escapeHtml(fullName), 22, false)}
    ${field(
      'E-Mail',
      `<a href="mailto:${escapeHtml(ctx.email)}" style="color:${BRAND.text};text-decoration:underline;">${escapeHtml(
        ctx.email
      )}</a>`
    )}
    ${field(
      'Telefon',
      `<a href="tel:${escapeHtml(ctx.phone)}" style="color:${BRAND.text};text-decoration:underline;">${escapeHtml(
        ctx.phone
      )}</a>`
    )}

    ${
      ctx.message?.trim()
        ? `
          ${divider()}
          ${sectionTitle('Ihre Nachricht')}
          ${messageBox(nl2br(ctx.message))}
        `
        : ''
    }

    ${divider()}
    <tr>
      <td class="px" style="padding:12px 22px 18px 22px;">
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:12px;line-height:1.6;color:${BRAND.text};font-weight:600;">
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
    ${h1('Neue Kontaktanfrage')}

    <tr>
      <td class="px" style="padding:0 22px 12px 22px;">
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:13px;line-height:1.65;color:${BRAND.text};font-weight:600;">
          Quelle: <b style="color:${BRAND.text};">/kontakt</b> · ${escapeHtml(submittedAt)}
        </div>
      </td>
    </tr>

    ${divider()}
    ${sectionTitle('Kontakt')}
    ${field('Name', escapeHtml(fullName), 22, false)}
    ${field(
      'E-Mail',
      `<a href="mailto:${escapeHtml(ctx.email)}" style="color:${BRAND.text};text-decoration:underline;">${escapeHtml(
        ctx.email
      )}</a>`
    )}
    ${field(
      'Telefon',
      `<a href="tel:${escapeHtml(ctx.phone)}" style="color:${BRAND.text};text-decoration:underline;">${escapeHtml(
        ctx.phone
      )}</a>`
    )}

    ${divider()}
    ${sectionTitle('Nachricht')}
    ${
      ctx.message?.trim()
        ? messageBox(nl2br(ctx.message))
        : messageBox(`<span style="color:${BRAND.text};font-weight:600;">– (keine Nachricht angegeben)</span>`)
    }

    ${divider()}
    <tr>
      <td class="px" style="padding:12px 22px 18px 22px;">
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:12px;line-height:1.6;color:${BRAND.text};font-weight:600;">
          Hinweis: Reply-To ist auf den Kunden gesetzt – antworten Sie einfach direkt auf diese E-Mail.
        </div>
      </td>
    </tr>
  `

  return baseWrap(pre, title, rows, ctx.siteUrl)
}

export const MVPWERK_SUPPORT_EMAIL = BRAND.supportEmail
