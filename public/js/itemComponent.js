var ItemComponent = React.createClass({displayName: "ItemComponent",
    getInitialState : function(){
  		return {
  			charlas : []
  		}
	},
  componentDidMount : function() {
    $.getJSON('clases.json' , function(result){
      var charlas = result;
      if(this.isMounted())
      {
        this.setState({
          charlas : charlas
        });
      }
    }.bind(this));
  },
   render : function(){
      var charlas = this.state.charlas;
     return (
       React.createElement("div", null, 
        
          charlas.map(function(charla){
              return (
                React.createElement("div", {className: "col s12 m12 l8 offset-l2"}, 
                  React.createElement("div", {className: "card-panel grey lighten-5 z-depth-1"}, 
                    React.createElement("div", {className: "row valign-wrapper"}, 
                      React.createElement("div", {className: "col s4 m2"}, 
                        React.createElement("img", {src: charla.avatar, alt: "", className: "circle responsive-img"})
                      ), 
                      React.createElement("div", {className: "col s8 m10"}, 
                        React.createElement("span", {className: "black-text"}, 
                         React.createElement("h5", {className: "center-text"}, charla.nombre, " - ", charla.twitter), 
                         React.createElement("h5", {className: "flow-text center-text"}, charla.titulo), 
                         React.createElement("h5", {className: "flow-text center-text"}, charla.hora)
                        )
                      )
                    )
                  )
                )
              )
          })
        
       )
     )
   }
});
