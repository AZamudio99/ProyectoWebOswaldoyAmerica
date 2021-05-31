import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons,IonImg  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Gatos.css';
import { NavButtons } from '../components/NavButtons';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton,IonList } from '@ionic/react';
import { IonFooter, IonFab, IonFabButton, IonFabList } from '@ionic/react';
import { add, settings, share, person, arrowForwardCircle, arrowBackCircle, arrowUpCircle, logoVimeo, logoFacebook, logoInstagram, logoTwitter } from 'ionicons/icons';

import {
  Plugins,
  HapticsImpactStyle
} from '@capacitor/core';

const { Accessibility, Modals } = Plugins;
Accessibility.addListener('accessibilityScreenReaderStateChange', (state) => {
  console.log(state.value);
});
const speakBritish = async () => {
 
  Accessibility.speak({value: "El carácter del British Shorthair es el de un gato muy dulce y mimoso al que le encantan las caricias y el sentirse querido"});
};
const speakPersa = async () => {
 
  Accessibility.speak({value: "El persa de pelo largo es tranquilo y cariñoso. Es apacible y no tan activo como algunasrazas de pelo corto."});
};
const speakMaine = async () => {
  Accessibility.speak({value: "es una raza de gato doméstico originaria de Estados Unidos, conocida por ser la raza de gato doméstico más grande del mundo."});
};
const speakSiame = async () => {
  Accessibility.speak({value: "El siamés moderno es una raza de gato proveniente del antiguo reino de Siam, actualmente Tailandia."});
};
const speakRadoll = async () => {
  Accessibility.speak({value: "Es una raza de gato característica por su gran docilidad. Los Ragdolls adoran a sus dueños humanos y no les gusta estar solos. Reacciona poco al peligro"});
};
const speakExotico = async () => {
  Accessibility.speak({value: "El gato exótico tiene un diseño compacto, cuerpo redondeado, fornido, con un pelo corto y grueso. Sus grandes ojos redondos, nariz chata corta, la expresión facial dulce, y orejas pequeñas le dan una gran apariencia."});
};

const speakBombay = async () => {
  Accessibility.speak({value: "Es un gato doméstico musculoso y de tamaño mediano de cola larga. El pelaje del Bombay es corto, muy pegado al cuerpo y brillante."});
};

{/*-- código Browser --*/}
const { Browser } = Plugins;
const browserPerro = async () => {
  await Browser.open({ url: 'https://www.nationalgeographicla.com/animales' });
};


