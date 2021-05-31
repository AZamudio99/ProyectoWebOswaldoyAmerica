import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
  } from "@ionic/react";
  import React from "react";
  import './Menu.css';

  import {
    Plugins,
    HapticsImpactStyle,
    ActionSheetOptionStyle 
  } from '@capacitor/core';
  
  {/*-- Vibrar --*/}
  const { Haptics } = Plugins;
  export class HapticsExample {
    
    hapticsVibrate() {
      Haptics.vibrate();
    }
  
  }
  
  {/*-- Toast --*/}
const { Toast } = Plugins;
const showToast = async()=> {
  await Toast.show({
    text: 'Home'
  });
}
const showPerros = async()=> {
  await Toast.show({
    text: 'Perros'
  });
}
const showGatos = async()=> {
  await Toast.show({
    text: 'Gatos'
  });
}
const showToastReptiles = async()=> {
  await Toast.show({
    text: 'Reptiles'
  });
}
const showToastRoedores = async()=> {
  await Toast.show({
    text: 'Roedores'
  });
}
const showToastPeces = async()=> {
  await Toast.show({
    text: 'Peces'
  });
}
const showToastContacto = async()=> {
  await Toast.show({
    text: 'Contacto'
  });
}






 
  export const Menu = () => {
    return (
      <IonMenu side="end" contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>MENU</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/home"} routerDirection="none" onClick={() =>{
                Haptics.vibrate();
                showToast();
              }
              }>
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/Perros"} routerDirection="none" onClick={() =>{
                Haptics.vibrate();
                showPerros();
              }
              }>
                <IonLabel>Perros</IonLabel>
              </IonItem>
              <IonItem button routerLink={"/Gatos"} routerDirection="none" onClick={() =>{
                Haptics.vibrate();
                showGatos();
              }
              }>
                <IonLabel>Gatos</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/Reptiles"} routerDirection="none" onClick={() =>{
                Haptics.vibrate();
                showToastReptiles();
              }
              }>
                <IonLabel>Reptiles</IonLabel>
              </IonItem>
              </IonMenuToggle>
              <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/Roedores"} routerDirection="none" onClick={() =>{
                Haptics.vibrate();
                showToastRoedores();
              }
              }>
                <IonLabel>Roedores</IonLabel>
              </IonItem>
              </IonMenuToggle>
              <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/Peces"} routerDirection="none" onClick={() =>{
                Haptics.vibrate();
                showToastPeces();
              }
              }>
                <IonLabel>Peces</IonLabel>
              </IonItem>
              </IonMenuToggle>
              <IonMenuToggle auto-hide="false">
              <IonItem button routerLink={"/Contacto"} routerDirection="none" onClick={() =>{
                Haptics.vibrate();
                showToastContacto();
              }
              }>
                <IonLabel>Contacto</IonLabel>
              </IonItem>
              </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  };