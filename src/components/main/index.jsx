import { Route, Switch } from "react-router-dom";
import Home from "../home";
import News from "../news";
import Profile from "../profile";
import Messages from "../messages";
const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/nba" component={News}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path='/messages' component={Messages}></Route>
      </Switch>
    </div>
  );
};
export default Main;
