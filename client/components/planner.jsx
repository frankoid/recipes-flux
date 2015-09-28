var React = require("react");

var PlannerDay = require("./planner-day");

var Planner = React.createClass({
    render: function() {
        return (
            <div>
                <PlannerDay dayIndex="0"/>
                <PlannerDay dayIndex="1"/>
                <PlannerDay dayIndex="2"/>
                <PlannerDay dayIndex="3"/>
                <PlannerDay dayIndex="4"/>
                <PlannerDay dayIndex="5"/>
                <PlannerDay dayIndex="6"/>
            </div>
        );
    }
});

module.exports = Planner;
