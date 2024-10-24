import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyB2l1oU01AUQeACim_jCwVPosEUYc38ILE",
    authDomain: "tienda-f4a95.firebaseapp.com",
    projectId: "tienda-f4a95",
    storageBucket: "tienda-f4a95.appspot.com",
    messagingSenderId: "1026116794055",
    appId: "1:1026116794055:web:399f38ab77f708d73770e2",
    measurementId: "G-BLQ6MDL2RS"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

document.getElementById("Ingresar").addEventListener("click", async () => {
    var email = document.getElementById("gmail").value;
    var password = document.getElementById("password").value;

    if (email === '' || password === '') {
        alert("Todos los campos son obligatorios");
        return;
    }

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        alert("Inicio de sesión exitoso");

        // LÍNEA PARA MODIFICAR: Redirigir a la página deseada
        window.location.href = "nuevo.html";
    } catch (error) {
        console.log("Error al iniciar sesión: ", error);
        alert("Correo electrónico o contraseña incorrectos.");
    }

    document.getElementById("gmail").value = "";
    document.getElementById("password").value = "";
});