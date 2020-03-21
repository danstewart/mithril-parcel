// This is our router
// Here we import our components and specify the routes the correspond to
import m from 'mithril';
import LandingPage from './components/LandingPage'
import ExamplePage from './components/ExamplePage'

export default {
	route: () => {
		m.route(document.body, '/', {
			'/': LandingPage,
			'/example': ExamplePage,
		});
	}
}
