import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonImg, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Perros.css';
import { NavButtons } from '../components/NavButtons';
import React from 'react';
import { IonFooter, IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

import {
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';

const { Accessibility, Modals } = Plugins;
Accessibility.addListener('accessibilityScreenReaderStateChange', (state) => {
  console.log(state.value);
});
const speakGolden = async () => {
 
  Accessibility.speak({value: "Es una raza de perro que se desarrolló alrededor de 1850 en el Reino Unido, más concretamente en Escocia."});
};
const speakHuskey = async () => {
 
  Accessibility.speak({value: "Es una raza de perro de trabajo originaria del noreste de Siberia. Fue creado por la tribu Chukchi como perro de trabajo para tirar de los trineos a través de largas distancias"});
};
const speakShiba= async () => {
  Accessibility.speak({value: "Es el más pequeño de las seis originales y diferentes razas de perro de Japón. Es un perro pequeño y ágil que soporta muy bien el terreno montañoso"});
};
const speakAleman = async () => {
  Accessibility.speak({value: "Proveniente de Alemania. Forman parte del grupo de pastoreo,fueron perros desarrollados originalmente para reunir y vigilar ovejas."});
};
const speakgales = async () => {
  Accessibility.speak({value: "Es una raza de perro pequeño nativo de Gran Bretaña. Se ha desempeñado durante siglos como perro pastor, y se le considera uno de los perros más antiguos de Gran Bretaña."});
};
const speakPug = async () => {
  Accessibility.speak({value: "Es una raza canina con origen histórico en China, pero con el patrocinio de Reino Unido. Los pug eran un tesoro que los extranjeros solo adquirían raramente como regalo"});
};

const speakBoyero = async () => {
  Accessibility.speak({value: "Es una raza de perro boyero muy versátil originario de Cantón de Berna, Suiza.Fue criado como perro de pastoreo de ganado mayor y guardián de fincas"});
};

{/*-- código Browser --*/}
const { Browser } = Plugins;
const browserPerro = async () => {
  await Browser.open({ url: 'https://www.nationalgeographicla.com/animales' });
};






const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perros</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <h1>Un amigo no se compra, se adopta</h1>
        {/*-- código del botón me gusta --*/}
      <IonContent>
      <IonCard>
          <IonCardHeader>
            {/*-- imagen --*/}
            <IonImg src="https://i.pinimg.com/564x/86/ed/5c/86ed5c9e9d54e43b6ee7cb81b468ae47.jpg" onClick={() =>{
                 speakGolden();
              }
              }></IonImg>
            <IonCardTitle>Golden Retriever</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Es una raza de perro que se desarrolló alrededor de 1850 en el Reino Unido, 
          más concretamente en Escocia. Con sus características de perro cobrador, sabueso, 
          bloodhound y spaniel de agua, es un hábil perro de caza con aptitudes para el rastreo. 
          Posee una disposición amigable y una actitud que lo ha convertido en una de las razas 
          familiares más populares.
          </p>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={arrowForwardCircle} />
          </IonFabButton>
        </IonFab>
        </IonCardContent>
      </IonCard>
      <IonCard>
          <IonCardHeader>
            {/*-- imagen --*/}
            <IonImg src="https://i.pinimg.com/564x/6c/4b/74/6c4b74ae5d4bfbd1dd7ba2adc6fc18da.jpg" onClick={() =>{
                 speakHuskey();
              }
              }></IonImg>
            <IonCardTitle>Huskey Siberanio</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Es una raza de perro de trabajo originaria del noreste de Siberia. Fue creado por 
          la tribu Chukchi como perro de trabajo para tirar de los trineos a través de largas 
          distancias durante sus partidas de caza, sirviendo así como vehículo de transporte 
          rápido para las presas de la vuelta al poblado. Su pelaje les servía como protección 
          propia ante tan bajas temperaturas debido a las condiciones climáticas de sus tierras 
          natales.
          </p>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() =>{
                 browserPerro();
              }
              }>
            <IonIcon icon={arrowForwardCircle} />
          </IonFabButton>
        </IonFab>
        </IonCardContent>
      </IonCard>
      <IonCard>
          <IonCardHeader>
            {/*-- imagen --*/}
            <IonImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shiba_inu_taiki.jpg/220px-Shiba_inu_taiki.jpg" onClick={() =>{
                 speakShiba();
              }
              }></IonImg>
            <IonCardTitle>Shiba Inu</IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Es el más pequeño de las seis originales y diferentes razas de perro de Japón.
          Es un perro pequeño y ágil que soporta muy bien el terreno montañoso, ya que fue
          originalmente criado para la caza. Es una de las pocas razas de perro antiguas 
          que todavía existen en el mundo.
          </p>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() =>{
                 browserPerro();
              }
              }>
            <IonIcon icon={arrowForwardCircle} />
          </IonFabButton>
        </IonFab>
        </IonCardContent>
      </IonCard>
      <IonCard>
          <IonCardHeader>
            {/*-- imagen --*/}
            <IonImg src="https://www.zooplus.es/magazine/wp-content/uploads/2019/03/deutscher-sch%C3%A4ferhund.jpg " onClick={() =>{
                 speakAleman();
              }
              }></IonImg>
            <IonCardTitle>Pastor Alemán</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Proveniente de Alemania. Forman parte del grupo de pastoreo,fueron perros 
          desarrollados originalmente para reunir y vigilar ovejas. Desde entonces, sin embargo, 
          gracias a su fuerza, inteligencia, capacidad de entrenamiento y obediencia,son a 
          menudo la raza preferida para muchos otros tipos de trabajo, como son: perro policía, 
          perro guardián, guía de ciegos, animal de rescate, y otros, según el uso que le den 
          las fuerzas y cuerpos de seguridad y el ejército. En muchos países incluso cuentan 
          con unidades específicas denominadas K-9.
          </p>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() =>{
                 browserPerro();
              }
              }>
            <IonIcon icon={arrowForwardCircle} />
          </IonFabButton>
        </IonFab>
        </IonCardContent>
      </IonCard>
      <IonCard>
          <IonCardHeader>
            {/*-- imagen --*/}
            <IonImg src="https://media.istockphoto.com/photos/portrait-red-welsh-corgi-dog-outdoors-in-the-park-on-a-sunny-summer-picture-id1061822700?k=6&m=1061822700&s=612x612&w=0&h=0TXX8o9lXxA6jb54noDC9ijQPHmesZfQen_V-36i5B8=" onClick={() =>{
                 speakgales();
              }
              }></IonImg>
            <IonCardTitle>Corgi galés de Pembroke</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Es una raza de perro pequeño nativo de Gran Bretaña. Se ha desempeñado durante siglos 
          como perro pastor, y se le considera uno de los perros más antiguos de Gran Bretaña.
          Es fuerte, de constitución robusta, alerta y activo, que da la impresión de fortaleza 
          y vigor en un cuerpo pequeño. Es el que empuja al ganado por los talones. Su poca altura 
          le permitía correr por debajo del ganado sin recibir patadas.
          </p>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() =>{
                 browserPerro();
              }
              }>
            <IonIcon icon={arrowForwardCircle} />
          </IonFabButton>
        </IonFab>
        </IonCardContent>
      </IonCard>
      <IonCard>
          <IonCardHeader>
            {/*-- imagen --*/}
            <IonImg src="https://i.pinimg.com/236x/10/8d/30/108d30b93ed1c178e6ef2be25d951db9.jpg" onClick={() =>{
                 speakPug();
              }
              }></IonImg>
            <IonCardTitle>Pug</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Es una raza canina con origen histórico en China, pero con el patrocinio de Reino Unido.
          Los pug eran un tesoro que los extranjeros solo adquirían raramente como regalo. Es un 
          perro bajo y macizo de aspecto cuadrado y compacto, bien proporcionado y musculoso; 
          la cabeza grande, redondeada y de aspecto sólido, está cubierta de pliegues; el hocico 
          es cuadrado y chato; los ojos, grandes y oscuros; tiene las patas rectas y la cola rizada. 
          El pelo es apretado, suave y brillante. No saben nadar.
          </p>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() =>{
                 browserPerro();
              }
              }>
            <IonIcon icon={arrowForwardCircle} />
          </IonFabButton>
        </IonFab>
        </IonCardContent>
      </IonCard> 
      <IonCard>
          <IonCardHeader>
            {/*-- imagen --*/}
            <IonImg src="https://www.infobae.com/new-resizer/x5G4GJ5iGPki56fxIaWqq5KENVc=/1200x900/filters:format(jpg):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/LC5MOYPX2JA25NY5H5KKMPREJI.jpg" onClick={() =>{
                 speakBoyero();
              }
              }></IonImg>
            <IonCardTitle>Boyero de Berna</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Es una raza de perro boyero muy versátil originario de Cantón de Berna, Suiza.Fue criado como 
          perro de pastoreo de ganado mayor y guardián de fincas, aunque también solía usarse como animal 
          de tiro cuando el granjero llevaba a vender la leche de las vacas que el propio perro cuidaba. 
          Su gran inteligencia ha permitido que se le utilice con gran éxito como perro de salvamento. 
          Su carácter afable y tranquilo, así como la facilidad con la que puede ser entrenado, le han 
          convertido en un excelente animal de compañía, por su carácter confiable y predecible. Es un 
          perro grande, por lo que necesita más de un paseo al día.
          </p>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() =>{
                 browserPerro();
              }
              }>
            <IonIcon icon={arrowForwardCircle} />
          </IonFabButton>
        </IonFab>
        </IonCardContent>
      </IonCard>

      {/*-- Comentarios --*/}
      <IonCard>
      <h2>Comentarios</h2>
      {/*-- List of Text Items --*/}
      <IonList>
      <IonItem>
        <IonHeader>
          <IonImg src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" id="imgC" > </IonImg>
          <IonLabel>Manuel Medrano</IonLabel>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iure numquam optio vel. Quos non earum officia pariatur at id unde molestias minima voluptate, nobis voluptatem corporis, nesciunt suscipit nulla.</p>
        </IonHeader>
      
      </IonItem>
      <IonItem>
        <IonHeader>
          <IonImg src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" id="imgC"> </IonImg>
          <IonLabel>América Zanudio</IonLabel>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iure numquam optio vel. Quos non earum officia pariatur at id unde molestias minima voluptate, nobis voluptatem corporis, nesciunt suscipit nulla.</p>
        </IonHeader>
      </IonItem>
      <IonItem>
         <IonHeader>
          <IonImg src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" id="imgC"> </IonImg>
          <IonLabel>Oswaldo Jiménez</IonLabel>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iure numquam optio vel. Quos non earum officia pariatur at id unde molestias minima voluptate, nobis voluptatem corporis, nesciunt suscipit nulla.</p>
        </IonHeader>
      </IonItem>
      <IonItem>
      <IonHeader>
          <IonImg src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" id="imgC"> </IonImg>
          <IonLabel>Athziri Díaz</IonLabel>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut iure numquam optio vel. Quos non earum officia pariatur at id unde molestias minima voluptate, nobis voluptatem corporis, nesciunt suscipit nulla.</p>
        </IonHeader>
      </IonItem>
      <IonItem>
      <IonHeader>
          <IonImg src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" id="imgC"> </IonImg>
          <IonLabel>German Guzmán Guzmán</IonLabel>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium rerum fugit culpa voluptatibus quis corrupti perspiciatis aperiam ab, in quae ducimus voluptas quidem fugiat delectus odio laborum est excepturi cum?</p>
        </IonHeader>
      </IonItem>
    </IonList>
    </IonCard> 

      </IonContent>  
    </IonPage>
  );
};

export default Tab2;
