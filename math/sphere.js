/*
 * An object type representing an implicit sphere.
 *
 * @param center A Vector3 object representing the position of the center of the sphere
 * @param radius A Number representing the radius of the sphere.
 */

var Sphere = function(center, radius) {
  // Sanity checks (your modification should be below this where indicated)
  if (!(this instanceof Sphere)) {
    console.error("Sphere constructor must be called with the new operator");
  }

  this.center = center;
  this.radius = radius;

  // todo - make sure this.center and this.radius are replaced with default values if and only if they
  // are invalid or undefined (i.e. center should be of type Vector3 & radius should be a Number)
  // - the default center should be the zero vector
  // - the default radius should be 1
  if(!(this.center instanceof Vector3)&&!(this.radius instanceof Sphere))
  {
    this.center =  new Vector3(0,0,0);
    this.radius = 1;
  }
 
  // Sanity checks (your modification should be above this)
  if (!(this.center instanceof Vector3)) {
    console.error("The sphere center must be a Vector3");
  }

  if ((typeof(this.radius) != 'number')) {
    console.error("The radius must be a Number");
  }
  
};

Sphere.prototype = {
  
  //----------------------------------------------------------------------------- 
  raycast: function(r1) 
  {
    // todo - determine whether the ray intersects this sphere and if so, where

    // Recommended steps
    // ------------------
    // 0. (optional) watch the video showing the complete implementation of plane.js
    //    You may find it useful to see a different piece of geometry coded.

    // 1. review slides/book math
    
    // 2. identify the vectors needed to solve for the coefficients in the quadratic equation

    // 3. calculate the discriminant
        
    // 4. use the discriminant to determine if further computation is necessary 
    //    if (determinant...) { ... } else { ... }

    // 5. return the following object literal "result" based on whether the intersection
    //    is valid (i.e. the intersection is in front of the ray and the ray is not inside
    //    the sphere)
    //    case 1: no VALID intersections
    //      var result = { hit: false, point: null }
    //    case 2: 1 or more intersections
    //      var result = {
    //        hit: true,
    //        point: 'a Vector3 containing the closest VALID intersection',
    //        normal: 'a vector3 containing a unit length normal at the intersection point',
    //        distance: 'a scalar containing the intersection distance from the ray origin'
    //      }

    // An object created from a literal that we will return as our result
    // Replace the null values in the properties below with the right values
  
    
    var oc=r1.origin.subtract(this.center);
    var a=r1.direction.dot(r1.direction);
    var b=2.0 * r1.direction.dot(oc); 
    var c=oc.dot(oc)-this.radius*this.radius; // o-c
    var discriminant =b*b-4*a*c;
      

    
    

      if (discriminant >= 0 && this.center.dot(r1.direction)<0)
      {
        var hitPoint = r1.origin.clone().add(r1.direction.clone().multiplyScalar(discriminant));
        return{
          hit:true,
          point:hitPoint,
          normal:this.center.normalize,
          distance:a.multiplyScalar(this.radius),
        };
        
       /*var result = 
        {
        hit: true,      // should be of type Boolean
        point: new Vector3(this.a*this.discriminant.a,this.b*this.discriminant.b,this.c*this.discriminant.c),    // should be of type Vector3
        normal:new Vector3(this.a/this.normalize,this.b/this.normalize,this.c/this.normalize),   // should be of type Vector3
        distance:null // should be of type Number (scalar)
        };
      return result;
      */
      }
    
    else 
    {
      return {hit:false}
    }

    
  
    

    
  }
}

// // EOF 00100001-1
