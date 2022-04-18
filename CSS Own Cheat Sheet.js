/*

❤️❤️❤️ Learn CSS ❤️❤️❤️

@import url('https://fonts.googleapis.com/css2?family=The+Nautigal:wght@400;700&display=swap');


* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
.container{
    border : 5px outset red;
    width: 750px;
    height: 600px;
}
#color{
    color:rgb(255,234,64);
    color : red;
    color: hsl(24deg,45%,56%);
    color: #000000;
    color: transparent;

}

#background{
    background-color: initial;
    background-image:url('images/error_404.jpg');
    background-repeat: no-repeat;
    background-position: initial;
    //                   width height 
    background-size: auto;
    background-attachment: initial;
    background-cilp: initial;
    background-blend-mode: darken;

}
#border{
    border-style: groove;
    border-width: initial;
    border-color: initial;
    border: 1px outset red ;
    border-bottom-color: initial;
    border-radius: initial;
    border-top-right-radius: initial;
}
#padding{
    padding-top: 30px;

    padding: 20px 20px 10px 2px;

    padding : 3px 3px;

}
#margin{
    margin-top: 20px;
    margin-bottom: 2px;

    margin: 30px 2px 4px 4px;
    margin: 30px;
}
#width , #height {
    width: initial;
    height: initial;

    max-height: initial;
    max-width: initial;
}
#text{
    color: blue;
    text-align: center;
    vertical-align: initial;
    direction: ltr;
    text-transform: uppercase;
    line-height: 40px;
    word-spacing: 20px;
    letter-spacing: 5px;
    text-indent: 130px;
    writing-mode: horizontal-tb;
    white-space: pre;
    text-shadow: 10px 7px 6px red;

    text-decoration: none;
    text-underline-offset: 20px;
    text-decoration-thickness: 20px;
    text-decoration-color: brown ;

}
#a{
    color: black;
    text-decoration: none;
}
#a:visited{
    color: orange;
}
#a:hover{
    color:blue;
}
#a:active{
    color: yellow;
}


@font-face {
    font-family: 'tangil';
    src: url("images/TheNautigal-Regular.ttf");
}
#font{
    font-size: 20px;
    font-weight: 800;
    font-weight: bold;

    // font-family: 'tangil'; 
    // font-family: 'The Nautigal', cursive,sans-serif; 
}

#css-units{
    width: 100px;
    width: 50%;
    width: 2em;  //from parent width x2 
    width: .5rem; //from html width x2 
}
#cursor{
    cursor: pointer;
}
#important{
    font-size: 20px !important;
}
#box-shadow{
    box-shadow: 10px 10px 50px 30px  green inset, -10px -10px 50px 30px  red;
}
#opacity{
    opacity: .5;
}
#css-filter{
    filter: drop-shadow(-120px 30px 20px black);
    filter: grayscale(100%);
    filter: blur(20px);

}
#gradiant{
    background-image: linear-gradient(to right , red ,green);

    background-image: radial-gradient(circle, red 40%,green 50% ,blue);

    background-image: conic-gradient(red 0deg, red 90deg,yellow 90deg , yellow 180deg,green 180deg,green 270deg,blue 270deg);
}
#overflow{
    //block element & specific height
    overflow : visible; // default 
    overflow: hidden;
    overflow: scroll;
    overflow: auto !important;
}

#resize{
    //overflow: hidden;
    // overflow: scroll;
    // overflow: auto ;
    // then it will apply with any element
    resize: none;
    resize: both;
    resize: horizontal;
    resize: vertical;
}
#list , ul , ol {
    list-style-type: none;
    //list-style-image: url("images/tangil.jpg");
    list-style-position: inside;
}
#table , td , th{
    // remember rowspan , colspan
   border: 1px solid black;

  border-collapse: separate;
    // then
    border-spacing: 30px 20px ;
    // like margin

    empty-cells: hide;
    caption-side: bottom;
   padding: 30px;
    height: 60px;
    text-align: center;
    vertical-align: bottom;
}
:root{
    --primary-color : red;
}
#function{
    
    rgb(), rgba(),
    hsl(), hsla(),

    url(),liner-gradient(),radial-gradient(),conic-gradient(),

    calc(calculation); var(--value);
    

    width: calc(100vw - 200px);
    color: var(--primary-color)
}
#box-sizing{
    // only content get width & height
    box-sizing:content-box;

    // container get width & height adjust content inside it 
    box-sizing:border-box;

}
#initial , #inherit{
    // they are global attribute

    // initial means by default
    color : initial;

    // inherit means from parent element
    color: inherit;
}
#object-fit{
    // apply on images or videos 
    // not background image or videos 
    // but works same 

    // background-size: cover; as same 
    object-fit: contain; //  fill default  

    // background-position: right top; as same 
    object-position: right top;
    width: 700px;
    height: 500px;

}
#common-selector{
   // 
    #id{ }
    .class { }
    element-name { }

     
}
#pseudo-classes{
    // spacial state of elements 
// 
    a:link{ }
    a:visited{ }
    a:hover{ }
    a:active{ }
    li:first-child {}
    li:last-child {}
    li:nth-child(odd){}
    input:focus{}
    input:valid{}
    input:invalid{}
    input:in-range{}
    input:out-of-range{}
    input:checked{}
    input:read-only{}
    input:enabled{}
    input:disabled{}
    input:required{}
    input:optional{}
    input:empty{}
    selector:target{}
    :root{}

    : => means universal selector


 

}
#pseudo-elements{

    // 
    style a specific part of the selected element
     

    // 

    selector::first-letter{}
    selector::first-line{}
    selector::after{content: ""}
    selector::before{content: url("")}
    selector:: selection {color : green ; backgroun-color: blue;}

    :: => means universal selector
      
}
#advance-selector{
// 
p[attribute]{     }
p[attribute="value"]{
    style
}
*{
    univarsal selector(or html)
}
div ul li{
    child at any stage
}
ul>li{
    direct child
}
p + a{
    just 2nd line a tag but sibling
}
p ~ a {
    any position but sibling
}
p,a,h1,h5{

}
element.class {

}  
}
#display{

    // 
    block:
        1.start with new line
        2.full width
        3.height & width can apply

     inline:
        1.not start new line
        2.necessary width & height
        3. can't apply height & width

     inline-block:
        1.not start new line
        2.necessary width & height
        3. can apply height & width ***
      
    display: block;
    display: inline;
    display: inline-block;

    display: flex;
    display: grid;

    // invisible & release width & height also 
    display: none;

    // invisible & not release width & height  
    visibility: hidden;
}
#position{
    // 
    normal flow (by default )
    cannot apply top,right,bottom,left,z-index
    & it's not position element
     
    position: static;

    // 
        from current position & before position area don't release for other elements
      
    position: relative;

    // 
     from nearest parent positional element not sibling or go back <body>
     & before position area release for other elements
      
    position: absolute;

    // 
     from viewport position
     & it's fixed with viewport
     & before position area release for other elements
      
    position: fixed;

    // 
    from viweport where will be sticky
    when while scrolling
    top: 0px;
      
    position: sticky;

    // required 

    top: 10px;
    right: 10px;
    bottom: 20px;
    left: 20px;
}
#z-index{
    // 
    only work with positional element
    (relative,absolute, fixed , sticky)
    top view which one have large z-index number & then sequence
      
    z-index: 20;
}
#float , #clear{
    //   (block , inline)
    works like inline display
    get necessary space and give space to other element
      
    float: right;
    float: left;

    // 
    we can apply float or non-floated elements for clear float
      
    clear: left;
    clear: right;
    clear: both;
}
#2d-3d -transforms{
    // 
     work with block or inline-block,
     not only inline
      

    // 
    as like relative position
   calculation from current position & don't release before area
      
    transform: translate(50px);
    transform: translate(50px,-40px);
    //  transform: translate3d(20px,20px,40px);  
    transform: translateX(50px);
    transform: translateY(-50px);
    //  transform: translateZ(-50px);  


    transform: rotate(360deg);
    //  transform: rotate3d(1,2,2,40deg);  



    transform: scale(2,4);
    //  transform: scale3d(2,3,4); 
    // width X2 height X4   

    transform: scaleX(2);
    transform: scaleY(4);
    //  transform: scaleZ(4);  


    transform: skew(30deg,40deg);

    //  xx = 30deg & yx = 40deg  
    transform: skewX(30deg);
    transform: skewY(40deg);
    //  transform: skewZ(40deg);  
}

#transition{
     // 
     used for applying smooth transition with any transform elements
       
    transition-property: width,color !important; //  any property multiple  
    transition-duration: 2s !important;
    transition-delay: 2s;
    transition-timing-function: ease-in-out;

    // transition: color duration timing-function delay; 

    transition: width 2s , color 2s;
}
#animation{

   //  @keyframes animation_name {
        from {}
        to {}
    }     
   //  @keyframes animation_name {
       percentage calculation by duration time
        0% { }
        50% { }
        100{ }
    }   
    animation-name: abc;
    animation-duration: 2s;
    animation-delay: 2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-play-state: paused;
    animation-direction: reverse;
    animation-iteration-count: infinite;

}
.container{
    overflow: visible;
}
@media print {
   // 
   we can declare all properties
   whatever we want to print from the website
     
}
@media screen and (max-width: 765px){
    // 
    all properties
      
}
@media screen and (min-width: 1000px) {
    // 
    all properties
      
}
#specificity-rule{
    // 
    more specific more chance to apply

    !importance = 10000 point
    inline = 1000 point
    id = 100 point

    class , attribute , pseudo-class = 10 point

    element,pseudo element = 1 point
    univarsal = 0 point

    *** more point more chance ***
      
}
#multiple-column{
    //  style into parent container  
    column-count: 3;
    column-gap: 3em;

    column-rule-width: 10px;
    column-rule-style: solid;
    column-rule-color: red;
    column-rule:10px solid red;

    column-width: 300px;
    //  minimum width  
    column-span: all;
    column-fill: balance;
}
#flex-box{
// 
flex-box is the alternative of float and positional element
  
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    // 
     combine direction & wrap
      
    flex-flow: column nowrap;

    //  vertically align multiple  
    justify-content: center;

    // 
     horizontally align multiple
        not work with nowrap
     
    align-content:space-between;

    //  only one line horizontally control  
    align-items: flex-start;

    //  above style declare on parent container  

    //  down style declare on child container  
    order : 1;
    flex-grow: 1;
    flex-shrink: 1;

    //  initial width  
    flex-basis: 100px;
    align-self: flex-end;

}
#grid{
    //  Parent Container  

    // 
        1fr = 1 fractional unit

        auto = ifr responsible

        repeat(3,1fr); repeat values

        . = space in template area

        autofit = autofit row & column by given values

        minmax(90px,1fr)
      
    display: grid;
    display: inline-grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: 100px auto 100px;
    //  grid-template : row / column   
    grid-row-gap: 10px;
    grid-column-gap: 20px;
    grid-gap : 10px 20px;

    justify-content: space-around;
    align-content: space-between;

    justify-items: center;
    align-items: center;

    grid-auto-rows: 1fr;
    grid-auto-column: 200px;
    grid-auto-flow: dense;

    //  Child Container  

    justify-self: center;
    align-self: center;
    //  column span  
    grid-column-start: 1;
    grid-column-end: 3;
    grid-column: 1/3;
    grid-column: 1/span 2;

    //  row span  
    grid-row-start: 1;
    grid-row-end: 3;
    grid-row : 1 / 3;
    grid-row: 1 / span 2;

    grid-area: 1/2/span 2 / span 3;
    grid-area: header;

    //  into parent container  
    grid-template-areas: " "
                        " "
                        " ";
  // 

   grid-template: row / column / area ;

    
}
#css-validation {
    // 
    https://jigsaw.w3.org/css-validator/
     

    //  above link we can check our css files either error or ok   
}



*/
