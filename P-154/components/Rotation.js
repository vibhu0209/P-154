AFRAME.registerComponent("diver-rotation-reader", {
    schema: {
      speedOfRoation: { type: "number", default: 0 },
      speedOfAscend: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        this.data.speedOfRoation = this.el.getAttribute("rotation");      
        this.data.speedOfAscend = this.el.getAttribute("position");
  
        var diverR = this.data.speedOfRoation;      
        var diverP = this.data.speedOfAscend;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (diverR.x < 10) {
            diverR.x += 0.5;
            this.el.setAttribute("rotation", diverR);
          }
        }
        if (e.key === "ArrowLeft") {
          if (diverR.x > -10) {
            diverR.x -= 0.5;
            this.el.setAttribute("rotation", diverR);
          }
        }
        if (e.key === "ArrowUp") {
          if (diverR.z < 20) {
            diverR.z += 0.5;
            this.el.setAttribute("rotation", diverR);
          }
          if (diverP.y < 2) {
            diverP.y += 0.01;
            this.el.setAttribute("position", diverP);
          }
        }
        if (e.key === "ArrowDown") {
          if (diverR.z > -10) {
            diverR.z -= 0.5;
            this.el.setAttribute("rotation", diverR);
          }
          if (diverP.y > -2) {
            diverP.y -= 0.01;
            this.el.setAttribute("position", diverP);
          }
        }
      });
    }
  });