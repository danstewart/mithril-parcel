// This is our router
// Here we import our components and specify the routes the correspond to
import m from 'mithril';
import LandingPage from './Pages/LandingPage'
import ExamplePage from './Pages/ExamplePage'

export default {
	route: () => {
		m.route(document.querySelector('#mount'), '/', {
			'/': LandingPage,
			'/example': ExamplePage,
		});
	}
}
