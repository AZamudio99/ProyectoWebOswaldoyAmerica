import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons,IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Roedores.css';
import { NavButtons } from '../components/NavButtons';
import { IonFooter, IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton,IonList } from '@ionic/react';


import {
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';

const { Accessibility, Modals } = Plugins;
Accessibility.addListener('accessibilityScreenReaderStateChange', (state) => {
  console.log(state.value);
});
const speakArdilla = async () => {
 
  Accessibility.speak({value: "Unas 200 especies de ardillas viven en todo el mundo, con excepción de Australia. Al igual que otros roedores, los cuatro dientes frontales de las ardillas nunca dejan de crecer"});
};
const speakHamster = async () => {
 
  Accessibility.speak({value: "Los hay de diferentes tamaños y colores: hámsteres dorados, sirios, enanos, etc. Su adorable aspecto y su diminuto cuerpo hace que estos animales domésticos sean muy populares."});
};
const speakHurones = async () => {
  Accessibility.speak({value: "Los hurones son expertos en colarse por los agujeros de los armarios, las paredes, o detrás de los electrodomésticos, donde pueden resultar heridos o incluso fallecer a causa de los cables eléctricos"});
};
const speakErizos = async () => {
  Accessibility.speak({value: "Son pequeños mamíferos que habitan Europa, Asia, África, y han sido introducidos en Nueva Zelanda."});
};
const speakcuyos = async () => {
  Accessibility.speak({value: "Las cobayas son una especie sociable y les gusta disfrutar de periodos de descanso a lo largo del día, por lo que se echará más de una siesta"});
};
const speakChinchillas = async () => {
  Accessibility.speak({value: "Las chinchillas son animales originarios de las montañas de los Andes. Aunque parezca un animal frágil, su frondoso pelaje le permite soportar climas secos y de bajas temperaturas"});
};

const speakZary = async () => {
  Accessibility.speak({value: "Las zarigüeyas es el único marsupial originario de América del Sur. Actualmente las zarigüeyas habitan desde Argentina hasta Estados Unidos, donde existen casi 100 especies diferentes de este mamífero."});
};

{/*-- código Browser --*/}
const { Browser } = Plugins;
const browserPerro = async () => {
  await Browser.open({ url: 'https://www.nationalgeographicla.com/animales' });
};





const Roedores: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Roedores</IonTitle>
            <IonButtons slot="end">
              <NavButtons/>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <h1>Pequeños y cariñosos</h1>
        <IonContent>
      <IonCard>
          <IonCardHeader>
            {/*-- imagen --*/}
            <IonImg src="https://i.pinimg.com/236x/da/4a/94/da4a946896c7c9c4399a09fc9f44cbbf.jpg" onClick={() =>{
                 speakArdilla();
              }
              }></IonImg>
            <IonCardTitle>Ardillas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Unas 200 especies de ardillas viven en todo el mundo, con excepción de Australia. Al igual 
          que otros roedores, los cuatro dientes frontales de las ardillas nunca dejan de crecer, 
          por lo que no se desgastan. Las ardillas de los árboles son las más conocidas. Suelen verse 
          correteando con mucha gracia y saltando de rama en rama. Otras ardillas viven en madrigueras 
          o túneles, donde algunas hibernan.
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
            <IonImg src="https://www.zooplus.es/magazine/wp-content/uploads/2019/04/hamster-rasseportrait-768x512.jpg" onClick={() =>{
                 speakHamster();
              }
              }></IonImg>
            <IonCardTitle>Hámsters</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Los hay de diferentes tamaños y colores: hámsteres dorados, sirios, enanos, etc. Su adorable 
          aspecto y su diminuto cuerpo hace que estos animales domésticos sean muy populares. 
          Son bastante individualistas y solitarios, de día se esconden en las esquinas 
          más oscuras, buscando tranquilidad, ya que se han pasado la noche cavando, removiendo, 
          correteando y a haciendo escandalera en su jaula.
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
            <IonImg src="https://petepua.com/wp-content/uploads/2020/07/hurones-petepua_5__1-e1602672016158.jpg" onClick={() =>{
                 speakHurones();
              }
              }></IonImg>
            <IonCardTitle>Hurones</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p id="p1">
          Los hurones son expertos en colarse por los agujeros de los armarios, las paredes, o detrás de 
          los electrodomésticos, donde pueden resultar heridos o incluso fallecer a causa de los cables 
          eléctricos, los ventiladores y otros artículos peligrososEn España, requieren tener obligatoriamente 
          pasaporte con chip y vacunas en regla, incluso (aunque no en todas las comunidades) es necesario 
          vacunarlos contra la rabia. Son enérgicos, curiosos y les gusta jugar con sus dueños.
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
            <IonImg src="https://static.wikia.nocookie.net/reinoanimalia/images/7/79/Erizo_pigmeo_africano_9.png/revision/latest?cb=20150103151659&path-prefix=es" onClick={() =>{
                 speakErizos();
              }
              }></IonImg>
            <IonCardTitle>Erizos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Son pequeños mamíferos que habitan Europa, Asia, África, y han sido introducidos en Nueva 
          Zelanda. El erizo es un mamífero insectívoro que mide aproximadamente 15 centímetros y pesa 
          hasta 400 gramos. Tienen el lomo cubierto de púas y el resto cubierto de pelo marrón o blanco. 
          Son solitarios y territoriales. suelen llevar a cabo un comportamiento llamado "ungimiento" 
          que consiste en llenar objetos de saliva para marcarlos. su gestación dura unos 35 días y paren 
          de 2 a 5 crías, que destetan a las 6 semanas, Tiene un promedio de vida de entre 8 años.
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
            <IonImg src="data:image/jpeg;base64,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" onClick={() =>{
              speakcuyos();
           }
           }></IonImg>
            <IonCardTitle>Cuyos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Las cobayas son una especie sociable y les gusta disfrutar de periodos de descanso a lo largo 
          del día, por lo que se echará más de una siesta, es totalmente normal en ellas, son animales
          muy asustadizos. Son animales herbívoros, por lo que el aporte de fibra en el alimento es 
          indispensable. Un cuyo sano es un animal alegre, con pelo brillante, gordito, bien desarrollado 
          y que come bien.
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
            <IonImg src="https://www.roedomesticos.org/wp-content/uploads/2019/10/Chinchilla-portada-1536x864.jpg" onClick={() =>{
                 speakChinchillas();
              }
              }></IonImg>
            <IonCardTitle>Chinchillas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Las chinchillas son animales originarios de las montañas de los Andes. Aunque parezca un animal 
          frágil, su frondoso pelaje le permite soportar climas secos y de bajas temperaturas, típicos de 
          las altas cumbres de esta cordillera. Las chinchillas son animales nocturnos, por lo que su 
          actividad incrementa durante las noches. En cautividad se suelen adaptar al horario de sus dueños. 
          Son gregarias y les encanta vivir en grupo o mantener relación con otros de su especie. Les encanta 
          saltar, trepar y corretear, y como son tan ágiles, flexibles y rápidas pueden escapar con facilidad.
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
            <IonImg src="https://www.roedomesticos.org/wp-content/uploads/2019/10/zarigueya-bebe.jpg" onClick={() =>{
                 speakZary();
              }
              }></IonImg>
            <IonCardTitle>Zarigüeyas</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Las zarigüeyas es el único marsupial originario de América del Sur. Actualmente las zarigüeyas habitan 
          desde Argentina hasta Estados Unidos, donde existen casi 100 especies diferentes de este mamífero.
          Son animales nocturnos. Durante el día, su actividad desciende y pasa el tiempo descansando en su
          madriguera. Pasan mucha parte del día durmiendo, llegando hasta las 19 horas. Suelen ser animales 
          solitarios y habitan en zonas donde existen gran cantidad de recursos y pueden refugiarse en madrigueras. 
          Son nómadas, por lo tanto cuando empieza a escasear algún recurso cambian de zona en la que viven.
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
          <IonImg src="https://cdn.icon-icons.com/icons2/1508/PNG/512/systemusers_104569.png" id="imgC"> </IonImg>
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
  
  export default Roedores;