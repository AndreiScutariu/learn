(function name(params) {
    
    var Hello = React.createClass({
        render: function() {
            return  <div>
                        Hello {this.props.name} <br/>
                        <Inner item="inner prop"/>
                    </div>;
        }
    });
    
    
    var Inner = React.createClass({
        render: function name() {
            return  <div>
                        Inner hello {this.props.item}.
                    </div>;
        }
    });

    ReactDOM.render(
        <Hello name="world!" />, document.getElementById('container')
    );
    
})();

