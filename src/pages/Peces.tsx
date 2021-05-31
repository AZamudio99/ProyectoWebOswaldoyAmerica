import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonImg } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton,IonList,IonListHeader,IonFab,IonFabButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Peces.css';
import { NavButtons } from '../components/NavButtons';
import { arrowForwardCircle, image } from 'ionicons/icons';

import {
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';


{/*-- código Browser --*/}
const { Browser } = Plugins;
const browserBetta = async () => {
    await Browser.open({ url: 'https://es.wikipedia.org/wiki/Betta_splendens' });
};
const browserDorado = async () => {
  await Browser.open({ url: 'https://es.wikipedia.org/wiki/Carassius_auratus' });
};
const browserCarpa = async () => {
  await Browser.open({ url: 'https://es.wikipedia.org/wiki/Cyprinus_carpio' });
};
const browserCirujano = async () => {
  await Browser.open({ url: 'https://es.wikipedia.org/wiki/Paracanthurus_hepatus' });
};
const browserEsturion = async () => {
  await Browser.open({ url: 'https://es.wikipedia.org/wiki/Acipenseridae' });
};
const browserEscalar = async () => {
  await Browser.open({ url: 'https://es.wikipedia.org/wiki/Pterophyllum_scalare' });
};


{/*-- código Speaker --*/}
const { Accessibility, Modals } = Plugins;
Accessibility.addListener('accessibilityScreenReaderStateChange', (state) => {
  console.log(state.value);
});
const speakBetta = async () => {
 
  Accessibility.speak({value: "El pez luchador de Siam o simplemente pez luchador, también conocido como pez betta, es una especie de pez de agua dulce de la familia de los osphronemidae en el orden de los perciformes."});
};
const speakDorado = async () => {
 
  Accessibility.speak({value: "El carpín dorado o carpa dorada, más conocido como pez dorado, es una especie de pez de agua dulce de la familia Cyprinidae."});
};
const speakcarpa = async () => {
  Accessibility.speak({value: "La carpa común, carpa europea o simplemente carpa de Yuriria (del latín tardío carpa, y este a su vez del gótico karpa) es un pez de agua dulce, emparentado con la carpa dorada"});
};
const speakCirujano = async () => {
  Accessibility.speak({value: "Los cirujanos azules son pequeños peces que viven en arrecifes de coral en el Indo-Pacífico. Son fáciles de divisar gracias a su coloración  azul real y amarillo canario."});
};
const speakEsturion = async () => {
  Accessibility.speak({value: "El Esturión se captura con redes, se crían en viveros y cuando alcanzan la edad fértil se inseminan artificialmente para posteriormente extraer sus huevas. "});
};
const speakEscalar = async () => {
  Accessibility.speak({value: "El escalar o pez ángel (Pterophyllum scalare) es una especie de pez de agua dulce perteneciente a la familia de los cíclidos. Es una de las especies de peces tropicales más populares en el mundo de la acuariofilia."});
};

const { Toast } = Plugins;
const showToast = async()=> {
  await Toast.show({
    text: 'Home'
  });
}



const Peces: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Peces</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <h1>Los únicos que saben "a mar" son los peces</h1>
        {/*-- código del botón me gusta --*/}
      <IonContent>
      <IonCard>
          <IonCardHeader>
            {/*-- imagen --*/}
            <IonImg src="https://molyacuarium.com/wp-content/uploads/2018/11/pez-betta.jpg" onClick={() =>{
                 speakBetta();
                 showToast();
              }
              }></IonImg>
            <IonCardTitle>Pez betta</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p id="p1">El pez luchador de Siam o simplemente pez luchador, también conocido como pez betta,
           es una especie de pez de agua dulce de la familia de los osphronemidae en el orden 
           de los perciformes.​ Es nativo del Sudeste Asiático mayormente en Tailandia y Camboya.​</p>
           {/*-- fab placed to the top end --*/}
          <IonFab vertical="bottom" horizontal="end" >
            <IonFabButton onClick={() =>{
                browserBetta();
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
            <IonImg src="https://image.freepik.com/foto-gratis/pez-dorado-aislado-negro_62856-4769.jpg" onClick={() =>{
                 speakDorado();
                 showToast();
              }
              }></IonImg>
            <IonCardTitle>Pez Dorado</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">El carpín dorado o carpa dorada, más conocido como pez dorado, 
          es una especie de pez de agua dulce de la familia Cyprinidae.
           Fue uno de los primeros peces domesticados por el hombre, 
           y actualmente es uno de los más comunes peces de acuario.</p>
           {/*-- fab placed to the top end --*/}
          <IonFab vertical="bottom" horizontal="end" >
            <IonFabButton onClick={() =>{
                browserDorado();
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
            <IonImg src="https://infomarina.net/wp-content/uploads/2017/10/Pez-Carpa.jpg" onClick={() =>{
                 speakcarpa();
                 showToast();
              }
              }></IonImg>
            <IonCardTitle>Carpa de Yuriria</IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">La carpa común, carpa europea o simplemente carpa de Yuriria (del latín tardío carpa, y este a su vez del gótico karpa)
          es un pez de agua dulce, emparentado con la carpa dorada, con la cual puede incluso tener descendencia híbrida.
           Ha sido introducida en todos los continentes a excepción de la Antártida. Está incluida en la lista 100 de las especies exóticas 
           invasoras más dañinas del mundo3​ de la Unión Internacional para la Conservación de la Naturaleza.</p>
            {/*-- fab placed to the top end --*/}
          <IonFab vertical="bottom" horizontal="end" >
            <IonFabButton onClick={() =>{
                browserCarpa();
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
            <IonImg src="https://infomarina.net/wp-content/uploads/2017/08/Pez-Cirujano.jpg" onClick={() =>{
                 speakCirujano();
                 showToast();
              }
              }></IonImg>
            <IonCardTitle>Pez Cirujano Azul</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">Los cirujanos azules son pequeños peces que viven en arrecifes de coral en el Indo-Pacífico. 
          Los animales son fáciles de divisar gracias a su coloración vibrante característica que consta de colores azul real y amarillo canario.
          Los cirujanos azules pueden parecer relativamente inofensivos, pero, frente al peligro, pueden mostrar un par de espinas venenosas afiladas en cada una de sus colas. 
          Luego, los peces mueven sus cuerpos de lado a lado, amenazando con acuchillar a sus depredadores con sus aguijones tóxicos.</p>
          {/*-- fab placed to the top end --*/}
          <IonFab vertical="bottom" horizontal="end" >
            <IonFabButton onClick={() =>{
                browserCirujano();
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
            <IonImg src="https://i.pinimg.com/originals/14/f1/29/14f129748058e6d82067222fb98333fa.jpg" onClick={() =>{
                 speakEsturion();
                 showToast();
              }
              }></IonImg>
            <IonCardTitle>Esturion</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">El Esturión se captura con redes, se crían en viveros y cuando alcanzan la edad fértil se inseminan artificialmente
           para posteriormente extraer sus huevas. Hay varios tipos de Caviar, los más conocidos son el Beluga, 
           el Osetra y el Sevruga. El mejor Caviar es el del Esturión que se pesca en el Mar Caspio, en Azerbayán, en Irán y en Rusia.
           Pertenece al periodo de los dinosaurios, con más de 120 millones de años de antigüedad.</p>
           {/*-- fab placed to the top end --*/}
          <IonFab vertical="bottom" horizontal="end" >
            <IonFabButton onClick={() =>{
                browserEsturion();
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
            <IonImg src="https://cdn.shopify.com/s/files/1/0844/6695/products/Pterophyllum_Scalare_1024x1024_7678d218-7ab0-4cbe-8f0c-d81d3ac97856_grande.jpg?v=1502170949" onClick={() =>{
                 speakEscalar();
                 showToast();
              }
              }></IonImg>
            <IonCardTitle>Pez Escalar</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">El escalar o pez ángel (Pterophyllum scalare) es una especie de pez de agua dulce perteneciente a la familia de los cíclidos. 
          Es una de las especies de peces tropicales más populares en el mundo de la acuariofilia.
          El pez escalar ha sido llamado “el rey de los peces” por la majestuosidad que presenta su estilizada forma.
          Pueden llegar a vivir aproximadamente de unos 5 a 8 años.
          Puede llegar a los 15 cm de longitud y se caracteriza por su esbeltez lateral; las aletas dorsal y anal son muy grandes y forman un triángulo en el aspecto general del pez. 
          Los escalares no son peces que presenten diferencias apreciables entre los machos y las hembras. La aleta caudal también es grande,
           y las abdominales se han convertido en dos radios largos de hasta 8 cm.</p>
           {/*-- fab placed to the top end --*/}
          <IonFab vertical="bottom" horizontal="end" >
            <IonFabButton onClick={() =>{
                browserEscalar();
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
  
  export default Peces;