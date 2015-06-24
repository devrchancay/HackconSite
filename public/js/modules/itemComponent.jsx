var ItemComponent = React.createClass({
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
       <div>
        {
          charlas.map(function(charla){
              return (
                <div className="col s12 m12 l8 offset-l2">
                  <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                      <div className="col s4 m2">
                        <img src={charla.avatar} alt="" className="circle responsive-img" />
                      </div>
                      <div className="col s8 m10">
                        <span className="black-text">
                         <h5 className="center-text">{charla.nombre} - {charla.twitter}</h5>
                         <h5 className="flow-text center-text">{charla.titulo}</h5>
                         <h5 className="flow-text center-text">{charla.hora}</h5>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
          })
        }
       </div>
     )
   }
});
