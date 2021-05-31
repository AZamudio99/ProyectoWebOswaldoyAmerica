import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons } from '@ionic/react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonImg,IonList,IonFab,IonFabButton,useIonAlert } from '@ionic/react';
import {  IonRefresher, IonRefresherContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Reptiles.css';
import { NavButtons } from '../components/NavButtons';
import { RefresherEventDetail } from '@ionic/core';
import { arrowForwardCircle } from 'ionicons/icons';

import {
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';
const { Browser } = Plugins;

{/*-- código Browser --*/}

const browserIguana = async () => {
    await Browser.open({ url: 'https://es.wikipedia.org/wiki/Iguana_iguana' });
};
const browserGecko = async () => {
  await Browser.open({ url: 'https://es.wikipedia.org/wiki/Gekkota' });
};
const browserCamaleon = async () => {
  await Browser.open({ url: 'https://es.wikipedia.org/wiki/Chamaeleonidae' });
};
const browserTortuga = async () => {
  await Browser.open({ url: 'https://es.wikipedia.org/wiki/Chrysemys_picta' });
};
const browserPython = async () => {
  await Browser.open({ url: 'https://es.wikipedia.org/wiki/Python_regius' });
};


{/*-- código Speaker --*/}
const { Accessibility, Modals } = Plugins;
Accessibility.addListener('accessibilityScreenReaderStateChange', (state) => {
  console.log(state.value);
});
const speakIguana = async () => {
 
  Accessibility.speak({value: "La iguana verde, también conocida como iguana común (Iguana iguana) es una especie de la familia Iguanidae."});
};
const speakGeko = async () => {
 
  Accessibility.speak({value: "Los geckos se caracterizan por tener ojos y patas relativamente grandes, en particular los dedos de las patas. Por lo general las escamas son pequeñas y tienen una cabeza aplanada sin espinas o crestas."});
};
const speakcamaleon = async () => {
  Accessibility.speak({value: "Los camaleones son una familia, Chamaeleonidae, de pequeños saurópsidos (reptiles) escamosos. Existen cerca de 161 especies de camaleones."});
};
const speakTortuga = async () => {
  Accessibility.speak({value: "La tortuga de agua es una mascota muy habitual y común, especialmente entre los niños, ya que la popularidad de estos reptiles ha subido como la espuma durante los últimos años."});
};
const speakPiton = async () => {
  Accessibility.speak({value: "La pitón real (Python regius) es una serpiente de la familia de los pitónidos, propia de África tropical. "});
};

const { Toast } = Plugins;
const showToast = async()=> {
  await Toast.show({
    text: 'Home'
  });
}







const Reptiles: React.FC = () => {
  
  const [present] = useIonAlert();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reptiles</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <h1>La lealtad de un animal no conoce límites.</h1>
        {/*-- código del botón me gusta --*/}
      <IonContent>
      <IonCard>
          <IonCardHeader>
            {/*-- imagen --*/}
            <IonImg src="https://cumbrepuebloscop20.org/wp-content/uploads/2018/09/Iguana-2.jpg" onClick={() =>{
                 speakIguana();
                 showToast();
              }
              }></IonImg>
            <IonCardTitle>Iguana</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
              
            <p id="p1">La iguana verde, también conocida como iguana común (Iguana iguana) es una especie de la familia Iguanidae. 
            1​ Es un gran lagarto arbóreo. Mide hasta 2 m de longitud de cabeza a cola. Los machos alcanzan entre 30 y 40
            cm de longitud hocico-cloaca, las hembras cerca de 10 cm; cola extremadamente larga y algo aplanada lateralmente. 
            1​ Llega a pesar más de 15 kg. Pertenece al grupo mayor y de más complicado diseño de los saurios del Nuevo Mundo, 
            al que pertenecen la mayoría de las especies.</p>
            <IonFab vertical="bottom" horizontal="end" >
            <IonFabButton onClick={() =>{
                browserIguana();
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
            <IonImg src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/temas/caracteristicas-gecko-leopardo.jpg" onClick={() =>{
                speakGeko();
              }
              }></IonImg>
            <IonCardTitle>El gecko</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">Los geckos se caracterizan por tener ojos y patas relativamente grandes, en particular los dedos de las patas. Por lo general las escamas son pequeñas y
           tienen una cabeza aplanada sin espinas o crestas. Presentan una gran variedad de formas, colores y tamaños. La mayoría tiene colores apagados y están
            bien camuflados en su entorno natural. En algunas especies, como las del género Uroplatus de Madagascar, la forma del cuerpo también contribuye al camuflaje.
             El tamaño de las especies puede variar de un poco más de 1 cm hasta 40 cm, incluyendo la cola. Los geckos más largos conocidos midieron más de 60 cm,
              pero estas especies están probablemente extintas.</p>
            {/*-- fab placed to the top end --*/}
          <IonFab vertical="bottom" horizontal="end" >
            <IonFabButton onClick={() =>{
               
               browserGecko();
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
            <IonImg src="https://www.nationalgeographic.com.es/medio/2018/05/18/camaleon_3f5dd7c4.jpg" onClick={() =>{
                speakcamaleon();
              }
              }></IonImg>
            <IonCardTitle>Camaleón</IonCardTitle>
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">Los camaleones son una familia, Chamaeleonidae, de pequeños saurópsidos (reptiles) escamosos. Existen cerca de 161 especies de camaleones,
           la mayor parte de ellas en África al sur del Sáhara. En América se llama a menudo camaleones a lagartos de la familia de los anoles, 
           que no guardan ningún parentesco especial con los verdaderos camaleones.
          Son famosos por su habilidad de cambiar de color según las circunstancias, por su lengua rápida y alargada, y por sus ojos, que pueden ser
           movidos independientemente el uno del otro.
          El grupo es bastante antiguo, ya que se conocen fósiles de camaleón procedentes del Paleoceno. La familia está emparentada con la de los agámidos.</p>
          <IonFab vertical="bottom" horizontal="end" >
            <IonFabButton onClick={() =>{
                browserCamaleon();
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
            <IonImg src="https://www.tortugaswiki.com/Imagenes/tortugas-de-agua.jpg" onClick={() =>{
                speakTortuga();
              }
              }></IonImg>
            <IonCardTitle>Tortuga Pintada</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">La tortuga de agua es una mascota muy habitual y común, especialmente entre los niños,
           ya que la popularidad de estos reptiles ha subido como la espuma durante los últimos años.
           La tortuga necesita tener su propio hábitat o espacio, que puede ser una pecera o un terrario. El hábitat deberá cumplir con las exigencias siguientes:
          Una piscina con profundidad suficiente para que puedan nadar tranquilamente sin chocar con la decoración que puedas tener.
          Una parte seca que esté por encima del agua en la que la tortuga pueda secarse y tomar el sol, así como descansar. </p>
          <IonFab vertical="bottom" horizontal="end" >
            <IonFabButton onClick={() =>{
                browserTortuga();
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
            <IonImg src="https://www.bioenciclopedia.com/wp-content/uploads/2016/10/Piton_real_informacion.jpg" onClick={() =>{
                speakPiton();
              }
              }></IonImg>
            <IonCardTitle>Piton Real</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">La pitón real (Python regius) es una serpiente de la familia de los pitónidos, propia de África tropical. 
          También se la conoce como "pitón bola", a consecuencia de su timidez, suele enrollarse sobre sí misma metiendo 
          la cabeza en el centro haciéndose una bola. Esta pitón suele ser muy tranquila por lo cual muchas personas las tienen como mascotas.</p>
          <IonFab vertical="bottom" horizontal="end" >
            <IonFabButton onClick={() =>{
               browserPython();
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
  
  export default Reptiles;


