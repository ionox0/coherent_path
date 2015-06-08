'use-strict';

var Event = require('./event');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="campaign-list">
        {this.props.data.map(function(item, i){
          return (
            <Event data={item} key={i} />
          );
        }, this )}
      </div>
    );
  }
});