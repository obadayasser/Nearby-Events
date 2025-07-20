
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAhY4qK0ITPw665DQqmj5_62Wcgh3VQ1_U",
  authDomain: "nearby-event.firebaseapp.com",
  projectId: "nearby-event",
  storageBucket: "nearby-event.firebasestorage.app",
  messagingSenderId: "273165055957",
  appId: "1:273165055957:web:6883e8772c7da3add26f5c"
};
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestFirebaseToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    });

    if (token) {
      console.log(" Firebase Token:", token);
    } else {
      console.warn(" No token received");
    }
  } catch (err) {
    console.error("Firebase Token Error:", err);
  }
};

onMessage(messaging, (payload) => {
  console.log(" Firebase message received:", payload);
});
