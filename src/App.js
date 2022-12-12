import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import PageWrapper from "./components/shared/template/PageWrapper";

import { Home, SingleProduct, Cart, Checkout, Error, About, Products, PrivateRoute, AuthWrapper } from "./pages";
import ArtisianSignup from "./pages/ArtisianSignup";
import CustomerSignup from "./pages/CustomerSignup";
import Review from "./pages/Review";
import SignupPage from "./pages/Signup";
function App() {
	return (
		<AuthWrapper>
			<Router>
				<Navbar />
				<Sidebar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='signup' element={<SignupPage />}></Route>
					<Route path='signup/artisian' element={<ArtisianSignup />} />
					<Route path='signup/customer' element={<CustomerSignup />} />
					<Route path='about' element={<About />} />
					<Route path='cart' element={<Cart />} />
					<Route path='products' element={<Products />} />
					<Route path='products/:id' element={<SingleProduct />} />
					<Route path='review' element={<Review />} />
					<Route
						path='checkout'
						element={
							<PrivateRoute>
								<Checkout />
							</PrivateRoute>
						}
					/>
					<Route path='*' element={<Error />} />
				</Routes>
				<Footer />
			</Router>
		</AuthWrapper>
	);
}

export default App;
