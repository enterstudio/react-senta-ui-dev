"use strict";
module.exports = function (React) {

  var ClassGenerator = require('../mixins/classGenerator.js')(React);

  var defaultClassName = 'ui comments';

  var Comments = React.createClass({

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

  return Comments;
}
