// components/LanguageSwitchLink.js
import '../node_modules/flag-icons/css/flag-icons.min.css'
import languageDetector from '../lib/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Button } from '@mui/material'
import { FormatColorText } from '@mui/icons-material'

const flags = {
  es: 'mx',
  en: 'us',
  pt: 'br'
}

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter()

  let href = rest.href || router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach(k => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }

  const switchLanguage = e => {
    e.preventDefault()
    languageDetector.cache(locale)
    router.reload()
  }

  return (
    <Link href={href} onClick={switchLanguage}>
      <Button
        sx={{
          height: '100%',
          width: 'auto',
          color: 'text.secondary'
        }}
        // variant="elevated"
        color="primary"
        size="small"
        startIcon={<span class={`fi fi-${flags[locale]} fis`} />}
      >
        {locale}
      </Button>
    </Link>
  )
}

export default LanguageSwitchLink
