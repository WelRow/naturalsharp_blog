// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref as dbRef, set, update, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpZEVSXxZHl2xV3HbejGzM_h55PRRSVpg",
  authDomain: "penlab-1d507.firebaseapp.com",
  databaseURL: "https://penlab-1d507-default-rtdb.firebaseio.com",
  projectId: "penlab-1d507",
  storageBucket: "penlab-1d507.appspot.com",
  messagingSenderId: "923099216073",
  appId: "1:923099216073:web:460cdc8e3dc9eaa0f07518",
  measurementId: "G-TKLYRYKPBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
const database = getDatabase(app);

// User database functions
const addUserToDatabase = async (email, isGoogleUser = false) => {
  try {
    const username = email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '');
    await set(dbRef(database, 'users/' + username), {
      Auth: isGoogleUser
    });
  } catch (error) {
    console.error('Error adding user to database:', error);
    throw error;
  }
};

const updateUserAuthStatus = (email) => {
  const username = email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '');
  return update(dbRef(database, 'users/' + username), {
    Auth: true
  });
};

// Add new function for saving images
const saveImageToDatabase = async (noteType, imageData) => {
  try {
    const imageRef = dbRef(database, `Images/${noteType}/${Date.now()}`);
    await set(imageRef, {
      imageData: imageData
    });
  } catch (error) {
    console.error('Error saving image to database:', error);
    throw error;
  }
};

// Add function to fetch images
const fetchImagesForNote = (noteType, callback) => {
  const imagesRef = dbRef(database, `Images/${noteType}`);
  return onValue(imagesRef, (snapshot) => {
    const images = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        images.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
    }
    callback(images);
  });
};

// Add function to get image counts for all types
const getImageCounts = async () => {
  const types = [
    "Sixteenth Note", "Eight Note", "Quarter Note", "Half Note", "Whole Note",
    "Sixteenth Rest", "Eight Rest", "Quarter Rest", "Half Rest", "Whole Rest"
  ];
  
  const counts = {};
  const countPromises = types.map(type => 
    new Promise((resolve) => {
      const typeRef = dbRef(database, `Images/${type}`);
      onValue(typeRef, (snapshot) => {
        counts[type] = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
        resolve();
      }, { onlyOnce: true });
    })
  );

  await Promise.all(countPromises);
  return counts;
};

export { 
  auth, 
  googleProvider, 
  addUserToDatabase, 
  updateUserAuthStatus,
  saveImageToDatabase,
  fetchImagesForNote,
  getImageCounts
};
