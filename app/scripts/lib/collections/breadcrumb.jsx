var React = require('react');
var ClassGenerator = require('../mixins/classGenerator.js');

var defaultClassName = 'ui breadcrumb';

var Breadcrumb = React.createClass({

  mixins: [ClassGenerator],

  render: function () {

    var {className, ...other} = this.props;

    return (
      <div {...other} className={this.getClassName(defaultClassName)} >
        {this.props.children}
      </div>
    );
  }
});

module.exports = Breadcrumb;