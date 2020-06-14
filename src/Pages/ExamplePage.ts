import m from 'mithril';
import { RenderList } from '../Components/RenderList';

const titleStyle = {
	color: 'grey',
	'font-size': 'x-large',
};

export default {
	view: () =>	m('div.bar', [
		m('p', 'This is src/Pages/ExamplePage.ts'),
		m('p', { style: titleStyle }, 'Some other page'),

		m('p',
			`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
		),

		// Call our components and pass it an array to render via the attrs argument
		m('p', 'The following list is rendered by src/Components/RenderList.ts'),
		m(RenderList, { items: ['Thing', 'Another Thing', 'That Thing', 'This Thing'] }),
		m('a', { href: '/' }, 'Back to Landing Page')
	]),
};
