import React from 'react'
import { withTranslation } from 'react-i18next'
import Markdown from 'react-remarkable'
import PageTemplate from '../templates/pageTemplate'

const PartnersPage = ({ t }) => (
  <PageTemplate title={t('partners.title')}>
    <Markdown>{t('partners.text')}</Markdown>
  </PageTemplate>
)

export default withTranslation()(PartnersPage)