const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Gatos</IonTitle>
          <IonButtons slot="end">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <h1>Miauuudoptas</h1>
      <IonCard>
          <IonCardHeader>
            {/*-- imagen --*/}
            <IonImg src="https://wakyma.com/blog/wp-content/uploads/2020/09/gato-british-shorthair.jpg" onClick={() =>{
                 speakBritish();
              }
              }></IonImg>
            <IonCardTitle>British Shorthair</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          El carácter del British Shorthair es el de un gato muy dulce y mimoso al que le encantan 
          las caricias y el sentirse querido, dependiente de sus dueños, a los que adora y sigue a 
          todas partes, y es también buen amigo de los niños, con los que juega aunque haya pasado 
          ya de ser un cachorro y se haya convertido en un gato adulto. 
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
            <IonImg src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/591b07c25bafe832243c986d/gato-persa-gris_0.jpg" onClick={() =>{
                 speakPersa();
              }
              }></IonImg>
            <IonCardTitle>Gato Persa</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          El persa de pelo largo es tranquilo y cariñoso. Es apacible y no tan activo como algunasrazas
          de pelo corto. En general, no le importa vivir solo y se muestra bastante contento de ser gato 
          único. Le basta con estar sentado tranquilo y tener buen aspecto. Es un gato fornido de tamaño 
          mediano con una cabeza muy grande en proporción a su cuerpo. El pelaje es largo, grueso y exuberante, 
          con una capa interna densa y suave, presenta una gran variedad de patrones y colores.
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
            <IonImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Maine_Coon_cat_by_Tomitheos.JPG/160px-Maine_Coon_cat_by_Tomitheos.JPG" onClick={() =>{
                 speakMaine();
              }
              }></IonImg>
            <IonCardTitle>Maine Coon</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          es una raza de gato doméstico originaria de Estados Unidos, conocida por ser la raza de gato doméstico 
          más grande del mundo. Tiene una apariencia física distintiva y valiosas habilidades de caza. Es una 
          de las razas naturales más antiguas de América del Norte, específicamente nativa del estado de Maine.
          Los Maine Coon suelen ser amorosos, y como la mayoría de los gatos, perezosos. A pesar de ello, son 
          muy ágiles y utilizados para la caza de ratones, por su habilidad natural de atrapar presas. Son gatos 
          de exterior y disfrutan la compañía de su propia especie.
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
            <IonImg src="https://t2.ea.ltmcdn.com/es/razas/9/7/1/img_179_siames_0_orig.jpg" onClick={() =>{
                 speakSiame();
              }
              }></IonImg>
            <IonCardTitle>Siamés</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          El siamés moderno es una raza de gato proveniente del antiguo reino de Siam, actualmente Tailandia. 
          El estándar del siamés moderno o siamés estilizado indica un cuerpo elegante, esbelto, estilizado, 
          flexible y bien musculoso, con un esquema de color denominado pointed y en otros casos, colourpoint.
          El siamés se caracteriza por su esquema de color pointed típico, es decir, por una coloración más 
          oscura en los puntos donde la temperatura corporal es menor (extremidades, cola, cara y orejas), 
          que contrasta con el resto del cuerpo.
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
            <IonImg src="https://lh3.googleusercontent.com/proxy/Rnd3PfytyIp4FI_QrddcfCd36f8bfMTSvPg9C67ZrmBm-ZsapHICXs8886CIgJ2qVDRu60URnFmnTdMGFLjM-Kau7JAfrtJ4W3h-GA" onClick={() =>{
                 speakRadoll();
              }
              }></IonImg>
            <IonCardTitle>Ragdoll</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Es una raza de gato característica por su gran docilidad. Los Ragdolls adoran a sus dueños humanos 
          y no les gusta estar solos. Reacciona poco al peligro, se muestra dócil y tranquilo. Es un gato 
          exclusivamente casero y dependiente. Una particularidad del ragdoll consiste en el hecho de que cuando 
          es tomado en brazos es capaz de aflojar completamente sus músculos y relajarse del todo, hasta volverse 
          inerte como un muñeco. Esta característica es la que justamente explica el origen de su denominación. Otra 
          característica es su voz, que es debilísima, y raramente maúlla, hasta el punto de que es necesario vigilarlo 
          para asegurarse de que no haya ningún problema.
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
            <IonImg src="https://misanimales.com/wp-content/uploads/2018/10/gato-exotico-atigrado.jpg" onClick={() =>{
                 speakExotico();
              }
              }></IonImg>
            <IonCardTitle>Gato exótico</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          El gato exótico tiene un diseño compacto, cuerpo redondeado, fornido, con un pelo corto y grueso. Sus grandes ojos 
          redondos, nariz chata corta, la expresión facial dulce, y orejas pequeñas le dan una gran apariencia.  tiene una 
          personalidad suave y tranquila que recuerda a los persas, pero es más vivo. Curiosos y juguetones, es amigable 
          con otros gatos y perros. Raramente maúlla. Tienden a mostrar más cariño y lealtad que la mayoría de las razas.
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
            <IonImg src="https://www.hola.com/imagenes/estar-bien/20200413165436/gato-bombay-caracteristicas-lb/0-810-166/gato-bombay-caracteristicas-t.jpg" onClick={() =>{
                 speakBombay();
              }
              }></IonImg>
            <IonCardTitle>Bombay</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p id="p1">
          Es un gato doméstico musculoso y de tamaño mediano de cola larga. El pelaje del Bombay es corto, muy pegado al 
          cuerpo y brillante. Prácticamente no tiene pelusa. Es de textura satinada, y de color únicamente negro. Esta 
          raza se caracteriza por actitudes de sensibilidad , así como por una destacada inteligencia. Son gatos cariñosos 
          que tienen mucho apego a sus dueños2​ buscando siempre mimos y atención por lo anterior la vida en familia es ideal 
          para estos gatos. A pesar de lo anterior, su instinto al juego y vivacidad siempre estarán presentes.Es un animal 
          con amplia tolerancia, puede convivir con otros gatos sin problema, los perros y niños también son bienvenidos 
          en la vida del bombay. El caminar del bombay es similar al de una pantera adulta, con los hombros bajos.
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

export default Tab3;
