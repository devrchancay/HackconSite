var ItemComponent = React.createClass({
    getInitialState : function(){
  		return {
  			charlas : []
  		}
	},
   render : function(){
     return (
       <div className="col s12 m12 l8 offset-l2">
         <div className="card-panel grey lighten-5 z-depth-1">
           <div className="row valign-wrapper">
             <div className="col s4 m2">
               <img src="https://pbs.twimg.com/profile_images/605493812060749825/q2wRBwtL_400x400.png" alt="" className="circle responsive-img" />
             </div>
             <div className="col s8 m10">
               <span className="black-text">
                <h5 className="center-text">Ramón chancay - @r_chancay</h5>
                <h5 className="flow-text center-text">Clase #4 (final) de Introducción a Nodejs</h5>
                <h5 className="flow-text center-text">11am - 1pm</h5>
               </span>
             </div>
           </div>
         </div>
       </div>
     )
   }
});
