// A standard mithril component
// Here we specify any styling as a JS object
import m from 'mithril';

export default {
	view: () =>	m('div.bar', [
		m('p', { style: { color: 'grey', 'font-size': 'x-large' } }, 'Some other page'),

		m('p',
			`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
		),

		m('ul', [
			['Thing', 'Another Thing', 'That Thing', 'This Thing'].map(letter => {
				return m('li', { style: { 'list-style-type': 'circle' } }, letter);
			}),
		]),
	]),
};
