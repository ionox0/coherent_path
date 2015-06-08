'use-strict';

var CampaignList = require('./components/campaign-list');
var Header = require('./components/header');
var ViewSelector = require('./components/view-selector');

module.exports = React.createClass({
  loadCampaign: function(offset) {
    var url = 'https://app.coherentpath.com/demo/js/campaigns.json';
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data){
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function(){
    this.loadCampaign();
    //setInterval(this.loadMovies, this.props.pollInterval);
  },
  changeView: function(){
  	return;
  },
  render: function(){
    return (
      <div className='app'>
      	<Header />
        <h1>L.L.Bean</h1>
        <h2>Campaign Calendar</h2>
        <ViewSelector selected={this.state.selectedView} onClick={this.changeView} />
        <CampaignList data={this.state.data} />
      </div>
    );
  }
});
