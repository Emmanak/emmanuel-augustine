var engineering = [];
var software = [];

engineering[4] = {
    title: "Thermometer",
    type: "engineering",
    id: 4,
    key: 0,
    body: "This thermometer circuit was made using an LM335 temperature sensor in conjunction with the Altera DE2 FPGA. All the analog signals from the temperature sensor were converted through and ADC(Analog to Digital Convertor) and sent to the microcontroller to be displayed on a seven-segment display. The thermometer was tested to be accurate in a temperature range of -40C to 40C.",
    video: "",
    videoTitle: "",
    quote: "...made using an LM335 temperature sensor",
    image: ''
};

engineering[3] = {
    title: "Reflow Soldering Oven",
    type: "engineering",
    id: 3,
    key: 1,
    body: "Many electronics today are created using a baking process called reflow soldering. The tiny components are essentially baked onto a printed circuit board at high temperatures. The goal of this project is to make an oven that can be used to reflow solder electronic circuits. This was accomplished using the Altera DE2 board which measured the internal oven temperature through a thermocouple wire. Based on the measured temperature the DE2 would modulate a solid state relay to control the power of the oven in order to keep temperature within it’s required values.",
    video: "",
    videoTitle: "",
    quote: "...an oven that can be used to reflow solder electronic circuits.",
    image: ''
};

engineering[2] = {
    title: "Electromagnetic Tether Robot",
    type: "engineering",
    id: 2,
    key: 2,
    body: "The objective of this project was to design and build a robot driven by electric motors that follows an electromagnetic tether using inductors as sensors. It also had to be able to receive commands from a transmitter and execute them. The software was programmed in C on the LP51B microcontroller. The robot was battery operated and moved with electric motors driven by MOSFETs. The transmitter was able to send movement commands to the robot using the buttons of a matrix keypad. The communications between the robot and the transmitter was established using inductors to send and receive information through electromagnetic waves.The robot was able to move forwards, backwards, turn and parallel park.",
    video: "",
    videoTitle: "",
    quote: "robot driven by electric motors that follows an electromagnetic tether",
    image: ''
};

engineering[1] = {
    title: "Solar-power radio",
    type: "engineering",
    id: 1,
    key: 3,
    body: "Today, there is a heavy reliance on telecommunication, internet and electricity in general. If one of these items were to fail, it’s very like a certain amount of panic would ensue. This only intensifies in the midst of a natural disaster where more than one, if not all of these technologies could be inaccessible to a large group of people. In the midst of a natural disaster how can the general public have access to the latest safety or disaster relief information? One solution is to rely on older technologies such as the AM radio.<p>Telecommunications can be very mysterious, but this project demystified a lot of things. The goal of this project was to create a low-powered, low-cost, self sustaining AM-radio that can be used during disaster scenarios. This project implementation utilizes a simple AM radio circuit with a high/low impedance headphone jack output. It is powered by a rechargeable 9V battery which is charged through a solar panel. </p>",
    video: "",
    videoTitle: "",
    quote: "...low-powered, low-cost, self sustaining AM-radio",
    image: ''
};

engineering[0] = {
    title: "Li-Fi Communication",
    type: "engineering",
    id: 0,
    key: 4,
    body: "This was my final project at the University of British Columbia. The project stakeholder required a working proof-of-concept using LiFi technology. LiFi or Visible Light Communication is a way to transmit data through the visible light spectrum. In this implementation, visible light from LEDs was used to transmit a user’s position in a parking lot to their smartphone app. The light signals were received by the smartphone using a simple light sensor connected to the phone’s headphone jack. The Android app was created in Java using the LibGDX framework.",
    video: "",
    videoTitle: "",
    quote: "...transmit data through the visible light spectrum.",
    image: ''
};

software[2] = {
    title: "Jumper VR",
    type: "software",
    id: 2,
    key: 5,
    body: "This is a VR game for android made during a local 48-hour game jam with my roommate. This was our first time using unity. The game models were created in 3DS Max and the game logic was programmed in C#. This game was designed for use with google cardboard. The magnetic button on the side of the cardboard is required for gameplay.",
    video: "",
    videoTitle: "",
    quote: "VR game for android made during a local 48-hour game jam",
    image: ''
};

software[1] = {
    title: "Javascript Game",
    type: "software",
    id: 1,
    key: 6,
    body: "Prior to making this game, I had very little web development experience. I was intrigued to take on this project after I saw my roommate creating a turned-based game in JavaScript. I had high hopes for this project but found that writing games in pure JS was harder than I expected. If I were to do it again, I’d take advantage of libraries or APIs like WebGL. The current implementation is a two-player pong style game with a catch.",
    video: "",
    videoTitle: "",
    quote: "...two-player pong style game with a catch.",
    image: ''
};

software[0] = {
    title: "Stat Tracker",
    type: "software",
    id: 0,
    key: 7,
    body: "During my time volunteering with bibles for America (add to resume), I realized there was a need to efficiently collect stats. Bibles for America is a non profit organization that distributes bible and other publications for free. Their only requirement is that the number of material being distributed must be accurately accounted for. I needed a way to collect real-time stats across multiple users. I looked for smartphone apps on ios and android that would do this, but none met the requirements. Instead I made my own app.",
    video: "",
    videoTitle: "",
    quote: "...collect real-time stats across multiple users.",
    image: ''
};



export {engineering, software};

