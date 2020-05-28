import {db} from '../fbconfig.js';


function query_database(allProjects) {
    //var query;
    db.collection("fl_content").get().then(function(projects){
        console.log(projects.docs.map(doc => doc.data()));
        allProjects = projects.docs.map(doc => doc.data());
        return allProjects;
    })
    /*.then(querySnapshot => (querySnapshot.docs.map((docs, index) => 
    documents[index] = docs.data())))*/

    
}

async function getProjects(){
    var projects = await query_database(projects);
    return projects
}

var projects = getProjects();

var engineering = []
var software = []
var appStatTracker= 750;
if(window.innerWidth < 992){
    appStatTracker = 800;
}
if(window.innerWidth < 500){
    appStatTracker = 850;
}
if(window.innerWidth < 470){
    appStatTracker = 950;
}
if(window.innerWidth < 410){
    appStatTracker = 1150;
}







engineering[4] = {
    title: "Thermometer",
    order: ['body'],
    type: "engineering",
    id: 4,
    key: 0,
    body: "This thermometer circuit was made using an LM335 temperature sensor in conjunction with the Altera DE2 FPGA. All the analog signals from the temperature sensor were converted through and ADC(Analog to Digital Convertor) and sent to the microcontroller to be displayed on a seven-segment display. The thermometer was tested to be accurate in a temperature range of -40C to 40C.",
    video: "",
    videoTitle: "",
    quote: "...made using an LM335 temperature sensor",
    image2: ''
};

engineering[3] = {
    title: "Reflow Soldering Oven",
    order: ['body', 'image2'],
    type: "engineering",
    id: 3,
    key: 1,
    body: "Many electronics today are created using a baking process called reflow soldering. The tiny components are essentially baked onto a printed circuit board at high temperatures. The goal of this project is to make an oven that can be used to reflow solder electronic circuits. This was accomplished using the Altera DE2 board which measured the internal oven temperature through a thermocouple wire. Based on the measured temperature the DE2 would modulate a solid state relay to control the power of the oven in order to keep temperature within it’s required values. Above is a picture of the LP51B microcontroller that was reflow soldered in the oven. This microcontroller was later used in the electromagnetic tether robot.",
    video: "",
    videoTitle: "",
    quote: "...an oven that can be used to reflow solder electronic circuits.",
    image2: 'Reflow Soldering Oven 2.jpg'
};

engineering[2] = {
    title: "Electromagnetic Tether Robot",
    order: ['body'],
    type: "engineering",
    id: 2,
    key: 2,
    body: "The objective of this project was to design and build a robot driven by electric motors that follows an electromagnetic tether using inductors as sensors. It also had to be able to receive commands from a transmitter and execute them. The software was programmed in C on the LP51B microcontroller. The robot was battery operated and moved with electric motors driven by MOSFETs. The transmitter was able to send movement commands to the robot using the buttons of a matrix keypad. The communications between the robot and the transmitter was established using inductors to send and receive information through electromagnetic waves.The robot was able to move forwards, backwards, turn and parallel park.",
    video: "",
    videoTitle: "",
    quote: "robot driven by electric motors that follows an electromagnetic tether",
    image2: ''
};

engineering[1] = {
    title: "Solar-power radio",
    order: ['body', "title2", "body2", "image2"],
    title2: "Goals/Implementation",
    type: "engineering",
    body2: "Telecommunications can be very mysterious, but this project demystified a lot of things. The goal of this project was to create a low-powered, low-cost, self sustaining AM-radio that can be used during disaster scenarios. This project implementation utilizes a simple AM radio circuit with a high/low impedance headphone jack output. It is powered by a rechargeable 9V battery which is charged through a solar panel. Below is an image of the fourth prototype.",
    id: 1,
    key: 3,
    body: "Today, there is a heavy reliance on telecommunication, internet and electricity in general. If one of these items were to fail, it’s very like a certain amount of panic would ensue. This only intensifies in the midst of a natural disaster where more than one, if not all of these technologies could be inaccessible to a large group of people. In the midst of a natural disaster how can the general public have access to the latest safety or disaster relief information? One solution is to rely on older technologies such as the AM radio.",
    video: "",
    videoTitle: "",
    quote: "...low-powered, low-cost, self sustaining AM-radio",
    image2: 'Solar-power radio 2.jpg'
};

