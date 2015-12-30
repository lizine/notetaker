var React = require('react');

var Repos = React.createClass({
 propTypes: {
     username: React.PropTypes.string.isRequired,
     repos: React.PropTypes.array.isRequired
 },
    render:function(){
        console.log(this.props.repos ,'REPOSS')
        return (
              <div>
                  <p>REPOS</p>

              </div>
        )
    }
})
module.exports = Repos;