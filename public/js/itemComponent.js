var ItemComponent = React.createClass({displayName: "ItemComponent",
   render : function(){
     return (
       React.createElement("div", {className: "col s12 m12 l8 offset-l2"},
         React.createElement("div", {className: "card-panel grey lighten-5 z-depth-1"},
           React.createElement("div", {className: "row valign-wrapper"},
             React.createElement("div", {className: "col s4 m2"},
               React.createElement("img", {src: "https://pbs.twimg.com/profile_images/605493812060749825/q2wRBwtL_400x400.png", alt: "", className: "circle responsive-img"})
             ),
             React.createElement("div", {className: "col s8 m10"},
               React.createElement("span", {className: "black-text"},
                React.createElement("h5", {className: "center-text"}, "Ramón chancay - @r_chancay"),
                React.createElement("h5", {className: "flow-text center-text"}, "Clase #4 (final) de Introducción a Nodejs"),
                React.createElement("h5", {className: "flow-text center-text"}, "11am - 1pm")
               )
             )
           )
         )
       )
     )
   }
});
