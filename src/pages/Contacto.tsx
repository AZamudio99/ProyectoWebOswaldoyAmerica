import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonImg, IonLoading, IonButton, IonLabel,useIonAlert } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Contacto.css';
import { NavButtons } from '../components/NavButtons';

import { Plugins } from '@capacitor/core';

{/*-- código de la localización--*/ }
const { Geolocation } = Plugins;
var lat = "";
var log = "";
const getCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition();
  console.log('Current', coordinates);
  lat = coordinates.coords.latitude.toString();
  log = coordinates.coords.longitude.toString();
  console.log(lat + log);
}

{/*-- código Browser --*/ }
const { Browser } = Plugins;
const browserDirec = async () => {
  await Browser.open({ url: 'https://www.google.com.mx/maps/dir/' + lat.toString() + ',' + log.toString() + '/20.1397571,-101.1527848' });
};

{/*-- Toast --*/ }
const { Toast } = Plugins;
const showToast = async () => {
  await Toast.show({
    text: 'Localización guardada'
  });
}

{/*-- código Device --*/ }
const { Device } = Plugins;

const  info = async () => {
   return await Device.getInfo();
}

{/*-- código Splash --*/ }
const { SplashScreen } = Plugins;

{/*-- código Share --*/ }
const { Share } = Plugins;

{/*-- Vibrar --*/}
const { Haptics } = Plugins;

const compartir = async() => {
  await Share.share({
    title: 'Mira esta noticia.',
    text: 'Tienes que conocer sobre esto.',
    url: 'https://www.google.com.mx/maps/dir/' + lat.toString() + ',' + log.toString() + '/20.1397571,-101.1527848',
    dialogTitle: 'Compartir',
  });

 

}


const Peces: React.FC = () => {
  var InfoC
  const [present] = useIonAlert();
  
  return (

    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Contacto</IonTitle>
          <IonButtons slot="end">
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>Desarrolladores</h1>
        <div id="padre">

          <div id="avatar" ></div>

        </div>
        <h2>Oswaldo Jiménez</h2>
        <h6>oswaldo40.jimene50@gmail.com</h6>

        <div id="padre">

          <div id="avatar2" ></div>

        </div>

        <h2>América Zamudio</h2>
        <h6>America@gmail.com</h6>
        <br />

        <h6>Aplicación desarrollada en el Itsur.</h6>
        <h2>Ubicación</h2>
        <div id="boton">
          <IonButton onClick={() => {
            getCurrentPosition();
            showToast();
            console.log(Device.getInfo());
           

          }
          }>Posicion

            </IonButton>

          <IonButton onClick={() => {
            browserDirec();
          }
          }>Mostrar Ruta

            </IonButton>
        </div>

        <div id="boton">
          <IonButton onClick={() => {
            
            compartir();
            Haptics.vibrate();

          }
          }>
            Compartir Ruta
            </IonButton>
            
        </div>

        <br /><br />

      </IonContent>
    </IonPage>
  );
};

export default Peces;