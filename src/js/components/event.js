'use-strict';

module.exports = React.createClass({
  convertDate: function(date){
    date = date.split('/');
    return new Date(date[0], date[1], date[2]);
  },
  render: function() {
    return (
      <div className='event'>
        <div className='date-wrapper'>
          <div className='day'>
            {this.convertDate(this.props.data.date).getDay()}
          </div>
          <div class='date'>
            {this.convertDate(this.props.data.date).getDate()}
          </div>
          <div class='month'>
            {this.convertDate(this.props.data.date).getMonth()}
          </div>
          <div class='year'>
            {this.convertDate(this.props.data.date).getFullYear()}
          </div>
        </div>
        <div className='title'>
          {this.props.data.title}
        </div>
        <div className='status'>
          DRAFT - Edit / Duplicate 
        </div>
      </div>
    );
  }
});