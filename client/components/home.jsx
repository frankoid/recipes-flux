var React = require("react");

var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var RecipeActions = require("../actions/recipe-actions");
var RecipeStore = require("../stores/recipe-store");

// Component
var Home = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [RecipeStore.mixin],

  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      <div>
        <p>
          home rendered
        </p>
        <button onClick={this.buttonClicked}>Press me</button>
        <RouteHandler />
      </div>
    );
  },
  storeDidChange: function () {
      console.log("Home.storeDidChange");
  },
  buttonClicked: function() {
      RecipeActions.writeArbitraryData({
          foo: "bar",
          answer: 42
      });
  }
});

module.exports = Home;
