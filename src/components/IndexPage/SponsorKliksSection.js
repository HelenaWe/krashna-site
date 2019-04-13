import React from 'react'
import { injectIntl } from 'gatsby-plugin-intl'
import TwoPartLayout from './TwoPartLayout'

const SponsorKliksSection = ({ intl }) => {
  return (
    <div>
      <div className="container pt-5 pb-5 text-center">
        <TwoPartLayout
          title={intl.formatMessage({ id: 'index.sponsor-kliks.question' })}
        >
          <a
            href="https://www.sponsorkliks.com/products/shops.php?club=9493"
            target="_blank"
            rel="noopener noreferrer"
            className="float-md-right"
          >
            <img
              src="https://www.sponsorkliks.com/gfx/sk_lr_logos/licht_200_200.gif"
              width={130}
              alt="SponsorKliks, gratis sponsoren!"
              title="SponsorKliks, sponsor jouw sponsordoel gratis!"
              border="0"
            />
          </a>
        </TwoPartLayout>
      </div>
    </div>
  )
}

export default injectIntl(SponsorKliksSection)
