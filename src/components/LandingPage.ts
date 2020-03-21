// A standard mithril component
// Here we specify the styling by importing from a css file

// @ts-ignore
import css from '../styles/LandingPage.css';
import m from 'mithril';

export default {
	view: () => m('div.foo',
		{ style: css },
		[
			m('p', 'Mithril Parcel'),
			m('a', { href: '/#!example' }, 'Link to some other page')
		],
	)
};
