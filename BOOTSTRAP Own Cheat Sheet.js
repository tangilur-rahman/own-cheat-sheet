/*

❤️❤️❤️ Learn BootStrap ❤️❤️❤️


Chapter 1 : What is BootStrap?  ✌️

  Note: Bootstrap is a most popular open-source Frontend Framework for building responsive website.

  👉 Bootstrap , originally named Twitter Blueprint, its created by Twitter developers.
   Now a day, Twitter isn't used Bootstrap at all.

  ⭐ Bootstrap is the combination of HTML, CSS & JavaScript.


  #️⃣️ BootStrap Provide Us  ✅

    1. Grid System  ( For Responsiveness )

    2. Pre-define Classes  ( simply CSS classes for styles )

    3. Components  ( Pre-built Components which them can get from Bootstrap website  )




Chapter 2: Attach Bootstrap with HTML  ✌️


  Note: We can attach BootStrap in our HTML file through two ways,

    1️⃣ CDN ( content delivery network )  🌟
       
      ⭐ from Bootstrap Server.

      🎯 Copy CSS & Javascript links from Bootstrap website & paste our HTML file.

      👉 In React same way to attach CSS & Javascript links into ./public/index.html file.

        ⚠️ but class => className


    2️⃣ Download file and attach

      ⭐ from our own server.
    
      🎯 At First, download CSS & Javascript files zip from Bootstrap official website then extract them & attach as like,

      🟢 <link rel = "stylesheet" href = " ./bootstrap.min.css " />

      🟢 <script src = " ./bootstrap.min.js "></script>

      🌿 here "min" file have everything. 
 


Chapter 3 : Responsive Web Design  ✌️

  Note: Responsive web design is about creating web pages that look good on all devices.

  👉 A responsive web design will automatically adjust with different screen sizes width and viewport.



Chapter 4: Grid System   ✌️

  🌿 Main Four Topics in Grid System 
    
    1. Breakpoint
    2. Container
    3. Row
    4. Column


  #️⃣️ Breakpoint

    Note: Breakpoints are the built-in blocks of responsive design.
     Use them to control layout when our webpage can be adapted at a particular viewport or device size.

    👉 Breakpoint created by using Media Query.

    ⭐ Mobile first, responsive design is the goal in Bootstrap. 


    🎯 Available Breakpoints

      Breakpoint  -  Class infix  -   Dimensions
       
       X-Small	  -     None	    -    0px    - 575px

       Small 	    -     sm  	    -    576px  - 767px

       Medium	    -     md  	    -    768px  - 991px

       Large	    -     lg  	    -    992px  - 1199px

       Extra large-     xl   	    -    1200px - 1399px

       Extra*2 large-   xxl  	    -    >= 1400px
     

    ⭐  No Media Query for "X-Small" 
     cause this is the default in Bootstrap. ( mobile first approach )



  #️⃣ Container 
 
    Note: Container is a wrapper which contain the website.

    ⭐ Website width depends on Container, not device screen width.


    🌿 3 types of Container in Bootstrap

      1️⃣ container

        Note: Which sets a max-width with each responsive Breakpoint.

        👉 Only extra-small Breakpoint always get "width : 100%",
         otherwise above every Breakpoint has little-bit left & right margin.


      2️⃣ container-fluid

        Note: which is "width : 100%" with all Breakpoints ALWAYS.


      3️⃣ container-{breakpoint} 

        👉 It's the combination of ( container + container-fluid )
        
        Note: We can define Breakpoint with Container,
         it means until that specified Breakpoint (BELOW) "width : 100%"  as like container-fluid,
         after that (ABOVE) behave like container.


          🎯 .container = .container-sm  [same]

            🟢 extra-small => .container-fluid

            🟢 sm, md,lg,xl,xxl  => .container
   

        Example: container-lg  📝
           
          👉 extra-small, sm, md  => width: 100% [container-fluid]

          👉 lg, xl, xxl          => decide by container [container]

     
          
    Syntax :  🧬

      <div class ="container"> ... </div>
      
      <div class ="container-fluid"> ... </div>
       
      <div class ="container-md"> ...  </div>
    
     
    ⭐ Best Practice => Whole web-page wrap into any type of a Container,
     then inside that Container create multiple Rows.



  #️⃣ Row

    Note: Row class always declare into any type of a Container.
   
    👉 Row-container can contain multiple columns.

    Note: Row-container width as same as its direct Parent-Container.

    ⭐ When we define "row" class that Container divided into 12 equal columns.

    ⚠️ Don't insert contents directly inside any Row-container,
     must be used column.


    Syntax :  🧬 
    
      <div class="container">
     
        <div class = "row">

          //columns

        </div>

      </div>



  #️⃣ Column 
    
    ⭐ Column represent "col" in Bootstrap.

      ✒️ col-1, col-2, ... , col-12


    ⭐ Every Container can contain minimum "col-1" and maximum "col-12", 
     if "col-12+" it would be display at next line.


    ⭐ col-container must be define inside any a Row-container, 
     col-container can't be define inside any col-container directly.

    👉 No restriction with Row-container, anywhere can define but inside any type of a Container.  

    👉 When we define "row" class that Container divided into 12 equal columns,
     then by using "col" class, we can decide how many columns & each column how much space [1 - 12] will be displayed into that Row-container.

    
    Syntax : 🧬 

      <div class="container-fluid">
     
        <div class = "row">

          <div class = "col-6"> 

            // contents & also can define Row-container here 

          </div>

          <div class = "col-6">

            // contents & also can define Row-container here 

          </div>

        </div>

      </div>
      


    #️⃣ col with Breakpoint

      1. col-*      =>  Extra-small 
      2. col-sm-*   =>  small
      3. col-md-*   =>  medium
      4. col-lg-*   =>  large
      5. col-xl-*   =>  Extra-large
      6. col-xxl-*  =>  Extra*2 large

      🎯 * => 1 to 12 
    
    ⭐ If we define "col" with specific Breakpoint then it's also applied its above Breakpoint normally,
    but its below Breakpoint automatically convert those in "col-12" for each column.


    Syntax :  🧬

      <div class = "container-fluid">
     
        <div class = "row">

          <div class = "col-md-8">

            // contents

          </div>

          <div class = "col-md-4">

            // contents

          </div>
           
        </div>

      </div>
      
   
      👉 "col-md-*" means it's applicable with md, lg, xl, xxl Breakpoints,
       but when our viewport comes to sm Breakpoint and go on... then every columns take "width : 100%" ❗ "col-12"



  👉 Can declare multiple "col" with different Breakpoints in a single column

    Example:  📝

      <div class = "row">

        <div class = "col-8 col-md-6 col-lg-4 col-xl-5">

          // contents

        </div>

        <div class = "col-4 col-md-6 col-lg-8 col-xl-7">

          // contents

        </div>
           
      </div>

      👉 When our viewport achieve any Breakpoint its own class applied with that viewport.


  
  #️⃣ BootStrap Standard Flow

    🌿 container =>  row => column => anyContent.

    Note: Row-container can be create into any type of a Container or col-container.
      


Chapter 5 : Nested Column  ✌️

  Note: We can define columns inside another column and go on...

  Note: Inside that specific column,
   firstly we need to define Row-container, 

   When we define "row" class that Container divided into 12 equal columns,
   then by using "col" class, we can decide how many columns & each column how much space [1 - 12] will be displayed into that Row-container.

  👉 We can define multi-time Nested Column whatever we want.


  Example:  📝

    <div class="container">

      <div class="row">
        
        <div class="col-8">

          <div class="row">

            <div class="col-6 bg-success">

              i am 6

            </div>

            <div class="col-6 bg-info">

            i am 4 

            </div>

          </div>

        </div>

        <div class="col-4 ">

          i am 4

        </div>

      </div>
 
    </div>




Chapter 6 : Bootstrap Trick  ✌️

  ⭕ With Column  ✅

    #️⃣ If we want a Row-container's every columns get equal width with every Breakpoints

    Syntax:  🧬

      <div class = "row" >

        <div class = "col" > Column 1 </div>

        <div class = "col" > Column 2 </div>

        <div class = "col" > Column 3 </div>
        ...

      </div>


    🌿 Applied => flex-grow : 1;


    Example:  📝

      <div class="container-fluid">

        <div class="row">

          <div class="col bg-primary"> Column 1 </div>

          <div class="col bg-secondary"> Column 2 </div>

          <div class="col bg-success"> Column 3 </div>

          <div class="col bg-gray"> Column 4 </div>

          <div class="col bg-info"> Column 5 </div>

        </div>

      </div>

      👉 That trick also applied with other Breakpoints same way.


    
    #️⃣ If we want a Row-container's specific some columns get fixed width from total col-12 & other columns distribute width each other from remaining width


    Syntax:  🧬

      <div class = "row" >

        <div class = "col"> Column 1 </div>

        <div class = "col-3"> Column 2 </div>

        <div class = "col-4"> Column 3 </div>

        <div class = "col"> Column 4 </div>
        ...

      </div>


    Example:  📝
    
      <div class="container-fluid">

        <div class="row">

          <div class="col bg-primary"> Column-1 </div>

          <div class="col-3 bg-secondary"> Column-2 </div>

          <div class="col bg-success"> Column-3 </div>

          <div class="col-6 bg-gray"> Column-4 </div>

          <div class="col bg-info"> Column-5 </div>

        </div>

      </div>


      👉 Column-2 & Column-4 take ( 3 + 6 ) 9 from total col-12,
      remain 3 columns space distribute with Column-1,Column-3, Column-5.

      👉 That trick also applied with other Breakpoints same way.



    #️⃣ If we want a Row-container's specific some columns get only contents width from total col-12 & other columns distribute width each other from remaining width equally 

    ⭐ "col-auto"  => only get Contents Width. [ALWAYS]

    Syntax:  🧬

      <div class = "row" >

        <div class = "col" > Column 1 </div>

        <div class = "col-auto" > Column 2 </div>

        <div class = "col" > Column 3 </div>
        
        <div class = "col-auto" > Column 4 </div>
        ...

      </div>


    Example:  📝
    
      <div class="container-fluid">

        <div class="row">

          <div class="col bg-primary"> Column-1 </div>

          <div class="col-auto bg-secondary"> Column-2 </div>

          <div class="col bg-success"> Column-3 </div>

          <div class="col-auto bg-gray"> Column-4 </div>

          <div class="col bg-info"> Column-5 </div>

        </div>

      </div>


      👉 Column-2 & Column-4 take only contents width from total col-12,
      remain columns space distribute with Column-1, Column-3, Column-5.

      👉 That trick also applied with other Breakpoints same way.


    
  ⭕ With Row  ✅

    #️⃣ We can decide a Row-container can contain how many columns in a line & wrap other at next line if have.

    
    Syntax:  🧬

      <div row row-cols-* >

        // columns

      </div>


    🌿 Applied => flex-basis : *px; && flex-wrap : wrap;


    Example:  📝

      <div class="row row-cols-3">

        <div class="col bg-danger">Div -1</div>

        <div class="col-6 bg-info">Div - 2 </div>

        <div class="col-7 bg-primary">Div 3</div>

        <div class="col bg-danger">Div -4</div>

        <div class="col bg-info">Div - 5</div>

        <div class="col bg-primary">Div 6</div>
        
      </div>


    👉 Here, Normally distribute 3 columns in a each row, if haven't enough space only then wrap into next line.



  #️⃣ If we want a Row-container's all columns get only contents width & if haven't enough space only then wrap into next line 

    
    Syntax:  🧬

      <div row row-cols-auto >  

        // columns

      </div>

    
    Example:  📝

      <div class="row row-cols-auto">

        <div class="col-6 bg-danger">Div -1</div>

        <div class="col bg-info">Div - 2 </div>

        <div class="col bg-primary">Div 3</div>

        <div class="col bg-danger">Div -4</div>

        <div class="col-8 bg-info">Div - 5</div>

        <div class="col bg-primary">Div 6</div>
        
      </div>

      
    👉 We can also define it within every col-container separately.

    

Chapter 7 : Gutters  ✌️



Chapter 8 : Bootstrap with Flex-Box  ✌️

  👉 We can define separately all flex-box properties with every Breakpoints.

  #️⃣ Flex-Box Declare

    > .d-flex   
    > .d-inner-flex

    👉 If we don't mention it, even it works perfectly in Bootstrap.

    
  #️⃣ Flex-Box with Row-Container

    1. flex-direction

      > .flex-row
      > .flex-row-reverse

      > .flex-column
      > .flex-column-reverse
    
     🌿 Default => .flex-row
   
     Note: For applied Columns Flow Direction.


    2. flex-wrap

      > .flex-wrap
      > .flex-nowrap
      > .flex-wrap-reverse

     🌿 Default => .flex-nowrap
  
     Note: If need to columns wrap or not.



    3. justify-content-*

      > .justify-content-start
      > .justify-content-end
      > .justify-content-center
      > .justify-content-between
      > .justify-content-around
      > .justify-content-evenly

     🌿 Default => .justify-content-start

     Note: For multiple columns horizontally-align.

     

    4. align-content-*

      > .align-content-stretch
      > .align-content-start
      > .align-content-end
      > .align-content-center
      > .align-content-between
      > .align-content-around
      > .align-content-evenly
      

     🌿 Default => .align-content-stretch

     Note: For multiple-line vertically-align



    5.align-item-*

      > .align-items-start
      > .align-items-end
      > .align-items-center
      > .align-items-baseline
      > .align-items-stretch

     🌿 Default => align-items-stretch

     Note: For single-line vertically-align.
      


  #️⃣ Flex-Box with col-Container

    1. align-self-*

      > .align-self-start
      > .align-self-end
      > .align-self-center
      > .align-self-baseline
      > .align-self-stretch
  
     🌿 Default => Inherit  (.align-item )

     Note: Separately can define vertically-align with single col-container.

    

    2. flex-grow-*

      > .flex-grow-{ number }

     🌿 Default => .flex-grow-0

     Note: It decide how much specific col-container spread if it can.

    
    
    3. flex-shrink-* 
      
      > .flex-shrink-{ number }

     🌿 Default => .flex-shrink-1

     Note: It decide how much specific col-container Compression if needed.
  


    4. order
      
      > .order-{ number }

     🌿 Default => .order-0

     Note: We can change normal flow of col-container,
     👉 minimum number comes first and go on.
     
     
    5. flex-basis not available in Bootstrap until Bootstrap v-5.  😴



  
  #️⃣ We can define separately all flex-box properties with every Breakpoints.

    Syntax:  🧬

      .property-breakpoint-value 

      ⭐ That Syntax almost always applicable in Bootstrap [ANYWHERE]

      👉 That syntax followed all flex-box properties except flex-grow & flex-shrink.
      

    Example:  📝

      > .d-sm-flex
      > .flex-md-column-reverse
      > .flex-lg-nowrap
      > .justify-content-xl-center
      > .align-content-xxl-evenly
      > .align-items-sm-end
      > .align-self-lg-center
      > .flex-xl-grow-1
      > .flex-xxl-shrink-0
      > .order-sm-2
     
      

Chapter 9 : Offset class  ✌️

  👉 Through that offset class we can decide any specific col-container how many columns-space (total col-12) move left to right.

  Syntax:  🧬

    <div class = "col offset-number" > </div>

    🌿 number => columns-space


  👉 We can also specifically define that with any Breakpoint.

  Syntax :  🧬

   <div class = "col offset-breakpoint-number" > </div>


  Example:  📝

    <div class="container">
      <div class="row ">

        <div class="col bg-danger offset-1">Col - 1</div>

        <div class="col bg-secondary offset-lg-3">Col - 2</div>

        <div class="col bg-success offset-md-2">Col - 3</div>

      </div>
    </div>




~~~ Classes & Components ~~~ 😎




Chapter 10 : Color  ✌️

  👉 Only 8 theme colors in Bootstrap

    1. primary     ( almost blue )
    2. secondary   ( almost gray )
    3. success     ( almost green )
    4. danger      ( almost red )
    5. warning     ( almost yellow )
    6. info        ( almost light blue )
    7. light       ( almost white )
    8. dark        ( almost black )


  👉 We can used that theme colors with .bg ( background-color ) & .text ( color ) classes.

  Example:  📝
    
    > .bg-warning
    > .text-danger




Chapter 11 : Text  ✌️

  #️⃣ text-align

    > .text-start
    > .text-center
    > .text-end
    > .text-justify

   🌿 Default => .text-start

   👉 With Breakpoint => .text-md-center


  #️⃣ text-transform

    > .text-lowercase
    > .text-uppercase
    > .text-capitalize

   👉 With Breakpoint => Not Applicable ⚠️

  
  #️⃣ font-size

    > .fs-1    => <h1 /> 
    > .fs-2    => <h2 /> 
    > .fs-3    => <h3 /> 
    > .fs-4    => <h4 /> 
    > .fs-5    => <h5 /> 
    > .fs-6    => <h6 /> 
   
   👉 With Breakpoint => Not Applicable ⚠️


  #️⃣ Display Heading

    > .display-1   => 5rem
    > .display-2   => 4.5rem
    > .display-3   => 4rem
    > .display-4   => 3.5rem
    > .display-5   => 3rem
    > .display-6   => 2.5rem

    👉 With Breakpoint => Not Applicable ⚠️


  #️⃣ font-weight 

   > .fw-bold
   > .fw-bolder
   > .fw-normal
   > .fw-light
   > .fw-lighter
   > .fw-italic

   👉 With Breakpoint => Not Applicable ⚠️

  
  #️⃣ line-height

    > .lh-{number}

    ✒️ .lh-1, lh-2, lh-lg etc.



  #️⃣ font-monospace

   > .font-monospace

   👉 change to monospace font-family

   

  #️⃣ text-decoration

   > .text-decoration-underline
   > .text-decoration-through
   > .text-decoration-none



Chapter 12 : Responsive Image  ✌️

  > .img-fluid

  👉 Just that class applied max-width: 100%; and height: auto; 




Chapter 13 : Sizing  ✌️

  Note: Bootstrap only support 5 sizes

    1. 25%
    2. 50%
    3. 75%
    4. 100%
    5. auto


  #️⃣ width

    > .w-25
    > .w-50
    > .w-75
    > .w-100
    > .w-auto


  #️⃣ hight

    > .h-25
    > .h-50
    > .h-75
    > .h-100
    > .h-auto


  
Chapter 14 : Border  ✌️

  #️⃣ add border

    > .border 


  #️⃣ remove border

    > .border-0 


  #️⃣ border-width

    > .border .border-{ 1 to 5 }


  #️⃣ border-color

    > .border .border-themeColors


  #️⃣ border-radius

    > .rounded 
    > .rounded-circle
    > .rounded-pill

  👉 border-radius only work with any container & image.



Chapter 15 : Spacing  ✌️

  #️⃣ margin & padding

    > .m for  margin
    > .p for  padding


  #️⃣ direction

    > t  => for margin-top or padding-top  ( EX: .mt or .pt)

    > b  => for margin-bottom or padding-bottom  ( EX: .mb or ..pb)

    > s  =>  ( start ) for margin-left or padding-left  ( EX: .ms or .ps)

    > e  =>   ( end ) for margin-right or padding-right  ( EX: .me or .pe)

    > x  =>  ( horizontal )  *-left and *-right both  ( EX: .mx or .px)

    > y  =>  ( vertical )  *-top and *-bottom both  ( EX: .my or .py)

    > blank  => applied all sides  ( EX: .m or .p)



  #️⃣ sizes

    1.  0  =>  0       ( Ex: .p-0  or .m-0 )

    2.  1  =>  .25rem  ( Ex: .pt-1 or .mt-1 )

    3.  2  =>  .5rem   ( Ex: .pb-0 or .mb-0 )

    4.  3  =>  1rem    ( Ex: .ps-0 or .ms-0 )

    5.  4  =>  1.5rem  ( Ex: .pe-0 or .me-0 )

    6.  5  =>  3rem    ( Ex: .px-0 or .my-0 )

    7. auto  =>  for set margin-auto ( Ex: m-auto )


  👉 We can applied them with every Breakpoints separately.

    ✒️ .m-lg-auto   or  .px-md-3



  #️⃣ grid-gap

   > .d-grid gap-{ 0 to 5 }

   ✒️ .d-grid gap-3



Chapter 16 : Display  ✌️

   Syntax :  🧬

    > .d-{breakpoint}-value

  Example:  📝
    
    > .d-none
    > .d-sm-inline
    > .d-md-block
    > .d-lg-inline-block
    > .d-xl-flex
    > .d-xxl-grid   etc.

  👉 We can applied them with every Breakpoints separately.



Chapter 17 : Icon  ✌️

  Note: Bootstrap have also some icons.


Chapter 18 : Components  ✌️

  👉 Pre-define Components can get from Bootstrap website, Just copy & customize if needed.

 

Chapter 19 : Bootstrap Icon with React ✌️


  🌿 Installation  :

    > npm install react-bootstrap-icons


  Example :  📝

    import {Icon1, Icon2, ...} from "react-bootstrap-icons";

    <Icon1 color="blue" size={96} />

    <Icon2 className="ml-4" />

    
  😊 END 😊

*/