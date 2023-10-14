import Home from "./views/home";
import Content from "./views/content";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./views/create";
import BlogDetail from "./views/blogDetail";
import NotFound from "./components/notFound";
import AboutMe from "./views/about";
import VFooter from "./views/footer";
//导入轮播图组件
import Carousel from "./components/lunbotu";

/**
 * Renders the main component of the application.
 *  渲染根组件
 * @return {ReactNode} The JSX element representing the main component.
 * 返回根组件的jsx
 */
const App = () => {
  const image = [
    "../public/1.jpg",
    "../public/2.jpg",
    "../public/3.jpg",
  ]
  return (
    <Router>
      <div className="app">
        <Home />
        <Carousel images={image} interval={2000} ></Carousel>
        <div className="con">
          {/* 切换器 */}
          <Switch>
            {/* 各级路由 */}
            <Route path="/" exact>
              <Content />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog/:id">
              <BlogDetail />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <VFooter />
      </div>
    </Router>
  )
}


export default App;
