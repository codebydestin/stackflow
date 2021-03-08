# Stackflow App

 <img src="https://user-images.githubusercontent.com/9693819/110305527-ae6c1a00-7ff4-11eb-98f1-65bb189d0620.gif" width="420">

## How to run project in iOS Simulator or iOS Device

- Install Expo CLI on your local machine e.g -  `yarn global add expo-cli`.
- From the command line, cd ~/ into the app root and run `yarn install` to install all the project dependencies. 
- Run `expo start` to test the project on a simulator or real device. This will open a window in your browser, scan QR code with the device camera to run the app on a real device.
- If you have Xcode installed, you can run - `yarn ios` to open the app in Xcode simulator. 

## About Stackflow

- Stackflow is a simple React Native app that shows the 20 top Stack Overflow users based on reputation. 
- Stackflow view components are stateless functional components that use hooks such as useState and useEffect to manage state. 
- Stackflow allows you to toggle each user to show or hide details, follow/unfollow a user and block a user.
