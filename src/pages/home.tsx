import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, 
IonImg, IonCardContent } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './home.css';
import { IonMenu, IonList, IonItem, IonRouterOutlet } from '@ionic/react';
import { NavButtons } from '../components/NavButtons';
import React from 'react';
import { IonSlides, IonSlide } from '@ionic/react';

// Optional parameters to pass to the swiper instance.
// See http://idangero.us/swiper/api/ for valid options.
const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi mascota</IonTitle>
          <IonButtons slot="end" id="botones">
            <NavButtons/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <h1>Alegra tu vida con una mascota</h1>
      <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
      <IonImg src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRYWFhYZGBgaHBwZHRkaGRweGR4YGR0eGh8cGh0eJC4lHx4sJRwlJjsmKy8xNTc1GiQ7QDszPy40NzEBDAwMEA8QHxISHz8sJSw0NDQ2NjcxPTQ1NDQ0NjE0MTQxND02PT89Pzo2NTY0MTQ0NDQ0NDQ0NDQ0PTcxNDQ0NP/AABEIAIsBbAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA5EAACAQIEBAQDBwIGAwAAAAABAgADEQQSITEFQVFhBiJxgRORoQcyQnKxwfBS0RRigpLh8SOisv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQEAAwADAAICAgMAAAAAAAABAgMREiExBEETYYGxIjJR/9oADAMBAAIRAxEAPwDr8REBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBETHiUJRwNyrAepBgekcHUEEdjeepQuGVXsMjFKg1/MO4O//FpYuFcfVyKdQqtXkL+Vvy359pTHPv1plruPxNxFoIl2ZMGJxapYMdTso1Y+3TvNDjnGkoILed2NlQHdt7noBvI/BIUDVKrFna5JJ+gHIDpKZZ++Rpjh2dqdwmMVywAIK2uDvY85syueHKuetVfkVW3+5v7Sxycb2dVzx8cuEEzHiaoRWY8hK7XxrWUsfMxsB+3pMd35E1frtaatN2LGaq9R85jav0HzkYpCAAnWblNhMp+RcvXxe6Zj7+snx26D6x/iG/y/WfBaamKxCqLkycttxnbU44TK8kb4xa89J6XEIfxr8xIhKwcfzaReJfI5QkgEXU87TLL8zLGdk7Gk/GlvO8q3gz7IHgPECzMjG9j5STJ6durZNmMyjl2a7hl40ia3EKzJTZ1F2AuAdv5z9ppYPizNYVFC3/EDp7g6iWyzkvKrMLZ2JaIiWVIiICJqYvFW8q6sfko6nv2m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"></IonImg>
      </IonSlide>
      <IonSlide>
        <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hZ8pboMvP3tlYHVttFA2io4EhHVD9M9vtw&usqp=CAU"></IonImg>
      </IonSlide>
      <IonSlide>
        <IonImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rI0pp23nIKb3CsP2WpLZ02BW0DCojIyM6A&usqp=CAU"></IonImg>
      </IonSlide>
    </IonSlides>
      </IonContent>
      <h2>¿Por qué una mascota?</h2>
      <IonCardContent>
      Los animales de compañía son seleccionados por su comportamiento, adaptabilidad y 
      por su interacción con los humanos, en la que posiblemente se utilicen como herramientas 
      de caza o seguridad. Poseer un animal de compañía puede traer beneficios a la salud, 
      ya que el cuidado diario hace olvidar a muchas personas otro tipo de preocupaciones, 
      evita la depresión y nos hace sentir útiles. Los animales de compañía más populares 
      son el perro y el gato.
      </IonCardContent>
    </IonPage>
  );
};

export default Tab1;