engineering[0] = {
    title: "Li-Fi Communication",
    order: ['body', "videoTitle", "video","title2", "body2", "image2"],
    title2: "Implementation",
    body2: "The project went through several prototypes and there were many hardware changes that were made to the transmitter and receiver. The first prototypes used two arduinos making line of sight communication with each other. Following that, the Arduino code was re-written in Java and used in a simple android app. This app would read bits from the ADC/audio buffer and display the values on the screen in a human readable format. In the final implementation(see image below), the values were converted to position information in the backend. The position information was then rendered using the LibGDX framework.",
    type: "engineering",
    id: 0,
    key: 4,
    body: "This was my final project at the University of British Columbia. The project stakeholder required a working proof-of-concept using LiFi technology. LiFi or Visible Light Communication is a way to transmit data through the visible light spectrum. In this implementation, visible light from LEDs were used to transmit a user’s position in a parking lot to their smartphone app. The light signals were received by the smartphone using a simple light sensor connected to the phone’s headphone jack. The Android app was created in Java using the LibGDX framework.",
    video: "https://www.youtube.com/watch?v=QPGSDpA7zP4",
    videoTitle: "Li-Fi Commnuication Video",
    quote: "...transmit data through the visible light spectrum.",
    image2: 'Li-Fi Communication 2.jpg'
};

software[2] = {
    title: "Jumper VR",
    order: ['body', "link"],
    type: "software",
    id: 2,
    key: 5,
    body: "This is a VR game for android made during a local 48-hour game jam with my roommate. This was our first time using unity. The game models were created in 3DS Max and the game logic was programmed in C#. This game was designed for use with google cardboard. The magnetic button on the side of the cardboard is required for gameplay.",
    video: "",
    videoTitle: "",
    quote: "VR game for android made during a local 48-hour game jam",
    image2: '',
    link: "https://play.google.com/store/apps/details?id=com.MaxEmman.FirstGame&hl=en",
    linkText: "Download Jumper from the Android Play Store! (Google Cardboard required)"
};

software[1] = {
    title: "Javascript Game",
    title2: "Play the Game!",
    order: ['body','title2','appTest'],
    type: "software",
    id: 1,
    key: 6,
    body: "Prior to making this game, I had very little web development experience. I was intrigued to take on this project after I saw my roommate creating a turned-based game in JavaScript. I had high hopes for this project but found that writing games in pure JS was harder than I expected. If I were to do it again, I’d take advantage of libraries or APIs like WebGL. The current implementation is a two-player pong style game with a catch.",
    video: "",
    videoTitle: "",
    quote: "...two-player pong style game with a catch.",
    image2: '',
    appID: "some-pong-game",
    appHeight: "100%",
    appWidth: "100%",
    appTest: "https://emmanak.github.io/Pong-Game/index.html"
};

software[0] = {
    title: "Stat Tracker",
    order: ['body', 'image2', "title2", "body2", "appTest", "videoTitle", "video"],
    title2: "Features",
    body2: "The main feature that I wanted was a real-time sync between all buttons. If a user pushes a button, that change should be seen by another user who has access to a similar button. At the very least, I wanted the total number of button pushes across all users to be collected in real-time. I realized that if the number’s were being updated too quickly, it would confuse a user into thinking that they had pushed a button multiple times. The final implementation of the Stat Tracker app has a Refresh button to allow a user to manually refresh the button values. There is also an automatic sync/refresh that occurs every 15 seconds. The Stat Tracker app allows authentication via email sign in or through Button set ID. Signing in with an email allows a user to create or delete buttons. Any created set of buttons will be linked with that user account. User’s that have created a set of buttons can share them by sharing the Button Set ID. But inputting the Button Set ID on the sign in page, a user will be authenticated as an anonymous user and can access a button set corresponding to it’s Button Set ID. From here the anonymous user can increment or decrement buttons but will not be able to delete or create buttons. To test out the app, paste the following Button Set ID into the last input box(BELOW  ): 7I0jkTDalEayoniYia9vH0vIpWA3",
    type: "software",
    id: 0,
    key: 7,
    appID: "stat-tracker-app",
    appTest:"https://stat-counter-react-app.web.app/",
    appWidth:"400",
    appHeight:appStatTracker,
    body: "During my time volunteering with Bibles for America, I realized there was a need to efficiently collect stats. Bibles for America is a non-profit organization that distributes bibles and other publications for free. Their only requirement is that the number of material being distributed must be accurately accounted for. How to collect statistics was up to our specific team to decide. Early on, I noticed certain inefficiencies in the stat collection methods of the team. I realized that I needed a way to collect real-time stats across multiple users. I looked for smartphone apps on iOS and Android that would do this, but none met the requirements. Instead, I made my own app.",
    video: "https://www.youtube.com/watch?v=47nbD-gYcoA",
    videoTitle: "More about what I did with Bibles for America",
    quote: "...collect real-time stats across multiple users.",
    image2: 'Stat Tracker 2.jpg'
};



export {engineering, software, getProjects};

