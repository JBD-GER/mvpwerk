// src/app/mails/emailTemplates.ts
type ContactCtx = {
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
  primary: '#0F172A',
  bg: '#f6f9fc',
  border: '#e6edf5',
  text: '#0b1220',
  muted: '#64748b',
}

function escapeHtml(s: string) {
  return (s || '').replace(/[&<>"]/g, (c) =>
    (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' } as Record<string, string>
    )[c]
  )
}
function nl2br(s: string) {
  return escapeHtml(s).replace(/\n/g, '<br/>')
}

function baseWrap(preheader: string, title: string, contentHtml: string) {
  // ✅ CID-Logo (wird aus API als Attachment mit contentId "mvpwerk-logo" mitgeschickt)
  const logoSrc = 'cid:mvpwerk-logo'

  return `<!doctype html>
<html lang="de" style="margin:0;padding:0">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <title>${escapeHtml(title)}</title>
  <style>
    @media only screen and (max-width: 620px) {
      .container { width: 100% !important; }
      .px { padding-left: 16px !important; padding-right: 16px !important; }
      .py { padding-top: 16px !important; padding-bottom: 16px !important; }
      .h1 { font-size: 20px !important; line-height: 1.25 !important; }
      .p  { font-size: 14px !important; line-height: 1.65 !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${BRAND.bg};color:${BRAND.text}">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    ${escapeHtml(preheader)}
  </div>

  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:${BRAND.bg};margin:0;padding:24px 0;">
    <tr>
      <td align="center" class="px" style="padding:0 12px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" class="container"
          style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:18px;border:1px solid ${BRAND.border};overflow:hidden;">
          <tr>
            <td style="height:4px;background:${BRAND.primary};padding:0;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- header (stacked – mobile first) -->
          <tr>
            <td class="px py" style="padding:18px 22px 12px 22px;">
              <div style="display:block;">
                <img
                  src="${logoSrc}"
                  alt="${escapeHtml(BRAND.name)}"
                  height="26"
                  style="display:block;height:26px;width:auto;"
                />
                <div style="margin-top:8px;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
                  font-size:12px;color:${BRAND.muted};">
                  ${escapeHtml(BRAND.websiteTitle)}
                </div>
              </div>
            </td>
          </tr>

          ${contentHtml}
        </table>

        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" class="container" style="max-width:640px;margin:14px auto 0;">
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
                font-size:11px;line-height:1.6;color:#94a3b8;">
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

function infoCard(title: string, html: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;margin:0;">
      <tr>
        <td class="px" style="padding:0 22px 12px 22px;">
          <div style="border:1px solid #e5e7eb;border-radius:14px;background:#f9fafb;padding:14px;">
            <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
              font-size:12px;color:#111827;font-weight:700;margin:0 0 6px 0;">
              ${escapeHtml(title)}
            </div>
            <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
              font-size:13px;line-height:1.6;color:#334155;">
              ${html}
            </div>
          </div>
        </td>
      </tr>
    </table>
  `
}

export function renderMvpwerkContactCustomerMail(ctx: ContactCtx) {
  const pre = `Danke – wir haben Ihre Anfrage erhalten und melden uns in der Regel am selben Tag.`
  const title = `Danke für Ihre Anfrage – ${BRAND.name}`
  const fullName = `${ctx.firstName} ${ctx.lastName}`.trim()

  const content = `
    <tr>
      <td class="px" style="padding:0 22px 6px 22px;">
        <h1 class="h1" style="margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:22px;line-height:1.3;color:${BRAND.text};font-weight:800;">
          Danke für Ihre Anfrage, ${escapeHtml(ctx.firstName)}!
        </h1>
        <p class="p" style="margin:10px 0 0 0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:14px;line-height:1.7;color:#334155;">
          Wir haben Ihre Anfrage erhalten und melden uns in der Regel am selben Tag zurück.
        </p>
      </td>
    </tr>

    ${infoCard(
      'Ihre Angaben',
      `
        <div><b>Name:</b> ${escapeHtml(fullName)}</div>
        <div><b>E-Mail:</b> ${escapeHtml(ctx.email)}</div>
        <div><b>Telefon:</b> ${escapeHtml(ctx.phone)}</div>
      `
    )}

    ${ctx.message ? infoCard('Ihre Nachricht', `<div>${nl2br(ctx.message)}</div>`) : ''}

    <tr>
      <td class="px" style="padding:6px 22px 20px 22px;">
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:12px;line-height:1.6;color:${BRAND.muted};">
          Tipp: Falls Sie noch Kontext ergänzen möchten, antworten Sie einfach auf diese E-Mail.
        </div>
      </td>
    </tr>
  `

  return baseWrap(pre, title, content)
}

export function renderMvpwerkContactInternalMail(ctx: ContactCtx) {
  const pre = `Neue Kontaktanfrage von ${ctx.firstName} ${ctx.lastName}`
  const title = `Neue Kontaktanfrage – ${BRAND.name}`
  const fullName = `${ctx.firstName} ${ctx.lastName}`.trim()
  const submittedAt = new Date().toLocaleString('de-DE')

  const content = `
    <tr>
      <td class="px" style="padding:0 22px 6px 22px;">
        <h1 class="h1" style="margin:0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:22px;line-height:1.3;color:${BRAND.text};font-weight:800;">
          Neue Kontaktanfrage
        </h1>
        <p style="margin:10px 0 0 0;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:13px;line-height:1.7;color:#334155;">
          Quelle: <b>/kontakt</b> · ${escapeHtml(submittedAt)}
        </p>
      </td>
    </tr>

    ${infoCard(
      'Kontakt',
      `
        <div><b>Name:</b> ${escapeHtml(fullName)}</div>
        <div><b>E-Mail:</b> <a href="mailto:${escapeHtml(ctx.email)}" style="color:${BRAND.primary};text-decoration:underline;">${escapeHtml(ctx.email)}</a></div>
        <div><b>Telefon:</b> <a href="tel:${escapeHtml(ctx.phone)}" style="color:${BRAND.primary};text-decoration:underline;">${escapeHtml(ctx.phone)}</a></div>
      `
    )}

    ${
      ctx.message
        ? infoCard('Nachricht', `<div>${nl2br(ctx.message)}</div>`)
        : infoCard('Nachricht', `<div style="color:${BRAND.muted};">– (keine Nachricht angegeben)</div>`)
    }

    <tr>
      <td class="px" style="padding:6px 22px 20px 22px;">
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;
          font-size:12px;line-height:1.6;color:${BRAND.muted};">
          Hinweis: Reply-To wird im Versand auf den Kunden gesetzt – antworten Sie einfach direkt auf die E-Mail.
        </div>
      </td>
    </tr>
  `

  return baseWrap(pre, title, content)
}

export const MVPWERK_SUPPORT_EMAIL = BRAND.supportEmail
