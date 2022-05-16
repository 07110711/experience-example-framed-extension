// Copyright 2021-2022 Ellucian Company L.P. and its affiliates.

module.exports = {
    name: 'Framed',
    publisher: 'Ellucian',
    cards: [{
        type: 'FramedCard',
        source: './src/cards/FramedCard.jsx',
        title: 'Framed Card',
        displayCardType: 'Framed',
        description: 'Renders a URL in an iframe',
        // Remove the template block if card should be a single card vs a template
        template: {
            image: './src/assets/Iframe Card and Page.png',
            title: 'Iframe Card and Page'
        },
        customConfiguration: {
            source: './src/cards/FramedCardConfiguration.jsx'
        },
        pageRoute: {
            route: '/'
        }
    }, {
        type: 'IconMessageCard',
        source: './src/cards/IconMessageCard.jsx',
        title: 'Icon Message Card',
        displayCardType: 'Icon Message',
        description: 'Renders an icon and message to launch a framed page',
        // Remove the template block if card should be a single card vs a template
        template: {
            image: './src/assets/Icon Card and Page.png',
            title: 'Icon Card and Page'
        },
        customConfiguration: {
            source: './src/cards/IconMessageCardConfiguration.jsx'
        },
        pageRoute: {
            route: '/'
        }
    }],
    page: {
        source: './src/page/FramedPage.jsx'
    }
}