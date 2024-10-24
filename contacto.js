import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getFirestore, doc, setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";

        // Configuración de Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyB2l1oU01AUQeACim_jCwVPosEUYc38ILE",
            authDomain: "tienda-f4a95.firebaseapp.com",
            projectId: "tienda-f4a95",
            storageBucket: "tienda-f4a95.appspot.com",
            messagingSenderId: "1026116794055",
            appId: "1:1026116794055:web:399f38ab77f708d73770e2",
            measurementId: "G-BLQ6MDL2RS"
        };

        // Inicializa Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        document.getElementById("boton").addEventListener("click", async function(event) {
            event.preventDefault(); // Evita el envío del formulario

            var name = document.getElementById('name').value;
            var phone = document.getElementById('phone').value;
            var email = document.getElementById('email').value;
            var address = document.getElementById('address').value;
            var message = document.getElementById('message').value;

            if (name === "" || phone === "" || email === "" || address === "" || message === "") {
                alert("Todos los campos son obligatorios");
                return;
            } else {
                try {
                    const id = new Date().getTime(); // Genera un ID único basado en la fecha
                    await setDoc(doc(db, "Contacts", id.toString()), {
                        name: name,
                        phone: phone,
                        email: email,
                        address: address,
                        message: message,
                        timestamp: Timestamp.fromDate(new Date())
                    });
                    alert("Formulario enviado exitosamente");

                    // Borra el contenido de los campos
                    document.getElementById('name').value = "";
                    document.getElementById('phone').value = "";
                    document.getElementById('email').value = "";
                    document.getElementById('address').value = "";
                    document.getElementById('message').value = "";
                } catch (error) {
                    console.error("Hubo un error al enviar el formulario: ", error);
                    alert("Hubo un error al enviar el formulario.");
                }
            }
        });