import HomeLayout from './Layouts/HomeLayout'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ShopLayout from './Layouts/ShopLayout'
import ErrorComponent from './Component/ErrorComponent/ErrorComponent'
import ProductLayout from './Layouts/ProductLayout'
import BlogLayout from './Layouts/BlogLayout'
import PageLayout from './Layouts/PageLayout'
import ContactLayout from './Layouts/ContactLayout'
import './App.css'

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={HomeLayout} exact></Route>
        <Route path="/home" component={HomeLayout} exact></Route>
        <Route path="/shop" component={ShopLayout} exact></Route>
        <Route path="/products" component={ProductLayout} exact></Route>
        <Route path="/blog" component={BlogLayout} exact></Route>
        <Route path="/pages" component={PageLayout} exact></Route>
        <Route path="/contact" component={ContactLayout} exact></Route>
        <Route path="" component={ErrorComponent}></Route>
      </Switch>
    </>
  )
}

export default App
