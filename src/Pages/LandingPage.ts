import m from 'mithril';

export default {
	view: () => m('div.foo',
		[
			m('p', 'This is src/Pages/LandingPage.ts'),
			m('a', { href: '/#!example' }, 'Link to some other page')
		],
	)
};
