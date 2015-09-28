var React = require("react");

var PlannerStore = require("../stores/planner-store");

var PlannerDay = React.createClass({
    render: function() {
        return (
            <p>
                {this.getDayName()}
            </p>
        );
    },
    getDayName: function() {
        return PlannerStore.getDay(this.props.dayIndex).name;
    }
});

module.exports = PlannerDay;
