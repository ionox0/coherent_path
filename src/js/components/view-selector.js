'use-strict';

module.exports = React.createClass({
	selectView: function(){
		this.props.changeView();
	},
  render: function() {
    return (
      <div className='view-selector'>
      	<div>List view</div><div>Calendar view</div>
      </div>
    );
  }
});
       