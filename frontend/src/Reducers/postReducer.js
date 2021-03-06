
const inistate={
    posts:[
      
        
            {
                "id":1,
                "Course":"React",
                "Title":"Basics of React",
                "Brief":"React is a JavaScript library build in 2013 by the Facebook development",
                "Body":"React is a JavaScript library build in 2013 by the Facebook development team to make user interfaces more modular (or reusable) and easier to maintain. According to React's website, it is used to Build encapsulated components that manage their own state, then compose them to make complex UIs",
                "Image":"react1.png"
        
            },
            {
                "id":2,
                "Course":"React",
                "Title":"Landing template for startups",
                "Brief":"Open is a free React template",
                "Body":"Open is a free React template created for developers who want to create a quick and professional landing page for their open source projects, online services, digital products, and more. With an aim to capture leads and email subscribers, Open offers a versatile library of sleek, minimalistic, and reusable components and elements.\nFeatures:\n* Designed for open source products and online services\n* Dark and minimalistic design\n* Fully downloadable via Github",
                "Image":"react2.jpg"
            },
            {
                "id":3,
                "Course":"React",
                "Title":"Best free resources to learn React",
                "Brief":"There are severals best free resources to learn react",
                "Body":"Over recent years, React has grown to become the most popular and widely-used JavaScript UI library (or framework as some might call it) out there. And with this popularity came a lot of new opportunities for both fresh and mature web developers through tons of new jobs, offers, and other React-connected tasks that are currently flooding the market.Following are the best Resources\n* Official documentation \n *Video courses\n *Learnt React\n *FreeCodeCamp",
                "Image":"react3.jpeg"
            },
            {
                "id":4,
                "Course":"Javascript",
                "Title":"What is Javascript?",
                "Brief":"JavaScript is a scripting or programming language",
                "Body":"JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.",
                "Image":"java1.png"
            },
            {
                "id":5,
                "Course":"Javascript",
                "Title":"Variables in Javascript",
                "Brief":"Javascript variables is used to store the information",
                "Body":"Variable\nMost of the time, a JavaScript application needs to work with information. Here are two examples:\nAn online shop – the information might include goods being sold and a shopping cart.\nA chat application – the information might include users, messages, and much more.\nVariables are used to store this information.",
                "Image":"java2.png"
            },
            {
                "id":6,
                "Course":"Javascript",
                "Title":"Data Types in Javascript",
                "Brief":"Javascript has 9 data types",
                "Body":"A value in JavaScript is always of a certain type. For example, a string or a number.\nThere are eight basic data types in JavaScript.\n* Number\n *String \n *Boolean \n *Null \n *undefined \n *objects",
                "Image":"java3.jpg"
            },
            {
                "id":7,
                "Course":"Bootstrap",
                "Title":"What is Bootstrap?",
                "Brief":"Bootstrap is a free and open-source CSS framework",
                "Body":"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components",
                "Image":"boot1.jpg"
            },
            {
                "id":8,
                "Course":"Bootstrap",
                "Title":"Images and Icons in Bootstrap?",
                "Brief":"Images and Icons in Bootstrap can be imported using import statement",
                "Body":"Images in Bootstrap can be made responsive by simply giving them the .img-responsive class. This will apply max-width:100%; height:auto; and display:block; to the image in question, so that it scales to the parent element.\nBesides making images responsive, we can easily add different effects. For example, rounded corners are applied with the .img-rounded class, and the image can be shaped to be a circle by using .img-circle, or to a thumbnail by using .img-thumbnail class.\nBootstrap comes bundled with over 260 glyphs in font format, from the Glyphicons Halflings set. Jan Kovařík, author and designer of Glyphicons, has made them available for Bootstrap for free and under the same license as Bootstrap, which is awesome. Font icons have many advantages over plain raster images, a big one being that they are scalable. They can also easily be customized using just CSS, so manipulating size or color, or even adding a drop a shadow, is a breeze.",
                "Image":"boot2.png"
            },
            {
                "id":9,
                "Course":"Bootstrap",
                "Title":"Buttons in Bootstrap?",
                "Brief":"Bootstrap buttons are Primary,secondary,info,warning,danger etc..",
                "Body":"Buttons are one of the things every browser renders totally differently. If you want to have consistent design across all browsers, this is potentially a big problem. Luckily, Bootstrap has an elegant solution for buttons also. And besides making them consistent, it brings a lot of variations to play with. You can apply the .btn class to <a> and <input> elements. You can group a series of buttons together into a single line using the .btn-group class on the parent <div>. With a little help from JavaScript, you can create radio- and checkbox- style behavior on buttons. Or you can turn your buttons into dropdown menus by placing it within a .btn-group, and providing the proper menu markup of unordered list of items.",
                "Image":"boot3.png"
            }
        ]
}

const postReducer=(state=inistate,action)=>{
    return state

}
export default postReducer;