// A standard mithril component
import m from 'mithril';

const RenderList = {
	view: ({ attrs }) => m('ul', [
		attrs.items.map(item => m('li', item))
	])
};

export {
	RenderList
}
